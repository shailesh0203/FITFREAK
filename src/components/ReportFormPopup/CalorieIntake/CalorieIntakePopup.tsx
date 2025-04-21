import React from 'react'
import '../popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';


interface calorieintakepopupprops{
  setShowCalorieIntakePopup:React.Dispatch<React.SetStateAction<boolean>>
}
const CalorieIntakePopup:React.FC<calorieintakepopupprops> = ({setShowCalorieIntakePopup}) => {
  
  const color = '#ffc20e'
  const [date,setDate]=React.useState<any>(dayjs(new Date()))
  const [time,setTime]=React.useState<any>(dayjs(new Date()))
  const [calorieIntake,setCalorieIntake]=React.useState<any>({
    item:' ',
    date:'',
    quantity:'',
    quantitytype:'g'
  })
  const [items,setItems]=React.useState<any>([])
  const saveCalorieIntake=async()=>{}
  const getCalorieIntake=async()=>{}
  const deleteCalorieIntake=async(item:any)=>{}

  React.useEffect(()=>{
    getCalorieIntake()
  },[date])

  const selectedDay=(val:any)=>{
    setDate(val)
  }
  return (
    <div className='popupout'>
      <div className='popupbox'>
        <button className='close'
        onClick={()=>{
          setShowCalorieIntakePopup(true)
        }}
        >
          <AiOutlineClose/>
        </button>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="select Date"
    value={date}
    onChange={(newValue: any) => {
      selectedDay(newValue);
    }}
  />
</LocalizationProvider>
<TextField id="outlined-basic" label="Food item name" variant="outlined" color="warning"
  onChange={(e) => {
    setCalorieIntake({ ...calorieIntake, item: e.target.value })
  }}
/>

<TextField id="outlined-basic" label="Food item amount (in gms)" variant="outlined" color="warning"
  type="number"
  onChange={(e) => {
    setCalorieIntake({ ...calorieIntake, quantity: e.target.value })
  }}
/>
<div className='timebox'>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TimeClock value={time} onChange={(newValue) => setTime(newValue)} />
  </LocalizationProvider>
</div>
<Button variant="contained" color="warning"
  onClick={saveCalorieIntake}
>
  Save
</Button>
      </div>
      </div>
  )
}

export default CalorieIntakePopup