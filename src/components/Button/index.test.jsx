import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index.jsx';

describe('Button component', () => {
  test('renders Button component with default props', () => {
    render(<Button name="Click Me" />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button name="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<Button name="Click Me" className="custom-class" />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('sets the correct button type', () => {
    render(<Button name="Submit" type="submit" />);

    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
