class Indian
{
    constructor(adharno,birthplace)
    {
        this.adharno =adharno;
        this.birthplace = birthplace;
    }

    print()
    {
        document.writeln("Aadharno: " + this.adharno+"<br>");
        document.writeln("Birthplace: " + this.birthplace+"<br>");
    }
}

class Person extends Indian
{
    constructor(adharno,birthplace,name,age,gender)
    {
        super(adharno, birthplace);
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    prns()
    {
        super.print();
        document.writeln("Name: " + this.name+"<br>");
        document.writeln("Age: " + this.age+"<br>");
        document.writeln("Gender: " + this.gender+"<br>");
    }
}

class Employee extends Person
{
    constructor(adharno,birthplace,name,age,gender,id,salary,role)
    {
        super(adharno,birthplace,name, age, gender);
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    empl()
    {
        super.prns();
        document.writeln("ID: " + this.id+"<br>");
        document.writeln("Salary: " + this.salary+"<br>");
        document.writeln("Role: " + this.role+"<br>");
    }


}

const c1 = new Employee(2345769867,"nashik","Mananu",22,"Male",2212,4500,"Supervisor");
 c1.empl();
 


