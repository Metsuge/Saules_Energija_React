import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

import { withTranslation } from 'react-i18next';

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 54.903734, lng: 23.746612 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

const Contacts = ({ t }) => {
  return (
    <>
    
      <p id="kontaktai2" className="h2">
        {t('contacts.title')}
      </p>
      <div className="container-contacts">
        <ul className="contact-list">
          <li>
            <h3 id="phone">{t('contacts.phone')}</h3>
            <p>+370 688 54876</p>
          </li>
          <li>
            <h3 id="emaill">{t('contacts.email')}</h3>
            <p>saulesenergija@gmail.com</p>
          </li>
          <li>
            <h3 id="adress">{t('contacts.adress')}</h3>
            <p>Virbališkių km., Ringaudų sen., Saulės g. 1, Kaunas</p>
          </li>
          <li>
            <h3 id="companyInfo">{t('contacts.details')}</h3>
            <p id="companyCode">{t('contacts.comp_code')}302819713</p>
            <p id="VAT">{t('contacts.VAT')} LT100007003016</p>
          </li>
        </ul>
        {/* <div className="map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=AIzaSyBcbNh4TTSkxDMs0mUuuBYGJqIpB7YcKfE`}
            loadingElement={<div style={{ height: "100%" }}></div>}
            mapElement={<div style={{ height: "100%" }}></div>}
            containerElement={<div style={{ height: "100%" }}></div>}
          />
        </div> */}
      </div>
    </>
  );
};

export default withTranslation('translation') (Contacts);