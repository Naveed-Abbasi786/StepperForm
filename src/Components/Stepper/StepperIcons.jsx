import * as React from 'react';
import "../../App.css"
import { useState } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { Button } from '@mui/material';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import EducationIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Persnaolinfo from "../Forms/Persnaolinfo";
import Educationalinfo from "../Forms/Educationalinfo";
import Proficiency from "../Forms/Proficiency";
import { Typography } from '@mui/material';
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <EducationIcon />,
    3: <LaptopIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


function getStepContent(activestep,handlnext,handleback,handleSubmit,handelAgain){
  console.log(activestep)
switch (activestep) {
  case 0:
    return <Persnaolinfo handlnext={handlnext}/>;
  case 1:
    return <Educationalinfo  handlnext={handlnext} handlback={handleback}/>;
  case 2: 
    return <Proficiency handlback={handleback} handleSubmit={handleSubmit} handelAgain={handelAgain}/>;
  default:
    return "invalid data";
}
}
const steps = [
  'Personal Details',
  'Eduactianal Details', 
  'Proficiency Details'
];
export default function SteppersIcons() {
  const [activestep,setActiveStep]=useState(0);
  const [Submit,setSubmit]=useState(false); 

  const handlnext=()=>{
    setActiveStep(activestep+1)
  }

  const handleback=()=>{
    setActiveStep(activestep-1)
  }
  const handleSubmit=()=>{
    setSubmit(true)
  }
  const handelAgain = () =>{ 
    setSubmit(false)
    setActiveStep(0)
  }
  return (
        <div className='steperContainer'>
        <h1 style={{textAlign:'center',color:"white",background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}}>{steps[activestep]}</h1>
        <Box >
        <Stack  spacing={4}>
        <Stepper alternativeLabel activeStep={activestep} connector={<ColorlibConnector />}>
        {steps.map((labelValue, ind) => (
        <Step key={ind} >
        <StepLabel style={{ colo: 'white !important' }}h StepIconComponent={ColorlibStepIcon}>{labelValue}</StepLabel>
      </Step>
    ))}
  </Stepper>
</Stack>
    {Submit ?
  <Box sx={{ textAlign: 'center', mt: 4,p:5 }}>
  <Typography variant="h4" color="success.main" gutterBottom>
    Form Submitted Successfully!
  </Typography>
  <Typography variant="body1" color="text.secondary">
    Your form has been submitted. We will review your information and get back to you shortly.
  </Typography>
      <Button variant="contained" sx={{background:"linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}} onClick={handelAgain} >
      Again Fill up
    </Button>
</Box>
  :
  <Typography>{getStepContent(activestep,handlnext,handleback,handleSubmit,handelAgain)}</Typography>
}
</Box>
    </div>
  );
}
