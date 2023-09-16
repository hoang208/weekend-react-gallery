import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function GalleryForm({ addGallery }) {
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGallery(path, description);
    setPath("");
    setDescription("");
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Image Link"
                variant="outlined"
                onChange={(event) => setPath(event.target.value)}
                value={path}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Description"
                variant="outlined"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                required
              />
            </Grid>

            <Grid item alignItems="stretch" style={{ display: "flex" }}>
              <Button
                type="submit"
                variant="text"
                size="large"
                disableElevation
                color="success"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default GalleryForm;
