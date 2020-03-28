import {
    IonFooter,
    IonToolbar,
    IonTitle
} from '@ionic/react';
import React from 'react';

interface ContainerProps {}

const FooterContainer: React.FC<ContainerProps> = () => {
  return (
    <IonFooter>
      <IonToolbar color='dark'>
        <IonTitle class='ion-text-center ion-margin'>
          &copy;aolausoro.tech
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default FooterContainer;
