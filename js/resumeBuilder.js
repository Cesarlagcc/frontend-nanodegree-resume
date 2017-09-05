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
// var skills=["awesomeness", "programming","teaching","JS"];
// $("#main").append(skills[0]);
var bio = {
    name: 'Cesar Andon',
    role: 'Front-end Web Developer',
    contacts: {
        mobile: '555-555-555',
        email: 'guitarshredder92@yahoo.com',
        github: 'cesarlagcc',
        twitter: 'IGN',
        location: 'New York City'
    },
    welcomeMessage: 'Aspiring Web Developer from New York City',
    skills: ['HTML5', 'CSS3', 'Jquery', 'Microsoft Office'],
    biopic: 'images/fry.jpg',
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $('#header').prepend(formattedName + formattedRole);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
            formattedGithub + formattedTwitter + formattedLocation);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            for (var i = 0, len = bio.skills.length; i < len; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

                $('#skills').append(formattedSkills);
            }
        }
    }
};

bio.display();

var work = {
    jobs: [{
        employer: 'Webline Designs',
        title: 'Web Design Assistant',
        location: 'New York, New York',
        dates: 'January 2014 - May 2014',
        description: 'Assisted lead Web Designer in modifying and creating brand new content for current and upcoming projects.'
    }, ],
    display: function() {
        if (work.jobs.length > 0) {
            for (var i = 0, len = work.jobs.length; i < len; i++) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(formattedEmployerTitle);
                $('.work-entry:last').append(formattedDates);
                $('.work-entry:last').append(formattedLocation);
                $('.work-entry:last').append(formattedDescription);
            }
        }
    }
};

work.display();

var projects = {
    projects: [{
            'title': 'Student Technology Mock Website',
            'dates': 'December 2015',
            'description': 'A one page website dedicated to giving important information to potential Student Technology Mentors',
            'images': ['images/photo2.png']
        },
        {
            'title': 'The Abduction',
            'dates': 'November 2016',
            'description': 'Photoshop based imaged created for my final project, using a sci-fi theme for the setting.',
            'images': ['images/photoShop.png']
        },
    ],
    display: function() {
        if (projects.projects.length > 0) {
            for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(formattedTitle);
                $('.project-entry:last').append(formattedDates);
                $('.project-entry:last').append(formattedDescription);

                for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};
projects.display();

var education = {
    schools: [{
        'name': 'LaGuardia Community College',
        'location': 'Long Island City, New York',
        'degree': 'Associate Degree in New Media Technology',
        'majors': ['New Media Technology'],
        'dates': '2009 - 2015',
        'url': 'https://www.laguardia.edu/home/Default.aspx'
    }],
    onlineCourses: [{
        'title': 'Front-end Degree',
        'school': 'Udacity',
        'dates': 'June 2017 - current',
        'url': 'Udacity.com'
    }, ],
    display: function() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
                var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedNameDegree = formattedName + formattedDegree;

                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(formattedNameDegree);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedLocation);

                for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);

                    $('.education-entry:last').append(formattedMajor);
                }
            }

            $('#education').append(HTMLonlineClasses);

            for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
                var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
                var formattedTitleSchool = formattedTitle + formattedSchool;

                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(formattedTitleSchool);
                $('.education-entry:last').append(formattedOnlineDates);
                $('.education-entry:last').append(formattedUrl);
            }
        }
    }
};
education.display();

$('#mapDiv').append(googleMap);