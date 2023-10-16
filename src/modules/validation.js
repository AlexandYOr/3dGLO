const validation = () => {
    const calcBlockInput= document.querySelectorAll(".calc-block >input");
    const userNameInput = document.querySelectorAll("input[name = user_name]");
    const emailInput = document.querySelectorAll("input[name = user_email]");
    const phoneInput = document.querySelectorAll("input[name = user_phone]");
    const messageInput = document.querySelectorAll("input[name = user_message]");
  

    calcBlockInput.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/, "");
      });
    });
  

    userNameInput.forEach((name) => {
      name.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
      });
    });
  

    emailInput.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\w@-_.!~*]/gi, "");
      });
    });
  

    phoneInput.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^+()-\d]/g, "");
      });
    });

    messageInput.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9\s.,!?;:-]+/g, "");
      });
    });
    
  };



export default validation