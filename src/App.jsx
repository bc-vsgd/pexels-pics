import "./assets/css/App.css";
import { useState } from "react";
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import PicsDisplay from "./assets/components/PicsDisplay";
import Footer from "./assets/components/Footer";
import pexels from "./assets/js/pexels";

const App = () => {
  const [photos, setPhotos] = useState([]);
  return (
    <>
      <Header />
      <main>
        {/* Form: user choices */}
        <Form setPhotos={setPhotos} />
        {/* <div>
          {photos.length !== 0 && (
            <img src={photos[0].src.medium} alt={photos[0].alt}></img>
          )}
        </div> */}
        {/* Pictures display; props: photos array */}
        {photos.length !== 0 && <PicsDisplay photos={photos} />}
        {/* <PicsDisplay /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
