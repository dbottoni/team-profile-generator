const Employee = require('./Employee');

class Manager extends Employee{
  constructor(name = '', id = '', email = '', office = ''){
    super(name, id, email);
    this.email = email;
    this.office = office;
  }

  getInfo(){
    return{
    name: this.name,
    id: this.id,
    email: this.email,
    office: this.office,
    role: this.role
    }
  };

  getOffice(){
    return `${this.manager} occupies office: ${this.office}`;
  }

  getRole(){
    return `Manager`;
  }
}

module.exports = Manager;