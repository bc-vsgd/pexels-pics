import { useState } from "react";
import picsButton from "../js/picsButton";

const PicsDisplay = (props) => {
  const { photos, showed } = props;
  // To change index of central (showed) picture when clicking on previous or next buttons
  const [index, setIndex] = useState(showed);
  console.log("PicsDisplay", index);
  return (
    <div className="btn-and-pics-div">
      <button
        id="prev-btn"
        onClick={() => {
          picsButton(photos.length, index, setIndex, "-");
        }}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div className="pics-display-div">
        <div className="showed">
          <img src={photos[index].src.large} alt={photos[index].alt} />

          <a href={photos[index].photographer_url} target="_blank">
            {photos[index].photographer}
          </a>
          <a href={photos[index].url} target="_blank">
            Pexels.com
          </a>
        </div>
        {/* {photos.map((photo, ind) => {
          return (
            <div key={ind} className={index === ind ? "showed" : undefined}>
              <img src={photo.src.large} alt={photo.alt} id={`img-${ind}`} />

              <a href={photo.photographer_url} target="_blank">
                {photo.photographer}
              </a>
              <a href={photo.url} target="_blank">
                Pexels.com
              </a>
            </div>
          );
        })} */}
      </div>
      <button
        id="next-btn"
        onClick={() => {
          picsButton(photos.length, index, setIndex, "+");
        }}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PicsDisplay;
