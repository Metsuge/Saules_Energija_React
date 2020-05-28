import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 54.903734, lng: 23.746612 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Contacts = () => {
  return (
    <>
      <p id="kontaktai2" class="h2">
        KONTAKTAI
      </p>
      <div class="container-contacts">
        <ul class="contact-list">
          <li>
            <h3 id="phone">Telefonas:</h3>
            <p>+370 688 54876</p>
          </li>
          <li>
            <h3 id="emaill">El. paštas:</h3>
            <p>saulesenergija@gmail.com</p>
          </li>
          <li>
            <h3 id="adress">Adresas:</h3>
            <p>Virbališkių km., Ringaudų sen., Saulės g. 1, Kaunas</p>
          </li>
          <li>
            <h3 id="companyInfo">Rekvizitai:</h3>
            <p id="companyCode">Įmonės kodas: 302819713</p>
            <p id="VAT">PVM mokėtojo kodas: LT100007003016</p>
          </li>
        </ul>
        <div class="map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=AIzaSyBcbNh4TTSkxDMs0mUuuBYGJqIpB7YcKfE`}
            loadingElement={<div style={{ height: "100%" }}></div>}
            mapElement={<div style={{ height: "100%" }}></div>}
            containerElement={<div style={{ height: "100%" }}></div>}
          />
        </div>
      </div>
    </>
  );
};

export default Contacts;
