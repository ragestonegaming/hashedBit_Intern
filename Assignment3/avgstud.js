const students = [
    {
        name: "student1",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student2",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student3",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];


const averages = students.map(student => {
    const scores = Object.values(student.scores); 
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length; 
    return { [student.name]: { average: average } }; 
});


console.log(averages);
