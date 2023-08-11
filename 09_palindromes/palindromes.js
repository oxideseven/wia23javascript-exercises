const palindromes = function (string) {
    
    cleanString = string.toLowerCase().replace(/[^A-Z0-9]/ig,``)
	reverseString = Array.from(cleanString).reverse().join(``);
        
    return(reverseString === cleanString);
    
};

// Do not edit below this line
module.exports = palindromes;
