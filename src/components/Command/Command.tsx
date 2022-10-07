import {
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";

import "./Command.css";

function Command(props:any) {
  // Retrieves all data passed from the parent component to display interactively as changes are made in the command
    let size = props.data.size;
    let sauce = props.data.sauce;
    let meatsCommand = props.data.meats;
    let vegetablesCommand = props.data.vegetables;
    let cheesesCommand = props.data.cheeses;
    let drinksCommand = props.data.drinks;
    
  return (
    <div className="command-container">
      <IonHeader className="header-command">Votre Commande :</IonHeader>

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">Sauce</IonLabel>
        <IonInput readonly>{sauce}</IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">
          Taille de la Pizza :
        </IonLabel>
        <IonInput readonly> {size} cm</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus">
        <IonLabel position="stacked">
          Viandes :
        </IonLabel>
        <IonInput readonly>{meatsCommand.map((meat:string) => {return `${meat} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus">
        <IonLabel position="stacked">
          Légumes :
        </IonLabel>
        <IonInput readonly>{vegetablesCommand.map((vegetable:string) => {return `${vegetable} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus">
        <IonLabel position="stacked">
          Fromages :
        </IonLabel>
        <IonInput readonly>{cheesesCommand.map((cheese:string) => {return `${cheese} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus">
        <IonLabel position="stacked">
          Boissons :
        </IonLabel>
        <IonInput readonly>{drinksCommand.map((drink:string) => {return `${drink} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-invalid">
        <IonLabel position="stacked">
          Total :
        </IonLabel>
        <IonInput readonly> €</IonInput>
      </IonItem>

      <IonButton className="bouton_item" expand="full">
        Commander
      </IonButton>
    </div>
  );
}
export default Command;
