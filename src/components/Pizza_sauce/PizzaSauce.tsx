import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import "./PizzaSauce.css";

function PizzaSauce(props: any) {
  // Get the function change sauce passed from the parent component
  const handleSauceChange = props.onChangeSauce;

  return (
    <IonSegment>
      <IonSegmentButton
        title="Sauce Tomate"
        onClick={({target}) => {handleSauceChange(target)}}
      >
        <IonLabel className="label-type">Base Tomate</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton
        title="Sauce Blanche"

        onClick={({target}) => {handleSauceChange(target)}}
      >
        <IonLabel className="label-type">Base Blanche</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
}
export default PizzaSauce;
