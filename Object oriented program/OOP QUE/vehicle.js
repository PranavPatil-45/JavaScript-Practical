class vehicle
{
    brand;
    year;
    constructor(brand, year)
    {
        this.brand = brand;
        this.year = year;
    }
    getDetails()
    {
        document.writeln("Brand: " + this.brand);
        document.writeln("Year: " + this.year);
    }
}

class car extends vehicle
{
    fuelType;
    constructor(brand, year, fuelType)
    {
        super(brand, year);
        this.fuelType = fuelType;
    }
    getDetails()
    {
        super.getDetails();
        document.writeln("Fuel Type: " + this.fuelType+"<br>");
    }
}

class Bike extends vehicle
{
    hasGear;

    constructor(brand, year, hasGear)
    {
        super(brand, year);
        this.hasGear = hasGear;
    }
    getDetails()
    {
        super.getDetails();
        document.writeln("Gear: " + this.hasGear+"<br>");
    }
}

class ElectricCar extends car
{
    batteryCapacity;
    constructor(brand, year, fuelType, batteryCapacity)
    {
        super(brand, year, fuelType);
        this.batteryCapacity = batteryCapacity;
    }
    getDetails()
    {
        super.getDetails();
        document.writeln("Battery Capacity: " + this.batteryCapacity + " kWh"+"<br>");
    }
}

const car1 = new car("Toyota", 2020, "Gasoline");

car1.getDetails();

const bike1 = new Bike("Scott", 2018, "Has Gear");

bike1.getDetails();

const electricCar1 = new ElectricCar("Tesla", 2021, "Electricity", 300);

electricCar1.getDetails();
