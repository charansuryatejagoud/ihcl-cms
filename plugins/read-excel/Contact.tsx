import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { customAlphabet } from "nanoid";
import { client } from "./client";
import { TYPE_CONTACT } from "./constants";
import { compareValues } from "./utils";

function extractContacts({ data }, returnObject: any = {}) {
  data?.title && (returnObject.title = data?.title);
  data?.phonemobiles && (returnObject.phone = data?.phonemobiles?.split("|"));
  data?.email && (returnObject.email = data?.email?.split("|"));
  data?.businessPhone && (returnObject.businessPhone = data?.businessPhone);
  data?.supportPhone && (returnObject.supportPhone = data?.supportPhone);
  data?.businessEmail && (returnObject.businessEmail = data?.businessEmail);
  data?.supportEmail && (returnObject.supportEmail = data?.supportEmail);
  return returnObject;
}

function Contact() {
  const ref: any = useRef();
  const [contactData, setContactData] = useState([]);
  const nanoid = customAlphabet("1234567890abcdef", 12);

  const handleFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        jsonData.map((data: any) => {
          setContactData((prevData) => [
            ...prevData,
            extractContacts({ data: data }),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(contactData);

  const migrateExcelData = async () => {
    contactData.map(async (contact, index) => {
      await client
        .fetch(`*[_type == "contact" && title == "${contact.title}"][0]{...}`)
        .then(async (res) => {
          if (res) {
            console.log("updating ", res._id);
            await client
              .patch(res._id)
              .set({
                ...getDocument({
                  excelData: contact,
                  document: document,
                }),
              })
              .commit()
              .then((res) => {
                console.log(res?.title + " Updated!");
              })
              .catch((err) => {
                console.error(
                  "Oh no, the update failed: ",
                  res.title,
                  "Error : ",
                  err.message,
                );
              });
          } else {
            console.log("Creating...", contact?.title);
            await client
              .create(getDocument({ excelData: contact }))
              .then((res) => {
                console.log("Created ", res._id);
              })
              .catch((err) => {
                console.log("failed to update");
                console.log("err ", err);
              });
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setContactData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {contactData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {contactData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate excel data"
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

function getDocument({ excelData, document = null }, returnData: any = {}) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  if (!document) {
    returnData._type = TYPE_CONTACT;
    returnData.title = excelData?.title;
  }

  //businessPhone
  const businessPhone = compareValues({
    excelData: excelData,
    documentData: document,
    key: "businessPhone",
  });
  businessPhone && (returnData.businessPhone = businessPhone);

  //supportPhone
  const supportPhone = compareValues({
    excelData: excelData,
    documentData: document,
    key: "supportPhone",
  });
  supportPhone && (returnData.supportPhone = supportPhone);

  //businessEmail
  const businessEmail = compareValues({
    excelData: excelData,
    documentData: document,
    key: "businessEmail",
  });
  businessEmail && (returnData.businessEmail = businessEmail);

  //supportEmail
  const supportEmail = compareValues({
    excelData: excelData,
    documentData: document,
    key: "supportEmail",
  });
  supportEmail && (returnData.supportEmail = supportEmail);

  //email
  const email = getArrayOfStrings({
    excelData: excelData,
    document: document,
    excelKey: "email",
    schemaKey: "email",
    _key: nanoid(),
  });
  email && (returnData.email = email);

  //phone
  const phone = getArrayOfStrings({
    excelData: excelData,
    document: document,
    excelKey: "phone",
    schemaKey: "mobile",
    _key: nanoid(),
  });
  phone && (returnData.phone = phone);
  return returnData;
}

function getArrayOfStrings({
  excelData,
  document = null,
  excelKey,
  schemaKey,
  _key,
}) {
  if (excelData?.[excelKey]) {
    return excelData?.[excelKey]?.map((data) => {
      return {
        _key: _key,
        [schemaKey]: data,
      };
    });
  }
  return null;
}

export default Contact;

/*
const updateContacts = (data, contactData) => {
    let { email, phone } = data;
    const newEmails = contactData.email.map((data) => {
      const filteredData = email.filter((oldData) => oldData.email == data);
      if (filteredData.length != 0) {
        return {
          email: filteredData[0].email,
          _key: filteredData[0]._key,
        };
      } else {
        return {
          email: data,
          _key: nanoid(),
        };
      }
    });
    const newPhone = contactData.phone.map((data) => {
      const filteredData = phone.filter((oldData) => oldData.mobile == data);
      if (filteredData.length != 0) {
        return {
          mobile: filteredData[0].mobile,
          _key: filteredData[0]._key,
        };
      } else {
        return {
          mobile: data,
          _key: nanoid(),
        };
      }
    });
    return {
      email: newEmails,
      phone: newPhone,
    };
  };*/
