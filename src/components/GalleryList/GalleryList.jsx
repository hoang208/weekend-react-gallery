import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, updateGallery, deleteGallery }) {
  return (
    <>
      <section className="gallery-container">
      {galleryList.map((gallery) => (
        <GalleryItem 
        key= {gallery.id}
        id={gallery.id}
        path={gallery.path}
        description= {gallery.description}
        likes={gallery.likes}
        updateGallery={updateGallery}
        deleteGallery={deleteGallery}
        />
        ))}
      </section>
    </>
  );
}

export default GalleryList;
