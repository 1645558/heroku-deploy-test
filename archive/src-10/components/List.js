import React from 'react';

function ListItems(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <ul className="list-group">
        {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
        {props.items.map((item) => {
          return (
            // TODO: Your code here
            <li className='list-group-item' key={item.id}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  )
};

function List(props) {
  const purchased = [];
  const notPurchased = [];

  for (let item of props.groceries) {
    item.purchased ? purchased.push(item) : notPurchased.push(item);
  }

  return (
    <>
      <ListItems items={purchased} title='Purchased' />
      <ListItems items={notPurchased} title='Not Purchased' />

    </>
  );
}

export default List;
