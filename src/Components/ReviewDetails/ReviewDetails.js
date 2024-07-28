// src/ReviewDetails.js
import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const ReviewDetails = ({ formData }) => {
  return (
    <>
    <h3 style={{textAlign:"center"  , color: "GrayText" ,marginTop:"-20px"}}>
    Review Your Details
    </h3>
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography  style={{textAlign:"center"  , color: "green" ,fontWeight:'bold'}}>Personal Details - </Typography>
          <Typography>Name: {formData.name}</Typography>
          <Typography>Age: {formData.age}</Typography>
          <Typography>Email: {formData.email}</Typography>
          <Typography>Phone: {formData.phone}</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography  style={{textAlign:"center"  , color: "green" ,fontWeight:'bold'}}>Investment Details - </Typography>
          <Typography>Salary: {formData.salary}</Typography>
          <Typography>Savings: {formData.savings}</Typography>
          <Typography>
            Salary Slip: {formData.salarySlip ? formData.salarySlip.name : 'Not provided'}
          </Typography>
          <Typography>Financial Requirement: {formData.financialRequirement}</Typography>
          <Typography>Risk Tolerance: {formData.riskTolerance}</Typography>
          <Typography>Savings Plan: {formData.savingsPlan}</Typography>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
};

export default ReviewDetails;
