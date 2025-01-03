"use client"
import React from 'react'
import './ReportPage.css'
import {LineChart} from '@mui/x-charts/LineChart'
import {AiFillEdit} from 'react-icons/ai'
import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'

const page = () => {
    const chartsParams = {
        // margin: { bottom: 20, left: 25, right: 5 },
        height: 300,
    };
    const[dataS1,setDataS1]=React.useState<any>(null)
    const getDataForS1=async()=>{
        let temp = [
            {
                date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2000,
                unit: 'kcal'
            },
            {
                date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2500,
                unit: 'kcal'
            },
            {
                date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2700,
                unit: 'kcal'
            },
            {
                date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 3000,
                unit: 'kcal'
            },
            {
                date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2000,
                unit: 'kcal'
            },
            {
                date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2300,
                unit: 'kcal'
            },
            {
                date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2500,
                unit: 'kcal'
            },
            {
                date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2700,
                unit: 'kcal'
            },
        ]
        console.log(temp)
        setDataS1(temp)
    }
    React.useEffect(()=>{
        getDataForS1()
    },[])
  return (
    <div className='reportpage'>
         <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
     {...chartsParams}
    />
    </div>
  )
}

export default page