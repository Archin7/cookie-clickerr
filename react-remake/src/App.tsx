import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cookies, setCookies] = useState(0);
  const [upgrade_click, setUpgradeClick] = useState(1);
  const [autoclick, setAutoclick] = useState(0);

  const click_price = Math.floor(10 * Math.pow(1.15, upgrade_click - 1));
  const autoclick_price = Math.floor(15 * Math.pow(1.18, autoclick));

  function handleUpgrade() {
    if (cookies >= click_price) {
      setCookies(cookies - click_price);
      setUpgradeClick(upgrade_click + 1);
    }
  }

  function handleAutoclick() {
    if (cookies >= autoclick_price) {
      setCookies(cookies - autoclick_price);
      setAutoclick(autoclick + 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(autoclick + cookies);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [cookies, autoclick]); // saves to localStorage whenever todos changes

  return (
    <>
      <div className="status">
        <p>Cookies: {cookies}</p>
        <p>Click Upgrade: {upgrade_click}</p>
        <p>Autoclick: {autoclick}</p>
      </div>
      <div className="upgrade-buttons">
        <button onClick={() => setCookies(cookies + upgrade_click)}>
          Click me
        </button>
        <br />
        <button onClick={handleUpgrade}>Upgrade Button: {click_price}</button>
        <br />
        <button onClick={handleAutoclick}>
          Upgrade Autoclick: {autoclick_price}
        </button>
      </div>
    </>
  );
}

export default App;
