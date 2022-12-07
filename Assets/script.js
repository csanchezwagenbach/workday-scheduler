
$(function () {
  //To begin with, I call a reference to the HTML element where the current date and time will be displayed, then, I use dayjs to set the textContent of that element to be the current date and time.
  var dateAndTime = $("#currentDay")

  function displayDateAndTime () {
  var nowMoment = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  dateAndTime.text(nowMoment);
  }

  //Here I call references to the primary HTML elements I want to be interacting with, the save buttons and the text input areas next to each time block

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

  //I collect each crucial aspect of the projects into an object for each hour block, then I collect those objects into an array just below.

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

//Here is the function that runs once the save buttons have been clicked. I ran into the issue of needing to copy the objects and arrays I had written above so that they would properly run during the event listener. A possible source of confusion to a reader, but to be clear, these objects and this array are two separate ones, one scoped globally, the other within the event listener.

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
    };  
   localStorage.setItem("projects", JSON.stringify(projects));
   }

   saveButton.on("click", saveProjects);

//Here, I loop through the parent elements of each hour-block text area. Each object was given an "hour" property above, with its value being the hour in military format. I loop through the objects and compare the value of the hour property with the current time from dayjs. Based on the difference of those two values, I know whether a given hour block is in the past, present or future. I set each block to "past" as a default, and set two situations under which past is removed, and the appropriate class added.

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

//Here, I pull whatever is stored in local storage and set the initial text values of the hour-block input areas to be equal to whatever was identically indexed in local storage. I used this fact a lot, that because there are a finite amount of hours, I could pretty seamlessly set things to the same index and populate/save data accordingly 

 function getProjects () {
  var projectsFromStorage = localStorage.getItem("projects");
  if (projectsFromStorage) {
    projectsFromStorage = JSON.parse(projectsFromStorage);
  } else {
    return projectsFromStorage;
  }


  for (var i = 0; i < projectsFromStorage.length; i++) {
    projects[i].project.val(projectsFromStorage[i].text);
    
  }
 } 
  
  


 getProjects();
 displayDateAndTime();
 setInterval(displayDateAndTime, 1000);
});
