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
    