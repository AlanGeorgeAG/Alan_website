// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Alan_website/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications listed from the CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Alan_website/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research, publications, skills, and teaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Alan_website/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching portfolio in data processing and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Alan_website/teaching/";
          },
        },{id: "teachings-data-processing",
          title: 'Data Processing',
          description: "A practice-oriented course on transforming raw data into reliable analysis-ready datasets for scientific and machine learning workflows.",
          section: "Teachings",handler: () => {
              window.location.href = "/Alan_website/teachings/data-processing.html";
            },},{id: "teachings-machine-learning",
          title: 'Machine Learning',
          description: "An application-focused introduction to machine learning methods, model development, and critical evaluation for scientific datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/Alan_website/teachings/machine-learning.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%61%6E%67%65%6F%72%67%65%32%37%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alan-george-92057a312", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-5232-4428", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
