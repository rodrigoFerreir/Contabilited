import { Item } from '../@types/Item';

export const itens: Item[] = [
    /*
        formato da data é de acordo com a posição do array de meses
        ex: 11 = dezembro
    */

    { date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 9, 15), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2021, 10, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
    { date: new Date(2021, 10, 18), category: 'car', title: 'Combustivel', value: 2000 },
    { date: new Date(2021, 11, 18), category: 'internet', title: 'Freela', value: 6000 },
    { date: new Date(2021, 11, 18), category: 'phone', title: 'Propagandas', value: 900 },
    { date: new Date(2021, 11, 18), category: 'house', title: 'Contas da casa', value: 500 },
];