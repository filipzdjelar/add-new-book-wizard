import classes from './BookWizard.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import SelectGenre from '../../molecules/SelectGenre/SelectGenre';
import SelectSubgenre from '../../molecules/SelectSubgenre/SelectSubgenre';
import NewSubgenre from '../../molecules/NewSubgenre/NewSubgenre';
import InformationForm from '../../molecules/InformationForm/InformationForm';
import ResultPage from '../../molecules/ResultPage/ResultPage';
import StepperSection from '../../atoms/StepperSection/StepperSection';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import { data } from '../../../data/data';

const BookWizard = () => {
  const dispatch = useDispatch();
  const { setGenreData, setAddingNewSubgenre } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const currentStepId = useSelector((state) => state.main.currentStepId);
  const addingNewSubgenre = useSelector(
    (state) => state.main.addingNewSubgenre
  );
  useEffect(() => {
    //simulate some api call
    setGenreData(data);
  }, []);

  useEffect(() => {
    // this will help user if decide instead of adding new subgenre chose existing one
    if (currentStepId < 3) setAddingNewSubgenre(false);
  }, [currentStepId]);

  const displayedComponent = () => {
    switch (currentStepId) {
      case 1:
        return <SelectGenre />;
      case 2:
        return <SelectSubgenre />;
      case 3:
        return addingNewSubgenre ? <NewSubgenre /> : <InformationForm />;
      case 4:
        return !addingNewSubgenre ? <ResultPage /> : <InformationForm />;
      case 5:
        return <ResultPage />;
      default:
        break;
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.wrapper}>
        <StepperSection />
        {displayedComponent()}
      </div>
    </div>
  );
};

export default BookWizard;
