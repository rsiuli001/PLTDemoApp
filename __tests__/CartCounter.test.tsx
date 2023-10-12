import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {CartCounter} from '../src/components/ui';

test('Render Cart Counter component.', () => {
  let count = 1;
  const onDecrementMock = jest.fn();
  const onIncrementMock = jest.fn();

  render(<CartCounter count={count} onDecrement={onDecrementMock} onIncrement={onIncrementMock} />);

  const buttons = screen.getAllByTestId('cart-counter-button');
  expect(buttons.length).toEqual(2);
});
