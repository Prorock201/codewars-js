var a = [1,2,3,4,5,6,7,8,9,10];

function find(number) {
	a.some(function(item,index){
		return item == 3;
	});
};

console.log(find(a));