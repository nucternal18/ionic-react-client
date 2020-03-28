import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonAlert,
} from '@ionic/react';
import React, { useRef, useState } from 'react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import InputControlsContainer from './InputControlsContainer';

const ContentContainer: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>(0);
    const [error, setError] = useState<string>();
    const [units, setUnits] = useState<'mkg' | 'ftlbs'>('mkg');
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBmi = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError('Please enter a valid non-negative number.');
      return;
    }
      const weightConversionFactor = units === 'ftlbs' ? 2.2 : 1;
      const heightConversionFactor = units === 'ftlbs' ? 3.28 : 1;

      const weight = +enteredWeight / weightConversionFactor;
      const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);

    setCalculatedBmi(bmi);
  };

  const resetInput = () => {
    heightInputRef.current!.value = '';
    weightInputRef.current!.value = '';

    setCalculatedBmi(0);
  };

  const clearError = () => {
    setError('');
  };
    
    const selectUnitHandler = (selectedValue: 'mkg' | 'ftlbs') => {
        setUnits(selectedValue)
    }
  return (
    <IonContent className='ion-padding'>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: 'Okay', handler: clearError }]}
      />
      <IonGrid>
        <IonRow>
          <IonCol>
            <InputControlsContainer
              selectedValue={units}
              onSelectValue={selectUnitHandler}
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='12'>
            <IonItem>
              <IonLabel position='floating'>
                Your Height ({units === 'mkg' ? 'meters' : 'feet'})
              </IonLabel>
              <IonInput ref={heightInputRef} />
            </IonItem>
          </IonCol>
          <IonCol size='12'>
            <IonItem>
              <IonLabel position='floating'>
                Your Weight ({units === 'mkg' ? 'kg' : 'lbs'})
              </IonLabel>
              <IonInput ref={weightInputRef} />
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid className='ion-text-center ion-margin'>
        <IonRow>
          <IonCol size='12'>
            <IonButton color='dark' onClick={calculateBmi}>
              <IonIcon slot='start' icon={calculatorOutline} />
              Calculate
            </IonButton>
          </IonCol>
          <IonCol size='12'>
            <IonButton color='dark' onClick={resetInput}>
              <IonIcon slot='start' icon={refreshOutline} />
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
        {calculatedBmi !== 0 ? (
          <IonRow>
            <IonCol size='12'>
              <IonCard>
                <IonCardContent className='ion-text-center'>
                  <h2>Your Body-Mass-Index</h2>
                  <h3>{calculatedBmi.toFixed(2)}</h3>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        ) : null}
      </IonGrid>
    </IonContent>
  );
};

export default ContentContainer;
