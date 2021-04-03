// Chapter # 17-20:

// Q1:

// var multidimensional = [[],[],[]];

// Q2:

// var multidimensional = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multidimensional[0]+"<br>");
// document.write(multidimensional[1]+"<br>");
// document.write(multidimensional[2]+"<br>");

// Q3:

// for (var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

// Q4:

//  var num = 2;
//  for (var i=1;i<=15;i++){
//      document.write(num+"x"+i+"="+(i*num)+"<br>");
//  }

// Q5:

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0;i<fruits.length;i++){
//     document.write("Elemment at "+i+" is "+fruits[i]+"<br>");
// }

// Q6:

// var lst = []
// for (var i=1; i<=20;i++){
//     lst.push(i);
// }
// document.write("Counting: "+lst);
// document.write("<br>");
// document.write("Reverse: "+lst.reverse());
// document.write("<br>");
// var evenn = [];
// var odd = [];
// var series = [];
// for (var j=0;j<lst.length;j++){
//     if (j%2==0){
//         evenn.push(j);
//         series.push(j+"k");
//     }else{
//         odd.push(j);
//     }
// }       
// document.write("Even: "+evenn);
// document.write("<br>");
// document.write("Odd: "+odd);
// document.write("<br>");
// document.write("Series: "+series);

// Q7:

// var a = ["cake","apple pie","cookie","chips","patties"];
// var sea  = prompt();
// var abc = true
// for (var i=0; i<a.length;i++){
//     if (sea==a[i]){
//         abc = false
//         document.write(sea + " is avalaible");
//     }
// }
// if (abc==true){
//     document.write(sea + " is not avalaible");
// }

// Q8:

//  var arr = [24, 53, 78, 91, 12];
//  document.write("Array Items: "+arr+"<br>")
//  arr.sort();
//  arr.reverse();
//  document.write("Largest number is: "+arr[0]);

// Q9:

// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: "+arr+"<br>")
// arr.sort();
// document.write("Smallest number is: "+arr[0]);

// Q10:

// var num = 5;
// for (var i=1;i<=10;i++){
//     document.write(i*num+",");
// }


// Chapter # 21-25:

// Q1:

// var firstName = prompt("enter first name: "); 
// var lastName = prompt("enter last name: "); 
// var fullName = (firstName + " " + lastName);  
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// Q2:

// var favPhone = prompt("Favourite phone: "); //Samsung galaxy S6 edge Plus
// var l = favPhone.length;
// document.write("My Favorite phone is: " + favPhone + "<br>" + "String length is: " + l);

// Q3:

// var word = "Pakistani"
// var i = word.indexOf("n");
// document.write("String: " + word + "<br>" + "Index of 'n' is: " + i);


// Q4:

// var word = "Hello World"
// var i = word.lastIndexOf("l");
// document.write("String: " + word + "<br>" + "Last index of 'l' is: " + i);


// Q5:

// var word = "Pakistani"
// var ch = word.charAt(3);
// document.write("String: " + word + "<br>" + "Character at Index 3: " + ch);

// Q6:

// var firstName = prompt("enter first name: "); 
// var lastName = prompt("enter last name: "); 
// var fullName = firstName.concat(lastName);
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// Q7:

// var word = "Hyderabad";
// var r = word.replace("Hyder","Islam");
// document.write("String: " + word + "<br>" + "After replacement: " + r);

// Q8:

// var str = 'Ali and Sami are best friends.They play cricket and football together.';
// var newStr = str.replace('and','&');
// document.write(newStr);

// Q9:

// var a="472";
// document.write("Value: "+a+"<br>")
// document.write("Type: " +typeof(a)+"<br>");
// var b=Number(a);
// document.write("Value: "+b+"<br>")
// document.write("Type: " +typeof(b)+"<br>");

// Q10:

// var a=prompt("Enter the word you want to convert into uppercase");
// document.write("User Input: "+a+"<br>");
// var b= a.toUpperCase();
// document.write("Upper Case: "+b+"<br>");

// Q11:

// var a="javascript"
// document.write(a[0].toUpperCase() + a.slice(1,a.length).toLowerCase());

// Q12:

// var a=35.36;
// var b=Number(a.toString().replace('.', ''))
// var c=b.toString();
// document.write(typeof(a)+" : "+a+"<br>");
// document.write(typeof(c)+" : "+c+"<br>");

// Q13:

// var userName=prompt("Enter your Input: ");
// var message;
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("Please enter a valid username");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);

// Q14:

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var c = prompt("Welcome to ABC Bakery want do you want to order Sir/Ma'am");
// var b = c.toLowerCase();
// var d = a.includes(b);
// if(d == true){
//     alert(b+" is availible at index "+a.indexOf(b)+" in our bakery")
// }
// else{
//     alert("We are sorry. "+b+" is not in our bakery")
// }

// Q15:

// var password = prompt("Password: ");
// var inddd = password.charCodeAt(0);
// if (((inddd >=65 && inddd<=90) || (inddd >=97 && inddd<=122)) && (password.length>6)){
//     document.write("Correct Password");
// }else{
//     document.write("Password is not Correct");
// }

// Q16:

// var university = 'University of Karachi';
// array=university.split("")
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]+"<br>");
// }


// Q17:

// var word=prompt("Please Enter A Word?");
// lastchar=word.charAt(word.length-1)
// document.write("User Input: "+word+"<br>")
// document.write("Last Character Of Input: "+lastchar)


// Q18:

// var text="The quick brown fox jumps over the lazy dog"
// document.write("Text: "+text+"<br>")
// text=text.toLowerCase()
// textarr=text.split(" ")
// a=0
// word="the"
// for (let i = 0; i < textarr.length; i++) {
//     if (textarr[i]===word) {
//         a=a+1;
//     }}
// document.write("There are "+a+" occurrence(s) of word:"+word)


