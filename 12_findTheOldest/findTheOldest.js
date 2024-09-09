const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        const currentPersonDeathYear = person.yearOfDeath || thisYear;
        const oldestPersonDeathYear = oldest.yearOfDeath || thisYear;

        const currentAge = currentPersonDeathYear - person.yearOfBirth;
        const oldestAge = oldestPersonDeathYear - oldest.yearOfBirth; 
        
        return currentAge > oldestAge ? person : oldest;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
