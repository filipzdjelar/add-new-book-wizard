import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const initialSteps = ['Genre', 'Subgenre', '...'];
const stepsNotAddingSubegre = ['Genre', 'Subgenre', 'Information'];
const stepsAddingSubgenre = [
  'Genre',
  'Subgenre',
  'Add subgenre',
  'Information',
];

const StepperSection = () => {
  const addingNewSubgenre = useSelector(
    (state) => state.main.addingNewSubgenre
  );
  const resultPageMounted = useSelector(
    (state) => state.main.resultPageMounted
  );
  const currentStepId = useSelector((state) => state.main.currentStepId);
  const [displayedSteps, setDisplayedSteps] = useState([]);
  useEffect(() => {
    const handleDisplayedLabels = () => {
      if (addingNewSubgenre && currentStepId === 3) {
        return stepsAddingSubgenre;
      }
      if (currentStepId <= 2 && !addingNewSubgenre) {
        return initialSteps;
      }
      if (currentStepId === 4 && addingNewSubgenre) {
        return stepsAddingSubgenre;
      }
      if (currentStepId > 2 && !addingNewSubgenre) {
        return stepsNotAddingSubegre;
      }
    };

    setDisplayedSteps(handleDisplayedLabels());
  }, [currentStepId, addingNewSubgenre]);

  return (
    <Box style={{ margin: 'auto' }} sx={{ width: '100%' }}>
      {!resultPageMounted ? (
        <Stepper activeStep={currentStepId - 1} alternativeLabel>
          {displayedSteps?.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      ) : null}
    </Box>
  );
};

export default StepperSection;
