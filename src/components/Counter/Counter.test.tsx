import { render, screen } from "@testing-library/react"
import Counter from './Counter';
import user from '@testing-library/user-event';

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(incrementButton).toBeInTheDocument();
    })
    test('renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup();
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: "Increment" });
        await user.click(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    })

    // [Pointer interactions]
    test('renders a count of 10 after clicking set button', async () => {
        user.setup();
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput, '10'); //type is a utility api
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.click(setButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    })

    //[Keyboard interactions]
    // when tab button is pressed in the component first increment button is focused
    // then input is focused and then set button is focused
    // writing test cases to check that
    test('elements are focused in the right order', async () => {
        user.setup();
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', { name: 'Set' });
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.tab(); // tab is convenience api
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    })
})