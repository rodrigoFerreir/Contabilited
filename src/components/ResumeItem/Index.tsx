import React from 'react';

import { Container, Info, Title } from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Info color={color}>
                {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </Info>
        </Container>

    );
}

export default ResumeItem;