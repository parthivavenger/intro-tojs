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
     title: "Portfolio Website",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true 
    }
    
    ,

    {
    id: 3,                        
     title: "Portfolio Website",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true  
    }
    
    ,

    {
    id: 4,                        
     title: "Portfolio Website",    
     description: "A responsive personal portfolio website.", 
     category: "Web",               
     technologies: ["HTML", "CSS"], 
     featured: true 
    }
  
]

projects.forEach((project) => {
    console.log(`${project.title} - ${project.description} [${project.category}]`)
})

const formattedProjects = projects.map((project) => {
    return `${project.title} - ${project.description} [${project.category}]`
})
console.log(formattedProjects)