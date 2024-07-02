document.addEventListener('DOMContentLoaded', (event) => {
  const firebaseConfig = {
    apiKey: "AIzaSyA5SKs6yGPF-vKQHlZD3wASUxheT-4WQL4",
    authDomain: "portfolio-baf84.firebaseapp.com",
    databaseURL: "https://portfolio-baf84-default-rtdb.firebaseio.com",
    projectId: "portfolio-baf84",
    storageBucket: "portfolio-baf84.appspot.com",
    messagingSenderId: "549562724484",
    appId: "1:549562724484:web:160a558af3a5fd6f7b12d1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference Database
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name').trim();
    var emailid = getElementVal('emailid').trim();
    var msgContent = getElementVal('msgContent').trim();

    // Check if any fields are empty
    if (!name || !emailid || !msgContent) {
      displayErrorMessage();
      return; // Do not proceed if validation fails
    }

    saveMessages(name, emailid, msgContent);

    // Enable alert
    document.querySelector('.alert').style.display = 'block';

    // Remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Reset the form
    document.getElementById('contactForm').reset();
  }

  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  const displayErrorMessage = () => {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.style.display = 'block';
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);
    }
  };
});
