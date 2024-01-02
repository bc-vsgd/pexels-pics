import pexels from "../js/pexels";

const Form = (props) => {
  const { setPhotos } = props;
  return (
    <form>
      <label>Choisir la langue</label>
      <select name="languages" id="language-select">
        <option value="fr-FR">Français</option>
        <option value="en-US">English</option>
        <option value="de-DE">Deutsch</option>
      </select>
      <label>
        Saisir un thème
        <input type="text" id="theme-input" />
      </label>
      <button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          // Get user choices
          const language = document.querySelector("#language-select").value;
          const theme = document.querySelector("#theme-input").value;
          //   Get pictures
          const photos = await pexels(language, theme);
          setPhotos(photos);
          console.log(photos);
          console.log(photos[0].url);
        }}
      >
        Afficher les images
      </button>
    </form>
  );
};

export default Form;
