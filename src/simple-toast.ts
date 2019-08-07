// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import {SimpleToastConfig} from './types/index'
import { Init } from './init'
import { getElement, removeChild } from './helpers/doms'
import { SimpleClassName } from './consts'

function simpleToast(config:SimpleToastConfig) {
  // Prevent library to be run in Node env:
  if (typeof window === 'undefined') return;
  Init(config)
}

function removeToast(during:number = 1500) {
 setTimeout(function() {
   hide(during)
 },1500)
}

function hide(during:number) {
  let wrapper = getElement(SimpleClassName.wrapper)
  if (wrapper){
    wrapper.style.transition = `all ${during/1000}s ease`
    wrapper.style.opacity = '0'
    wrapper.addEventListener('transitionend',()=>{
      document.body.removeChild(wrapper)
    })
  }
}

simpleToast.hide = removeToast

export default simpleToast