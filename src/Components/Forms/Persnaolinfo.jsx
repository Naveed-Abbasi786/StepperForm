import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PersonalInfo(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const Next = () => props.handlnext();

  return (
    <div className="PersonalDetails" style={{ marginTop: '5%' }}>
      <div className="PersonalForm">
        <Formik
          initialValues={{
            firstName: "",
            emailCheck: "",
            passwordCheck: ""
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(5, "Enter at least 5 characters")
              .max(10, "Enter no more than 10 characters")
              .required("Required*"),
            emailCheck: Yup.string()
              .email('Invalid email address')
              .required('Required*'),
            passwordCheck: Yup.string()
              .min(6, 'Enter at least 6 characters')
              .max(10, 'Enter no more than 10 characters')
              .required('Required*')
          })}
          onSubmit={(values) => {
            console.log(values);
            Next();
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                placeholder="Enter your Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                error={!!errors.firstName && touched.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  width: "80%",
                  margin: "2% 10%",
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#bb326c",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#bb326c",
                    },
                    "& .MuiInputBase-input": {
                      color: "#bb326c",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#bb326c',
                  },
                }}
              />

              <TextField
                label="Email"
                placeholder="Enter Your Email"
                name="emailCheck"
                value={values.emailCheck}
                onChange={handleChange}
                error={!!errors.emailCheck && touched.emailCheck}
                helperText={touched.emailCheck && errors.emailCheck}
                sx={{
                  width: "80%",
                  margin: "2% 10%",
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#bb326c",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#bb326c",
                    },
                    "& .MuiInputBase-input": {
                      color: "#bb326c",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#bb326c',
                  },
                }}
              />

              <FormControl
                sx={{
                  width: "80%",
                  margin: "2% 10%",
                  "& .MuiInputLabel-root": {
                    color: "#bb326c",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#bb326c",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#bb326c",
                    },
                    "& .MuiInputBase-input": {
                      color: "#bb326c",
                    },
                  },
                }}
              >
                <InputLabel   style={{color:'#bb326c'}} htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="passwordCheck"
                  value={values.passwordCheck}
                  onChange={handleChange}
                  error={!!errors.passwordCheck && touched.passwordCheck}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                 
                  label="assword"
                />
                <FormHelperText sx={{color:'red'}}>
                  <ErrorMessage  name="passwordCheck" />
                </FormHelperText>
              </FormControl>

              <div
                style={{
                  height: "14vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
                    color: "white",
                    width:"45%",
                    padding:"10px",
                    borderRadius:'15px'
                  }}
                >
                  Submit
                </Button>
                
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
