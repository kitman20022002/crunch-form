import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home/Home';


test('should not show modal after init', async () => {
    const {queryByTestId} = render(<Home/>);
    expect(queryByTestId('modal')).toBeNull();
});

test('should not show modal after click', async () => {
    const {getByTestId, queryByTestId} = render(<Home/>);
    const linkElement = getByTestId('save-btn');

    fireEvent.click(linkElement);
    expect(queryByTestId('modal')).toBeNull();
});


test('should show 9 errors after click', async () => {
    const {getByTestId, getAllByTestId} = render(<Home/>);
    const linkElement = getByTestId('save-btn');
    fireEvent.click(linkElement);
    const errors = await getAllByTestId('error').length;
    expect(errors).toBe(9);
});

test('should fail after submit by phone', async () => {
    const {getByTestId, queryByTestId} = render(<Home/>);
    const honorifics = getByTestId('honorifics');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const accountName = getByTestId('accountName');
    const companyName = getByTestId('companyName');
    const phone = getByTestId('phone');
    const fax = getByTestId('fax');
    const title = getByTestId('title');
    const email = getByTestId('email');
    const street = getByTestId('street');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const postCode = getByTestId('postCode');
    const description = getByTestId('description');
    const linkElement = getByTestId('save-btn');

    fireEvent.change(honorifics, {target: {value: 'Mr'}});
    fireEvent.change(firstName, {target: {value: 'sdfdf'}});
    fireEvent.change(lastName, {target: {value: 'sds'}});
    fireEvent.change(accountName, {target: {value: 'sds'}});
    fireEvent.change(companyName, {target: {value: 'company'}});
    fireEvent.change(phone, {target: {value: 'phone'}});
    fireEvent.change(fax, {target: {value: 'fax'}});
    fireEvent.change(title, {target: {value: 'title'}});
    fireEvent.change(email, {target: {value: 'sds@fefe.com'}});
    fireEvent.change(street, {target: {value: '56 street'}});
    fireEvent.change(city, {target: {value: 'NSW'}});
    fireEvent.change(state, {target: {value: 'state'}});
    fireEvent.change(postCode, {target: {value: '2131'}});
    fireEvent.change(description, {target: {value: 'dsfsdfdsf'}});


    fireEvent.click(linkElement);
    expect(honorifics.value).toBe('Mr');
    expect(firstName.value).toBe('sdfdf');
    expect(lastName.value).toBe('sds');
    expect(accountName.value).toBe('sds');
    expect(companyName.value).toBe('company');
    expect(phone.value).toBe('phone');
    expect(fax.value).toBe('fax');
    expect(title.value).toBe('title');
    expect(email.value).toBe('sds@fefe.com');
    expect(street.value).toBe('56 street');
    expect(city.value).toBe('NSW');
    expect(state.value).toBe('state');
    expect(postCode.value).toBe('2131');
    expect(description.value).toBe('dsfsdfdsf');

    expect(queryByTestId('modal')).toBeNull();
});


test('should fail after submit by fax incorrect', async () => {
    const {getByTestId, queryByTestId} = render(<Home/>);
    const honorifics = getByTestId('honorifics');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const accountName = getByTestId('accountName');
    const companyName = getByTestId('companyName');
    const phone = getByTestId('phone');
    const fax = getByTestId('fax');
    const title = getByTestId('title');
    const email = getByTestId('email');
    const street = getByTestId('street');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const postCode = getByTestId('postCode');
    const description = getByTestId('description');
    const linkElement = getByTestId('save-btn');

    fireEvent.change(honorifics, {target: {value: 'Mr'}});
    fireEvent.change(firstName, {target: {value: 'sdfdf'}});
    fireEvent.change(lastName, {target: {value: 'sds'}});
    fireEvent.change(accountName, {target: {value: 'sds'}});
    fireEvent.change(companyName, {target: {value: 'company'}});
    fireEvent.change(phone, {target: {value: '211554'}});
    fireEvent.change(fax, {target: {value: 'fax'}});
    fireEvent.change(title, {target: {value: 'title'}});
    fireEvent.change(email, {target: {value: 'sds@fefe.com'}});
    fireEvent.change(street, {target: {value: '56 street'}});
    fireEvent.change(city, {target: {value: 'NSW'}});
    fireEvent.change(state, {target: {value: 'state'}});
    fireEvent.change(postCode, {target: {value: '2031'}});
    fireEvent.change(description, {target: {value: 'dsfsdfdsf'}});


    fireEvent.click(linkElement);
    expect(honorifics.value).toBe('Mr');
    expect(firstName.value).toBe('sdfdf');
    expect(lastName.value).toBe('sds');
    expect(accountName.value).toBe('sds');
    expect(companyName.value).toBe('company');
    expect(phone.value).toBe('211554');
    expect(fax.value).toBe('fax');
    expect(title.value).toBe('title');
    expect(email.value).toBe('sds@fefe.com');
    expect(street.value).toBe('56 street');
    expect(city.value).toBe('NSW');
    expect(state.value).toBe('state');
    expect(postCode.value).toBe('2031');
    expect(description.value).toBe('dsfsdfdsf');

    expect(queryByTestId('modal')).toBeNull();
});

test('should success and show modal after submit', async () => {
    const {getByTestId, findByTestId} = render(<Home/>);
    const honorifics = getByTestId('honorifics');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const accountName = getByTestId('accountName');
    const companyName = getByTestId('companyName');
    const phone = getByTestId('phone');
    const fax = getByTestId('fax');
    const title = getByTestId('title');
    const email = getByTestId('email');
    const street = getByTestId('street');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const postCode = getByTestId('postCode');
    const description = getByTestId('description');
    const linkElement = getByTestId('save-btn');

    fireEvent.change(honorifics, {target: {value: 'Mr'}});
    fireEvent.change(firstName, {target: {value: 'sdfdf'}});
    fireEvent.change(lastName, {target: {value: 'sds'}});
    fireEvent.change(accountName, {target: {value: 'sds'}});
    fireEvent.change(companyName, {target: {value: 'company'}});
    fireEvent.change(phone, {target: {value: '211554'}});
    fireEvent.change(fax, {target: {value: '123545'}});
    fireEvent.change(title, {target: {value: 'title'}});
    fireEvent.change(email, {target: {value: 'sds@fefe.com'}});
    fireEvent.change(street, {target: {value: '56 street'}});
    fireEvent.change(city, {target: {value: 'NSW'}});
    fireEvent.change(state, {target: {value: 'state'}});
    fireEvent.change(postCode, {target: {value: '2031'}});
    fireEvent.change(description, {target: {value: 'dsfsdfdsf'}});


    fireEvent.click(linkElement);
    expect(honorifics.value).toBe('Mr');
    expect(firstName.value).toBe('sdfdf');
    expect(lastName.value).toBe('sds');
    expect(accountName.value).toBe('sds');
    expect(companyName.value).toBe('company');
    expect(phone.value).toBe('211554');
    expect(fax.value).toBe('123545');
    expect(title.value).toBe('title');
    expect(email.value).toBe('sds@fefe.com');
    expect(street.value).toBe('56 street');
    expect(city.value).toBe('NSW');
    expect(state.value).toBe('state');
    expect(postCode.value).toBe('2031');
    expect(description.value).toBe('dsfsdfdsf');

    const item = await findByTestId('modal');
    expect(item).toBeInTheDocument();
});

test('should success if fax is empty', async () => {
    const {getByTestId, findByTestId} = render(<Home/>);
    const honorifics = getByTestId('honorifics');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const accountName = getByTestId('accountName');
    const companyName = getByTestId('companyName');
    const phone = getByTestId('phone');

    const title = getByTestId('title');
    const email = getByTestId('email');
    const street = getByTestId('street');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const postCode = getByTestId('postCode');
    const description = getByTestId('description');
    const linkElement = getByTestId('save-btn');

    fireEvent.change(honorifics, {target: {value: 'Mr'}});
    fireEvent.change(firstName, {target: {value: 'sdfdf'}});
    fireEvent.change(lastName, {target: {value: 'sds'}});
    fireEvent.change(accountName, {target: {value: 'sds'}});
    fireEvent.change(companyName, {target: {value: 'company'}});
    fireEvent.change(phone, {target: {value: '211554'}});
    fireEvent.change(title, {target: {value: 'title'}});
    fireEvent.change(email, {target: {value: 'sds@fefe.com'}});
    fireEvent.change(street, {target: {value: '56 street'}});
    fireEvent.change(city, {target: {value: 'NSW'}});
    fireEvent.change(state, {target: {value: 'state'}});
    fireEvent.change(postCode, {target: {value: '2031'}});
    fireEvent.change(description, {target: {value: 'dsfsdfdsf'}});


    fireEvent.click(linkElement);
    expect(honorifics.value).toBe('Mr');
    expect(firstName.value).toBe('sdfdf');
    expect(lastName.value).toBe('sds');
    expect(accountName.value).toBe('sds');
    expect(companyName.value).toBe('company');
    expect(phone.value).toBe('211554');
    expect(title.value).toBe('title');
    expect(email.value).toBe('sds@fefe.com');
    expect(street.value).toBe('56 street');
    expect(city.value).toBe('NSW');
    expect(state.value).toBe('state');
    expect(postCode.value).toBe('2031');
    expect(description.value).toBe('dsfsdfdsf');

    const item = await findByTestId('modal');
    expect(item).toBeInTheDocument();
});


test('should clear form after click cancel button', async () => {
    const {getByTestId, queryByTestId} = render(<Home/>);
    const honorifics = getByTestId('honorifics');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const accountName = getByTestId('accountName');
    const companyName = getByTestId('companyName');
    const phone = getByTestId('phone');
    const fax = getByTestId('fax');
    const title = getByTestId('title');
    const email = getByTestId('email');
    const street = getByTestId('street');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const postCode = getByTestId('postCode');
    const description = getByTestId('description');
    const linkElement = getByTestId('cancel-btn');

    fireEvent.change(honorifics, {target: {value: 'Mr'}});
    fireEvent.change(firstName, {target: {value: 'sdfdf'}});
    fireEvent.change(lastName, {target: {value: 'sds'}});
    fireEvent.change(accountName, {target: {value: 'sds'}});
    fireEvent.change(companyName, {target: {value: 'company'}});
    fireEvent.change(phone, {target: {value: 'phone'}});
    fireEvent.change(fax, {target: {value: 'fax'}});
    fireEvent.change(title, {target: {value: 'title'}});
    fireEvent.change(email, {target: {value: 'sds@fefe.com'}});
    fireEvent.change(street, {target: {value: '56 street'}});
    fireEvent.change(city, {target: {value: 'NSW'}});
    fireEvent.change(state, {target: {value: 'state'}});
    fireEvent.change(postCode, {target: {value: '2131'}});
    fireEvent.change(description, {target: {value: 'dsfsdfdsf'}});


    fireEvent.click(linkElement);
    expect(honorifics.value).toBe('');
    expect(firstName.value).toBe('');
    expect(lastName.value).toBe('');
    expect(accountName.value).toBe('');
    expect(companyName.value).toBe('');
    expect(phone.value).toBe('');
    expect(fax.value).toBe('');
    expect(title.value).toBe('');
    expect(email.value).toBe('');
    expect(street.value).toBe('');
    expect(city.value).toBe('');
    expect(state.value).toBe('');
    expect(postCode.value).toBe('');
    expect(description.value).toBe('');

    expect(queryByTestId('modal')).toBeNull();
});


