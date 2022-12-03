var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var currentTime;


// set current day and time
function todaysDate() {
    $(currentDay).text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};



// local storgae function
saveBtn.on("click", function () {
    const entry = $(this).siblings(".tasks").attr("id");
    const retrive = $(this).siblings(".tasks").val();
    localStorage.setItem(entry, retrive);
});

//function to return stored values
function storedEntry() {
    $(".tasks").each(function () {
        var entry = $(this).attr("id");
        var retrive = localStorage.getItem(entry);
        $(this).val(retrive);
    })
};


// function to change bg based on current time

function tmieCheck() {
    $('.row').each(function () {
        var blockText = $(this).children(".hour").text();
        var timeBlock = moment(blockText, "hA");
        if (timeBlock.isBefore(currentTime)) {
            $(this).children(".tasks").addClass("past").removeClass("future").removeClass("present");
        } else if (timeBlock.isAfter(currentTime)) {
            $(this).children(".tasks").addClass("future").removeClass("past").removeClass("present");
        } else {
            $(this).children(".tasks").addClass("present").removeClass("future").removeClass("past");
        }
    })
};

storedEntry();
todaysDate();
tmieCheck();