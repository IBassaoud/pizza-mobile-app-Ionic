import React, { useState } from 'react';
import { IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
import './PizzaSize.css';

function PizzaSize() {
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>(20);
  return (
  <>
      <IonRange min={20} max={60} onIonChange={({ detail }) => setLastEmittedValue(detail.value)}></IonRange>
      <IonLabel className="range-label">Taille de la Pizza : {lastEmittedValue as number} cm</IonLabel>
    </>
  );
}
export default PizzaSize;
