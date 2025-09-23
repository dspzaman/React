import CourseGoal from "./CourseGoal";
import { type CourseGoal as cGoals } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type CourseGoalsListProp = {
    goals: cGoals[];
    onDeleteGoal: (id: number) => void;
}
export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalsListProp) {
    if(goals.length === 0){
        return(
            <InfoBox mode="hint">
                You have no course goals yet. Start adding some!
            </InfoBox>
        )
    }

    let warningBox: ReactNode = null;
    if(goals.length >= 4){
        warningBox = <InfoBox mode="warning" severity="medium">
            You are collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
    }
    return (
        <>
        {warningBox}
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            )
            )}
        </ul>
        </>
    )
}
