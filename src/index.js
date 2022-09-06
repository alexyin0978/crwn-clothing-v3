//hooks
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

//context
import { UserContextProvider } from './contexts/User.context';
import { ShopItemContextProvider } from './contexts/ShopItem.context';

//style
import './index.scss';

//component
import App from './App';

//others
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ShopItemContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShopItemContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
