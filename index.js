import ddds from './DDDs.json';

function localPorDDD(ddd='') {
    const res = ddds.find(el => (el['ddd'] === ddd.toString()));
    return (res !== undefined) ? res.local : '';
}

export { ddds, localPorDDD };