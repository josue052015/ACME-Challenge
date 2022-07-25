import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeScheduleForm from '../../molecules/employeeScheduleForm/EmployeeScheduleForm'
import EmployeeManagement from './EmployeeManagement'


test('renders the form', () => {

    render(<EmployeeManagement />);
    const linkElement = screen.getByPlaceholderText(/Choose File/i);
    expect(linkElement).toBeInTheDocument();

});


