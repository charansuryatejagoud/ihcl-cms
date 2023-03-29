export default {
    title: "Contact",
    name: 'contact',
    type: "object",
    fields: [
        {
            name: "phone",
            title: "Phone",
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'mobile', type: 'number', title: 'Mobile' },
                    { name: 'type', type: 'string', title: 'Type' },
                ]
            }
            ]
        },
        {
            name: "email",
            title: "Email",
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'email', type: 'string', title: 'Email' },
                    { name: 'type', type: 'string', title: 'Type' },
                ]
            }
            ]
        },
    ],
}