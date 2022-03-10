import { useEffect } from 'react';
import Button from '@mui/material/Button';
import classes from './ResultPage.module.scss';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
const ResultPage = () => {
  const dispatch = useDispatch();
  const {
    setCurrentStepId,
    setResultPageMounted,
    setAddingNewSubgenre,
    setSelectedSubgenreId,
    setSelectedGenreId,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setResultPageMounted(true);

    return () => {
      setResultPageMounted(false);
    };
  });

  return (
    <div className={classes.mainContainer}>
      <img src="https://i.postimg.cc/C1f76TSv/checkmark.png" alt="checkmark" />
      <p>Book added succesfully</p>
      <Button
        style={{
          background: '#525a66',
          color: '#fff',
          height: '40px',
          width: '220px',
          margin: 'auto',
          fontSize: '12px',
        }}
        onClick={() => {
          setCurrentStepId(1);
          setSelectedGenreId();
          setSelectedSubgenreId();
          setAddingNewSubgenre();
        }}
      >
        Add another book
      </Button>
    </div>
  );
};

export default ResultPage;
