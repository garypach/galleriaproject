import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetGallery} from "../actions/GalleryActions";
import _ from "lodash";
import './gallery.css'
import {Link} from "react-router-dom";
import Header from "./header/Header";


const Gallery = (props) => {
  const galleryName = props.match.params.gallery;
  const idx = parseInt(props.match.params.idx);

  const dispatch = useDispatch();
  const galleryState = useSelector(state => state.Gallery);
  React.useEffect(() => {
    dispatch(GetGallery(galleryName))
  }, [dispatch,galleryName]);

  const add = (idx) =>{
    return idx + 1;
  }
  const sub = (idx) =>{
    return idx - 1;
  }
  const showArrows=()=>{
    const Data = galleryState.data[galleryName];

    if (idx < 14 && idx !== 0){
      return (
        <div>
           <Link to={`/${sub(idx)}/${Data[sub(idx)].name}`}>
          <img src="/shared/icon-back-button.svg" alt="back"/>
        </Link> 
           <Link to={`/${add(idx)}/${Data[add(idx)].name}`}>
          <img src="/shared/icon-next-button.svg" alt="next"/>
        </Link>
        </div>
      )
    }
    if (idx === 0){
      return (
        <Link to={`/${add(idx)}/${Data[add(idx)].name}`}>
        <img src="/shared/icon-next-button.svg" alt="next"/>
      </Link>
      )
    }
    if (idx === 14){
      return (
        <Link to={`/${sub(idx)}/${Data[sub(idx)].name}`}>
          <img src="/shared/icon-back-button.svg" alt="back"/>
        </Link> 
      )
    }
  }
  const ShowData = () => {
    if (!_.isEmpty(galleryState.data[galleryName])) {
      const Data = galleryState.data[galleryName];
      console.log(Data[idx])
          return (
            <div key={Data[idx].id} className="gallery-container">
            <div className="gallery-content">
              <img src={`/${Data[idx].images.hero.small}`} alt ='gallery'/>
              <div className="gallery-info">
              <h1>{Data[idx].name}</h1>
              <h1>{Data[idx].artist.name}</h1>
              </div>

            </div>
            <div className="gallery-year">
                <div className="artist">
                <img src={`/${Data[idx].artist.image}`} alt ='artist'/>
                </div>

                <div className="year">
                {Data[idx].year}
                </div>
                <div className="gallery-text">
                
                {Data[idx].description}
              </div>
              </div>

              <div className="gallery-next">
                <div className="gallery-next-left">
                <p>{Data[idx].name}</p>
              <p>{Data[idx].artist.name}</p>
                </div>
                <div className="gallery-next-right">
                  {showArrows()}
                </div>
              </div>
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
      <Header/>
      {ShowData()}
    </div>
  )
};

export default Gallery