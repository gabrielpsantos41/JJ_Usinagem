    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 50) {
        navbar.style.padding = '12px 0';
        navbar.style.background = 'rgba(2, 6, 23, 0.98)';
      } else {
        navbar.style.padding = '18px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
      }
    });

    document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("orcamentoForm");

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const modal = new bootstrap.Modal(
            document.getElementById("successModal")
        );

        modal.show();

        let enviado = false;

        function enviarFormulario(){

            if(enviado) return;

            enviado = true;

            form.submit();

        }

        setTimeout(enviarFormulario,3000);

        document
            .getElementById("redirectNow")
            .addEventListener("click", enviarFormulario);

        document
            .getElementById("closeModalButton")
            .addEventListener("click", enviarFormulario);

    });

});