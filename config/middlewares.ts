export default [
    {
        name: "strapi::cors",
        config: {
            origin: ["https://edusquad.or.id/"],
            methods: [
                "GET",
                "POST",
                "PUT",
                "PATCH",
                "DELETE",
                "HEAD",
                "OPTIONS",
            ],
            headers: ["Content-Type", "Authorization", "Origin", "Accept"],
            keepHeaderOnError: true,
        },
    },
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
