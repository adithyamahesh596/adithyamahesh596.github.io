var name = "Adithya Mahesh Bariki";


var bio = {
    "name" : "Adithya Mahesh Bariki",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "408-656-7994",
        "email": "adithyamaheshbariki@gmail.com",
        "github": "Adithyamahesh596",
        "location": "Sunnyvale, California",
        "linkedin": "Adithya Mahesh Bariki"

    },
    "welcomeMessage" : "A CS graduate actively seeking opportunities to jumpstart my career",
    "skills" : ["HTML/CSS","JavaScript","React/Redux","jQuery","Node.js","Express","AJAX"],
    "bioPic" : "https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAMABADGAAwAAQAAAAAAAA2WAAAAJDY5YzNhOTYxLTA3NDktNGIwMi04Yjg0LWM3YWE5NDMwZDg3OA.jpg",
    "display" : ""
    };

var work = {
    "jobs" : [
        {
            "employer" : "Midwestern State University",
            "title" : "Graduate Student Assistant",
            "location" : "Wichita Falls, TX, US",
            "dates" : "September, 2016 - May, 2017",
            "description" : "Helped Undergraduate students to accomplish their projects and assignments. I was also responsible for the software installations and upgrades of the machines in the assigned lab."
        }
    ],
    "display" : "displayWork()"
};

var education = {
    "schools" : [
        {
            "name" : "Jawaharlal Nehru Technological University",
            "location" : "Hyderabad, Telangana, India",
            "degree" : "Bachelors",
            "major" : ["Computer Science", "Mathematics"],
            "year" : "2011-2015"
        },
        {
            "name" : "Midwestern State University",
            "location" : "Wichita Falls, TX, US",
            "degree" : "MS",
            "major" : ["Computer Science"],
            "year" : "2016-2017"
        }
    ]
};

var projects = {
    "projects" :[
        {
            "title" : "<b>ROVUP</b>, Sunnyvale, CA",
            "dates" : "March, 2017 - Present",
            "description" : "A Web based application which allows travel agents to create, manage and promote their travel packages on different social media platforms. <br> <b><u>Responsibilities:</u></b><br>   • Built user interfaces by creating re-usable <b>React</b> components.<br> • Created responsive UI using <b>Bootstrap</b>.<br> • Used <b>Webpack</b> to run build tasks such as bundling and minification.<br>  • Used <b>AWS</b> to host the application.<br>  \t • Used <b>Jenkins</b> to run integration steps and AWS Code Deploy for deployments (Post-Build action).<br> <b><u>Tech stack</u></b>: React, Bootstrap, Webpack, PostgreSQL, Babel ES6, Node.js, AWS etc.",
            "images" : []
        },
        {
            "title" : "<b>LOCATION SEARCH APPLICATION</b>, Wichita Falls, TX",
            "dates" : "September, 2016 - January, 2017",
            "description" : "<a href='http://locationsearch.cf'>http://locationsearch.cf</a><br>A React based web application which allows users to search places by categories, zip code and radius. Upon querying, the locations are then displayed on a Google Map. <br> <b><u>Responsibilities:</u></b><br>" +
            "• Built user interfaces by creating re-usable <b>React</b> components. <br>• Created responsive UI using <b>Bootstrap</b>.<br> • Queried and retrieved location places by category and radius using <b>Four Square API</b>. <br>• Displayed locations within a <b>Google Map</b> using Google map markers.<br> • Used <b>Webpack</b> to run build tasks such as bundling and minification. <br> • Deployed and hosted the application using <b>Amazon Web Services (AWS)</b>.<br>" +
            "<b><u>Tech stack</u></b>: React, Bootstrap, Webpack, Babel ES6, Node.js, AWS, Google Maps, Four Square API. ",
            "images" : ["https://adithyamahesh596.github.io/images/location.png","https://adithyamahesh596.github.io/images/location2.png"]
        },
        {
            "title" : "<b>COURSIFY</b>, Wichita Falls, TX",
            "dates" : "July, 2017 - November, 2017",
            "description" : "<a href='http://coursify.surge.sh'>http://coursify.surge.sh</a><br>A React based web application which allows users to add courses and manage courses.",
            "images" : ["https://adithyamahesh596.github.io/images/coursify3.png", "https://adithyamahesh596.github.io/images/coursify4.png", "https://adithyamahesh596.github.io/images/coursify5.png"]
        }
    ]

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelcomeMessage);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedLinkedIn);



if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);

}

function displayWork()
{
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedEmployerTitle);


        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[2] = name[2].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1] + " " + name[2];
}

$('#main').append(internationalizeButton);

projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);


        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);


        if(projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
};


education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].year);

        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolMajor);

    }
};


projects.display();
education.display();

$("#mapDiv").append(googleMap);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedLinkedIn);