const fs = require('fs');
const path = require('path');
const MESSAGES = require("./messages");

const filePath = path.join(__dirname, '..', 'data/data.json');

const createFileHandler = () => {
  const readFile = (cb) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      let parsedData = [];
      if (!err) {
        try {
          parsedData = JSON.parse(data);
        } catch (error) {
          console.log(MESSAGES.ERROR.parsingJSON, error);
        }
      }
      cb(parsedData);
    });
  };

  const writeFile = (data, cb) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8', (err) => {
      cb(err);
    });
  };

  return { readFile, writeFile };
};

module.exports = createFileHandler;;