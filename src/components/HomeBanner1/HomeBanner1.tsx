import React from 'react'
import  CircularProgress from '@mui/joy/CircularProgress'
import './HomeBanner1.css'
import { AiOutlineEye } from 'react-icons/ai'
const HomeBanner1 = () => {
    const [data,setData]=React.useState<any>(null)
    const getData=async()=>{
        // let temp = [
        //     {
        //       "name": "Calories Intake",
        //       "value": 2000,
        //       "unit": "kcal",
        //       "goal": 2500,
        //       "goalUnit": "kcal"
        //     },
        //     {
        //       "name": "Sleep",
        //       "value": 8,
        //       "unit": "hrs",
        //       "goal": 8,
        //       "goalUnit": "hrs"
        //     },
        //     {
        //       "name": "Steps",
        //       "value": 50,
        //       "unit": "steps",
        //       "goal": 10000,
        //       "goalUnit": "steps"
        //     },
        //     {
        //       "name": "Water",
        //       "value": 2000,
        //       "unit": "ml",
        //       "goal": 3000,
        //       "goalUnit": "ml"
        //     },
        //     {
        //       "name": "Weight",
        //       "value": 75,
        //       "unit": "kg",
        //       "goal": 70,
        //       "goalUnit": "kg"
        //     },
        //     {
        //       "name": "Workout",
        //       "value": 2,
        //       "unit": "days",
        //       "goal": 6,
        //       "goalUnit": "days"
        //     }
        //   ]
        //   setData(temp)
        fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/report/getreport',{
          method:'GET',
          credentials:'include'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.ok){
            setData(data.data)
          }else{
            setData([])
          }
        })
        .catch(err=>{
          console.log(err)
          setData([])
        })
    }

    React.useEffect(()=>{
        getData()
    },[])
    
    function simplifyFraction(numerator: number, denominator: number): [number, number] {
      function gcd(a: number, b: number): number {
        if (!Number.isFinite(a) || !Number.isFinite(b)) return 1; // Safe fallback
        return b === 0 ? a : gcd(b, a % b);
      }
    
      if (denominator === 0 || !Number.isFinite(numerator) || !Number.isFinite(denominator)) {
        return [numerator, 1]; // Avoid division by 0 or invalid numbers
      }
    
      const commonDivisor = gcd(numerator, denominator);
      return [numerator / commonDivisor, denominator / commonDivisor];
    }
    
  return (
    <div className='meters'>
        {
            data?.length>0 && data.map((item:any,index:number)=>{
                return(
                <div className='card' key={index}>
                    <div className='card-header'>
                        <div className='card-header-box'>
                            <div className='card-header-box-name'>{item.name}</div>
                            <div className='card-header-box-value'>{item.value}{item.unit}</div>
                        </div>
                        <div className='card-header-box'>
                            <div className='card-header-box-name'>Target</div>
                            <div className='card-header-box-value'>{item.goal}{item.goalUnit}</div>
                        </div>
                    </div>
                    <CircularProgress
                    color="primary"
                     determinate
                    variant="solid"
                    size="lg"
                    value={
                        (item.value/item.goal)*100
                    }
                     >
                       <span className='textincircle'>
                  {
                    simplifyFraction(item.value, item.goal)[0] + ' / ' + simplifyFraction(item.value, item.goal)[1]
                  }
                </span>
                     </CircularProgress>
                     <button
               onClick={() => {
                window.location.href = `/report/${item.name}`
              }}
              >Show Report <AiOutlineEye /></button>
                </div>
                )
                
            })
        }
    </div>
  )
}

export default HomeBanner1