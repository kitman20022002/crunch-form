import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from "../pages/Home/Home";


test('should see Victoria', async () => {
    const {getByTestId, findByText} = render(<Home/>);
    const state = getByTestId('state');
    fireEvent.focus(state);
    const itemVictoria = await findByText('Victoria');
    const itemQueensland = await findByText('Queensland');
    expect(itemVictoria).toBeInTheDocument();
    expect(itemQueensland).toBeInTheDocument();
});

test('should only see Victoria', async () => {
    const {getByTestId, findByText,queryByText} = render(<Home/>);
    const state = getByTestId('state');
    fireEvent.change(state, {target: {value: 'Vi'}});
    fireEvent.focus(state);
    const items = await findByText('Victoria');
    expect(queryByText('Queensland')).toBeNull();
    expect(items).toBeInTheDocument()
});
