import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Register from './index.jsx';

describe('Register component', () => {
  test('renders Register form with inputs and button', () => {
    render(<Register />);

    const fullNameInput = screen.getByPlaceholderText('Nombre completo');
    const emailInput = screen.getByPlaceholderText('Email');
    const numInput = screen.getByPlaceholderText('Numero celular');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Enviar');

    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(numInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('updates form state when input values change', () => {
    render(<Register />);

    const fullNameInput = screen.getByPlaceholderText('Nombre completo');
    const emailInput = screen.getByPlaceholderText('Email');
    const numInput = screen.getByPlaceholderText('Numero celular');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(numInput, { target: { value: 123456789 } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(fullNameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(numInput).toHaveValue(123456789);
    expect(passwordInput).toHaveValue('password123');
  });

  test('submits form when submit button is clicked', () => {
    render(<Register />);

    const submitButton = screen.getByText('Enviar');

    fireEvent.click(submitButton);

    // Add assertions for form submission, e.g., check if console.log('submit') was called
  });
});

describe('useRegister hook', () => {
  test('updates form state when handleChange is called', () => {
    render(<Register />);

    const fullNameInput = screen.getByPlaceholderText('Nombre completo');
    const emailInput = screen.getByPlaceholderText('Email');
    const numInput = screen.getByPlaceholderText('Numero celular');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(numInput, { target: { value: 123456789 } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(fullNameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(numInput).toHaveValue(123456789);
    expect(passwordInput).toHaveValue('password123');
  });
});
