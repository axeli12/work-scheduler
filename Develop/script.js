var hour = 9;
var currentTime = $("#currentDay");
var currentHour = dayjs().hour();
var saveBtn = $(".saveBtn")
var description = $(".description")



// adding date to header

var currentDate = dayjs().format("dddd, MMMM D ");
currentTime.append(currentDate);

// function to set up hour classes

function itTime (){


  for (var i = 0; i < $(".time-block").length; i++) {

    let block = $(".time-block")[i];
  
    if (parseInt($(block).attr("id").slice(5)) < currentHour) 
    {
      $(block).children(".description").addClass("past");
    } 
    else if (parseInt($(block).attr("id").slice(5)) > currentHour) 
    {
      $(block).children(".description").addClass("future");
    } 
    else 
    {
      $(block).children(".description").addClass("present");
    }
  }
};
itTime();

// function to save the text to local storage
function text(event){
  event.preventDefault();

  var des = $(this).siblings(".description").val().trim();

  var savedDes = $(this).parrent().attr("id");

  localStorage.setItem(savedDes, des)

  saveBtn.on("click", text)

  for (let i = 0; i <= 9; i++){
    var data = localStorage.getItem("hour-"+i)
    $("#hour-"+i).children("textarea").val(data)
 
  }
}



