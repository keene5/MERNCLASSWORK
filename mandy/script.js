// script.js

// Map to store customer information
const customerMap = new Map();

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const id = document.getElementById('id').value;

  // Add the customer information to the map
  customerMap.set(id, {
    firstName,
    lastName
  });

  // Reset the form
  document.getElementById('customerForm').reset();
  
  console.log('Customer information added to the map:', customerMap);
};

// Add event listener to the form submission
document.getElementById('customerForm').addEventListener('submit', handleFormSubmit);