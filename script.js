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
    console.log(projects)
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


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


 for (var i=0; i < projects.length; i++) {
 var parentBlock = $(projects[i].project.parent());
// console.log(parentBlock);
// console.log(projects[i].hour.valueOf());
// console.log(dayjs().format("HH"));
     if (projects[i].hour.valueOf() - dayjs().format("HH") > 0) {
      parentBlock.removeClass("past");
      parentBlock.addClass("future");
    } else if (projects[i].hour.valueOf() - dayjs().format("HH") == 0) {
      parentBlock.removeClass("past");
      parentBlock.addClass("present");
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
displayDateAndTime();
setInterval(displayDateAndTime, 1000);
 }});
