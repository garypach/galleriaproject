import axios from "axios";
import GALLERY from "../constants";

export const requestGallery = () => async (dispatch) => {
  axios.defaults.baseURL = 'http://localhost:3000/';

  dispatch({
    type: GALLERY.LOAD,
  });
  try {
    const json = await axios.get("data.json");
    console.log(json);
    dispatch({
      type: GALLERY.LOAD_SUCCESS,
      payload: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: GALLERY.LOAD_SUCCESS,
      data: [],
      isError: true,
    });
  }
};

export const GetGallery = (gallery) => async dispatch => {
  axios.defaults.baseURL = 'http://localhost:3000/';

  try {
    const json = await axios.get("data.json");
    console.log(json);
    dispatch({
      type: GALLERY.LOAD_SUCCESS,
      payload: json.data,
      galleryName: gallery,
    });
  } catch (e) {
    dispatch({
      type: GALLERY.LOAD_SUCCESS,
      data: [],
      isError: true,
    });
  }
};