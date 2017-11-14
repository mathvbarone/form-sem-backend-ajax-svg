(() => {
  // DECLARANDO AS VARIÁVEIS REFERENTES À INTERFACE
  const container = document.querySelector(".container");
  const form = document.querySelector(".form");
  const fields = document.querySelectorAll(".input-field");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const submitButton = document.querySelector("#submit-button");


  // FUNÇÃO DE VALIDAÇÃO DO FORM
  const validateForm = () => {
    const nameRegexp = /[a-zA-Z\-'\s]+/;
    const emailRegexp = /^[A-z0-9.-]{1,}@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
    const msgRegexp = /.*\S.*/;

    submitButton.disabled = false;

    // FUNÇÃO DE VALIDAÇÃO DO CAMPO
    const validateField = (regExp, field) => {
      if (regExp.test(field.value)) {
        field.classList.remove("is-danger");
        field.nextElementSibling.classList.add("is-hidden");
      } else {
        field.classList.add("is-danger");
        field.nextElementSibling.classList.remove("is-hidden");
        submitButton.disabled = true;
      }
    };

    const regExpAndFieldArray = [
      { regExp: nameRegexp, field: nameInput },
      { regExp: emailRegexp, field: emailInput },
      { regExp: msgRegexp, field: messageInput },
    ];

    regExpAndFieldArray.forEach((regExpAndField) => {
      validateField(regExpAndField.regExp, regExpAndField.field);
    });
  };


  // FUNÇÃO DE INICIALIZAÇÃO
  const init = () => {
    fields.forEach(field => field.addEventListener("input", validateForm));

    submitButton.addEventListener("click", (evnt) => {
      evnt.preventDefault();
    });
  };

  init();
})();
