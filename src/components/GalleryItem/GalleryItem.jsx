import  { useState } from 'react';

function GalleryItem({ galleryList, updateGallery }) {
    const [clicked, setClicked] = useState(true);
   
  return (
    <>
    {galleryList.map((gallery) => (
      <div className="item-container" key={gallery.id}>
        <div>
        {clicked ?
          <img onClick={()=>setClicked(false)} src={gallery.path} />:
          <img onClick={()=>setClicked(true)} alt={gallery.description}/>}
        </div>
        <div>
          <button onClick={()=>updateGallery(gallery.id,gallery.likes)}>Like</button>
          <p> {gallery.likes} People liked this.</p>
        </div>
      </div>
    ))}
    </>
  );
}

export default GalleryItem;
