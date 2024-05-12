import { render, fireEvent } from '@testing-library/react';
import { Button } from '../../../components';

test('renders button with correct label', () => {
    const { getByText } = render(<Button handleClick={() => {}} />);
    
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Button handleClick={onClick} />);

    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
});