import ddds from './DDDs.json';
import cidades from './cidades.json';

function localPorDDD(ddd='') {
    const res = ddds.find(el => (el['ddd'] === ddd.toString()));
    return (res !== undefined) ? res.local : '';
}

function listaDeCidades(ddd) {
    return cidades[ddd] ? cidades[ddd] : [];
}

export { ddds, localPorDDD, listaDeCidades };