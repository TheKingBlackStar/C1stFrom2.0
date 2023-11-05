/*const form = document.forms['submit-to-google-sheet'];
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzVZQAMyBuXxwPRn-mZSJIAJnfIwutxKp8cjfkBbZF5J-uixXbNpsFrsFPoOlfkE_zbkQ/exec';

        form.addEventListener('submit', async e => {
            e.preventDefault();

            // Set submission date and time values
            const submissionDateField = document.getElementById('submissionDate');
            const submissionTimeField = document.getElementById('submissionTime');
            const now = new Date();

            submissionDateField.value = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
            submissionTimeField.value = now.toTimeString().split(' ')[0]; // Format: HH:MM:SS

            // Submit the form data to Google Sheets
            try {
                const formData = new FormData(form);
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: formData
                });

                console.log('Google Sheets Success!', response);
            } catch (error) {
                console.error('Error:', error);
            }
        });*/
