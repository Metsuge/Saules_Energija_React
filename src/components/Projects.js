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
  const [postsPerPage] = useState(12); //12 projects per page
  let input = null;

  const changeState = () => setTag((objectTag = input));
  //dropdown selection when page is loaded:
  if (objectTag === "all") {
    selectedList = projectList;
  }

  useEffect(() => {
    setprojectList(listOfObjectsLT);
  }, [objectTag]);
 

  const objectTagList = [""];

  const getTagList = () => {
    objectTagList.push(objectTag);
  };

  const ObjectsToRender = () => {
    selectedList = []; //list of objects to be rendered
    if (objectTag === "all") {
      selectedList = projectList;
    }
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].tag === objectTag) {
        selectedList.push(projectList[i]);
      }
    }
  };

  //onclick paleidziamos funkcijos
  const getInput = (dropdownValue) => {
    input = dropdownValue;
    changeState();
    ObjectsToRender();
    getTagList();
  };

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = selectedList.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div onLoad={onLoad()}>
        <p className="h2">{t("DarbaiLT.title")}</p>
        <div>
          <div>
            <div className="custom-select">
              <select
                className="select"
                onChange={(e) => getInput(e.target.value)}
              >
                <option className="select-option" value="all" name="all">
                  All
                </option>
                <option value="2020" name="2020">
                  2020
                </option>
                <option value="2019" name="2019">
                  2019
                </option>
                <option value="2013-2018">2013-2018</option>
                <option value="2010-2013">2010-2013</option>
                <option value="2000-2010">2000-2010</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pagrindinis-div">
          <div className="img-section-projects">
            <Suspense fallback={"Loading..."}>
              {currentPosts.map((oneObject) => {
                return (
               
                  <Link key={oneObject.id} to={`/object/${oneObject.id}`}>
                    
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
