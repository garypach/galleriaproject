import {combineReducers} from "redux";
import GalleryMultipleReducer from "./GalleryMultipleReducer";
import reducer from "./GalleryReducer";

const RootReducer = combineReducers({
    reducer,
    Gallery:GalleryMultipleReducer,
});

export default RootReducer;