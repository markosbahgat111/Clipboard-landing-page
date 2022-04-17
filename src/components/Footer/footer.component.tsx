import React from 'react'
import { Logo, HLink, SocialMediaIcon } from './styled.components';
import logo from 'assets/images/logo.svg';
import facebook from 'assets/images/icon-facebook.svg';
import twitter from 'assets/images/icon-twitter.svg';
import instagram from 'assets/images/icon-instagram.svg';
import './style.scss';

interface Props {}

const FooterComponent:React.FC<Props> = (props: Props) => {
  return (
    <div className="footer flex md:flex-row flex-col w-full md:h-[20vh] h-fit justify-evenly items-center md:gap-0 gap-16 py-10">
        <Logo src={logo} />
        <div className='flex md:flex-row flex-col gap-10 md:text-left text-center'>
            <div className='flex-col flex gap-5'>
                <HLink href='http://markosbahgat.com'>FAQs</HLink>
                <HLink href='http://markosbahgat.com'>Contact Us</HLink>
            </div>
            <div className='flex-col flex gap-5'>
                <HLink href='http://markosbahgat.com'>Privacy Policy</HLink>
                <HLink href='http://markosbahgat.com'>Press Kit</HLink>
            </div>
            <div className='flex-col flex gap-5'>
                <HLink href='http://markosbahgat.com'>Install Guide</HLink>
            </div>
        </div>
        <div className='flex flex-row gap-5'>
              <SocialMediaIcon src={facebook}/>
              <SocialMediaIcon src={twitter}/>
              <SocialMediaIcon src={instagram}/>
        </div>  
    </div>
  )
}

export default FooterComponent