const initialState = {
  genreData: {},
  formOutput: {},
  newSubgenreData: {
    isDescriptionRequired: '',
    name: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setGenreData':
      return {
        ...state,
        genreData: action.payload,
      };
    case 'setFormOutputData':
      return {
        ...state,
        formOutput: action.payload,
      };
    case 'setNewSubgenreData':
      return {
        ...state,
        newSubgenreData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
