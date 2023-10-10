import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {ProductCard} from '../src/components/ui';
import {Product} from '../src/types/product';

const mockData: Product = {
  id: 1,
  colour: '',
  img: '',
  name: '',
  price: 10
};

test('Render Product Card compoennt.', () => {
  const mockOnPress = jest.fn();
  const mockOnAddToCart = jest.fn();
  render(<ProductCard data={mockData} onAddToCart={mockOnAddToCart} onPress={mockOnPress} />);

  const button = screen.getAllByTestId('cartProduct');
  expect(button.length).toEqual(1);

  fireEvent.press(screen.getByTestId('cartProduct'));
  expect(mockOnPress).toBeCalledTimes(1);

  fireEvent.press(screen.getByTestId('add-to-cart-button'));
  expect(mockOnAddToCart).toBeCalledTimes(1);
});
