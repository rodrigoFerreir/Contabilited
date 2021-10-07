import { formatCurrentMonth } from '../../helpers/dateFilters';
import ResumeItem from '../ResumeItem/Index';
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from './styles';

type Props = {
    currentMonth: string;
    income: number;
    expense: number;
    onMonthChange: (newMonth: string) => void;
}
export const InfoArea = ({ currentMonth, income, expense, onMonthChange }: Props) => {

    //muda o mês para o anterior
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    //muda o mês para o proximo
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={handlePrevMonth}>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem title={"Receitas"} value={income} />
                <ResumeItem title={"Despesas"} value={expense} />
                <ResumeItem
                    title={"Balanço"}
                    value={income - expense}
                    color={(income - expense) < 0 ? '#CD3B27' : '#1b5933'}
                />
            </ResumeArea>
        </Container>
    );
}