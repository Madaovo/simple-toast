export type IconTypes = 'success' | 'error' | 'loading' | 'undefined'
export type ButtonTypes = 'primary' | 'error' | 'default' | 'undefined'

/**
 * 参数列表
 */
export interface SimpleToastConfig {
  title?:string
  text?:string
  icon?:IconTypes
  button?:ButtonTypes
  imgUrl?:string
  during?:number
}