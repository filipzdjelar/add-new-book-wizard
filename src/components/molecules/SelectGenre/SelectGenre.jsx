import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import classes from './SelectGenre.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';

const SelectGenre = () => {
  let cx = classNames.bind(classes);
  const dispatch = useDispatch();
  const { setSelectedGenreId } = bindActionCreators(actionCreators, dispatch);
  const genreData = useSelector((state) => state.data.genreData.genres);
  const selectedGenreId = useSelector((state) => state.main.selectedGenreId);
  return (
    <>
      <div>
        {genreData?.map((genreData) => (
          <Button
            key={genreData.id}
            onClick={() => {
              setSelectedGenreId(genreData.id);
            }}
            className={cx({
              buttonActive: selectedGenreId === genreData.id,
            })}
          >
            {genreData.name}
          </Button>
        ))}
      </div>
      <NavigationButtons optionSelected={selectedGenreId} />
    </>
  );
};

export default SelectGenre;
