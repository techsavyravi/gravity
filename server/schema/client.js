Schemas.Client = new SimpleSchema({
    name: {
        type: String,
        label: "Client's Name",
    },
    email: {
        type: SimpleSchema.RegEx.Email,
        label: "Email address",
    },
    password: {
        type: String,
        label: "Password",
        min: 6
    },
    mobile: {
        type: String,
        label: "Mobile"
    },
    timestamp: {
        type: Date,
        label: "timestamp"
    }
});

Clients.attachSchema(Schemas.Client);