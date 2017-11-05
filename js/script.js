const startForm = {
    // UI DECLARATION
    ui: {
        fields: document.querySelectorAll(".input-field"),
        inputs: {
            name: document.querySelector(".name"),
            email: document.querySelector(".email"),
            message: document.querySelector(".message")
        },
        button: document.querySelector(".button"),
    },

    // FUNCTIONS
    functions: {
        formValidation: () => {
            const name = startForm.ui.inputs.name;
            const email = startForm.ui.inputs.email;
            const message = startForm.ui.inputs.message;
            const input =  startForm.ui.fields;
            const button = startForm.ui.button;
            let erros = 0;

            const nameRegex = /[a-zA-Z\-'\s]+/;
            const emailRegex = /^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
            const msgRegex = /.*\S.*/;

            const regexValidation = (regexValue, input) => {
                if(regexValue.test(input.value)){
                    input.classList.remove("is-danger");
                    input.nextElementSibling.classList.add("is-hidden");
                }else{
                    input.classList.add("is-danger");
                    input.nextElementSibling.classList.remove("is-hidden");
                    erros++
                }
            };

            regexValidation(nameRegex, name);
            regexValidation(emailRegex, email);
            regexValidation(msgRegex, message);

            erros === 0 ? button.disabled = false : button.disabled = true;

        },

        sendData: e => {

            e.preventDefault();


            if (document.forms[0] && window.FormData){
                var message = new Object();
                message.loading = 'Loading...';
                message.success = 'Thank you. Application received!';
                message.failure = 'Whoops! There was a problem sending your message.';

                var form = document.forms[0];

                var statusMessage = document.createElement('div');
                statusMessage.className = 'status';

                // Set up the AJAX request
                var request = new XMLHttpRequest();
                request.open('POST', '//formspree.io/matheusbaroneteste@gmail.com', true);
                request.setRequestHeader('accept', 'application/json');

                form.addEventListener('submit', function(evt) {
                    evt.preventDefault();
                    form.appendChild(statusMessage);

                    // Create a new FormData object passing in the form's key value pairs (that was easy!)
                    var formData = new FormData(form);

                    // Send the formData
                    request.send(formData);

                    // Watch for changes to request.readyState and update the statusMessage accordingly
                    request.onreadystatechange = function () {
                        // <4 =  waiting on response from server
                        if (request.readyState < 4){
                            statusMessage.innerHTML = message.loading;
                            // 4 = Response from server has been completely loaded.
                        }
                        else if (request.readyState === 4) {
                            // 200 - 299 = successful
                            if (request.status == 200 && request.status < 300){
                                setInterval(function(){
                                    statusMessage.innerHTML = message.success;
                                }, 3000);
                            }
                            else{
                                form.insertAdjacentHTML('beforeend', message.failure);
                            }

                        }
                    }
                });



            }


        }

    },

    //EVENTS
    events: {
        init: () => {
            const initUi =  startForm.ui;
            const initFunctions =  startForm.functions;
            const mainForm = document.querySelector(".form");

            initUi.fields.forEach( field => {
                field.addEventListener("input", initFunctions.formValidation);
            });

            mainForm.addEventListener("submit", initFunctions.sendData);


        }
    }
};


startForm.events.init();