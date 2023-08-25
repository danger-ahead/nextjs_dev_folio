export default function ElasticText(
  data: string,
  cssClass: string,
  key?: string
) {
  const element = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === " ") {
      element.push(<span key={`${data}${i}space`}>&emsp;</span>);
    } else {
      element.push(
        <span key={`${i}${data}`} className={`elastic ${cssClass}`}>
          {data[i]}
        </span>
      );
    }
  }

  return (
    <span key={key} className="d-flex flex-row">
      {element}
    </span>
  );
}
