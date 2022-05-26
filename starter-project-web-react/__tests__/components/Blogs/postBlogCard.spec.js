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
            author: 'Segni'
        };
    });

    test('should render name, address, and image', () => {
        const {getByText, getByAltText} = render(<BlogCard {...expectedProps} />);
        const title = getByText(expectedProps.title);
        const content = getByText(expectedProps.content);
        const au = expectedProps.author.charAt(0).toUpperCase() + expectedProps.author.slice(1)
        console.log(au, 'thissssssssssssssssssssssssssssss', au === "Segni")
        const author = getByAltText(au);

        expect(title).toBeVisible();
        expect(content).toBeVisible();
        expect(author).toBeVisible();
    });
});
