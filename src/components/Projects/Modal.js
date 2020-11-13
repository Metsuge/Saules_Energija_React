import React from "react";
import { Link } from "react-router-dom";


const Modal = ({ listOfBiggerPics, number, t }) => {
  return (
    <>
      <Link
        key={listOfBiggerPics[number].id}
        to={`/object/${listOfBiggerPics[number].id}`}
      >
        <button className="button">Full window</button>
      </Link>
      <div className=".img-section-projects">
        <p className="intro-about">
        {t(`listOfObjectsLT.id${listOfBiggerPics[number].id}.title`)}
        </p>
        <img className='modal-img' src={listOfBiggerPics[number].src}></img>

        <div className='modal-div'>
          {listOfBiggerPics[number].pics.map((picture) => {
            return <img className='modal-img' src={picture}></img>;
          })}
        </div>
      </div>
    </>
  );
};

export default Modal;
