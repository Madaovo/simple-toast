import { getElement, stringToNode } from '../helpers/doms'
import { SimpleClassName } from '../consts'
import { simpleWrapperTitleModels } from '../models'

export function InitTitle(str:string) {
  let content = getElement(SimpleClassName.content)
  let title = stringToNode(simpleWrapperTitleModels(str))
  content.appendChild(title)
}