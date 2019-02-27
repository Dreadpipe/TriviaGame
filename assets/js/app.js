/*
Hilarious bug list:
1) There's a delay in the functions somewhere- it causes a question to append twice after a couple seconds- ON TOP of another appended item.  The second question pops up immediately, instead of displaying the win/loss message.  Then, after a 3 second delay, the next question appends on top of it.
2) When you get a question wrong or right, both second and third questions append
3) THEN, if you click any button, it will double upon itself, expanding exponentially
4) Not a js or jq thing, but my initialize button refuses to center on the jumbotron.  I have tried personal CSS and bootstrap CSS to no avail.  It is married to the left and I hate it.
5) Timer continues to rapidly decrease on multiple presses; we reviewed a fix in class.  Need to find and apply.
6) Timer not resetting properly.  Continues countdown regardless of clear commands.  I'm sure the error is syntactical.
7) When time runs out, timeUp executes, but for some reason the number 1 is appended alongside "time's up!" message
*/

/* jQuery needs the document ready function because I am not a sophisticated
developer and I could screw up my page.  I will add a comment above my closing
parentheticals to ensure I don't forget to properly close it!*/

$(document).ready(function() {

    // The actual jQuery/javascript goes here
    
    // I need global variables here:
    // clock running, correct guess, wrong guess
    // REMINDER: LET AND CONST ONLY!  all else fails, go for var, but you'll pay for it
    let clockRunning = false;
    // VSC suggests these variables aren't being read, and yet I read them later- global issue here?
    let rightGuess = 0;
    let wrongGuess = 0;
    // question counter variable will need to trigger later
    // i.e. -  questCounter++; if questCounter = x; where "x" number of questions asked
    let questCounter = 0;
    
    // I'm going to make a super object that holds all of my questions
    const questions = {
        quest1 : "Question one goes here",
        // will use alphabet instead of numbers to store answers, makes edits quicker
        aQuest : {
            a1 : "INCORRECT",
            a2 : "CORRECT",
            a3 : "WRONG",
            a4 : "NOT RIGHT"
        },
    // Naming convention "quest1, quest2" is redundant; may get confusing, consider switching
        quest2 : "Question two goes here",
        bQuest : {
            b1 : "NOPE",
            b2 : "NADA",
            b3 : "YEP",
            b4 : "NO",
    
        },
    // Start with three questions, if you can get working, extend the object
        quest3 : "Question three goes here",
        cQuest : {
            c1 : "This one?",
            c2 : "That one?",
            c3 : "Over here?",
            c4 : "Boom!",
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
    let timerCount = setInterval(countDown, 1000)
    
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
        $("#time").append("Time's up!")
        // NOTE: WILL NEED BUTTON TO RETURN
    }
    
    // This gives the button an on-click event that kicks off my first question
    $("#button").on("click", function(){
        clockRunning = true;
        //hides the button and rules on click
        $("#button").hide();
        $("#rules").hide();
        askFirst();
        // NOTE: WILL NEED BUTTON TO DISAPPEAR
    });
    
    // First question function
    // Need to find way to optimize - seems like a lot of repetition
    function askFirst () {
        //this variable increases the counter so my later correctClick function moves to the next counter
        questCounter++;
        //texts the contents of the object to the appropriate id
        let firstQuest = $("#questions").text(questions.quest1);
        let ans1 = $("#answers").append("<button>" + questions.aQuest.a1 + "</button>");
            ans1.addClass("correct");
        let ans2 = $("#answers").append("<button>" + questions.aQuest.a2 + "</button>");
            ans2.addClass("incorrect");
        let ans3 = $("#answers").append("<button>" + questions.aQuest.a3 + "</button>");
            ans3.addClass("incorrect");
        let ans4 = $("#answers").append("<button>" + questions.aQuest.a4 + "</button>");
            ans4.addClass("incorrect");
            if (clockRunning = true) {
                //this begins the countdown clock
                countDown();
                //this clears the question <p>
                //$("#questions").append("");
                $("#questions").append(firstQuest);
                $("#answers").append(ans1, ans2, ans3, ans4);
            }
        // on click event that capture the correct click from the class we have 
        $(".correct").on("click", function(){
            //and kicks off a new function
            correctClick();
            rightGuess++;
        });
        // need a click event/function for both wrong and right clicks
        $(".incorrect").on("click", function(){
            incorrectClick();
            wrongGuess++;
        });
    }
    
    function askSecond () {
        questCounter++;
        let secondQuest = $("#questions").text(questions.quest2);
        let ans1 = $("#answers").append("<button>" + questions.bQuest.b1 + "</button>");
            ans1.addClass("incorrect");
        let ans2 = $("#answers").append("<button>" + questions.bQuest.b2 + "</button>");
            ans2.addClass("incorrect");
        let ans3 = $("#answers").append("<button>" + questions.bQuest.b3 + "</button>");
            ans3.addClass("correct");
        let ans4 = $("#answers").append("<button>" + questions.bQuest.b4 + "</button>");
            ans4.addClass("incorrect");
            if (clockRunning = true) {
                //this begins the countdown clock
                countDown();
                //this clears the question <p>
                //$("#questions").text("");
                $("#questions").append(secondQuest);
                $("#answers").append(ans1, ans2, ans3, ans4);
            }
        // on click event that capture the correct click from the class we have 
        $(".correct").on("click", function(){
            //and kicks off a new function
            correctClick();
            //alternate solution here that moves game forward
            // if (questCounter = 0 || 1) {
            //     askSecond();
            // }
            // else if (questCounter = 2) {
            //     askThird();
            // }
        });
        // need a click event/function for both wrong and right clicks
        $(".incorrect").on("click", function(){
            incorrectClick();
        });
    };
    
    function askThird () {
        questCounter++
        let thirdQuest = $("#questions").text(questions.quest3);
        let ans1 = $("#answers").append("<button>" + questions.cQuest.c1 + "</butoon>");
            ans1.addClass("incorrect");
        let ans2 = $("#answers").append("<button>" + questions.cQuest.c2 + "</butoon>");
            ans2.addClass("incorrect");
        let ans3 = $("#answers").append("<button>" + questions.cQuest.c3 + "</butoon>");
            ans3.addClass("incorrect");
        let ans4 = $("#answers").append("<button>" + questions.cQuest.c4 + "</butoon>");
            ans4.addClass("correct");
            if (clockRunning = true) {
                //this begins the countdown clock
                countDown();
                //this clears the question <p>
                //$("#questions").text("");
                $("#questions").append(thirdQuest);
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
    };
    
    //I need a function that responds to correct/incorrect clicks

    function correctClick () {
        //stores the win
        rightGuess++;
        //clears the clock display
        $("#time").text("");
        //changes question display to affirming message
        $("#questions").text("Neat!  You're really smart and your mom is proud.");
        //clears the answers field
        $("#answers").text("");
        //clear the timer, reset later
        clearTimeout(timerCount);
        //kicks off the next question; careful with the order-of-operations
        //need all to resolve when questCounter hits 3
        if (questCounter >= 4) {
            //append victory/failure message, wipe the board
            //display rightGuess and wrongGuess score
            //chide or celebrate
            $(".empty").hide();
            $("#button").text("Try again?")
            $("#button").show();
            $("#button").on("click", function(){
                questCounter = 0;
                $("#questions").empty();
                $("#answers").empty();
                askFirst();
                $(".empty").show();
            })
        }
        else if (questCounter = 1) {   
            //creates delay between victory/failure messages; starts next function
            setTimeout(askSecond, setInterval(1000 * 3))
        }
        else {
            setTimeout(askThird, setInterval(1000 * 3));
        }


    };

    function incorrectClick () {
        wrongGuess++;
        $("#time").text("");
        //changes question display to chiding message
        $("#questions").text("Nope!  Your mother is very disappointed.");
        //clears the answers field
        $("#answers").text("");
        //clear the timer, reset later
        clearTimeout(timerCount);

        if (questCounter >= 4) {
            //append victory/failure message, wipe the board
            //display rightGuess and wrongGuess score
            //chide or celebrate
            $(".empty").hide();
            $("#button").text("Try again?")
            $("#button").show();
            $("#button").on("click", function(){
                questCounter = 0;
                $("#questions").empty();
                $("#answers").empty();
                askFirst();
                $(".empty").show();
            })
            

            
        }
        // else if (questCounter = 2) {
        //     //do I call the variable or the function... I think the function-
        //     setTimeout(askThird, 1000 * 3)
        // }
        // else if (questCounter = 1) {
        //     setTimeout(askSecond, 1000 * 3);
        // }
    };
    
    
    
    
// These closing parentheses end my document ready function, and the script    
});