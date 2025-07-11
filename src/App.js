import React, { useEffect } from 'react'
import Index from './pages/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CookieConsent from './Component/CookieConsent';
import './assets/css/reposnive.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Index />
        <CookieConsent />
      </Provider>
    </>
  )
}

export default App
