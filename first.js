
// const element = document.createElement('li');
// element.innerHTML="TS";

// const parent = document.getElementById("root");
// parent.appendChild(element);

// function attach(content){

//     const element = document.createElement('li');
//     element.innerHTML=content;

//     const element2=document.createElement('li')
//     element2.innerHTML=content+"V2.0";//isme hum multiple elements daal sakte h

//     const parent = document.getElementById("root");
//     // parent.appendChild(element);//aap ek baari mai ek hi ko attach kara sakte ho
//     // parent.append(element,"Hello Coder Army");
//     parent.append(element,element2,);

// }

// attach("TS");
// attach("Node.js");
// attach("SQL");
// attach("React");
// attach("Github");


// ***********************text node***************************************************

//how to create text node--jinke sath koi tag connect n ho
// const element=document.createTextNode("hello ji");
// const parent=document.getElementById('root')
// parent.appendChild(element);





// *******************************************************attribute***************************************************************

// const element=document.createAttribute("id");
// element.value="first";

// const curr_list=document.querySelector('li')
// curr_list.setAttributeNode(element);


//acess to second list

// const parent = document.getElementById("root");
// // console.log(parent.children[1]);  //isse second wala access hoga agr mujhe third wala karna h to mai 2 likh sakti hu
// parent.children[1].setAttributeNode(element);

// const element = document.getElementById("root");
// element.setAttribute("custom","20");
// element.setAttribute("class","rohan")
// element.removeAttribute("custom");


//**************************add nodes to the dom************************** *//

const parent = document.getElementById("root");

const element = document.createElement("li");
element.innerHTML = "TS";

parent.prepend(element);//(prepend)ab ye element sabse aage jake attach ho jayega....(append)sabse pichhe attach hoga




//agr mujhe aise hi koi beech mai dalna h

const child2 = parent.children[2];
parent.insertBefore(element,child2);


//agr mujhe koi child se replace karna h to
// parent.replaceChild(element,child2);


