const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name = '', id = '', email = '', github = ''){
    super(name, id, email);
    this.github = github;
  }

  getInfo(){
    return{
      name: this.name,
      id: this.id,
      email: this.email,
      github: this.github,
      role: this.role
    }
  };
  
  getGithub(){
    return `${this.engineer}'s Github username is: ${this.github}`;
  }

  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;