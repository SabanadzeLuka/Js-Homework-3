function Car(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year;
}
function Person(name, age) {
    this.name = name,
    this.age = age,
    this.driveCar = function(car) {
        document.write(this.name + " who's age is " + this.age + "," + " drives " + car.make + " " + car.model + ", " + "which was released in" + " " + car.year)
    }
}
const tom = new Person ("Tom,", 26);
const tesla = new Car ("Tesla", "Model S", 2015);
tom.driveCar(tesla);

document.write('<br/>');

const dean = new Person ("Dean,", 25);
const impala = new Car ("Chevy", "Impala", 1967);
dean.driveCar(impala);

document.write('<br/>');

const bill = new Person ("Bill", 24);
const teslaY = new Car ("Tesla", "Model Y", 2018);
bill.driveCar(teslaY);