import React from "react";
import {TrifoldEumaxArray} from "../../../../assets/assetschild"

function TrifoldEumix() {
  return (
    <>
      {TrifoldEumaxArray.map((item, index) => (
        <main key={index}>
          <img
            src={item}
            alt="Sample WebP Image"
            className="responsive-image"
          />
        </main>
      ))}
    </>
  );
}

export default TrifoldEumix;
