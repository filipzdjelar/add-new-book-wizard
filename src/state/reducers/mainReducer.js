const initialState = {
  currentStepId: 1,
  selectedGenreId: '',
  selectedSubgenreId: '',
  addingNewSubgenre: false,
  resultPageMounted: false,
  informationFormMounted: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setCurrentStepId':
      return {
        ...state,
        currentStepId: action.payload,
      };
    case 'setSelectedGenreId':
      return {
        ...state,
        selectedGenreId: action.payload,
      };
    case 'setSelectedSubgenreId':
      return {
        ...state,
        selectedSubgenreId: action.payload,
      };
    case 'setAddingNewSubgenre':
      return {
        ...state,
        addingNewSubgenre: action.payload,
      };
    case 'setResultPageMounted':
      return {
        ...state,
        resultPageMounted: action.payload,
      };
    case 'setInformationFormMounted':
      return {
        ...state,
        informationFormMounted: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
