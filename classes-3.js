class Worker {
  name;
  salary;

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getYearSalary = () => {
    return this.salary * 12;
  };
}

class Manager extends Worker {
  department;

  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getYearSalary = () => {
    return this.salary * 12 * 1.2 + 55;
  };
}

const manager1 = new Manager("Bob", 100, "Development");
const manager2 = new Manager("James", 200, "Testing");

console.log(`${manager1.name}: ${manager1.getYearSalary()}`);
console.log(`${manager2.name}: ${manager2.getYearSalary()}`);
