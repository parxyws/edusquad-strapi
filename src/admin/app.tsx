import type { StrapiApp } from "@strapi/strapi/admin";
// @ts-ignore: allow importing PNG assets without type declarations
import icon from "./extensions/favicon.png";

export default {
    config: {
        head: {
            favicon: icon,
            title: "Edusquad CMS",
        },

        locales: [
            // 'ar',
            // 'fr',
            // 'cs',
            // 'de',
            // 'dk',
            // 'es',
            // 'he',
            // 'id',
            // 'it',
            // 'ja',
            // 'ko',
            // 'ms',
            // 'nl',
            // 'no',
            // 'pl',
            // 'pt-BR',
            // 'pt',
            // 'ru',
            // 'sk',
            // 'sv',
            // 'th',
            // 'tr',
            // 'uk',
            // 'vi',
            // 'zh-Hans',
            // 'zh',
        ],

        translations: {
            en: {
                // "app.components.LeftMenu.navbrand.title": "Edusquad CMS",
                // "app.components.LeftMenu.navbrand.workplace": "Edusquad",
                "Auth.form.welcome.title": "Welcome to Edusquad CMS",
                "Auth.form.welcome.subtitle": "Please Login to your account",
                "Auth.form.email.placeholder": "e.g. edusquad@gmail.com",
            },
        },
        theme: {
            light: {
                colors: {
                    buttonPrimary600: "#EF863E",
                    primary600: "#EF863E",
                    primary700: "#EC7523",
                },
            },
        },

        tutorials: false,
        notifications: { release: false },
    },
    bootstrap(app: StrapiApp) {
        console.log(app);
    },
};
