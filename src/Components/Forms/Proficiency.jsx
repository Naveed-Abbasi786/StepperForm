import React, { useState } from "react";
import { Button, Chip, TextField, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from 'yup';

export default function CourseDetails(props) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const Back = () => {
    props.handlback();
  };

  return (
    <div>
      <div className="ExperienceDetails">
        <div className="CourseForm" style={{ padding: "2rem" }}>
          <Formik
            initialValues={{ SkillsCheck: "", Expericheck: "" }}
            validationSchema={Yup.object({
          
              Expericheck: Yup.string()
                .required('Required*')
            })}
            onSubmit={(values) => {
              // Handle form submission here
              props.handleSubmit(values);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <div className="Skills">
                  <div className="label-Skill" style={{ marginTop: "3%", marginLeft: "15%" }}>
                    {skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        onDelete={() =>
                          setSkills(skills.filter((_, i) => i !== index))
                        }
                        style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                      />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      id="new-skill"
                      label="Add Skill"
                      variant="outlined"
                      value={newSkill}
                      onChange={handleSkillChange}
                      style={{ marginBottom: "3rem", width: "55%" }}
                      sx={{
                        marginLeft: '15%',
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#bb326c",
                          },
                          "&:hover fieldset": {
                            borderColor: "#bb326c",
                          },
                          "& .MuiInputBase-input": {
                            color: "#bb326c",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "#bb326c",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={handleAddSkill}
                      className="btn-add"
                      style={{marginLeft: "1rem" ,marginTop:"-6%",padding:'12px',background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}}
                    >
                      Add
                    </Button>
                  </div>
                  <FormHelperText style={{ color: 'red', marginLeft: '15%', marginTop: '-5%' }}>
                    <ErrorMessage name='SkillsCheck'  />
                  </FormHelperText>
                </div>
                <div className="Experience">
                  <FormControl sx={{ m: 1, width: '55%', marginLeft: '15%' }} variant="standard">
                    <Field
                      as={TextField}
                      label="Experience"
                      variant="outlined"
                      name="Expericheck"
                      style={{ marginBottom: "1rem" }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#bb326c",
                          },
                          "&:hover fieldset": {
                            borderColor: "#bb326c",
                          },
                          "& .MuiInputBase-input": {
                            color: "#bb326c",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "#bb326c",
                        },
                      }}
                    />
                    <FormHelperText style={{ color: 'red' }}>
                      <ErrorMessage name='Expericheck' />
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ marginLeft: '15%', width: '25%' }} variant="standard">
                    <InputLabel id="start-year-label" sx={{ color: "purple" }}>
                      Start Year
                    </InputLabel>
                    <Field
                      as={Select}
                      labelId="start-year-label"
                      id="start-year-select"
                      name="startYear"
                      sx={{
                        color:"#bb326c",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fielset": {
                            borderColor: "#bb326c",
                          },
                          "&:hover fieldset": {
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
                    >
                      <MenuItem value="2019">2019</MenuItem>
                      <MenuItem value="2020">2020</MenuItem>
                      <MenuItem value="2022">2022</MenuItem>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                    </Field>
                  </FormControl>

                  <FormControl sx={{ marginLeft: '10%', width: '25%' }} variant="standard">
                    <InputLabel id="end-year-label" sx={{ color: "purple" }}>
                      End Year
                    </InputLabel>
                    <Field
                      as={Select}
                      labelId="end-year-label"
                      id="end-year-select"
                      name="endYear"
                      sx={{
                        color:"#bb326c",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#bb326c",
                          },
                          "&:hover fieldset": {
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
                    >
                      <MenuItem value="2021">2021</MenuItem>
                      <MenuItem value="2022">2022</MenuItem>
                      <MenuItem value="2023">2023</MenuItem>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                    </Field>
                  </FormControl>
                </div>
                <div className="btn-group" style={{ marginLeft: "20rem" ,marginTop:'4%'}}>
                  <Button onClick={Back} variant="outlined" size="medium">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{background: "linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)", color: "white", marginLeft: "1rem" }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
