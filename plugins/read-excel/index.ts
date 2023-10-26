import {TbTransform} from 'react-icons/tb'
import Homepage from './Homepage'

export const readExcel = () => {
  return {
    title: 'Read Excel',
    name: 'readexcel',
    icon: TbTransform,
    component: Homepage,
  }
}
