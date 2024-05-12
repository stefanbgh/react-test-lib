import { render } from '@testing-library/react';
import App from './App';

test('renders JSX element', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
});
