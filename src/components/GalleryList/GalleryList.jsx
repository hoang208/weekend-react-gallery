import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }) {
  return (
    <>
      <div className="gallery-container">
        <GalleryItem galleryList={galleryList} />
      </div>
    </>
  );
}

export default GalleryList;
