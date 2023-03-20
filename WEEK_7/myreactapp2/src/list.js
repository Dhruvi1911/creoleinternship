export function List() {
  const subject = ["os", "DBMS", "CN", "COA", "engineering maths", "TOC"];
  return (
    <div>
      {subject.map((name, key) => {
        return <h3 key={key}>{name}</h3>;
      })}
    </div>
  );
}
