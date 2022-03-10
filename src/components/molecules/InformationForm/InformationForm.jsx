import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import * as Yup from 'yup';
import classes from './InformationForm.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';

const InformationForm = () => {
  const dispatch = useDispatch();
  const { setInformationFormMounted, setFormOutputData, setCurrentStepId } =
    bindActionCreators(actionCreators, dispatch);
  const currentStepId = useSelector((state) => state.main.currentStepId);
  const genreData = useSelector((state) => state.data.genreData);
  const isDescriptionReq = useSelector(
    (state) => state.data.newSubgenreData.isDescriptionRequired
  );
  const subgengreName = useSelector((state) => state.data.newSubgenreData.name);
  const selectedGenreId = useSelector((state) => state.main.selectedGenreId);

  let cx = classNames.bind(classes);
  useEffect(() => {
    setInformationFormMounted(true);

    return () => {
      setInformationFormMounted(false);
    };
  });

  const formik = useFormik({
    initialValues: {
      genre: genreData?.genres[selectedGenreId - 1].name,
      subgenre: subgengreName,
      bookTitle: '',
      authorSelect: '',
      isbn: '',
      publisherSelect: '',
      datePublished: '',
      format: '',
      edition: '',
      editionLanguage: '',
      description: '',
    },
    validationSchema: Yup.object({
      bookTitle: Yup.string().required('Book title Reqired'),
      datePublished: Yup.string().matches(
        /^([1-2][0-9]|3[0-1]|0?[1-9])[/]([1][0-2]|0?[1-9])[/]2[0-0][0-2][0-2]$/g,
        'Invalid date'
      ),
      description: isDescriptionReq
        ? Yup.string().required('Description Reqired')
        : null,
    }),
    onSubmit: (values) => {
      console.log(values);
      setFormOutputData(values);
      setCurrentStepId(currentStepId + 1);
    },
  });
  return (
    <div>
      <form id="book-form" onSubmit={formik.handleSubmit}>
        <InputLabel
          sx={{ textAlign: 'left', margin: '5px 0' }}
          id="authorSelect"
        >
          Book tittle
        </InputLabel>
        <TextField
          sx={{ width: '100%', margin: '5px 0' }}
          id="bookTitle"
          name="bookTitle"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bookTitle}
          helperText={formik.errors.bookTitle}
          error={
            formik.touched.bookTitle && formik.errors.bookTitle ? true : false
          }
        />
        <InputLabel
          sx={{ textAlign: 'left', margin: '5px 0' }}
          id="authorSelect"
        >
          Author
        </InputLabel>
        <Select
          sx={{ width: '100%', margin: '5px 0', textAlign: 'left' }}
          id="authorSelect"
          name="authorSelect"
          value={formik.values.authorSelect}
          onChange={formik.handleChange}
        >
          <MenuItem value={'Ivo Andric'}>Ivo Andric</MenuItem>
          <MenuItem value={'Umberto Eko'}>Umberto Eko</MenuItem>
          <MenuItem value={'Salman Ruzdi'}>Salman Ruzdi</MenuItem>
        </Select>

        <InputLabel sx={{ textAlign: 'left', margin: '5px 0' }} id="isbn">
          ISBN
        </InputLabel>
        <TextField
          sx={{ width: '100%', margin: '5px 0' }}
          id="isbn"
          name="isbn"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isbn}
        />
        <InputLabel
          sx={{ textAlign: 'left', margin: '5px 0' }}
          id="publisherSelect"
        >
          Publisher
        </InputLabel>
        <Select
          sx={{ width: '100%', margin: '5px 0', textAlign: 'left' }}
          id="publisherSelect"
          name="publisherSelect"
          value={formik.values.publisherSelect}
          onChange={formik.handleChange}
        >
          <MenuItem value={'Vulkan'}>Vulkan</MenuItem>
          <MenuItem value={'Delfi'}>Delfi</MenuItem>
          <MenuItem value={'Laguna'}>Laguna</MenuItem>
        </Select>

        <div className={classes.leftGroup}>
          <InputLabel
            sx={{ textAlign: 'left', margin: '5px 0' }}
            id="authorSelect"
          >
            Date published
          </InputLabel>
          <TextField
            sx={{ width: '40%', margin: '5px 0', alignSelf: 'left' }}
            id="datePublished"
            name="datePublished"
            variant="outlined"
            onChange={formik.handleChange}
            placeholder="DD / MM / YYYY"
            onBlur={formik.handleBlur}
            value={formik.values.datePublished}
            helperText={formik.errors.datePublished}
            error={
              formik.touched.datePublished && formik.errors.datePublished
                ? true
                : false
            }
          />
          <InputLabel
            sx={{ textAlign: 'left', margin: '5px 0' }}
            id="authorSelect"
          >
            Number of pages
          </InputLabel>
          <TextField
            sx={{ width: '30%', margin: '5px 0', alignSelf: 'left' }}
            id="numberOfPages"
            name="numberOfPages"
            variant="outlined"
            onChange={formik.handleChange}
            placeholder=" Number of pages"
            onBlur={formik.handleBlur}
            value={formik.values.numberOfPages}
          />
          <InputLabel sx={{ textAlign: 'left', margin: '5px 0' }} id="format">
            Format
          </InputLabel>
          <Select
            sx={{ width: '40%', margin: '5px 0', textAlign: 'left' }}
            id="format"
            name="format"
            placeholder="Format"
            value={formik.values.format}
            onChange={formik.handleChange}
          >
            <MenuItem value={'A3'}>A2</MenuItem>
            <MenuItem value={'A4'}>A3</MenuItem>
            <MenuItem value={'A5'}>A4</MenuItem>
          </Select>

          <div className={classes.editionSection}>
            <div>
              <InputLabel
                sx={{ textAlign: 'left', margin: '5px 0' }}
                id="authorSelect"
              >
                Edition
              </InputLabel>
              <TextField
                sx={{ margin: '5px 0', minWidth: '300px', marginRight: '20px' }}
                id="edition"
                name="edition"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.edition}
              />
            </div>

            <div>
              <InputLabel
                sx={{ textAlign: 'left', margin: '5px 0' }}
                id="format"
              >
                Edition language
              </InputLabel>
              <Select
                sx={{ minWidth: '300px', margin: '5px 0', textAlign: 'left' }}
                id="editionLanguage"
                name="editionLanguage"
                placeholder="editionLanguage"
                value={formik.values.editionLanguage}
                onChange={formik.handleChange}
              >
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Serbian'}>Serbian</MenuItem>
                <MenuItem value={'Spanish'}>Spanish</MenuItem>
              </Select>
            </div>
          </div>
        </div>

        <InputLabel
          sx={{ textAlign: 'left', margin: '5px 0' }}
          id="description"
        >
          Description
        </InputLabel>
        <TextField
          sx={{ margin: '5px 0', width: '100%' }}
          id="description"
          name="description"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          helperText={formik.errors.description}
          error={
            formik.touched.description && formik.errors.description
              ? true
              : false
          }
        />
        <div className={classes.buttonGroup}>
          <Button onClick={() => setCurrentStepId(currentStepId - 1)}>
            Back
          </Button>
          <div
            className={cx({
              buttonDisabled: !(formik.dirty && formik.isValid),
            })}
          >
            <Button
              style={{ background: '#525a66', color: '#fff' }}
              form="book-form"
              type="submit"
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InformationForm;
