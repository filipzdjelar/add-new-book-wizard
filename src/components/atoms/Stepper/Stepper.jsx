import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { makeStyles } from '@material-ui/core';
const steps = ['Genre', 'Subgenre', 'Add new subgenre', 'Information'];

// const useStyles = makeStyles({});

export default function Steppoer() {
  //   const classes = useStyles();
  return (
    <Box style={{ margin: 'auto' }} sx={{ width: '50%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
