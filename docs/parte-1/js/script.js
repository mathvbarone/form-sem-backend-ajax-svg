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
            const fields = startForm.ui.fields;
            const button = startForm.ui.button;
            const name = startForm.ui.inputs.name;
            const email = startForm.ui.inputs.email;
            const message = startForm.ui.inputs.message;


            fields.forEach( field => {
                field.value.length === 0 ? button.disabled = true : button.disabled = false;
            });
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