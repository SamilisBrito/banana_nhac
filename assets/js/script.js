const curiosities = [
  {
    number: "1",
    title: "Ajuda a prevenir doenças cardiovasculares",
    text: "Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: "2",
    title: "Ajuda nas funções cerebrais",
    text: "Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: "3",
    title: "Auxilia no bom humor",
    text: "Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: "4",
    title: "Melhora o sono",
    text: "Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: "5",
    title: "Traz energia para o corpo e reduz cãibras",
    text: "Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
  {
    number: "6",
    title: "É benéfica para o sistema digestivo",
    text: "Consumir banana regularmente ajuda nas atividades do cérebro, como raciocinar, memorizar e manter a concentração. A ingestão adequada de banana também reduz o risco de acidente vascular cerebral, conhecido como derrame. O triptofano é o responsável por isso, um aminoácido essencial para a produção de serotonina, o hormônio da felicidade.",
  },
];

function commenterData(content) {
  const title = document.querySelector(".curiosities-title");
  const text = document.querySelector(".text");
  const test = document.querySelector(".number");

  let index = clickCounter % curiosities.length;

  setTimeout(() => {
    const curiosity = curiosities[index];
    test.textContent = curiosity.number;
    title.textContent = curiosity.title;
    text.textContent = curiosity.text;
    if (content && content.classList.length === 2) {
      content.classList.remove("animation-content");
    }
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

function toggleMenu(mobileButton, event) {
  const nav = document.querySelector(".header-nav");

  if (mobileButton.textContent === "menu") {
    mobileButton.textContent = "close";
    event.currentTarget.setAttribute("aria-expanded", "true");
    event.currentTarget.setAttribute("aria-label", "abrir menu");
  } else {
    mobileButton.textContent = "menu";
    event.currentTarget.setAttribute("aria-expanded", "false");
    event.currentTarget.setAttribute("aria-label", "fechar menu");
  }
  nav.classList.toggle("active");
}

const content = document.querySelector(".curiosities-content");
const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
const mobileButton = document.getElementById("btn-mobile");
const switcher = document.querySelector(".btn");

let clickCounter = 0;

if (content) {
  commenterData(content);

  rightButton.addEventListener("click", () =>
    iterateArrayWithRightButton(content)
  );
  leftButton.addEventListener("click", () =>
    iterateArrayWithLeftButton(content)
  );

  mobileButton.addEventListener("click", (event) =>
    toggleMenu(mobileButton, event)
  );
} else {
  console.error("Elemento '.curiosities-content' não encontrado.");
}

switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  let className = document.body.className;
  if (className == 'light-theme') {
    this.textContent = 'dark_mode';
  }else {
    this.textContent = 'light_mode';
  }
});