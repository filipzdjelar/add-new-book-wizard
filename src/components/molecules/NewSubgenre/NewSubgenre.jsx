import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import { useState } from 'react';

const NewSubgenre = () => {
  const [newSubganre, setNewSubgenre] = useState('');
  return (
    <>
      <TextField
        style={{ marginTop: '20px' }}
        sx={{ width: '80%' }}
        id="subgenre"
        label="Subgenre name"
        variant="outlined"
        placeholder="subgenre"
        onChange={(e) => {
          setNewSubgenre(e.target.value);
        }}
      />
      <FormControlLabel
        sx={{ width: '80%' }}
        control={<Checkbox />}
        label="Description is reqired for this subgenre"
      />
      <NavigationButtons optionSelected={newSubganre} />
    </>
  );
};

export default NewSubgenre;
