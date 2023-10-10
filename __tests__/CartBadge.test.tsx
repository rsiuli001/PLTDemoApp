import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {CartBadge} from '../src/components/ui';

test('Render the CartBadge Component', () => {
  const mockFn = jest.fn();

  render(<CartBadge onPress={mockFn} />);

  const button = screen.getAllByTestId('cart-icon');
  expect(button.length).toEqual(1);

  fireEvent.press(screen.getByTestId('cart-icon'));
  expect(mockFn).toBeCalledTimes(1);
});
