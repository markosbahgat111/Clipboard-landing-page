import React from 'react'
import { TopPara, TopTitle, ScreenImage } from './styledComponents'
import screenPic from 'assets/images/image-computer.png';
type Props = {}

const FirstSectionComponent = (props: Props) => {
  return (
      <div className='w-full mt-[100px]'>
          <div className='lg:w-1/2 w-10/12 m-auto text-center mb-40'>
                <TopTitle>Keep track of your snippets</TopTitle>
                <TopPara>Clipboard instantly, stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and Ios apps will help you organize everything</TopPara>
          </div>
          <div className='flex lg:flex-row flex-col items-center my-20'>
              <ScreenImage src={screenPic} className="lg:left-[-5%] left-0 lg:w-[60%] w-11/12 mb-10 lg:mb-0"/>
              <div className='flex flex-col justify-center lg:items-start items-center text-center lg:text-left w-10/12 lg:w-auto'>
                <div className='lg:w-[450px] mb-20'>
                    <TopTitle>Quick Search</TopTitle>
                    <TopPara>Easily search your snippets by content, category, web address, application, and more.</TopPara>
                </div>
                <div className='lg:w-[450px] mb-20'>
                    <TopTitle>iCloud Sync</TopTitle>
                    <TopPara>Instantly saves and syncs snippets across all your devices.</TopPara>
                </div>
                <div className='lg:w-[450px] lg:mb-40'>
                    <TopTitle>Complete History</TopTitle>
                    <TopPara>Retrieve any snippets from the first moment you started using the app.</TopPara>
                </div>
              </div>
          </div>
    </div>
  )
}

export default FirstSectionComponent