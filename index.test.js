import { ddds, localPorDDD, listaDeCidades } from './dist/index';

const LISTA_DDDS = [
	{
		"ddd": "11",
		"local": "São Paulo"
	},
	{
		"ddd": "12",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "13",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "14",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "15",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "16",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "17",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "18",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "19",
		"local": "São Paulo (Interior)"
	},
	{
		"ddd": "21",
		"local": "Rio de Janeiro"
	},
	{
		"ddd": "22",
		"local": "Rio de Janeiro (Interior)"
	},
	{
		"ddd": "24",
		"local": "Rio de Janeiro (Interior)"
	},
	{
		"ddd": "27",
		"local": "Espírito Santo"
	},
	{
		"ddd": "28",
		"local": "Espírito Santo (Interior)"
	},
	{
		"ddd": "31",
		"local": "Minas Gerais"
	},
	{
		"ddd": "32",
		"local": "Minas Gerais (Interior)"
	},
	{
		"ddd": "33",
		"local": "Minas Gerais (Interior)"
	},
	{
		"ddd": "34",
		"local": "Minas Gerais (Interior)"
	},
	{
		"ddd": "35",
		"local": "Minas Gerais (Interior)"
	},
	{
		"ddd": "37",
		"local": "Minas Gerais (Interior)"
	},
	{
		"ddd": "38",
		"local": "Minas Gerais (Interior)"
	},
	{
		"ddd": "41",
		"local": "Paraná"
	},
	{
		"ddd": "42",
		"local": "Paraná (Interior)"
	},
	{
		"ddd": "43",
		"local": "Paraná (Interior)"
	},
	{
		"ddd": "44",
		"local": "Paraná (Interior)"
	},
	{
		"ddd": "45",
		"local": "Paraná (Interior)"
	},
	{
		"ddd": "46",
		"local": "Paraná (Interior)"
	},
	{
		"ddd": "47",
		"local": "Santa Catarina (Interior)"
	},
	{
		"ddd": "48",
		"local": "Santa Catarina"
	},
	{
		"ddd": "49",
		"local": "Santa Catarina (Interior)"
	},
	{
		"ddd": "51",
		"local": "Rio Grande do Sul"
	},
	{
		"ddd": "53",
		"local": "Rio Grande do Sul (Interior)"
	},
	{
		"ddd": "54",
		"local": "Rio Grande do Sul (Interior)"
	},
	{
		"ddd": "55",
		"local": "Rio Grande do Sul (Interior)"
	},
	{
		"ddd": "61",
		"local": "Distrito Federal"
	},
	{
		"ddd": "62",
		"local": "Goiás"
	},
	{
		"ddd": "63",
		"local": "Tocantins"
	},
	{
		"ddd": "64",
		"local": "Goiás (Interior)"
	},
	{
		"ddd": "65",
		"local": "Mato Grosso"
	},
	{
		"ddd": "66",
		"local": "Mato Grosso (Interior)"
	},
	{
		"ddd": "67",
		"local": "Mato Grosso do Sul"
	},
	{
		"ddd": "69",
		"local": "Rondônia"
	},
	{
		"ddd": "71",
		"local": "Salvador"
	},
	{
		"ddd": "73",
		"local": "Salvador (Interior)"
	},
	{
		"ddd": "74",
		"local": "Salvador (Interior)"
	},
	{
		"ddd": "75",
		"local": "Salvador (Interior)"
	},
	{
		"ddd": "77",
		"local": "Salvador (Interior)"
	},
	{
		"ddd": "79",
		"local": "Sergipe"
	},
	{
		"ddd": "81",
		"local": "Pernambuco"
	},
	{
		"ddd": "82",
		"local": "Alagoas"
	},
	{
		"ddd": "83",
		"local": "Paraíba"
	},
	{
		"ddd": "84",
		"local": "Rio Grande do Norte"
	},
	{
		"ddd": "85",
		"local": "Ceará"
	},
	{
		"ddd": "86",
		"local": "Piauí"
	},
	{
		"ddd": "87",
		"local": "Pernambuco (Interior)"
	},
	{
		"ddd": "88",
		"local": "Ceará (Interior)"
	},
	{
		"ddd": "89",
		"local": "Piauí (Interior)"
	},
	{
		"ddd": "91",
		"local": "Pará"
	},
	{
		"ddd": "92",
		"local": "Amazonas"
	},
	{
		"ddd": "93",
		"local": "Pará (Interior)"
	},
	{
		"ddd": "94",
		"local": "Pará (Interior)"
	},
	{
		"ddd": "95",
		"local": "Roraima"
	},
	{
		"ddd": "96",
		"local": "Amapá"
	},
	{
		"ddd": "97",
		"local": "Amazonas (Interior)"
	},
	{
		"ddd": "98",
		"local": "Maranhão"
	},
	{
		"ddd": "99",
		"local": "Maranhão (Interior)"
	}
];

describe('ddds', () => {
    it('deve retornar um objeto com vários ddds e seus locais', () => {
        expect(ddds).toEqual(LISTA_DDDS);
    });
});

describe('localPorDDD', () => {
    it('deve retornar o nome de um local', () => {
        expect(localPorDDD('85')).toEqual('Ceará');
        expect(localPorDDD(85)).toEqual('Ceará');
        expect(localPorDDD('ABC')).toEqual('');
        expect(localPorDDD('')).toEqual('');
        expect(localPorDDD()).toEqual('');
    });
});

describe('listaDeCidades', () => {
	it('deve retornar uma lista de cidades pelo DDD', () => {
		expect(listaDeCidades('85').length).toBeGreaterThan(0);
		expect(listaDeCidades(11).length).toBeGreaterThan(0);
	});

	it('deve retornar uma lista vazia com um DDD inexistente', () => {
		expect(listaDeCidades(10).length).toBe(0);
		expect(listaDeCidades(100).length).toBe(0);
	})
});