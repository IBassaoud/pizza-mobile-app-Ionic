import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import "./PizzaType.css";

function PizzaType(props:any) {
const changeSauce = props.onChangeType;
  const handleTypeChange = (sauce:any) => {
    console.log(sauce.title);
    let newSauce = sauce.title;
    changeSauce(newSauce);
    
  } 
  return (
    <IonSegment value="default">
      <IonSegmentButton className="button_pizza-type" title="Sauce Tomate" onClick={(detail) => handleTypeChange(detail.target)}>
        <IonLabel className="-label-type">Base Tomate</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton className="button_pizza-type" title="Sauce Blanche" onClick={(detail) => handleTypeChange(detail.target)}>
        <IonLabel className="label-type">Base Blanche</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
}
export default PizzaType;
