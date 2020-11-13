import React, { useState, useEffect, Suspense } from "react";
import SuspenseImg from "../Additional/SuspenseImg";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import './modal.css';


import Modal from "react-modal";
import ModalComponent from "./Modal"
import Pagination from "../Additional/Pagination";

import "../buttons.css";
// import { logDOM } from "@testing-library/react";
let selectedList = [];

const Projects = ({ onObjectClick, listOfObjectsLT, listOfBiggerPics, t, onLoad }) => {
  let [objectTag, setTag] = useState("all");
  let [projectList, setprojectList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12); //12 projects per page
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [number, setNumber] = useState(0);
  let input = null;

  const changeState = () => setTag((objectTag = input));
  //dropdown selection when page is loaded:
  if (objectTag === "all") {
    selectedList = projectList;
  }

 
  useEffect(() => {
    setprojectList(listOfObjectsLT);
    

  }, [objectTag]);

 

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
    // getTagList();
  };

  const clickProject =(id)=>{
    onObjectClick(id);
    setModalIsOpen(true);
    setNumber(id);
  }

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
                <option className="select-option" value="all">
                  All
                </option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2013-2018">2013-2018</option>
                <option value="2010-2013">2010-2013</option>
                <option value="2000-2010">2000-2010</option>
                <option value="1990-2000">1990-2000</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pagrindinis-div">
          <div className="img-section-projects">
            <Suspense fallback={"Loading..."}>
              <div >
                <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}  >
                <div className='close-button-div'>
                  <button className="button" onClick={() => {setModalIsOpen(false)}}>Close</button>
                </div>
                 <ModalComponent t={t} isOpen={modalIsOpen} number={number} listOfBiggerPics={listOfBiggerPics} ></ModalComponent>
                
                </Modal>
              </div>

              {currentPosts.map((oneObject) => {
                return (
                  <>
                    <div
                      id="projectImg"
                      onClick={()=>clickProject(oneObject.id)}
                      className="each-img"
                      >
                      <SuspenseImg src={oneObject.src} />

                      {/* <div className="text-section">
                	      <p className="textonimg">
                	        {t(`listOfObjectsLT.id${oneObject.id}.introtext`)}
                	      </p>
                	    </div> */}
                    </div>
                  </>
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
