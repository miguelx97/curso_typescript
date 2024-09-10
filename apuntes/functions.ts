// Juego parchis

let position: number = 0;

function moverAdelante(): void {
  position++;
  console.log("Avanzas una posición");
}

function moverAtras(): void {
  position--;
  console.log("Retrocedes una posición");
}

function imprimirPosicion(jugador: string): void {
  console.log(`Estás en la posición ${position}, ${jugador}`);
}

moverAdelante();
moverAdelante();
imprimirPosicion("Jugador 1");
moverAtras();
imprimirPosicion("Jugador 2");
