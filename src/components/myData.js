import image1 from "./Images/PROJECT2.PNG";
import image2 from "./Images/budget-tracker.PNG";
import image3 from "./Images/workout-tracker.PNG";
import image4 from "./Images/imageempdir.PNG";
import image5 from "./Images/Dayplanner.PNG";
import image6 from "./Images/burger screenshot.PNG";
let myData = {
  resume:
    "https://drive.google.com/file/d/12ZN7_KA8RDdgd6pexC3u8gM8mws01SMU/view?usp=sharing",
  socialLinks: [
    {
      name: "Linkedin",
      url: "https://au.linkedin.com/in/vasavi-saladi-1b229634",
      className: "fa fa-linkedin-square",
    },
    {
      name: "Github",
      url: "https://github.com/vasavi245",
      className: "fa fa-github-square",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Gratitute-Journal",
      githuburl: "https://github.com/vasavi245/gratitude-journal",
      appurl: "https://safe-dawn-22162.herokuapp.com/",
      image: image1,
      text:
        "A full stack application created by me and our team, where users can log their gratitude and random act of kindness of that day and be presented with inspiring quotes.",
      technology: "MySql, express",
    },
    {
      id: "2",
      title: "Budget-Tracker",
      githuburl: "",
      appurl: "https://stormy-caverns-67881.herokuapp.com/",
      image: image2,
      technology: "MongoDB",
    },
    {
      id: "3",
      title: "Fitness-Tracker",
      githuburl: "https://github.com/vasavi245/workout-tracker",
      appurl: "https://shielded-forest-55168.herokuapp.com/",
      image: image3,
      technology: "Mongoose, express",
    },
    {
      id: "4",
      title: "Employee-Directory",
      githuburl: "https://github.com/vasavi245/Employee-Directory",
      appurl: "https://upper-doright-59763.herokuapp.com/",
      image: image4,
      technology: "React",
    },
    {
      id: "5",
      title: "Day-Planner",
      githuburl: "https://github.com/vasavi245/week5_Homework",
      appurl: "https://vasavi245.github.io/week5_Homework/",
      image: image5,
      technology: "Javascript, Momemt.js",
    },
    {
      id: "6",
      title: "Burger",
      githuburl: "https://github.com/vasavi245/burger",
      appurl: "https://whispering-island-77694.herokuapp.com/",
      image: image6,
      technology: "NodeJS, MySQL",
    },
  ],
};

export default myData;
