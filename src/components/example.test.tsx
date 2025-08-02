import React from 'react';
import { render, screen } from '@testing-library/react';


const ExampleComponent = () => <div>Hello World</div>;

test('renders hello world', () => {
  render(<ExampleComponent />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});