import {
  usa,
  rwanda,
  team1,
  team2,
  team3,
  team4,
  img1,
  img2,
  img3,
  img5,
  imiringa,
  amasaha,
  rugo,
  abana,
  siporo,
  ibinyabiziga,
  ibikapu,
  ubwiza,
  imisatsi,
  ikoranabuhanga,
  ubuzima,
  imyambaro,
  ibindi,
  product,
  deliver,
  payment,
  categoriesImg,
  likes1,
  likes2,
  likes3,
  likes4,
} from "../assets";

export const categories = [
  {
    name: "Imiringa",
    icon: imiringa,
    link: "categories/imiringa",
    subcategories: [
      "irikumwe nibindi (set)",
      "udukomo",
      "amaherena",
      "amashaneti",
      "kumaguru",
      "munda",
      "iyo kwizuru",
    ],
  },
  {
    name: "Amasaha",
    icon: amasaha,
    link: "categories/amasaha",
    subcategories: [
      "smart watch",
      "ayimibare",
      "ayurushinge",
      "arikumwe nibindi (set)",
    ],
  },
  {
    name: "Ibikoresho byo mu rugo",
    icon: rugo,
    link: "categories/ibikoresho-byo-mu-rugo",
    subcategories: [
      "mugikoni",
      "muri saloon",
      "mucyumba",
      "mubwogero",
      "ibyisuku",
      "imitako",
      "ibindi",
    ],
  },
  {
    name: "Abana",
    icon: abana,
    link: "categories/abana",
    subcategories: ["ibikinisho", "ibipupe", "ibifasha kwiga", "ibindi"],
  },
  {
    name: "Ibikoresho bya siporo",
    icon: siporo,
    link: "categories/ibikoresho-bya-sport",
    subcategories: [],
  },
  {
    name: "Ibikoresho by'ibinyabiziga",
    icon: ibinyabiziga,
    link: "categories/ibinyabizinga",
    subcategories: ["ibyamoto", "iby’imodoka", "iby’igare"],
  },
  {
    name: "Ibikapu",
    icon: ibikapu,
    link: "categories/ibikapu",
    subcategories: ["ibyabagabo", "ibyabagore", "ibindi"],
  },
  {
    name: "Ubwiza",
    icon: ubwiza,
    link: "categories/ubwiza",
    subcategories: [],
  },
  {
    name: "Imisatsi",
    icon: imisatsi,
    link: "categories/imisatsi",
    subcategories: ["imiti y’umusatsi", "ibikoresho by’umusatsi"],
  },
  {
    name: "Ikoranabuhanga",
    icon: ikoranabuhanga,
    link: "categories/ikoranabuhanga",
    subcategories: [
      "phones & accessories",
      "computer & accessories",
      "electronic devices & accessories",
      "office",
    ],
  },
  {
    name: "Ubuzima",
    icon: ubuzima,
    link: "categories/ubuzima",
    subcategories: ["kubyibuha & kunanuka", "uruhu", "amaso", "ibindi"],
  },
  {
    name: "Imyambaro",
    icon: imyambaro,
    link: "categories/imyambaro",
    subcategories: ["Amarinete", "Amashati", "Iby'abana", "inkweto", "ibindi"],
  },
  {
    name: "Ibindi",
    icon: ibindi,
    link: "/ibicuruzwa-byose",
    subcategories: [],
  },
];

export const languages = [
  {
    name: "En - US",
    icon: usa,
    code: "en",
  },
  {
    name: "Kinya",
    icon: rwanda,
    code: "rw",
  },
];

export const footerLinks = [
  {
    title: "Links z'ingenzi",
    links: [
      {
        text: "Ahabanza",
        link: "/",
      },
      {
        text: "Tumenye",
        link: "/tumenye",
      },
      {
        text: "Tuvugishe",
        link: "/tuvugishe",
      },
      {
        text: "Ubufasha",
        link: "/ubufasha",
      },
    ],
  },
];

export const footerActions = [
  {
    title: "Ibikorwa byihuse",
    links: [
      {
        text: "Ibyo wakunze",
        link: "/ibyo-wakunze",
      },
      {
        text: "Agatebo",
        link: "/agatebo",
      },
      {
        text: "Tumiza",
        link: "/tumiza",
      },
    ],
  },
];

export const homeSlider = [
  {
    icon: product,
    name: "Happy Clients, Happy Us",
    heading: "TUGIRA IBICURUZWA UTASANGA MU RWANDA",
    image: img1,
    desc: "Ibi bicuruzwa biba biri ku mafaranga make kandi bifite ubuziranenge, iyo unafite icyo ushaka ariko tudafite, uratwandikira tukakubwira niba twazakikubonera kandi iyo tuba twanakibona.",
  },
  {
    icon: deliver,
    name: "Happy Clients, Happy Us",
    heading: "TUBIKUZANIRA AHO URI HOSE MU RWANDA",
    image: img2,
    desc: "Mugukomeza korohereza abakiriya bacu, dufite serivisi ya delivery aho tukugezaho ibyo waguze byose haba mu ntara cyangwa muri kigali. Ibi tubikora byihuse kuko nko muri kigali ntiturenza isaha tutarakugezaho ibyo watumye naho mu ntara ho biterwa naho uri.",
  },
  {
    icon: payment,
    name: "Happy Clients, Happy Us",
    heading: "WISHYURA UMAZE KUBONA IBYO WATUMYE",
    image: img3,
    desc: "Ntakibazo gihari iyo umaze kugura, tukuzanira ibyo watumye maze ukishyura nyuma umaze kubibona kandi iyo ubibonye ukabona utabikunze, urabidusubiza ukishyura delivery fee gusa.",
  },
  {
    icon: categoriesImg,
    name: "Happy Clients, Happy Us",
    heading: "DUFITE CATEGORY ZOSE ZIBICURUZWA",
    image: img5,
    desc: "Iby'abana, amasaha, imikufe, ubwiza, imitako, ikoranabuhanga, imisatsi, ibikoresho by'imodoka n'ibindi byinshi…",
  },
];

export const team = [
  {
    img: team1,
    name: "RUKUNDO David",
    position: "Co-Founder&CEO",
  },
  {
    img: team2,
    name: "UWINEZA Linda",
    position: "Co-Founder&COO",
  },
  {
    img: team3,
    name: "KEZA Ange",
    position: "Product Designer",
  },
  {
    img: team4,
    name: "BAHATI Paul",
    position: "Manager",
  },
];

export const faqs = [
  {
    question: "Nihemart ni iki?",
    answer:
      "Ni company ikorera online, igurisha ibintu bitandukanye bitaboneka mu Rwanda. Ibi bintu ibigeza kuwabiguze atarinze ava aho ari.",
  },
  {
    question: "Nihemart idufasha iki? ",
    answer:
      "Nihe-mart irakenewe mu buzima bwa buri munsi bw'umunyarwanda wese, kuko idufasha kubona ibicuruzwa twabuze mu Rwanda, tukabibona vuba kandi kuri make.",
  },
  {
    question: "Ni gute nagurira kuri Nihemart?",
    answer:
      "1.Jya ahanditse ibicuruzwa  Jya ahanditse ibicuruzwa byose , cyagwa category, niba bidahagije ukoreshe ishakiro riri hejuru maze ushakishe igicuruzwa ushaka. \n 2. KANDA KURI NAGIKUNZE CYAGWA AGATEBO \n iyo ukanze kuri shyira mugatebo gihita cyijya hejuru ahari ishusho yagatebo, maze niba wakunze nibindi ushaka kubigurira rimwe ukomeza ukanda kuri shyira mugatebo maze bigakomeza kujya hamwe. ARIKO iyo ushaka kugura kimwe gusa, uhita ukanda kukamenyetso ka nagikunze maze ukahita ugura ako kanya utiriwe ubishyira hamwe nibindi.",
  },
  // {
  //     question: "Ni ibicuruzwa bingana iki bigurishirizwa kuri Nihemart?",
  //     answer: ""
  // },
  {
    question: "Ni gute nakorana na Nihe-Mart?",
    answer:
      "Ufite ibicuruzwa ushaka ko tugucururiza cyangwa ushaka gushora muri nihemart, watwandikira kuri email: nihemart@gmail.com / number: 0792412177",
  },
];

export const helpData = [
  {
    title: "Exclusive Products",
    desc: "Discover a range of exclusive products that are not available anywhere else. Our curated selection offers unique items at affordable prices, ensuring quality and value. If you can't find what you're looking for, let us know, and we'll do our best to source it for you at competitive prices.",
  },
  {
    title: "Nationwide Delivery",
    desc: "Enjoy the convenience of our nationwide delivery service. Whether you're in the city or a remote area, we bring your purchases right to your doorstep. We offer fast delivery times, with most orders in Kigali delivered within an hour, and delivery times to other regions depending on location.",
  },
  {
    title: "Pay on Delivery",
    desc: "Shop with confidence using our pay-on-delivery option. Receive your items, inspect them, and pay only if you're satisfied. If the product doesn't meet your expectations, you can return it at no additional cost, paying only the delivery fee.",
  },
  {
    title: "Wide Product Categories",
    desc: "Explore our extensive range of product categories, including electronics, fashion, beauty, home decor, children's products, and more. Whatever you're looking for, we have a category that covers it, ensuring a one-stop shopping experience.",
  },
  {
    title: "Easy Returns",
    desc: "Our easy returns policy ensures that you can shop without worry. If you're not completely satisfied with your purchase, return it within 30 days for a full refund. We make the process simple and hassle-free, so you can shop with peace of mind.",
  },
  {
    title: "Quality Assurance",
    desc: "We are committed to providing high-quality products. Our team carefully selects each item, ensuring it meets our strict standards for quality and safety. Shop with confidence knowing that all our products are vetted for quality.",
  },
];

export const likesData = [
  {
    img: likes1,
    name: "Car",
    price: 84845,
    updatedPrice: 8485883,
    quantity: 6,
  },
  {
    img: likes2,
    name: "Camera",
    price: 9844,
    updatedPrice: 98475,
    quantity: 2,
  },
  {
    img: likes3,
    name: "Sports Boots",
    price: 8943,
    updatedPrice: 88432,
    quantity: 9,
  },
  {
    img: likes4,
    name: "PlayStation",
    price: 2944,
    updatedPrice: 88445,
    quantity: 9,
  },
];
