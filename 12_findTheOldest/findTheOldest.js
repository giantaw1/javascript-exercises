const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // Calculate the age of the current person and the oldest found so far
        const currentAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        // Return the person with the greater age
        return currentAge > oldestAge ? person : oldest;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
