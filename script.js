
// Define your language objects
const languages = {
    'en': {
        aboutmetopbar: "ABOUT ME",
        experiencetopbar: "EXPERIENCE",
        projectstopbar: "PROJECTS",
        skillstopbar: "SKILLS",
        certificatestopbar: "CERTIFICATES",
        educationtopbar: "EDUCATION",
        contacttopbar: "CONTACT ME",
       
        cvbuttontext:"DOWNLOAD CV",

        aboutmetitle: "ABOUT ME",
        aboutmedescription: "Hi! I'm Michael Mekies, a passionate full-stack developer with over three years of experience in AR technology. I enjoy creating immersive experiences and solving challenging problems in the AR space.",
        
        experiencetitle:"EXPERIENCE",
        arvisionjobtitle:"Lead Full Stack Developer at ARVision Games",
        arvisionjobdecription:"Responsible for building ARiddle from the ground up, managing Git, DevOps, and successful launch on iOS and Google Play.",
        arvisionjobdate:"2021 - Present",
        afiajobtitle:"Founder and Lead Developer at Afia Studios",
        afiajobdescription:"Developed and released Fly Vella, a platform-based game, using Unity and a custom in-house framework.",
        afiajobdata:"2024 - Present",

        projectstitle:"PROJECTS",

        skilltitle:"SKILLS",
        proglangtitle:"PROGRAMMING LANGUAGES",
        frontendtitle:"FRONT END DEVELOPMENT",
        backendtitle:"BACK END DEVELOPMENT",

        certificatestitle:"CERTIFICATES",

        educationtitle:"EDUCATION",
        concunititle:"Concordia University",
        concunigraddate:"Graduated: 2021",
        johnabcoltitle:"John Abbott College",
        johnabcoldeg:"DEC in Applied Physics",
        johnabcolgraddate:"Graduated: 2017",

        contactmetitle:"CONTACT ME",
        formNamePlaceholder: "Your Name",
        formEmailPlaceholder: "Your Email",
        formMessagePlaceholder: "Your Message",
        formSubmitButton: "Send Message",

    },
    'fr': {
        aboutmetopbar: "SUR MOI",
        experiencetopbar: "EXPÉRIENCE",
        projectstopbar: "PROJETS",
        skillstopbar: "COMPÉTENCES",
        certificatestopbar: "CERTIFICATS",
        educationtopbar: "ÉDUCATION",
        contacttopbar: "CONTACTEZ-MOI",

        cvbuttontext:"TÉLÉCHARGER LE CV",

        aboutmetitle: "SUR MOI",
        aboutmedescription: "Salut! Je m'appelle Michael Mekies, un développeur Full Stack expérimenté et un spécialiste Unity avec plus de trois ans d'expérience dans la RA et les jeux mobiles.Compétent en C#, Unity, DevOps et Git, j'ai une expérience dans la direction de projets de la conception au lancement, y compris des expériences AR multijoueurs. Passionné par les technologies interactives, j’aime créer des applications attrayantes et performantes et j’aime collaborer entre disciplines pour donner vie à des idées innovantes.",
        
        experiencetitle:"EXPÉRIENCE",
        arvisionjobtitle:"Développeur Full Stack principal chez ARVision Games",
        arvisionjobdecription:"Responsable de la création d'ARiddle à partir de zéro, de la gestion de Git, DevOps et du lancement réussi sur iOS et Google Play.",
        arvisionjobdate:"2021 - Présent",
        afiajobtitle:"Fondateur et développeur principal chez Afia Studios",
        afiajobdescription:"Développement et publication de Fly Vella, un jeu basé sur une plateforme, utilisant Unity et un framework interne personnalisé.",
        afiajobdata:"2024 - Présent",

        projectstitle:"PROJETS",

        skilltitle:"COMPÉTENCES",
        proglangtitle:"LANGUES DE PROGRAMMATION",
        frontendtitle:"DÉVELOPPEMENT FRONT-END",
        backendtitle:"DÉVELOPPEMENT BACK-END",

        certificatestitle:"CERTIFICATS",

        educationtitle:"ÉDUCATION",
        concunititle:"Université Concordia",
        concunigraddate:"Diplômé: 2021",
        johnabcoltitle:"Collège John Abbott",
        johnabcoldeg:"DEC en physique appliquée",
        johnabcolgraddate:"Diplômé: 2017",

        contactmetitle:"CONTACTEZ-MOI",
        formNamePlaceholder: "Votre Nom",
        formEmailPlaceholder: "Votre Email",
        formMessagePlaceholder: "Votre Message",
        formSubmitButton: "Envoyer le Message",
        
    }
};

// Get the original language dropdown
const languageDropdown = document.getElementById('language');

// Get the mobile language dropdown
const mobileLanguageDropdown = document.getElementById('language-mobile');

// Add event listener for language change
function changeLanguage() {
    const selectedLanguage = this.value;

    // Get the text for the selected language
    const languageText = languages[selectedLanguage];

    // Update the text content in the HTML
    document.getElementById('aboutmetopbar').textContent = languageText.aboutmetopbar;
    document.getElementById('experiencetopbar').textContent = languageText.experiencetopbar;
    document.getElementById('projectstopbar').textContent = languageText.projectstopbar;
    document.getElementById('skillstopbar').textContent = languageText.skillstopbar;
    document.getElementById('certificatestopbar').textContent = languageText.certificatestopbar;
    document.getElementById('educationtopbar').textContent = languageText.educationtopbar;
    
    document.getElementById('cvbuttontext').textContent = languageText.cvbuttontext;

    document.getElementById('contacttopbar').textContent = languageText.contacttopbar;
    document.getElementById('aboutmetitle').textContent = languageText.aboutmetitle;
    document.getElementById('aboutmedescription').textContent = languageText.aboutmedescription;
    
    document.getElementById('experiencetitle').textContent = languageText.experiencetitle;
    document.getElementById('arvisionjobtitle').textContent = languageText.arvisionjobtitle;
    document.getElementById('arvisionjobdecription').textContent = languageText.arvisionjobdecription;
    document.getElementById('arvisionjobdate').textContent = languageText.arvisionjobdate;
    document.getElementById('afiajobtitle').textContent = languageText.afiajobtitle;
    document.getElementById('afiajobdescription').textContent = languageText.afiajobdescription;
    document.getElementById('afiajobdata').textContent = languageText.afiajobdata;

    document.getElementById('projectstitle').textContent = languageText.projectstitle;

    document.getElementById('skilltitle').textContent = languageText.skilltitle;
    document.getElementById('proglangtitle').textContent = languageText.proglangtitle;
    document.getElementById('frontendtitle').textContent = languageText.frontendtitle;
    document.getElementById('backendtitle').textContent = languageText.backendtitle;

    document.getElementById('certificatestitle').textContent = languageText.certificatestitle;

    document.getElementById('educationtitle').textContent = languageText.educationtitle;
    document.getElementById('concunititle').textContent = languageText.concunititle;
    document.getElementById('concunigraddate').textContent = languageText.concunigraddate;
    document.getElementById('johnabcoltitle').textContent = languageText.johnabcoltitle;
    document.getElementById('johnabcoldeg').textContent = languageText.johnabcoldeg;
    document.getElementById('johnabcolgraddate').textContent = languageText.johnabcolgraddate;

    document.getElementById('contactmetitle').textContent = languageText.contactmetitle;
    document.getElementById('formName').placeholder = languageText.formNamePlaceholder;
    document.getElementById('formEmail').placeholder = languageText.formEmailPlaceholder;
    document.getElementById('formMessage').placeholder = languageText.formMessagePlaceholder;
    document.getElementById('formSubmitButton').textContent = languageText.formSubmitButton;

    // Example: If you need to change success/error messages dynamically later on
    // document.getElementById('successMessage').textContent = languageText.successMessage;
    // document.getElementById('errorMessage').textContent = languageText.errorMessage;

    //alert(`Language switched to ${selectedLanguage === 'fr' ? 'French' : 'English'}!`);
};

// Add event listener to the original language dropdown
languageDropdown.addEventListener('change', changeLanguage);

// Add event listener to the mobile language dropdown
mobileLanguageDropdown.addEventListener('change', changeLanguage);



// Add an event listener for form submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const templateParams = {
        from_name: document.querySelector('input[type="text"]').value,
        message: document.querySelector('textarea').value,
        to_name: "Michael Mekies"
    };

    // Send the email using EmailJS
    emailjs.send('service_zdh86eu', 'template_t291e24', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.querySelector('.contact-form').reset(); // Clear form
    }, function(error) {
        console.log('FAILED...', error);
        alert('Message sending failed.');
    });
});

