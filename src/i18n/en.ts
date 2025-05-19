import SideBarFooter from "@components/SideBarFooter.astro";

export default {
  languageLabel: "Language",
  languageOptions: {
    es: "Spanish",
    en: "English",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    store: "Store",
    contact: "Contact",
    cv: "CV",
    name: "Brian Cervantes",
  },
  home: {
    title: "Hey there 👋",
    subtitle: "I'm Brian Cervantes",
    position: "Software Engineer and Fullstack Developer",
    descriptionTitle: "I build functional, secure and user-centered software.",
    descriptionSubTitle:
      "Fullstack Developer with experience in .NET, Vue and Flutter. I have worked on APIs, mobile-first web portals and IoT projects with ESP32 and Firebase. I love improving processes and creating solutions that really work.",
    lastProjectsTitle: "My last projects </>",
  },
  footer: {
    devBy: "Developed by",
    using: "using",
  },
  sideBarFooter: {
    whatsAppMessage:
      "Hi%20Brian!%0AI%20just%20saw%20your%20web%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20to%20explore%20collaboration%20opportunities%20or%20potential%20projects.%0A%0ALooking%20forward%20to%20your%20reply.%0ABest%20regards.",
  },
};
