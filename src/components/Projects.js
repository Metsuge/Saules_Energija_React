import React, { useState, useEffect, Suspense } from "react";
import SuspenseImg from "./SuspenseImg";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import Pagination from "./Pagination";

import "../Styles/buttons.css";
let selectedList = [];

const Projects = ({ onObjectClick, listOfObjectsLT, t, onLoad }) => {
  let [objectTag, setTag] = useState("all");
  let [projectList, setprojectList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  let input = null;

  const changeState = () => setTag((objectTag = input));

  if (objectTag === "all") {
    selectedList = projectList;
  }

  useEffect(() => {
    setprojectList(listOfObjectsLT);
  }, [objectTag]);
  //uzdeda pilka kai paspaudi, galima pasirinkti kelis tagus
  // const addClass = () =>{
  //   //the one that's clicked now
  //   let clickedBtn = document.getElementById(objectTag);
  //   clickedBtn.classList.toggle('active_button')
  // }

  // setTimeout(() => {
  //   blurrOnImg();
  // }, 2000);

  const objectTagList = [""];

  const getTagList = () => {
    objectTagList.push(objectTag);
  };

  const ObjectsToRender = () => {
    selectedList = []; //list of objects to be rendered
    //addClass()
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].tag === objectTag) {
        selectedList.push(projectList[i]);
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

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = selectedList.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const blurrOnImg = () => {
  //   const imgDOMList = document.getElementsByClassName("projectImg");
  // };

  return (
    <>
      <div onLoad={onLoad()}>
        <p className="h2">{t("DarbaiLT.title")}</p>
        <div>
          <ul className="buttonList">
            <li key="all">
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
            <li key="2019">
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
            <li key="2020">
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

        <div className="pagrindinis-div">
          <div className="img-section-projects">
            <Suspense fallback={"Loading..."}>
              {currentPosts.map((oneObject) => {
                return (
                  <Link to={`/object/${oneObject.id}`}>
                    <div
                      id="projectImg"
                      onClick={() => onObjectClick(oneObject.id)}
                      className="each-img"
                    >
                      <SuspenseImg src={oneObject.src} />

                      {/* <div className="text-section">
                	      <p className="textonimg">
                	        {t(`listOfObjectsLT.id${oneObject.id}.introtext`)}
                	      </p>
                	    </div> */}
                    </div>
                  </Link>
                );
              })}
            </Suspense>
          </div>
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={selectedList.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(Projects);
