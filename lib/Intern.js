const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name = '', id = '', email = '', school = ''){
    super(name, id, email);
    this.school = school;
  }

  getInfo(){
    return{
      name: this.name,
      id: this.id,
      email: this.email,
      school: this.school,
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