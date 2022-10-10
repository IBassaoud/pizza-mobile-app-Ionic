import { IonLabel, IonRange } from '@ionic/react';
import './PizzaSize.css';

function PizzaSize(props:any) {
  // Get the function change size passed from the parent component
  const handleSizeChange = props.onChangeSize;

  return (
  <div className="container_pizza-size">
      <IonLabel className="range-label">Taille de la Pizza</IonLabel>
      <IonRange min={20} max={60} pin={true} onIonChange={({ detail }) => handleSizeChange(detail.value)}></IonRange>
    </div>
  );
}
export default PizzaSize;
