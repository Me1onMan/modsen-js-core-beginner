class Human {
  name;
  age;
  country;

  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  showInfo = () => {
    console.log(
      `Name: ${this.name} \nAge: ${this.age} \nCountry: ${this.country}`
    );
  };
}

const bob = new Human("Bob", 21, "USA");
const rob = new Human("Rob", 34, "Canada");
bob.showInfo();
console.log();
rob.showInfo();
