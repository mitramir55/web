import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Link } from "gatsby"
import Header from '.../components/header'


export default () => { 
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Miti_Mir Website'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Simplefolio'} />
      
      </Helmet>
      
      <App />
    </>
  );
};
