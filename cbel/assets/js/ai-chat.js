const contactBtn = document.querySelector(".contact > .fa-message");
const aiChat = document.querySelector(".ai-chat");
const aiChatCloseBtn = document.querySelector(".ai-chat-head > .fa-close");
const chatBody = document.getElementById("chatBody");

const chatAnswers = [
  {
    category: "Admissions",
    categoryQuestions: [
      {
        question: "Comment postuler au Campus SSIAVERSITY ?",
        answer:
          "Vous pouvez soumettre votre candidature en ligne via la page Admission. Vous devrez remplir le formulaire et joindre les documents demandés.",
      },
      {
        question: "Quels documents sont nécessaires pour l'admission ?",
        answer:
          "Les candidats doivent généralement fournir leur relevé de notes, une pièce d'identité valide et une lettre de motivation.",
      },
      {
        question: "Le TSAC est-il obligatoire ?",
        answer:
          "Oui, le Test Standardisé d’Aptitudes et de Compétences (TSAC) est l'évaluation officielle utilisée dans le processus d'admission du campus.",
      },
    ],
  },

  {
    category: "Bourses & Financement",
    categoryQuestions: [
      {
        question: "Qu'est-ce que la CBEL ?",
        answer:
          "La CBEL (Commission de la Bourse d’Excellence & Leadership) soutient les étudiants méritants afin qu'ils puissent suivre les programmes d'excellence des 21 collèges du campus.",
      },
      {
        question: "Comment obtenir une bourse d'excellence ?",
        answer:
          "Les étudiants doivent soumettre une candidature auprès de la CBEL et démontrer des performances académiques ainsi qu'un engagement leadership.",
      },
      {
        question: "Les bourses couvrent-elles tous les frais ?",
        answer:
          "Certaines bourses peuvent couvrir partiellement ou totalement les frais académiques selon les critères d'éligibilité.",
      },
    ],
  },

  {
    category: "Vie étudiante",
    categoryQuestions: [
      {
        question: "Existe-t-il des clubs étudiants ?",
        answer:
          "Oui, le Campus SSIAVERSITY propose plusieurs clubs étudiants dans les domaines académiques, culturels et sportifs.",
      },
      {
        question: "Y a-t-il des événements sur le campus ?",
        answer:
          "Le campus organise régulièrement des conférences, ateliers, compétitions académiques et activités culturelles.",
      },
      {
        question: "Comment contacter l'administration ?",
        answer:
          "Vous pouvez contacter l'administration via la section Contacts ou utiliser VersityBot pour obtenir des informations rapides.",
      },
    ],
  },

  {
    category: "Programmes académiques",
    categoryQuestions: [
      {
        question: "Quels programmes sont proposés à SSIAVERSITY ?",
        answer:
          "Le Campus SSIAVERSITY propose plusieurs programmes académiques à travers ses 21 collèges dans des domaines variés.",
      },
      {
        question: "Les diplômes sont-ils reconnus ?",
        answer:
          "Oui, les programmes sont conçus pour répondre aux standards académiques internationaux.",
      },
      {
        question: "Peut-on changer de programme après l'admission ?",
        answer:
          "Un changement de programme est possible sous certaines conditions et après validation de l'administration académique.",
      },
    ],
  },

  {
    category: "Campus & Infrastructures",
    categoryQuestions: [
      {
        question: "Le campus dispose-t-il d'une bibliothèque ?",
        answer:
          "Oui, le Campus SSIAVERSITY dispose d'une bibliothèque moderne offrant de nombreuses ressources académiques.",
      },
      {
        question: "Existe-t-il des espaces de travail pour les étudiants ?",
        answer:
          "Le campus met à disposition plusieurs espaces d'étude et de travail collaboratif.",
      },
      {
        question: "Le campus dispose-t-il d'installations sportives ?",
        answer:
          "Oui, les étudiants ont accès à diverses installations sportives et activités physiques.",
      },
    ],
  },

  {
    category: "Support & Assistance",
    categoryQuestions: [
      {
        question: "Comment obtenir de l'aide académique ?",
        answer:
          "Les étudiants peuvent contacter les conseillers académiques ou utiliser les services de tutorat proposés par le campus.",
      },
      {
        question: "Que faire en cas de problème technique sur le portail ?",
        answer:
          "Vous pouvez contacter le support technique via la section assistance du site.",
      },
      {
        question: "VersityBot peut-il répondre à toutes les questions ?",
        answer:
          "VersityBot peut répondre aux questions les plus fréquentes, mais pour des demandes spécifiques vous pouvez contacter l'administration.",
      },
    ],
  },
];

let aiChatOpened = false;

function appendBotMessage(text) {
  const msg = `
        <div class="bot-bubble-message" style="animation: bot-bubble-appear 0.4s ease-in-out forwards;">
            <img src="img/chat-bot-icon.jpg" alt="">
            <div class="bot-message__content"><p>${text}</p></div>
        </div>`;
  chatBody.insertAdjacentHTML("beforeend", msg);
  scrollToBottom();
}

function appendUserMessage(text) {
  const msg = `
        <div class="user-bubble-message" style="animation: user-bubble-appear 0.4s ease-in-out forwards;">
            <img src="img/default-user.jpg" alt="">
            <div class="user-message__content"><p>${text}</p></div>
        </div>`;
  chatBody.insertAdjacentHTML("beforeend", msg);
  scrollToBottom();
}

function appendCategories(categories) {
  const container = document.createElement("div");
  container.className = "bot-category";

  categories.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.category;
    p.onclick = () => handleCategoryClick(item);
    container.appendChild(p);
  });

  chatBody.appendChild(container);
  scrollToBottom();
}

function appendQuestions(questions) {
  const container = document.createElement("div");
  container.className = "bot-category";

  questions.forEach((q) => {
    const p = document.createElement("p");
    p.textContent = q.question;
    p.onclick = () => handleQuestionClick(q);
    container.appendChild(p);
  });

  chatBody.appendChild(container);
  scrollToBottom();
}

function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}

// --- LOGIQUE DE NAVIGATION ---

function initChat() {
  chatBody.innerHTML = ""; // Reset
  appendBotMessage("Une question sur SSIAVERSITY ? 👋 Ici pour vous répondre.");
  appendCategories(chatAnswers);
}

function handleCategoryClick(categoryObj) {
  appendUserMessage(categoryObj.category);

  setTimeout(() => {
    appendBotMessage(
      `Veuillez choisir une question dans la catégorie ${categoryObj.category} :`,
    );
    appendQuestions(categoryObj.categoryQuestions);
  }, 800);
}

function handleQuestionClick(questionObj) {
  setTimeout(() => {
    appendUserMessage(questionObj.question);
  }, 200);

  setTimeout(() => {
    appendBotMessage(questionObj.answer);
    appendBotMessage(
      "😊 J'espère avoir répondu correctement ! Avez-vous d'autres questions ?",
    );
    appendCategories(chatAnswers); // On réaffiche les catégories pour continuer
  }, 1000);
}

// --- GESTION DE L'OUVERTURE/FERMETURE ---

function openAiChat() {
  aiChat.style.display = "flex";
  aiChat.style.animation = "ai-chat-appear 1s forwards";
  aiChatOpened = true;
  if (chatBody.children.length === 0) initChat();
}

function closeAiChat() {
  aiChat.style.animation = "ai-chat-disappear 1s forwards";
  setTimeout(() => {
    aiChat.style.display = "none";
  }, 1000);
  aiChatOpened = false;
}

contactBtn.addEventListener("click", () => {
  aiChatOpened ? closeAiChat() : openAiChat();
});

aiChatCloseBtn.addEventListener("click", closeAiChat);
