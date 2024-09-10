const nombre = "miguel";

class Student {
  nombre?: string;
  edad?: number;
  nota?: number;

  constructor(init?: Partial<Student>) {
    Object.assign(this, init);
  }

  display() {
    const texto = `El alumno ${this.nombre} tiene ${this.edad} años y ha sacado un ${this.nota}`;
    console.log(texto);
  }

  ponerNota(nuevaNota: number) {
    this.nota = nuevaNota;
  }
}

const alumno1 = new Student();
alumno1.nombre = "Juan";
alumno1.edad = 20;
alumno1.nota = 7;

const alumno2 = new Student({ nombre: "Ana", edad: 22, nota: 8 });

const alumnos3 = new Student({ nombre: "Pedro", edad: 21, nota: 6 });

const alumnos: Student[] = [alumno1, alumno2, alumnos3];

alumnos.forEach((alumno) => {
  alumno.display();
});
