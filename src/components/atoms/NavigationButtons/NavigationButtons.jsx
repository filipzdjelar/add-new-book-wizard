import Button from '@mui/material/Button';
import classes from './NavigationButtons.module.scss';
function NavigationButtons() {
  return (
    <div className={classes.buttonsWrapper}>
      <Button
        color="inherit"
        // disabled={activeStep === 0}
        // onClick={handleBack}
        // sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Button
        color="inherit"
        // disabled={activeStep === 0}
        // onClick={handleBack}
        // sx={{ mr: 1 }}
      >
        Next
      </Button>
    </div>
  );
}

export default NavigationButtons;
