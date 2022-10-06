import React from 'react';
import { IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
import './PizzaSize.css';

function PizzaSize(props:any) {
  const onChangeSize = props.onChangeSize;
  // onIonChange={({ detail }) => changeSize(detail.value)}
  const handleSizeChange = (size:RangeValue) => {
    onChangeSize(size);
  }

  return (
  <>
      <IonLabel className="range-label">Taille de la Pizza</IonLabel>
      <IonRange min={20} max={60} pin={true} onIonChange={({ detail }) => handleSizeChange(detail.value)}></IonRange>
    </>
  );
}
export default PizzaSize;
