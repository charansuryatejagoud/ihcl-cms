import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {structure} from './desk'
import {colorInput} from '@sanity/color-input'
import {readExcel} from './plugins/read-excel'
import {codeInput} from '@sanity/code-input'

export default defineConfig([
  {
    name: 'production',
    title: 'IHCL-TAJ-SANITY - Production',
    projectId: 'ocl5w36p',
    dataset: 'production',
    basePath: '/production',
    plugins: [deskTool({structure}), visionTool(), media(), colorInput(), codeInput()],
    schema: {
      types: schemaTypes,
    },
    tools: [readExcel()],
  },
  {
    name: 'develop',
    title: 'IHCL-TAJ-SANITY - Develop',
    projectId: 'ocl5w36p',
    dataset: 'dev',
    basePath: '/dev',
    plugins: [deskTool({structure}), visionTool(), media(), colorInput(), codeInput()],
    schema: {
      types: schemaTypes,
    },
    tools: [readExcel()],
  },
  {
    name: 'sit',
    title: 'IHCL-TAJ-SANITY - Staging',
    projectId: 'ocl5w36p',
    dataset: 'sit',
    basePath: '/staging',
    plugins: [deskTool({structure}), visionTool(), media(), colorInput(), codeInput()],
    schema: {
      types: schemaTypes,
    },
    tools: [readExcel()],
  },
])
