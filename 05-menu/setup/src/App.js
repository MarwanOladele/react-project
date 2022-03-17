import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterFood = (category) => {

    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newMenuItems = items.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
        <Categories filterFood={filterFood}  categories={categories}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
