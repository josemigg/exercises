/**
 * 1. Vamos a hacer una función a la que le pasamos un número y nos va a devolver
 * un array del tamaño igual al número que le pasamos con tareas random.
 *
 * Una tarea random es una tarea con un texto aleatorio, por ejemplo "Tarea de prueba 402"
 * También tiene que tener una fecha random con un mes aleatorio entre 0 y 11, y un dia aleatorio entre 1 y 28
 * y aleatoriamente también, las tareas pueden estar completadas o no
 *
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomTaskArray = (num) => {
  const taskList = [];

  for (let counter = 1; counter <= num; counter++) {
    const randonNum = getRandomInt(0, 100000000000);
    const randomText = `Tarea de prueba ${randonNum}`;
    const randomMonth = getRandomInt(0, 11);
    const randomDay = getRandomInt(0, 28);
    const randomDate = new Date(2025, randomMonth, randomDay);
    const checkIsCompleted = getRandomInt(0, 1);

    taskList.push({
      task: randomText,
      date: randomDate,
      completed: checkIsCompleted === 1
    });
  }
  return taskList;
};
console.log(getRandomTaskArray(3));

/**
 * 2. Haz una función que categorice las tareas por mes, y dentro del mes, por día.
 * Por ejemplo el objeto resultante sería algo así:
 *  {
 *    0: {
 *      1: [ARRAY DE TAREAS]
 *    }
 *  }
 * En [ARRAY DE TAREAS] estarán todas las tareas del día 1 de enero.
 */

const categorizeTasks = (tasks) => {
  const tasksByDate = {};

  tasks.forEach((task) => {
    const month = task.date.getMonth();
    const day = task.date.getDate();

    if (!tasksByDate[month]) {
      tasksByDate[month] = {};
    }

    if (!tasksByDate[month][day]) {
      tasksByDate[month][day] = [];
    }

    tasksByDate[month][day].push(task);
  });

  return tasksByDate;
};
