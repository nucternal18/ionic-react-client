import {
  IonPage,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import FooterContainer from '../components/FooterContainer';
import HeaderContainer from '../components/HeaderContainer';
import ContentContainer from '../components/ContentContainer';


const Home: React.FC = () => {
  return (
    <IonPage>
      <HeaderContainer />
      <ContentContainer />
      <FooterContainer />
    </IonPage>
  );
};

export default Home;
