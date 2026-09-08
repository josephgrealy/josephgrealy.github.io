// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of my personal and work related projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-attended-royal-statistical-society-annual-conference",
          title: 'Attended Royal Statistical Society Annual Conference',
          description: "",
          section: "News",},{id: "news-moving-from-defra-to-dhsc",
          title: 'Moving from Defra to DHSC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-moving-from-dhsc-to-the-department-for-transport",
          title: 'Moving from DHSC to the Department for Transport',
          description: "",
          section: "News",},{id: "projects-air-quality-dashboard-and-r-package",
          title: 'Air Quality Dashboard and R Package',
          description: "Reproducible tools and interactive dashboards for analysing and communicating air quality and emissions data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/air-quality-dashboard/";
            },},{id: "projects-air-quality-uncertainty",
          title: 'Air Quality Uncertainty',
          description: "Quantifying and communicating uncertainty in air quality and emissions modelling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/air-quality-uncertainty/";
            },},{id: "projects-gaussian-process-emulation-for-the-gr4j-rainfall-runoff-model",
          title: 'Gaussian Process Emulation for the GR4J Rainfall-Runoff Model',
          description: "Master&#39;s dissertation using Gaussian Process emulation to explore the GR4J rainfall–runoff model efficiently.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gr4j-gaussian-process-emulation/";
            },},{id: "projects-nhs-estates-prioritisation",
          title: 'NHS Estates Prioritisation',
          description: "A transparent multi-criteria tool supporting hospital sequencing, acceleration and funding decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nhs-estates-prioritisation/";
            },},{id: "projects-soil-uncertainty-research",
          title: 'Soil Uncertainty Research',
          description: "Spatial analysis of soil properties and measurement uncertainty for applications in flood modelling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soil-uncertainty-research/";
            },},{id: "projects-victoria-line-dashboard",
          title: 'Victoria Line Dashboard',
          description: "A personal data visualisation project tracking and exploring journeys on the Victoria line.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tube-dashboard/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%73%65%70%68%67%6D%6F%62%69%6C%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/josephgrealy", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/josephcello", "_blank");
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
