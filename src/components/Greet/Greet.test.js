import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('greet component renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText("Greet");
    expect(textElement).toBeInTheDocument();
})