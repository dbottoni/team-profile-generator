class Employee {
  constructor(name = '', id = '', email = ''){
    this.name = name,
    this.id = id,
    this.email = email
  }

  getName (){
    return `This employee's name is : ${this.name}`;
  }

  getID(){
    return `This employee's ID is: ${this.id}`;
  }

  getEmail(){
      return `This employee's email address is: ${this.email}`;
  }


  getRole(){
    return `Employee`;
  }

}

module.exports = Employee;