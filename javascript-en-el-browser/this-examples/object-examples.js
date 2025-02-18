const dogAsObject = {
  breed: 'chihuahua',
  name: 'Ruperto',
  age: 50,
  weight: 200,
  greetings: function () {
    console.log('this dentro de greetings del perro', this);
    console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
  },
  greetingsConArrow: () => {
    console.log('saludos con flecha ', this);
  }
};

function Dog(name, breed, age, weight) {
  this.name = name;
  this.breed = breed;
  this.greetings = () => {
    console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
  };
}

document.querySelector('#objectDog').addEventListener('click', function () {
  const ruperto = new Dog('Ruperto', 'chihuahua');
  const rigoberto = new Dog('Rigoberto', 'pitbull');

  ruperto.greetings();
  rigoberto.greetings();
});
