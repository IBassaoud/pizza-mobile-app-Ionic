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
    let viandesCommande = props.data.viandes;
    let legumesCommande = props.data.legumes;
    let fromagesCommande = props.data.fromages;
    let boissonsCommande = props.data.boissons;
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
          Viandes :
        </IonLabel>
        <IonInput disabled={true}>{viandesCommande.map((viande:string) => {return `${viande} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">
          Légumes :
        </IonLabel>
        <IonInput disabled={true}>{legumesCommande.map((legume:string) => {return `${legume} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">
          Fromages :
        </IonLabel>
        <IonInput disabled={true}>{fromagesCommande.map((fromage:string) => {return `${fromage} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">
          Boissons :
        </IonLabel>
        <IonInput disabled={true}>{boissonsCommande.map((boisson:string) => {return `${boisson} `})}</IonInput>
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
