//Print 1-255
//Write a program (sets of instructions) that would print all the numbers from 1 to 255.
		function print1() {
			var arr=[];
			for (i=1; i<=255; i++) {
				arr.push(i);
			}
			console.log(arr);
		}
		print1();

//Print odd numbers between 1-255
//Write a program (sets of instructions) that would print all the odd numbers from 1 to 255.
		function printOdd() {
			var arr=[];
			for (i=1; i<=255; i=i+2) {
				arr.push(i);
			}
			console.log(arr);
		}
		printOdd();

//Print Sum
//Write a program that would print the numbers from 0 to 255 but this time, it would also print the sum of the numbers that have been printed so far. For example, your output should be something like this:
//New number: 0 Sum: 0
//New number: 1 Sum: 1
//New Number: 2 Sum: 3
//New number: 3 Sum: 6
//...
//New Number: 255 Sum: ___.
//Do NOT use an array to do this exercise.
		function printSum() {
		  var temp=0;
		  var sum =0;
		  for (i=0; i<=255; i++) {
		    sum = i+temp;
		    console.log("New number: "+i+". Sum: "+sum);
		    temp = sum;
		  }
		}
		printSum();

//Iterating through an array
//Given an array X, say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen.  Being able to loop through each member of the array is extremely important.
		function iterate() {
		  x = [1,3,5,7,9,13];
		  for (i=0; i<x.length; i++) {
		    console.log("The index "+i+" of array x is: "+ x[i]);
		  }
		}
		iterate();

//Find Max
//Write a program (sets of instructions) that takes any array and prints the maximum value in the array. Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.
		function findMax(arr) {
		  var max = 0;
		  for (i=0; i<arr.length; i++) {
		    if (arr[i]>max) {
		      max = arr[i];
		    }
		  }
		  console.log(max);
		}
		x = [-3,9,-8,11,0,66,1,45,39,-99];
		findMax(x);

//Get Average
//Write a program that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your program should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases. You can use a count function with this assignment.
		function getAvg(arr) {
		  var avg, sum = 0;
		  for (i=0; i<arr.length; i++) {
		    sum = arr[i] + sum;
		  }
		  avg = sum / arr.length;
		  console.log(avg);
		}
		x=[1,2,3,4,5,21,13];
		getAvg(x);

//Array with Odd Numbers
//Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255].
		function oddNumber() {
			var Y=[];
			for (i=1; i<=255; i=i+2) {
				Y.push(i);
			}
			console.log("Y = ["+Y+"].");
		}
		oddNumber();

//Greater Than y
//Write a program that takes an array and returns the number of values in that array whose value is greater than a given value y. For example if array = [1, 3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array that are greater than 3).
		function findGreater(y, arr) {
		  var greater = [];
		  for (i=0; i<arr.length; i++) {
		    if (arr[i]>y) {
		      greater.push(arr[i]);
		    }
		  }
		  console.log("There are "+greater.length+" number(s) in array "+arr+" that is/are greater than '"+y+"'.");
		}
		findGreater(10, [1,5,15,20,30]);

//Square the values
//Given any array x, say [1, 5, 10, -2], create an algorithm (sets of instructions) that multiplies each value in the array by itself.  When the program is done, the array x should have values that have been squared, say [1, 25, 100, 4].
		function square(arr) {
		  var square = 0;
		  var squareArr = [];
		  for (i=0; i<arr.length; i++) {
		    square = arr[i] * arr[i];
		    squareArr.push(square);
		  }
		  console.log(squareArr);
		}
		square([1,2,3,4,5,-1,-2,-3]);

//Eliminate Negative Numbers
//Given any array x, say [1, 5, 10, -2], create an algorithm that replaces any negative number with the value of 0.  When the program is done, x should have no negative values, say [1, 5, 10, 0].
		function noNeg(arr) {
		  var newArr = [];
		  for(i=0; i<arr.length; i++) {
		    if(arr[i]<0) {
		      arr[i]=0;
		      newArr.push(arr[i]);
		    }
		    else {
		      newArr.push(arr[i]);
		    }
		  }
		  console.log(newArr);
		}
		noNeg([1,2,3,4,-8,-9,-10,0]);

//Max, Min, and Average 
//Given any array x, say [1, 5, 10, -2], create an algorithm that prints the maximum number in the array, the minimum value in the array, and the average of the values in the array. 
		function minMaxAvg(arr) {
  		  var max = 0;
		  for (i=0; i<arr.length; i++) {
		    if (arr[i]>max) {
		      max = arr[i];
		    }
		  }
		  console.log(max);

          var min = 0;
		  for (i=0; i<arr.length; i++) {
		    if (arr[i]<min) {
		      min = arr[i];
		    }
		  }
		  console.log(min);
  
          var avg, sum = 0;
		  for (i=0; i<arr.length; i++) {
		    sum = arr[i] + sum;
		  }
		  avg = sum / arr.length;
		  console.log(avg);		
		}
		x = [1,2,3,4,5,6];
		minMaxAvg(x);

//Shifting the values in the array
//Given any array x, say [1, 5, 10, 7, -2], create an algorithm that shifts each number by one to the front.  For example, when the program is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0].
		function shift(arr) {
		  newArr = [];
		  for (i=0; i<arr.length; i++) {
		    if (arr[i+1]) {
		      newArr.push(arr[i+1]);      
		    }
		    else {
		      newArr.push(0);      
		    }
		  }
		  console.log(newArr);
		}
		shift([1,5,10,7,-2]);

//Number to string
//Write a program that takes an array of numbers and replaces any negative number with the string 'Dojo'.  For example if array x is initially [-1, -3, 2], after your program is done that array should be ['Dojo', 'Dojo', 2].
		function numToString(arr){
		  newArr = [];
		  for (i=0; i<arr.length; i++) {
		    if (arr[i]<0) {
		      newArr.push('Dojo');
		    }
		    else
		    {
		      newArr.push(arr[i]);    
		    }
		  }
		  console.log(newArr);
		}
		numToString([-1,-3,-77,0,2,55,88]);
