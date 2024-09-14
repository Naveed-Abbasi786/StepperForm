  import React, { useState } from "react";
  import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
  import Persnaolinfo from "../Forms/Persnaolinfo";
  import Educationalinfo from "../Forms/Educationalinfo";
  import Proficiency from "../Forms/Proficiency";
  function getStepContent(activeStep,handlnext,handleback,handleSubmit) {
    console.log(activeStep);

    switch (activeStep) {
      case 0:
        return <Persnaolinfo handlnext={handlnext}/>;
      case 1:
        return <Educationalinfo  handlnext={handlnext} handleback={handleback}/>;
      case 2: 
        return <Proficiency handlback={handleback} handleSubmit={handleSubmit}/>;
      default:
        return "invalid data";
    }
  }

  function StepperForm() {
    const [activestep1, setActiveStep] = useState(0);
    const [Submit,SetSubmit]=useState(false)

    const steps = [
      "Personal information",
    "Educational details",
      "Course information"];


    const handlnext =()=>{
      setActiveStep(activestep1+1)
    }

    const handleback=()=>{
      setActiveStep(activestep1-1)

    }
    const handleSubmit = () => {  
        SetSubmit(true)
    };
    const Again = () =>{
      SetSubmit(false)
    }
  
    return (
      <>
        <div className="" >
          <Stepper activeStep={activestep1} alternativeLabel>
            {steps.map((v, i) => (
              <Step key={i} >
                <StepLabel>{v}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {Submit ?
              <center>
            <h1>  Submit your form </h1>
            <button onClick={Again}>
              Again Fill up
            </button>
          </center>
          :
        <>
            <Typography>{getStepContent(activestep1,handlnext,handleback,handleSubmit)}</Typography>   
            </>
          }
      
        </div>
      </>
    );
  }

  export default StepperForm;