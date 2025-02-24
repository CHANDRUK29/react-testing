import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {

    const skills = ['HTML', "CSS", "JAVASCRIPT", "REACT JS", 'NODE JS']
    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })
    test('renders a list of items', () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    })

    test('renders a button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button',{name:'Login'});
        expect(loginButton).toBeInTheDocument()
    })
    test('start learning a button is not rendered', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button',{name:'Start Learning'});
        expect(startLearningButton).not.toBeInTheDocument()
    })
})