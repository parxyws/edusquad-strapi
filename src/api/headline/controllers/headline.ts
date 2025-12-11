/**
 * headline controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::headline.headline', ({ strapi }) => ({
    /**
     * Preview a draft headline entry
     * GET /api/headlines/:id/preview
     * Returns the entry regardless of publication status (draft or published)
     */
    async preview(ctx) {
        const { id } = ctx.params;

        try {
            // Use Document Service to fetch by documentId with draft status
            const entity = await strapi.documents('api::headline.headline').findOne({
                documentId: id,
                status: 'draft',
                populate: '*',
            });

            if (!entity) {
                // Try to find published version if draft not found
                const publishedEntity = await strapi.documents('api::headline.headline').findOne({
                    documentId: id,
                    status: 'published',
                    populate: '*',
                });

                if (!publishedEntity) {
                    return ctx.notFound('Headline not found');
                }

                return { data: publishedEntity };
            }

            return { data: entity };
        } catch (error) {
            strapi.log.error('Preview error:', error);
            return ctx.badRequest('Failed to fetch preview');
        }
    },
}));
