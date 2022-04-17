import FirstSectionComponent from 'components/FirstSection/firstSection.component';
import FooterComponent from 'components/Footer/footer.component';
import FourthSectionComponent from 'components/FourthSection/fourthSection.components';
import HeaderComponent from 'components/Header/header.component';
import SecondSectionComponent from 'components/SecondSection/secondSection.component';
import ThirdSectionComponent from 'components/ThirdSection/thirdSection.component';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <FirstSectionComponent />
      <SecondSectionComponent />
      <ThirdSectionComponent />
      <FourthSectionComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;
