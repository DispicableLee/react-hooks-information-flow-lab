import React from "react";

export default function Header({onOff, lightDark}) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={lightDark}>
        {onOff ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
