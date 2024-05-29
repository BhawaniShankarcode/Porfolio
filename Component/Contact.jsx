import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div>
        <div className='Contact_main'>
        <h2 className='Contact_heading'>Contact-information</h2>

          <div className='Contact_div'>
            <IoCallOutline className='icon' />
            <p className='Contact_para'>+917028421921</p>
          </div>
          <div className='Contact_div'>
            <FaWhatsapp className='icon' />
            <p className='Contact_para'>+917028421921</p>
          </div>
          <div className='Contact_div'>
        <CiInstagram className='icon' />
            <p className='Contact_para'>    <a href="https://www.instagram.com/bhawanishankar_0431">bhawanishankar_0431</a></p>
          </div>
          <div className='Contact_div'>
            <MdOutlineMail className='icon' />
            <p className='Contact_para'><a href="mailto:108bhawanishankar@gmail.com">108bhawanishankar@gmail.com</a></p>
          </div>
          <div className='Contact_div'>
        <CiLinkedin className='icon' />
                    <p className="Contact_para"><a href="https://www.linkedin.com/in/bhawani-shankar-b50a182a4"> https://www.linkedin.com/in/bhawani-shankar-b50a182a4</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact