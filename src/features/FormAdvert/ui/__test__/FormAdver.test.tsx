import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { type } from '../FormAdvert';

describe('type function', () => {
  it('should return "Продажа" for SALE type', () => {
    const { container } = render(type('SALE'));
    expect(container).toHaveTextContent('Продажа');
    expect(screen.getByText('Продажа')).toHaveClass('advert_sale');
  });

  it('should return "Аренда" for RENT type', () => {
    const { container } = render(type('RENT'));
    expect(container).toHaveTextContent('Аренда');
    expect(screen.getByText('Аренда')).toHaveClass('advert_sale');
  });

  it('should return "Новый" for NEW type', () => {
    const { container } = render(type('NEW'));
    expect(container).toHaveTextContent('Новый');
    expect(screen.getByText('Новый')).toHaveClass('advert_sale');
  });

  it('should return "Б/у" for empty string', () => {
    const { container } = render(type(''));
    expect(container).toHaveTextContent('Б/у');
    expect(screen.getByText('Б/у')).toHaveClass('advert_sale');
  });

  it('should return fallback for unknown type', () => {
    const { container } = render(type('UNKNOWN_TYPE'));
    expect(container).toHaveTextContent('Данных нету(');
    expect(screen.getByText('Данных нету(')).not.toHaveClass('advert_sale');
  });

  it('should return fallback for undefined input', () => {
    // @ts-ignore - специально тестируем неверный ввод
    const { container } = render(type(undefined));
    expect(container).toHaveTextContent('Данных нету(');
  });
});