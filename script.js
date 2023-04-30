// Show the button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  };
  
  // Scroll to the top of the page when the button is clicked
  document.getElementById("scroll-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });


  document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault(); // prevent the form from submitting
  
    // show the success message
    document.getElementById("success-message").style.display = "block";
  });
  
  