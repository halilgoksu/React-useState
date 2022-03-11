import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  
  return (
    <main>
      <section className="container">
        <h3> You have {people.length} friend on list</h3>
        <List people={people}></List>
        <button onClick={() => setPeople([])}>Delete all List</button>
      </section>
    </main>
  );
}

export default App;
