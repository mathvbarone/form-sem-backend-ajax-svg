const startForm = {
    // UI DECLARATION
    ui: {
        fields: document.querySelectorAll(".input-field"),
        inputs: {
            name: document.querySelector(".name"),
            email: document.querySelector(".email"),
            message: document.querySelector(".message")
        },
        button: document.querySelector(".button")
    },

    // FUNCTIONS
    functions: {
        formValidation: () => {
            // VARIÁVEIS UI
            const fields = startForm.ui.fields;
            const button = startForm.ui.button;
            const name = startForm.ui.inputs.name;
            const email = startForm.ui.inputs.email;
            const message = startForm.ui.inputs.message;

            // REGEX
            const nameRegex = /[a-zA-Z\-'\s]+/;
            const emailRegex = /^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
            const msgRegex = /.*\S.*/;

            //ERROS
            let erros = 0;

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

        }
    },

    //EVENTS
    events: {
        init: () => {
            const initUi =  startForm.ui;
            const initFunctions =  startForm.functions;

            initUi.fields.forEach( field => {
                field.addEventListener("input", initFunctions.formValidation);
            });
        }
    }
};

//INIT FUNCTION
startForm.events.init();