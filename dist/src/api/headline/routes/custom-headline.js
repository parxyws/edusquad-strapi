"use strict";
/**
 * Custom headline routes for preview functionality
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
