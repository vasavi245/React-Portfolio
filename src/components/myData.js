import image1 from "./Images/PROJECT2.PNG";
import image2 from "./Images/budget-tracker.PNG"
let myData = {
    "resume": "https://drive.google.com/file/d/12ZN7_KA8RDdgd6pexC3u8gM8mws01SMU/view?usp=sharing",
     "socialLinks": [
         {
             "name": "Linkedin",
             "url": "https://au.linkedin.com/in/vasavi-saladi-1b229634",
             "className": "fa fa-linkedin-square"
         },
         {
             "name": "Github",
             "url": "https://github.com/vasavi245",
             "className": "fa fa-github-square"
         }
     ],
     "projects": [
         {
             "id":"1",
             "title": "Gratitute-Journal",
             "githuburl":"https://github.com/vasavi245/gratitude-journal",
             "appurl": "https://safe-dawn-22162.herokuapp.com/",
             "image": image1,
             "text": "A full stack application created by me and our team, where users can log their gratitude and random act of kindness of that day and be presented with inspiring quotes.",
             "technology": "MySql, express"
         },
         {
             "id":"2",
             "title":"Budget-Tracker",
             "githuburl": "",
             "appurl":"https://stormy-caverns-67881.herokuapp.com/",
             "image": image2,
             "technology": "MongoDB"
         }
     ]

     
}

export default myData;