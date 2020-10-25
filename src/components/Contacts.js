import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

import { withTranslation } from "react-i18next";

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 54.903734, lng: 23.746612 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// import zemelapis from "../images/zemelapis.JPG";

const Contacts = ({ t, onLoad }) => {
  return (
    <>
      <div onLoad={onLoad()}>
        <p id="kontaktai2" className="h2">
          {t("contacts.title")}
        </p>
        <div className="mainContainer-contacts">
          {/* <div className="container-contactsMap">
            <img
             alt=""
              className="contact-map"
              src={zemelapis}
              width="100%"
              height="100%"
            ></img>
          </div> */}
          <div className="container-contacts">
            <ul className="contact-list">
              <li key={t("contacts.phone")}>
                <h3 id="phone">{t("contacts.phone")}</h3>
                <p>+370 688 54876</p>
              </li>
              <li key={t("contacts.email")}>
                <h3 id="emaill">{t("contacts.email")}</h3>
                <p>edmundaszilinskas@gmail.com</p>
              </li>
              <li key={t("contacts.adress")}>
                <h3 id="adress">{t("contacts.adress")}</h3>
                <p>Ringaudų sen., Virbališkių km., Saulės g. 1, Kaunas</p>
              </li>
              <li key={t("contacts.details")}>
                <h3 id="companyInfo">{t("contacts.details")}</h3>
                <p id="companyCode">
                  {t("contacts.comp_code")} 302821529, UAB "Sun Lux"
                </p>
                <p id="VAT">{t("contacts.VAT")} LT100007002916</p>
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
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(Contacts);
