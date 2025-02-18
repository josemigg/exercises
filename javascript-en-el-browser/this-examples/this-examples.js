console.log('this fuera del listener', this);

document.querySelector('#myButton').addEventListener('click', function () {
  console.log('this dentro del listener del botón', this);
});

document.querySelector('#myButton').addEventListener('click', () => {
  console.log('this dentro del listener del botón con función flecha', this);
});

document.querySelector('#myInput').addEventListener('change', function () {
  console.log('this dentro del listener del input', this);
});

const dog = {
  breed: 'chihuahua',
  name: 'Ruperto',
  greetings: function () {
    console.log('this dentro de greetings del perro', this);
    console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
  },
  greetingsConArrow: () => {
    console.log('saludos con flecha ', this);
  }
};

document.querySelector('#dogGreeting').addEventListener('click', function () {
  console.log('el saludo del perro', this);
  const that = this;
  function loQueSea() {
    console.log({ this: this, that });
  }

  dog.greetings();
  dog.greetingsConArrow();
  loQueSea();
});
