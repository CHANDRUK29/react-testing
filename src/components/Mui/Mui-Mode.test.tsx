// this is common testing library import
// import { render, screen } from "@testing-library/react";
// this is custom wrapper function import
import {render,screen} from '../../test-utils';
import { MuiMode } from "./Mui-Mode";
import AppProviders from "../../providers/app-providers";


describe('MuiMode', () => {

    // since MuiMode component is wrapped inside App Providers so it should be included in test also
    // we can add those wrapper as a object in a render function as second parameter

    // We can also use custom wrapper function decalred in a test file instead of importing wrapper in all test case
    test('renders text correctly', () => {
        // render(<MuiMode />, { wrapper: AppProviders }) // this is regular wrapper import
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode')
    })
})