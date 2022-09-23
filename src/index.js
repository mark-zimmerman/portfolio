import React from 'react';
import ReactDom from 'react-dom';

import { App } from './components';

const appElement = document.getElementById("app");
const root = ReactDom.createRoot(appElement)
root.render(
    <div>
        <App/>
    </div>
)
