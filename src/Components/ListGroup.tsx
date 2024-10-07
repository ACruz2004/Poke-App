function ListGroup() {
  const items = [
    "151",
    "Stellar Crown",
    "Temporal Forces",
    "Paldean Fates",
    "Paradox Rift",
  ];

  if (items.length === 0)
    return (
      <div>
        <h1>List</h1>
        <p>No item found</p>
      </div>
    );

  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
