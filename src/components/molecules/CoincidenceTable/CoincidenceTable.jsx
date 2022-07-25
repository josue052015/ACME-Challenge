import React from 'react'
import Table from '../../atoms/Table/Table'

const CoincidenceTable = ({ employeeCoincidences }) => {

  const columns = [

    { field: 'partneers', headerName: 'Partneers', width: 300 },
    { field: 'coincidencesQuantity', headerName: 'Coincidences', width: 130 }
  ];

  const rows = () => {

    const result = []

    employeeCoincidences.forEach((element, index) => {
      result.push({...element, id: index})
    });

    return result;

  }

  return (
    <>
      <Table columsInformation = {columns} rowsInformation = {rows()} />
    </>
  )
}

export default CoincidenceTable