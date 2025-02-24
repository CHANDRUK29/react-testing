import { render, screen } from '@testing-library/react'
import Application from './Application';
describe('Application', () => {
    test("renders correctly", () => {
        render(<Application/>)

        // getByRole
        const pageHeading = screen.getByRole('heading',{
            level:1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading',{
           level:2
        });
        expect(sectionHeading).toBeInTheDocument();

        // getByText
        const paragraphElement = screen.getByText('All Fields Are Mandatory');
        expect(paragraphElement).toBeInTheDocument();

        //getByTitle        
        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        //getByAltText
        const imageElement = screen.getByAltText('an person');
        expect(imageElement).toBeInTheDocument();

        //getByAltText
        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox',{
            name:"Name"
        });
        expect(nameElement).toBeInTheDocument();

        // get by label text   
        const nameElement2 = screen.getByLabelText('Name');
        expect(nameElement2).toBeInTheDocument();
        
        // get by place holder text
        const nameElement3 = screen.getByPlaceholderText('FullName');
        expect(nameElement3).toBeInTheDocument();
        
        //get by display value
        const nameElement4 = screen.getByDisplayValue('Chandru');
        expect(nameElement4).toBeInTheDocument();

        const textAreaElement = screen.getByRole('textbox',{
            name:"Bio"
        });
        expect(textAreaElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();
        
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();
        
        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();

    })
})