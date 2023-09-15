import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GalleryList from "../GalleryList/GalleryList";

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
        console.log("error in GET App", error);
      });
  };

  return (
    <div className="App">
      <Header />
      <GalleryList galleryList={galleryList}/>
      <Footer/>
    </div>
  );
}

export default App;
