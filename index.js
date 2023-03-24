// var city = prompt('Enter your city name')
// if(city !== 'karachi'){
//     alert('correct')
// }else{
//     alert('wrong')
// }
// && and operator
// var age = parseInt(prompt('Enter your age'));
// var weight = parseInt(prompt('Enter your weight in kgs'));
// var height = parseInt(prompt('Enter your height in ft'));
// var gender = prompt('Enter your gender')

// if(age <= 18 && weight <=100 && height <= 5 && gender == 'male'){
//     document.write('You are Eligible')
// }else{
//    document.write('you are not be able to attend the session')
// }

//   || or operator
//  var age = parseInt(prompt('Enter your age'));
//  var weight = parseInt(prompt('Enter your weight in kgs'));
//  var height = parseInt(prompt('Enter your height in ft'));
//  var gender = prompt('Enter your gender')

//  if(age < 18 || weight < 100 || height < 6 || gender == 'male'){
//     document.write('TRUE')
//  }

//Array[]

// var cities = ['karachi','islamabad','lahore','peshawar','quetta']
// document.write(cities)

//assigning values to an empty array
// var arr = [];

// arr[0] = 'rida'
// arr[1]='shama'
// arr[2] = true
// document.write(arr)

//pop

// var countries = ['pakistan','canada','turkey','afghanistan'];
// countries.pop();
// countries.push('america')
// countries.shift()
// countries.unshift('iraq')
// countries.slice()
// countries.splice(2,0,'kashmir')

// document.write(countries)


// It is lengthy process without loop
// var cityToCheck = prompt('Enter your fav city')
// var cleanestCities = ['karachi','islamabad','lahore','pindi','multan'];
// if(cityToCheck === cleanestCities[0]){
//     document.write(cityToCheck + " is very clean")
// }else if(cityToCheck === cleanestCities[1]){
//     document.write(cityToCheck + " is very clean")
// }else if(cityToCheck === cleanestCities[2]){
//     document.write(cityToCheck + " is very clean")
// }else if(cityToCheck === cleanestCities[3]){
//     document.write(cityToCheck + " is very clean")
// }else if(cityToCheck === cleanestCities[4]){
//     document.write(cityToCheck + " is very clean")
// }else{
//     document.write(cityToCheck + ' is not a clean city')
// }

//for loop
// for(i=0;i<10;i++){
//     document.write(i + "<br>")
// }

//while loop
 var i = 0;
 while(i<10){
     document.write(i);
     i++
 }

//do while loop
 var i = 1;
 do{
     document.write('hira'+ i)
     i++
 }while(i <=10)

 var table= parseInt(prompt('Enter tyou table number'))
 var end = parseInt(prompt('where to end'))
 for(var i = 1; i<=end; i++){
     document.write(table + " x " + i + " = " + table*i +"<br>")
 }


 var i = 1;
 while(i<=end){
     document.write(table + " x " + i + " = " + table*i +"<br>");
     i++
 }

 var i = 1;
 do{
     document.write(table + " x " + i + " = " + table*i +"<br>");
     i++
 }while(i<=end)


 var arr= ['apple','mango','bnana','orange','grapes','pineapple']
 for(i=0; i<arr.length;i++){
     document.write(arr[i]," <br>")
 }


 var arr= ['apple','mango','bnana','orange','grapes','pineapple']
 for(i=0; i<6;i++){
     document.write(arr[i]," <br>")
 }


