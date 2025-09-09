import { render, screen } from '@testing-library/react';

function Hello() { return <div>hello</div>; }

test('renders hello', () => {
  render(<Hello />);
  expect(screen.getByText('hello')).toBeInTheDocument();
});
