import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    // récupération des rendez-vous depuis une API backend
    fetch("http://localhost:8000/appointments")
      .then((response) => response.json())
      .then((data) => {
        setEvents(
          data.map((appointment) => ({
            title: appointment.patient,
            start: appointment.start_time,
            end: appointment.end_time,
            backgroundColor: "#378006",
          }))
        );
      });
  }, []);

  const handleDateSelect = (arg) => {
    setSelectedDate(arg.start);
    setShowForm(true);
  };

  const handleEventClick = (arg) => {
    alert(arg.event.title);
  };

  const handleEventRender = (info) => {
    info.el.style.backgroundColor = "#378006";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      title: patientName,
      start: selectedDate,
      end: selectedDate,
      backgroundColor: "#378006",
    };

    setEvents([...events, newEvent]);
    setShowForm(false);
    setPatientName("");
    setSelectedDate(null);
  };

  return (
    <div id="agenda">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable={true}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateSelect}
        eventClick={handleEventClick}
        eventRender={handleEventRender}
      />
      {showForm && (
        <div>
          <h2>Rendez-vous disponible le {selectedDate.toLocaleDateString()}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nom du patient:
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </label>
            <button type="submit">Prendre rendez-vous</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Agenda;
