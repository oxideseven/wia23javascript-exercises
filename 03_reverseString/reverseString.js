const reverseString = function (string) {
    let revString='';
    let long = string.length + 1;
    
    for (let i = 0; i < long; i++){
         revString += string.slice(long - i - 1,long - i);
     }
     return(revString);
};

// Do not edit below this line
module.exports = reverseString;
