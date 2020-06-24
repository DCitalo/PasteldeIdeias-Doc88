import Container from '..';
import React from 'react';
import { render } from '@testing-library/react';

describe('Container | Component', () => {
    it('renders without breaking', () => {
        const container = render(<Container />);

        expect(container).toMatchSnapshot();
    });

    it('renders given children', () => {
        const { getByText } = render(
            <Container>
                <p>foo</p>
            </Container>,
        );

        const content = getByText('foo');

        expect(content).toBeTruthy();
    });
});
