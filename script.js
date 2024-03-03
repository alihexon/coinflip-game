let score = JSON.parse(localStorage.getItem('scoreCount')) || {
  win: 0,
  lose: 0,
}

function playGame(guess) {
  const randomNumber = Math.random()
  let result;

  if (randomNumber < 0.5) {
    result = 'heads'
  } else {
    result = 'tails'
  }

  if (guess === result) {
    score.win++
    localStorage.setItem('scoreCount', JSON.stringify(score))
    alert(`You won\nWins: ${score.win} Loses: ${score.lose}`)
  } else {
    score.lose++
    localStorage.setItem('scoreCount', JSON.stringify(score))
    alert(`You lose\nWins: ${score.win} Loses: ${score.lose}`)
  }
}