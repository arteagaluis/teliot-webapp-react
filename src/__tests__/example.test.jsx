import { render, screen } from '@testing-library/react';
import Menu from '../components/Menu';

//prueba gitHub Action

test('renders example component', () => {
  render(<Menu />);
  screen.debug();
});
