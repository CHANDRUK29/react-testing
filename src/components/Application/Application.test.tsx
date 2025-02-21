import { render, screen } from '@testing-library/react'
import Application from './Application';
describe('Application', () => {
    test("renders correctly", () => {
        render(<Application/>)
        const textElement = screen.getByRole('textbox');
        expect(textElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();
        
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();
        
        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();

    })
})