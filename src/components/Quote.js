import React, { useState, useEffect } from 'react';
import './Quote.css';

function Quote() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');

    const items = await data.json();
    setItems(items);

    return items;
  };

  const quoteText = items.en;
  const quoteAuthor = items.author;

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="quote-container">
      <h3 className="quote-text">{ quoteText }</h3>
      <h4 className="quote-author">{ quoteAuthor }</h4>
    </div>
  );
}

export default Quote;
