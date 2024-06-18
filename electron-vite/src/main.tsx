import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter} from "react-router-dom";
import { RouterWrapper } from './View/Components/RouterWrapper';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterWrapper/>
    </BrowserRouter>
  </React.StrictMode>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
