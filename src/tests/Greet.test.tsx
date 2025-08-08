import {render , screen} from '@testing-library/react';
import Greet from '../components/Greet';

test('renders Greet component', () => {
  render(<Greet />);
  const headingElement = screen.getByText(/Hello world/i);
  expect(headingElement).toBeInTheDocument();
});