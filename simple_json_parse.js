//  Example 3 : Parsing json
const editJsonFile = require("edit-json-file");

// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile(`${__dirname}/register.json`);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter the absenties name?`, name => {
    var roll_no = file.get(name)
    console.log("Roll number of "+name+" is :"+roll_no)
    for ( var i=0; i<roll_no.length; i++){
        console.log("value of index "+i+" is "+roll_no[i].name)
    }
    // file.set(name,"absent");
    file.save();
  readline.close()
})
