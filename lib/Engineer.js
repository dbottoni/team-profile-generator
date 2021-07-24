const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name = '', id = '', email = '', engGithub = ''){
    super(name, id, email);
    this.github = engGithub;
  }

  getIngo(){
    return{
      name: this.name,
      id: this.id,
      email: this.email,
      github: this.github,
      role: this.role
    }
  };
  
  getGithub(){
    return`${this.engineers}'s Github username is : ${this.github}`;
  }

  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;