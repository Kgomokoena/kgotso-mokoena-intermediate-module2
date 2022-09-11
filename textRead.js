var fileSystem = require("fs");
var fileName = "bestsolution.txt";

fileSystem.writeFile(fileName, 'The 2021 Best Educational Solution category was won by the Uniwise app created by OGO Studios', function (err) {
  if (err) throw err;
  console.log('The file ' + fileName +' created successfully.');
});

fileSystem.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });