import { render } from '@testing-library/react';
import { Spinner } from '../../../components';

test('renders loading text', () => {
    const { getByText } = render(<Spinner />);

    const loadingElement = getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
});