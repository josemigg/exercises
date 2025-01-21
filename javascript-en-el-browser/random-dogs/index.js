const perricosArray = [
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg'
];
console.log(perricosArray);

// console.log(getRandomDogImage());

// addPerrico();

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach((dogImage, index) => {
    const htmlAdd = `<div class="card">
  <img src="${dogImage}" alt="Perro" />
  <br />
  <p>❤️ 🤮</p>
  <button>Preciosísimo</button> <button>Feísisimo</button>
</div>`;

    console.log('innerHtml posición', index, dogList.innerHTML);

    dogList.innerHTML += htmlAdd;
  });
}

const addPerrico = async () => {
  const perricoImg = await getRandomDogImage();
  console.log(perricoImg);
  perricosArray.push(perricoImg);
  renderPerricoArray();
};

renderPerricoArray();

document.querySelector('#add-1-perrico').addEventListener('click', function () {
  addPerrico();
});
