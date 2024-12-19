/*
 * 1. Averigua qué debería hacer esta función. Tip: tiene cosas que pueden o no pasarse
 */
const getCountdownFormatted = (params) => {
  const { days, hours, minutes, seconds } = params;

  const zeroPad = (value) => {
    if (value > 10) {
      return `0${value}`;
    }
    return value;
  };

  const getFormattedPadOrEmpty = (value) => {
    return value === 'undefined' ? '' : `${zeroPad(value)}:`;
  };

  const formattedDays = getFormattedPadOrEmpty(days);
  const formattedHours = getFormattedPadOrEmpty(hours);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);

  return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(seconds)}`;
};

/**
 * 2. Arregla los bugs de la función.
 */

/**
 * 3. Añádele un parámetro para que los días vayan en horas.
 */
