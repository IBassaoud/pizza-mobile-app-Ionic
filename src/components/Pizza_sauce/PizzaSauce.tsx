import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import "./PizzaSauce.css";

function PizzaSauce(props: any) {
  // Get the function change sauce passed from the parent component
  const handleSauceChange = props.onChangeSauce;

  return (
    <IonSegment value="default">
      <IonSegmentButton
        title="Sauce Tomate"
        value="Hello"
        onClick={(detail) => handleSauceChange(detail.target)}
      >
        <IonLabel className="-label-type">Base Tomate</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton
        title="Sauce Blanche"
        onClick={(detail) => handleSauceChange(detail.target)}
      >
        <IonLabel className="label-type">Base Blanche</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
}
export default PizzaSauce;
