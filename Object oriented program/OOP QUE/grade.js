class student
{
    #percentage;

    percentage(percentage)
    {
        this.#percentage=percentage;
    }

    getGrade()
    {
        if(this.#percentage>100 || this.#percentage<=0)
        {
            document.writeln("Enter Valid percentage");
        }
       else if(this.#percentage>=90)
        {
            document.writeln("A");
        }
        else if(this.#percentage>=80)
        {
            document.writeln("B");
        }
        else if(this.#percentage>=70)
        {
            document.writeln("C");
        }
        else if(this.#percentage>=60)
        {
            document.writeln("D");
        }
        else if(this.#percentage>= undefined)
        {
            document.writeln("Enter percentage");
        }
        else
        {
            document.writeln("F");
        }
    }
}

const  grd = new student();

grd.percentage();

grd.getGrade();