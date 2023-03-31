function navCheck() {
    document.querySelector('.checkBox').checked = false;
}

function menuVanish() {
    var x = document.getElementById("topNav");
    if (x.className === "menuItems") {
        x.className += " jsVanish";
      x.className -= "menuItems";
    } else {
      x.className += " menuItems";
      x.className -= "jsVanish";
    }
  }

//Pause every other button for 1 second to prevent spam break.
function buttonPause() {
    setTimeout(pauser, 10)
    function pauser() {
        document.getElementById('slide1').disabled = true;
        document.getElementById('slide2').disabled = true;
        document.getElementById('slide3').disabled = true;
        document.getElementById('slide4').disabled = true;
    }
    setTimeout(starter, 1100)
    function starter() {
        document.getElementById('slide1').disabled = false;
        document.getElementById('slide2').disabled = false;
        document.getElementById('slide3').disabled = false;
        document.getElementById('slide4').disabled = false;
    }
}

function closeOverlay() {
    const slide1W8 = document.querySelectorAll('.appOverlay');
        for (let i = 0; i < slide1W8.length; i++) {   
        slide1W8[i].style.display = 'none';
        }
        const slide1W31 = document.querySelectorAll('.bodyChange');
        for (let i = 0; i < slide1W31.length; i++) {   
            slide1W31[i].style.overflowY = 'visible';
        }
}

function openOverlay() {
    window.scrollTo(0,0);
    const slide1W8 = document.querySelectorAll('.appOverlay');
        for (let i = 0; i < slide1W8.length; i++) {   
        slide1W8[i].style.display = 'block'; 
        }
    const slide1W31 = document.querySelectorAll('.bodyChange');
        for (let i = 0; i < slide1W31.length; i++) {   
            slide1W31[i].style.overflowY = 'hidden';
        }
}

//SLIDE 1 IN
function slide1In() {
    const slide1W31 = document.querySelectorAll('.FrontPage');
        for (let i = 0; i < slide1W31.length; i++) {   
            slide1W31[i].style.overflowY = 'hidden';
            }

    //Make button unclickable
    document.getElementById('slide1').disabled = true;

    //Adding display back.
    const slide1W8 = document.querySelectorAll('.AboutMeWrapper');
        for (let i = 0; i < slide1W8.length; i++) {   
        slide1W8[i].style.display = 'block';
        }
    //For making slide1 button selected.
    document.getElementById("slide1").className += " selected";

    
    //Paragraph
    const slide1W7 = document.querySelectorAll('.paragraphLayer');
    for (let i = 0; i < slide1W7.length; i++) {   
        slide1W7[i].style.animationName = 'slide1-wrapperP2';
    }
    const slide1PARA = document.querySelectorAll('.paragraphLayer');
    for (let i = 0; i < slide1PARA.length; i++) {   
        slide1PARA[i].style.display = 'block';
    }

    //First Name
    const slide1W = document.querySelectorAll('.firstNameWrapper');
    for (let i = 0; i < slide1W.length; i++) {   
        slide1W[i].style.animationName = 'slide1-wrapperFN2';
    }

    //Last Name
    const slide1W2 = document.querySelectorAll('.lastNameWrapper');
    for (let i = 0; i < slide1W2.length; i++) {   
        slide1W2[i].style.animationName = 'slide1-wrapperLN2';
    }

    //Rocket
    const slide1W3 = document.querySelectorAll('.rocketWrapper');
    for (let i = 0; i < slide1W3.length; i++) {   
        slide1W3[i].style.animationName = 'rocketIn';
    }
}

//SLIDE 1 OUT
function slide1Out() {
//For closing slide1. 
    //Make button clickable
    document.getElementById('slide1').disabled = false;

    //De-selecting slide1 button.
    var element = document.getElementById("slide1");
    element.classList.remove("selected");

    //First Name
    const slide1W = document.querySelectorAll('.firstNameWrapper');
    for (let i = 0; i < slide1W.length; i++) {   
        slide1W[i].style.animationName = 'slide1-wrapperFN';
    }

    //Last Name
    const slide1W2 = document.querySelectorAll('.lastNameWrapper');
    for (let i = 0; i < slide1W2.length; i++) {   
        slide1W2[i].style.animationName = 'slide1-wrapperLN';
    }

    //Rocket
    const slide1W3 = document.querySelectorAll('.rocketWrapper');
    for (let i = 0; i < slide1W3.length; i++) {   
        slide1W3[i].style.animationName = 'rocketOut';
    }

    //Paragraph
    const slide1W7 = document.querySelectorAll('.paragraphLayer');
    for (let i = 0; i < slide1W7.length; i++) {   
        slide1W7[i].style.animationName = 'slide1-wrapperP';
    }

    
    //Remove display with 1 second delay for animations.
    setTimeout(disappear, 1000)
    function disappear() {
        const slide1W8 = document.querySelectorAll('.AboutMeWrapper');
        for (let i = 0; i < slide1W8.length; i++) {   
        slide1W8[i].style.display = 'none';
        }
        const slide1W31 = document.querySelectorAll('.FrontPage');
        for (let i = 0; i < slide1W31.length; i++) {   
        slide1W31[i].style.overflowY = 'visible';
        }
        const slide1PARA = document.querySelectorAll('.paragraphLayer');
        for (let i = 0; i < slide1PARA.length; i++) {   
        slide1PARA[i].style.display = 'none';
        }
    }
}

//SLIDE 2 IN
function slide2In() {
    //Make button unclickable
    document.getElementById('slide2').disabled = true;

    const slide1W9a = document.querySelectorAll('.skillsWrapper');
        for (let i = 0; i < slide1W9a.length; i++) {   
        slide1W9a[i].style.display = 'flex';
        }
    
    //Adds display back and checks window size. If mobile, changes to make skills list go below paragraph.
    function skillsIn(min200) {
        if (min200.matches) {
            const slide1W9b = document.querySelectorAll('.ballWrapper');
            for (let i = 0; i < slide1W9b.length; i++) {   
            slide1W9b[i].style.float = 'left'; 
            }
            const slide1W9h = document.querySelectorAll('.skillsWrapper');
            for (let i = 0; i < slide1W9h.length; i++) {   
                slide1W9h[i].style.display = 'block'; 
            }
        }
        else {
            const slide1W9g = document.querySelectorAll('.ballWrapper');
            for (let i = 0; i < slide1W9g.length; i++) {   
                slide1W9g[i].style.float = 'right'; 
            }
            const slide1W9a = document.querySelectorAll('.skillsWrapper');
            for (let i = 0; i < slide1W9a.length; i++) {   
            slide1W9a[i].style.display = 'flex'; 
            }
        }
    }
    var min200 = window.matchMedia("(min-width: 200px) and (max-width: 1350px)")
    skillsIn(min200)

    //Change animation name to add chart
    const slide1W = document.querySelectorAll('.skillsWrapper');
    for (let i = 0; i < slide1W.length; i++) {   
        slide1W[i].style.animationName = 'windowIn';
    }
    const slide1W31 = document.querySelectorAll('.skillsWrapper');
        for (let i = 0; i < slide1W31.length; i++) {   
            slide1W31[i].style.animationDuration = '1s';
            }

    //For making slide2 button selected.
    document.getElementById("slide2").className += " selected";
}

//SLIDE 2 OUT
function slide2Out() {
//For closing slide2. 
        //Make button clickable
        document.getElementById('slide2').disabled = false;
        //De-selecting slide2 button.
        var element2 = document.getElementById("slide2");
        element2.classList.remove("selected");

        //Change animation name to remove chart
        const slide1W11 = document.querySelectorAll('.skillsWrapper');
        for (let i = 0; i < slide1W11.length; i++) {   
        slide1W11[i].style.animationName = 'windowOut';
            }
            const slide1W31 = document.querySelectorAll('.skillsWrapper');
        for (let i = 0; i < slide1W31.length; i++) {   
            slide1W31[i].style.animationDuration = '5s';
            }

    //Remove display with 1 second delay for animations.
    setTimeout(disappear2, 1000)
    function disappear2() {
        const slide1W9a = document.querySelectorAll('.skillsWrapper');
        for (let i = 0; i < slide1W9a.length; i++) {   
        slide1W9a[i].style.display = 'none';
        }
    }
}

//SLIDE 3 IN 
function slide3In() {
    //Make button unclickable
    document.getElementById('slide3').disabled = true;

    const slide1W9ab = document.querySelectorAll('.projectsPage');
    for (let i = 0; i < slide1W9ab.length; i++) {   
        slide1W9ab[i].style.display = 'flex';
    }

    //Adding display back.
    const slide1W9a = document.querySelectorAll('.projectsPage');
        for (let i = 0; i < slide1W9a.length; i++) {   
        slide1W9a[i].style.display = 'block';
        }
    //Change animation name to input.
    const slide1W = document.querySelectorAll('.projectsWrapper');
    for (let i = 0; i < slide1W.length; i++) {   
        slide1W[i].style.animationName = 'wrapperIn';
    }
    //For making slide3 button selected.
    document.getElementById("slide3").className += " selected";
}

//SLIDE 3 OUT
function slide3Out() {
//For closing slide3. 
        //Make button clickable
        document.getElementById('slide3').disabled = false;
        //De-selecting slide3 button.
        var element2 = document.getElementById("slide3");
        element2.classList.remove("selected");

        //Change animation name to remove chart
        const slide1W11 = document.querySelectorAll('.projectsWrapper');
        for (let i = 0; i < slide1W11.length; i++) {   
        slide1W11[i].style.animationName = 'wrapperOut';
            }

    //Remove display with 1 second delay for animations.
    setTimeout(disappear3, 1000)
    function disappear3() {
        const slide1W9a = document.querySelectorAll('.projectsPage');
        for (let i = 0; i < slide1W9a.length; i++) {   
        slide1W9a[i].style.display = 'none';
        }
    }
}

//SLIDE 4 IN - CONTACT PAGE
function slide4In() {
    //For making slide4 button selected.
    document.getElementById("slide4").className += " selected";

    //Make button unclickable
    document.getElementById('slide4').disabled = true;

    const slide1W9ab = document.querySelectorAll('.contactPage');
    for (let i = 0; i < slide1W9ab.length; i++) {   
        slide1W9ab[i].style.display = 'flex';
    }

    //Adding display back.
    const slide1W9a = document.querySelectorAll('.contactPage');
        for (let i = 0; i < slide1W9a.length; i++) {   
        slide1W9a[i].style.display = 'block';
        }

    //Change animation name to add input boxes
    const slide1W11 = document.querySelectorAll('.formFormR');
    for (let i = 0; i < slide1W11.length; i++) {   
    slide1W11[i].style.animationName = 'boxesIn';
    }
    const slide1W12 = document.querySelectorAll('.formFormL');
    for (let i = 0; i < slide1W12.length; i++) {   
        slide1W12[i].style.animationName = 'boxesIn';
    }
    const slide1W13 = document.querySelectorAll('.formFormM');
    for (let i = 0; i < slide1W13.length; i++) {   
        slide1W13[i].style.animationName = 'boxesIn';
    }
    const abc = document.querySelectorAll('.up');
    for (let i = 0; i < abc.length; i++) {   
        abc[i].style.animationName = 'wrapperIn';
    }
    const cba = document.querySelectorAll('.contactHeader');
    for (let i = 0; i < cba.length; i++) {   
        cba[i].style.animationName = 'boxesIn';
    }

    //Change Animation Duration on load in
    const slide1W11a = document.querySelectorAll('.formFormR');
    for (let i = 0; i < slide1W11.length; i++) {   
    slide1W11[i].style.animationDuration = '1s';
    }
    const slide1W12a = document.querySelectorAll('.formFormL');
    for (let i = 0; i < slide1W12a.length; i++) {   
        slide1W12a[i].style.animationDuration = '1s';
    }
    const slide1W13a = document.querySelectorAll('.formFormM');
    for (let i = 0; i < slide1W13a.length; i++) {   
        slide1W13a[i].style.animationDuration = '1s';
    }
}

//SLIDE 4 OUT - CONTACT PAGE
function slide4Out() {
    //Make button clickable
    document.getElementById('slide4').disabled = false;

    //De-selecting slide4 button.
    var element2 = document.getElementById("slide4");
    element2.classList.remove("selected");

    //Change animation name to remove input boxes
    const slide1W11 = document.querySelectorAll('.formFormR');
    for (let i = 0; i < slide1W11.length; i++) {   
    slide1W11[i].style.animationName = 'boxesOut';
    }
    const slide1W12 = document.querySelectorAll('.formFormL');
    for (let i = 0; i < slide1W12.length; i++) {   
        slide1W12[i].style.animationName = 'boxesOut';
    }
    const slide1W13 = document.querySelectorAll('.formFormM');
    for (let i = 0; i < slide1W13.length; i++) {   
        slide1W13[i].style.animationName = 'boxesOut';
    }
    const abc = document.querySelectorAll('.up');
    for (let i = 0; i < abc.length; i++) {   
        abc[i].style.animationName = 'boxesOut';
    }
    const cba = document.querySelectorAll('.contactHeader');
    for (let i = 0; i < cba.length; i++) {   
        cba[i].style.animationName = 'boxesOut';
    }

    //Change Animation Duration on load out
    const slide1W11a = document.querySelectorAll('.formFormR');
    for (let i = 0; i < slide1W11.length; i++) {   
    slide1W11[i].style.animationDuration = '1s';
    }
    const slide1W12a = document.querySelectorAll('.formFormL');
    for (let i = 0; i < slide1W12a.length; i++) {   
        slide1W12a[i].style.animationDuration = '1s';
    }
    const slide1W13a = document.querySelectorAll('.formFormM');
    for (let i = 0; i < slide1W13a.length; i++) {   
        slide1W13a[i].style.animationDuration = '5s';
    }

    //Remove display with 1 second delay for animations.
    setTimeout(disappear4, 1000)
    function disappear4() {
        const slide1W9a = document.querySelectorAll('.contactPage');
        for (let i = 0; i < slide1W9a.length; i++) {   
        slide1W9a[i].style.display = 'none';
        }
    }

}