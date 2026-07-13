import GoalItem from "./GoalItem";
export default function GoalList(){
  return (
    <div className="goals-container">
        <ul className="goals-list">
          <li className="goal-item">
            <strong>Teach React in a highly-understandable way</strong>
            <br />I want to ensure that you get the most out of this book and
            you learn all about React!
          </li>
          <hr className="goal-divider" />
          <li className="goal-item">
            <strong>Allow you to practice what you learned</strong>
            <br />
            Reading and learning is fun and helpful but you must master a topic,
            if you really work with it! That’s why I want to prepare many
            exercises that allow you to practice what you learned.
          </li>
          <hr className="goal-divider" />
          <li className="goal-item">
            <strong>Motivate you to continue learning</strong>
            <br/>
            As a developer, learning never ends. I want to ensure that you enjoy
            learning and you’re motivated to dive into advanced (React)
            resources after finishing this book. Maybe my complete React video
            course?
          </li>
        </ul>
    </div>
  );
}