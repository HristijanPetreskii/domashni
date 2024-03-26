

const fs=require('fs');

function createAndWriteFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('File created and data written successfully!');
        }
      });
    });
  }

  module.exports={createAndWriteFile}

