// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var dateAndTime = $("#currentDay")

  function displayDateAndTime () {
  var nowMoment = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  dateAndTime.text(nowMoment);
  }

  var saveButton = $(".saveBtn");
  var hourNineInput = $("#hour-9-project");
  var hourTenInput = $("#hour-10-project");
  var hourElevenInput = $("#hour-11-project");
  var hourTwelveInput = $("#hour-12-project");
  var hourThirteenInput = $("#hour-13-project");
  var hourFourteenInput = $("#hour-14-project");
  var hourFifteenInput = $("#hour-15-project");
  var hourSixteenInput = $("#hour-16-project");
  var hourSeventeenInput = $("#hour-17-project");

var hourNine = {
  project: hourNineInput,
  text: hourNineInput.val(),
  hour: 9,
};

var hourTen = {
  project: hourTenInput,
  text: hourTenInput.val(),
  hour: 10
};

var hourEleven = {
  project: hourElevenInput,
  text: hourElevenInput.val(),
  hour: 11
};

var hourTwelve = {
  project: hourTwelveInput,
  text: hourTwelveInput.val(),
  hour: 12
};

var hourThirteen = {
  project: hourThirteenInput,
  text: hourThirteenInput.val(),
  hour: 13
};

var hourFourteen = {
  project: hourFourteenInput,
  text: hourFourteenInput.val(),
  hour: 14,
};

var hourFifteen = {
  project: hourFifteenInput,
  text: hourFifteenInput.val(),
  hour: 15,
};

var hourSixteen = {
  project: hourSixteenInput,
  text: hourSixteenInput.val(),
  hour: 16
};

var hourSeventeen = {
  project: hourSeventeenInput,
  text: hourSeventeenInput.val(),
  hour: 17
};

  var projects = [
    hourNine, hourTen, hourEleven, hourTwelve, hourThirteen, hourFourteen, hourFifteen, hourSixteen, hourSeventeen
  ];

   function saveProjects(event) {

     event.preventDefault();

     var hourNine = {
      text: hourNineInput.val(),
      hour: 9,
    };
    
    var hourTen = {
      text: hourTenInput.val(),
      hour: 10
    };
    
    var hourEleven = {
      text: hourElevenInput.val(),
      hour: 11
    };
    
    var hourTwelve = {
      text: hourTwelveInput.val(),
      hour: 12
    };
    
    var hourThirteen = {
      text: hourThirteenInput.val(),
      hour: 13
    };
    
    var hourFourteen = {
      text: hourFourteenInput.val(),
      hour: 14,
    };
    
    var hourFifteen = {
      text: hourFifteenInput.val(),
      hour: 15,
    };
    
    var hourSixteen = {
      text: hourSixteenInput.val(),
      hour: 16
    };
    
    var hourSeventeen = { 
      text: hourSeventeenInput.val(),
      hour: 17
    };
    
      var projects = [
        hourNine, hourTen, hourEleven, hourTwelve, hourThirteen, hourFourteen, hourFifteen, hourSixteen, hourSeventeen
      ];

     for (var i = 0; i < projects.length; i++) {  
      var projectText = projects[i].text;  
      console.log(projectText)
  };  
   localStorage.setItem("projects", JSON.stringify(projects));
   }

   saveButton.on("click", saveProjects);


 for (var i=0; i < projects.length; i++) {
 var parentBlock = $(projects[i].project.parent());
     if (projects[i].hour.valueOf() - dayjs().format("HH") > 0) {
      parentBlock.removeClass("past");
      parentBlock.addClass("future");
    } else if (projects[i].hour.valueOf() - dayjs().format("HH") == 0) {
      parentBlock.removeClass("past");
      parentBlock.addClass("present");
  }
 }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
 function getProjects () {
  var projectsFromStorage = localStorage.getItem("projects");
  if (projectsFromStorage) {
    projectsFromStorage = JSON.parse(projectsFromStorage);
  } else {
    return projectsFromStorage;
  }
 // console.log(projectsFromStorage)

  for (var i = 0; i < projectsFromStorage.length; i++) {
    projects[i].project.val(projectsFromStorage[i].text);
    console.log(projects[i].project.textContent)
  }
 } 
  
  


 getProjects();
 displayDateAndTime();
 setInterval(displayDateAndTime, 1000);
});
