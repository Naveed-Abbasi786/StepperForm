import React, { useState } from 'react';
import './EducationInfo.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {FormHelperText} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box } from '@mui/material';

export default function EducationalInfo(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const Back = () => props.handlback();
  const Next = () => props.handlnext();

  // Validation schema for Formik
  const validationSchema = Yup.object({
    EducationCheck: Yup.string().required('Education is required'),
    GenderCheck: Yup.string().required('Gender is required'),
  });

  return (
    <div className="EducationDetails">
      <div className="EducationForm">
        <Formik
          initialValues={{ EducationCheck: '', GenderCheck: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            Next();
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className="formContainer">
              {/* Education Select Field */}
              <FormControl className="formControl">
                <TextField
                  id="education-select"
                  select
                  label="Education"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={formik.values.EducationCheck}
                  onChange={formik.handleChange}
                  error={formik.touched.EducationCheck && Boolean(formik.errors.EducationCheck)}
                  helperText={formik.touched.EducationCheck && formik.errors.EducationCheck}
                  name="EducationCheck"
                  className="educationSelect"
                  sx={{
                    width: '80%',
                    margin: '3% 10%',
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#bb326c',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#bb326c',
                      },
                      '& .MuiInputBase-input': {
                        color: '#bb326c',
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#bb326c',
                    },
                  }}
                >
                <MenuItem
  sx={{
    "&:hover": {
      background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      color: "white",
    },
  }}
  value="Matric"
>
  Matric
</MenuItem>
<MenuItem
  sx={{
    "&:hover": {
      background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      color: "white", 
    },
  }}
  value="Intermediate"
>
  Intermediate
</MenuItem>
<MenuItem
  sx={{
    "&:hover": {
      background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      color: "white", 
    },
  }}
  value="Bsc"
>
  Bsc
</MenuItem>
<MenuItem
  sx={{
    "&:hover": {
      background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      color: "white",
    },
  }}
  value="Graduation"
>
  Graduation
</MenuItem>
<MenuItem
  sx={{
    "&:hover": {
      background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      color: "white", 
    },
  }}
  value="B Com"
>
  B Com
</MenuItem>

                </TextField>
              </FormControl>

              {/* Gender Radio Group */}
              <FormControl component="fieldset" className="formControl">
                <FormLabel component="legend" sx={{ color: '#bb326c !important' }} className="formLabel">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  name="GenderCheck"
                  value={formik.values.GenderCheck}
                  onChange={formik.handleChange}
                  className="radioGroup"
                >
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        sx={{
                          '&, &.Mui-checked': {
                            color: '#bb326c',
                          },
                        }}
                      />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        sx={{
                          '&, &.Mui-checked': {
                            color: '#bb326c',
                          },
                        }}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        sx={{
                          '&, &.Mui-checked': {
                            color: '#bb326c',
                          },
                        }}
                      />
                    }
                    label="Other"
                  />
                </RadioGroup>
                    <FormHelperText sx={{color:'red'}}>
                  <ErrorMessage  name="GenderCheck" />
                </FormHelperText>
              
              </FormControl>

              {/* Buttons */}
              <div className="btnGroup">
                <Button onClick={Back} variant="outlined" className="btn">
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="submitBtn"
                  sx={{
                    background: 'linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                    color: 'white',
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
