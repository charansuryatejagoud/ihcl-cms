import {find} from 'lodash'
import {createClient, ClientConfig} from '@sanity/client'
import {v4 as uuidv4} from 'uuid'
import {supportedDocumentFormats} from './constants'
import {Rule} from 'sanity'

export const linkType = {
  internal: 'internal',
  external: 'external',
  dialog: 'dialog',
  externalApplication: 'externalApplication',
}

export const hiddenField = {
  name: 'isHidden',
  title: 'Hide this item',
  description: 'If hidden, this item will NOT be included on the client side',
  type: 'boolean',
}

export const pathUrlRule = (Rule: Rule) =>
  Rule.uri({
    allowRelative: true,
    scheme: ['https', 'http', 'mailto', 'tel', 'app'],
  })

export const videoUrlRule = (Rule: Rule) =>
  Rule.uri({
    allowRelative: false,
    scheme: ['https'],
  })

export function isAdminUser(currentUser: {roles: any}) {
  const adminRole = find(currentUser.roles, (x) => x.name.includes('administrator'))

  return !!adminRole
}

export function getSanityClient(dataset: 'production' | 'staging' | 'develop' = 'develop') {
  const config: ClientConfig = {
    projectId: 'ocl5w36p',
    dataset,
    apiVersion: 'v2021-10-21',
    token:
      'skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc',
    useCdn: false,
  }

  return createClient(config)
}

export const fileValidationRule = (Rule: Rule) =>
  Rule.required().custom((fields: any) => {
    let ext
    if (fields?._upload) {
      const nameChunks = fields?._upload?.file?.name?.split('.') || []
      ext = nameChunks[nameChunks.length - 1]
    }
    if (fields?.asset) {
      const nameChunks = fields?.asset?._ref?.split('-') || []
      ext = nameChunks[nameChunks.length - 1]
    }
    if (!ext || !supportedDocumentFormats.includes(ext?.toLowerCase()))
      return `${
        ext || 'File'
      } is not supported. Only supported file types are ${supportedDocumentFormats.join(', ')}`
    return true
  })

export function getNavItems(array: any[]) {
  return array.map((obj) => {
    return {
      name: obj.value,
      title: obj.title,
      type: 'boolean',
      initialValue: false,
    }
  })
}
