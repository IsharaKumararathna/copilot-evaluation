import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  // test case to check if the bus card form rendered correctly check First name, Last name, Email, Phone number, and Birthdate and two buttons Submit and Cancel
  it('should render the bus card form correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('First name')).toBeInTheDocument();
    expect(getByText('Last name')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Phone number')).toBeInTheDocument();
    expect(getByText('Birth date')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  // create a test to enter the first name and last name, email, phone number
  it('should enter the first name and last name, email, phone number', () => {
    const { getByLabelText } = render(<App />);
    const firstName = getByLabelText('First name');
    const lastName = getByLabelText('Last name');
    const email = getByLabelText('Email');
    const phoneNumber = getByLabelText('Phone number');
    const birthDate = getByLabelText('Birth date');
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(birthDate).toBeInTheDocument();
  });

  // create a test to enter the first name and last name, email, phone number
  it('should enter the first name and last name, email, phone number', () => {
    const { getByLabelText } = render(<App />);
    const firstName = getByLabelText('First name');
    const lastName = getByLabelText('Last name');
    const email = getByLabelText('Email');
    const phoneNumber = getByLabelText('Phone number');

    // get submit button
    const submitButton = screen.getByText('Submit');
    userEvent.type(firstName, 'John');
    userEvent.type(lastName, 'Doe');
    userEvent.type(email, 'john@gmail.com');
    userEvent.type(phoneNumber, '1234567890');

    // fireEvent submit button
    fireEvent.click(submitButton);
    // userEvent.type(birthDate, '01/01/1990');
    /*
    expect the screen to have this displayed with the above values
    First Name: harshana
    Last Name: edirisinghe
    Email: hasanka@gmail.com
    Phone Number: 0191919191
    Birth Date: 12/12/2012
    */

    expect(screen.getByText('First Name: John', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Last Name: Doe', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Email: john@gmail.com', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Phone Number: 1234567890', { exact: false })).toBeInTheDocument();
  });
});