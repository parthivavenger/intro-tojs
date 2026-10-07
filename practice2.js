const students=["Parthiv", "Likith", "Mohith", "Dino", "Tejith"];

console.log(students);
console.log(students.length);

students.push("pranay");
console.log(students);

students.pop();
console.log(students);
                 // BIG 4
//forEach() 
//map()
//filter()
//find()

students.forEach ((student) =>{
    console.log(student);
}) 

const score =[75,80,72,78,76]
console.log(score)

const extraScore = score.map((score) =>  score+5)
console.log(extraScore);

const topScorers = extraScore.filter((score) => score >80)
console.log(topScorers);

const topper = topScorers.find ((score) => score > 60)
console.log(topper)

const student = {
    name : "Parthiv",
    age : 20 ,
    gender : "Male",
    course : "JavaScript",
    mark : 93,
    "passing year" : 2030,

};

console.log(student);
console.log(student.name);
console.log(student.mark);
console.log(student["passing year"]);

// Array of object

const newStudents = [ 
    {
        name : "Parthiv",
        age : 17,
        mark : 93,

    },
    {
        name: "Likith",
        age : 18,
        mark : 90
    },
    {
        name: "Mohith",
        age : 18,
        mark : 88
    }
]

console.log(newStudents);