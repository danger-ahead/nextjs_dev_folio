export default function BouncingText(data: String, cssClass: String) {
  const element = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === " ") {
      element.push(<span key={`${data}${i}`}>&emsp;</span>);
    } else {
      element.push(
        <span key={`${data}${i}`} className={`elastic ${cssClass}`}>
          {data[i]}
        </span>
      );
    }
  }

  return (
    <div className="d-flex flex-row margin-left margin-right">{element}</div>
  );
}
