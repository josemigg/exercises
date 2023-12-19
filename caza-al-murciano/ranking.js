import ranking2 from './ranking2';

console.log(ranking2);

const writeRankingHtml = (rankingToWrite) => {
  const rankingNode = document.querySelector('.ranking');
  let rankingHtml = '';

  rankingToWrite.forEach((positionInfo) => {
    const pointsLabel = positionInfo.scoring === 1 ? 'punto' : 'puntos';

    rankingHtml += `<div class="ranking__item">
        <div><strong>${positionInfo.position}.</strong> ${positionInfo.name}</div>
        <div>${positionInfo.scoring} ${pointsLabel}</div>
      </div>`;
  });

  rankingNode.innerHTML = rankingHtml;
};

fetch('https://randomuser.me/api/?results=20')
  // El objeto response, contiene información acerca de la respuesta
  // A través del método asíncrono .json, podemos parsear la respuesta
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let scoring = 10;
    const users = response.results.map((userInfo, index) => {
      scoring -= 1;

      return {
        name: `${userInfo.name.first} ${userInfo.name.last}`,
        position: index + 1,
        scoring: scoring > 0 ? scoring : 0
      };
    });

    writeRankingHtml(users);
  });
