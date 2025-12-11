"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Preview path generator for content types
 * Maps content type UIDs to their frontend URL patterns
 */
const getPreviewPathname = (uid, { document }) => {
    const { slug, documentId } = document;
    switch (uid) {
        case "api::agenda.agenda": {
            if (!slug) {
                return "/agenda";
            }
            // URL format: /agenda/{slug}-{documentId}
            return `/agenda/${slug}-${documentId}`;
        }
        case "api::headline.headline": {
            if (!slug) {
                return "/kabar";
            }
            // URL format: /kabar/{slug}-{documentId}
            return `/kabar/${slug}-${documentId}`;
        }
        default: {
            return null;
        }
    }
};
exports.default = ({ env }) => {
    const clientUrl = env("CLIENT_URL", "http://localhost:5173");
    return {
        auth: {
            secret: env("ADMIN_JWT_SECRET"),
        },
        apiToken: {
            salt: env("API_TOKEN_SALT"),
        },
        transfer: {
            token: {
                salt: env("TRANSFER_TOKEN_SALT"),
            },
        },
        secrets: {
            encryptionKey: env("ENCRYPTION_KEY"),
        },
        flags: {
            nps: env.bool("FLAG_NPS", true),
            promoteEE: env.bool("FLAG_PROMOTE_EE", true),
        },
        preview: {
            enabled: true,
            config: {
                allowedOrigins: clientUrl,
                async handler(uid, { documentId, locale, status }) {
                    // Fetch the document from Strapi
                    const document = await strapi.documents(uid).findOne({ documentId });
                    if (!document) {
                        return null;
                    }
                    // Generate the preview pathname based on content type
                    const pathname = getPreviewPathname(uid, { locale, document });
                    // If no pathname, disable preview for this content type
                    if (!pathname) {
                        return null;
                    }
                    // Return the preview URL with status parameter
                    // The frontend can use this to fetch draft or published content
                    const urlParams = new URLSearchParams({
                        status: status,
                    });
                    return `${clientUrl}${pathname}?${urlParams}`;
                },
            },
        },
    };
};
