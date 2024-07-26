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

  // Hide the form after submission
  document.getElementById('customerForm').style.display = 'none';
};

// Add event listener to the form submission
document.getElementById('customerForm').addEventListener('submit', handleFormSubmit);

// Function to handle button click event
const handleButtonClick = () => {
  // Get the customers from the map and create a list
  const customerList = document.getElementById('customerList');
  customerList.innerHTML = ''; // Clear the previous list

  for (const [id, customer] of customerMap.entries()) {
    const listItem = document.createElement('li');
    listItem.innerText = `ID: ${id} - ${customer.firstName} ${customer.lastName}`;
    customerList.appendChild(listItem);
  }
};

// Add event listener to the button click
document.getElementById('getCustomersButton').addEventListener('click', handleButtonClick);