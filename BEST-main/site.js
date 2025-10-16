
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

function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }


  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }

  
  function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  }

  
  function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }


  window.onclick = function(event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


function showSupport() {
      const employmentStatus = document.getElementById("employmentStatus").value;
      const workStatus = document.getElementById("workStatus").value;
      const barriers = document.getElementById("barriers").value;

      let supportPage = "";

      //Barriers
      switch (barriers) {
        case "drugs":
        case "alcohol":
          supportPage = "./drugs.html";
          break;
        case "mentalHealth":
        case "disability":
          supportPage = "./MentalSupport.html";
          break;
      }

      if (!supportPage) {
        if (employmentStatus === "unemployed") {
          supportPage = "./WelfareSupport.html";
        } else if (employmentStatus === "employed") {
          if (["lastMonth", "last3Months", "last9Months"].includes(workStatus)) {
            supportPage = "./UpskillingSupport.html";
          } else if (workStatus === "firedQuit") {
            supportPage = "./EmploymentSupport.html";
          } else {
            supportPage = "./BusinessSupport.html";
          }
        }
      }

      if (supportPage) {
        window.location.href = supportPage;
      } else {
        alert("Please select all required fields to get support.");
      }
    }


