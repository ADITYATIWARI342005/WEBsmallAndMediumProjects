import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 







  // Do not mess with the code below , leave it as it is as it is being used for testing purpose
    if (window.Cypress) {
      window.setIsAuthenticated = setIsAuthenticated;
  }
// Do not mess with the code above, leave it as it is as it is being used for testing purpose
  return (

  );
};


