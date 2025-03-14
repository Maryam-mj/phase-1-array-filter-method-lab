
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
console.log(findMatching(drivers, 'Bobby')); 
  
let driversnames =  ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function fuzzyMatch(driversnames,name){
    return driversnames.filter(drivers => drivers.startsWith(name));

}
  
  function matchName(drivers,hometown) {
    return drivers.filter(driver => driver.name === hometown);
  }
  
