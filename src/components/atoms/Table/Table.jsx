import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const Table = ({columsInformation,rowsInformation}) => {

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rowsInformation}
                    columns={columsInformation}
                    pageSize={5}
                    rowsPerPageOptions={[5]} 
                />
            </div>
        </>
    )
}

export default Table