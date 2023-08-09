import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
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

  it('should enter the first name and last name, email, phone number', () => {
    const { getByLabelText } = render(<App />);
    const firstName = getByLabelText('First name');
    const lastName = getByLabelText('Last name');
    const email = getByLabelText('Email');
    const phoneNumber = getByLabelText('Phone number');

    const submitButton = screen.getByText('Submit');
    userEvent.type(firstName, 'John');
    userEvent.type(lastName, 'Doe');
    userEvent.type(email, 'john@gmail.com');
    userEvent.type(phoneNumber, '1234567890');

    fireEvent.click(submitButton);

    expect(screen.getByText('First Name: John', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Last Name: Doe', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Email: john@gmail.com', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Phone Number: 1234567890', { exact: false })).toBeInTheDocument();
  });
});