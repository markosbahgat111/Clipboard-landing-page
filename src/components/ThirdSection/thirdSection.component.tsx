import React from 'react'
import { BrandIcon, IconHeader, IconPara, SympoleIcon } from './styled.components';
import googleIcon from 'assets/images/logo-google.png';
import ibmIcon from 'assets/images/logo-ibm.png';
import microsoftIcon from 'assets/images/logo-microsoft.png';
import vectorIcon from 'assets/images/logo-vector-graphics.png';
import hpIcon from 'assets/images/logo-hp.png';
import blacklist from 'assets/images/icon-blacklist.svg';
import snippets from 'assets/images/icon-text.svg';
import preview from 'assets/images/icon-preview.svg';

interface Props {}

const ThirdSectionComponent = (props: Props) => {
  return (
    <div>
        <div className='w-5/6 flex flex-row justify-around items-center m-auto text-center mt-40 flex-wrap lg:gap-0 gap-20'>
            <div className='w-[400px] flex flex-col justify-evenly items-center gap-5'>
                <SympoleIcon src={blacklist} />
                <IconHeader>Create Blacklists</IconHeader>
                <IconPara>Ensure senestive inforamtion never makes its way to your clipboard by excluding certain sources.</IconPara>
            </div>
            <div className='w-[400px] flex flex-col justify-evenly items-center gap-5'>
                <SympoleIcon src={snippets} />
                <IconHeader>Plain text snippets</IconHeader>
                <IconPara>Remove unwanted formatting from copied text for a consistent look.</IconPara>
            </div>
            <div className='w-[400px] flex flex-col justify-evenly items-center gap-5'>
                <SympoleIcon src={preview} />
                <IconHeader>Sneak preview</IconHeader>
                <IconPara>Quick preview of all snippets on your clipboard for easy access.</IconPara>
            </div>
        </div>
        <div className='w-5/6 flex md:flex-row flex-col justify-between items-center m-auto mt-40 flex-wrap lg:gap-0 gap-20'>
            <BrandIcon src={googleIcon}  className="md:w-[12%] w-7/12"/>
            <BrandIcon src={ibmIcon} className="md:w-[12%] w-7/12"/>
            <BrandIcon src={microsoftIcon}  className="md:w-[12%] w-7/12"/>
            <BrandIcon src={hpIcon} className="md:w-[12%] w-7/12"/>
            <BrandIcon src={vectorIcon} className="md:w-[12%] w-7/12"/>
        </div>
    </div>
  )
}

export default ThirdSectionComponent;