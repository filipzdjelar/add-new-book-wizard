import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NavigationButtons from '../../atoms/NavigationButtons/NavigationButtons';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import * as Yup from 'yup';

const NewSubgenre = () => {
  const dispatch = useDispatch();
  const { setNewSubgenreData } = bindActionCreators(actionCreators, dispatch);

  const formik = useFormik({
    initialValues: {
      name: '',
      isDescriptionRequired: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Subgenre name is required'),
    }),
  });

  useEffect(() => {
    setNewSubgenreData({
      name: formik.values.name,
      isDescriptionRequired: formik.values.isDescriptionRequired,
    });
  }, [formik.dirty, formik.isValid, formik.values.isDescriptionRequired]);
  return (
    <>
      <form id="new-subgenre-form" onSubmit={formik.handleSubmit}>
        <TextField
          style={{ marginTop: '20px' }}
          sx={{ width: '100%' }}
          id="name"
          name="name"
          label="Subgenre name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          variant="outlined"
          value={formik.values.name}
          placeholder="subgenre"
          helperText={formik.errors.name}
          error={formik.touched.name && formik.errors.name ? true : false}
        />
        <FormControlLabel
          sx={{ width: '100%' }}
          control={<Checkbox />}
          id="isDescriptionRequired"
          name="isDescriptionRequired"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Description is reqired for this subgenre"
        />
      </form>
      <NavigationButtons optionSelected={formik.dirty && formik.isValid} />
    </>
  );
};

export default NewSubgenre;
