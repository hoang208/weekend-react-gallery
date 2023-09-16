import GalleryItem from "../GalleryItem/GalleryItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

function GalleryList({ galleryList, updateGallery, deleteGallery }) {
  return (
    <>
      <Container maxWidth="sm" className="gallery-container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {galleryList.map((gallery) => (
            <GalleryItem
              key={gallery.id}
              id={gallery.id}
              path={gallery.path}
              description={gallery.description}
              likes={gallery.likes}
              updateGallery={updateGallery}
              deleteGallery={deleteGallery}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default GalleryList;
