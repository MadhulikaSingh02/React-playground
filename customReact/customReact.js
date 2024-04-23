function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  let props = reactElement.props;
  for (const prop in props) {
    //   if (prop === 'children') continue;
    domElement.setAttribute(prop, props.prop); //props[prop]
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Here to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
