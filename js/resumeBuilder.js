/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Cesar Andon");
/*
In this part of  lesson 9 part 5, I created a variable for formattedName where 
my full name would go. In it, I targeted HTMLheaderName and replaced the old data
part and put in my name.

I then appended it to the header tag through html. 
*/
var firstName = "Cesar Andon";

var formattedName = HTMLheaderName.replace("%data%", firstName);

var role = "Front-end Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var skills=["awesomeness", "programming","teaching","JS"];

// $("#main").append(skills[0]);


var bio = {
    name: "Cesar Andon",
    role: "Front-end Web Developer",
    contacts: {
        mobile: "555-555-555",
        email: "guitarshredder92@yahoo.com",
        github: "Cesarlagcc",
        twitter: "Twitter.com",
        location: "New York City"
    },
    welcomeMessage: "Welcome, My Name is Cesar Andon and I am an aspiring Front-end Web Developer.",
    skills: [
        "HTML5", "CSS3", "JQuery", "Photoshop"
    ],
    bioPic: "images/fry.jpg"
};

//Starting from here is the top of my basic information 
var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(myMobile);

var emailInfo = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(emailInfo);

var gitInfo = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(gitInfo);

var twitterInfo = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(twitterInfo);

var locationInfo = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(locationInfo);
//and it ends here

//this is the code for the fry photo
var mainPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(mainPic);
//fry photo ends here

//this is the code after the image that is a welcome message.
var photoMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(photoMsg);
//welcome message code ends here.

//this is the skill heading 

// var skillIntro=HTMLskillsStart.replace("%data%",bio.skills);
// $("#header").append(skillIntro);


//this block of code right here represents the skills that i have listed, i copy and pasted them then numbered them individiually so each can have its own line.
// var skillFeed =HTMLskills.replace("%data%",bio.skills[0]);
// $("#header").append(skillFeed);
// var skillFeed =HTMLskills.replace("%data%",bio.skills[1]);
// $("#header").append(skillFeed);
// var skillFeed =HTMLskills.replace("%data%",bio.skills[2]);
// $("#header").append(skillFeed);
// end of skill block
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}


//this is the part that deals with education and work. The following below is a job array in a work object
var work = {
    "jobs": [{
        "jobPosition": "Web Assistant",
        "employer": "Webline Designs",
        "yearsWorked": "2014-2015",
        "location": "Long Island City, New York",
        "description": "Assisted lead Web Designer in modifying and creating brand new content for client's websites."

    }]
};

//this is the education section begins, the following is an array.
var education = {
    "schools": [{
        "name": "LaGuardia Community College",
        "city": "New York, NY",
        "degree": "Associates Degree",
        "major": "New Media Technology",
        "dates": "2011-2016 ",
        "website": "http://wccc.edu"
    }]
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry").append(formattedName);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry").append(formattedDegree);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry").append(formattedDates);
        formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry").append(formattedCity);
        formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry").append(formattedMajor);
    }

    // $(".education.entry").append(HTMLonlineClasses);
    // 	for(var course in education.onlineCourses) {
    // 		formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    // 		formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    // 		formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    // 		formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    // 		$(".education-entry").append(formattedOnlineTitle);
    // 		$(".education-entry").append(formattedOnlineSchool);
    // 		$(".education-entry").append(formattedOnlineDates);
    // 		$(".education-entry").append(formattedUrl);


    // 	}
};

education.display();
//This is the end of the education section.




//end of education and work.

//here i am prepending and appending the work experience on the actual html page.
// var wkrStart=HTMLworkStart.replace();
// $("#workExperience").prepend(wkrStart);

// var employer=HTMLworkEmployer.replace("%data%",work["employer"]);
// $("#workExperience").append(employer);

// var wrkDates=HTMLworkDates.replace("%data%",work["yearsWorked"]);
// $("#workExperience").append(wrkDates);
//work ends here


var projects = {
    "finalProj": [{
            "name": "Student Technology Mock Website",
            "date": "2017",
            "description": "A one page website dedicated to giving important information to potential Student Technology Mentors",
            "image": "images/197x148.gif"
        },
        {
            "name": "The Abduction",
            "date": "2016",
            "description": "Photoshop based imaged created for my final project",
            "image": "images/fry.jpg"
        }
    ]
};

//The code below is the work experience section of the portfolio page.
var job = '';

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].jobPosition);
        var formattedWrkDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
        var formattedWrkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);


        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry").append(formattedWrkDates);
        $(".work-entry:first").append(formattedWrkDesc);
        $(".work-entry:first").prepend(formattedLoc);
    }
}

displayWork(); //this displays the function that shows all the information about my work experience.

//This code is an exmaple that documents where the mouse was clicked on.
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

//This controls the button that changes the name to then only the last name being capitalized.
$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
//capitalized last name ends here. 


//This part of the code is a encapulating function that inputs all of the projects onto the html document. 
var project = "";
projects.display = function() {
    for (project in projects.finalProj) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitlez = HTMLprojectTitle.replace("%data%", projects.finalProj[project].name);
        $(".project-entry:last").append(formattedTitlez);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.finalProj[project].date);
        $(".project-entry:last").append(formattedDates);

        var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.finalProj[project].description);
        $(".project-entry:last").append(formattedProjDesc);

        // if(projects.finalProj[project].image.length>0){//images is not appearing.
        // 	for(images in projects.finalProj[project].images){
        // 		var formattedImage=HTMLprojectImage.replace("%data%",projects.finalProj[project].image[images]);
        // 		$(".project-entry:last").append(formattedImage);
        // 	}
        // }

    }
};
projects.display();
//The project is being displayed thanks to projects.display()

$("#mapDiv").append(googleMap);