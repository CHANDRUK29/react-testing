import { render, screen } from "@testing-library/react";
import { MuiMode } from "./Mui-Mode";
import AppProviders from "../../providers/app-providers";


describe('MuiMode', () => {

    // since MuiMode component is wrapped inside App Providers so it should be included in test also
    // we can add those wrapper as a object in a render function as second parameter
    test('renders text correctly', () => {
        render(<MuiMode />, { wrapper: AppProviders })
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode')
    })
})