var people = [ 
{ age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' } 
];

var OrderPeople = function(people){
	return people.sort(function(a, b){return a.age - b.age;});
}

OrderPeople(people);

/*var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age );
}*/
