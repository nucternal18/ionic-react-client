import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControlsContainer: React.FC<{
  selectedValue: 'mkg' | 'ftlbs';
  onSelectValue: (value: 'mkg' | 'ftlbs') => void;
}> = ({ selectedValue, onSelectValue }) => {
    const inputChangeHandler = (event: CustomEvent) => {
        onSelectValue(event.detail.value);
    }
  return (
    <IonSegment value={selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value='mkg'>
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value='ftlbs'>
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControlsContainer;
