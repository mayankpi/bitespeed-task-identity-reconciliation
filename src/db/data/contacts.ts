const today = new Date();
export const contacts = [
    {
        id: 1,
        phoneNumber: "123456",
        email: "lorraine@hillvalley.edu",
        linkPrecedence: "primary",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 11,
        phoneNumber: "919191",
        email: "george@hillvalley.edu",
        linkPrecedence: "primary",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 27,
        phoneNumber: "717171",
        email: "biffsucks@hillvalley.edu",
        linkPrecedence: "primary",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 23,
        phoneNumber: "123456",
        email: "mcfly@hillvalley.edu",
        linkedId: 1,
        linkPrecedence: "secondary",
        createdAt: new Date(today.setDate(today.getDate() + 2)),
        updatedAt: new Date(today.setDate(today.getDate() + 2)),
    },
];
