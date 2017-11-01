const startForm = {
    // UI DECLARATION
    ui: {
        fields: document.querySelectorAll(".input-field"),
        button: document.querySelector(".button")
    },

    // FUNCTIONS
    functions: {
        formValidation: () => {
            const fields = startForm.ui.fields;
            const button = startForm.ui.button;

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