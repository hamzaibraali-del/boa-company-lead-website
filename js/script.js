(function(){
  emailjs.init("q8FuZBGFQb7tA_K8m");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "Service_9bhvxyr",
    "template_ppz6gaj",
    this
  ).then(
    function() {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      alert("FAILED... Please try again.");
      console.log(error);
    }
  );
});
