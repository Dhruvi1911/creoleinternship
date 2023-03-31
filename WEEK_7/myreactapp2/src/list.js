import { Display } from "./display";
export function List() {
  //simple list
  const subject = ["os", "DBMS", "CN", "COA", "engineering maths", "TOC"];
  //list containing object
  const cars = [
    { id: 1, brand: "audi" },
    { id: 2, brand: "bmw" },
    { id: 3, brand: "tesla" },
  ];
  return (
    <div>
      <>
        <h5>simple list </h5>
        {subject.map((name, key) => {
          return (
            <h6 key={key}>
              {" "}
              {key} {name}
            </h6>
          );
        })}
        <h5>list containing the object</h5>

        {cars.map((car) => (
          <Display key={car.id} id={car.id} brand={car.brand} />
        ))}
      </>
    </div>
  );
}
