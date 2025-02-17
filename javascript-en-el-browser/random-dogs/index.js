// antes tenía urls ahora va a tener un objeto con url de la imagen y la raza.
const perricosArray = [];
// Me va a guardar cuántos perricos hay de cada raza, va a guardar algo tipo chihuahua: 2
const breedsCount = {};

const timeoutId = setTimeout(() => {
  document.querySelector('#add-warning').style.display = '';
}, 3000);
// console.log(getRandomDogImage());

// addPerrico();

async function createBreedsSelect() {
  // llamo a la función del endpoint;
  // cojo la respuesta que es un objeto clave valor donde la clave es el nombre de la raza y el valor un array con subrazas
  // y lo convierto en un array solo con las claves utilizando Object.keys
  // recorro el array de Object keys creando el html del select
  const breeds = await getBreeds();
  const breedsList = Object.keys(breeds);
  console.log(breedsList);

  let breedsOptions = ''; //'<option value="">Random</option>';
  breedsList.forEach((breed) => {
    breedsOptions += `<option value="${breed}">${breed}</option>`;
  });

  console.log(breedsOptions);

  document.querySelector('#breeds-picker').innerHTML = breedsOptions;
}

createBreedsSelect();

function clearWarningMessage() {
  clearTimeout(timeoutId);
  document.querySelector('#add-warning').style.display = 'none';
}

function addSocialListeners() {
  document.querySelectorAll('.like').forEach((buttonNode) => {
    buttonNode.addEventListener('click', function () {
      const hermanico = buttonNode.previousElementSibling;
      const likeCountNode = hermanico.querySelector('.like-count');
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });

  document.querySelectorAll('.dislike').forEach((buttonNode) => {
    buttonNode.addEventListener('click', function () {
      console.log(buttonNode.closest('.card'));
      const likeCountNode = buttonNode.closest('.card').querySelector('.dislike-count');
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
    });
  });
}

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

  addSocialListeners();
}

function disableAllAddPerricoButtons() {
  document.querySelectorAll('.add-button').forEach((buttonNode) => {
    buttonNode.disabled = true;
  });
}

function enableAllAddPerricoButtons() {
  document.querySelectorAll('.add-button').forEach((buttonNode) => {
    buttonNode.disabled = false;
  });
}

function updateBreedsFilters(breed) {
  const breedsFiltersNode = document.querySelector('.breed-filters');

  breedsFiltersNode.style.display = '';

  const buttonId = `${breed}-filter`;

  if (!breedsCount[breed]) {
    breedsCount[breed] = 1;

    const filterNode = document.createElement('button');
    filterNode.id = buttonId;
    filterNode.innerText = `${breed} (1)`;
    breedsFiltersNode.appendChild(filterNode);

    return;
  }

  breedsCount[breed] += 1;
  const filterButtonNode = breedsFiltersNode.querySelector(`#${buttonId}`);
  filterButtonNode.innerHTML = `${breed} (${breedsCount[breed]})`;
}

const addPerrico = async (addToStart) => {
  const breed = document.querySelector('[name=breeds]').value;
  const perricoInfo = await getRandomDogImage(breed);
  const perricoImg = perricoInfo.imgUrl;

  if (addToStart) {
    perricosArray.unshift(perricoInfo);
  } else {
    perricosArray.push(perricoInfo);
  }
  updateBreedsFilters(breed);

  const dogList = document.querySelector('#dog-list');

  const isAnyFilterSelected = document.querySelector('.filter-selected');

  const perricoCardElement = document.createElement('div');
  perricoCardElement.className = 'card';
  perricoCardElement.style.display = isAnyFilterSelected ? 'none' : '';

  perricoCardElement.innerHTML = `
  <img src="${perricoImg}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

  if (addToStart) {
    dogList.prepend(perricoCardElement);
  } else {
    dogList.appendChild(perricoCardElement);
  }

  const likeButton = perricoCardElement.querySelector('.like');

  likeButton.addEventListener('click', function () {
    const likeCountNode = perricoCardElement.querySelector('.like-count');
    likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
  });

  const dislikeButton = perricoCardElement.querySelector('.dislike');
  dislikeButton.addEventListener('click', function () {
    const likeCountNode = perricoCardElement.querySelector('.dislike-count');
    likeCountNode.innerText = Number(likeCountNode.innerText) + 1;
  });
};

document.querySelector('#add-1-perrico').addEventListener('click', async function () {
  clearWarningMessage();

  disableAllAddPerricoButtons();
  await addPerrico();
  enableAllAddPerricoButtons();
});

document.querySelector('#add-1-perrico-start').addEventListener('click', async function () {
  clearWarningMessage();

  disableAllAddPerricoButtons();
  await addPerrico(true);
  enableAllAddPerricoButtons();
});

document.querySelector('#add-5-perricos').addEventListener('click', async function () {
  clearWarningMessage();

  disableAllAddPerricoButtons();
  await Promise.all([addPerrico(), addPerrico(), addPerrico(), addPerrico(), addPerrico()]);
  enableAllAddPerricoButtons();
});

const likeFilterButton = document.querySelector('#like-filter');

likeFilterButton.addEventListener('click', function () {
  likeFilterButton.classList.toggle('filter-selected');
  filterPerricos();
});

const dislikeFilter = document.querySelector('#dislike-filter');

dislikeFilter.addEventListener('click', function () {
  dislikeFilter.classList.toggle('filter-selected');
  filterPerricos();
});

function filterPerricos() {
  const isLikeFilterSelected = likeFilterButton.classList.contains('filter-selected');
  const isDislikeSelected = dislikeFilter.classList.contains('filter-selected');
  console.log('filtering', {
    isLikeFilterSelected,
    isDislikeSelected
  });

  document.querySelectorAll('.card').forEach((perricoNode) => {
    // si no hay ningún filtro aplicado, lo muestra
    if (!isLikeFilterSelected && !isDislikeSelected) {
      perricoNode.style.display = '';
      return;
    }
    // si preciosismo aplicado y hay preciosisimo lo muestra
    const likeCount = perricoNode.querySelector('.like-count').innerText;
    if (likeCount !== '' && isLikeFilterSelected) {
      perricoNode.style.display = '';
      return;
    }

    // si feísimo aplicado y hay feísimo lo muestra
    const dislikeCount = perricoNode.querySelector('.dislike-count').innerText;
    if (dislikeCount !== '' && isDislikeSelected) {
      perricoNode.style.display = '';
      return;
    }

    perricoNode.style.display = 'none';
  });
}

document.querySelector('#dislike-filter').addEventListener('click', function () {
  console.log('dislike filter clicked');
});

document.querySelector('#test').addEventListener('click', async function () {
  const response = await getBreeds();
  console.log(response);
});

renderPerricoArray();

// let automaticPerrosCount = 0;
// const intervalId = setInterval(() => {
//   addPerrico();
//   automaticPerrosCount++;

//   if (automaticPerrosCount === 2) {
//     clearInterval(intervalId);
//   }
// }, 1000);
