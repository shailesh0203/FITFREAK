import React from 'react'
import './Authpopup.css'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


const Authpopup = () => {
    const[showSignup,setShowSignup]=React.useState<boolean>(false)
    const handleLogin=()=>{

    }
    const handleSignup=()=>{

    }
  return (
    <div className='popup'>
        {
            showSignup?(
                <div className='authform'>
                    <div className='left'>
                        <Image src={logo} alt="Logo"/>
                    </div>
                    <div className='right'>
                     <h1>Signup to become a freak</h1>
                     <form action="">
                     <Input placeholder="email" size="lg" />
                     <Input placeholder="password" size="lg" type="password" />
                     <div className="form_input_leftright">
                     <Input placeholder="Age" variant="outlined" type="number" size="lg" />
                     <Input placeholder="Weight" variant="outlined" type="number" size="lg"/>
                     </div>
                     <Select
                    color="warning"
                    placeholder="Gender"
                    size="lg"
                       >
                     <Option value="male">Male</Option>
                     <Option value="female">Female</Option>
                     <Option value="other">Other</Option>
                     </Select>
                     <br></br>
                     <label htmlFor="">Height</label>
                     <div className="form_input_leftright">
                     <Input placeholder="ft" variant="outlined" type="number" size="lg" />
                     <Input placeholder="in" variant="outlined" type="number" size="lg"/>
                     </div>
                     
                     <button onClick={()=>{
                        handleSignup()
                     }}>Signup</button>
                     </form>
                     <p>Already have an account?  <button onClick={()=>{
                    setShowSignup(false)
                }
                }>
                    Login
                </button> </p>
                    </div>
               
                </div>
               
            ):(
                <div className='authform'>
                    <div className='left'>
                        <Image src={logo} alt="Logo"/>
                    </div>
                    <div className='right'>
                     <h1>Login to become a freak</h1>
                     <form action="">
                     <Input placeholder="email" size="lg" />
                     <Input placeholder="password" size="lg" type="password" />
                     <button onClick={()=>{
                        handleLogin()
                     }}>Login</button>
                     </form>
                     <p>Don't have an acoount?  <button onClick={()=>{
                    setShowSignup(true)
                }
                }>
                    Signup
                </button> </p>
                    </div>
               
                </div>
            )
        }
       </div>
  )
}

export default Authpopup