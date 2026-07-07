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

    const form = document.getElementById("contactForm");

    if (!form) return;

    const button = document.getElementById("submitBtn");

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        button.disabled = true;

        button.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2"></span>
            Enviando...
        `;

        const formData = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: "POST",

                body: formData

            });

            if (response.ok) {

                form.reset();

                const modal = new bootstrap.Modal(
                    document.getElementById("successModal")
                );

                modal.show();

                setTimeout(() => {

                    modal.hide();

                }, 3000);

            } else {

                alert("Não foi possível enviar sua mensagem.");

            }

        } catch (error) {

            alert("Erro ao enviar. Tente novamente.");

        }

        button.disabled = false;

        button.innerHTML = "Enviar mensagem";

    });

});