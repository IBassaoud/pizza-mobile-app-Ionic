import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import "./PizzaType.css";
import { ContentContext } from "../../contexts/Content";

function PizzaType() {
  const context = React.useContext(ContentContext);

  return (
    <IonSegment value="default">
      <IonSegmentButton className="button_pizza-type" value="tomate">
        <IonLabel className="-label-type">Base Tomate</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton className="button_pizza-type" value="blanche">
        <IonLabel className="label-type">Base Blanche</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
}
export default PizzaType;
