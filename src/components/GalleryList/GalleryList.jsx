import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, updateGallery }) {
  return (
    <>
      <section className="gallery-container">
        <GalleryItem galleryList={galleryList} updateGallery={updateGallery}/>
      </section>
    </>
  );
}

export default GalleryList;
