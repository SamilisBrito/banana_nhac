const curiosities = [
  {
    title: "Ajuda nas funções cerebrais",
    text: "1Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    title: "Ajuda nas funções cerebrais",
    text: "2Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    title: " Auxilia no bom humor",
    text: "3Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    title: "Melhora o sono",
    text: "4Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    title: "Traz energia para o corpo e reduz cãibras",
    text: "5Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    title: "É benéfica para o sistema digestivo",
    text: "6Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
];

function commenterData() {
  const title = document.querySelector(".curiosities-title");
  const text = document.querySelector(".text");

  let index = clickCounter % curiosities.length;

  const curiosity = curiosities[index];
  title.textContent = curiosity.title;
  text.textContent = curiosity.text;
}

function iterateArrayWithRightButton() {
  console.log("right");
  clickCounter++;
  commenterData();
}

function iterateArrayWithLeftButton() {
  console.log("left");
  clickCounter--;
  if (clickCounter < 0) {
    clickCounter = curiosities.length - 1;
  }
  commenterData();
}

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
let clickCounter = 0;

commenterData();

rightButton.addEventListener("click", () => iterateArrayWithRightButton());
leftButton.addEventListener("click", () => iterateArrayWithLeftButton());
