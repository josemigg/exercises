const ranking = [
  { position: 1, name: 'Pepito', scoring: 5 },
  { position: 2, name: 'Pepito1', scoring: 5 },
  { position: 3, name: 'Pepito2', scoring: 4 },
  { position: 4, name: 'Pepito3', scoring: 4 },
  { position: 5, name: 'Pepito4', scoring: 3 },
  { position: 6, name: 'Pepito5', scoring: 2 },
  { position: 7, name: 'Pepito6', scoring: 1 }
];

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

writeRankingHtml(ranking);
