class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
 

class manager extends Employee {
    constructor(name, department, teamsize) {
        super(name, department);
        this.teamsize = teamsize;
    }   
    describe() {
        return `${this.name} works in the ${this.department} department and manages a team of ${this.teamsize} people.`;

    }
}
class company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`${employee.name} has been added to the company.`);
    }

    listEmployees() {
        console.log(`_Employee List_`);
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}

const myCompany = new company("Tech Solutions Inc.");
const emp1 = new Employee("Rrelle", "Engineering");
const emp2 = new Employee("Bob", "Marketing");
const manager1 = new manager("Grace", "Engineering", 5);

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(manager1);

myCompany.listEmployees();
