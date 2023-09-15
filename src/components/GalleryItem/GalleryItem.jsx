import  { useState } from 'react';

function GalleryItem(props) {
    const [clicked, setClicked] = useState(true);
   
  return (
    <>
      <div className="item-container">
        <div>
        {clicked ?
          <img onClick={()=>setClicked(false)} src={props.path} />:
          <img onClick={()=>setClicked(true)} alt={props.description}/>}
        </div>
        <div className='like-container'>
          <button onClick={()=>props.updateGallery(props.id,props.likes)}>Like</button>
          <p> {props.likes} People liked this.</p>
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
