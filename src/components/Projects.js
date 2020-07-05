import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import '../Styles/buttons.css'
let selectedList = [];
const Projects = ({ onObjectClick, listOfObjectsLT, t}) => {
  let [ objectTag, setTag ] = useState('');
 
  // console.log("Selected list: ", selectedList);
  let input = null;
//onclick function

const changeState = () => setTag((objectTag = input));

const ObjectsToRender=()=>{ 
  selectedList = []; 
  for(let i=0;i<listOfObjectsLT.length;i++){
    
    
    if(listOfObjectsLT[i].tag === objectTag){
      selectedList.push(listOfObjectsLT[i])
      console.log(listOfObjectsLT[i].tag, objectTag, selectedList);
    }
  }    
  
}

console.log(selectedList);


const getInput=(fromOnClick)=>{
  
  input=fromOnClick;
  changeState();
  ObjectsToRender()
}
  

  return (
    <>
      <p className="h2">
      {t("DarbaiLT.title")}
      </p>

      <div >
        <ul className="buttonList">
          <li>
            <button type='button' name="all" onClick={(e) => {getInput(e.target.name)}}>All</button>
          </li>
          <li>
            <button type='button' name="2001" onClick={ (e) => {getInput(e.target.name)} }>2001</button>
          </li>
          <li>
            <button type='button' name="2002" onClick={ (e) => {getInput(e.target.name)} }>2002</button>
          </li>
        </ul>
        
      </div>
      
      <div className="img-section">
        {console.log("Rendering:", selectedList)}
        {selectedList.map((oneObject) => {
          
          
          return (
            <Link to={`/object/${oneObject.id}`}>
              <div
                onClick={() => onObjectClick(oneObject.id)}
                className="each-img img1"
              >
                <img alt="" className="darbai-img" src={oneObject.src} />
                <div className="text-container-glass"></div>
                <p className="textonimg">{t(`listOfObjectsLT.id${oneObject.id}.introtext`)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default withTranslation("translation")(Projects);
