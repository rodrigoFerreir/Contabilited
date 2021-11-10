import { useState, useEffect } from 'react';
import { Body, Container, Header, HeaderTitle } from './App.styles';
import { Item } from './@types/Item';
import { itens } from './data/itens';
import { categories } from './data/categories';
import { filteredListByMonth, getCurrentMonth } from './helpers/dateFilters'
import TableArea from './components/TableArea';
import { InfoArea } from './components/InfoArea';
const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrencyMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrencyMonth(newMonth);
  }

  useEffect(() => {
    setList(itens)
    setFilteredList(filteredListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  useEffect(() => {
    const handleSetData = () => {
      let TotalIncome = 0;
      let TotalExpense = 0;
      for (let i in filteredList) {
        if (categories[filteredList[i].category].expense) {
          TotalExpense += filteredList[i].value;
        } else {
          TotalIncome += filteredList[i].value;
        }
      }

      setIncome(TotalIncome);
      setExpense(TotalExpense);
    }

    handleSetData()
  }, [list, filteredList])

  return (
    <Container>
      <Header>
        <HeaderTitle>Contabilidade</HeaderTitle>
      </Header>
      <Body>

        {/* Area de informação */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}

        />

        {/* Area de inserção */}


        {/* Area de itens */}
        <TableArea list={filteredList} />
      </Body>
    </Container>
  )
}

export default App;