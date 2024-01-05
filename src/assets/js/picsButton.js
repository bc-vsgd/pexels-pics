const picsButton = (
  index,
  setIndex,
  widthCounter,
  setWidthCounter,
  per_page,
  action
) => {
  const div = document.querySelector(".pics-display-div > div");
  const picWidth = document.querySelector(
    ".pics-display-div > div div"
  ).clientWidth;
  if (action === "+" && index < per_page - 1) {
    div.style.transform = `translate(-${widthCounter + picWidth}px)`;
    setWidthCounter(widthCounter + picWidth);
    setIndex(index + 1);
  } else if (action === "-" && index > 0) {
    div.style.transform = `translate(-${widthCounter - picWidth}px)`;
    setWidthCounter(widthCounter - picWidth);
    setIndex(index - 1);
  }
};

export default picsButton;
