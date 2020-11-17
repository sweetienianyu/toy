class ElementWrapper {

}

class TextWrapper {

}
export function createElement(type, attribute, ...children) {
  let e;
  if(typeof type === 'string') {
    e = document.createElement(tagName)
  }else {
    e = new type;
  }
  for(let k in attribute) {
    e.setAttribute(k, attribute[k])
  }
  for(let child of children) {
    if(typeof child === 'string') {
      child = document.createTextNode(child)
    }
    e.appendChild(child)
  }
  return e
}


