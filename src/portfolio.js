/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman Malviya",
  title: "Hi all, I'm Aman",
  subTitle: emoji(
    "Software Engineer with a strong foundation in Node.js, MongoDB, JavaScript, React.js, HTML, CSS, and Bootstrap. Passionate about coding and developing innovative solutions. Proven ability to contribute effectively to collaborative team projects. Excited to begin my professional journey in the dynamic field of software development"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1ILzXiOTBSPQkHSY4iSfRcJN3nZM_HmvW6cW8UXFovEQ/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AmanMalviya22",
  linkedin: "https://www.linkedin.com/in/aman-malviya-839392201/",
  gmail: "aman_malviya22@outlook.com",

  codechef: "https://www.codechef.com/users/aman26802",

  stackoverflow: "https://stackoverflow.com/users/14799948/aman-malviya",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fa-solid fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Mata Vaishno Devi University",
      logo: require("./assets/images/SMVD_University_Logo.png"),
      subHeader: "Bachelor in  Computer Science",
      duration: "December 2020 - May 2024",

      descBullets: [
        "I am a highly motivated computer science student with a passion for software development. I have strong programming skills in  Java, and C++, and I am proficient in a variety of web development technologies, including HTML, CSS, and JavaScript,Nodejs, MongoDB. I have also gained experience with machine learning and artificial intelligence through coursework and personal projects",

        " I am currently pursuing a B.Tech in Computer Science at Shri Mata Vaishno Devi University and I am expected to graduate in [Year]. After graduation, I am interested in a career in software development, where I can use my skills to create innovative and impactful products."
      ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Lyft",
      companylogo: require("./assets/images/lyft logo.png"),
      date: "August 2023 – August 2023",
      
      descBullets: [
        "Completed practical tasks in software architecture, refactoring, unit testing, and test-driven development." ,
        " Developed a RESTful API using Nodejs. The API had 100 endpoints and was able to handle 1000 requests per second. ",
        " Implemented unit tests that covered 95% of the code. ",
        "Followed Agile software development methodology to develop the code. The code was written in a modular and reusable way. "
        
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display:true,
  title: "Projects",
  
  projects: [
    {
      image: require("./assets/images/game plan logo.jpg"),
      projectName: "Game Plan",
      projectDesc:
      "Contributed into an open source web application using ReactJS, Node.js, and MongoDB with a team of 4 members.The application successfully gathered 15+ project ideas on Game Plan from classmates.",
      
      footerLink: [
        {
          name: "Active Link",
          url: "https://fir-gameplan-bea55.web.app/",
          
        },
        {
          
          name:"GitHub",
          url:"https://github.com/AmanMalviya22/gameplan"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      image: require("./assets/images/placement cell logo.jpg"),
      projectName: "Placement Cell",
      projectDesc: "Build ,test and deploy a comprehensive web application for Team Career Camp.The application has been used by over 30 students and has given positive feedback. ",
      footerLink: [
        {
          name: "Active Link",
          url: "https://placementcell-d3b2.onrender.com"
        },
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22/placement_cell_1.0.0"
        }
      ]
    },
    {
      image: require("./assets/images/hospital api log.jpg"),
      projectName: "Hospital Api",
      projectDesc: "Project Completion: Successfully designed and tested a hospital management API using Node.js and MongoDB, completing the project within the estimated time frame of 20 hours.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22/HospitalApi"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "4 star rated on CodeChef",
      subtitle:
        "Achieved a commendable 4-star rating.Secured Global rank 2 in CodeChef November Long Challenge 2022.",
      image: require("./assets/images/codechef logo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "profile",
          url: "https://www.codechef.com/users/aman26802"
        }
      ]
    },
    {
      title: "AWS Certifications",
      subtitle:
        "AWS Academy Graduate Certification with hands on Experience",
      image: require("./assets/images/aws logo.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1z82IX1s0ounE5zxRADXkeahKNIMaeCtP/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Data Structures and Algorithm in Java",
      subtitle: "Completed Certifcation from Coding ninja in Data Structures and Algorithm",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
       
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1oELvJvlexu-gCSCKgjjSWmcj78itGiBM/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Full Stack Development In Nodejs",
      subtitle: "Completed Certifcation from Coding ninja in Full Stack Web Development",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1fveQn0QLG-_KFcnlsLz0UiGDYVArg4uZ/view?usp=drive_link"
        }
      ]
    },{
      title: "java Certifications",
      subtitle: "Completed Certifcation from Coding ninja in java",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1D105VzLzFGyuZKGLt3QiSzjHYkgpn_lt/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9149736306",
  email_address: "aman_malviya22@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
