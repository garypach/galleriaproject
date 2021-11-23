import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetGallery} from "../actions/GalleryActions";
import _ from "lodash";
import './gallery.css'


const Gallery = (props) => {
  const galleryName = props.match.params.gallery;
  const dispatch = useDispatch();
  const galleryState = useSelector(state => state.Gallery);
  React.useEffect(() => {
    dispatch(GetGallery(galleryName))
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(galleryState.data[galleryName])) {
      const pokeData = galleryState.data[galleryName];
      console.log('data')
      return pokeData
        .filter(function (item) {
          return (item.name === `${galleryName}`);
        })
        .map(function (gallery) {
          return (
            <div key={gallery.id} className="gallery-container">
            <div className="gallery-content">
              <img src={`${gallery.images.hero.small}`} alt ='gallery'/>
              <div className="gallery-info">
              <h1>{gallery.name}</h1>
              <h1>{gallery.artist.name}</h1>
              </div>

            </div>
            <div className="gallery-year">
                
                <div className="artist">
                <img src={`${gallery.artist.image}`} alt ='artist'/>
                </div>
                <div className="year">
                {gallery.year}
                </div>
                <div className="gallery-text">
                
                {gallery.description}
              </div>
              </div>
            
          </div>
          )
        })
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
      {ShowData()}
    </div>
  )
};

export default Gallery