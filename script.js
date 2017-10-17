//Task 1

var str = '#',
	result = '';
for (var i = 0; i < 7; i++) {
	result += str;
	console.log(result);
}


//Task 2

var str_3 = 'Fizz',
	str_5 = 'Buzz',
	str_3_5 = 'FizzBuzz';
for ( var i = 1; i <= 100; i++ ) {

	if ( (i % 3 == 0) && (i % 5 == 0) ) {
		console.log( str_3_5 );
	}  else if ( i % 3 == 0 ) {
		console.log( str_3 );
	} else if ( i % 5 == 0 ) {
		console.log( str_5 );
	} else {
		console.log( i );
	}
}

//Task 3

var str = '# # # # ',
	str_1 = ' # # # #';

for(var i = 1; i <= 8; i++) {
	if(i % 2 != 0) {
		console.log(str);
	} else {
		console.log(str_1);
	}
}


//Function

//Task 4

function min(a, b) {
	return a < b ? a : b;
}
console.log(min(2, 8));
console.log(min(0, -15));

//Task 5

//variant 1 (without recursion)
function isEven(num) {
	if(num % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isEven(10));
console.log(isEven(11));

//variant 2 (with recursion)
function isEven(num) {
	if (num == 0)
		return true;
	else if (num == 1)
		return false;
	else if (num < 0)
		return isEven(-num);
	else
		return isEven(num - 2);
}

console.log(isEven(10));
console.log(isEven(11));

//Task 6

function countChar(str, simbol) {

	var sum = 0;

	for(var i = 0; i < str.length; i++) {

		if(str.charAt(i) == simbol) {

			sum += 1
		}
	}
	return sum;
}

function countBs(string) {
	return countChar(string, "s");
}

console.log(countBs('Boss'));

console.log(countChar("geekhub", "e"));