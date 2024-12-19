const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: 'josmidgg',
  facebook: undefined,
  instagram: 'gutufacio',
  tikTok: undefined,
  youtube: 'robustio'
};

function isConnected(network) {
  return CONNECTED_NETWORKS[network];
}

/**
 * 1. Intenta deducir qué hace el código de arriba y escríbelo aquí.
 */

/**
 * 2. Crea una función que, dado el nombre de una red social, te diga cual es la cuenta del usuario
 */

/**
 * 3. Crea una función que, dado un array de redes sociales, te devuelva otro array indicando la red,
 * si está conectada y con el nombre de usuario si la red está conectada.
 *
 * Por ejemplo, con el array ['twitter', 'youtube'], debería devolverte un array
 * [{ network: 'twitter', isConnected: true, username: 'josmidgg' }, { network: 'youtube', isConnected: false }]
 */

/**
 * 4. modifica la función isConnected y la función del ejercicio 2 para que ignore mayúsculas y salga el
 * mismo resultado si el usuario pone 'twitter' o 'tWiTter'
 */

/**
 * 5. Crea un objeto cuyas propiedades sean la red social con un nombre correcto para javascript y cuyo valor sea el nombre de la
 * red social. Por ejemplo el valor de la propiedad tikTok sería Tik Tok
 */

/**
 * 6. Crea una función que dado un array de redes sociales, te devuelva la misma información del ejercicio 3
 * incluyendo el nombre de la red social.
 */

/**
 * 7. Crea una función que dado un array de redes sociales, devuelva lo mismo que la función 6 pero solo
 * de las redes que están conectadas sin modificar la función 6.
 */

/**
 * 8. Algunas redes sociales no te dan el nombre correcto del usuario y te dan un número muy largo como cadena
 * de texto. Dado el siguiente objeto, modifica las funciones necesarias anteriores para que en ese caso,
 * el nombre del usuario que devuelva sea "Usuario anónimo" en todos los casos.
 */

const CONNECTED_NETWORKS_ACCOUNTS_2 = {
  twitter: '232424124314',
  facebook: undefined,
  instagram: 'gutufacio',
  tikTok: undefined,
  youtube: 'robustio'
};

/**
 * 9. Crea una función a la que le vamos a pasar un único parámetro, la red social. Usando alguna de las
 * funciones que has creado anteriormente y una de las variables definidas (deduce cual), debe devolver
 * el nombre del usuario en esa red social si tenemos su información, o 'Nunca has conectado tu cuenta'
 * si no la tenemos.
 */

/**
 * 10. Modifica todas las funciones anteriores para que sean Arrow functions
 */

/**
 * 11. Algunas redes sociales se pueden conectar de distintas formas en función de ciertas características.
 * Por ejemplo, Tik Tok se puede conectar con cuentas business y cuentas personales. Sin embargo, si tienes
 * una cuenta de tipo business no puedes conectar una de tipo personal y viceversa.
 *
 * Modifica todos los ejercicios anteriores para que tikTok no exista y se convierta en tikTokBusiness
 * y tikTokPersonal, pero que el usuario solo tenga que introducir tikTok.
 *
 * Por ejemplo, si tikTokPersonal o tikTokBusiness están conectado, al introducir isConnected('tikTok') debería
 * decir true.
 */
