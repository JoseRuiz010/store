import { uid } from "uid"

const generarId=()=> uid(9);

export const preguntasRespuestas = [
    {
        pregunta: "¿Horarios de atención?",
        respuesta: "Atendemos de Lunes a Viernes en horario corrido de 10hs a 21hs. Los días sábados únicamente por las mañanas de 10hs a 14hs."
    },
    {
        pregunta: "¿Cuál es la información para ser mayorista?",
        respuesta: "La compra mínima es de $2000 en 10 o más productos distintos por única vez. Es decir que, después de la misma, serán respetados los precios por mayor. De la misma forma, si deseas ser mayorista de celulares, la primera compra mínima es de 2 equipos diferentes, y luego se respetan los precios mayoristas. Todas las compras son en efectivo."
    },
    {
        pregunta: "¿Cuales son las formas de entrega?",
        respuesta: "- Mediante Cadeteria: el envío se despacha en el día, dentro del horario de atención, y el mismo queda a cargo del comprador a menos que el producto indique lo contrario. En caso de tener un producto con envió gratis, la compra completa será enviada sin cargo. Los precios del envió varían según zona y los precios los podrá ver cuando seleccione la opción “Envió con Cadetería”. - Mediante Correo: Los mismo son despachados por Correo Argentino o Andreani, dentro del plazo de 24hs hábiles. El plazo de entrega dependerá del correo y varía entre 24 y 72hs después de despachados los mismos. En caso de tener un producto con envió gratis, la compra completa será enviada sin cargo. Los precios los podrá ver cuando seleccione la opción “Envio por Correo”. - Retiro de sucursal: Realizada la compra, inmediatamente se reserva el stock, lo que le permite retirar dentro de las 48hs el producto."
    },
    {
        pregunta: "¿Cuales son las formas de pago?",
        respuesta: "-TARJETA DE CREDITO: recibimos tarjetas de crédito Visa, Mastercard, American Express, Naranja, Nevada, Titanio, SuCrédito y Credicash. Los planes de pago pueden ser en 1, 3, 6, 9 y 12 cuotas. Todas las compras con tarjetas de crédito tienen recargo sobre el valor publicado y el interés depende de la tarjeta utilizada y del número de cuotas elegido. El monto podrá ser visto durante el proceso de compra. Cuando la compra es realizada en el local, es posible realizar pagos parciales en efectivo y la diferencia con tarjeta de crédito aplicándose el interés únicamente en el monto realizado con tarjeta. CREDITO PERSONAL: al completar la compra, se realizara el análisis crediticio y uno de nuestros asesores se comunicara telefónicamente dentro de las 12hs para informar el acceso al crédito y los pasos a seguir."
    },
    {
        pregunta: "¿Tienen garantía los productos?",
        respuesta: "Todos nuestros productos tienen garantía de fábrica. Para validar la garantía, el producto tiene que estar en su Caja/Blister original con sus correspondientes manuales y accesorios, como así también conservar el comprobante de venta. El mal funcionamiento debido a daño físico o mal uso,invalida la garantía."
    },
    {
        pregunta: "¿Tienen cambio los productos?",
        respuesta: "Los cambios directos se realizan dentro de las 48hs de realizada la compra para auriculares y cables; 3 meses para accesorios; y 12 meses para celulares y tablets, siempre y cuando se cumpla con los requisitos de la garantía. Los cambios por arrepentimiento de compra por parte del cliente, se realizan únicamente en el local y por equivalente del monto adquirido inicialmente. Ocasionalmente podrá adquirir otro artículo de mayor valor abonando la diferencia correspondiente."
    },
]

export const categorias= [
    {
        id:generarId(),
        name:""
    },
    {
        id:generarId(),
        name:"Accesorios para Vehículos"
    },
    {
        id:generarId(),
        name:"Alimentos y Bebidas"
    },
    {
        id:generarId(),
        name:"Celulares y Teléfonos"
    },
    {
        id:generarId(),
        name:"Computación"
    },
    {
        id:generarId(),
        name:"Consolas y Videojuegos"
    },
    {
        id:generarId(),
        name:"Construcción"
    },
    {
        id:generarId(),
        name:"Deportes y Fitness"
    },
  
    {
        id:generarId(),
        name:"Herramientas"
    },
]

export const productos= [
    {
        id:generarId(),
        name:"TIRA DE LED PARA AUTO",
        imgUrl:"https://s3-us-west-2.amazonaws.com/assets.ximaro.net/pictures/files/000/005/084/original/KIT-LED-RGB-PARA-AUTO-AUDIORITMICO-01.jpg?1651528089",
        price:1500,
        category:"Accesorios para Vehículos"
    },
    {
        id:generarId(),
        name:"CARGADOR BATERIA",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_602515-MLA49373685369_032022-O.webp",
        price:26500,
        category:"Accesorios para Vehículos"
    },
    {
        id:generarId(),
        name:"Stereo Auto",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_971013-MLA48353057698_112021-F.webp",
        price:9.399,
        category:"Accesorios para Vehículos"
    },
    {
        id:generarId(),
        name:"Cerveza Warsteiner Lata 473ml X24",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_723495-MLA46569073047_062021-F.webp",
        price:1.843,
        category:"Alimentos y Bebidas"
    },
    {
        id:generarId(),
        name:"Cápsulas Nescafé Dolce Gusto",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_948563-MLA46983656323_082021-F.webp",
        price:812,
        category:"Alimentos y Bebidas"
    },
    {
        id:generarId(),
        name:"Dulce De Leche La Serenisima Clasico 400gr.",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_883310-MLA47354919628_092021-F.webp",
        price:210,
        category:"Alimentos y Bebidas"
    },
    {
        id:generarId(),
        name:"Cápsulas Café Cabrales X 10 U X 5,5 Gr",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_985431-MLA47481211132_092021-F.webp",
        price:744,
        category:"Alimentos y Bebidas"
    },
    {
        id:generarId(),
        name:"Fideos Spaghetti Lucchetti Paquete X 500",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_764696-MLA45793691932_052021-F.webp",
        price:90,
        category:"Alimentos y Bebidas"
    },
    {
        id:generarId(),
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_693192-MLA49303777722_032022-F.webp",
        price:198.899,
        category:"Celulares y Teléfonos"
    },
    {
        id:generarId(),
        name:"Xiaomi Redmi Note 10 Pro 6gb",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_815921-MLA46490094279_062021-F.webp",
        price:78.569,
        category:"Celulares y Teléfonos"
    },
    {
        id:generarId(),
        name:"Moto G200 5g 128gb 8gb Ram",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_744510-MLA49173911701_022022-F.webp",
        price:89.999,
        category:"Celulares y Teléfonos"
    },
    {
        id:generarId(),
        name:"Notebook Hp 15-dw1083la Intel Core I5 8gb 256gb Ssd Win 10",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_649833-MLA49499140967_032022-F.webp",
        price:99.999,
        category:"Computación"
    },
    {
        id:generarId(),
        name:"Notebook Banghó Max L4 ",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_649773-MLA48598959537_122021-F.webp",
        price:63.999,
        category:"Computación"
    },
    {
        id:generarId(),
        name:"Monitor Full Hd Benq Gw2480",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_875749-MLA49898016845_052022-F.webp",
        price:38.490,
        category:"Computación"
    },
    {
        id:generarId(),
        name:"Auriculares gamer HyperX Cloud",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_797175-MLA40446374744_012020-F.webp",
        price:14.990,
        category:"Computación"
    },
    {
        id:generarId(),
        name:"Microsoft Xbox Series S 512GB",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_627149-MLA44484230438_012021-F.webp",
        price:79.999,
        category:"Consolas y Videojuegos"
    },
    {
        id:generarId(),
        name:"Sony PlayStation 5 825GB",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_739160-MLA44484414453_012021-F.webp",
        price:173.999,
        category:"Consolas y Videojuegos"
    },
    {
        id:generarId(),
        name:"Nintendo Switch OLED 64GB",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_625423-MLA47920375564_102021-F.webp",
        price:118.528,
        category:"Consolas y Videojuegos"
    },
    {
        id:generarId(),
        name:"Kit Multimetro Digital + Pinza Amperometrica + Detector",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_740617-MLA49761301108_042022-F.webp",
        price:3.052,
        category:"Construcción"
    },
    {
        id:generarId(),
        name:"Griferia De Pared Doble Comando Pico Cisne",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_704842-MLA49064427222_022022-F.webp",
        price:4.499,
        category:"Construcción"
    },
    {
        id:generarId(),
        name:"Bomba Presurizadora ",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_881127-MLA47326810830_092021-F.webp",
        price:8.999,
        category:"Construcción"
    },
    {
        id:generarId(),
        name:"Bicicleta Nordic X 3.0 By Slp 21v R29",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_632617-MLA45120485931_032021-F.webp",
        price:38.399,
        category:"Deportes y Fitness"
    },
    {
        id:generarId(),
        name:"Whey Protein 3 Kg Star Nutrition Proteina De Suero",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_749331-MLA44866741258_022021-F.webp",
        price:10.551,
        category:"Deportes y Fitness"
    },
    {
        id:generarId(),
        name:"Kit 2 Mancuernas Pesas + 20 Kg Discos",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_812113-MLA47777959784_102021-F.webp",
        price:7.224,
        category:"Deportes y Fitness"
    },
    {
        id:generarId(),
        name:"Hidrolavadora Kommberg KB-HL1800",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_613388-MLA43416312988_092020-F.webp",
        price:16.140,
        category:"Herramientas"
    },
    {
        id:generarId(),
        name:"Taladro percutor eléctrico de 13mm Gamma",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_949700-MLA49522376911_032022-F.webp",
        price:9.278,
        category:"Herramientas"
    },
    {
        id:generarId(),
        name:"Rotomartillo Bosch Professional GBH 2-28",
        imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_705899-MLA42780532221_072020-F.webp",
        price:30.884,
        category:"Herramientas"
    },
]