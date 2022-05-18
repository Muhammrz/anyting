import { LogBox } from "react-native";
import {Navigation} from "react-native-navigation"
import AnimalComponent from "./src/component/com.animal";
import CampFireComponent from "./src/component/com.campfire";
import CarComponent from "./src/component/com.car";
import EngineComponent from "./src/component/com.engine";
import GameComponent from "./src/component/com.game";
import FarmComponent from "./src/component/com.farm";
import Instrumentcomponen from "./src/component/com.instrument";
import LullabyComponent from "./src/component/com.lullaby";
import Pianocomponent from "./src/component/com.piano";
import RainComponent from "./src/component/com.rain";
import SeaComponent from "./src/component/com.sea";
import ShowerComponent from "./src/component/com.shower";
import TrainComponent from "./src/component/com.train";
import HumanComponent from "./src/component/com.human";
import ForestComponent from "./src/component/com.forest";
import Home from "./src/home";

Navigation.registerComponent("com.home",()=> Home );
Navigation.registerComponent("com.animal", () => AnimalComponent);
Navigation.registerComponent("com.rain", () => RainComponent);
Navigation.registerComponent("com.sea", () => SeaComponent);
Navigation.registerComponent("com.piano",()=> Pianocomponent);
Navigation.registerComponent("com.instrument",()=> Instrumentcomponen);
Navigation.registerComponent("com.game", ()=> GameComponent);
Navigation.registerComponent("com.campfire", ()=> CampFireComponent);
Navigation.registerComponent("com.farm", ()=> FarmComponent);
Navigation.registerComponent("com.engine", ()=> EngineComponent);
Navigation.registerComponent("com.car", ()=> CarComponent);
Navigation.registerComponent("com.human", ()=> HumanComponent);
Navigation.registerComponent("com.train", ()=> TrainComponent);
Navigation.registerComponent("com.shower", ()=> ShowerComponent);
Navigation.registerComponent("com.lullaby", ()=> LullabyComponent)
Navigation.registerComponent("com.forest", ()=> ForestComponent)

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            stack:{
                children:[{
                    component:{
                        name:"com.home"
                    }
                }]
            }
        }
    })
})

Navigation.setDefaultOptions({
    layout:{
        backgroundColor:'#121212'
    },
    statusBar:{
        // backgroundColor:'#A97155',
        backgroundColor:'#000'
    },
    topBar:{
        background:{
            color:'#000'
        },
        backButton: {
            color:'#fff'
        },
        title:{
            text:'RELAXING',
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            alignment:'center'
        }
    }
})

LogBox.ignoreLogs(['deprecated-react-native-prop-types','Warning:...']);