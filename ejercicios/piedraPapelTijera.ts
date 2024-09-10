class Player {
  name?: string;
  decision?: string;
}

enum Choice {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

function playRound(player1: Player, player2: Player): string {
  if (player1.decision === player2.decision) {
    return "It's a tie!";
  }

  if (
    (player1.decision === Choice.rock &&
      player2.decision === Choice.scissors) ||
    (player1.decision === Choice.paper && player2.decision === Choice.rock) ||
    (player1.decision === Choice.scissors && player2.decision === Choice.paper)
  ) {
    return `${player1.name} wins!`;
  } else {
    return `${player2.name} wins!`;
  }
}

const player1 = new Player();
player1.name = "Player 1";
player1.decision = Choice.rock;

const player2 = new Player();
player2.name = "Player 2";
player2.decision = Choice.scissors;

let round = playRound(player1, player2);
console.log(round);

/**
 * Creamos una clase Player con los atributos name y decision
 * Creamos un enum Choice con las opciones rock, paper y scissors
 * Creamos una función playRound que recibe dos jugadores y devuelve el resultado de la partida
 * Creamos dos jugadores con sus nombres y decisiones
 * Llamamos a la función playRound con los dos jugadores y mostramos el resultado por consola
 */

/**
 * TODO
 * Bucle de juego
 * Score y lista de partidas
 * Elegir entre piedra, papel o tijera por consola
 * Jugador 2 puede ser la máquina. Random entre piedra, papel o tijera. Hacer un map con numeros y los enums
 */
