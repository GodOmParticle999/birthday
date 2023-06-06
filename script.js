const birthdayInput=document.querySelector(".birthdayInput");
const form=document.querySelector(".form");
const imageContainer=document.querySelector(".imageContainer");
const detailsContainer=document.querySelector(".detailsContainer");
// const names=['navin','ayushmaan','ayush','samarth','aarohi','lakshya','amya','chhandu','anumati','roshan','reena','aradhya','archana','kiran','seema','rani','priya','om','chakradhari','sukant','sundar','ram','lakshman'];
const objectNames=[{name:"navin",birthDay:"26 December",birthYear:1999},
{name:"anumati",birthDay:"01 January",birthYear:1966},
{name:"ram",birthDay:"25 April",birthYear:2023},
{name:"lakshman",birthDay:"25 April",birthYear:2023},
{name:"aaradhya",birthDay:"01 January",birthYear:"2016"},
{name:"samarth",birthDay:"30 March",birthYear:2022},
{name:"roshan",birthDay:"29 October",birthYear:2014},
{name:"ayush",birthDay:"07 June",birthYear:2015},
{name:"ayushmaan",birthDay:"07 June",birthYear:2015},
{name:"chhandu",birthDay:"16 October",birthYear:1968},
{name:"lakshya",birthDay:"28 January",birthYear:2015},
{name:"priya",birthDay:"13 April",birthYear:2000},
{name:"aameya",birthDay:"22 August",birthYear:2013},
{name:"seema",birthDay:"09 January",birthYear:1992},
{name:"kiran",birthDay:"09 December",birthYear:1996},
{name:"chakradhari",birthDay:"17 November",birthYear:1987},
{name:"sukant",birthDay:"01 January",birthYear:1987},
{name:"reena",birthDay:"13 December",birthYear:1998},
{name:"sakhichand",birthDay:"27 December",birthYear:1943},
{name:"jitni",birthDay:"01 January",birthYear:1947},
{name:"aarohi",birthDay:"17 October",birthYear:2017},
{name:"saraswati",birthDay:"01 January",birthYear:1953},
{name:"rani",birthDay:"14 June",birthYear:2008},
{name:"om",birthDay:"18 October",birthYear:2014}

];
const currentYear=new Date().getFullYear();
console.log(currentYear);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const birthdayName=(birthdayInput.value).toLowerCase();
    imageContainer.innerHTML="";
    detailsContainer.innerHTML="";
    birthday(birthdayName);
   
})
const birthday=(birthdayName)=>{
//    console.log(objectNames);
   for(let i=0;i<objectNames.length;i++){
    
       if(objectNames[i].name===birthdayName){
        const years=currentYear-objectNames[i].birthYear;
        imageContainer.innerHTML=`<img src="./${birthdayName}.jpg" alt="${birthdayName}">`;
        detailsContainer.innerHTML=`<h2>${birthdayName} is ${years} years old and birthday is on ${objectNames[i].birthDay}!</h2>`;
        console.log(objectNames[i].name);
        break;
       }
       else{
        detailsContainer.innerHTML=`<h2>Please correct the spelling of ${birthdayName}!</h2>`;
       }
  }
    // if(names.includes(birthdayName)){
    //     imageContainer.innerHTML=`<img src="images/${birthdayName}.jpg" alt="${birthdayName}">`;
    //     detailsContainer.innerHTML=`<h2>${birthdayName}'s birthday is on ...!</h2>`;
    // }
    // else{
    //     detailsContainer.innerHTML=`<h2>Please correct the spelling of ${birthdayName}!</h2>`
    // }
}