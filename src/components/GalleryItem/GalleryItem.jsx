function GalleryItem({ galleryList }) {
  return (
    <>
    {galleryList.map((gallery) => (
      <div className="item-container">
        <div>
          <img src={gallery.path} />
        </div>
        <div>
          <button>Like</button>
          <p> {gallery.likes} People liked this.</p>
        </div>
      </div>
    ))}
    </>
  );
}

export default GalleryItem;
