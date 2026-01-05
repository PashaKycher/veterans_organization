import logo from './icon/logo.svg'
import buttonMenu from './icon/buttonMenu.svg'
import close_icon from './icon/close_icon.svg'
import arrow_btn from './icon/arrow_btn.png'
import nawBarBtn from './icon/nawBarBtn.png'
import homeClose_btn from './icon/homeClose_btn.png'
import arrow_icon from './icon/arrow_icon.svg'
import user from './icon/user.png'
import userLogin from './icon/userLogin.png'
import dashboardIcon from './icon/dashboardIcon.svg'
import dashboardIconColored from './icon/dashboardIconColored.svg'
import upload_icon from './icon/upload_icon.svg'

import homeHero from './homeHero.png'
import positionHero from './positionHero.webp'
import leadersHero from './leadersHero.webp'
import clubHero from './clubHero.webp'


// pictures and icons
export const assets = {
  logo,
  buttonMenu,
  close_icon,
  arrow_btn,
  nawBarBtn,
  homeClose_btn,
  arrow_icon,
  userLogin,
  upload_icon,

  homeHero,
  positionHero,
  leadersHero,
  clubHero,
}

// // Home
// first nawBar links
export const menuLinkFirst = [
  { name: "Аналітичні огляди", desc: "Оперативна аналітика про ветеранську політику та соціальні процеси.", path: "/analytical" },
  { name: "Новини", desc: "Головні події та зміни у сфері ветеранства.", path: "/news" },
  { name: "Наша позиція", desc: "Субʼєктна позиція у ключових питаннях війни, держави та відповідальності.", path: "/position" },
]
// second nawBar links
export const menuLinkSecond = [
  { name: "Лідерство", desc: "Лідерство — це відповідальність діяти.", path: "/leaders" },
  { name: "Клуб", desc: "Клуб Захисників України — це люди", path: "/club" },
  { name: "Підтримка та взаємодія", desc: "Клуб Захисників України розглядає підтримку не як благодійність, а як відповідальність спільноти за своїх.", path: "/support" },
]
// values
export const values = [
  {
    title: "Ідентичність",
    text: "Ми виходимо з усвідомлення себе як субʼєктів держави, а не її клієнтів."
  },
  {
    title: "Відповідальність",
    text: "Свобода неможлива без особистої та колективної відповідальності."
  },
  {
    title: "Лідерство",
    text: "Лідерство — це не статус, а готовність діяти першими."
  }
];

// // Positions page data 
export const positions = [
  {
    _id: "poast1",
    title: 'Про знецінення військової служби',
    text: 'Ми вважаємо неприпустимими будь-які публічні чи інституційні дії, що знецінюють військову службу та жертву Захисників. Держава, яка дозволяє таке знецінення, підриває власну стійкість.',
    date: '12.12.2025'
  },
  {
    _id: "poast2",
    title: 'Про відповідальність після війни',
    text: 'Війна формує людей, здатних діяти в умовах невизначеності. Усунення цих людей від ухвалення рішень після війни є стратегічною помилкою держави.',
    date: '05.12.2025'
  },
  {
    _id: "poast3",
    title: 'Про лідерство і субʼєктність',
    text: 'Ми переконані: лідерство — це не посада і не звання. Це готовність брати відповідальність і діяти тоді, коли інші вагаються.',
    date: '28.11.2025'
  }
]

// // Leaders page data
// people
export const people = [
  {
    _id: "p1",
    name: 'Імʼя Прізвище',
    role: 'Командир підрозділу',
    text: 'Досвід управління людьми в бойових умовах. Формує культуру відповідальності.',
    image: user
  },
  {
    _id: "p2",
    name: 'Імʼя Прізвище',
    role: 'Сержант-інструктор',
    text: 'Практика підготовки та навчання. Робота з людьми на рівні дій.',
    image: user
  },
  {
    _id: "p3",
    name: 'Імʼя Прізвище',
    role: 'Громадянський лідер',
    text: 'Перенесення військового досвіду в державне і суспільне управління.',
    image: user
  }
]
// cases
export const cases = [
  'Як приймаються рішення в умовах нестачі ресурсів',
  'Відповідальність командира за життя людей',
  'Перенесення військового мислення у цивільні процеси'
]

// // Club
// leaders
export const leaders = [
  {
    _id: "l1",
    image: user,
    name: 'Імʼя Прізвище',
    role: 'Військовий командир',
    description: 'Пройшов бойовий шлях, займається формуванням лідерських підходів у війську.'
  },
  {
    _id: "l2",
    image: user,
    name: 'Імʼя Прізвище',
    role: 'Ветеран, аналітик',
    description: 'Працює з осмисленням досвіду війни та трансформацією його в аналітику.'
  },
  {
    _id: "l3",
    image: user,
    name: 'Імʼя Прізвище',
    role: 'Громадський лідер',
    description: 'Фокусується на звʼязку війни, суспільства та державних рішень.'
  },
]
// principles
export const principles = [
  'Відповідальність за рішення і наслідки',
  'Повага до служби і досвіду',
  'Дія замість декларацій',
  'Державницьке мислення',
  'Солідарність всередині спільноти'
]

// // SupportAndInteraction
// principles
export const princip = [
  {
    title: 'Відповідальність, а не жалість',
    text: 'Підтримка ветеранів і родин — це обовʼязок спільноти людей служіння, а не акт емоційної допомоги.'
  },
  {
    title: 'Прозорість і довіра',
    text: 'Усі форми підтримки мають чіткі правила, зрозумілі механізми та відкриту логіку прийняття рішень.'
  },
  {
    title: 'Посилення, а не утримання',
    text: 'Ми допомагаємо відновити субʼєктність, здатність діяти й брати відповідальність.'
  }
]
// directions
export const directions = [
  {
    title: 'Підтримка ветеранів та родин',
    text: 'Правова, соціальна та навігаційна підтримка ветеранів і членів їхніх родин у складних життєвих ситуаціях. Супровід у взаємодії з державними та партнерськими програмами.'
  },
  {
    title: 'Фінансова підтримка проєктів КЗУ',
    text: 'Цільова підтримка ініціатив Клубу: аналітичних програм, освітніх проєктів, лідерських середовищ та інфраструктури спільноти.'
  },
  {
    title: 'Підтримка спільнот і ініціатив',
    text: 'Підсилення проєктів, які поділяють цінності відповідальності, служіння та державницького мислення.'
  },
  {
    title: 'Експертна та організаційна взаємодія',
    text: 'Залучення експертизи, менторства, участі в розробці рішень, програм і публічних позицій.'
  }
]
// partnership
export const partnership = [
  'Стратегічні партнери',
  'Проєктна взаємодія',
  'Інституційна підтримка'
]


// // ModalWindow data
export const mobileWindowsLink = [
  {
    title: "Аналітика",
    description: "Оперативна аналітика про ветеранську політику та соціальні процеси.",
    link: "/analytical"
  },
  {
    title: "Позиція",
    description: "Субʼєктна позиція у ключових питаннях війни, держави та відповідальності.",
    link: "/position"
  },
  {
    title: "Клуб",
    description: "Клуб Захисників України — це люди",
    link: "/club"
  },
  {
    title: "Лідерство",
    description: "Лідерство — це відповідальність діяти.",
    link: "/leaders"
  }
]

// // owner menu link
export const ownerMenuLinks = [
  { 
    title: "Dashboard", 
    link: "/owner", 
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
    role: ["reporter", "editor", "admin"] 
  },
  {
    title: "Аналітика",
    link: "/owner/analytical",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
    role: ["reporter", "editor", "admin"] 
  },{
    title: "Новини",
    link: "/owner/news",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
    role: ["reporter", "editor", "admin"] 
  },

  {
    title: "Позиція",
    link: "/owner/position",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
    role: ["reporter", "editor", "admin"]
  },
  {
    title: "Користувачі",
    link: "/owner/users",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
    role: ["admin", "moderator"] 
  },
]

// // user menu link
export const userMenuLinks = [
  { 
    title: "Dashboard", 
    link: "/user", 
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
  },
  {
    title: "Аналітика",
    link: "/user/analytical",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored, 
  },{
    title: "Новини",
    link: "/user/news",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
  },

  {
    title: "Позиція",
    link: "/user/position",
    icon: dashboardIcon, 
    coloredIcon: dashboardIconColored,
  },
]





