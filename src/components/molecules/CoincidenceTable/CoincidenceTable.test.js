import CoincidenceTable from './CoincidenceTable'
import { render, screen } from '@testing-library/react';

test('table is rendering', () => {
    const coincidences = [{id: 1, partneers: 'Pedro - Juan', coincidencesQuantity: 3}]
    render(<CoincidenceTable employeeCoincidences = {coincidences}/>);
    const linkElement = screen.getByText(/Partneers/i);
    expect(linkElement).toBeInTheDocument();
  });