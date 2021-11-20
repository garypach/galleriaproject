import axios from "axios";
import GALLERY from "../constants";

export const requestGallery = () => async (dispatch) => {
  dispatch({
    type: GALLERY.LOAD,
  });
  try {
    const json = await axios.get("data.json");
    console.log(json);
    dispatch({
      type: GALLERY.LOAD_SUCCESS,
      galleryData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: GALLERY.LOAD_SUCCESS,
      galleryData: [],
      isError: true,
    });
  }
};