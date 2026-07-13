export default function GoalItem({title, children}){
    return(
        <li>
            <h2>{title}</h2>
            <p>{children}</p>
        </li>
    );
}