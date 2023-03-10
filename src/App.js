import { Button, Typography } from "@mui/material";
import { Settings, Add} from '@mui/icons-material';
function App() {
  return (
    <div>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
    <Button variant="contained" color="secondary" size="small">Contained</Button>
    <Button variant="outlined" disabled >Outlined</Button>
    <Button startIcon={<Settings />} variant="outlined" >Settings </Button>
    <Button startIcon={<Add />} variant="contained" color="success" size="medium">Contained</Button>

    <Typography variant="h1">
      It uses H1 Styles but it's a P tag
    </Typography>

    </div>
  );
}

export default App;
