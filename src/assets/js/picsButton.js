const picsButton = (
  index,
  setIndex,
  per_page,
  widthCounter,
  setWidthCounter,
  action
) => {
  if (action === "+" && index < per_page - 1) {
    const pic = document.querySelector(`#img-${index}`);
    // console.log(pic.clientWidth);
    const picWidth = pic.clientWidth;
    const div = document.querySelector(".pics-display-div > div");
    if (action === "+") {
      div.style.transform = `translate(-${widthCounter + picWidth}px)`;
      setWidthCounter(widthCounter + picWidth);
      setIndex(index + 1);
    }
  } else if (action === "-" && index > 0) {
    const pic = document.querySelector(`#img-${index - 1}`);
    // console.log(pic.clientWidth);
    const picWidth = pic.clientWidth;
    const div = document.querySelector(".pics-display-div > div");
    div.style.transform = `translate(${widthCounter + picWidth}px)`;
    setWidthCounter(widthCounter - picWidth);
    setIndex(index - 1);
  }
  console.log(action);
};

export default picsButton;
