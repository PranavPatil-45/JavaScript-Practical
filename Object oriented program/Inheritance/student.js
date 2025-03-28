class student
{
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    constructor(roll_no, name, age, std, percentage)
    {
        this.#roll_no = roll_no;
        this.#name = name;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }
    display()
    {
        document.writeln("Roll No: " + this.#roll_no+"<br>");
        document.writeln("Name: " + this.#name+"<br>");
        document.writeln("Age: " + this.#age+"<br>");
        document.writeln("Standard: " + this.#std+"<br>");
        document.writeln("Percentage: " + this.#percentage+"<br>");
    }
}

const s1 = new student(38,"Pranav Patil",20,"12th","60%");


s1.display();