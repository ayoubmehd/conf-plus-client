import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calender: React.FC = () => {
  // const onEventClick = () => {};
  // const onNewEventClick = () => {};
  // const onSelectView = () => {};
  // const selectedView = () => {};
  // const onPageChange = () => {};

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable
      selectable
      events={[
        { title: "event 1", date: "2022-06-25 09:00" },
        { title: "event 2", date: "2022-06-24" },
      ]}
    />
  );
};
export default Calender;
