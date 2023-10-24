import React, {useRef, useState} from 'react'
import {Button, Flex} from '@sanity/ui'
import * as XLSX from 'xlsx'
import {client} from '../client'
import {TYPE_DESTINATION, TYPE_DESTINATION_SEO_INFO} from '../constants'
import {ImportComponent} from '../types'
import {customAlphabet} from 'nanoid'
import {destinationNavigation} from '../../../utils/constants'

function extractDestinationsSeo({data, prevData}: any) {
  const seoData: any = {}
  const index = prevData.findIndex(function (item: any) {
    return item.identifier == data.Identifier?.trim()
  })
  data?.Tab && (seoData.navigation = data?.Tab?.trim())
  data?.Title && (seoData.seoTitle = data?.Title?.trim())
  data?.Description && (seoData.seoDescription = data?.Description?.trim())
  data?.Keywords && (seoData.seoKeywords = data?.Keywords?.trim())
  if (index == -1) {
    return [
      ...prevData,
      {
        name: data?.Destination?.trim(),
        identifier: data?.Identifier?.trim(),
        seoInfo: [{...seoData}],
      },
    ]
  } else {
    prevData[index] = {
      ...prevData[index],
      seoInfo: [...prevData[index].seoInfo, seoData],
    }
    return [...prevData]
  }
}

function DestinationsSeo({callBack, getLoader}: ImportComponent) {
  const ref: any = useRef()
  const [destinationsSeoData, setDestinationsSeoData] = useState<object[]>([])
  const {UpdateLoader} = getLoader()

  const handleFile = async (e: any) => {
    e.preventDefault()
    if (e?.target?.files) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e?.target?.result
        const workbook = XLSX.read(data, {type: 'array'})
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        jsonData.map((data: any) => {
          setDestinationsSeoData((prevData) => {
            return extractDestinationsSeo({data: data, prevData: prevData})
          })
        })
      }
      reader.readAsArrayBuffer(e?.target?.files[0])
    }
  }
  console.log(destinationsSeoData)

  const migrateExcelData = async (
    callBack: Function,
    UpdateLoader: (arg0: {status: boolean; message?: string}) => void
  ) => {
    callBack()
    UpdateLoader({
      status: true,
      message: 'Processing Import!!',
    })
    destinationsSeoData.map(async (destination: any, index) => {
      await client
        .fetch(
          `*[_type == "${TYPE_DESTINATION}" && identifier == "${destination?.identifier?.trim()}"]{...}
          `
        )
        .then(async (res) => {
          if (res?.length > 0) {
            await res.map(async (doc: any) => {
              await updateDocument(destination, doc, index, callBack)
            })
          } else {
            callBack({
              status: 'Document not found in sanity',
              response: {_id: null, title: destination?.identifier},
            })
            // await createDocument(offer, index, callBack);
          }
        })
      UpdateLoader({status: false})
    })
  }

  function resetFile(): void {
    ref.current.value = ''
    setDestinationsSeoData([])
    callBack()
  }

  return (
    <Flex marginTop={4} align={'center'} style={{justifyContent: 'space-evenly'}}>
      <input type="file" onChange={handleFile} ref={ref}></input>
      {destinationsSeoData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {destinationsSeoData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate excel data"
          onClick={() => {
            migrateExcelData(callBack, UpdateLoader)
          }}
        />
      )}
    </Flex>
  )
}

async function updateDocument(data: any, document: any, index: number, callBack: Function) {
  console.log('updating ', document._id, document?.identifier)
  const response = await client
    .patch(document._id)
    .set({...getDestinationDoc({excelData: data, document: document})})
    .commit()
    .then((res) => {
      console.log(index + 1, ' Updated!', res?.title)
      return {
        status: 'Updated',
        response: res,
      }
    })
    .catch((err) => {
      console.error(
        'Oh no, the update failed at: ',
        document._id,
        data?.identifier,
        'Error : ',
        err.message
      )
      return {
        status: 'Failed to Update',
        response: {
          _id: document._id,
          identifier: data?.identifier,
          error: err,
        },
      }
    })
  callBack(response)
}

async function createDocument(data: any, index: number, callBack: Function) {
  console.log('Creating...', data.identifier)
  const response = await client
    .create(getDestinationDoc({excelData: data}))
    .then((res) => {
      console.log(index + 1, 'Created  = ', data.identifier, res._id)
      return {
        status: 'Created',
        response: res,
      }
    })
    .catch((err) => {
      console.log('failed to create', data.identifier)
      console.log('err ', err)
      return {
        status: 'Failed to Create',
        response: {_id: null, identifier: data?.identifier, error: err},
      }
    })
  callBack(response)
}

function getDestinationDoc(
  {excelData, document = null, type = TYPE_DESTINATION}: any,
  returnObject: any = {}
) {
  const nanoid = customAlphabet('1234567890abcdef', 12)
  if (!document) {
    returnObject._type = type
    returnObject.identifier = excelData?.identifier?.trim()
    returnObject.name = excelData?.name?.trim()
  }
  if (excelData?.seoInfo?.length > 0) {
    returnObject.seoInfo = excelData?.seoInfo?.map(
      (seo: {navigation: string; seoTitle: any; seoDescription: any; seoKeywords: any}) => {
        return {
          _key: nanoid(),
          _type: TYPE_DESTINATION_SEO_INFO,
          navigation:
            destinationNavigation?.filter((data) => data.title == seo?.navigation)?.[0]?.value ??
            seo?.navigation?.toLowerCase(),
          title: seo?.seoTitle,
          description: seo?.seoDescription,
          keywords: seo?.seoKeywords,
        }
      }
    )
  }
  return returnObject
}

export default DestinationsSeo
