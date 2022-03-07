import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import classes from './SelectGenre.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { data } from '../../../data/data';

function SelectGenre({ setSelectedGenreId, selectedGenreId }) {
  let cx = classNames.bind(classes);

  return (
    <>
      <div className={classes.buttonGroup}>
        {data.genres.map((genre) => (
          <Button
            key={genre.id}
            onClick={() => {
              setSelectedGenreId(genre.id);
            }}
            className={cx({
              buttonActive: selectedGenreId === genre.id,
            })}
          >
            {genre.name}
          </Button>
        ))}
      </div>
      <NavigationButtons optionSelected={selectedGenreId} />
    </>
  );
}

export default SelectGenre;
