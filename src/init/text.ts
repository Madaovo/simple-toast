import {simpleWrapperTextModels} from '../models/index'
import { getElement, stringToNode } from '../helpers/doms'
import { SimpleClassName } from '../consts'

export default function InitText(str: string) {
  const content = getElement(SimpleClassName.content)
  content.appendChild(stringToNode(simpleWrapperTextModels(str)))
}