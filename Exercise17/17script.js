class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  class Apartment {
    arrayOfPerson = [];
    addPerson(person) {
      this.arrayOfPerson.push(person);
    }
  }
  class House {
    arrayOfApartment = [];
    constructor(maxCountApartments) {
      this.maxCountApartments = maxCountApartments;
    }
    addApartment(apartment){
      const countApartment= this.arrayOfApartment.length;
      if (countApartment < this.maxCountApartments){
       this.arrayOfApartment.push(apartment);
      } else {
          console.log("Kількість перевищує максимальну кількість квартир");
      }
    }
  }
  
  const person1 = new Person('Sofi','female');
  const person2 = new Person('Alex', 'male');
  const person3 = new Person('Dasha', 'female');
  
  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  const apartment3 = new Apartment();
  const apartment4 = new Apartment();
  
  apartment1.addPerson(person1);
  apartment2.addPerson(person2);
  apartment3.addPerson(person3);
  
  const house = new House(1);
  house.addApartment(apartment1);
  house.addApartment(apartment2);
  house.addApartment(apartment3);
  house.addApartment(apartment4);