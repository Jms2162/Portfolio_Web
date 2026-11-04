const PHONE_NUMBER = "5491125547478";

const translations = {
  es: {
    skip: "Saltar al contenido",
    "meta.title": "jsdigital | Diseño web para negocios",
    "meta.description": "Diseño y desarrollo de sitios web para comercios y negocios. Conocé proyectos y conversemos por WhatsApp.",
    "brand.home": "jsdigital, inicio",
    "brand.top": "jsdigital, volver al inicio",
    "nav.label": "Navegación principal",
    "nav.projects": "Proyectos",
    "nav.services": "Qué hacemos",
    "nav.process": "Cómo trabajamos",
    "nav.contact": "Hablemos",
    "menu.open": "Abrir menú",
    "menu.close": "Cerrar menú",
    "language.label": "Cambiar idioma",
    "theme.enable": "Activar modo oscuro",
    "theme.disable": "Activar modo claro",
    "theme.dark": "Modo oscuro",
    "theme.light": "Modo claro",
    "hero.eyebrow": "Diseño web para comercios",
    "hero.title": "Tu negocio merece un sitio <span>a su altura.</span>",
    "hero.description": "Creamos sitios claros, atractivos y fáciles de usar para que más personas conozcan lo que hacés y sepan cómo encontrarte.",
    "hero.whatsapp": "Hablemos por WhatsApp",
    "hero.projects": "Ver proyectos",
    "hero.note": "Una buena web hace que tu negocio siga trabajando, incluso cuando vos no estás.",
    "hero.idea": "IDEA",
    "hero.design": "DISEÑO",
    "hero.web": "WEB",
    "hero.art.label": "Ilustración de una página web en una pantalla",
    "hero.art.business": "tu negocio",
    "hero.art.nav": "Inicio　Servicios　Contacto",
    "hero.art.kicker": "UN LUGAR PARA VOS",
    "hero.art.title": "Lo que hacés<br>merece ser visto.",
    "hero.art.caption": "Un sitio, muchas oportunidades",
    "projects.eyebrow": "Trabajo real, ideas reales",
    "projects.title": "Hechos para conectar.",
    "projects.description": "Cada negocio es distinto. Diseñamos sitios que reflejan su identidad también en internet.",
    "projects.ruca.preview": "Abrir mini demo de Ruca Pediátrico",
    "projects.ruca.image": "Un espacio cálido para acompañar a cada familia.",
    "projects.ruca.type": "Institucional",
    "projects.ruca.description": "Un espacio digital cercano y claro para acompañar a las familias y presentar a su equipo profesional.",
    "projects.viewDemo": "Ver mini demo",
    "projects.liveSite": "Visitar sitio",
    "projects.blue.preview": "Abrir mini demo de Blue Sushi",
    "projects.blue.type": "Gastronomía",
    "projects.blue.description": "Una carta digital para descubrir el menú, conocer el restaurante y hacer pedidos por WhatsApp.",
    "services.eyebrow": "Simple, desde el comienzo",
    "services.title": "Lo que tu web necesita para funcionar.",
    "services.description": "Sin vueltas ni tecnicismos: pensamos una solución que tenga sentido para tu negocio y para tus clientes.",
    "services.institutional.title": "Sitio institucional",
    "services.institutional.description": "Tu negocio, tus servicios y toda la información importante, en un solo lugar.",
    "services.institutional.tag": "Presencia online",
    "services.contact.title": "Contacto directo",
    "services.contact.description": "Atajos a WhatsApp, redes y ubicación para que dar el siguiente paso sea fácil.",
    "services.contact.tag": "Más consultas",
    "services.responsive.title": "Diseño adaptable",
    "services.responsive.description": "Una experiencia cuidada y cómoda, tanto en el celular como en la computadora.",
    "services.responsive.tag": "Todos los dispositivos",
    "process.eyebrow": "Sin complicaciones",
    "process.title": "De la primera charla a estar online.",
    "process.description": "Vos conocés tu negocio. Nosotros te ayudamos a mostrarlo de la mejor manera.",
    "process.link": "Empezar una charla",
    "process.step1.title": "Nos conocemos",
    "process.step1.description": "Nos contás qué hacés, a quién querés llegar y qué necesitás.",
    "process.step2.title": "Le damos forma",
    "process.step2.description": "Organizamos el contenido y diseñamos una web alineada con tu marca.",
    "process.step3.title": "Salimos al mundo",
    "process.step3.description": "Revisamos juntos, publicamos y compartimos tu sitio con tus clientes.",
    "contact.eyebrow": "Tu negocio puede ser el próximo",
    "contact.title": "¿Lo charlamos?",
    "contact.description": "Contame tu idea y vemos juntos qué sitio necesita tu negocio.",
    "contact.whatsapp": "Escribime por WhatsApp",
    "footer.tagline": "Diseño web para negocios reales.",
    "footer.top": "Volver arriba",
    "footer.note": "Hecho con intención.",
    "whatsapp.label": "Escribinos por WhatsApp",
    "whatsapp.general": "Hola, quiero consultar por un sitio web.",
    "whatsapp.blue": "Hola, quiero hacer un pedido de Blue Sushi.",
    "language.announcement": "¡Bienvenido al español!",
    "demo.close": "Cerrar demo",
    "demo.ruca.eyebrow": "Mini demo · Institucional",
    "demo.ruca.nav": "El espacio　 Afiliación　 Videoconsultas　 Equipo　 Guía　 Ubicación",
    "demo.ruca.kicker": "PEDIATRÍA EN SANTA ROSA",
    "demo.ruca.title": "Un lugar para crecer <em>con confianza.</em>",
    "demo.ruca.description": "Un espacio dedicado a acompañar la salud y el bienestar de las infancias, con cercanía y cuidado en cada etapa.",
    "demo.ruca.photoAlt": "Patricia Jannello y Soledad Hernández, profesionales de Ruca",
    "demo.ruca.photoCaption": "Patricia y Soledad, parte del equipo de Ruca",
    "demo.ruca.whatsapp": "Escribinos por WhatsApp",
    "demo.ruca.link": "Conocé Ruca",
    "demo.ruca.bottom": "Un espacio cálido para acompañar a cada familia.",
    "demo.ruca.note": "Vista previa del proyecto. El enlace abre el sitio publicado.",
    "demo.blue.eyebrow": "Mini demo · Gastronomía",
    "demo.blue.location": "Santa Rosa · La Pampa",
    "demo.blue.tagline": "Sushi Bar · Delivery & Take Away",
    "demo.blue.nav.about": "Quiénes somos",
    "demo.blue.nav.pieces": "Piezas",
    "demo.blue.nav.order": "Pedir",
    "demo.blue.kicker": "PIONEROS DEL SUSHI EN ARGENTINA",
    "demo.blue.title": "Sushi con historia en el corazón de <em>La Pampa.</em>",
    "demo.blue.description": "Una de las primeras casas de sushi de Argentina, ahora en Santa Rosa. Armá tu pedido online y retiralo o recibilo en tu casa.",
    "demo.blue.hero.order": "Hacer un pedido",
    "demo.blue.hero.menu": "Ver las piezas",
    "demo.blue.photoAlt": "Plato de tartare de salmón de Blue Sushi",
    "demo.blue.menu.kicker": "UN RECORRIDO POR LA CARTA",
    "demo.blue.menu.title": "Algo rico te espera.",
    "demo.blue.menu.label": "Categorías de menú",
    "demo.blue.menu.sushi": "Sushi",
    "demo.blue.menu.starters": "Entradas",
    "demo.blue.item.sake": "Maki de salmón · 8 unidades",
    "demo.blue.item.ebi": "Langostinos en panko y palta",
    "demo.blue.item.tartare": "Tartare de salmón",
    "demo.blue.item.tartare.description": "Salmón, palta y mayonesa japonesa",
    "demo.blue.item.furai": "Langostinos rebozados en panko",
    "demo.blue.order": "Completá tu pedido online",
    "demo.blue.note": "Vista previa interactiva de la carta. Elegí una categoría para explorar el menú."
  },
  en: {
    skip: "Skip to content",
    "meta.title": "jsdigital | Websites for small businesses",
    "meta.description": "Website design and development for local businesses. Explore our projects and get in touch on WhatsApp.",
    "brand.home": "jsdigital, home",
    "brand.top": "jsdigital, back to top",
    "nav.label": "Main navigation",
    "nav.projects": "Projects",
    "nav.services": "What we do",
    "nav.process": "Our process",
    "nav.contact": "Let's talk",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "language.label": "Change language",
    "theme.enable": "Enable dark mode",
    "theme.disable": "Enable light mode",
    "theme.dark": "Dark mode",
    "theme.light": "Light mode",
    "hero.eyebrow": "Web design for small businesses",
    "hero.title": "Your business deserves a website <span>that measures up.</span>",
    "hero.description": "We build clear, attractive and easy-to-use websites that help more people discover what you do and find you.",
    "hero.whatsapp": "Let's talk on WhatsApp",
    "hero.projects": "See our work",
    "hero.note": "A good website keeps your business working, even when you aren't.",
    "hero.idea": "IDEA",
    "hero.design": "DESIGN",
    "hero.web": "WEB",
    "hero.art.label": "Illustration of a website on a screen",
    "hero.art.business": "your business",
    "hero.art.nav": "Home　Services　Contact",
    "hero.art.kicker": "A PLACE FOR YOU",
    "hero.art.title": "What you do<br>deserves to be seen.",
    "hero.art.caption": "One website, many opportunities",
    "projects.eyebrow": "Real work, real ideas",
    "projects.title": "Made to connect.",
    "projects.description": "Every business is different. We design websites that reflect what makes it unique.",
    "projects.ruca.preview": "Open the Ruca Pediátrico mini demo",
    "projects.ruca.image": "A warm space for every family.",
    "projects.ruca.type": "Healthcare",
    "projects.ruca.description": "A welcoming, clear online home for families and the professionals who care for them.",
    "projects.viewDemo": "View mini demo",
    "projects.liveSite": "Visit website",
    "projects.blue.preview": "Open the Blue Sushi mini demo",
    "projects.blue.type": "Restaurant",
    "projects.blue.description": "A digital menu to discover the dishes, get to know the restaurant and order on WhatsApp.",
    "services.eyebrow": "Simple from the start",
    "services.title": "Everything your website needs to work.",
    "services.description": "No jargon or guesswork: we shape a solution that makes sense for your business and your customers.",
    "services.institutional.title": "Business website",
    "services.institutional.description": "Your business, services and all the information people need, in one place.",
    "services.institutional.tag": "Online presence",
    "services.contact.title": "Direct contact",
    "services.contact.description": "Shortcuts to WhatsApp, social media and directions make the next step easy.",
    "services.contact.tag": "More enquiries",
    "services.responsive.title": "Responsive design",
    "services.responsive.description": "A polished, easy-to-use experience on phones, tablets and computers.",
    "services.responsive.tag": "Every device",
    "process.eyebrow": "No complications",
    "process.title": "From our first chat to launch.",
    "process.description": "You know your business. We help you show it at its best.",
    "process.link": "Let's get started",
    "process.step1.title": "We get to know you",
    "process.step1.description": "Tell us what you do, who you want to reach and what you need.",
    "process.step2.title": "We shape the idea",
    "process.step2.description": "We organize the content and design a site that fits your brand.",
    "process.step3.title": "We go live",
    "process.step3.description": "We review everything together, publish your site and share it with your customers.",
    "contact.eyebrow": "Your business could be next",
    "contact.title": "Shall we talk?",
    "contact.description": "Tell me about your idea and we'll figure out the right website for your business.",
    "contact.whatsapp": "Message me on WhatsApp",
    "footer.tagline": "Web design for real businesses.",
    "footer.top": "Back to top",
    "footer.note": "Made with intention.",
    "whatsapp.label": "Message us on WhatsApp",
    "whatsapp.general": "Hi, I'd like to ask about a website.",
    "whatsapp.blue": "Hi, I'd like to place an order with Blue Sushi.",
    "language.announcement": "Welcome to English!",
    "demo.close": "Close demo",
    "demo.ruca.eyebrow": "Mini demo · Healthcare",
    "demo.ruca.nav": "Our space　 Membership　 Video visits　 Team　 Guide　 Location",
    "demo.ruca.kicker": "PEDIATRIC CARE IN SANTA ROSA",
    "demo.ruca.title": "A place to grow <em>with confidence.</em>",
    "demo.ruca.description": "A welcoming space to support children's health and wellbeing, with care and closeness at every stage.",
    "demo.ruca.photoAlt": "Patricia Jannello and Soledad Hernández, Ruca professionals",
    "demo.ruca.photoCaption": "Patricia and Soledad, part of the Ruca team",
    "demo.ruca.whatsapp": "Message us on WhatsApp",
    "demo.ruca.link": "Discover Ruca",
    "demo.ruca.bottom": "A warm space to support every family.",
    "demo.ruca.note": "Project preview. Follow the link to visit the live website.",
    "demo.blue.eyebrow": "Mini demo · Restaurant",
    "demo.blue.location": "Santa Rosa · La Pampa",
    "demo.blue.tagline": "Sushi Bar · Delivery & Takeaway",
    "demo.blue.nav.about": "About us",
    "demo.blue.nav.pieces": "Sushi",
    "demo.blue.nav.order": "Order",
    "demo.blue.kicker": "SUSHI PIONEERS IN ARGENTINA",
    "demo.blue.title": "Sushi with a story in the heart of <em>La Pampa.</em>",
    "demo.blue.description": "One of Argentina's first sushi restaurants, now in Santa Rosa. Place your order online for pickup or delivery.",
    "demo.blue.hero.order": "Place an order",
    "demo.blue.hero.menu": "Explore the menu",
    "demo.blue.photoAlt": "Blue Sushi's salmon tartare dish",
    "demo.blue.menu.kicker": "TAKE A LOOK AT THE MENU",
    "demo.blue.menu.title": "Something delicious awaits.",
    "demo.blue.menu.label": "Menu categories",
    "demo.blue.menu.sushi": "Sushi",
    "demo.blue.menu.starters": "Starters",
    "demo.blue.item.sake": "Salmon maki · 8 pieces",
    "demo.blue.item.ebi": "Panko shrimp and avocado",
    "demo.blue.item.tartare": "Salmon tartare",
    "demo.blue.item.tartare.description": "Salmon, avocado and Japanese mayo",
    "demo.blue.item.furai": "Panko-breaded shrimp",
    "demo.blue.order": "Complete your online order",
    "demo.blue.note": "Interactive menu preview. Pick a category to explore the menu."
  },
  pt: {
    skip: "Pular para o conteúdo",
    "meta.title": "jsdigital | Sites para pequenos negócios",
    "meta.description": "Criação e desenvolvimento de sites para comércios e empresas. Conheça nossos projetos e fale conosco pelo WhatsApp.",
    "brand.home": "jsdigital, início",
    "brand.top": "jsdigital, voltar ao início",
    "nav.label": "Navegação principal",
    "nav.projects": "Projetos",
    "nav.services": "O que fazemos",
    "nav.process": "Como trabalhamos",
    "nav.contact": "Vamos conversar",
    "menu.open": "Abrir menu",
    "menu.close": "Fechar menu",
    "language.label": "Mudar idioma",
    "theme.enable": "Ativar modo escuro",
    "theme.disable": "Ativar modo claro",
    "theme.dark": "Modo escuro",
    "theme.light": "Modo claro",
    "hero.eyebrow": "Sites para comércios",
    "hero.title": "Seu negócio merece um site <span>à altura.</span>",
    "hero.description": "Criamos sites claros, atraentes e fáceis de usar para que mais pessoas conheçam o seu trabalho e saibam como encontrar você.",
    "hero.whatsapp": "Vamos conversar pelo WhatsApp",
    "hero.projects": "Ver projetos",
    "hero.note": "Um bom site mantém seu negócio em movimento, mesmo quando você não está por perto.",
    "hero.idea": "IDEIA",
    "hero.design": "DESIGN",
    "hero.web": "WEB",
    "hero.art.label": "Ilustração de um site em uma tela",
    "hero.art.business": "seu negócio",
    "hero.art.nav": "Início　Serviços　Contato",
    "hero.art.kicker": "UM LUGAR PARA VOCÊ",
    "hero.art.title": "O que você faz<br>merece ser visto.",
    "hero.art.caption": "Um site, muitas oportunidades",
    "projects.eyebrow": "Trabalho real, ideias reais",
    "projects.title": "Feitos para conectar.",
    "projects.description": "Cada negócio é diferente. Criamos sites que refletem sua identidade também na internet.",
    "projects.ruca.preview": "Abrir mini demo do Ruca Pediátrico",
    "projects.ruca.image": "Um espaço acolhedor para acompanhar cada família.",
    "projects.ruca.type": "Institucional",
    "projects.ruca.description": "Um espaço digital acolhedor e claro para receber as famílias e apresentar a equipe profissional.",
    "projects.viewDemo": "Ver mini demo",
    "projects.liveSite": "Visitar site",
    "projects.blue.preview": "Abrir mini demo do Blue Sushi",
    "projects.blue.type": "Gastronomia",
    "projects.blue.description": "Um cardápio digital para conhecer os pratos, descobrir o restaurante e fazer pedidos pelo WhatsApp.",
    "services.eyebrow": "Simples desde o começo",
    "services.title": "Tudo o que seu site precisa para funcionar.",
    "services.description": "Sem complicação nem termos técnicos: criamos uma solução que faz sentido para o seu negócio e seus clientes.",
    "services.institutional.title": "Site institucional",
    "services.institutional.description": "Seu negócio, seus serviços e todas as informações importantes em um só lugar.",
    "services.institutional.tag": "Presença online",
    "services.contact.title": "Contato direto",
    "services.contact.description": "Atalhos para WhatsApp, redes sociais e localização facilitam o próximo passo.",
    "services.contact.tag": "Mais consultas",
    "services.responsive.title": "Design responsivo",
    "services.responsive.description": "Uma experiência agradável e fácil de usar no celular, tablet ou computador.",
    "services.responsive.tag": "Todos os dispositivos",
    "process.eyebrow": "Sem complicação",
    "process.title": "Da primeira conversa ao lançamento.",
    "process.description": "Você conhece seu negócio. Nós ajudamos a mostrar o melhor dele.",
    "process.link": "Vamos começar",
    "process.step1.title": "Vamos nos conhecer",
    "process.step1.description": "Conte o que você faz, quem deseja alcançar e do que precisa.",
    "process.step2.title": "Damos forma à ideia",
    "process.step2.description": "Organizamos o conteúdo e criamos um site alinhado à sua marca.",
    "process.step3.title": "Vamos ao ar",
    "process.step3.description": "Revisamos tudo juntos, publicamos o site e compartilhamos com seus clientes.",
    "contact.eyebrow": "Seu negócio pode ser o próximo",
    "contact.title": "Vamos conversar?",
    "contact.description": "Conte sua ideia e vamos descobrir juntos qual site seu negócio precisa.",
    "contact.whatsapp": "Fale comigo pelo WhatsApp",
    "footer.tagline": "Sites para negócios de verdade.",
    "footer.top": "Voltar ao topo",
    "footer.note": "Feito com intenção.",
    "whatsapp.label": "Fale conosco pelo WhatsApp",
    "whatsapp.general": "Olá, gostaria de saber mais sobre um site.",
    "whatsapp.blue": "Olá, gostaria de fazer um pedido no Blue Sushi.",
    "language.announcement": "Bem-vindo ao português!",
    "demo.close": "Fechar demo",
    "demo.ruca.eyebrow": "Mini demo · Institucional",
    "demo.ruca.nav": "O espaço　 Afiliação　 Videochamadas　 Equipe　 Guia　 Localização",
    "demo.ruca.kicker": "PEDIATRIA EM SANTA ROSA",
    "demo.ruca.title": "Um lugar para crescer <em>com confiança.</em>",
    "demo.ruca.description": "Um espaço dedicado a acompanhar a saúde e o bem-estar das crianças, com proximidade e cuidado em cada etapa.",
    "demo.ruca.photoAlt": "Patricia Jannello e Soledad Hernández, profissionais do Ruca",
    "demo.ruca.photoCaption": "Patricia e Soledad, parte da equipe do Ruca",
    "demo.ruca.whatsapp": "Fale conosco pelo WhatsApp",
    "demo.ruca.link": "Conheça o Ruca",
    "demo.ruca.bottom": "Um espaço acolhedor para acompanhar cada família.",
    "demo.ruca.note": "Prévia do projeto. O link abre o site publicado.",
    "demo.blue.eyebrow": "Mini demo · Gastronomia",
    "demo.blue.location": "Santa Rosa · La Pampa",
    "demo.blue.tagline": "Sushi Bar · Delivery & Take Away",
    "demo.blue.nav.about": "Quem somos",
    "demo.blue.nav.pieces": "Peças",
    "demo.blue.nav.order": "Pedir",
    "demo.blue.kicker": "PIONEIROS DO SUSHI NA ARGENTINA",
    "demo.blue.title": "Sushi com história no coração de <em>La Pampa.</em>",
    "demo.blue.description": "Uma das primeiras casas de sushi da Argentina, agora em Santa Rosa. Faça seu pedido online para retirar ou receber em casa.",
    "demo.blue.hero.order": "Fazer um pedido",
    "demo.blue.hero.menu": "Ver as peças",
    "demo.blue.photoAlt": "Prato de tartare de salmão do Blue Sushi",
    "demo.blue.menu.kicker": "UM PASSEIO PELO CARDÁPIO",
    "demo.blue.menu.title": "Tem coisa boa esperando por você.",
    "demo.blue.menu.label": "Categorias do cardápio",
    "demo.blue.menu.sushi": "Sushi",
    "demo.blue.menu.starters": "Entradas",
    "demo.blue.item.sake": "Maki de salmão · 8 unidades",
    "demo.blue.item.ebi": "Camarões empanados e abacate",
    "demo.blue.item.tartare": "Tartare de salmão",
    "demo.blue.item.tartare.description": "Salmão, abacate e maionese japonesa",
    "demo.blue.item.furai": "Camarões empanados em panko",
    "demo.blue.order": "Complete seu pedido online",
    "demo.blue.note": "Prévia interativa do cardápio. Escolha uma categoria para explorar o menu."
  }
};

const localeFlags = {
  es: { flag: "assets/flag-ar.svg", lang: "es-AR", code: "ES" },
  en: { flag: "assets/flag-us.svg", lang: "en", code: "EN" },
  pt: { flag: "assets/flag-br.svg", lang: "pt-BR", code: "PT" }
};

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");
const languageSelector = document.querySelector(".language-selector");
const themeToggle = document.querySelector(".theme-toggle");
const languageTransition = document.querySelector("#language-transition");
const transitionFlag = document.querySelector("#transition-flag");
const transitionMessage = document.querySelector("#transition-message");
const languageButtons = document.querySelectorAll("[data-language]");
let currentLocale = "es";
let transitionTimeout;

function translatePage(locale) {
  const dictionary = translations[locale];
  if (!dictionary) {
    throw new Error(`No hay traducciones disponibles para el idioma: ${locale}`);
  }

  document.documentElement.lang = localeFlags[locale].lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!(key in dictionary)) {
      throw new Error(`Falta la traducción "${key}" para el idioma "${locale}"`);
    }
    element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (!(key in dictionary)) {
      throw new Error(`Falta la traducción "${key}" para el idioma "${locale}"`);
    }
    element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element === menuToggle && menuToggle.getAttribute("aria-expanded") === "true"
      ? "menu.close"
      : element.dataset.i18nAriaLabel;
    if (!(key in dictionary)) {
      throw new Error(`Falta la traducción "${key}" para el idioma "${locale}"`);
    }
    element.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (!(key in dictionary)) {
      throw new Error(`Falta la traducción "${key}" para el idioma "${locale}"`);
    }
    element.setAttribute("alt", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    if (!(key in dictionary)) {
      throw new Error(`Falta la traducción "${key}" para el idioma "${locale}"`);
    }
    element.setAttribute("content", dictionary[key]);
  });

  document.title = dictionary["meta.title"];

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === locale));
  });
  document.querySelector("[data-current-language-flag]").src = localeFlags[locale].flag;
  document.querySelector("[data-current-language-code]").textContent = localeFlags[locale].code;

  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const messageKey = link.dataset.whatsappMessage;
    if (!(messageKey in dictionary)) {
      throw new Error(`Falta el mensaje de WhatsApp "${messageKey}" para el idioma "${locale}"`);
    }
    link.href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(dictionary[messageKey])}`;
  });

  const themeIsDark = document.body.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dictionary[themeIsDark ? "theme.disable" : "theme.enable"]);
  themeToggle.querySelector("[data-i18n]").textContent = dictionary[themeIsDark ? "theme.light" : "theme.dark"];
}

function showLanguageTransition(locale) {
  transitionFlag.src = localeFlags[locale].flag;
  transitionMessage.textContent = translations[locale]["language.announcement"];
  languageTransition.setAttribute("aria-hidden", "false");
  languageTransition.classList.remove("is-visible");
  requestAnimationFrame(() => languageTransition.classList.add("is-visible"));
  window.clearTimeout(transitionTimeout);
  transitionTimeout = window.setTimeout(() => {
    languageTransition.classList.remove("is-visible");
    languageTransition.setAttribute("aria-hidden", "true");
  }, 1500);
}

function setLocale(locale, announce = false) {
  if (!(locale in localeFlags)) {
    throw new Error(`Idioma no reconocido: ${locale}`);
  }
  const localeChanged = currentLocale !== locale;
  currentLocale = locale;
  translatePage(locale);
  localStorage.setItem("nexo-locale", locale);
  if (announce && localeChanged) {
    showLanguageTransition(locale);
  }
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".icon-moon").hidden = isDark;
  themeToggle.querySelector(".icon-sun").hidden = !isDark;
  document.querySelector("#theme-color").content = isDark ? "#171815" : "#f6f5f0";
  translatePage(currentLocale);
  localStorage.setItem("nexo-theme", theme);
}

if (menuToggle && siteNavigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", translations[currentLocale][isExpanded ? "menu.open" : "menu.close"]);
    siteNavigation.classList.toggle("is-open", !isExpanded);
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translations[currentLocale]["menu.open"]);
      siteNavigation.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-open-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.openDemo);
    if (!(dialog instanceof HTMLDialogElement)) {
      throw new Error(`No se encontró el diálogo de demo: ${button.dataset.openDemo}`);
    }
    dialog.showModal();
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});

document.querySelectorAll(".demo-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    setLocale(button.dataset.language, true);
    languageSelector.open = false;
    if (menuToggle?.getAttribute("aria-expanded") === "true" && siteNavigation) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translations[button.dataset.language]["menu.open"]);
      siteNavigation.classList.remove("is-open");
    }
  });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && !languageSelector.contains(event.target)) {
    languageSelector.open = false;
  }
});

themeToggle.addEventListener("click", () => {
  setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelectorAll("[data-menu-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.menuTab;
    document.querySelectorAll("[data-menu-tab]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === tab));
    });
    document.querySelectorAll("[data-menu-category]").forEach((item) => {
      item.toggleAttribute("hidden", item.dataset.menuCategory !== category);
    });
  });
});

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const savedLocale = localStorage.getItem("nexo-locale");
const initialLocale = savedLocale && savedLocale in localeFlags ? savedLocale : "es";
setLocale(initialLocale);
setTheme(localStorage.getItem("nexo-theme") === "dark" ? "dark" : "light");
