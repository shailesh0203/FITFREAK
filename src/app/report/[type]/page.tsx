"use client"
import React from 'react'

import './ReportPage.css'
import {LineChart} from '@mui/x-charts/LineChart'
import {AiFillEdit} from 'react-icons/ai'
import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
import { usePathname } from 'next/navigation'

const page = () => {
   
    const color='#ffc20e'
    const pathname=usePathname()
    const chartsParams = {
        // margin: { bottom: 20, left: 25, right: 5 },
        height: 300,
    };
    const[dataS1,setDataS1]=React.useState<any>(null)
    const getDataForS1=async()=>{
        if(pathname=='/report/Calorie%20Intake'){
            fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/getcalorieintakebylimit', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ limit: 10 })
})
.then(res=>res.json())
.then(data => {
    if (data.ok ) {
        let temp = data.data.map((item: any) => {
            return {
                date: item.date,
                value: item.calorieIntake,
                unit: 'kcal'
            }
        })
         let dataForLineChart=temp.map((item:any)=>{
            let val=JSON.stringify(item.value)
            return val
        })
       
        let dataForXAxis=temp.map((item:any)=>{
            let val=(new Date(item.date))
            return val
        })
         setDataS1({
            data:dataForLineChart,
            title:'1 Day calorie intake',
            color:color,
            xAxis:{
                data:dataForXAxis,
                label:String('Last 10 Days'),
                scaleType:'time'
            }
        })
    }
    else {
        setDataS1([])
    }
})
.catch(err=>{
    console.log(err)
})

        }else{
            alert('get data for other reports')
        }
        // let temp = [
        //     {
        //         date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 3000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2300,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        // ]
       
        
       
    }
    React.useEffect(()=>{
        getDataForS1()
    },[])
   const [showCalorieIntakePopup,setShowCalorieIntakePopup] =React.useState<boolean>(false)
  return (
    <div className='reportpage'>
 
        <div className='s1'>
        { dataS1 &&
         <LineChart
      xAxis={[{ 
        id:'Day',
        data:dataS1.xAxis.data,
        scaleType:dataS1.xAxis.scaleType,
        label:dataS1.xAxis.label,
        valueFormatter:(date:any)=>{
            return String(date.getDate());
        }
       }]}
      series={[
        {
          data:dataS1.data,
          label:dataS1.title,
          color:dataS1.color
        },
      ]}
     {...chartsParams}
    />
}

</div>


<button className='editbutton'
onClick={()=>{
    const pathname = window.location.pathname; 
    if(pathname=='/report/Calorie%20Intake'){
    setShowCalorieIntakePopup(true)
    }else{
        alert('show popup for other reports')
    }
}}>
    <AiFillEdit/>
</button>
{
    showCalorieIntakePopup &&
    <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup}/>
}
    </div>
  )
}

export default page