var isNight = false;

function clickHandler() {
    isNight = isNight === false ? true : false;
    if (isNight) {
        document.getElementById('name').style.color = "white";        
        document.getElementById('contactlink').style.color = "white";        
        document.getElementById('resumelink').style.color = "white";     
        document.getElementById('itself').style.background = "white";        
        document.getElementById('eyeleft').style.background = "#284055";        
        document.getElementById('eyeright').style.background = "#284055";        
        document.getElementById('background').style.background = "#284055";        
    } else {
        document.getElementById('name').style.color = "#284055";
        document.getElementById('contactlink').style.color = "#284055";        
        document.getElementById('resumelink').style.color = "#284055";     
        document.getElementById('itself').style.background = "#284055";        
        document.getElementById('eyeleft').style.background = "white";        
        document.getElementById('eyeright').style.background = "white";        
        document.getElementById('background').style.background = "white";        
    }
}

var elem = document.getElementById('clickable');
elem.addEventListener('click', clickHandler, false);
