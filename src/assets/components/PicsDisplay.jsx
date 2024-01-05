import { useState } from "react";
import picsButton from "../js/picsButton";

const PicsDisplay = (props) => {
  const { photos, num, per_page } = props;
  const [index, setIndex] = useState(num);
  const [widthCounter, setWidthCounter] = useState(0);
  // console.log("PicsDisplayDiv", index, widthCounter);
  return (
    <div className="btn-and-pics-div">
      <button
        id="prev-btn"
        onClick={() => {
          picsButton(
            index,
            setIndex,
            widthCounter,
            setWidthCounter,
            per_page,
            "-"
          );
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="pics-display-div">
        <div>
          {photos.map((photo, ind) => {
            return (
              <div key={ind} className="pic-div">
                <img src={photo.src.large} alt={photo.alt} id={`img-${ind}`} />
                <div>
                  <a href={photo.photographer_url} target="_blank">
                    {photo.photographer}
                  </a>
                  <a href={photo.url} target="_blank">
                    Pexels.com
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        id="next-btn"
        onClick={() => {
          picsButton(
            index,
            setIndex,
            widthCounter,
            setWidthCounter,
            per_page,
            "+"
          );
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PicsDisplay;
