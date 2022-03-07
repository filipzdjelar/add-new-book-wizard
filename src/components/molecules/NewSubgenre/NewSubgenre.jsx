import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
function NewSubgenre() {
  return (
    <>
      <TextField
        style={{ marginTop: '20px' }}
        sx={{ width: '80%' }}
        id="outlined-basic"
        label="Subgenre name"
        variant="outlined"
      />
      <FormControlLabel
        sx={{ width: '80%' }}
        control={<Checkbox />}
        label="Description is reqired for this subgenre"
      />
      <NavigationButtons />
    </>
  );
}

export default NewSubgenre;
