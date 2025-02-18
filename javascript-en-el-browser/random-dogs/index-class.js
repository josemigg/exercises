class DogList {
  constructor() {
    this.perricosArray = [];
    this.filtersApplied = {
      dislike: false,
      like: false,
      breeds: []
    };
    this.breedsCount = {};
  }

  perricoMatchesFilter(perrico) {
    const { breeds, like, dislike } = this.filtersApplied;
    if (breeds.length > 0 && !breeds.includes(perrico.breed)) {
      return false;
    }

    if (like && dislike) {
      return perrico.likeCount > 0 || perrico.dislikeCount > 0;
    }

    if (like && perrico.likeCount === 0) {
      return false;
    }

    if (dislike && perrico.dislikeCount === 0) {
      return false;
    }

    return true;
  }

  renderPerricoArray() {
    const { breeds, like, dislike } = this.filtersApplied;
    const hasAnyFiltersApplied = breeds.length > 0 || like || dislike;

    const filteredArray = !hasAnyFiltersApplied
      ? this.perricosArray
      : this.perricosArray.filter((perrico) => {
          this.perricoMatchesFilter(perrico);
        });

    const dogList = document.querySelector('#dog-list');
    dogList.innerHTML = '';
    filteredArray.forEach((perricoInfo) => {
      this.renderPerrico(perricoInfo);
    });
  }

  updateBreedsFilters(breed) {
    const breedsFiltersNode = document.querySelector('.breed-filters');

    breedsFiltersNode.style.display = '';

    const buttonId = `${breed}-filter`;

    if (!this.breedsCount[breed]) {
      this.breedsCount[breed] = 1;

      const filterNode = document.createElement('button');
      filterNode.id = buttonId;
      filterNode.innerText = `${breed} (1)`;
      breedsFiltersNode.appendChild(filterNode);

      filterNode.addEventListener('click', () => {
        console.log(this);
        const { breeds } = this.filtersApplied;
        const index = breeds.indexOf(breed);

        if (index === -1) {
          breeds.push(breed);
          filterNode.classList.add('filter-selected');
        } else {
          breeds.splice(index, 1);
          filterNode.classList.remove('filter-selected');
        }

        this.renderPerricoArray();
      });
      return;
    }

    this.breedsCount[breed] += 1;
    const filterButtonNode = breedsFiltersNode.querySelector(`#${buttonId}`);
    filterButtonNode.innerHTML = `${breed} (${this.breedsCount[breed]})`;
  }

  renderPerrico(perricoInfo, addToStart) {
    const dogList = document.querySelector('#dog-list');

    const perricoCardElement = document.createElement('div');
    perricoCardElement.className = 'card';

    perricoCardElement.innerHTML = `
  <img src="${perricoInfo.imgUrl}" alt="Perro" />
  <br />
  <p><span class="like-count">${perricoInfo.likeCount}</span>❤️ <span class="dislike-count">${perricoInfo.dislikeCount}</span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

    if (addToStart) {
      dogList.prepend(perricoCardElement);
    } else {
      dogList.appendChild(perricoCardElement);
    }

    const likeButton = perricoCardElement.querySelector('.like');

    likeButton.addEventListener('click', function () {
      const likeCountNode = perricoCardElement.querySelector('.like-count');
      perricoInfo.likeCount += 1;
      likeCountNode.innerText = perricoInfo.likeCount;
    });

    const dislikeButton = perricoCardElement.querySelector('.dislike');
    dislikeButton.addEventListener('click', function () {
      const dislikeCount = perricoCardElement.querySelector('.dislike-count');
      perricoInfo.dislikeCount += 1;
      dislikeCount.innerText = perricoInfo.dislikeCount;
    });
  }

  async addPerrico(addToStart) {
    const breed = document.querySelector('[name=breeds]').value;
    const perricoInfo = await getRandomDogImage(breed);

    if (addToStart) {
      this.perricosArray.unshift(perricoInfo);
    } else {
      this.perricosArray.push(perricoInfo);
    }
    this.updateBreedsFilters(breed);

    if (this.perricoMatchesFilter(perricoInfo)) {
      this.renderPerrico(perricoInfo, addToStart);
    }
  }
}

const dogList = new DogList();

document.querySelector('#add-1-perrico').addEventListener('click', async function () {
  clearWarningMessage();

  disableAllAddPerricoButtons();
  await dogList.addPerrico();
  enableAllAddPerricoButtons();
});

document.querySelector('#add-1-perrico-start').addEventListener('click', async function () {
  clearWarningMessage();

  disableAllAddPerricoButtons();
  await dogList.addPerrico(true);
  enableAllAddPerricoButtons();
});

document.querySelector('#add-5-perricos').addEventListener('click', async function () {
  clearWarningMessage();

  disableAllAddPerricoButtons();
  await Promise.all([
    dogList.addPerrico(),
    dogList.addPerrico(),
    dogList.addPerrico(),
    dogList.addPerrico(),
    dogList.addPerrico()
  ]);
  enableAllAddPerricoButtons();
});

const likeFilterButton = document.querySelector('#like-filter');

likeFilterButton.addEventListener('click', function () {
  likeFilterButton.classList.toggle('filter-selected');
  dogList.filtersApplied.like = !dogList.filtersApplied.like;
  dogList.renderPerricoArray();
});

const dislikeFilter = document.querySelector('#dislike-filter');

dislikeFilter.addEventListener('click', function () {
  dislikeFilter.classList.toggle('filter-selected');
  dogList.filtersApplied.dislike = !dogList.filtersApplied.dislike;
  dogList.renderPerricoArray();
});

dogList.renderPerricoArray();

// let automaticPerrosCount = 0;
// const intervalId = setInterval(() => {
//   addPerrico();
//   automaticPerrosCount++;

//   if (automaticPerrosCount === 2) {
//     clearInterval(intervalId);
//   }
// }, 1000);

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

async function createBreedsSelect() {
  // llamo a la función del endpoint;
  // cojo la respuesta que es un objeto clave valor donde la clave es el nombre de la raza y el valor un array con subrazas
  // y lo convierto en un array solo con las claves utilizando Object.keys
  // recorro el array de Object keys creando el html del select
  const breeds = await getBreeds();
  const breedsList = Object.keys(breeds);

  let breedsOptions = ''; //'<option value="">Random</option>';
  breedsList.forEach((breed) => {
    breedsOptions += `<option value="${breed}">${breed}</option>`;
  });

  document.querySelector('#breeds-picker').innerHTML = breedsOptions;
}

createBreedsSelect();
const timeoutId = setTimeout(() => {
  document.querySelector('#add-warning').style.display = '';
}, 3000);

function clearWarningMessage() {
  clearTimeout(timeoutId);
  document.querySelector('#add-warning').style.display = 'none';
}
