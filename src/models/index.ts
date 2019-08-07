import { SimpleClassName } from '../consts'

export function simpleWrapperModels():string{
  return `<div id="${SimpleClassName.wrapper}"><div id="${SimpleClassName.content}"></div></div>`
}

export function simpleWrapperTitleModels(title:string):string{
  return `<div id="${SimpleClassName.title}">${title}</div>`
}
export const simpleWrapperIconModels = `<div id="simple-icon"></div>`

export const simpleLoadingIcon =  `<div class="simple-loading"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>`

export function simpleWrapperButtonModels(type:string,msg:string):string{
  return `<div id="${SimpleClassName.button}"><button type="button" id="simple-button-${type}">${msg}</button></div>`
}


export function simpleWrapperTextModels(text:string):string{
  return `<div id="${SimpleClassName.text}">${text}</div>`
}

export function simpleWrapperImageModels(url:string):string{
  return `<div id="${SimpleClassName.image}"><img src="${url}" alt="a image"></div>`
}