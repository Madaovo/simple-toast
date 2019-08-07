import { getElement, stringToNode } from '../helpers/doms'
import { SimpleClassName } from '../consts'
import { simpleWrapperImageModels } from '../models'

export function InitImage(imgUrl: string): void {
  let content = getElement(SimpleClassName.content)
  let image = stringToNode(simpleWrapperImageModels(imgUrl))
  content.appendChild(image)
}