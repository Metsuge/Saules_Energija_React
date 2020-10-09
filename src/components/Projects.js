import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import Pagination from "./Pagination";

import "../Styles/buttons.css";
let selectedList = [];

const Projects = ({ onObjectClick, listOfObjectsLT, t, onLoad }) => {
  let [objectTag, setTag] = useState("all");
  let [projectList, setprojectList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  let input = null;

  useEffect(() => {
    setprojectList(listOfObjectsLT);
  }, []);

  //setting the state
  const changeState = () => setTag((objectTag = input));

  if (objectTag === "all") {
    selectedList = projectList;
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
  const currentPosts = listOfObjectsLT.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  return (
    <>
      <div onLoad={onLoad()}>
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

        <div className="pagrindinis-div">
          <div className="img-section-projects">
            {currentPosts.map((oneObject) => {
              return (
                <Link to={`/object/${oneObject.id}`}>
                  <div
                    onClick={() => onObjectClick(oneObject.id)}
                    className="each-img"
                  >
                    <img alt="" className="darbai-img" src={oneObject.src} />

                    {/* <div className="text-section">
                      <p className="textonimg">
                        {t(`listOfObjectsLT.id${oneObject.id}.introtext`)}
                      </p>
                    </div> */}
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={listOfObjectsLT.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(Projects);
