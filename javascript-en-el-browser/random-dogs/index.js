const perricosArray = [
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg'
];
console.log(perricosArray);

// console.log(getRandomDogImage());

// addPerrico();

function addSocialListeners() {
  document.querySelectorAll('.like').forEach((buttonNode) => {
    buttonNode.addEventListener('click', function () {
      console.log('me gusta clickado');
      const hermanico = buttonNode.previousElementSibling;
      const likeCountNode = hermanico.querySelector('.like-count');
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });
}

function renderPerrico(dogImage) {
  const htmlAdd = `<div class="card">
  <img src="${dogImage}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>
</div>`;
  document.querySelector('#dog-list').innerHTML += htmlAdd;
}

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach((dogImage) => {
    renderPerrico(dogImage);
  });

  addSocialListeners();
}

const addPerrico = async () => {
  const perricoImg = await getRandomDogImage();
  console.log(perricoImg);
  perricosArray.push(perricoImg);
  renderPerrico(perricoImg);
  addSocialListeners();
};

document.querySelector('#add-1-perrico').addEventListener('click', function () {
  addPerrico();
});

document.querySelector('#add-5-perricos').addEventListener('click', function () {
  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
});

renderPerricoArray();
