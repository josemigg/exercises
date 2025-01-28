const perricosArray = ['https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg'];
console.log(perricosArray);

// console.log(getRandomDogImage());

// addPerrico();

function renderPerrico() {}

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach((dogImage, index) => {
    const htmlAdd = `<div class="card">
  <img src="${dogImage}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>
</div>`;

    dogList.innerHTML += htmlAdd;
  });

  document.querySelectorAll('.like').forEach((buttonNode) => {
    buttonNode.addEventListener('click', function () {
      console.log('me gusta clickado');
      const hermanico = buttonNode.previousElementSibling;
      const likeCountNode = hermanico.querySelector('.like-count');
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });
}

const addPerrico = async (addToStart) => {
  const perricoImg = await getRandomDogImage();

  if (addToStart) {
    perricosArray.unshift(perricoImg);
  } else {
    perricosArray.push(perricoImg);
  }

  const dogList = document.querySelector('#dog-list');

  const htmlAdd = `<div class="card">
  <img src="${perricoImg}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>
</div>`;

  if (addToStart) {
    dogList.innerHTML = htmlAdd + dogList.innerHTML;
  } else {
    dogList.innerHTML = dogList.innerHTML + htmlAdd;
  }

  document.querySelectorAll('.like').forEach((buttonNode) => {
    buttonNode.addEventListener('click', function () {
      const hermanico = buttonNode.previousElementSibling;
      const likeCountNode = hermanico.querySelector('.like-count');
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });
};

document.querySelector('#add-1-perrico').addEventListener('click', function () {
  addPerrico();
});

document.querySelector('#add-1-perrico-start').addEventListener('click', function () {
  addPerrico(true);
});

document.querySelector('#add-5-perricos').addEventListener('click', function () {
  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
});

document.querySelector('#like-filter').addEventListener('click', function () {
  document.querySelectorAll('.like-count').forEach((likeCountNode) => {
    if (likeCountNode.innerText === '') {
      const cardNode = likeCountNode.closest('.card');
      cardNode.style.display = 'none';
    }
  });
});

document.querySelector('#dislike-filter').addEventListener('click', function () {
  console.log('dislike filter clicked');
});

renderPerricoArray();
