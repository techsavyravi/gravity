Schemas.TicketActivity = new SimpleSchema({
    ticketid: {
        type: String,
        label: "Ticket ID - related",
    },
    event: {
        type: String,
        label: "Event - OPEN, CLOSE, HOLD etc",
    },
    userid: {
        type: String,
        label: "User ID creating this event"
    },
    usertype: {
        type: String,
        label: "User type - STAFF / CLIENT",
    },
    comment: {
        type: String,
        label: "Comment",
    },
    assignto: {
        type: String,
        label: "Assign to Staff(id)",
        optional:true
    },
    isInternal: {
        type: Boolean,
        label: "Internal Comments won't be shown",
    },
    timestamp: {
        type: Date,
        label: "timestamp"
    }
});

TicketActivities.attachSchema(Schemas.TicketActivity);