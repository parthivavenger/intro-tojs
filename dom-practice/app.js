
const savedTheme = localStorage.getItem('theme');
console.log(`last saved theme is ${savedTheme}`)
if (savedTheme === 'dark') {
    document.body.classList.add('darkMode')
}





document.querySelector("h1").textContent = "DOM day 1 practice"
document.querySelector("p").textContent = "Hello everyone this is my first day of learning DOM in Java Script"
document.querySelector("h2").textContent = "hello world"
document.querySelector("h2").textContent = "Hello World"

const numberOfpTag = document.querySelectorAll("p")
console.log(numberOfpTag)

const heading = document.querySelectorAll("#title")
console.log(heading)


heading.textContent = "welcome to SIU"

const pTags = document.querySelectorAll(".message")
console.log(pTags)
pTags.forEach((content, i) => content.textContent = `welcome Buddy ${i + 1}`)

const announcement = document.querySelector("#announcement")
announcement.innerHTML = "Tommorrow is an <strong>exam</strong>!"

const link = document.querySelector("#myLink")
console.log(link.getAttribute("herf"))


link.setAttribute("href", "https://google.com")
console.log(link.getAttribute("href"))


const image = document.querySelector("#varanasi")
console.log(image.getAttribute("src"))


image.setAttribute("src", "../dom-practice/images (4).jpg")
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

const newParagraph3 = document.createElement("p");
newParagraph3.textContent = "welcome to DSA class";

const newParagraph4 = document.createElement("p");
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


const navToggle = document.querySelector('#navToggle');
const siteNav = document.querySelector('#siteNav');

navToggle.addEventListener('click', function () {
    siteNav.classList.toggle('nav-open');
});


const themeToggle = document.querySelector("#darkAndLight");
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode'))
        localStorage.setItem('theme', 'dark')
    else {
        localStorage.setItem('theme', 'light')
    }

})


const message = document.querySelector('#message1');
const charcount = document.querySelector('#charcount');

if (message && charcount) {
    message.addEventListener('input', function (event) {
        charcount.textContent = event.target.value.length + '/ 200'

    })

}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        siteNav.classList.remove('nav-open')
    }
})

const snacks = [
    { name: "Apple", price: 1.5 },
    { name: "Granola Bar", price: 2.0 },
    { name: "Trail Mix", price: 3.25 },
    { name: "Blueberry", price: 2.5 },
    { name: "Banana", price: 0.5 },
    { name: "Lays", price: 1.25 },
]

const snackList = document.querySelector("#snackList")

const html = snacks.map(function (snack) {
    return `<li>${snack.name}-$${snack.price.toFixed(2)}</li>`;
}).join("");

snackList.innerHTML = html

const project = [
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
        title: "Tic-Tak-Toe Board",
        description: "A styled, static tic-tac-toe game border.",
        category: "Web",
        technologies: ["HTML", "CSS"],
        featured: true
    }

    ,

    {
        id: 3,
        title: " Number claculater ",
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
        category: "design",
        technologies: ["HTML", "CSS"],
        featured: true
    }

]


// const ProJect = document.querySelector("#ProJect")

// const htmL = projects.map(function (project) {
//     return `<li>${project.id.toFixed()}- ${project.title} - ${project.description} - ${project.featured} - ${project.category} - [${project.technologies}]</li>`;
//  }) .join("");

// proJect.innerHTML = htmL
// // rederProgects(projects);
// console.log(projects.filter(project => project.category ==="Web"))

// console.log(projects.map(project => project.category))

// console.log(new Set(projects.map(project => project.category)))


// console.log(["All", ...new Set(projects.map(project => project.category))])


// function renderProjects (projecList) {
//     const grid = document.querySelector("#projecGrid");

//     const cardsHTML = projects.map(function (project) {
//         return `
//         <div class="project-card">
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//         </div>`
//     }).join("")

//     grid.innerHTML = cardsHTML;
// }








// function renderFilterButton() {

//     const categories = ["All", ...new Set(projects.map(project => project.category))]

//     const buttonHtml = categories.map(function (category) {
//         return `<button class = "filter-btn" data-tag = "${category}"> ${category} </button>`
//     }).join("")


//     document.querySelector("#filterButton").innerHTML = buttonHtml

//     document.querySelector("#filterButton").addEventListener('click', function (event) {
//         if (event.target.matches(".filter-btn")) {
//             applyFilters(event.target.dataset.tag)
//         }

//      })

// }
// renderFilterButton()

// function applyFilters(category) {
//     if (category ==="All") {
//         renderProjects(projects)
//     } else {
//         renderProjects( projects.filter(project => project.category === category))
//     }

// }



// const project=[
//            {
//     id: 1,                        
//      title: "Portfolio Website",    
//     description: "A responsive personal portfolio website.", 
//      category: "Web",               
//      technologies: ["HTML", "CSS"], 
//      featured: true                 
//    },
//    {
//     id: 2,                        
//      title: "Portfolio Website",    
//     description: "A responsive personal portfolio website.", 
//      category: "Web",               
//      technologies: ["HTML", "CSS"], 
//      featured: true                 
//    },
//    {
//     id: 3,                        
//      title: "Portfolio Website",    
//     description: "A responsive personal portfolio website.", 
//      category: "Web",               
//      technologies: ["HTML", "CSS"], 
//      featured: true                 
//    },
//    {
//     id: 4,                        
//      title: "Portfolio Website",    
//     description: "A responsive personal portfolio website.", 
//      category: "Web",               
//      technologies: ["HTML", "CSS"], 
//      featured: true                 
//    },
// ];

//function renderProject(projectList)
// const projectList=document.querySelector("#projectList");
// const html1=project.map(function (project) {
//     return `<li>${project.id} - ${project.title} - ${project.description} - ${project.category} - ${project.technologies} - ${project.featured}</li>`;
// }).join("");
// projectList.innerHTML = html1

// console.log(project.filter(project => project.category === "Web") )

// console.log(project.map(project => project.category));
// console.log(["All", ...new Set(project.map(project => project.category))]);





function renderProject(projectList) {
    const grid = document.querySelector("#projectGrid");

    const cardsHTML = projectList.map(function (project) {
        return `
        <div class="project-card">
        <h3>${project.id} - ${project.title}</h3>
        <p>${project.description}</p>
        <div>
        `
    }).join("")
    grid.innerHTML = cardsHTML;


}

function renderFilterButton() {
    const categories = ["All", ...new Set(project.map(project => project.category))]

    const buttonHtml = categories.map(function (category) {
        return `<button class = "filter-btn" data-tag = "${category}"> ${category} </button>`
    }).join("")
    document.querySelector("#filterButton").innerHTML = buttonHtml
    document.querySelector("#filterButton").addEventListener('click', function (event) {
        if (event.target.matches(".filter-btn")) {
            applyFilters(event.target.dataset.tag)
        }
    })
}
renderFilterButton();

function applyFilters(category) {
    if (category === "All") {
        renderProject(project)
    } else {
        renderProject(project.filter(project => project.category === category));
    }
}


//form Submission

// const contactForm = document.querySelector('#contact-form')

// // contactForm.addEventListener('submit', function (event) {
// //     // event.preventDefault(); 
// //     console.log('submit intercepted - the page did not reload');
// // });

// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name=document.querySelector("#name").value.trim();
//     const email=document.querySelector("#email").value.trim();
//     const message=contactForm.querySelector("#message").value.trim();

//     let isFormValid = formValidation(name, email, message)
//     if(isFormValid) {
//          console.log({name, email, message})
//     }


//    // if (formValidation(name,email,message)) {}


//     // console.log(name);
//     // console.log(email);
//     // console.log(message);



//     //console.log({name, email, message})
// })


// function isEmailValid(value) {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(value);

// }


// console.log(isEmailValid('parthiv@gmail.com'))


// function showError(fieldId, show) {
//     const errorElement = document.querySelector(`#${fieldId}-error)`);
//     errorElement.classList.toggle('show', show);
// }

// function formValidation(name, email, message) {
//     let isValid = true;

//     if (name === "") {
//         showError('name', true);
//         isValid =false;
//     } else {
//         showError('name', false);
//     }

//     if (email === '' || !isEmailValid(email)) {
//         showError('email', true);
//         isValid =false
//     } else {
//         showError('email', false);
//     }

//     if (message === '') {
//         showError('message', true);
//         isValid =false
//     } else {
//         showError('message', false);
//     }

//     return isValid
// }


const contactForm = document.querySelector('#contact-form');

// contactForm.addEventListener('submit',function (event) {
//     //event.preventDefault();
//     console.log('submit intercepted - the page did NOT reload.');
// });
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    let isFormValid = formValidation(name, email, message)

    if (formValidation(name, email, message)) {
        console.log({ name, email, message })
    }
    // console.log(name);
    // console.log(email);
    // console.log(message);
})

function isEmailValid(value) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(value);
}

console.log(isEmailValid('Likith@gmail.com'))

function showError(fieldId, show) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    errorElement.classList.toggle('show', show);
}

function formValidation(name, email, message) {
    let isValid = true;

    if (name === "") {
        showError('name', true);
        isValid = false;
    } else {
        showError('name', false);
    }

    if (email === '' || !isEmailValid(email)) {
        showError('email', true);
        isValid = false
    } else {
        showError('email', false);
    }

    if (message === '') {
        showError('message', true);
        isValid = false
    } else {
        showError('message', false);

    }
    return isValid;
}


localStorage.setItem('color', 'blue');
console.log(localStorage.getItem('color'));
localStorage.removeItem('color');
console.log(localStorage.getItem('color'));

const student = { name: 'parthiv', favSubject: 'JavaScript' }
const student01 = { name: 'shantan', favSubject: 'HTML' }
const student02 = { name: 'mohith', favSubject: 'CSS' }
const student03 = { name: 'tejith', favSubject: 'PYTHON' }
localStorage.setItem('student1', JSON.stringify(student))
localStorage.setItem('student2', JSON.stringify(student01))
localStorage.setItem('student3', JSON.stringify(student02))
localStorage.setItem('student4', JSON.stringify(student03))
console.log(localStorage.getItem('student1'));
console.log(JSON.parse(localStorage.getItem('student1')).favSubject);

// localStorage.setitem()

console.log(`_______________________________`)
const favourites = { favhero: "bob", favsport: "badmenton", favfood: "biriyani" }
localStorage.setItem('fav', JSON.stringify(favourites))
console.log(localStorage.getItem('fav'));
console.log(JSON.parse(localStorage.getItem('fav')).favsport)






























































// const emTags =document.querySelectorAll (".em")
// console.log(emTags)

// emTags.textContent = "This is em tag"

// heading.textContent = "welcome to SIU"
