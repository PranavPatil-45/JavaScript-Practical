class animal
{
    #name;
    #type;
    #gender;
    #age;
    animal_dtl(name,type,gender,age)
    {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }

    animalinf()
    {
        document.writeln("Name: " + this.#name + "<br>");
        document.writeln("Type: " + this.#type+"<br>");
        document.writeln("Gender: " + this.#gender+"<br>");
        document.writeln("Age: " + this.#age+"<br>");
    }
}

const a1 = new animal();
const a2 = new animal();
const a3 = new animal();

a1.animal_dtl("Lion","Mammal","Male","12");
a2.animal_dtl("Lizard","Reptile","Female","2");
a3.animal_dtl("Parrot","Bird","Male","6")


document.writeln("<h2>Animal -1<h2>");
a1.animalinf();

document.writeln("<h2>Animal -2<h2>");
a2.animalinf();

document.writeln("<h2>Animal -3<h2>");
a3.animalinf();
