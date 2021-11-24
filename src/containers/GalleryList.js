import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestGallery} from "../actions/GalleryActions";
import './gallerylist.css'
import {Link} from "react-router-dom";
import Header from './header/Header'
const GalleryList = (props) => {
  const galleryList = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGallery());
  }, []);


  return (
    <>
      {/* {isLoading && <div className="loading">Data loading...</div>}
      {galleryData.map((gallery) => {
        return (
          <div key={gallery.id} className="thumbnail-container">
            <div className="thumbnail-content">
              <img src={`${gallery.images.thumbnail}`} alt ='thumbnail'/>
              <div className="thumbnail-info">
              <h1>{gallery.name}</h1>
              <h1>{gallery.artist.name}</h1>
              </div>
            </div>
          </div>
        );
      })} */}
      <div>
      <Header/>
      </div>
      <div className={"list-wrapper"}>
          {galleryList.data.map((gallery,idx) => {
           return (
            <div key={gallery.id} className="thumbnail-container">
              <div className={`thumbnail-content gallery__item--${idx}`}>
                <img src={`${gallery.images.thumbnail}`} alt ='thumbnail'/>
                <div className="thumbnail-info">
                  <Link to={`/${idx}/${gallery.name}`}>
                <h1>{gallery.name}</h1>
                </Link>
                <h1>{gallery.artist.name}</h1>
                </div>
              </div>
            </div>
          );
          })}
        </div>
    </>
  );
};
export default GalleryList