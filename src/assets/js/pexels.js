// Pexels API requests

import { createClient } from "pexels";

const key = "bdmwlCqOFEOtjDm8xiKnOCtzuT1SDB3REhidbL6qM5nxPz9TuyAFMMRk";
const client = createClient(key);

const pexels = async (language, query, per_page) => {
  try {
    const response = await client.photos.search({
      query,
      per_page,
      locale: language,
    });
    //   Array of photos
    const { photos } = response;
    return photos;
  } catch (error) {
    console.log(error.message);
  }
};
export default pexels;
