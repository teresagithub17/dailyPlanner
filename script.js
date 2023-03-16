// Declare variables
var timeDisplayEl = $('#currentDay');
var inputEl = $(".input")
var calendarButton = $(".saveBtn")
var eventText;
var eventTime;

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$( document ).ready(function() {
  blockColorChange ();
  saveText ();
});

$(function () {});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  calendarButton.click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    blockColorChange ();
    saveText ();
    
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

function blockColorChange () {
  var currentHour = dayjs().hour();
  console.log("Current Time" + currentHour);
  
  inputEl.each(function () {
    var calendarTime = parseInt($(this).attr("id"));
    console.log('this is me')
    console.log(calendarTime);
    
    if (currentHour > calendarTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } 
    else if (currentHour < calendarTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } 
    else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    });
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

function saveText () {   

  var saveEventText9 = JSON.parse(localStorage.getItem("9AM"));
  $("#hour-9").val("");
  $("#hour-9").val(saveEventText9);
    
  var saveEventText10 = JSON.parse(localStorage.getItem("10AM"));
  $("#hour-10").val("");
  $("#hour-10").val(saveEventText10);
    
  var saveEventText11 = JSON.parse(localStorage.getItem("11AM"));
  $("#hour-11").val("");
  $("#hour-11").val(saveEventText11);
    
  var saveEventText12 = JSON.parse(localStorage.getItem("12PM"));
  $("#hour-12").val("");
  $("#hour-12").val(saveEventText12);
    
  var saveEventText1 = JSON.parse(localStorage.getItem("1PM"));
  $("#hour-13").val("");
  $("#hour-13").val(saveEventText1);

  var saveEventText2 = JSON.parse(localStorage.getItem("2PM"));
  $("#hour-14").val("");
  $("#hour-14").val(saveEventText2);

  var saveEventText3 = JSON.parse(localStorage.getItem("3PM"));
  $("#hour-15").val("");
  $("#hour-15").val(saveEventText3);

  var saveEventText4 = JSON.parse(localStorage.getItem("4PM"));
  $("#hour-16").val("");
  $("#hour-16").val(saveEventText4);

  var saveEventText5 = JSON.parse(localStorage.getItem("5PM"));
  $("#hour-17").val("");
  $("#hour-17").val(saveEventText5);

};
  // TODO: Add code to display the current date in the header of the page.

function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  console.log(rightNow);
  timeDisplayEl.text(rightNow);
};

displayTime();


