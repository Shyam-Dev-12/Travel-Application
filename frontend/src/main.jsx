import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import {store} from './app/store.jsx'


import App from './App.jsx'

const stripePromise = loadStripe("pk_test_51SaJwwC20DuoEzoV7nNifkIycxAuMJLew7AV5uTzSl2wahlswsHcq6iUi7kGceGcdd02tSYR6kwXe5xfudlUL9Qt00z0bebivO")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
