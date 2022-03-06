import Stepper from '../../atoms/Stepper/Stepper';
import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import classes from './SelectSubgenre.module.scss';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { data } from '../../../data/data';
function SelectSubgenre() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [activeButtonId, setActiveButtonId] = useState(1);

  let cx = classNames.bind(classes);

  return (
    <div className={classes.wrapper}>
      <Stepper />
      <div className={classes.buttonGroup}>
        {data.genres[0].subgenres.map((subgenre) => (
          <Button
            key={subgenre.id}
            onClick={() => {
              setActiveButtonId(subgenre.id);
            }}
            className={cx({
              buttonActive: activeButtonId == subgenre.id,
            })}
          >
            {subgenre.name}
          </Button>
        ))}
        <Button>Add New</Button>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default SelectSubgenre;
