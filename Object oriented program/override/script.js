class school
{
    #name;
    #year;

    schoolinf(name,year)
    {
        this.#name = name;
        this.#year = year;
    }

    display()
    {
        document.writeln("Name Of School :"+this.#name+" Year :"+this.#year);
    }
}

class student extends school{
    #studentnm;
    #stdin;

    studentinfo(studentnm,stdin)
    {
        this.#studentnm = studentnm;
        this.#stdin = stdin;
    }

    display()
    {
        super.display();
        document.writeln("Student Name :"+this.#studentnm+" Standard :"+this.#stdin);
    }
}


const show = new student();

show.schoolinf("Tilaknagar Vidyamandir",1968+"<br>");
show.studentinfo("Pranav Patil", 15+"Years");

show.display();