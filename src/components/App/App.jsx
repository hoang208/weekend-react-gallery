import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";

function App() {
  //gallery
  let [galleryList, setGalleryList] = useState([]);

  //On load, get gallery
  useEffect(() => {
    getGallery();
  }, []);

  //GET request
  const getGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert("Error Getting");
      });
  };

  //POST request
  const addGallery = (path, description) => {
    axios
      .post("/gallery", {
        path: path,
        description: description,
      })
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        alert("Error Adding");
      });
  };

  //PUT request
  function updateGallery(idToUpdate, likes) {
    axios
      .put(`/gallery/like/${idToUpdate}`, {
        idToUpdate: idToUpdate,
        likes: likes,
      })
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        alert("Error Updating");
      });
  }

  return (
    <div className="App">
      <Header />
      <GalleryForm addGallery={addGallery} />
      <GalleryList galleryList={galleryList} updateGallery={updateGallery} />
      <Footer />
    </div>
  );
}

export default App;
