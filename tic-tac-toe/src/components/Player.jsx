import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [isEdit, setIsEdit] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleIsEdit(){
        setIsEdit(!isEdit ? true : false);
    }
    function handleNameChange(event){
        setPlayerName(event.target.value);
        if(isEdit){
            onChangeName(symbol, playerName);
        }
    }
    let editedAblePlayerName = <span className='player-name'>{playerName}</span>;

    if(isEdit){
        editedAblePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />;
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            {editedAblePlayerName}
            <span className='player-symbol'>{symbol}</span>
            <button onClick={handleIsEdit}>{isEdit ? 'Save' : 'Edit'}</button>
        </li>
    )
}