class DogAsClass {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  greetings() {
    console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
  }
}

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.greetings = () => {
//     console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
//   };
// }

document.querySelector('#classDog').addEventListener('click', function () {
  const ruperto = new DogAsClass('ruperto', 'chihuahua');
  ruperto.greetings();
  ruperto.breed = 'African feo';
  ruperto.greetings();
});
