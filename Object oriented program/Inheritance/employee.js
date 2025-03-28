class employee{

    constructor(name,id,salary,role)
    {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    displayDetails()
    {
        document.writeln(`Name: ${this.name}`);
        document.writeln(`ID: ${this.id}`);
        document.writeln(`Salary: ${this.salary}`);
        document.writeln(`Role: ${this.role}`);
    }

}

const e1 = new employee() ;

e1.name = "John Doe <br>";

e1.id = "E001 <br>";

e1.salary = 50000+"<br>";

e1.role = "Software Engineer";

e1.displayDetails();