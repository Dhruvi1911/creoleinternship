export function Event() {
  const click = (a, b) => {
    alert(a);
    //     'b' represents the React event that triggered the function.
    // In this case, the 'click' event
    alert(b.type);
  };
  const mouseover = (e) => {
    e.target.style.background = "red";
  };
  return (
    <>
      <button onClick={(event) => click("you clicked button", event)}>
        click me
      </button>
      <br></br>
      <br></br>
      <button onMouseOver={mouseover}>hover over me</button>
    </>
  );
}
