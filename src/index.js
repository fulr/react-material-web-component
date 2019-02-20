import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

class VKBComp extends HTMLElement {
  connectedCallback() {
    const jss = create(jssPreset());
    const generateClassName = createGenerateClassName();
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    jss.setup({ insertionPoint: mountPoint });

    const name = this.getAttribute('name');
    ///const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(
      <Index
        mountPoint={mountPoint}
        jss={jss}
        generateClassName={generateClassName}
      />,
      mountPoint
    );
  }
}
customElements.define('vkb-comp', VKBComp);
