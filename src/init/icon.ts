import {IconTypes } from '../types'
import { getElement, stringToNode } from '../helpers/doms'
import { SimpleClassName } from '../consts'
import { simpleLoadingIcon, simpleWrapperIconModels } from '../models'

export function InitIcon(types:IconTypes) {
  let content = getElement(SimpleClassName.content)
  let simpleIcon = stringToNode(simpleWrapperIconModels)
  let icons:HTMLElement;
  if (types === 'loading'){
    icons = stringToNode(simpleLoadingIcon)
    simpleIcon.appendChild(icons)
  }
  content.appendChild(simpleIcon)
}