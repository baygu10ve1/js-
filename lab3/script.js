document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const username = document.getElementById("username").value;
    const age = parseInt(document.getElementById("age").value);
    const errorMessages = [];


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Пожалуйста, введите действующую электронную почту.");
    }

    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phone)) {
        errorMessages.push("Пожалуйста, введите действительный номер телефона в формате +7 (___) ___-__-__.");
    }

   
    if (age < 18 || age > 90) {
        errorMessages.push("Возраст должен быть в диапазоне от 18 до 90 лет.");
    }

    
    const errorMessagesDiv = document.getElementById("errorMessages");
    errorMessagesDiv.innerHTML = "";

    if (errorMessages.length > 0) {
        errorMessages.forEach(msg => {
            const p = document.createElement("p");
            p.textContent = msg;
            errorMessagesDiv.appendChild(p);
        });
    } else {
        alert('Регистрация успешна!'); 
        document.getElementById("registrationForm").reset(); 
    }
});
