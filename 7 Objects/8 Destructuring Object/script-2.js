const employees = {
    engineers: {
        emp1: { 
            id: 1, 
            userName: 'Prakash', 
            occupation: 'Software Engineer' 
        },
        emp2: { 
            id: 2, 
            userName: 'Priyanshu', 
            occupation: 'Data Scientist' 
        }
    },
    placement: {
        emp3: { 
            id: 3, 
            userName: 'Ashish', 
            occupation: 'HR Manager' 
        }
    },
    youtube: {
        emp4: { 
            id: 4, 
            userName: 'Chris Brown', 
            occupation: 'Content Creator' 
        }
    }
};

let {engineers: {emp2: {userName, occupation}}} = employees;
console.log(userName, occupation);

let {youtube: {emp4}} = employees;
console.log(emp4);