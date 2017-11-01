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
            //VARIÁVEIS UI PATH
            const name = startForm.ui.inputs.name;
            const email = startForm.ui.inputs.email;
            const message = startForm.ui.inputs.message;
            const input =  startForm.ui.fields;
            const button = startForm.ui.button;
        }
    },

    //EVENTS
    events: {
        init: () => {
        }
    }
};

//INIT FUNCTION
startForm.events.init();