let linkPrevious;
let linkNext;

/**
 * Prend une liste de pokmons sous forme de JSON et
 * modifie le D.O.M. pour l'afficher en HTML.
 * @param {array} pokemons Liste des Pokemons 
 */
function sync(pokemons) {
    const htmlList = pokemons.map(elt => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(elt.name));
        return li;
    });
    document.getElementById('liste_pokemons').replaceChildren(...htmlList);
}

/**
 * Click du bouton précédent.
 * Envoie l'URL des 10 pokémons précédent à la fonction fetchPokemon
 */
function prev() {
    if (linkPrevious !== null)
        fetchPokemon(linkPrevious)
}
/**
 * Click du bouton suivant.
 * Envoie l'URL des 10 pokémons suivant à la fonction fetchPokemon
 */
function next() {
    if (linkNext !== null)
        fetchPokemon(linkNext)
}

/**
 * 1. Utilisez Fetch pour interroger l'API, en faisant 
 *    un GET sur la route reçu en paramètre
 * 2. Une fois la réponse AJAX obtenu, récupérerz
 *    le JSON du corps de celle-ci.
 * 3. Lorsque vous recevez le JSON, effectuez
 *    les opérations suivantes
 *   3.1. Assigner les liens next et previous, reçu dans 
 *        la réponse, aux variables correspondantes
 *   3.2. Invoquyer la fonction sync en envoyant en 
 *        arguement le tableau de pokemon reçu.
 * @param {*} route La route à appeler avec fetch
 */
function fetchPokemon(route) {
    // TODO
}

fetchPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
