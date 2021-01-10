import React, { useState } from 'react';
import firebase from '../lib/fireBase';

const AddCar = () => {
  const [namn, setnamn] = useState('');
  const [beskrivning, setbeskrivning] = useState('');
  const [notification, setNotification] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.firestore().collection('blog').add({
      namn: namn,
      beskrivning: beskrivning,
    });
    setnamn('');
    setbeskrivning('');
    setNotification('Blogpost created');
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };
  return (
    <div>
      <h2>Add Blog</h2>
      {notification}
      <form onSubmit={handleSubmit}>
        <div>
          namn
          <br />
          <input
            type="text"
            value={namn}
            onChange={({ target }) => setnamn(target.value)}
          />
        </div>
        <div>
          beskrivning
          <br />
          <textarea
            value={beskrivning}
            onChange={({ target }) => setbeskrivning(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default AddCar;
