import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config_db/firebase';
import { LoadingContext } from '../contexts/loadingContext';

const Resume = () => {

  

  return (
    <div className="profile-container">
      <img src={} alt="Profile Picture" className="profile-pic"/>
      
      <div className="info-container">
        <div>
          <h1>Name:</h1>
          
        </div>
        <div>
          <h1>Email:</h1>
          
        </div>
        <div>
          <h1>Date of Birth:</h1>
          
        </div>
        <div>
          <h1>Gender:</h1>
          
        </div>
        <div>
          <h1>Objective:</h1>
          
        </div>
        <div>
          <h1>Experience:</h1>
          
        </div>
        <div>
          <h1>Education:</h1>
          
        </div>
        <div>
          <h1>Skills:</h1>
          
        </div>
      </div>
    </div>
  )
  
}

export default Resume;
