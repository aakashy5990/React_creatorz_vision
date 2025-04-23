import React from "react";
import { EumaxArray } from "../../../../assets/assetschild.js";

function Eumix() {
  return (
    <>
      {EumaxArray.map((item, index) => (
        <main key={index}>
          <img src={item} alt="Sample WebP Image" className="responsive-image" />
        </main>
      ))}
    </>
  );
}

export default Eumix;
