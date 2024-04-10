function ListGroup() {
  let items = ["city1", "city2", "city3", "city4"];
  items = [];

  return (
    <>
      <h1> Dummy heading </h1>
      {items.length === 0 ? <p>No items found!!!</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
