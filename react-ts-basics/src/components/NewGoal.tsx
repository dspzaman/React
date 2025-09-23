import { useRef, type FormEvent } from "react"
type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}
export default function NewGoal({ onAddGoal }: NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event?.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummaey = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummaey);
    }
    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="id">Your Goal</label>
                <input type="text" id="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" ref={summary} />
            </p>
            <button>Add Goal</button>
        </form>
    )
}