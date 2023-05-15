let students =[
    {
        name:"Sid",
        rollNum:1,
        marks:61
    },
    {
        name:"Siddharth",
        rollNum:2,
        marks: 50
    },
    {
      name: "Sidramaraddy",
      rollNum:3,
      marks : 80
    }
    ]
    
console.log(students)    
    
    
let names = []
for(let i=0;i<students.length;i++){
    names.push(students[i].name.toUpperCase())
}


let names1 = students.map((stu)=>{
    return stu.name.toUpperCase()
})

let names2 = students.filter((stu)=>{
    if(stu.marks > 60){
        return stu;
    }
})



let names3 = students.filter((stu)=>{
    if(stu.marks > 60 && stu.rollNum > 1){
        return stu;
    }
})



let sumOfMarks = students.reduce((prev,stud)=>{
    return prev+stud.marks;
},0)

let namesWithCond = students.filter((stu)=>{
    if(stu.marks > 60){
        return stu;
    }
}).map((stu)=>{
    return stu.name;
})

let totalMarks = students.map((stu)=>{
    if(stu.marks<60){
        stu.marks += 20;
    }
    return stu;
}).filter((stu)=>{
    if(stu.marks>60){
        return stu;
    }
}).reduce((acc,stu)=>{
    return acc+stu.marks;
},0)

console.log(totalMarks)
