import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleBtnClick() {
    // Use a function when setting a value based upon
    // the previous state value. (Best Practices)
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerInfo = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerInfo = <input type="text" name="name" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerInfo}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleBtnClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
