import React from 'react';
import './style.css'


import telephone from '../assets/phone.svg'
import man from '../assets/man.svg'
import woman from '../assets/woman.svg'
import unknown from '../assets/unknown.svg'


const Contact = ({firstName,lastName,phone,gender}) => {


    return ( 
         <>
        <div className='container'>
            <div className="main_info">
                <div className="icon">
                    <img src={gender==='male'? man: gender==='female'?woman:unknown } alt="" />
                </div>
                <div className="info">
                    <div className="name">{firstName +' '+lastName}</div>
                    <div className="phone_number">{phone}</div>
                </div>
            </div>
            <div className="phone">
                <img src={telephone} alt="" />
            </div>
        </div>
        <hr />
        </>
    )
}

export default Contact;