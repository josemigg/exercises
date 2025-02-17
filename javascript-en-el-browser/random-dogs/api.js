async function getRandomDogImage(breed) {
  const url =
    breed === '' ? 'https://dog.ceo/api/breeds/image/random' : `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    // TODO random breed
    return { breed, imgUrl: json.message };
  } catch (error) {
    console.error(error.message);
  }
}

async function getBreeds() {
  const url = 'https://dog.ceo/api/breeds/list/all';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json.message;
  } catch (error) {
    console.error(error.message);
  }
}
