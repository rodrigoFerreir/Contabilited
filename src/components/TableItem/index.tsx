import { Item } from '../../@types/Item';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilters';
import { Category, TableColumn, TableLine, Valor } from './styles';

type Props = {
    item: Item
}

const TableItem = ({ item }: Props) => {
    return (
        <TableLine>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {/*  Adicionando nome da catogoria cadastrada */}
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                {/* Cor do valor referente ao seu tipo */}
                <Valor color={categories[item.category].expense ? '#FF1300' : '#50B05B'}>
                    {item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </Valor>
            </TableColumn>
        </TableLine>
    );
}

export default TableItem;