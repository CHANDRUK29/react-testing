/**
 * Greet should render the text hello and if name is passed into the component
 * It should render hello followed by name
 */

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => {
    test('greet component renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })

    test('Greet render with name', () => {
        render(<Greet name='Chandru' />)
        const textElement = screen.getByText("Hello Chandru");
        expect(textElement).toBeInTheDocument();
    })

})