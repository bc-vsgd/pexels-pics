import "./assets/css/App.css";
import { useState } from "react";
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import PicsDisplay from "./assets/components/PicsDisplay";
import Footer from "./assets/components/Footer";

const App = () => {
  const num = 0;
  const per_page = 10;
  const [photos, setPhotos] = useState([]);
  return (
    <>
      <Header />
      <main>
        {/* Form: user choices */}
        <Form setPhotos={setPhotos} per_page={per_page} />
        {/* Pictures display; props: photos array */}
        {photos.length !== 0 && (
          <PicsDisplay photos={photos} num={num} per_page={per_page} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
