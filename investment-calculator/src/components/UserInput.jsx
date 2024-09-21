
export default function UserInput({usersInput, onChangeInput}){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    value={usersInput.initialInvestment}
                    onChange={(event) => onChangeInput('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Anual Investment</label>
                    <input type="number" required 
                    value={usersInput.annualInvestment}
                    onChange={(event) => onChangeInput('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required 
                    value={usersInput.expectedReturn}
                    onChange={(event) => onChangeInput('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required 
                    value={usersInput.duration}
                    onChange={(event) => onChangeInput('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}