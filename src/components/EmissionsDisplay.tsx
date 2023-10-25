import { useMemo } from 'react';
import '../App.css';
import { Emissions } from '../types/types';
import styled from 'styled-components';

const Title = styled.h1.attrs<{ $fontSize: string }>(props => ({
  $fontSize: props.$fontSize || '18px',
}))`
  font-size: ${props => props.$fontSize};
  color: var(--text-secondary);
  margin: 0;
`;

const Number = styled.span.attrs<{ $fontSize: string }>(props => ({
  $fontSize: props.$fontSize || '32px',
}))`
  font-size: ${props => props.$fontSize};
  margin: 0;
  vertical-align: bottom;
`;

const Unit = styled.span.attrs<{ $fontSize: string }>(props => ({
  $fontSize: props.$fontSize || '16px',
}))`
  font-size: ${props => props.$fontSize};
`;

const Footer = styled.span.attrs<{ $fontSize: string }>(props => ({
  $fontSize: props.$fontSize || '14px',
}))`
  font-size: ${props => props.$fontSize};
`;

export function EmissionsDisplay({ emissions, title, unit, size = 'lg' }: Emissions) {
  const fontSize = useMemo(() => {
    const sizes = { title: '', number: '', unit: '', footer: '' };

    if (size === 'sm') {
      sizes.title = '14px';
      sizes.number = '30px';
      sizes.unit = '14px';
      sizes.footer = '10px';
    }

    return sizes;
  }, [size]);

  return (
    <div className="emissions-component-container">
      <Title $fontSize={fontSize.title}>{title}</Title>
      <Number $fontSize={fontSize.number}>
        {emissions}
        <Unit $fontSize={fontSize.unit}>{unit}</Unit>
      </Number>
      <Footer $fontSize={fontSize.footer}>of carbon emissions</Footer>
    </div>
  );
}
