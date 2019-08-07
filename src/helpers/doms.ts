import { strict } from 'assert'
import { stringify } from 'querystring'

export const getElement = (className: string): HTMLElement => {
  const selector = `#${className}`;

  return document.querySelector(selector) as HTMLElement;
};

export function createElement(tag: string): HTMLElement {
  let div = createElement('div')
  div.innerHTML = tag
  return div
}

export function appendChild(parents: HTMLElement, child: HTMLElement) {
  parents.appendChild(child)
}

export function removeChild(parents: HTMLElement, child: HTMLElement) {
  parents.removeChild(child)
}

export const stringToNode = (html: string): HTMLElement => {
  let wrapper: HTMLElement = document.createElement('div');
  wrapper.innerHTML = html.trim();

  return wrapper.firstChild as HTMLElement;
};
