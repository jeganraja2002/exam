

	/* 1. Differnce between let and const keyword?
	
			let = let create variables that can be reassigned another value
			const = const creates "constant" variables that cannot be reassigned another value
			

//........................................................................................................


	/* 2. Which methods are used to avoid Shallow copy?
	
	    answer = json parse/json stringify , object assign , spread operator

	*/

//........................................................................................................

	/* 3. Difference between map and forEach.

			map = The map() method returns a new array.
				  The map() method is used to transform the elements of an array
			
			forEach = forEach() method does not return a new array.
					  forEach() method is used to loop through the elements of an array.

	*/

//.........................................................................................................

	
	/* 5. Difference between promise chaining and promise all.
	
		Executes one by one (synchronous). Result of one execution can be passed to the next step.
		Execution time to fulfill all the promise is comparatively high. Chaining after an error is possible.



//.........................................................................................................


	/* 4. Write the states of promises.
			answer = fullfilled , rejected , pending 
	*/


//........................................................................................................


	/* 6. What is the final value of obj.
		 const obj = {foo:1}
	 	 obj.bar = 2;
	 	 console.log(obj)

		 ouptut = {foo:1,bar:2}
	*/
//........................................................................................................

	
	 /* 7. const speed = "quick";
	 	   console.log(`The ${speed} brown fox jumps over the lazy dog`)

	 	   output=The quick brown fox jumps over the lazy dog
	*/

//.......................................................................................................
				


	/* 8. var obj1 = {id: 1,company: "GFG"};

	 		var obj2 = obj1;
	 		obj2.id = 2;
	 		console.log(obj1.id);
	 		console.log(obj2.id);

	 		output = 2,2
	*/


//........................................................................................................


		/* 9.  var input = [3,4,5,6]
		 		//How to achieve this output?

		 	  var c = input.map((a,b)=>{

			  	return a+b
		 	  })

		 	  console.log(c)
		
		      Output : [3,5,7,9]
		*/

//.........................................................................................................


		/* 10. Which method is used to check all values and return boolean value?
		
									some every
		*/

//.........................................................................................................


		/* 11. How to find minimum value?
		
		 		const price = [35,66,234,56,88,90,22]


		 		var align =	price.sort((a,b)=>{

		 			return a-b
		 		})

		 		console.log(align[0])
		
		 		output=22
		*/

//..........................................................................................................


		/* 12. ES6 Published in ----
	
				answer = 2015
		*/

//..........................................................................................................



	/* 13.   var employee =[{name : "Karuppasamy",age : 24,Salary : 25000,level : "junior"},
			   				{name : "Samy",age : 21,Salary : 20000,level : "junior"},
			   				{name : "Kaviya",age : 22,Salary : 18000,level : "junior"},
			   				{name : "Naresh",age : 45,Salary : 100000,level : "senior"},
			   				{name : "Prem",age : 24,Salary : 50000,level : "senior"}
			   				]


	   		let	c=employee.map((a,b)=>{

	   			return a.level=="senior"?a.name:""

	   		})

	 		console.log(c)
			
			Output : ["Naresh","Prem"];
	*/

//..........................................................................................................


	/* 14.  const rem = 0
			rem++;
			rem++;
			console.log(rem);

			output =  Uncaught TypeError: Assignment to constant variable.
	*/

//...........................................................................................................


	/* 15.	function a(){
	 		console.log("Hi")
	 		}

	 		function b(){
	 		console.log("Fabevy")
	 		}

	 		a(b)
		
			output = Hi

	*/


//...........................................................................................................


	/* 16.	var num = 0;
			console.log(num++)
			console.log(num++)
			console.log(++num)
			console.log(num)
			
			output= 0 1 3 3
	*/

//...........................................................................................................


	/* 17. Solve the armstrong logic in async/await

			var x = 371
			var y = x
			var z = y
			var count = 0
			var sum = 0

			function counts() {
				
				return new Promise((a,b)=>{

					while(x!=0){
						let rem = x % 10
						x = ( x-rem) / 10
						count++			
					}
					a(count)
				})
			}

			function sums(g) {
					
					return new Promise(( c , d )=>{

						while(y!=0){
							let rem = y % 10
							y = ( y-rem ) / 10
							sum+= ( rem**g ) 
						}
						c(sum)
					})
			}


			function check(h) {
				
				return new Promise(( e , f) => {
					
					if (z==h) {
						console.log( z + " this is amstrong")
					} else {
						console.log( z + " this is not amstrong")
					}
				})
			}



			async function final() {
				
				try{
					let g = await counts()
					let h = await sums(g)
					let r = await check(h)
					console.log(r)
				}
			
				catch{
					console.log("error")
				}
			}

			final()

		output = 371 this is amstrong

	*/

//...........................................................................................................



	/* 18. let obj1 = {name : "Monisha"}

	  		let obj = Object.assign({},obj1);
		  	obj1.position = "QAE"
	
			console.log(obj,obj1);
			
			output = {name: 'Monisha'} {name: 'Monisha', position: 'QAE'}

	*/		


//...........................................................................................................


	/* 19.	let person = {name: "Linda"}
			const members = [person];
			person = null;
			console.log(person)

			output = null
	*/

//............................................................................................................


	/* 20. Which methods are used to solve async function into sync?

			answer = calback , callback hell , Promise , Promise chaining , Promise all , async await

	*/

//............................................................................................................








