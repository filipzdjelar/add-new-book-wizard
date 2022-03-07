import classes from './BookWizard.module.scss';
import { useSelector } from 'react-redux';
import SelectGenre from '../../molecules/SelectGenre/SelectGenre';
import SelectSubgenre from '../../molecules/SelectSubgenre/SelectSubgenre';
import NewSubgenre from '../../molecules/NewSubgenre/NewSubgenre';
import InformationForm from '../../molecules/InformationForm/InformationForm';
import Steppoer from '../../atoms/Stepper/Stepper';
import { useState, useEffect } from 'react';

function BookWizard() {
  const currentStepId = useSelector((state) => state.main.currentStepId);
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [selectedSubgenreId, setSelectedSubgenreId] = useState();
  const [addingNewSubgenre, setAddingNewSubgenre] = useState(false);

  function displayedComponent() {
    switch (currentStepId) {
      case 1:
        return (
          <SelectGenre
            setSelectedGenreId={setSelectedGenreId}
            selectedGenreId={selectedGenreId}
            addingNewSubgenre={addingNewSubgenre}
          />
        );
      case 2:
        return (
          <SelectSubgenre
            selectedGenreId={selectedGenreId}
            selectedSubgenreId={selectedSubgenreId}
            setSelectedSubgenreId={setSelectedSubgenreId}
            setAddingNewSubgenre={setAddingNewSubgenre}
            addingNewSubgenre={addingNewSubgenre}
          />
        );
      case 3:
        return addingNewSubgenre ? <NewSubgenre /> : <InformationForm />;
      default:
        break;
    }
  }
  useEffect(() => {
    if (currentStepId < 3) setAddingNewSubgenre(false);
  }, [currentStepId]);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.wrapper}>
        <Steppoer addingNewSubgenre={addingNewSubgenre} />
        {displayedComponent()}
      </div>
    </div>
  );
}

export default BookWizard;
