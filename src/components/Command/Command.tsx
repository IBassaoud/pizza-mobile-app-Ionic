import {
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";

import "./Command.css";

function Command(props:any) {
    let size = props.data.size;
    let sauce = props.data.sauce;
  return (
    <div className="command-container">
      <IonHeader className="header-command">Votre commande :</IonHeader>

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">Sauce</IonLabel>
        <IonInput disabled={true}>{sauce}</IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">
          Taille de la Pizza :
        </IonLabel>
        <IonInput disabled={true}> {size} cm</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">
          Ingrédients :
        </IonLabel>
        <IonInput disabled={true}>banane, pomme, frommage</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched ion-invalid">
        <IonLabel position="stacked">
          Total :
        </IonLabel>
        <IonInput disabled={true}> €</IonInput>
      </IonItem>

      <IonButton className="bouton_item" expand="full">
        Commander
      </IonButton>
    </div>
  );
}
export default Command;
