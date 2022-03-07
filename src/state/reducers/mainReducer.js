const initialState = {
  currentStepId: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'nextStep':
      return {
        ...initialState,
        currentStepId: action.payload,
      };

    case 'previousStep':
      if (state.currentStepId > 1) {
        return {
          ...initialState,
          currentStepId: action.payload,
        };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
