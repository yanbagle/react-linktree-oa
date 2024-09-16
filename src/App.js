import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Profile></Profile>
      </ThemeProvider>
    </div>
  );
}

export default App;
