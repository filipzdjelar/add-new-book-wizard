import Stepper from '../../atoms/Stepper/Stepper';
import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import classes from './SelectGenre.module.scss';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { data } from '../../../data/data';
function SelectGenre() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [activeButtonId, setActiveButtonId] = useState();

  let cx = classNames.bind(classes);

  return (
    <div className={classes.wrapper}>
      <Stepper />
      <div className={classes.buttonGroup}>
        {data.genres.map((genre) => (
          <Button
            key={genre.id}
            onClick={() => {
              setActiveButtonId(genre.id);
            }}
            className={cx({
              buttonActive: activeButtonId == genre.id,
            })}
          >
            {genre.name}
          </Button>
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
}

export default SelectGenre;
