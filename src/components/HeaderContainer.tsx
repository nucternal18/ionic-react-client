import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import React from 'react';

interface ContainerProps {}

const HeaderContainer: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar color='dark'>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderContainer;
