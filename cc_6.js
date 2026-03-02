class Employee {
    constructor(name, departtment) {
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
    