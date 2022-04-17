import React from 'react'
import { ButtonGreen, ButtonBlue, Paragraph, Logo, Title } from './styled.components';
import './style.scss';
import logo from 'assets/images/logo.svg';
type Props = {}

const HeaderComponent:React.FC<Props> = () => {
    
  return (
    <div className='main_container w-screen h-[100vh] flex flex-col justify-center items-center'>
      <div className='w-full flex flex-col justify-center items-center relative  top-[5vh] lg:top-0'>
          <Logo src={logo} className="mb-10"/>
          <Title className='text-center md:text-6xl text-4xl px-5'>A history of everything you copy</Title>
          <Paragraph className='lg:w-[45%] w-11/12 para'> Clipboard allows you to track and organize everything you copy. instantly access your clipboard on all your devices</Paragraph>
          <div className='flex md:flex-row flex-col lg:gap-10 gap-5 mt-10 md:w-auto w-10/12'>
            <ButtonGreen>Download For IOS</ButtonGreen>
            <ButtonBlue>Download For MAC</ButtonBlue>
          </div>
      </div>
    </div>
  )
}

export default HeaderComponent;