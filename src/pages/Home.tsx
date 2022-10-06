import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';

// Import icons 
import { Icon } from '@iconify/react';
import PizzaType from '../components/Pizza_type/PizzaType';
import PizzaSize from '../components/Pizza_size/PizzaSize';
import PizzaIngredient from '../components/Pizza_ingredient/PizzaIngredient';

const Home: React.FC = () => {
  const title = "Pizza"
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">{title} <Icon icon="emojione:pizza" /></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title} <Icon icon="emojione:pizza" /></IonTitle>
          </IonToolbar>
        </IonHeader>

        <PizzaType/>
        <PizzaSize/>
        <PizzaIngredient/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
