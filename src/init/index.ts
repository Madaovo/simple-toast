import { getElement, removeChild, createElement, appendChild, stringToNode } from '../helpers/doms'
import {SimpleClassName} from '../consts'
import InitText from './text'
import { SimpleToastConfig } from '../types'
import { simpleWrapperModels } from '../models'
import { InitIcon } from './icon'
import { InitTitle } from './title'
import { InitImage } from './image'

export function Init(config:SimpleToastConfig) {
  // has wrapper ?
  let wrapper = getElement(SimpleClassName.wrapper)
  if (!wrapper) {
    if (!document.body) {
      console.log("You can only use simpleToast AFTER the DOM has loaded!");
    }
    initWrapperOnce()
  }
  // Init icon,button,title,text
  InitContent(config)
}

function initWrapperOnce() {
  let wrapper = stringToNode(simpleWrapperModels())
  document.body.appendChild(wrapper)
}

function InitContent(config:SimpleToastConfig) {
  if (config.imgUrl){
    InitImage(config.imgUrl)
  }
  if (config.icon){
    InitIcon(config.icon)
  }
  if (config.title){
    InitTitle(config.title)
  }
  if (config.text){
    InitText(config.text)
  }
}