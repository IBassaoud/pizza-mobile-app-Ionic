import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import './PizzaType.css'


function PizzaType() {
  return (
      <IonSegment value="default">
        <IonSegmentButton className="button" value="tomate">
          <IonLabel className="label">Tomate</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton className="button" value="blanche">
          <IonLabel className="label">Blanche</IonLabel>
        </IonSegmentButton>
      </IonSegment>

  );
}
export default PizzaType;