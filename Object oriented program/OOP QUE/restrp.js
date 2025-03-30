class Restaurent
{
    constructor(name,cuisineType, rating)
    {
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }

    displayDetails()
    {
       document.writeln("Name Of Restaurent :"+this.name+"<br>");
       document.writeln("Cuisine Type :"+this.cuisineType+"<br>");
       document.writeln("Rating :"+this.rating+"<br>");
    }


}


const t1 = new Restaurent("Lulla Kabab","Non Vegetarian mughali",5+"stars");
const t2 = new Restaurent("Jai Mata Di Restro","Vegetarian Indian",4+"stars");
const t3 = new Restaurent("Cafe Coffee Day","Cafe Brewery",5+"stars");

t1.displayDetails();

document.writeln("<br>")

t2.displayDetails();

document.writeln("<br>")

t3.displayDetails();