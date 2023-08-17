

export const events = [
    {
        _id: 1,
        title: "Cumpleaños de Jorge",
        notes: "Alguna nota",
        start: new Date('2022-10-21 13:00:00'),
        end: new Date('2022-10-21 15:00:00'),
    },
    {
        _id: 2,
        title: "Cumpleaños de Genaro",
        notes: "Alguna nota",
        start: new Date('2022-11-09 13:00:00'),
        end: new Date('2022-11-09 15:00:00'),
    }
];

export const initialState={
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
};


export const calendarWithEventsState={
    isLoadingEvents: true,
    events: [...events],
    activeEvent: null,
};


export const calendarWithActiveEventState={
    isLoadingEvents: true,
    events: [...events],
    activeEvent: {...events[0]},
};