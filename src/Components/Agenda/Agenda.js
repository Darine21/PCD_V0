import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Button from '@material-ui/core/Button';
import './Agenda.css';
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const openDB = indexedDB.open('calendar', 1);

    openDB.onupgradeneeded = () => {
      const db = openDB.result;
      const store = db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
    };

    openDB.onsuccess = () => {
      const db = openDB.result;
      const transaction = db.transaction('events', 'readwrite');
      const store = transaction.objectStore('events');
      const getEvents = store.getAll();

      getEvents.onsuccess = () => {
        setEvents(getEvents.result);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  }, []);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:');

    if (title) {
      const newEvent = { start, end, title };
      const openDB = indexedDB.open('calendar', 1);

      openDB.onsuccess = () => {
        const db = openDB.result;
        const transaction = db.transaction('events', 'readwrite');
        const store = transaction.objectStore('events');

        store.add(newEvent);

        const getEvents = store.getAll();

        getEvents.onsuccess = () => {
          setEvents(getEvents.result);
        };

        transaction.oncomplete = () => {
          db.close();
        };
      };
    }
  };
  const handleDeleteEvent = (eventId) => {
    const openDB = indexedDB.open('calendar', 1);
  
    openDB.onsuccess = () => {
      const db = openDB.result;
      const transaction = db.transaction('events', 'readwrite');
      const store = transaction.objectStore('events');
  
      const request = store.delete(eventId);
  
      request.onerror = (event) => {
        console.log("Error deleting event:", event.target.error);
      };
  
      request.onsuccess = () => {
        const getEvents = store.getAll();
  
        getEvents.onsuccess = () => {
          setEvents(getEvents.result);
        };
  
        transaction.oncomplete = () => {
          db.close();
        };
      };
    };
  
    openDB.onerror = (event) => {
      console.log("Error opening database:", event.target.error);
    };
  };
  
  
 
  
  

  
 
  const Event = ({ event, handleDeleteEvent }) => {
    return (
      <div>
        <div>{event.title}</div>
        <button  className='button'  onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
      </div>
    );
  };
  
  
  return (
    
    <div>
       

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        
        components={{ event: (props) => <Event {...props} handleDeleteEvent={handleDeleteEvent} /> }}
      />
    </div>
  );
};

export default MyCalendar;