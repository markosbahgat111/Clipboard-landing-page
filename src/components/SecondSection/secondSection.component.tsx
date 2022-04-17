import React from 'react'
import { FirstPara, FirstTitle, Image } from './styled.components';
import devicePic from 'assets/images/image-devices.png';
type Props = {}

const SecondSectionComponent = (props: Props) => {
  return (
    <div className='lg:mt-40 mt-20 w-full'>
        <div className='mb-20 m-auto text-center'>
            <FirstTitle>Access Clipboard anywhere</FirstTitle>
            <FirstPara className='lg:w-[40%] w-11/12'>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</FirstPara>
        </div>
          <Image src={devicePic} />
        <div className='mt-20 m-auto text-center'>
            <FirstTitle>SuperCharge Your Workflow</FirstTitle>
            <FirstPara className='lg:w-[40%] w-11/12'>We've got the tools to boost your productivity</FirstPara>
        </div>
    </div>
  )
}

export default SecondSectionComponent