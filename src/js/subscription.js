      document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach((link) => {
          link.addEventListener("click", function (e) {
            navLinks.forEach((l) => {
              l.classList.remove("text-primary", "font-medium", "bg-primary/5");
              l.classList.add("text-gray-700");
            });
            this.classList.remove("text-gray-700");
            this.classList.add("text-primary", "font-medium", "bg-primary/5");
          });
        });
        const cardNumberInput = document.getElementById("cardNumber");
        if (cardNumberInput) {
          cardNumberInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, "");
            let formattedValue = "";
            for (let i = 0; i < value.length; i++) {
              if (i > 0 && i % 4 === 0) {
                formattedValue += " ";
              }
              formattedValue += value[i];
            }
            e.target.value = formattedValue;
          });
        }
        // Expiration date formatting
        const expDateInput = document.getElementById("expDate");
        if (expDateInput) {
          expDateInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 2) {
              value = value.substring(0, 2) + "/" + value.substring(2);
            }
            e.target.value = value;
          });
        }
      });
      document.addEventListener("DOMContentLoaded", function () {
        // Plan card selection
        const planCards = document.querySelectorAll(".plan-card");
        planCards.forEach((card) => {
          card.addEventListener("click", function () {
            // Don't allow deselecting the current plan
            if (this.classList.contains("selected")) {
              return;
            }
            // Remove selected class from all cards
            planCards.forEach((c) => {
              if (!c.querySelector(".absolute")) {
                // Don't change the current plan
                c.classList.remove("selected", "border-primary", "border-2");
                c.classList.add("border-gray-200", "border");
                const button = c.querySelector("button");
                button.classList.remove(
                  "bg-primary",
                  "text-white",
                  "hover:bg-primary/90"
                );
                button.classList.add(
                  "border",
                  "border-gray-300",
                  "text-gray-700",
                  "hover:bg-gray-50"
                );
                button.textContent = "Select Plan";
              }
            });
            // Add selected class to clicked card if it's not the current plan
            if (!this.querySelector(".absolute")) {
              this.classList.add("selected", "border-primary", "border-2");
              this.classList.remove("border-gray-200", "border");
              const button = this.querySelector("button");
              button.classList.add(
                "bg-primary",
                "text-white",
                "hover:bg-primary/90"
              );
              button.classList.remove(
                "border",
                "border-gray-300",
                "text-gray-700",
                "hover:bg-gray-50"
              );
              button.textContent = "Selected";
            }
          });
        });
      });