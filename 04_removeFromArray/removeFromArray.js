const removeFromArray = function (inputArray, ...valuesToRemove) {
    
    /*  Makes a new array outputArray.
        It contains only what is returned from removeDuplicates.
        Assume:
        inputArray = [1, 2, 3, 4, 5]
        valuesToRemove = [2, 3]
        
        removeDuplicates returns anything that ISNT in valuesToRemove that IS in inputArray
        it would return 1, 4, 5. Technically T, F, F, T, T.
        
        So the filter will only take these elements and put them into outputArray.
        
    */
    
    const outputArray = inputArray.filter(removeDuplicates);
    
    function removeDuplicates(inputArray) {
        return !valuesToRemove.includes(inputArray);
    };

    return (outputArray);
}
    

// Do not edit below this line
module.exports = removeFromArray;