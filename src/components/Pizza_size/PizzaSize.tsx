import { IonLabel, IonRange } from '@ionic/react';
import './PizzaSize.css';

function PizzaSize(props:any) {
  // Get the function change size passed from the parent component
  const handleSizeChange = props.onChangeSize;

  return (
  <>
      <IonLabel className="range-label">Taille de la Pizza</IonLabel>
      <IonRange min={20} max={60} pin={true} onIonChange={({ detail }) => handleSizeChange(detail.value)}></IonRange>
    </>
  );
}
export default PizzaSize;
