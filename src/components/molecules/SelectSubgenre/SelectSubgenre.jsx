import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import classes from './SelectSubgenre.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';

const SelectSubgenre = () => {
  const dispatch = useDispatch();
  const {
    setCurrentStepId,
    setSelectedSubgenreId,
    setAddingNewSubgenre,
    setNewSubgenreData,
  } = bindActionCreators(actionCreators, dispatch);
  const currentStepId = useSelector((state) => state.main.currentStepId);
  const selectedGenreId = useSelector((state) => state.main.selectedGenreId);
  const addingNewSubgenre = useSelector(
    (state) => state.main.addingNewSubgenre
  );
  const genreData = useSelector((state) => state.data.genreData.genres);
  const selectedSubgenreId = useSelector(
    (state) => state.main.selectedSubgenreId
  );
  let cx = classNames.bind(classes);
  return (
    <>
      <div className={classes.buttonGroup}>
        {genreData?.[selectedGenreId]?.subgenres.map((subgenre) => (
          <Button
            key={subgenre.id - 1}
            onClick={() => {
              setSelectedSubgenreId(subgenre.id);
              setAddingNewSubgenre(false);
              setNewSubgenreData({
                name: subgenre.name,
                isDescriptionRequired: subgenre.isDescriptionRequired,
              });
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
            setCurrentStepId(currentStepId + 1);
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
};

export default SelectSubgenre;
