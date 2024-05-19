import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Register from './index.jsx';

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
