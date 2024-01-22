import "./App.css";
import store from "./Redux/Redux";

import BottomSection from "./components/Sections/BottomSections";

import TopSection from "./components/Sections/TopSection";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App w-full h-screen flex flex-col bg-white items-center justify-center py-5">
      <Provider store={store}>
        <TopSection />
        <BottomSection />
      </Provider>
    </div>
  );
}

export default App;
