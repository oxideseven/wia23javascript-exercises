const findTheOldest = function(peeps) {
    
    const currentYear = (new Date()).getFullYear();

    return peeps.sort((a, b) => (((a.yearOfDeath) ||(currentYear )) - a.yearOfBirth) > (((b.yearOfDeath) || (currentYear)) - b.yearOfBirth) ? -1 : 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
