import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { ContentContext } from "../contexts/Content";

// Import icons
import { Icon } from "@iconify/react";
import PizzaType from "../components/Pizza_type/PizzaType";
import PizzaSize from "../components/Pizza_size/PizzaSize";
import PizzaIngredient from "../components/Pizza_ingredient/PizzaIngredient";
import Command from "../components/Command/Command";

const Home: React.FC = () => {
  const title = "Pizza";

  const [data, setData] = useState<any>({
    name: "",
    size: 20,
    description: "Ma description",
    content: "Mon content de fou furieux",
  });

  const changeName = (name: string) => {
    let newData = data;
    
    handleName(newData);
  };

  const changeSize = (size: string) => {
    let newData = data;
    newData.size = size;
    handleSize(newData);
  };

  const handleSize = (changedData: any) => {
    setData(changedData);
    console.log(data);
    
  };

  const handleName = (changedData: any) => {
    setData(changedData);
    console.log(data);
    
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle className="title">
            {title} <Icon icon="emojione:pizza" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <ContentContext.Provider value={{ data, changeName, changeSize }}>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                {title} <Icon icon="emojione:pizza" />
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          <PizzaType />

          <PizzaSize />

          <PizzaIngredient />

          <Command />

          {/* <ButtonCommand /> */}
        </IonContent>
      </ContentContext.Provider>
    </IonPage>
  );
};

export default Home;
