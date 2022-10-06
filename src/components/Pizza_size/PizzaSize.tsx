import React, { useContext, useState } from 'react';
import { IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
import './PizzaSize.css';
import { ContentContext } from '../../contexts/Content';

function PizzaSize() {
  const context = useContext(ContentContext);  
  const changeSize = context.changeSize;

  return (
  <>
      <IonLabel className="range-label">Taille de la Pizza</IonLabel>
      <IonRange min={20} max={60} pin={true}  onIonChange={({ detail }) => changeSize(detail.value)}></IonRange>
    </>
  );
}
export default PizzaSize;
