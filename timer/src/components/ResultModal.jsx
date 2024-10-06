import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({remainingTime, targetime, onReset}, ref){

    const userLost = remainingTime <= 0;
    const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetime * 1000)) * 100);
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return <dialog className="result-modal" ref={dialog} onClose={onReset}>
        {userLost && <h2>You Won!!!</h2>}
        {!userLost && <h2>Your Score {score}</h2>}
        <p>
            The target time was <strong>{targetime}</strong> seconds.
        </p>
        <p>You stopped the timer with {formatedRemainingTime} seconds left.</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
})
export default ResultModal;