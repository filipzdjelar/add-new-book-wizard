export const nextStep = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'nextStep',
      payload: value,
    });
  };
};

export const previousStep = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'previousStep',
      payload: value,
    });
  };
};
