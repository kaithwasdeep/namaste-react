import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";


function App() {
  return (
    <Provider store={appStore}>
      <div className="m-0">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
