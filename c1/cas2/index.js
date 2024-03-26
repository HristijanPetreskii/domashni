//promises can be done with then ,catch,finally

//then->if it is succesfull
//catch->if it is error
//finally->sekako ke se izvrshi

//sinhrono blokira
//asinhrono ne blokira

const fs = require('fs');

// Data to write to the file
const fullname = 'Hristijan Petreski';
const age = 21;
const profession = 'student';

// Create a string with the information
const content = `Fullname: ${fullname}\nAge: ${age}\nProfession: ${profession}`;

// Specify the file path
const filePath = 'userInfo.txt';

// Write the content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File ${filePath} has been created with the user information.`);
  }
});



// Read the content from the file
fs.readFile(info, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:\n', data);
  }
});


