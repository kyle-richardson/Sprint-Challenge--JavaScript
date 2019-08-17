// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous
const tyrannosaurus = {
  name: 'tyrannosaurus',
  diet: 'canivorous',
  weight: '7000kg',
  length: '12m',
  period: 'Late Cretaceous',
  roar: function() {
    return "RAWERSRARARWERSARARARRRR!";
  }
}

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const stegosaurus = {
  name: 'stegosaurus',
  diet: 'herbivorous',
  weight: '2000kg',
  length: '9m',
  period: 'Late Jurassic'
}

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous
const velociraptor = {
  name: 'velociraptor',
  diet: 'carnivorous',
  weight: '15kg',
  length: '1.8m',
  period: 'Late Cretaceous'
}

// Using your dinosaur objects, log answers to these questions:
console.log("*****START OBJECTS*****");
// How much did tyrannosaurus weigh?
console.log(`The tyrannnosaurus weighed ${tyrannosaurus.weight}.`);

// What was the diet of a velociraptor?
console.log(`The velociraptor's diet was ${velociraptor.diet}.`);

// How long was a stegosaurus?
console.log(`The stegosaurus was ${stegosaurus.length} long.`);

// What time period did tyrannosaurus live in?
console.log(`The tyrannosaurus lived in the ${tyrannosaurus.period} period.`);

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.

console.log(`The tyrannosaurus says: ${tyrannosaurus.roar()}`);


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]



zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];



const universities = [];
const contactInfo = [];
const uni = [];
const animalNames = [];
let lowerCase = [];
let lowerPopulation = [];
let populationTotal = 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const populations = [];


/* Request 1: Create a new array called universities that contains all the universities in the graduates array.  


Once you have the new array created, sort the universities alphabetically and log the result. */

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/


/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/

function arraysTest() {
  graduates.forEach( ele => universities.push(ele.university));

  graduates.forEach(ele => contactInfo.push(`${ele.first_name} ${ele.email}`));

  graduates.forEach(ele => {
    if(ele.university.includes('Uni')) {
      uni.push(ele.university);
    }
  });
}
function arraysAdvanced() {
  zooAnimals.forEach(ele => animalNames.push(`Name: ${ele.animal_name}, Scientific: ${ele.scientific_name}`));

  lowerCase = zooAnimals.map(ele => ele.animal_name.toLowerCase()); 
  
  lowerPopulation = zooAnimals.filter(ele => ele.population <5);
  
  zooAnimals.forEach( ele => populations.push(ele.population));
  populationTotal = populations.reduce(reducer);
}


//logging section below

async function loggerArray() {
  console.log("\n*****START ARRAYS*****");
  console.log("\n--------------------------------------");
  console.log('Create a new array called universities that contains all the universities in the graduates array.\n');
  await console.log(universities);
  
  console.log("\n--------------------------------------");
  console.log('Create a new array called contactInfo that contains both first name and email of each student. \n');
  await console.log(contactInfo);
  
  console.log("\n--------------------------------------");
  console.log('Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all.\n');
  await console.log(uni);

}
async function loggerAdvanced() {
  console.log("\n--------------------------------------");
  console.log('Return an array with only the animal and scientific names in it.\n');
  await console.log(animalNames);
  
  console.log("\n--------------------------------------");
  console.log('Create a new array named lowerCase and map over each name to convert them all to lower case\n');
  await console.log(lowerCase); 
  
  console.log("\n--------------------------------------");
  console.log('Find out which animals have a population less than 5.\n');
  await console.log(JSON.stringify(lowerPopulation));
  
  console.log("\n--------------------------------------");
  console.log('Find the total population from all the zoos using the .reduce() method.\n');
  await console.log(populationTotal);
}
  


async function test() {
  await arraysTest();
  await arraysAdvanced();
  await loggerArray();
  await loggerAdvanced();
}

test();
