import pexels from "../js/pexels";

const Form = (props) => {
  const { setPhotos, per_page } = props;
  return (
    <form>
      <select name="languages" id="language-select">
        <option value="fr-FR" selected>
          Français
        </option>
        <option value="en-US">English</option>
        <option value="de-DE">Deutsch</option>
      </select>
      <input type="text" id="theme-input" placeholder="Saisir un thème" />
      <button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          // Get user choices
          const language = document.querySelector("#language-select").value;
          const theme = document.querySelector("#theme-input").value;
          //   Get pictures
          const photos = await pexels(language, theme, per_page);
          setPhotos(photos);
        }}
      >
        Afficher les images
      </button>
    </form>
  );
};

export default Form;
