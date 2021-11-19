import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestGallery} from "../actions/GalleryActions";
import data from "../data.json";

const GalleryList = (props) => {
  const { galleryData, isLoading } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGallery(data));
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      {galleryData.map((gallery) => {
        return (
          <div key={gallery.id} className="container">
            <div className="content">
              <h1>{gallery.name}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default GalleryList