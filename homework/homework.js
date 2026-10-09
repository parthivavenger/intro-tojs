// Cricket.
function strikeRate(runs, balls) {
  return (runs / balls) * 100;
}

function playerType(runs, balls) {
  if (runs === undefined && balls === undefined) {
    return "missing arguments";
  }

  else if (runs < 0 || balls <= 0) {
    return "invalid input";
  }

  else if (strikeRate(runs, balls) >= 150) {
    return `power batter`;
  }
  else if (strikeRate(runs, balls) >= 100) {
    return `Steady Batter`;
  }
  else {
    return `Slow Starter`;
  }
}

console.log(playerType(60, 30));
console.log(playerType(45, 40));
console.log(playerType(20, 40));
console.log(playerType(10, 0));
console.log(playerType());

console.log(`_________________________________`)

//Damage shield.
function damage(attack, shield) {
  if (attack > shield) {
    return attack - shield;
  }
  return 0;
}

function healthLeft(health, attack, shield) {
  return health - damage(attack, shield);
}

function battleResult(health, attack, shield) {
  if (healthLeft(health, attack, shield) <= 0) {
    return `Player defeated`;
  }
  if (healthLeft(health, attack, shield) > 30) {
    return `Still fighting. ${healthLeft(health, attack, shield)}`;
  }
  if (healthLeft(health, attack, shield) <= 30) {
    return `Low health. ${healthLeft(health, attack, shield)}`;
  }
}

console.log(battleResult(100, 50, 20));
console.log(battleResult(100, 90, 15));
console.log(battleResult(40, 80, 10));
console.log(battleResult(100, 10, 30));