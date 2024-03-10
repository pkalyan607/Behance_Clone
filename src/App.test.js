import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Rendering the App component
  render(<App />);

  // Finding an element with the text "learn react" case-insensitively
  const linkElement = screen.getByText(/learn react/i);

  // Expecting the linkElement to be in the document
  expect(linkElement).toBeInTheDocument();
});
