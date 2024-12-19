/**
 * 1. Averigüa qué debería hacer esta función
 */
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  return {
    days: days,
    hours: hours,
    minutes: Math.floor(seconds / HOUR_IN_SECONDS / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60)
  };
};

/**
 * 2. La función no está funcionando bien, averigua qué está fallando y arréglalo.
 */

/**
 * 3. Añade un parámetro a la función para que el usuario pueda elegir si quiere que salgan los días como horas.
 */
