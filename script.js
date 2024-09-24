document.getElementById('language').addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'fr') {
        alert("Language switched to French! (You can implement actual language switching here)");
    } else {
        alert("Language switched to English! (You can implement actual language switching here)");
    }
});
