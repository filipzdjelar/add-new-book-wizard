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

export default function Steppoer({ addingNewSubgenre }) {
  const currentStepId = useSelector((state) => state.main.currentStepId);
  const [displayedSteps, setDisplayedSteps] = useState([]);
  useEffect(() => {
    function handleDisplayedLabels() {
      if (addingNewSubgenre && currentStepId === 3) {
        return stepsAddingSubgenre;
      }
      if (currentStepId <= 2 && !addingNewSubgenre) {
        return initialSteps;
      } else if (currentStepId > 2 && !addingNewSubgenre) {
        return stepsNotAddingSubegre;
      }
    }

    setDisplayedSteps(handleDisplayedLabels());
  }, [currentStepId, addingNewSubgenre]);

  return (
    <Box style={{ margin: 'auto' }} sx={{ width: '100%' }}>
      <Stepper activeStep={currentStepId - 1} alternativeLabel>
        {displayedSteps?.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
