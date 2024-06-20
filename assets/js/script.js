const curiosities = [
  {
    number: '1',
    title: "Ajuda a previnir doenças cardiovasculares",
    text: "1Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: '2',

    title: "Ajuda nas funções cerebrais",
    text: "2Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: '3',

    title: " Auxilia no bom humor",
    text: "3Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: '4',

    title: "Melhora o sono",
    text: "4Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: '5',

    title: "Traz energia para o corpo e reduz cãibras",
    text: "5Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: '6',

    title: "É benéfica para o sistema digestivo",
    text: "6Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
];

const content = document.querySelector(".curiosities-content");

function commenterData(content) {
  const title = document.querySelector(".curiosities-title");
  const text = document.querySelector(".text");
  const test = document.querySelector('.number')
  
  let index = clickCounter % curiosities.length;
  
  setTimeout(() => {
    const curiosity = curiosities[index];
    test.textContent = curiosity.number
    title.textContent = curiosity.title;
    text.textContent = curiosity.text;
    content.classList.remove("animation-content");
  }, 600);
}

function iterateArrayWithRightButton(content) {
  content.classList.toggle("animation-content");
  clickCounter++;
  commenterData(content);
}

function iterateArrayWithLeftButton(content) {
  content.classList.toggle("animation-content");
  clickCounter--;
  if (clickCounter < 0) {
    clickCounter = curiosities.length - 1;
  }
  commenterData(content);
}

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
let clickCounter = 0;

commenterData();

rightButton.addEventListener("click", () =>
  iterateArrayWithRightButton(content)
);
leftButton.addEventListener("click", () => iterateArrayWithLeftButton(content));
