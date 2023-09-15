import { useState } from "react";

function GalleryForm({addGallery}) {
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGallery(path, description);
    setPath("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Image Link:</label>
      <input
        onChange={(event) => setPath(event.target.value)}
        value={path}
      />
      <label>Description:</label>
      <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default GalleryForm;