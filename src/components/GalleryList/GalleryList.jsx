import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, updateGallery }) {
  return (
    <>
      <div className="gallery-container">
        <GalleryItem galleryList={galleryList} updateGallery={updateGallery}/>
      </div>
    </>
  );
}

export default GalleryList;
