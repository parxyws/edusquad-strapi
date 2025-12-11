/**
 * Custom headline routes for preview functionality
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/headlines/:id/preview',
            handler: 'headline.preview',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
