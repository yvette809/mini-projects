import React from "react";

const ImageList = (props) => {
  return (
    <div>
      {props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt={image.description}/>;
      })}
    </div>
  );
};

export default ImageList;
