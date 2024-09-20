export default function Log({turns}){
    return (
        <ol id="log">
            {turns.map((turn)=> (
                <li key={`${turn.square.row}${turn.square.row}`}>
                    {turn.player} selects {turn.square.row}, {turn.square.col}
                </li>
            ))}
            <li>Test</li>
        </ol>
    )
}