const toString = Object.prototype.toString
export function isPlainObject(obj:any):boolean {
  return toString.call(obj) === '[object:Object]'
}