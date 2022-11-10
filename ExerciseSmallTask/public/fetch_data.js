

const button = document.getElementById("fetch-button");
const dogInfoParagraph = document.getElementById("dog-info");

button.addEventListener("click", ()=>{
fetch("http://localhost:3000/api")
   .then(response => response.json())
   .then(result =>{
    Object.entries(result).forEach(([key, value]) =>{
     // console.log(key);
     // console.log(value);
     const spanElement =document.createElement('span');
     spanElement.textContent=`${key}: ${value}`;
     dogInfoParagraph.append(spanElement);
    });
   });
});