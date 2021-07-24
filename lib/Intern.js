const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name = '', id = '', email = '', school = ''){
    super(name, id, email);
    this.school = school;
  }

  getInfo(){
    return{
      name: this.name,
      id: 7,
      email: this.email,
      github: this.school,
      role: this.role
    }
  };
  
  getSchool(){
    return `${this.intern} attends ${this.school}`;
  }

  getRole() {
    return `Intern`;
  }
}

module.exports = Intern;