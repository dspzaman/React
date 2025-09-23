import { FC, type ReactNode } from "react";
 

interface CourseGoalProps {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

// type CourseGoalProps = PropsWithChildren<{title: string}>;

// export default function CourseGoal({ title, children}: CourseGoalProps){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }
const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete}) => {
    return(
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={ () => onDelete(id)}>Delete</button>
        </article>
    )
}
export default CourseGoal;