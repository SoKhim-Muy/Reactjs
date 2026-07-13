export const DestructureProps = ({
  id,
  title,
  year,
  description,
  rate,
  ...props
}) => {
  return (
    <div id={props.myId}>
      <h2 className={props.myStyle}> Title: {title}</h2>
      <h3>Release: {year}</h3>
      <h3>Rate: {rate}</h3>
      <div>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};