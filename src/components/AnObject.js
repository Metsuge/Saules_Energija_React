import React from "react";



function AnObject ({list, number}) {
 let s = list[number].src
 let n = list[number].name

  

    return (
      <>
      <p className="h2">{n}</p>
        <div className="object-div">
          <img className="object-img" src={s} width="60%" />
        </div>
      </>
    );
  
}

export default AnObject;
