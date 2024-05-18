import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input component', () => {
  test('renders Input component with default props', () => {
    render(<Input />);

    const inputElement = screen.getByPlaceholderText('');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toBeRequired();
    expect(inputElement).toHaveAttribute('minLength', '3');
    expect(inputElement).toHaveAttribute('maxLength', '64');
  });

  //   test('renders Input component with custom props', () => {
  //     const placeholder = 'Enter email';
  //     const iconPath = '/img/icon/mail-icon.svg';

  //     render(<Input placeholder={placeholder} icon={iconPath} />);

  //     const inputElement = screen.getByPlaceholderText(placeholder);
  //     expect(inputElement).toBeInTheDocument();

  //     // Buscar el elemento SVG
  //     const svgElement = screen.getByTestId('input-icon-svg');
  //     expect(svgElement).toBeInTheDocument();

  //     // Buscar la imagen dentro del SVG
  //     const iconElement = svgElement.querySelector('image');
  //     expect(iconElement).toBeInTheDocument();
  //     expect(iconElement).toHaveAttribute('href', iconPath);
  //   });

  test('calls onChange handler when input value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('calls onBlur handler when input loses focus', () => {
    const handleBlur = jest.fn();
    render(<Input onBlur={handleBlur} placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.blur(inputElement);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('calls onFocus handler when input gains focus', () => {
    const handleFocus = jest.fn();
    render(<Input onFocus={handleFocus} placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.focus(inputElement);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });
});
