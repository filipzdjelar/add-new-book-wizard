import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import classes from './SelectSubgenre.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { data } from '../../../data/data';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';

function SelectSubgenre({
  selectedGenreId,
  selectedSubgenreId,
  setSelectedSubgenreId,
  setAddingNewSubgenre,
  addingNewSubgenre,
}) {
  let cx = classNames.bind(classes);
  const dispatch = useDispatch();
  const { nextStep } = bindActionCreators(actionCreators, dispatch);
  const currentStepId = useSelector((state) => state.main.currentStepId);
  return (
    <>
      <div className={classes.buttonGroup}>
        {data.genres[selectedGenreId - 1]?.subgenres.map((subgenre) => (
          <Button
            key={subgenre.id - 1}
            onClick={() => {
              setSelectedSubgenreId(subgenre.id);
              setAddingNewSubgenre(false);
            }}
            className={cx({
              buttonActive: selectedSubgenreId === subgenre.id,
            })}
          >
            {subgenre.name}
          </Button>
        ))}
        <Button
          onClick={() => {
            setAddingNewSubgenre(true);
            setSelectedSubgenreId();
            nextStep(currentStepId + 1);
          }}
          className={cx({
            buttonActive: addingNewSubgenre,
          })}
        >
          Add New
        </Button>
      </div>
      <NavigationButtons
        optionSelected={selectedSubgenreId || addingNewSubgenre}
      />
    </>
  );
}

export default SelectSubgenre;
