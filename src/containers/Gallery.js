import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetGallery} from "../actions/GalleryActions";
import _ from "lodash";

const Gallery = (props) => {
  const galleryName = props.match.params.name;
  const dispatch = useDispatch();
  const galleryState = useSelector(state => state.Gallery);
  React.useEffect(() => {
    dispatch(GetGallery(galleryName))
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(galleryState.data[galleryName])) {
      const pokeData = galleryState.data[galleryName];
      console.log(pokeData)
      return(
        <div className={"gallery-wrapper"}>
          {pokeData.name}
        </div>
      )
    }

    if (galleryState.loading) {
      return <p>Loading...</p>
    }

    if (galleryState.errorMsg !== "") {
      return <p>{galleryState.errorMsg}</p>
    }

    return <p>error getting gallery</p>
  }

  return(
    <div className={"poke"}>
      <h1>{galleryName}</h1>
      {ShowData()}
    </div>
  )
};

export default Gallery