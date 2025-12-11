"use strict";
/**
 * Custom agenda routes for preview functionality
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
