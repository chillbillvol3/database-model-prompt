const prompt = require('prompt');
const fs = require('fs');
  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['fieldName', 'defaultValue', 'maxLength', 'requiredField'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('Field Name: ' + result.fieldName);
    console.log('Default Value: ' + result.defaultValue);
    console.log('Max length: ' + result.maxLength);
    console.log('Required field: ' + result.requiredField);
    
    const fieldString = JSON.stringify(result, null, 2);
    fs.writeFile('./config.json', fieldString, function (err) {
        if (err) {
            console.log(err);
            return;

        }
        console.log('done.');
    })
  });