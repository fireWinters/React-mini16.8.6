/*
 * @Author: Diana Tang
 * @Date: 2024-10-20 20:04:59
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /React-mini16.8.6/react/react-dom.js
 */
export function render(element, container) {
  const dom = 
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);
  const isProperty = (key) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}