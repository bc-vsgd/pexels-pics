const picsButton = (length, index, setIndex, action) => {
  if (action === "-") {
    index--;
    if (index < 0) {
      index = length - 1;
    }
  } else if (action === "+") {
    index++;
    if (index >= length) {
      index = 0;
    }
  }
  console.log(index);
  setIndex(index);
};

export default picsButton;
