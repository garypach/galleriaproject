import GALLERY from "../constants";

const initalState = {
  galleryData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GALLERY.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GALLERY.LOAD_SUCCESS:
      return {
        ...state,
        galleryData: action.galleryData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;