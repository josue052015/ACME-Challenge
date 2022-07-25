import React, { useState } from 'react'
import Button from '@mui/material/Button';

const EmployeeScheduleForm = ({ asignEmployeeCoincidences }) => {


    let employeesData = [];
    let employeeNames = [];
    let partneersArray = [];

    const setPartneers = () => {

        const matchedEmployees = []

        employeeNames.forEach(employee => {
            employeeNames.forEach(partneer => {
                if (!((matchedEmployees.some(x => x.name == partneer)) || employee == partneer)) {
                    partneersArray.push({ firstEmployee: employee, secondEmployee: partneer })
                }
            })
            matchedEmployees.push({ name: employee })
        })

    }

    const findScheduleCoincidencesByPartneers = (schedules) => {

        let coincidencesArray = []
        const result = []

        partneersArray.forEach(partneers => {

            coincidencesArray = []
            const firstEmployeeSchedule = schedules.filter(x => x.name == partneers.firstEmployee)
            const secondEmployeeSchedule = schedules.filter(x => x.name == partneers.secondEmployee)

            firstEmployeeSchedule.forEach(firstEmployeeData => {

                const partneerCoincidences = secondEmployeeSchedule.filter(x => ((x.from >= firstEmployeeData.from && x.from <= firstEmployeeData.to) || (firstEmployeeData.from >= x.from && firstEmployeeData.from <= x.to)) && x.day == firstEmployeeData.day)
                if (partneerCoincidences.length > 0) coincidencesArray.push({ firstEmployee: partneers.firstEmployee, secondEmployee: partneers.secondEmployee })

            })

            result.push({ partneers: `${partneers.firstEmployee}-${partneers.secondEmployee}`, coincidencesQuantity: coincidencesArray.length })

        })

        return result;
    }

    const getScheduleInformation = (scheduleDay, employeeName) => {

        const scheduleData = scheduleDay.split('')
        const dayWeekLetters = [scheduleData[0], scheduleData[1]]
        const dayWeek = dayWeekLetters.join('')
        scheduleData.shift()
        scheduleData.shift()
        const hours = scheduleData.join('')
        const hoursArray = hours.split('-')
        const from = hoursArray[0]
        const to = hoursArray[1]

        return { name: employeeName, day: dayWeek, from: from, to: to }

    }

    const getEmployeesSchedule = () => {

        try {

            const result = []

            employeesData.forEach(employee => {

                const separatedData = employee.split('=')
                const employeeDays = separatedData[1].split(',')
                const employeeName = separatedData[0];
                employeeNames.push(employeeName)

                employeeDays.forEach(scheduleDay => {
                    result.push(getScheduleInformation(scheduleDay, employeeName))
                })

            })

            return result

        } catch (error) {

            alert("Something went wrong reading the file")
            return null;

        }
    }

    const readFile = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const fileReader = new FileReader();

        fileReader.readAsText(file);

        fileReader.onload = () => {

            employeesData = [];
            employeeNames = [];
            partneersArray = [];

            employeesData = fileReader.result.split(/\r?\n|\r|\n/g);
            const schedules = getEmployeesSchedule()
            setPartneers()
            asignEmployeeCoincidences(findScheduleCoincidencesByPartneers(schedules))
        }

        fileReader.onerror = () => {
            console.log(fileReader.error);
        }
    }


    return (
        <>
            <input
                type="file"
                multiple={false}
                onChange={readFile}
                placeholder = "Choose File"
            />
        </>
    )
}

export default EmployeeScheduleForm