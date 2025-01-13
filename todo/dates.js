/**
 * 1. Crea una función que sume un número de días a una fecha.
 */

/**
 * 2. Crea una función que reste un número de días a una fecha.
 */

/**
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */

/**
 * 4.  Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos y segundos.
 * Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos desde [FECHA_INTRODUCIDA]}"
 *
 */

/**
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante. Por ejemplo, si solo han pasado
 * 10 segundos, no debería decir ni los días, las horas ni los minutos.
 */

/**
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días, las horas, los minutos o los segundos
 * Por ejemplo, si le paso { days: false, hours: false } la función debe devolver solo los minutos y los segundos que han pasado.
 */

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el 9 de enero durante todo el día
 */

const tasks = [
  {
    text: 'Hacer la compra',
    completed: true,
    completedAt: '2025-01-10T15:54:40.088Z'
  },
  {
    text: 'Ir a clase',
    completed: true,
    completedAt: '2025-01-09T15:00:40.088Z'
  },
  {
    text: 'Comer',
    completed: true,
    completedAt: '2025-01-09T14:00:40.088Z'
  },
  {
    text: 'Repasar javascript',
    completed: false
  }
];
