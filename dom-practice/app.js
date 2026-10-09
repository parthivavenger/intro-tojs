document.querySelector("h1").textContent="DOM day 1 practice"
document.querySelector("p").textContent="Hello everyone this is my first day of learning DOM in Java Script"
document.querySelector("h2").textContent="hello world"
document.querySelector("h2").textContent="Hello World"

const numberOfpTag =document.querySelectorAll ("p")
console.log(numberOfpTag)

const heading =document.querySelectorAll ("#title")
console.log(heading)


heading.textContent = "welcome to SIU"

const pTags =document.querySelectorAll (".message")
console.log(pTags)
pTags.forEach((content, i) => content. textContent = `welcome Buddy ${i+1}`)

const announcement = document.querySelector("#announcement")
announcement.innerHTML = "Tommorrow is an <strong>exam</strong>!"

const link = document.querySelector("#myLink")
console.log(link.getAttribute("herf"))


link.setAttribute("href", "https://google.com")
console.log(link.getAttribute("href"))


const image = document.querySelector("#varanasi")
console.log(image.getAttribute("src"))


image.setAttribute("src","../dom-practice/images (4).jpg")
console.log(image.getAttribute("src"))


const resultTitle = document.querySelector("#result")
resultTitle.classList.add("highLight")

resultTitle.classList.remove("highLight")

resultTitle.classList.toggle("highLight")

// creat a HTML Tag
const newParagraph = document.createElement("p");
newParagraph.textContent = "Welcome to JavaScript cllass"
document.querySelector("body").appendChild(newParagraph);

const boxContainer = document.getElementById("box")
const newParagraph2 = document.createElement("p");
newParagraph2.textContent = "Welcome to Phython cllass"
boxContainer.appendChild(newParagraph2)

const newParagraph3 =document.createElement("p");
newParagraph3.textContent = "welcome to DSA class";

const newParagraph4 =document.createElement("p");
newParagraph4.textContent = "welcome to Computer Fundamental class";

boxContainer.append(newParagraph3, newParagraph4, "welcome to CN class");

//Automate update the year
// const yearspan = document.querySelector("#year");
// const currentYear2 = new Date().getFullYear();
// yearspan.textContent = currentYear2

// const date = new Date();
// const yearspan = document.querySelector("#year");
// const currentYear = Date().getFullYear();
// yearspan.textContent = currentYear

// const hours = Date().getHours();

// let timeOfDay;

// if (hours < 12) {
//     timeOfDay = "Good Morning";
// } else if (hours < 16) {
//     timeOfDay = "Good Afternoon";
// } else if (hours < 20) {
//     timeOfDay = "Good Evening";
// } else {
//     timeOfDay = "Good Night";
// }

// const greetingElement = document.querySelector("#greeting");
// greetingElement.textContent = `Good ${timeOfDay}! Thank you!`


const navToggle =document.querySelector('#navToggle');
const siteNav = document.querySelector('#siteNav');

navToggle.addEventListener('click', function() {
    siteNav.classList.toggle('nav-open');
});


const themeToggle = document.querySelector("#darkAndLight");
themeToggle.addEventListener('click' , function() {
    document.body.classList.toggle('darkMode')
})


const message = document.querySelector('#message');
const charcount = document.querySelector('#charcount');

if (message && charcount) {
    message.addEventListener('input', function(event) {
        charcount.textContent = event.target.value.length +'/ 200'

})

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        siteNav.classList.remove('nav-open')
    }
})

const snacks = [
    { name: "Apple", price: 1.5},
    { name: "Granola Bar", price: 2.0},
    { name: "Trail Mix", price: 3.25},
]

const snackList = document.querySelector("#snackList")

const html = snacks.map(function (snack) {
    return `<li>${snack.name}-$${snack.price.toFixed(2)}</li>`;
 }) .join("");

snackList.innerHTML = html

const projects = [
    {
     id: 1,                        
     title: "Portfolio Website",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true                 
    }
    
    ,

    {
    id: 2,                        
     title: "name",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true 
    }
    
    ,

    {
    id: 3,                        
     title: "claculater ",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true  
    }
    
    ,

    {
    id: 4,                        
     title: "google Website",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true 
    }
  
]


const ProJect = document.querySelector("#ProJect")

const htmL = projects.map(function (project) {
    return `<li>${project.id.toFixed()}- ${project.title} - [${project.technologies}]</li>`;
 }) .join("");

proJect.innerHTML = htmL



























// const emTags =document.querySelectorAll (".em")
// console.log(emTags)

// emTags.textContent = "This is em tag"

// heading.textContent = "welcome to SIU"

