
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function showSupport() {
  const employmentStatus = document.getElementById('employmentStatus').value;
  const workStatus = document.getElementById('workStatus').value;
  const barriers = document.getElementById('barriers').value;
  let resultText = "";

  if (employmentStatus === 'unemployed') {
    if (workStatus === 'notWorkedInNineMonths' && barriers === 'disability') {
      resultText = "We recommend the following support options for you: Routes to Work, Skills Bootcamps, Supported Internships.";
    } else {
      resultText = "We recommend the following support options for you: Routes to Work, Skills Bootcamps.";
    }
  }

  if (employmentStatus === 'employed') {
    if (workStatus === 'worked' && barriers === 'noBarriers') {
      resultText = "We recommend the following support options for you: Buckinghamshire Council jobs site, Skills Bootcamps.";
    }
  }

 
