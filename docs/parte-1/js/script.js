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