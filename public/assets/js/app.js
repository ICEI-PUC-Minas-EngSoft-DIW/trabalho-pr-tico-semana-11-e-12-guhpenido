// Estrutura de dados JSON completa
const dados = {
  lugares: [
    {
      id: 1,
      nome: "Mercado Novo de BH",
      descricao: "Centro de compras popular no coração de BH, oferecendo variedade de produtos, gastronomia e cultura local.",
      conteudo: "O Mercado Novo é um dos pontos comerciais mais tradicionais de Belo Horizonte, localizado no centro da cidade. Com uma arquitetura única e uma atmosfera vibrante, o local oferece uma grande variedade de produtos, desde artesanatos locais até roupas e acessórios. É também um excelente local para experimentar a gastronomia mineira, com diversas opções de lanches tradicionais e pratos típicos. O mercado é um verdadeiro centro cultural, onde a tradição e a modernidade se encontram, proporcionando uma experiência autêntica da vida belo-horizontina.",
      categoria: "Compras",
      endereco: "R. Rio Grande do Sul, 499 - Centro, Belo Horizonte - MG",
      horarios: "Segunda a Sexta: 10h às 00h. Sábado: 07h às 00h. Domingo: 07h às 18h.",
      telefone: "(31) 99753-4842",
      destaque: true,
      data: "2025-10-15",
      imagem_principal: "assets/img/mercado-novo.jpeg",
      atracoes: [
        {
          id: 1,
          nome: "Bebidas",
          descricao:
            "Grande variedade de bebidas típicas de Minas Gerais, incluindo cachaças artesanais, xeque-mate e outras iguarias. Imagem de: bhaz.com.br",
          imagem:
            "https://bhaz.com.br/wp-content/uploads/2022/12/fermentaria.jpg",
        },
        {
          id: 2,
          nome: "Comidas Tradicionais",
          descricao:
            "Tira-gostos de dar água na boca, como fígado acebolado, torresmo e pastéis fresquinhos. Imagem de: bhaz.com.br",
          imagem:
            "https://bhaz.com.br/wp-content/uploads/2022/12/tira-gosto-mercado-novo.jpg",
        },
        {
          id: 3,
          nome: "Cachaçaria",
          descricao:
            "Centenas de marcas de cachaça artesanal de todas as regiões de Minas Gerais. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/arquivos/comer-e-beber/2021-07/facebook-1.jpg",
        },
        {
          id: 4,
          nome: "Doces e Conservas",
          descricao:
            "Doces caseiros, geleias, mel e produtos artesanais da roça mineira. Imagem de: www.ondecomerebeber.com",
          imagem:
            "https://www.ondecomerebeber.com/wp-content/uploads/2020/03/cafe-mercado-novo.jpg",
        },
      ],
    },
    {
      id: 2,
      nome: "Parque Municipal Américo Renné Giannetti",
      descricao:
        "Oásis verde no coração de BH com lagos, jardins históricos e vida selvagem urbana.",
      conteudo:
        "Inaugurado em 1897, o Parque Municipal é o parque mais antigo de Belo Horizonte e um patrimônio histórico da cidade. Com 182 mil m² de área verde no centro da capital, oferece um refúgio perfeito para quem busca contato com a natureza. O parque possui trilhas para caminhada, ciclovia, playground, quadras esportivas e um belo lago com pedalinhos. Sua flora diversificada abriga mais de 50 espécies de aves, tornando-o um ponto de observação para amantes da natureza. É palco de eventos culturais, shows e feiras aos finais de semana.",
      categoria: "Natureza",
      endereco: "Av. Afonso Pena, 1377 - Centro, Belo Horizonte - MG",
      horarios: "Todos os dias: 6h às 18h",
      telefone: "(31) 3277-4476",
      destaque: true,
      data: "2025-10-12",
      imagem_principal: "assets/img/parque-municipal.jpeg",
      atracoes: [
        {
          id: 1,
          nome: "Lago e Pedalinhos",
          descricao:
            "Lago artificial com pedalinhos para passeio em família nos finais de semana. Imagem de: prefeitura.pbh.gov.br",
          imagem:
            "https://prefeitura.pbh.gov.br/sites/default/files/noticia/img/2017-08/Lago%20Parque%20Municipal%20-%20foto%20Vander%20Bras.jpg",
        },
        {
          id: 2,
          nome: "Orquidário",
          descricao:
            "Espaço dedicado à preservação e exposição de orquídeas nativas e exóticas. Imagens de: bhaz.com.br",
          imagem:
            "https://bhaz.com.br/wp-content/uploads/2018/06/Orquid%C3%A1rio.jpg",
        },
        {
          id: 3,
          nome: "Playground e Área Infantil",
          descricao:
            "Área equipada com brinquedos e espaço seguro para crianças brincarem. Imagens de: prefeitura.pbh.gov.br",
          imagem:
            "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/trenzinho-parque-municipal-credito-tatiani-cordeiro-5-1.jpg",
        },
        {
          id: 4,
          nome: "Pista de Caminhada",
          descricao:
            "Trilhas arborizadas perfeitas para caminhada, corrida e exercícios ao ar livre. Imagem de: pacer.cc",
          imagem:
            "https://cdn.pacer.cc/route/screenshot/7h2y8_45.png",
        },
      ],
    },
    {
      id: 3,
      nome: "Centro e Praça da Liberdade",
      descricao:
        "Complexo cultural e arquitetônico com museus, jardins franceses e edifícios históricos.",
      conteudo:
        "A Praça da Liberdade é um dos conjuntos arquitetônicos e culturais mais importantes de Belo Horizonte. Construída no início do século XX para abrigar o governo do estado, hoje é um circuito cultural com 14 museus e espaços culturais ao redor da praça. Os jardins em estilo francês, projetados por Paul Villon, são perfeitos para passeios contemplativos. A praça oferece uma programação cultural intensa com exposições, shows gratuitos e eventos. À noite, a iluminação especial destaca a beleza dos edifícios ecléticos e art déco, criando um cenário encantador. Imagem de: prefeitura.pbh.gov.br",
      categoria: "Cultura",
      endereco: "Praça da Liberdade - Funcionários, Belo Horizonte - MG",
      horarios: "24 horas (museus têm horários específicos)",
      telefone: "(31) 3268-3400",
      destaque: true,
      data: "2025-10-10",
      imagem_principal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFagLw09KgyrWFI2n2iIWVwh9vmovBoDq4g&s",
      atracoes: [
        {
          id: 1,
          nome: "Memorial Minas Gerais Vale",
          descricao:
            "Museu interativo que conta a história e cultura mineira através de tecnologia e acervo rico. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/arquivos/arte-e-cultura/2022-06/arquivo_circuitoliberdade-1.jpg",
        },
        {
          id: 2,
          nome: "Museu das Minas e do Metal",
          descricao:
            "Espaço dedicado à mineração com exposições interativas e vista panorâmica da cidade. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/arquivos/arte-e-cultura/2019-08/MM%20Gerdau%20-%20Museu%20das%20Minas%20e%20do%20Metal%20por%20Jomar%20Bragan%C3%A7a%20-%20Fachada.jpg",
        },
        {
          id: 3,
          nome: "Centro Cultural Banco do Brasil",
          descricao:
            "Importante centro cultural com exposições de artes visuais, cinema e teatro. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/arquivos/arte-e-cultura/2021-03/ccbb-destaque-1.jpg",
        },
        {
          id: 4,
          nome: "Jardins Franceses",
          descricao:
            "Jardins paisagísticos em estilo francês com fontes e esculturas históricas. Imagem de: g1.globo.com",
          imagem:
            "https://s2-g1.glbimg.com/BzzUYmA4vnzeuajbZeps5Wo2Gbc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/09/20/pracaliberdade.jpg",
        },
      ],
    },
    {
      id: 4,
      nome: "Serra do Curral",
      descricao:
        "Símbolo natural de BH com trilhas ecológicas e mirantes espetaculares da região metropolitana.",
      conteudo:
        "A Serra do Curral é o cartão-postal natural de Belo Horizonte, fazendo parte da identidade visual da cidade. Este importante patrimônio ambiental oferece diversas opções de trilhas ecológicas, desde percursos leves até caminhadas mais desafiadoras para trilheiros experientes. Os mirantes proporcionam vistas panorâmicas de 360 graus da região metropolitana, sendo um dos melhores locais para contemplar o pôr do sol. A serra abriga rica biodiversidade do Cerrado mineiro, com espécies endêmicas de fauna e flora. É um destino perfeito para ecoturismo, fotografia de natureza e contato direto com o meio ambiente.",
      categoria: "Natureza",
      endereco: "Região Sul de Belo Horizonte - MG",
      horarios: "Recomendado: 6h às 17h (trilhas diurnas)",
      telefone: "Acesso livre",
      destaque: false,
      data: "2025-10-08",
      imagem_principal: "assets/img/serra-do-curral.jpeg",
      atracoes: [
        {
          id: 1,
          nome: "Mirante do Mangabeiras",
          descricao:
            "Principal mirante com vista privilegiada de toda a cidade e região metropolitana. Imagem de: viverbem.unimedbh.com.br",
          imagem:
            "https://viverbem.unimedbh.com.br/wp-content/uploads/2023/08/gettyimages-1457670728-1-656dd2e100761.webp",
        },
        {
          id: 2,
          nome: "Trilha da Pedreira",
          descricao:
            "Trilha de nível moderado com 5km, passando por antigos sítios de mineração. Imagens de: prefeitura.pbh.gov.br",
          imagem:
            "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/comunicacao/parque-da-serra-do-curral.jpg",
        },
        {
          id: 3,
          nome: "Trilha do Topo",
          descricao:
            "Trilha desafiadora até o ponto mais alto, recompensada com vista de 360 graus. Imagem de: tripadvisor.com",
          imagem:
            "https://media-cdn.tripadvisor.com/media/photo-s/05/0f/8f/fe/parque-serra-do-curral.jpg",
        },
        {
          id: 4,
          nome: "Flora e Fauna do Cerrado",
          descricao:
            "Observação de espécies nativas como candeias, ipês e diversas aves do cerrado. Imagem de: biologiadapaisagem.com.br",
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpimy7vdbIpSgLQNKkM4DrelJNIRQWKQ-i2w&s",
        },
      ],
    },
    {
      id: 5,
      nome: "Pampulha",
      descricao:
        "Conjunto moderno patrimônio da UNESCO com obras de Niemeyer, lagoa e vida cultural intensa.",
      conteudo:
        "O Conjunto Moderno da Pampulha é Patrimônio Cultural da Humanidade pela UNESCO desde 2016. Projetado por Oscar Niemeyer na década de 1940, com paisagismo de Burle Marx e obras de Portinari, representa um marco da arquitetura moderna brasileira. O complexo inclui a Igreja de São Francisco de Assis, Casa do Baile, Museu de Arte e o Estádio Mineirão. A Lagoa da Pampulha oferece ciclovia de 18km, perfeita para passeios de bicicleta, caminhadas e esportes aquáticos. A região concentra bares, restaurantes e uma vida cultural agitada, especialmente aos finais de semana. Imagem de: prefeitura.pbh.gov.br",
      categoria: "Cultura",
      endereco: "Região da Pampulha, Belo Horizonte - MG",
      horarios: "Áreas abertas 24h (museus têm horários específicos)",
      telefone: "(31) 3277-7443",
      destaque: true,
      data: "2025-10-05",
      imagem_principal:
        "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/belotur/pampulha_qu4rto-studio-0034.jpg",
      atracoes: [
        {
          id: 1,
          nome: "Igreja de São Francisco de Assis",
          descricao:
            "Obra-prima de Niemeyer com painéis de Portinari e arquitetura revolucionária. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/arquivos/arte-e-cultura/2021-11/pampulha-6.jpg",
        },
        {
          id: 2,
          nome: "Museu de Arte da Pampulha",
          descricao:
            "Antigo Cassino transformado em museu com exposições de arte contemporânea. Imagem de: prefeitura.pbh.gov.br",
          imagem:
            "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/fundacao-municipal-de-cultura/2019/2017_10_10_MAP_foto_Ricardo_Laf_09%20copy.jpg",
        },
        {
          id: 3,
          nome: "Ciclovia da Lagoa",
          descricao:
            "18km de ciclovia ao redor da lagoa, ideal para bike, patins e caminhada. Imagem de: www.mobilize.org.br",
          imagem:
            "https://www.mobilize.org.br/handlers/ImagemHandler.aspx?img=pampulha1.jpg&t=7&w=780&h=485",
        },
        {
          id: 4,
          nome: "Casa do Baile",
          descricao:
            "Centro de referência em urbanismo com café e vista privilegiada da lagoa. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/img/galeria-de-fotos/2020-12/casa-do-baile-tamiresmartins_-1.jpg",
        },
      ],
    },
    {
      id: 6,
      nome: "Parque das Mangabeiras",
      descricao:
        "Maior parque urbano de BH com 2,4 milhões de m² de mata preservada e trilhas ecológicas.",
      conteudo:
        "O Parque das Mangabeiras é o maior parque municipal de Belo Horizonte, com 2,4 milhões de metros quadrados de mata nativa preservada. Localizado aos pés da Serra do Curral, oferece uma experiência completa de contato com a natureza sem sair da cidade. O parque conta com diversas trilhas ecológicas, mirantes naturais, áreas para piquenique, playgrounds e um teatro de arena ao ar livre. É possível observar animais silvestres como micos, tucanos e saguis. A infraestrutura inclui lanchonetes, banheiros e estacionamento. Ideal para famílias, trilheiros e quem busca atividades ao ar livre. imagem de: portalbelohorizonte.com.br",
      categoria: "Natureza",
      endereco:
        "Av. José do Patrocínio Pontes, 580 - Mangabeiras, Belo Horizonte - MG",
      horarios: "Terça a Domingo: 8h às 17h",
      telefone: "(31) 3277-4994",
      destaque: false,
      data: "2025-10-03",
      imagem_principal:
        "https://portalbelohorizonte.com.br/sites/default/files/arquivos/ao-ar-livre-e-esportes/2019-08/mangabeiras-vander-bras-2.jpg",
      atracoes: [
        {
          id: 1,
          nome: "Mirante Sul",
          descricao:
            "Vista panorâmica da zona sul de BH e da região metropolitana. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70o_9XJkHEBj00NspFZRK9nndVBI8zkh4Kg&s",
        },
        {
          id: 2,
          nome: "Trilha do Quilombo",
          descricao:
            "Trilha histórica de 3km que passa por sítio arqueológico quilombola. Imagem de: prefeitura.pbh.gov.br",
          imagem:
            "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/comunicacao/lagodosonhos_1.jpg",
        },
        {
          id: 3,
          nome: "Praça do Papa",
          descricao:
            "Ponto turístico com vista espetacular, palco de eventos e shows. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/styles/img_interna_2/public/img/principais-atrativos/Pra%C3%A7a%20do%20Papa.jpg?h=2f07d717&itok=tG_oy3dq",
        },
        {
          id: 4,
          nome: "Teatro Francisco Nunes",
          descricao:
            "Teatro de arena ao ar livre com capacidade para 3.500 pessoas. Imagem de: portalbelohorizonte.com.br",
          imagem:
            "https://portalbelohorizonte.com.br/sites/default/files/styles/normal_size/public/arquivos/arte-e-cultura/2021-11/teatro-francisco-nunes_qu4rto-studio_mg_9284-editada.jpg?itok=kt3iR_-F",
        },
      ],
    },
  ],
};

// Funções auxiliares
function formatarData(dataString) {
  const data = new Date(dataString);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Código principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  // PÁGINA INDEX.HTML - Página Principal
  if (currentPage === "index.html" || currentPage === "") {
    carregarSliderDestaques();
    carregarTodosLugares();
  } else if (currentPage === "detalhes.html") {
    carregarPaginaDetalhes();
  }
});

// ==================== FUNÇÕES DA PÁGINA INDEX.HTML ====================

// Função para carregar o Carousel/Slider de Destaques
function carregarSliderDestaques() {
  const carouselInner = document.getElementById("carousel-destaques");

  if (!carouselInner) return;

  const lugaresDestaque = dados.lugares.filter(
    (lugar) => lugar.destaque === true
  );

  carouselInner.innerHTML = "";

  lugaresDestaque.forEach((lugar, index) => {
    const activeClass = index === 0 ? "active" : "";

    const carouselItem = `
            <div class="carousel-item ${activeClass}">
                <img src="${lugar.imagem_principal}" class="d-block w-100 carousel-image" alt="${lugar.nome}">
                <div class="carousel-caption d-md-block">
                    <div class="carousel-content">
                        <span class="badge bg-warning text-dark mb-2">⭐ EM DESTAQUE</span>
                        <h2 class="display-4 fw-bold mb-3">${lugar.nome}</h2>
                        <p class="lead mb-4">${lugar.descricao}</p>
                        <div class="d-flex gap-3 justify-content-center">
                            <a href="detalhes.html?id=${lugar.id}" class="btn btn-primary btn-lg px-4">
                                Ver Detalhes
                            </a>
                            <span class="badge bg-secondary align-self-center px-3 py-2">
                                ${lugar.categoria}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;

    carouselInner.innerHTML += carouselItem;
  });
}

// Função para carregar todos os lugares em cards
function carregarTodosLugares() {
  const lugaresContainer = document.getElementById("lugares-cards");

  if (!lugaresContainer) return;

  lugaresContainer.innerHTML = "";

  dados.lugares.forEach((lugar) => {
    const cardHTML = `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card h-100 shadow-sm lugar-card">
                    <a href="detalhes.html?id=${
                      lugar.id
                    }" class="text-decoration-none">
                        <img src="${
                          lugar.imagem_principal
                        }" class="card-img-top lugar-card-img" alt="${
      lugar.nome
    }">
                    </a>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <span class="badge bg-primary">${
                              lugar.categoria
                            }</span>
                            ${
                              lugar.destaque
                                ? '<span class="badge bg-warning text-dark">⭐ Destaque</span>'
                                : ""
                            }
                        </div>
                        <h3 class="card-title h5 fw-bold mb-2">
                            <a href="detalhes.html?id=${
                              lugar.id
                            }" class="text-decoration-none text-dark">
                                ${lugar.nome}
                            </a>
                        </h3>
                        <p class="card-text text-muted flex-grow-1">${
                          lugar.descricao
                        }</p>
                        <div class="mt-3">
                            <a href="detalhes.html?id=${
                              lugar.id
                            }" class="btn btn-outline-primary w-100">
                                Explorar →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

    lugaresContainer.innerHTML += cardHTML;
  });
}

// ==================== FUNÇÕES DA PÁGINA DETALHES.HTML ====================

function carregarPaginaDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const lugarId = parseInt(urlParams.get("id"));

  const lugar = dados.lugares.find((l) => l.id === lugarId);

  const detalhesContainer = document.getElementById("detalhes-lugar");
  const atracoesContainer = document.getElementById("atracoes-lugar");

  if (!lugar) {
    if (detalhesContainer) {
      detalhesContainer.innerHTML = `
                <div class="alert alert-warning text-center" role="alert">
                    <h4>Lugar não encontrado</h4>
                    <p>O lugar que você procura não existe.</p>
                    <a href="index.html" class="btn btn-primary mt-3">← Voltar para Início</a>
                </div>
            `;
    }
    return;
  }

  // Atualizar título da página
  document.title = `${lugar.nome} - BH Experiências`;

  // Montar seção de detalhes gerais
  if (detalhesContainer) {
    detalhesContainer.innerHTML = `
            <div class="row g-4">
                <!-- Coluna da imagem e informações principais -->
                <div class="col-lg-7">
                    <div class="card shadow-sm border-0">
                        <img src="${
                          lugar.imagem_principal
                        }" class="card-img-top" alt="${
      lugar.nome
    }" style="height: 450px; object-fit: cover;">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-primary fs-6">${
                                  lugar.categoria
                                }</span>
                                ${
                                  lugar.destaque
                                    ? '<span class="badge bg-warning text-dark fs-6">⭐ Em Destaque</span>'
                                    : ""
                                }
                            </div>
                            <h1 class="display-5 fw-bold mb-3">${
                              lugar.nome
                            }</h1>
                            <p class="lead text-muted mb-4">${
                              lugar.descricao
                            }</p>
                            
                            <div class="sobre-lugar bg-light p-4 rounded">
                                <h2 class="h4 fw-bold mb-3">📖 Sobre este lugar</h2>
                                <p class="text-justify lh-lg">${
                                  lugar.conteudo
                                }</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Coluna de informações práticas -->
                <div class="col-lg-5">
                    <div class="card shadow-sm border-0 sticky-top" style="top: 100px;">
                        <div class="card-header bg-dark text-white">
                            <h2 class="h5 mb-0">ℹ️ Informações Práticas</h2>
                        </div>
                        <div class="card-body">
                            <div class="info-item mb-4">
                                <h3 class="h6 fw-bold text-primary mb-2">📍 Endereço</h3>
                                <p class="mb-0">${lugar.endereco}</p>
                            </div>
                            
                            <div class="info-item mb-4">
                                <h3 class="h6 fw-bold text-primary mb-2">� Horário de Funcionamento</h3>
                                <p class="mb-0">${lugar.horarios}</p>
                            </div>
                            
                            <div class="info-item mb-4">
                                <h3 class="h6 fw-bold text-primary mb-2">� Contato</h3>
                                <p class="mb-0">${lugar.telefone}</p>
                            </div>
                            
                            <div class="info-item mb-4">
                                <h3 class="h6 fw-bold text-primary mb-2">📅 Última Atualização</h3>
                                <p class="mb-0">${formatarData(lugar.data)}</p>
                            </div>
                            
                            <div class="info-item mb-4">
                                <h3 class="h6 fw-bold text-primary mb-2">🏷️ Categoria</h3>
                                <span class="badge bg-primary fs-6">${
                                  lugar.categoria
                                }</span>
                            </div>
                            
                            <hr class="my-4">
                            
                            <div class="d-grid gap-2">
                                <a href="index.html" class="btn btn-outline-primary">
                                    ← Voltar para Início
                                </a>
                                <button class="btn btn-primary" onclick="window.print()">
                                   Imprimir Informações
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  // Montar seção de atrações vinculadas
  if (atracoesContainer && lugar.atracoes && lugar.atracoes.length > 0) {
    let atracoesHTML = '<div class="row g-4">';

    lugar.atracoes.forEach((atracao) => {
      atracoesHTML += `
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card h-100 shadow-sm atracao-card">
                        <img src="${atracao.imagem}" class="card-img-top" alt="${atracao.nome}" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h3 class="card-title h6 fw-bold">${atracao.nome}</h3>
                            <p class="card-text small text-muted">${atracao.descricao}</p>
                        </div>
                    </div>
                </div>
            `;
    });

    atracoesHTML += "</div>";
    atracoesContainer.innerHTML = atracoesHTML;
  }
}
