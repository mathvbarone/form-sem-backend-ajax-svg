(() => {
  // DECLARANDO AS VARIÁVEIS REFERENTES À INTERFACE
  const fields = document.querySelectorAll(".input-field");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitButton = document.getElementById("submit-button");

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

    validateField(nameRegexp, nameInput);
    validateField(emailRegexp, emailInput);
    validateField(msgRegexp, messageInput);
  };

  // FUNÇÃO DE INICIALIZAÇÃO
  const init = () => {
    fields.forEach((field) => {
      field.addEventListener("input", validateForm);
    });
    submitButton.addEventListener("click", (evnt) => {
      evnt.preventDefault();
    });
  };

  init();
})();
