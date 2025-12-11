/**
 * Custom agenda routes for preview functionality
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/agendas/:id/preview',
            handler: 'agenda.preview',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
