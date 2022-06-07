import React from 'react';
import BlogCard from '../../../components/Blog/blogCard';
import { render } from '@testing-library/react';

describe('BlogCard', () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            title: 'title',
            content: 'content',
            id: 1,
            authorUserId :{fullName: 'Segni'}
        };
    });

    test('should render title, content, and card', () => {
        const {getByText, getByAltText} = render(<BlogCard {...expectedProps} />);
        const title = getByText(expectedProps.title);
        const content = getByText(expectedProps.content);

        expect(title).toBeVisible();
        expect(content).toBeVisible();
    });
});
