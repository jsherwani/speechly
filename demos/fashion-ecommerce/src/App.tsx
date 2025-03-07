import { BigTranscript, BigTranscriptContainer, PushToTalkButton, IntroPopup } from "@speechly/react-ui";
import { DemoNavigation } from "@speechly/demo-navigation";
import Inventory from "components/Inventory";
import SmartFilter from "components/SmartFilters";
import Navigation from "components/Navigation";
import { AppContextProvider } from "AppContext";
import "components/BigTransscript.css";
import "App.css";

export default function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <DemoNavigation />
        <Navigation />
        <SmartFilter />
        <Inventory>
          <BigTranscriptContainer position="absolute">
            <BigTranscript formatText={false}/>
          </BigTranscriptContainer>
        </Inventory>
      </div>
      <PushToTalkButton captureKey=" " placement="bottom" size="80px" showTime={3000} powerOn="auto" />
      <IntroPopup></IntroPopup>
    </AppContextProvider>
  );
}
