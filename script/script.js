document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('testDriveForm');
    const successMsg = document.getElementById('successMessage');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const selectedModel = document.getElementById('model').value;

        if (name !== "" && email !== "" && phone !== "" && selectedModel !== "") {
            form.classList.add('opacity-50'); 
            const formData = new FormData(form);
            
            try {
                const response = await fetch('https://formspree.io/f/xlgzwadg', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    successMsg.classList.remove('d-none');
                    form.reset();
                    setTimeout(() => {
                        successMsg.classList.add('d-none');
                        form.classList.remove('opacity-50');
                    }, 4000);
                } else {
                    alert("Oops! There was a problem submitting your request.");
                    form.classList.remove('opacity-50');
                }
            } catch (error) {
                alert("Network error. Please try again.");
                form.classList.remove('opacity-50');
            }
        }
    });
});