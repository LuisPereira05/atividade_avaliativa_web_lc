var catDropdown = document.querySelector("#catDropdown");
var catSubmenu = document.querySelector("#catSubmenu");

catDropdown.onmouseover = function name(params) {
    catSubmenu.style.display = "grid";
}

catDropdown.onmouseout = function name(params) {
    catSubmenu.style.display = "none";
}

catSubmenu.onmouseover = function name(params) {
    catSubmenu.style.display = "grid";
}

catSubmenu.onmouseout = function name(params) {
    catSubmenu.style.display = "none";
}

var menuOn = false;

document.querySelector("#showMenu").onclick = function name(params) {
    if(menuOn) {
        document.querySelector(".menuArea").style.left = "-79px";
        menuOn = false;
        document.querySelector("#showMenu img").style.transform = "scaleX(1)";
    } else {
        document.querySelector(".menuArea").style.left = 0;
        menuOn = true;
        document.querySelector("#showMenu img").style.transform = "scaleX(-1)";
    }
    
}

var now = Date.now();

var data = new Date(2025, 11, 12);
var ms = data - now;
ms = ms / 86400000;

ms = Math.floor(ms);

document.querySelector("#countdown").textContent = ms + " Días para o próximo Processo Seletivo do IFSul!";

var nomes = [["Ana Paula, aluna de Engenharia Elétrica",
    '"Gosto de como o site do IFSul está sempre atualizado com as últimas notícias. É ótimo poder acompanhar tudo o que acontece no campus sem depender só das redes sociais. Foi assim que fiquei sabendo do último edital de iniciação científica!"'],
    ["Lucas Henrique, estudante de Técnico em Informática Integrado",
        '"A nova página de notícias está muito mais organizada. Agora consigo encontrar eventos, palestras e até vagas de estágio com muito mais facilidade. Isso ajuda demais quem está começando no mercado."'],
    ["Juliana Oliveira, aluna de Licenciatura em Matemática",
        '"A cobertura das ações estudantis e dos projetos de extensão tem sido um diferencial. É bom ver nossos trabalhos sendo reconhecidos e divulgados. Isso motiva ainda mais a participação dos alunos."'],
    ["Rafael Mendes, formando em Técnico em Mecânica Subsequente",
        '"Fiquei impressionado com a qualidade do conteúdo. As reportagens mostram o que realmente acontece no IFSul e valorizam nossa trajetória. A página virou uma referência pra quem quer ficar por dentro da vida acadêmica."']
    ];

let indiceAtual = 0;

let transPercent = 0;

const depoDiv = document.querySelector(".depoDiv");

const prev = document.querySelector(".depoPrev");
const current = document.querySelector(".depo");
const next = document.querySelector(".depoNext");

prev.style.transform = "scale(.5)";
next.style.transform = "scale(.5)";

const delay = ms => new Promise(res => setTimeout(res, ms));

function atualizarSlide() {
    


    const prevIndex = (indiceAtual - 1 + nomes.length) % nomes.length;
    const nextindex = (indiceAtual + 1) % nomes.length;

    const items = [prev, current, next];
    const indices = [prevIndex, indiceAtual, nextindex];

    items.forEach((item, i) => {
        item.querySelector(".nomeEst").textContent = nomes[indices[i]][0];
        item.querySelector(".depoP").textContent = nomes[indices[i]][1];
    });


}

function desativarTransicao() {
    depoDiv.style.transition = "transform 0s";
    prev.style.transition = "transform 0s";
    current.style.transition = "transform 0s";
    next.style.transition = "transform 0s";
}

function ativarTransicao() {
    depoDiv.style.transition = "transform 0.3s";
    prev.style.transition = "transform 0.3s";
    current.style.transition = "transform 0.3s";
    next.style.transition = "transform 0.3s";
}

atualizarSlide();

document.querySelector("#leftButton").onclick = async function name(params) {
    ativarTransicao();

    depoDiv.style.transform = "translateX(-33%)";
    next.style.transform = "scale(1)";
    current.style.transform = "scale(0.5)";

    await delay(300);

    desativarTransicao();

    depoDiv.style.transform = "translateX(0%)";
    next.style.transform = "scale(.5)";
    current.style.transform = "scale(1)";

    indiceAtual = (indiceAtual + 1) % nomes.length;

    atualizarSlide();
}

document.querySelector("#rightButton").onclick = async function name(params) {
    ativarTransicao();

    depoDiv.style.transform = "translateX(33%)";
    prev.style.transform = "scale(1)";
    current.style.transform = "scale(0.5)";

    await delay(300);

    desativarTransicao();

    depoDiv.style.transform = "translateX(0%)";
    prev.style.transform = "scale(.5)";
    current.style.transform = "scale(1)";
    
    indiceAtual = (indiceAtual - 1 + nomes.length) % nomes.length;
    
    atualizarSlide();
}


setInterval(async () => {
    ativarTransicao();
    depoDiv.style.transform = "translateX(33%)";
    prev.style.transform = "scale(1)";
    current.style.transform = "scale(0.5)";
    await delay(300);
    desativarTransicao();
    depoDiv.style.transform = "translateX(0%)";
    prev.style.transform = "scale(.5)";
    current.style.transform = "scale(1)";
    
    indiceAtual = (indiceAtual - 1 + nomes.length) % nomes.length;
    
    atualizarSlide();
}, 10000);