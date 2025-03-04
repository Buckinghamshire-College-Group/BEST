/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// Function to toggle the dropdown menu in the navbar
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Shows Support for choices
function showSupport() {
  const employmentStatus = document.getElementById('employmentStatus').value;
  const workStatus = document.getElementById('workStatus').value;
  const barriers = document.getElementById('barriers').value;
  let resultText = "";

  // Unemployed users
  if (employmentStatus === 'unemployed') {
    if (workStatus === 'notWorkedInNineMonths' && barriers === 'disability') {
      resultText = "We recommend the following support options for you: Routes to Work, Skills Bootcamps, Supported Internships.";
    } else {
      resultText = "We recommend the following support options for you: Routes to Work, Skills Bootcamps.";
    }
  }

  // Empolyed users
  if (employmentStatus === 'employed') {
    if (workStatus === 'worked' && barriers === 'noBarriers') {
      resultText = "We recommend the following support options for you: Buckinghamshire Council jobs site, Skills Bootcamps.";
    }
  }

  // Display the result
  document.getElementById('supportResult').innerHTML = resultText;
}

