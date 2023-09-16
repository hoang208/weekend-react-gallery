import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#E0C1B3' }}>
        <header>
          <Typography variant="h2" gutterBottom>
            Gallery of Iconic Moments
          </Typography>
        </header>
      </AppBar>
    </Box>
  );
}

export default Header;
