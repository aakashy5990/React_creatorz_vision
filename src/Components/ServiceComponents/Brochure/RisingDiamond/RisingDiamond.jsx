import React from "react";
import {RisingDiamondArray} from "../../../../assets/assetschild"

function RisingDiamond() {
  return (
    <>
      {RisingDiamondArray.map((item, index) => (
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

export default RisingDiamond;
