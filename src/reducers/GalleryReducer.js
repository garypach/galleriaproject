import GALLERY from "../constants";

const initalState = {
  data: [],
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
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;