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
        {/* Pictures display; props: photos array */}
        {photos.length !== 0 && <PicsDisplay photos={photos} showed={0} />}
      </main>
      <Footer />
    </>
  );
};

export default App;
