import { render, screen } from '@testing-library/react';
import Menu from '../components/Menu';

test('renders example component', () => {
  render(<Menu />);
  screen.debug();
});
