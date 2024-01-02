const PicsDisplay = (props) => {
  const { photos } = props;
  return (
    <div className="pics-display-div">
      {photos.map((photo, ind) => {
        return (
          <div>
            <img src={photo.src.medium} alt={photo.alt} />
            <a href={photo.photographer_url} target="_blank">
              {photo.photographer}
            </a>
            <a href={photo.url} target="_blank">
              Pexels.com
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PicsDisplay;
