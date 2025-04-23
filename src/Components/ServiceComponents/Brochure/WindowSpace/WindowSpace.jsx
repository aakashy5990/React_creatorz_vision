import React from "react";
import { WindowSpaceArray } from "../../../../assets/assetschild";

function WindowSpace() {
  return (
    <>
      {WindowSpaceArray.map((item, index) => (
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

export default WindowSpace;
