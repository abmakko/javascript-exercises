const findTheOldest = function(people) {
    const d = new Date();
    newperson = people.reduce((accumulator, current) => {

        if (!('yearOfDeath' in current)) current.yearOfDeath = d.getFullYear();
        if((current.yearOfDeath - current.yearOfBirth) > (accumulator.yearOfDeath - accumulator.yearOfBirth)){
          return current
        }
        else
          return accumulator  
      }, {
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0,
      })
    
      return newperson;
};

// Do not edit below this line
module.exports = findTheOldest;
