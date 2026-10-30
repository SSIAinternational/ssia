const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const questionSection = document.querySelector(".exemple-question__section");

const questionSectionTable = [
  `<div class="section__details">
                <h4><span>#</span> Raisonnement logique et analytique</h4>
                <p>
                  Cette section permet d’évaluer la capacité du candidat à
                  analyser des situations, identifier des relations logiques et
                  résoudre des problèmes.
                </p>
              </div>
              <div class="section__questions">
                <div class="question-item">
                  <p class="question__ques">Question 1</p>
                  <p class="question__ques-content">
                    Quelle est la suite logique suivante: 3 – 6 – 12 – 24 – ?
                  </p>
                  <ul>
                    <li>36</li>
                    <li>42</li>
                    <li>48</li>
                    <li>60</li>
                  </ul>
                  <p class="question-answer"><b>Réponse attendue : </b>C</p>
                </div>
                <div class="question-item">
                  <p class="question__ques">Question 2</p>
                  <p class="question__ques-content">
                    Si tous les étudiants de SSIAVERSITY doivent réussir leurs
                    examens pour obtenir leur diplôme et que Marc est étudiant à
                    SSIAVERSITY, que peut-on conclure ?
                  </p>
                  <ul>
                    <li>Marc a déjà obtenu son diplôme</li>
                    <li>
                      Marc doit réussir ses examens pour obtenir son diplôme
                    </li>
                    <li>Marc ne passera pas d’examen</li>
                    <li>Marc est déjà diplômé</li>
                  </ul>
                  <p class="question-answer"><b>Réponse attendue : </b>B</p>
                </div>
              </div>`,
  `
              <div class="section__details">
                <h4><span>#</span> Compréhension et analyse de texte</h4>
                <p>
                  Cette section évalue la capacité du candidat à lire un texte
                  académique, à comprendre ses idées principales et à analyser
                  les informations.
                </p>
              </div>
              <div class="section__questions">
                <div class="question-item">
                  <p class="question-item__text">Texte</p>
                  <p class="question-item__text-content">
                    Le Campus SSIAVERSITY est un consortium académique
                    international composé de plusieurs collèges autonomes.
                    Chaque collège possède sa propre direction académique et ses
                    exigences pédagogiques, mais tous partagent une vision
                    commune : former des étudiants capables d’évoluer dans un
                    environnement professionnel international.
                  </p>
                  <p class="question__ques">Question</p>
                  <p class="question__ques-content">
                    Quel est l’objectif principal du Campus SSIAVERSITY ?
                  </p>
                  <ul>
                    <li>Former uniquement des ingénieurs</li>
                    <li>
                      Former des étudiants capables d’évoluer dans un
                      environnement international
                    </li>
                    <li>Former uniquement des chercheurs</li>
                    <li>Former uniquement des étudiants locaux</li>
                  </ul>
                  <p class="question-answer"><b>Réponse attendue : </b>B</p>
                </div>
              </div>`,
  `
              <div class="section__details">
                <h4><span>#</span> Expression écrite et argumentation</h4>
                <p>
                  Dans cette section, le candidat doit rédiger un court texte
                  permettant d’évaluer : <br />
                  • sa capacité à structurer une idée <br />
                  • sa capacité d’analyse <br />
                  • la clarté de son raisonnement <br />
                  • sa qualité d’expression écrite <br />
                </p>
              </div>
              <div class="section__questions">
                <div class="question-item">
                  <p class="question-item__text">Sujet exemple</p>
                  <p class="question-item__text-content">
                    Expliquez en 10 à 15 lignes pourquoi la formation
                    universitaire est importante pour le développement d’une
                    société moderne.
                  </p>
                  <p class="question__ques">Ennoncer</p>
                  <p class="question__ques-content">
                    Le candidat doit présenter un texte structuré avec une
                    introduction, des arguments et une conclusion.
                  </p>
                </div>
              </div>`,
  `
              <div class="section__details">
                <h4>
                  <span>#</span> Culture académique et compréhension de
                  l’écosystème SSIA
                </h4>
                <p>
                  Cette section est spécifique au Campus SSIAVERSITY. <br />
                  Elle vise à vérifier que le candidat possède une compréhension
                  de l’écosystème SSIA et du fonctionnement du campus. <br />
                  Les candidats sont donc encouragés à effectuer des recherches
                  avant de passer l’examen, car certaines questions porteront
                  directement sur SSIA et la Blockchain SSIA. <br />
                  Cette section permet d’évaluer : <br />
                  • l’intérêt du candidat pour l’institution <br />
                  • sa capacité de recherche <br />
                  • sa compréhension du modèle éducatif SSIA <br />
                </p>
              </div>
              <div class="section__questions">
                <div class="question-item">
                  <p class="question__ques">Question 1</p>
                  <p class="question__ques-content">
                    Que signifie l’acronyme SSIA ?
                  </p>
                  <ul>
                    <li>Smart School International Alliance</li>
                    <li>Save to Save International Association</li>
                    <li>Social Science International Academy</li>
                    <li>Strategic School Innovation Alliance</li>
                  </ul>
                  <p class="question-answer"><b>Réponse attendue : </b>B</p>
                </div>
                <div class="question-item">
                  <p class="question__ques">Question 2</p>
                  <p class="question__ques-content">
                    La Blockchain SSIA est principalement utilisée pour :
                  </p>
                  <ul>
                    <li>stocker les dossiers académiques</li>
                    <li>gérer les diplômes et certifications</li>
                    <li>sécuriser les informations académiques</li>
                    <li>toutes les réponses ci-dessus</li>
                  </ul>
                  <p class="question-answer"><b>Réponse attendue : </b>D</p>
                </div>
                <div class="question-item">
                  <p class="question__ques">Question 3</p>
                  <p class="question__ques-content">
                    Le Campus SSIAVERSITY fonctionne comme :
                  </p>
                  <ul>
                    <li>une seule université centrale</li>
                    <li>un consortium de collèges universitaires</li>
                    <li>un institut technique</li>
                    <li>un centre de formation professionnelle</li>
                  </ul>
                  <p class="question-answer"><b>Réponse attendue : </b>B</p>
                </div>
              </div>`,
];

let currentSection = 0;

function displaySection() {
  questionSection.innerHTML = `${questionSectionTable[currentSection]}`;
  updateButtons();
}

function updateButtons() {
  btnLeft.disabled = currentSection === 0;
  btnRight.disabled = currentSection === questionSectionTable.length - 1;
}

displaySection();

btnLeft.addEventListener("click", () => {
  if (currentSection > 0) {
    currentSection--;
    displaySection();
  }
});

btnRight.addEventListener("click", () => {
  if (currentSection < questionSectionTable.length - 1) {
    currentSection++;
    displaySection();
  }
});
