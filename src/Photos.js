import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          {props.photos.map(function (photo, index) {
            return (
              <div className="row">
                <div className="col-4">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    alt="word-searched"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    alt="word-searched"
                    className="img-fluid"
                  />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
