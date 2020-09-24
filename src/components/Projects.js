import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "../Styles/buttons.css";
let selectedList = [];

const Projects = ({ onObjectClick, listOfObjectsLT, t }) => {
  let [objectTag, setTag] = useState("all");
  let input = null;

  //setting the state
  const changeState = () => setTag((objectTag = input));

  if (objectTag === "all") {
    selectedList = listOfObjectsLT;
  }

  //uzdeda pilka kai paspaudi, galima pasirinkti kelis tagus
  // const addClass = () =>{
  //   //the one that's clicked now
  //   let clickedBtn = document.getElementById(objectTag);
  //   clickedBtn.classList.toggle('active_button')
  // }

  const objectTagList = [""];

  const getTagList = () => {
    objectTagList.push(objectTag);
  };

  const ObjectsToRender = () => {
    selectedList = []; //list of objects to be rendered
    //addClass()
    for (let i = 0; i < listOfObjectsLT.length; i++) {
      if (listOfObjectsLT[i].tag === objectTag) {
        selectedList.push(listOfObjectsLT[i]);
      }
    }
  };

  //onclick paleidziamos funkcijos
  const getInput = (fromOnClick) => {
    input = fromOnClick;
    changeState();
    ObjectsToRender();
    getTagList();
  };

  return (
    <>
      <p className="h2">{t("DarbaiLT.title")}</p>

      <div>
        <ul className="buttonList">
          <li>
            <button
              className="tag_button"
              id="all"
              type="button"
              name="all"
              onClick={(e) => {
                getInput(e.target.name);
              }}
            >
              {t("Projects.all")}
            </button>
          </li>
          <li>
            <button
              className="tag_button"
              id="2019"
              type="button"
              name="2019"
              onClick={(e) => {
                getInput(e.target.name);
              }}
            >
              2019
            </button>
          </li>
          <li>
            <button
              className="tag_button 2020"
              id="2020"
              type="button"
              name="2020"
              onClick={(e) => {
                getInput(e.target.name);
              }}
            >
              2020
            </button>
          </li>
        </ul>
      </div>

      <div className="img-section">
        {selectedList.map((oneObject) => {
          return (
            <Link to={`/object/${oneObject.id}`}>
              <div
                onClick={() => onObjectClick(oneObject.id)}
                className="each-img"
              >
                
                  <img alt="" className="darbai-img" src={oneObject.src} />
              

                <div className="text-section">
                  <p className="textonimg">
                    {t(`listOfObjectsLT.id${oneObject.id}.introtext`)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default withTranslation("translation")(Projects);
