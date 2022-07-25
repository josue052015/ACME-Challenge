import React, { useState } from 'react'
import EmployeeScheduleForm from '../../molecules/employeeScheduleForm/EmployeeScheduleForm'
import { CssBaseline, Paper, Typography, Divider } from '@mui/material';
import useStyles from './styles';
import CoincidenceTable from '../../molecules/CoincidenceTable/CoincidenceTable';

const EmployeeManagement = () => {

    const classes = useStyles();
    const [employeeCoincidences, setEmployeeCoincidences] = useState()

    return (
        <>

        <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>ACME</Typography>
                    <br />
                    <EmployeeScheduleForm asignEmployeeCoincidences = {(e) => setEmployeeCoincidences(e)}/>
                    <div className={classes.toolbar} />
                    {employeeCoincidences && <CoincidenceTable employeeCoincidences = {employeeCoincidences}/>}
                </Paper>
            </main>
            
        </>
    )
}

export default EmployeeManagement