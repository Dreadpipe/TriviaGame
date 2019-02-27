/* jQuery needs the document ready function because I am not a sophisticated
developer and I could screw up my page.  I will add a comment above my closing
parentheticals to ensure I don't forget to properly close it!*/

$(document).ready(function() {

    // The actual jQuery/javascript goes here
    
    // I need global variables here:
    // clock running, correct guess, wrong guess
    // REMINDER: LET AND CONST ONLY!  all else fails, go for var, but you'll pay for it
    let clockRunning = false;
    let rightGuess = 0;
    let wrongGuess = 0;
    
    // I'm going to make a super object that holds all of my questions
    const questions = {
        quest1 : "Question one goes here",
        // will use alphabet instead of numbers to store answers, makes edits quicker
        aQuest : {
            a1 : "1",
            a2 : "2",
            a3 : "3",
            a4 : "4",
        },
    // Naming convention "quest1, quest2" is redundant; may get confusing, consider switching
        quest2 : "Question two goes here",
        bQuest : {
            b1 : "1",
            b2 : "2",
            b3 : "3",
            b4 : "4",
    
        },
    // Start with three questions, if you can get working, extend the object
        quest3 : "Question three goes here",
        cQuest : {
            c1 : "1",
            c2 : "2",
            c3 : "3",
            c4 : "Boom",
            }
    }
    
    // Functions follow, where we change the HTML, or append/replace text for new questions
    /* Relevant ids:
    #title - Has game title
    #time/rules - Will begin with the rules, and when we press a button, appends the time
    #question - Will append the question to a <p>
    #answers - Will append the answers to a <p>
    */
    
    // I need to set up a timer here that counts down from 30
    
    // variables that store my timer, and my countdown
    let timer = 30;
    let timerCount = setInterval(countDown, 1000 * 3)
    
    // timer function
    function countDown() {
        // if clockRunning isn't true, stop function
        if (!clockRunning) {
            return false;
        }   
        // when timer value equals zero, I clear the timerCount interval counter
        else if (timer === 0) {
            clearTimeout(timerCount);
            timeUp();
        }
        // displays the text of the timer in a <p>
        else {
            $("#time").text(timer);
            timer--;
        }
    }
    
    // need a function for when time is up, will append to button that they can start over
    function timeUp() {
        $("#time").text("Time's up!")
        // NOTE: WILL NEED BUTTON TO RETURN
    }
    
    // This gives the button an on-click event that kicks off my first question
    $("#button").on("click", function(){
        clockRunning = true;
        askFirst();
        // NOTE: WILL NEED BUTTON TO DISAPPEAR
    });
    
    // First question function
    // Need to find way to optimize - seems like a lot of repetition
    function askFirst () {
        //texts the contents of the object to the appropriate id
        let firstQuest = $("#questions").text(questions.quest1);
        let ans1 = $("#answers").text(questions.aQuest.a1);
            ans1.addClass("correct");
        let ans2 = $("#answers").text(questions.aQuest.a2);
            ans2.addClass("incorrect");
        let ans3 = $("#answers").text(questions.aQuest.a3);
            ans3.addClass("incorrect");
        let ans4 = $("#answers").text(questions.aQuest.a4);
            ans4.addClass("incorrect");
            if (clockRunning = true) {
                //this begins the countdown clock
                countDown();
                //this clears the question <p>
                $("#question").text("");
                $("#question").append(firstQuest);
                $("#answers").append(ans1, ans2, ans3, ans4);
            }
        // on click event that capture the correct click from the class we have 
        $(".correct").on("click", function(){
            //and kicks off a new function
            correctClick();
        });
        // need a click event/function for both wrong and right clicks
        $(".incorrect").on("click", function(){
            incorrectClick();
        });
    }
    
    function askSecond () {
        let secondQuest = $("#questions").text(questions.quest2);
        let ans1 = $("#answers").text(questions.bQuest.b1);
            ans1.addClass("incorrect");
        let ans2 = $("#answers").text(questions.bQuest.b2);
            ans2.addClass("correct");
        let ans3 = $("#answers").text(questions.bQuest.b3);
            ans3.addClass("incorrect");
        let ans4 = $("#answers").text(questions.bQuest.b4);
            ans4.addClass("incorrect");
            if (clockRunning = true) {
                //this begins the countdown clock
                countDown();
                //this clears the question <p>
                $("#question").text("");
                $("#question").append(firstQuest);
                $("#answers").append(ans1, ans2, ans3, ans4);
            }
        // on click event that capture the correct click from the class we have 
        $(".correct").on("click", function(){
            //and kicks off a new function
            correctClick();
        });
        // need a click event/function for both wrong and right clicks
        $(".incorrect").on("click", function(){
            incorrectClick();
        });
    }
    
    function askThird () {
        let thirdQuest = $("#questions").text(questions.quest3);
        let ans1 = $("#answers").text(questions.cQuest.c1);
            ans1.addClass("incorrect");
        let ans2 = $("#answers").text(questions.cQuest.c2);
            ans2.addClass("incorrect");
        let ans3 = $("#answers").text(questions.cQuest.c3);
            ans3.addClass("incorrect");
        let ans4 = $("#answers").text(questions.cQuest.c4);
            ans4.addClass("correct");
            if (clockRunning = true) {
                //this begins the countdown clock
                countDown();
                //this clears the question <p>
                $("#question").text("");
                $("#question").append(firstQuest);
                $("#answers").append(ans1, ans2, ans3, ans4);
            }
        // on click event that capture the correct click from the class we have 
        $(".correct").on("click", function(){
            //and kicks off a new function
            correctClick();
        });
        // need a click event/function for both wrong and right clicks
        $(".incorrect").on("click", function(){
            incorrectClick();
        });
    }
    
    // 
    
    
    
    
    // These closing parentheses end my document ready function, and the script    
    });