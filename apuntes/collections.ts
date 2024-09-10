let herramientas: string[] = [
  "Martillo",
  "Destornillador",
  "Llave inglesa",
  "Alicate",
  "Sierra",
  "Taladro",
];

// agregar elemento
herramientas.push("Cinta métrica");

// eliminar primer elemento
herramientas.shift();

// eliminar último elemento
herramientas.pop();

// eliminar elemento concreto
let herramientasSinDestornillador: string[] = [];
herramientas.forEach((herramienta) => {
  if (herramienta !== "Destornillador") {
    herramientasSinDestornillador.push(herramienta);
  }
});

console.log(herramientasSinDestornillador);
