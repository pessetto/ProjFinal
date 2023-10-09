import Header from "../../../Componentes/HeaderCalendario/Header";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../helper/events";

export default class calendar extends React.Component {
    state = {
        weekendsVisible: true,
        currentEvents: []
    };

    render() {
        return (
            <>
            <Header/>
          <div className="demo-app">
            <div className="demo-app-main">
              <FullCalendar
                locale={["pt-br"]}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={this.state.weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={this.handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={this.handleEventClick}
                eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
                buttonText= {{
                    today: "Hoje",
                    month: "Mês",
                    week: "Semana",
                    day: "Dia"
                }}
              />
            </div>
          </div>
          </>
        );
    }


    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        });
    };

    handleDateSelect = (selectInfo) => {
        let title = prompt("Digite o título do evento");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
        calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
        });
        }
    };

    handleEventClick = (clickInfo) => {
        if (
        alert(
            `Deseja remover este evento '${clickInfo.event.title}'`
        )
        ) {
            clickInfo.event.remove();
        }
    };

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        });
    };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}