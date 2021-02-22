import Project from './project';
   
export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Currency Converter",
        picture: "../.././assets/proj_convertisseur.png",
        techno: ["VueJS", "API"],
        link: "https://florencejacobs.github.io/Convertisseur_de_devises_Vue.js/",
        created: new Date("02-01-2021")
        },
    {
        id: 2,
        name: "Pomodoro Timer",
        picture: "../.././assets/proj_pomodoro.png",
        techno: ["React", "Parcel"],
        link: "https://florencejacobs.github.io/pomodoro-react/",
        created: new Date("01-20-2021")
        },
    {
        id: 3,
        name: "To do list",
        picture: "../.././assets/proj_to_do.png",
        techno: ["VueJS"],
        link: "https://florencejacobs.github.io/to_do_list_vueJS/",
        created: new Date("02-09-2021")
    },
    {
        id: 4,
        name: "Vic App",
        picture: "../.././assets/proj_vic.png",
        techno: ["Laravel", "VueJS"],
        link: "https://github.com/Yaco-99/VIC/tree/florence",
        created: new Date("01-10-2021")
    },
    {
        id: 5,
        name: "Immo Eliza",
        picture: "../.././assets/proj_eliza.png",
        techno: ["PHP", "Curl"],
        link: "https://immo-eliza.herokuapp.com/",
        created: new Date("11-24-2020"),
    },
    {
        id: 6,
        name: "My portfolio",
        picture: "../.././assets/proj_portfolio.png",
        techno: ["React", "Materialize"],
        link: "https://github.com/FlorenceJacobs/portfolio",
        created: new Date("02-20-2021")
    },
    {
        id: 7,
        name: "AllezCine",
        picture: "../.././assets/proj_allezcine.png",
        techno: ["API", "Bootstrap"],
        link: "https://florencejacobs.github.io/AllezCine/",
        created: new Date("11-03-2020")
    },
    {
        id: 8,
        name: "Hangman",
        picture: "../.././assets/proj_hangman.png",
        techno: ["JS"],
        link: "https://florencejacobs.github.io/Hangman/",
        created: new Date("11-01-2020")
    },
    {
        id: 9,
        name: "CookieClicker",
        picture: "../.././assets/proj_cookieclicker.png",
        techno: ["JS", "FlexBox"],
        link: "https://florencejacobs.github.io/CookieClicker/",
        created: new Date("10-27-2020")
        },
    {
        id: 10,
        name: "Citation",
        picture: "../.././assets/proj_citation.png",
        techno: ["Ajax"],
        link: "https://florencejacobs.github.io/ajax-simple-web-service-request/",
        created: new Date("10-15-2020")
    },
    {
        id: 11,
        name: "Home WebSite",
        picture: "../.././assets/proj_restaurant.png",
        techno: ["CSS animate", "Bootstrap"],
        link: "https://florencejacobs.github.io/Restaurant_GroupeC_Mangez_Grille/",
        created: new Date("09-23-2020")
    },
    {
        id: 12,
        name: "Wordpress Theme",
        picture: "../.././assets/proj_coming.png",
        techno: ["PHP", "Wordpress"],
        link: "https://github.com/FlorenceJacobs",
        created: new Date("03-05-2020")
    },
];
  
export default PROJECTS;