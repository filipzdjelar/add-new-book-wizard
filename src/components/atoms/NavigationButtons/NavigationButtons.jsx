import Button from '@mui/material/Button';
import classes from './NavigationButtons.module.scss';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';

const NavigationButtons = ({ optionSelected }) => {
  const currentStepId = useSelector((state) => state.main.currentStepId);
  const informationFormMounted = useSelector(
    (state) => state.main.informationFormMounted
  );
  const dispatch = useDispatch();
  const { setCurrentStepId } = bindActionCreators(actionCreators, dispatch);
  let cx = classNames.bind(classes);

  return (
    <div className={classes.buttonsWrapper}>
      <div
        className={cx({
          buttonDisabled: currentStepId === 1,
        })}
      >
        <Button onClick={() => setCurrentStepId(currentStepId - 1)}>
          Back
        </Button>
      </div>
      <div
        className={cx({
          buttonDisabled: !optionSelected,
        })}
      >
        <Button
          style={{ background: '#525a66', color: '#fff' }}
          onClick={() => setCurrentStepId(currentStepId + 1)}
          form="book-form"
          type="submit"
        >
          {informationFormMounted ? 'Add' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default NavigationButtons;
