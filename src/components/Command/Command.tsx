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
    let total = props.data.total;
    
  return (
    <div className="command-container">
      <IonHeader className="header-command">Votre Commande :</IonHeader>

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel className="command_label" position="stacked">Sauce</IonLabel>
        <IonInput disabled>{sauce}</IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel className="command_label" position="stacked">
          Taille de la Pizza :
        </IonLabel>
        <IonInput disabled> {size} cm</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel className="command_label" position="stacked">
          Viandes :
        </IonLabel>
        <IonInput disabled>{meatsCommand.map((meat:string) => {return `${meat} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel className="command_label" position="stacked">
          Légumes :
        </IonLabel>
        <IonInput disabled>{vegetablesCommand.map((vegetable:string) => {return `${vegetable} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel className="command_label" position="stacked">
          Fromages :
        </IonLabel>
        <IonInput disabled>{cheesesCommand.map((cheese:string) => {return `${cheese} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel className="command_label" position="stacked">
          Boissons :
        </IonLabel>
        <IonInput disabled>{drinksCommand.map((drink:string) => {return `${drink} `})}</IonInput>
      </IonItem>    

      <IonItem lines="full" class="item-has-focus ion-invalid">
        <IonLabel className="command_label" position="stacked">
          Total :
        </IonLabel>
        <IonInput disabled>{total} €</IonInput>
      </IonItem>

      <IonButton className="bouton_item" expand="full">
        Commander
      </IonButton>
    </div>
  );
}
export default Command;
