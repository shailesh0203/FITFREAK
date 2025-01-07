import React from 'react'
import '../popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from "react-horizontal-datepicker";
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'

interface calorieintakepopupprops{
  setShowCalorieIntakePopup:React.Dispatch<React.SetStateAction<boolean>>
}
const CalorieIntakePopup:React.FC<calorieintakepopupprops> = ({setShowCalorieIntakePopup}) => {
  const color = '#ffc20e'
  const [date,setDate]=React.useState<any>(new Date())
  const selectedDay = (val: any) => {
    console.log(val)
  };
  return (
    <div className='popupout'>
      <div className='popupbox'>
     <button className='close'
     onClick={()=>{
      setShowCalorieIntakePopup(false)
     }}
     >
      <AiOutlineClose/>
     </button>
     <DatePicker getSelectedDay={selectedDay}
          endDate={100}
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={color}
        />
     </div>
      </div>
  )
}

export default CalorieIntakePopup