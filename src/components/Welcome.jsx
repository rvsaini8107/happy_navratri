import React from 'react'
import maa from "./../image/maa.png";
import stand from "./../image/stand.png";
// import maa from "./../image/maa.png";
const Welcome = () => {
  return (
    <>
      <div className="welcomeImagepage">
          <div className="diya1"><img src={stand} alt="" className="diya diya1"/></div>
          <div className="mata"><img src={maa} alt="" className="diya mata"/></div>
          <div className="diya2"><img src={stand} alt="" className="diya diya2"/></div>
        </div>
    </>
  )
}

export default Welcome
