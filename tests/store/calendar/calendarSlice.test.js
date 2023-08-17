import { calendarSlice, onAddNewEvent, onDeleteEvent, onLogoutCalendar, onSetActiveEvent, onUpdateEvent, onloadEvents } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";


describe('Tests in calendarSlice', () => {

  test('Must return the default state', () => {

    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onSetActiveEvent must active the event', () => {

    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
    expect(state.activeEvent).toEqual(events[0]);

  });

  test('onAddNewEvent must add the event', () => {

    const newEvent = {
      _id: 3,
      title: "Cumpleaños de Juan",
      notes: "Alguna nota",
      start: new Date('2022-10-21 13:00:00'),
      end: new Date('2022-10-21 15:00:00'),
    };

    const state= calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
    expect(state.events).toEqual([...events, newEvent])


  });

  test('onUpdateEvent must update the event', () => { 

    const updatedEvent = {
      _id: 1,
      title: "Cumpleaños de Juan actualizado",
      notes: "Alguna nota",
      start: new Date('2022-10-21 13:00:00'),
      end: new Date('2022-10-21 15:00:00'),
    };

    const state= calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
    expect(state.events).toContain(updatedEvent);

   });

   test('onDeleteEvent must delete the active event', () => { 

    const state= calendarSlice.reducer(calendarWithActiveEventState,onDeleteEvent());
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(events[0]);

    });

    test('onloadEvents must set the events', () => { 
      const state= calendarSlice.reducer(initialState,onloadEvents(events));
      expect(state.isLoadingEvents).toBeFalsy();
      expect(state.events).toEqual(events);
     });

     test('onLogoutCalendar must clean the state', () => { 
      const state= calendarSlice.reducer(calendarWithActiveEventState,onLogoutCalendar());
      expect(state).toEqual(initialState)
      });
})