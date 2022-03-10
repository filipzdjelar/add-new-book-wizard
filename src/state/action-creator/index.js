export const setCurrentStepId = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setCurrentStepId',
      payload: value,
    });
  };
};
export const setGenreData = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setGenreData',
      payload: value,
    });
  };
};
export const setSelectedGenreId = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setSelectedGenreId',
      payload: value,
    });
  };
};
export const setSelectedSubgenreId = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setSelectedSubgenreId',
      payload: value,
    });
  };
};
export const setAddingNewSubgenre = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setAddingNewSubgenre',
      payload: value,
    });
  };
};
export const setResultPageMounted = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setResultPageMounted',
      payload: value,
    });
  };
};
export const setInformationFormMounted = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setInformationFormMounted',
      payload: value,
    });
  };
};
export const setFormOutputData = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setFormOutputData',
      payload: value,
    });
  };
};
export const setNewSubgenreData = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'setNewSubgenreData',
      payload: value,
    });
  };
};
