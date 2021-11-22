import GALLERY from "../constants";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
  };
  
  const GalleryMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case GALLERY.LOAD_SUCCESS:
        return {
          ...state,
          loading: false,
          errorMsg: "",
          data: {
            ...state.data,
            [action.galleryName]: action.payload,
         
          }
        };
      default:
        return state
    }
  };
  
  export default GalleryMultipleReducer