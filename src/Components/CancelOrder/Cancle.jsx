import React, { useState } from 'react';
import {db} from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import GoBackButton from '../GoBackButton/GoBackButton'
function Cancel() {

  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);




  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };


    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
     await addDoc(collection(db, 'canceled'), {
          name,
        });
   
        setName(''); // Clear the input field after submission
      } catch (error) {
        console.error('Error adding name to Firestore:', error);
      }

      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsAlertOpen(true);
      }, 3000);


    };
  
    return (<>
       <GoBackButton navigate={'/'} />
      <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Confirm
          </Button>
        </div>
      </form>

      <Snackbar
        open={isAlertOpen}
        autoHideDuration={4000}
        onClose={handleAlertClose}
     

      >

  <Alert
    onClose={handleAlertClose}
    severity="success" // You can change this to "error", "info", or "warning" for different colors
  >
    {` your order has been canceled`}
  </Alert>
</Snackbar>
      {isSubmitting && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      )}
    </div>
 
    </>
    );
}

export default Cancel;
