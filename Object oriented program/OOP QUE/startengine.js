class Car
{
    #name;
    #fuelType;

    constructor(name,fuelType){
        this.#name = name;
        this.#fuelType =fuelType;
    }

    startEngine()
    {
        if(this.#fuelType === "petrol")
        {
            document.writeln(this.#name + "Starting Engine By Petrol"+ "<br>");

        }
        else if(this.#fuelType === "electric")
        {
            document.writeln(this.#name + "Starting Engine By Electric"+ "<br>");

        }
        else
        {
            document.writeln(this.#name + "Cannot Start Engine, Fuel Type Is Not Supported"+ "<br>");
        }
    }

    
}

const car_petrol = new Car("Land Rover", "petrol");

car_petrol.startEngine();

const car_electric = new Car("Tesla", "electric");

car_electric.startEngine();