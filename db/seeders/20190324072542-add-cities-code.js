"use strict";
const models = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {

    const cities =       [
      {
        "district" : "Kabol",
        "id" : 1,
        "countrycode" : "AFG",
        "name" : "Kabul",
        "population" : 1780000
      },
      {
        "district" : "Qandahar",
        "id" : 2,
        "countrycode" : "AFG",
        "name" : "Qandahar",
        "population" : 237500
      },
      {
        "district" : "Herat",
        "id" : 3,
        "countrycode" : "AFG",
        "name" : "Herat",
        "population" : 186800
      },
      {
        "district" : "Balkh",
        "id" : 4,
        "countrycode" : "AFG",
        "name" : "Mazar-e-Sharif",
        "population" : 127800
      },
      {
        "district" : "Noord-Holland",
        "id" : 5,
        "countrycode" : "NLD",
        "name" : "Amsterdam",
        "population" : 731200
      },
      {
        "district" : "Zuid-Holland",
        "id" : 6,
        "countrycode" : "NLD",
        "name" : "Rotterdam",
        "population" : 593321
      },
      {
        "district" : "Zuid-Holland",
        "id" : 7,
        "countrycode" : "NLD",
        "name" : "Haag",
        "population" : 440900
      },
      {
        "district" : "Utrecht",
        "id" : 8,
        "countrycode" : "NLD",
        "name" : "Utrecht",
        "population" : 234323
      },
      {
        "district" : "Noord-Brabant",
        "id" : 9,
        "countrycode" : "NLD",
        "name" : "Eindhoven",
        "population" : 201843
      },
      {
        "district" : "Noord-Brabant",
        "id" : 10,
        "countrycode" : "NLD",
        "name" : "Tilburg",
        "population" : 193238
      },
      {
        "district" : "Groningen",
        "id" : 11,
        "countrycode" : "NLD",
        "name" : "Groningen",
        "population" : 172701
      },
      {
        "district" : "Noord-Brabant",
        "id" : 12,
        "countrycode" : "NLD",
        "name" : "Breda",
        "population" : 160398
      },
      {
        "district" : "Gelderland",
        "id" : 13,
        "countrycode" : "NLD",
        "name" : "Apeldoorn",
        "population" : 153491
      },
      {
        "district" : "Gelderland",
        "id" : 14,
        "countrycode" : "NLD",
        "name" : "Nijmegen",
        "population" : 152463
      },
      {
        "district" : "Overijssel",
        "id" : 15,
        "countrycode" : "NLD",
        "name" : "Enschede",
        "population" : 149544
      },
      {
        "district" : "Noord-Holland",
        "id" : 16,
        "countrycode" : "NLD",
        "name" : "Haarlem",
        "population" : 148772
      },
      {
        "district" : "Flevoland",
        "id" : 17,
        "countrycode" : "NLD",
        "name" : "Almere",
        "population" : 142465
      },
      {
        "district" : "Gelderland",
        "id" : 18,
        "countrycode" : "NLD",
        "name" : "Arnhem",
        "population" : 138020
      },
      {
        "district" : "Noord-Holland",
        "id" : 19,
        "countrycode" : "NLD",
        "name" : "Zaanstad",
        "population" : 135621
      },
      {
        "district" : "Noord-Brabant",
        "id" : 20,
        "countrycode" : "NLD",
        "name" : "ï¿½s-Hertogenbosch",
        "population" : 129170
      },
      {
        "district" : "Utrecht",
        "id" : 21,
        "countrycode" : "NLD",
        "name" : "Amersfoort",
        "population" : 126270
      },
      {
        "district" : "Limburg",
        "id" : 22,
        "countrycode" : "NLD",
        "name" : "Maastricht",
        "population" : 122087
      },
      {
        "district" : "Zuid-Holland",
        "id" : 23,
        "countrycode" : "NLD",
        "name" : "Dordrecht",
        "population" : 119811
      },
      {
        "district" : "Zuid-Holland",
        "id" : 24,
        "countrycode" : "NLD",
        "name" : "Leiden",
        "population" : 117196
      },
      {
        "district" : "Noord-Holland",
        "id" : 25,
        "countrycode" : "NLD",
        "name" : "Haarlemmermeer",
        "population" : 110722
      },
      {
        "district" : "Zuid-Holland",
        "id" : 26,
        "countrycode" : "NLD",
        "name" : "Zoetermeer",
        "population" : 110214
      },
      {
        "district" : "Drenthe",
        "id" : 27,
        "countrycode" : "NLD",
        "name" : "Emmen",
        "population" : 105853
      },
      {
        "district" : "Overijssel",
        "id" : 28,
        "countrycode" : "NLD",
        "name" : "Zwolle",
        "population" : 105819
      },
      {
        "district" : "Gelderland",
        "id" : 29,
        "countrycode" : "NLD",
        "name" : "Ede",
        "population" : 101574
      },
      {
        "district" : "Zuid-Holland",
        "id" : 30,
        "countrycode" : "NLD",
        "name" : "Delft",
        "population" : 95268
      },
      {
        "district" : "Limburg",
        "id" : 31,
        "countrycode" : "NLD",
        "name" : "Heerlen",
        "population" : 95052
      },
      {
        "district" : "Noord-Holland",
        "id" : 32,
        "countrycode" : "NLD",
        "name" : "Alkmaar",
        "population" : 92713
      },
      {
        "district" : "Curaï¿½ao",
        "id" : 33,
        "countrycode" : "ANT",
        "name" : "Willemstad",
        "population" : 2345
      },
      {
        "district" : "Tirana",
        "id" : 34,
        "countrycode" : "ALB",
        "name" : "Tirana",
        "population" : 270000
      },
      {
        "district" : "Alger",
        "id" : 35,
        "countrycode" : "DZA",
        "name" : "Alger",
        "population" : 2168000
      },
      {
        "district" : "Oran",
        "id" : 36,
        "countrycode" : "DZA",
        "name" : "Oran",
        "population" : 609823
      },
      {
        "district" : "Constantine",
        "id" : 37,
        "countrycode" : "DZA",
        "name" : "Constantine",
        "population" : 443727
      },
      {
        "district" : "Annaba",
        "id" : 38,
        "countrycode" : "DZA",
        "name" : "Annaba",
        "population" : 222518
      },
      {
        "district" : "Batna",
        "id" : 39,
        "countrycode" : "DZA",
        "name" : "Batna",
        "population" : 183377
      },
      {
        "district" : "Sï¿½tif",
        "id" : 40,
        "countrycode" : "DZA",
        "name" : "Sï¿½tif",
        "population" : 179055
      },
      {
        "district" : "Sidi Bel Abbï¿½s",
        "id" : 41,
        "countrycode" : "DZA",
        "name" : "Sidi Bel Abbï¿½s",
        "population" : 153106
      },
      {
        "district" : "Skikda",
        "id" : 42,
        "countrycode" : "DZA",
        "name" : "Skikda",
        "population" : 128747
      },
      {
        "district" : "Biskra",
        "id" : 43,
        "countrycode" : "DZA",
        "name" : "Biskra",
        "population" : 128281
      },
      {
        "district" : "Blida",
        "id" : 44,
        "countrycode" : "DZA",
        "name" : "Blida (el-Boulaida)",
        "population" : 127284
      },
      {
        "district" : "Bï¿½jaï¿½a",
        "id" : 45,
        "countrycode" : "DZA",
        "name" : "Bï¿½jaï¿½a",
        "population" : 117162
      },
      {
        "district" : "Mostaganem",
        "id" : 46,
        "countrycode" : "DZA",
        "name" : "Mostaganem",
        "population" : 115212
      },
      {
        "district" : "Tï¿½bessa",
        "id" : 47,
        "countrycode" : "DZA",
        "name" : "Tï¿½bessa",
        "population" : 112007
      },
      {
        "district" : "Tlemcen",
        "id" : 48,
        "countrycode" : "DZA",
        "name" : "Tlemcen (Tilimsen)",
        "population" : 110242
      },
      {
        "district" : "Bï¿½char",
        "id" : 49,
        "countrycode" : "DZA",
        "name" : "Bï¿½char",
        "population" : 107311
      },
      {
        "district" : "Tiaret",
        "id" : 50,
        "countrycode" : "DZA",
        "name" : "Tiaret",
        "population" : 100118
      },
      {
        "district" : "Chlef",
        "id" : 51,
        "countrycode" : "DZA",
        "name" : "Ech-Chleff (el-Asnam)",
        "population" : 96794
      },
      {
        "district" : "Ghardaï¿½a",
        "id" : 52,
        "countrycode" : "DZA",
        "name" : "Ghardaï¿½a",
        "population" : 89415
      },
      {
        "district" : "Tutuila",
        "id" : 53,
        "countrycode" : "ASM",
        "name" : "Tafuna",
        "population" : 5200
      },
      {
        "district" : "Tutuila",
        "id" : 54,
        "countrycode" : "ASM",
        "name" : "Fagatogo",
        "population" : 2323
      },
      {
        "district" : "Andorra la Vella",
        "id" : 55,
        "countrycode" : "AND",
        "name" : "Andorra la Vella",
        "population" : 21189
      },
      {
        "district" : "Luanda",
        "id" : 56,
        "countrycode" : "AGO",
        "name" : "Luanda",
        "population" : 2022000
      },
      {
        "district" : "Huambo",
        "id" : 57,
        "countrycode" : "AGO",
        "name" : "Huambo",
        "population" : 163100
      },
      {
        "district" : "Benguela",
        "id" : 58,
        "countrycode" : "AGO",
        "name" : "Lobito",
        "population" : 130000
      },
      {
        "district" : "Benguela",
        "id" : 59,
        "countrycode" : "AGO",
        "name" : "Benguela",
        "population" : 128300
      },
      {
        "district" : "Namibe",
        "id" : 60,
        "countrycode" : "AGO",
        "name" : "Namibe",
        "population" : 118200
      },
      {
        "district" : "ï¿½",
        "id" : 61,
        "countrycode" : "AIA",
        "name" : "South Hill",
        "population" : 961
      },
      {
        "district" : "ï¿½",
        "id" : 62,
        "countrycode" : "AIA",
        "name" : "The Valley",
        "population" : 595
      },
      {
        "district" : "St John",
        "id" : 63,
        "countrycode" : "ATG",
        "name" : "Saint Johnï¿½s",
        "population" : 24000
      },
      {
        "district" : "Dubai",
        "id" : 64,
        "countrycode" : "ARE",
        "name" : "Dubai",
        "population" : 669181
      },
      {
        "district" : "Abu Dhabi",
        "id" : 65,
        "countrycode" : "ARE",
        "name" : "Abu Dhabi",
        "population" : 398695
      },
      {
        "district" : "Sharja",
        "id" : 66,
        "countrycode" : "ARE",
        "name" : "Sharja",
        "population" : 320095
      },
      {
        "district" : "Abu Dhabi",
        "id" : 67,
        "countrycode" : "ARE",
        "name" : "al-Ayn",
        "population" : 225970
      },
      {
        "district" : "Ajman",
        "id" : 68,
        "countrycode" : "ARE",
        "name" : "Ajman",
        "population" : 114395
      },
      {
        "district" : "Distrito Federal",
        "id" : 69,
        "countrycode" : "ARG",
        "name" : "Buenos Aires",
        "population" : 2982146
      },
      {
        "district" : "Buenos Aires",
        "id" : 70,
        "countrycode" : "ARG",
        "name" : "La Matanza",
        "population" : 1266461
      },
      {
        "district" : "Cï¿½rdoba",
        "id" : 71,
        "countrycode" : "ARG",
        "name" : "Cï¿½rdoba",
        "population" : 1157507
      },
      {
        "district" : "Santa Fï¿½",
        "id" : 72,
        "countrycode" : "ARG",
        "name" : "Rosario",
        "population" : 907718
      },
      {
        "district" : "Buenos Aires",
        "id" : 73,
        "countrycode" : "ARG",
        "name" : "Lomas de Zamora",
        "population" : 622013
      },
      {
        "district" : "Buenos Aires",
        "id" : 74,
        "countrycode" : "ARG",
        "name" : "Quilmes",
        "population" : 559249
      },
      {
        "district" : "Buenos Aires",
        "id" : 75,
        "countrycode" : "ARG",
        "name" : "Almirante Brown",
        "population" : 538918
      },
      {
        "district" : "Buenos Aires",
        "id" : 76,
        "countrycode" : "ARG",
        "name" : "La Plata",
        "population" : 521936
      },
      {
        "district" : "Buenos Aires",
        "id" : 77,
        "countrycode" : "ARG",
        "name" : "Mar del Plata",
        "population" : 512880
      },
      {
        "district" : "Tucumï¿½n",
        "id" : 78,
        "countrycode" : "ARG",
        "name" : "San Miguel de Tucumï¿½n",
        "population" : 470809
      },
      {
        "district" : "Buenos Aires",
        "id" : 79,
        "countrycode" : "ARG",
        "name" : "Lanï¿½s",
        "population" : 469735
      },
      {
        "district" : "Buenos Aires",
        "id" : 80,
        "countrycode" : "ARG",
        "name" : "Merlo",
        "population" : 463846
      },
      {
        "district" : "Buenos Aires",
        "id" : 81,
        "countrycode" : "ARG",
        "name" : "General San Martï¿½n",
        "population" : 422542
      },
      {
        "district" : "Salta",
        "id" : 82,
        "countrycode" : "ARG",
        "name" : "Salta",
        "population" : 367550
      },
      {
        "district" : "Buenos Aires",
        "id" : 83,
        "countrycode" : "ARG",
        "name" : "Moreno",
        "population" : 356993
      },
      {
        "district" : "Santa Fï¿½",
        "id" : 84,
        "countrycode" : "ARG",
        "name" : "Santa Fï¿½",
        "population" : 353063
      },
      {
        "district" : "Buenos Aires",
        "id" : 85,
        "countrycode" : "ARG",
        "name" : "Avellaneda",
        "population" : 353046
      },
      {
        "district" : "Buenos Aires",
        "id" : 86,
        "countrycode" : "ARG",
        "name" : "Tres de Febrero",
        "population" : 352311
      },
      {
        "district" : "Buenos Aires",
        "id" : 87,
        "countrycode" : "ARG",
        "name" : "Morï¿½n",
        "population" : 349246
      },
      {
        "district" : "Buenos Aires",
        "id" : 88,
        "countrycode" : "ARG",
        "name" : "Florencio Varela",
        "population" : 315432
      },
      {
        "district" : "Buenos Aires",
        "id" : 89,
        "countrycode" : "ARG",
        "name" : "San Isidro",
        "population" : 306341
      },
      {
        "district" : "Buenos Aires",
        "id" : 90,
        "countrycode" : "ARG",
        "name" : "Tigre",
        "population" : 296226
      },
      {
        "district" : "Buenos Aires",
        "id" : 91,
        "countrycode" : "ARG",
        "name" : "Malvinas Argentinas",
        "population" : 290335
      },
      {
        "district" : "Buenos Aires",
        "id" : 92,
        "countrycode" : "ARG",
        "name" : "Vicente Lï¿½pez",
        "population" : 288341
      },
      {
        "district" : "Buenos Aires",
        "id" : 93,
        "countrycode" : "ARG",
        "name" : "Berazategui",
        "population" : 276916
      },
      {
        "district" : "Corrientes",
        "id" : 94,
        "countrycode" : "ARG",
        "name" : "Corrientes",
        "population" : 258103
      },
      {
        "district" : "Buenos Aires",
        "id" : 95,
        "countrycode" : "ARG",
        "name" : "San Miguel",
        "population" : 248700
      },
      {
        "district" : "Buenos Aires",
        "id" : 96,
        "countrycode" : "ARG",
        "name" : "Bahï¿½a Blanca",
        "population" : 239810
      },
      {
        "district" : "Buenos Aires",
        "id" : 97,
        "countrycode" : "ARG",
        "name" : "Esteban Echeverrï¿½a",
        "population" : 235760
      },
      {
        "district" : "Chaco",
        "id" : 98,
        "countrycode" : "ARG",
        "name" : "Resistencia",
        "population" : 229212
      },
      {
        "district" : "Buenos Aires",
        "id" : 99,
        "countrycode" : "ARG",
        "name" : "Josï¿½ C. Paz",
        "population" : 221754
      },
      {
        "district" : "Entre Rios",
        "id" : 100,
        "countrycode" : "ARG",
        "name" : "Paranï¿½",
        "population" : 207041
      },
      {
        "district" : "Mendoza",
        "id" : 101,
        "countrycode" : "ARG",
        "name" : "Godoy Cruz",
        "population" : 206998
      },
      {
        "district" : "Misiones",
        "id" : 102,
        "countrycode" : "ARG",
        "name" : "Posadas",
        "population" : 201273
      },
      {
        "district" : "Mendoza",
        "id" : 103,
        "countrycode" : "ARG",
        "name" : "Guaymallï¿½n",
        "population" : 200595
      },
      {
        "district" : "Santiago del Estero",
        "id" : 104,
        "countrycode" : "ARG",
        "name" : "Santiago del Estero",
        "population" : 189947
      },
      {
        "district" : "Jujuy",
        "id" : 105,
        "countrycode" : "ARG",
        "name" : "San Salvador de Jujuy",
        "population" : 178748
      },
      {
        "district" : "Buenos Aires",
        "id" : 106,
        "countrycode" : "ARG",
        "name" : "Hurlingham",
        "population" : 170028
      },
      {
        "district" : "Neuquï¿½n",
        "id" : 107,
        "countrycode" : "ARG",
        "name" : "Neuquï¿½n",
        "population" : 167296
      },
      {
        "district" : "Buenos Aires",
        "id" : 108,
        "countrycode" : "ARG",
        "name" : "Ituzaingï¿½",
        "population" : 158197
      },
      {
        "district" : "Buenos Aires",
        "id" : 109,
        "countrycode" : "ARG",
        "name" : "San Fernando",
        "population" : 153036
      },
      {
        "district" : "Formosa",
        "id" : 110,
        "countrycode" : "ARG",
        "name" : "Formosa",
        "population" : 147636
      },
      {
        "district" : "Mendoza",
        "id" : 111,
        "countrycode" : "ARG",
        "name" : "Las Heras",
        "population" : 145823
      },
      {
        "district" : "La Rioja",
        "id" : 112,
        "countrycode" : "ARG",
        "name" : "La Rioja",
        "population" : 138117
      },
      {
        "district" : "Catamarca",
        "id" : 113,
        "countrycode" : "ARG",
        "name" : "San Fernando del Valle de Cata",
        "population" : 134935
      },
      {
        "district" : "Cï¿½rdoba",
        "id" : 114,
        "countrycode" : "ARG",
        "name" : "Rï¿½o Cuarto",
        "population" : 134355
      },
      {
        "district" : "Chubut",
        "id" : 115,
        "countrycode" : "ARG",
        "name" : "Comodoro Rivadavia",
        "population" : 124104
      },
      {
        "district" : "Mendoza",
        "id" : 116,
        "countrycode" : "ARG",
        "name" : "Mendoza",
        "population" : 123027
      },
      {
        "district" : "Buenos Aires",
        "id" : 117,
        "countrycode" : "ARG",
        "name" : "San Nicolï¿½s de los Arroyos",
        "population" : 119302
      },
      {
        "district" : "San Juan",
        "id" : 118,
        "countrycode" : "ARG",
        "name" : "San Juan",
        "population" : 119152
      },
      {
        "district" : "Buenos Aires",
        "id" : 119,
        "countrycode" : "ARG",
        "name" : "Escobar",
        "population" : 116675
      },
      {
        "district" : "Entre Rios",
        "id" : 120,
        "countrycode" : "ARG",
        "name" : "Concordia",
        "population" : 116485
      },
      {
        "district" : "Buenos Aires",
        "id" : 121,
        "countrycode" : "ARG",
        "name" : "Pilar",
        "population" : 113428
      },
      {
        "district" : "San Luis",
        "id" : 122,
        "countrycode" : "ARG",
        "name" : "San Luis",
        "population" : 110136
      },
      {
        "district" : "Buenos Aires",
        "id" : 123,
        "countrycode" : "ARG",
        "name" : "Ezeiza",
        "population" : 99578
      },
      {
        "district" : "Mendoza",
        "id" : 124,
        "countrycode" : "ARG",
        "name" : "San Rafael",
        "population" : 94651
      },
      {
        "district" : "Buenos Aires",
        "id" : 125,
        "countrycode" : "ARG",
        "name" : "Tandil",
        "population" : 91101
      },
      {
        "district" : "Yerevan",
        "id" : 126,
        "countrycode" : "ARM",
        "name" : "Yerevan",
        "population" : 1248700
      },
      {
        "district" : "ï¿½irak",
        "id" : 127,
        "countrycode" : "ARM",
        "name" : "Gjumri",
        "population" : 211700
      },
      {
        "district" : "Lori",
        "id" : 128,
        "countrycode" : "ARM",
        "name" : "Vanadzor",
        "population" : 172700
      },
      {
        "district" : "ï¿½",
        "id" : 129,
        "countrycode" : "ABW",
        "name" : "Oranjestad",
        "population" : 29034
      },
      {
        "district" : "New South Wales",
        "id" : 130,
        "countrycode" : "AUS",
        "name" : "Sydney",
        "population" : 3276207
      },
      {
        "district" : "Victoria",
        "id" : 131,
        "countrycode" : "AUS",
        "name" : "Melbourne",
        "population" : 2865329
      },
      {
        "district" : "Queensland",
        "id" : 132,
        "countrycode" : "AUS",
        "name" : "Brisbane",
        "population" : 1291117
      },
      {
        "district" : "West Australia",
        "id" : 133,
        "countrycode" : "AUS",
        "name" : "Perth",
        "population" : 1096829
      },
      {
        "district" : "South Australia",
        "id" : 134,
        "countrycode" : "AUS",
        "name" : "Adelaide",
        "population" : 978100
      },
      {
        "district" : "Capital Region",
        "id" : 135,
        "countrycode" : "AUS",
        "name" : "Canberra",
        "population" : 322723
      },
      {
        "district" : "Queensland",
        "id" : 136,
        "countrycode" : "AUS",
        "name" : "Gold Coast",
        "population" : 311932
      },
      {
        "district" : "New South Wales",
        "id" : 137,
        "countrycode" : "AUS",
        "name" : "Newcastle",
        "population" : 270324
      },
      {
        "district" : "New South Wales",
        "id" : 138,
        "countrycode" : "AUS",
        "name" : "Central Coast",
        "population" : 227657
      },
      {
        "district" : "New South Wales",
        "id" : 139,
        "countrycode" : "AUS",
        "name" : "Wollongong",
        "population" : 219761
      },
      {
        "district" : "Tasmania",
        "id" : 140,
        "countrycode" : "AUS",
        "name" : "Hobart",
        "population" : 126118
      },
      {
        "district" : "Victoria",
        "id" : 141,
        "countrycode" : "AUS",
        "name" : "Geelong",
        "population" : 125382
      },
      {
        "district" : "Queensland",
        "id" : 142,
        "countrycode" : "AUS",
        "name" : "Townsville",
        "population" : 109914
      },
      {
        "district" : "Queensland",
        "id" : 143,
        "countrycode" : "AUS",
        "name" : "Cairns",
        "population" : 92273
      },
      {
        "district" : "Baki",
        "id" : 144,
        "countrycode" : "AZE",
        "name" : "Baku",
        "population" : 1787800
      },
      {
        "district" : "Gï¿½ncï¿½",
        "id" : 145,
        "countrycode" : "AZE",
        "name" : "Gï¿½ncï¿½",
        "population" : 299300
      },
      {
        "district" : "Sumqayit",
        "id" : 146,
        "countrycode" : "AZE",
        "name" : "Sumqayit",
        "population" : 283000
      },
      {
        "district" : "Mingï¿½ï¿½evir",
        "id" : 147,
        "countrycode" : "AZE",
        "name" : "Mingï¿½ï¿½evir",
        "population" : 93900
      },
      {
        "district" : "New Providence",
        "id" : 148,
        "countrycode" : "BHS",
        "name" : "Nassau",
        "population" : 172000
      },
      {
        "district" : "al-Manama",
        "id" : 149,
        "countrycode" : "BHR",
        "name" : "al-Manama",
        "population" : 148000
      },
      {
        "district" : "Dhaka",
        "id" : 150,
        "countrycode" : "BGD",
        "name" : "Dhaka",
        "population" : 3612850
      },
      {
        "district" : "Chittagong",
        "id" : 151,
        "countrycode" : "BGD",
        "name" : "Chittagong",
        "population" : 1392860
      },
      {
        "district" : "Khulna",
        "id" : 152,
        "countrycode" : "BGD",
        "name" : "Khulna",
        "population" : 663340
      },
      {
        "district" : "Rajshahi",
        "id" : 153,
        "countrycode" : "BGD",
        "name" : "Rajshahi",
        "population" : 294056
      },
      {
        "district" : "Dhaka",
        "id" : 154,
        "countrycode" : "BGD",
        "name" : "Narayanganj",
        "population" : 202134
      },
      {
        "district" : "Rajshahi",
        "id" : 155,
        "countrycode" : "BGD",
        "name" : "Rangpur",
        "population" : 191398
      },
      {
        "district" : "Dhaka",
        "id" : 156,
        "countrycode" : "BGD",
        "name" : "Mymensingh",
        "population" : 188713
      },
      {
        "district" : "Barisal",
        "id" : 157,
        "countrycode" : "BGD",
        "name" : "Barisal",
        "population" : 170232
      },
      {
        "district" : "Dhaka",
        "id" : 158,
        "countrycode" : "BGD",
        "name" : "Tungi",
        "population" : 168702
      },
      {
        "district" : "Khulna",
        "id" : 159,
        "countrycode" : "BGD",
        "name" : "Jessore",
        "population" : 139710
      },
      {
        "district" : "Chittagong",
        "id" : 160,
        "countrycode" : "BGD",
        "name" : "Comilla",
        "population" : 135313
      },
      {
        "district" : "Rajshahi",
        "id" : 161,
        "countrycode" : "BGD",
        "name" : "Nawabganj",
        "population" : 130577
      },
      {
        "district" : "Rajshahi",
        "id" : 162,
        "countrycode" : "BGD",
        "name" : "Dinajpur",
        "population" : 127815
      },
      {
        "district" : "Rajshahi",
        "id" : 163,
        "countrycode" : "BGD",
        "name" : "Bogra",
        "population" : 120170
      },
      {
        "district" : "Sylhet",
        "id" : 164,
        "countrycode" : "BGD",
        "name" : "Sylhet",
        "population" : 117396
      },
      {
        "district" : "Chittagong",
        "id" : 165,
        "countrycode" : "BGD",
        "name" : "Brahmanbaria",
        "population" : 109032
      },
      {
        "district" : "Dhaka",
        "id" : 166,
        "countrycode" : "BGD",
        "name" : "Tangail",
        "population" : 106004
      },
      {
        "district" : "Dhaka",
        "id" : 167,
        "countrycode" : "BGD",
        "name" : "Jamalpur",
        "population" : 103556
      },
      {
        "district" : "Rajshahi",
        "id" : 168,
        "countrycode" : "BGD",
        "name" : "Pabna",
        "population" : 103277
      },
      {
        "district" : "Rajshahi",
        "id" : 169,
        "countrycode" : "BGD",
        "name" : "Naogaon",
        "population" : 101266
      },
      {
        "district" : "Rajshahi",
        "id" : 170,
        "countrycode" : "BGD",
        "name" : "Sirajganj",
        "population" : 99669
      },
      {
        "district" : "Dhaka",
        "id" : 171,
        "countrycode" : "BGD",
        "name" : "Narsinghdi",
        "population" : 98342
      },
      {
        "district" : "Rajshahi",
        "id" : 172,
        "countrycode" : "BGD",
        "name" : "Saidpur",
        "population" : 96777
      },
      {
        "district" : "Dhaka",
        "id" : 173,
        "countrycode" : "BGD",
        "name" : "Gazipur",
        "population" : 96717
      },
      {
        "district" : "St Michael",
        "id" : 174,
        "countrycode" : "BRB",
        "name" : "Bridgetown",
        "population" : 6070
      },
      {
        "district" : "Antwerpen",
        "id" : 175,
        "countrycode" : "BEL",
        "name" : "Antwerpen",
        "population" : 446525
      },
      {
        "district" : "East Flanderi",
        "id" : 176,
        "countrycode" : "BEL",
        "name" : "Gent",
        "population" : 224180
      },
      {
        "district" : "Hainaut",
        "id" : 177,
        "countrycode" : "BEL",
        "name" : "Charleroi",
        "population" : 200827
      },
      {
        "district" : "Liï¿½ge",
        "id" : 178,
        "countrycode" : "BEL",
        "name" : "Liï¿½ge",
        "population" : 185639
      },
      {
        "district" : "Bryssel",
        "id" : 179,
        "countrycode" : "BEL",
        "name" : "Bruxelles [Brussel]",
        "population" : 133859
      },
      {
        "district" : "West Flanderi",
        "id" : 180,
        "countrycode" : "BEL",
        "name" : "Brugge",
        "population" : 116246
      },
      {
        "district" : "Bryssel",
        "id" : 181,
        "countrycode" : "BEL",
        "name" : "Schaerbeek",
        "population" : 105692
      },
      {
        "district" : "Namur",
        "id" : 182,
        "countrycode" : "BEL",
        "name" : "Namur",
        "population" : 105419
      },
      {
        "district" : "Hainaut",
        "id" : 183,
        "countrycode" : "BEL",
        "name" : "Mons",
        "population" : 90935
      },
      {
        "district" : "Belize City",
        "id" : 184,
        "countrycode" : "BLZ",
        "name" : "Belize City",
        "population" : 55810
      },
      {
        "district" : "Cayo",
        "id" : 185,
        "countrycode" : "BLZ",
        "name" : "Belmopan",
        "population" : 7105
      },
      {
        "district" : "Atlantique",
        "id" : 186,
        "countrycode" : "BEN",
        "name" : "Cotonou",
        "population" : 536827
      },
      {
        "district" : "Ouï¿½mï¿½",
        "id" : 187,
        "countrycode" : "BEN",
        "name" : "Porto-Novo",
        "population" : 194000
      },
      {
        "district" : "Atacora",
        "id" : 188,
        "countrycode" : "BEN",
        "name" : "Djougou",
        "population" : 134099
      },
      {
        "district" : "Borgou",
        "id" : 189,
        "countrycode" : "BEN",
        "name" : "Parakou",
        "population" : 103577
      },
      {
        "district" : "Saint Georgeï¿½s",
        "id" : 190,
        "countrycode" : "BMU",
        "name" : "Saint George",
        "population" : 1800
      },
      {
        "district" : "Hamilton",
        "id" : 191,
        "countrycode" : "BMU",
        "name" : "Hamilton",
        "population" : 1200
      },
      {
        "district" : "Thimphu",
        "id" : 192,
        "countrycode" : "BTN",
        "name" : "Thimphu",
        "population" : 22000
      },
      {
        "district" : "Santa Cruz",
        "id" : 193,
        "countrycode" : "BOL",
        "name" : "Santa Cruz de la Sierra",
        "population" : 935361
      },
      {
        "district" : "La Paz",
        "id" : 194,
        "countrycode" : "BOL",
        "name" : "La Paz",
        "population" : 758141
      },
      {
        "district" : "La Paz",
        "id" : 195,
        "countrycode" : "BOL",
        "name" : "El Alto",
        "population" : 534466
      },
      {
        "district" : "Cochabamba",
        "id" : 196,
        "countrycode" : "BOL",
        "name" : "Cochabamba",
        "population" : 482800
      },
      {
        "district" : "Oruro",
        "id" : 197,
        "countrycode" : "BOL",
        "name" : "Oruro",
        "population" : 223553
      },
      {
        "district" : "Chuquisaca",
        "id" : 198,
        "countrycode" : "BOL",
        "name" : "Sucre",
        "population" : 178426
      },
      {
        "district" : "Potosï¿½",
        "id" : 199,
        "countrycode" : "BOL",
        "name" : "Potosï¿½",
        "population" : 140642
      },
      {
        "district" : "Tarija",
        "id" : 200,
        "countrycode" : "BOL",
        "name" : "Tarija",
        "population" : 125255
      },
      {
        "district" : "Federaatio",
        "id" : 201,
        "countrycode" : "BIH",
        "name" : "Sarajevo",
        "population" : 360000
      },
      {
        "district" : "Republika Srpska",
        "id" : 202,
        "countrycode" : "BIH",
        "name" : "Banja Luka",
        "population" : 143079
      },
      {
        "district" : "Federaatio",
        "id" : 203,
        "countrycode" : "BIH",
        "name" : "Zenica",
        "population" : 96027
      },
      {
        "district" : "Gaborone",
        "id" : 204,
        "countrycode" : "BWA",
        "name" : "Gaborone",
        "population" : 213017
      },
      {
        "district" : "Francistown",
        "id" : 205,
        "countrycode" : "BWA",
        "name" : "Francistown",
        "population" : 101805
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 206,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Paulo",
        "population" : 9968485
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 207,
        "countrycode" : "BRA",
        "name" : "Rio de Janeiro",
        "population" : 5598953
      },
      {
        "district" : "Bahia",
        "id" : 208,
        "countrycode" : "BRA",
        "name" : "Salvador",
        "population" : 2302832
      },
      {
        "district" : "Minas Gerais",
        "id" : 209,
        "countrycode" : "BRA",
        "name" : "Belo Horizonte",
        "population" : 2139125
      },
      {
        "district" : "Cearï¿½",
        "id" : 210,
        "countrycode" : "BRA",
        "name" : "Fortaleza",
        "population" : 2097757
      },
      {
        "district" : "Distrito Federal",
        "id" : 211,
        "countrycode" : "BRA",
        "name" : "Brasï¿½lia",
        "population" : 1969868
      },
      {
        "district" : "Paranï¿½",
        "id" : 212,
        "countrycode" : "BRA",
        "name" : "Curitiba",
        "population" : 1584232
      },
      {
        "district" : "Pernambuco",
        "id" : 213,
        "countrycode" : "BRA",
        "name" : "Recife",
        "population" : 1378087
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 214,
        "countrycode" : "BRA",
        "name" : "Porto Alegre",
        "population" : 1314032
      },
      {
        "district" : "Amazonas",
        "id" : 215,
        "countrycode" : "BRA",
        "name" : "Manaus",
        "population" : 1255049
      },
      {
        "district" : "Parï¿½",
        "id" : 216,
        "countrycode" : "BRA",
        "name" : "Belï¿½m",
        "population" : 1186926
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 217,
        "countrycode" : "BRA",
        "name" : "Guarulhos",
        "population" : 1095874
      },
      {
        "district" : "Goiï¿½s",
        "id" : 218,
        "countrycode" : "BRA",
        "name" : "Goiï¿½nia",
        "population" : 1056330
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 219,
        "countrycode" : "BRA",
        "name" : "Campinas",
        "population" : 950043
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 220,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Gonï¿½alo",
        "population" : 869254
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 221,
        "countrycode" : "BRA",
        "name" : "Nova Iguaï¿½u",
        "population" : 862225
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 222,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Luï¿½s",
        "population" : 837588
      },
      {
        "district" : "Alagoas",
        "id" : 223,
        "countrycode" : "BRA",
        "name" : "Maceiï¿½",
        "population" : 786288
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 224,
        "countrycode" : "BRA",
        "name" : "Duque de Caxias",
        "population" : 746758
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 225,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Bernardo do Campo",
        "population" : 723132
      },
      {
        "district" : "Piauï¿½",
        "id" : 226,
        "countrycode" : "BRA",
        "name" : "Teresina",
        "population" : 691942
      },
      {
        "district" : "Rio Grande do Norte",
        "id" : 227,
        "countrycode" : "BRA",
        "name" : "Natal",
        "population" : 688955
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 228,
        "countrycode" : "BRA",
        "name" : "Osasco",
        "population" : 659604
      },
      {
        "district" : "Mato Grosso do Sul",
        "id" : 229,
        "countrycode" : "BRA",
        "name" : "Campo Grande",
        "population" : 649593
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 230,
        "countrycode" : "BRA",
        "name" : "Santo Andrï¿½",
        "population" : 630073
      },
      {
        "district" : "Paraï¿½ba",
        "id" : 231,
        "countrycode" : "BRA",
        "name" : "Joï¿½o Pessoa",
        "population" : 584029
      },
      {
        "district" : "Pernambuco",
        "id" : 232,
        "countrycode" : "BRA",
        "name" : "Jaboatï¿½o dos Guararapes",
        "population" : 558680
      },
      {
        "district" : "Minas Gerais",
        "id" : 233,
        "countrycode" : "BRA",
        "name" : "Contagem",
        "population" : 520801
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 234,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Josï¿½ dos Campos",
        "population" : 515553
      },
      {
        "district" : "Minas Gerais",
        "id" : 235,
        "countrycode" : "BRA",
        "name" : "Uberlï¿½ndia",
        "population" : 487222
      },
      {
        "district" : "Bahia",
        "id" : 236,
        "countrycode" : "BRA",
        "name" : "Feira de Santana",
        "population" : 479992
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 237,
        "countrycode" : "BRA",
        "name" : "Ribeirï¿½o Preto",
        "population" : 473276
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 238,
        "countrycode" : "BRA",
        "name" : "Sorocaba",
        "population" : 466823
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 239,
        "countrycode" : "BRA",
        "name" : "Niterï¿½i",
        "population" : 459884
      },
      {
        "district" : "Mato Grosso",
        "id" : 240,
        "countrycode" : "BRA",
        "name" : "Cuiabï¿½",
        "population" : 453813
      },
      {
        "district" : "Minas Gerais",
        "id" : 241,
        "countrycode" : "BRA",
        "name" : "Juiz de Fora",
        "population" : 450288
      },
      {
        "district" : "Sergipe",
        "id" : 242,
        "countrycode" : "BRA",
        "name" : "Aracaju",
        "population" : 445555
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 243,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Joï¿½o de Meriti",
        "population" : 440052
      },
      {
        "district" : "Paranï¿½",
        "id" : 244,
        "countrycode" : "BRA",
        "name" : "Londrina",
        "population" : 432257
      },
      {
        "district" : "Santa Catarina",
        "id" : 245,
        "countrycode" : "BRA",
        "name" : "Joinville",
        "population" : 428011
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 246,
        "countrycode" : "BRA",
        "name" : "Belford Roxo",
        "population" : 425194
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 247,
        "countrycode" : "BRA",
        "name" : "Santos",
        "population" : 408748
      },
      {
        "district" : "Parï¿½",
        "id" : 248,
        "countrycode" : "BRA",
        "name" : "Ananindeua",
        "population" : 400940
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 249,
        "countrycode" : "BRA",
        "name" : "Campos dos Goytacazes",
        "population" : 398418
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 250,
        "countrycode" : "BRA",
        "name" : "Mauï¿½",
        "population" : 375055
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 251,
        "countrycode" : "BRA",
        "name" : "Carapicuï¿½ba",
        "population" : 357552
      },
      {
        "district" : "Pernambuco",
        "id" : 252,
        "countrycode" : "BRA",
        "name" : "Olinda",
        "population" : 354732
      },
      {
        "district" : "Paraï¿½ba",
        "id" : 253,
        "countrycode" : "BRA",
        "name" : "Campina Grande",
        "population" : 352497
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 254,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Josï¿½ do Rio Preto",
        "population" : 351944
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 255,
        "countrycode" : "BRA",
        "name" : "Caxias do Sul",
        "population" : 349581
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 256,
        "countrycode" : "BRA",
        "name" : "Moji das Cruzes",
        "population" : 339194
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 257,
        "countrycode" : "BRA",
        "name" : "Diadema",
        "population" : 335078
      },
      {
        "district" : "Goiï¿½s",
        "id" : 258,
        "countrycode" : "BRA",
        "name" : "Aparecida de Goiï¿½nia",
        "population" : 324662
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 259,
        "countrycode" : "BRA",
        "name" : "Piracicaba",
        "population" : 319104
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 260,
        "countrycode" : "BRA",
        "name" : "Cariacica",
        "population" : 319033
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 261,
        "countrycode" : "BRA",
        "name" : "Vila Velha",
        "population" : 318758
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 262,
        "countrycode" : "BRA",
        "name" : "Pelotas",
        "population" : 315415
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 263,
        "countrycode" : "BRA",
        "name" : "Bauru",
        "population" : 313670
      },
      {
        "district" : "Rondï¿½nia",
        "id" : 264,
        "countrycode" : "BRA",
        "name" : "Porto Velho",
        "population" : 309750
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 265,
        "countrycode" : "BRA",
        "name" : "Serra",
        "population" : 302666
      },
      {
        "district" : "Minas Gerais",
        "id" : 266,
        "countrycode" : "BRA",
        "name" : "Betim",
        "population" : 302108
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 267,
        "countrycode" : "BRA",
        "name" : "Jundï¿½aï¿½",
        "population" : 296127
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 268,
        "countrycode" : "BRA",
        "name" : "Canoas",
        "population" : 294125
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 269,
        "countrycode" : "BRA",
        "name" : "Franca",
        "population" : 290139
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 270,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Vicente",
        "population" : 286848
      },
      {
        "district" : "Paranï¿½",
        "id" : 271,
        "countrycode" : "BRA",
        "name" : "Maringï¿½",
        "population" : 286461
      },
      {
        "district" : "Minas Gerais",
        "id" : 272,
        "countrycode" : "BRA",
        "name" : "Montes Claros",
        "population" : 286058
      },
      {
        "district" : "Goiï¿½s",
        "id" : 273,
        "countrycode" : "BRA",
        "name" : "Anï¿½polis",
        "population" : 282197
      },
      {
        "district" : "Santa Catarina",
        "id" : 274,
        "countrycode" : "BRA",
        "name" : "Florianï¿½polis",
        "population" : 281928
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 275,
        "countrycode" : "BRA",
        "name" : "Petrï¿½polis",
        "population" : 279183
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 276,
        "countrycode" : "BRA",
        "name" : "Itaquaquecetuba",
        "population" : 270874
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 277,
        "countrycode" : "BRA",
        "name" : "Vitï¿½ria",
        "population" : 270626
      },
      {
        "district" : "Paranï¿½",
        "id" : 278,
        "countrycode" : "BRA",
        "name" : "Ponta Grossa",
        "population" : 268013
      },
      {
        "district" : "Acre",
        "id" : 279,
        "countrycode" : "BRA",
        "name" : "Rio Branco",
        "population" : 259537
      },
      {
        "district" : "Paranï¿½",
        "id" : 280,
        "countrycode" : "BRA",
        "name" : "Foz do Iguaï¿½u",
        "population" : 259425
      },
      {
        "district" : "Amapï¿½",
        "id" : 281,
        "countrycode" : "BRA",
        "name" : "Macapï¿½",
        "population" : 256033
      },
      {
        "district" : "Bahia",
        "id" : 282,
        "countrycode" : "BRA",
        "name" : "Ilhï¿½us",
        "population" : 254970
      },
      {
        "district" : "Bahia",
        "id" : 283,
        "countrycode" : "BRA",
        "name" : "Vitï¿½ria da Conquista",
        "population" : 253587
      },
      {
        "district" : "Minas Gerais",
        "id" : 284,
        "countrycode" : "BRA",
        "name" : "Uberaba",
        "population" : 249225
      },
      {
        "district" : "Pernambuco",
        "id" : 285,
        "countrycode" : "BRA",
        "name" : "Paulista",
        "population" : 248473
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 286,
        "countrycode" : "BRA",
        "name" : "Limeira",
        "population" : 245497
      },
      {
        "district" : "Santa Catarina",
        "id" : 287,
        "countrycode" : "BRA",
        "name" : "Blumenau",
        "population" : 244379
      },
      {
        "district" : "Pernambuco",
        "id" : 288,
        "countrycode" : "BRA",
        "name" : "Caruaru",
        "population" : 244247
      },
      {
        "district" : "Parï¿½",
        "id" : 289,
        "countrycode" : "BRA",
        "name" : "Santarï¿½m",
        "population" : 241771
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 290,
        "countrycode" : "BRA",
        "name" : "Volta Redonda",
        "population" : 240315
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 291,
        "countrycode" : "BRA",
        "name" : "Novo Hamburgo",
        "population" : 239940
      },
      {
        "district" : "Cearï¿½",
        "id" : 292,
        "countrycode" : "BRA",
        "name" : "Caucaia",
        "population" : 238738
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 293,
        "countrycode" : "BRA",
        "name" : "Santa Maria",
        "population" : 238473
      },
      {
        "district" : "Paranï¿½",
        "id" : 294,
        "countrycode" : "BRA",
        "name" : "Cascavel",
        "population" : 237510
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 295,
        "countrycode" : "BRA",
        "name" : "Guarujï¿½",
        "population" : 237206
      },
      {
        "district" : "Minas Gerais",
        "id" : 296,
        "countrycode" : "BRA",
        "name" : "Ribeirï¿½o das Neves",
        "population" : 232685
      },
      {
        "district" : "Minas Gerais",
        "id" : 297,
        "countrycode" : "BRA",
        "name" : "Governador Valadares",
        "population" : 231724
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 298,
        "countrycode" : "BRA",
        "name" : "Taubatï¿½",
        "population" : 229130
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 299,
        "countrycode" : "BRA",
        "name" : "Imperatriz",
        "population" : 224564
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 300,
        "countrycode" : "BRA",
        "name" : "Gravataï¿½",
        "population" : 223011
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 301,
        "countrycode" : "BRA",
        "name" : "Embu",
        "population" : 222223
      },
      {
        "district" : "Rio Grande do Norte",
        "id" : 302,
        "countrycode" : "BRA",
        "name" : "Mossorï¿½",
        "population" : 214901
      },
      {
        "district" : "Mato Grosso",
        "id" : 303,
        "countrycode" : "BRA",
        "name" : "Vï¿½rzea Grande",
        "population" : 214435
      },
      {
        "district" : "Pernambuco",
        "id" : 304,
        "countrycode" : "BRA",
        "name" : "Petrolina",
        "population" : 210540
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 305,
        "countrycode" : "BRA",
        "name" : "Barueri",
        "population" : 208426
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 306,
        "countrycode" : "BRA",
        "name" : "Viamï¿½o",
        "population" : 207557
      },
      {
        "district" : "Minas Gerais",
        "id" : 307,
        "countrycode" : "BRA",
        "name" : "Ipatinga",
        "population" : 206338
      },
      {
        "district" : "Bahia",
        "id" : 308,
        "countrycode" : "BRA",
        "name" : "Juazeiro",
        "population" : 201073
      },
      {
        "district" : "Cearï¿½",
        "id" : 309,
        "countrycode" : "BRA",
        "name" : "Juazeiro do Norte",
        "population" : 199636
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 310,
        "countrycode" : "BRA",
        "name" : "Taboï¿½o da Serra",
        "population" : 197550
      },
      {
        "district" : "Paranï¿½",
        "id" : 311,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Josï¿½ dos Pinhais",
        "population" : 196884
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 312,
        "countrycode" : "BRA",
        "name" : "Magï¿½",
        "population" : 196147
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 313,
        "countrycode" : "BRA",
        "name" : "Suzano",
        "population" : 195434
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 314,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Leopoldo",
        "population" : 189258
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 315,
        "countrycode" : "BRA",
        "name" : "Marï¿½lia",
        "population" : 188691
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 316,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Carlos",
        "population" : 187122
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 317,
        "countrycode" : "BRA",
        "name" : "Sumarï¿½",
        "population" : 186205
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 318,
        "countrycode" : "BRA",
        "name" : "Presidente Prudente",
        "population" : 185340
      },
      {
        "district" : "Minas Gerais",
        "id" : 319,
        "countrycode" : "BRA",
        "name" : "Divinï¿½polis",
        "population" : 185047
      },
      {
        "district" : "Minas Gerais",
        "id" : 320,
        "countrycode" : "BRA",
        "name" : "Sete Lagoas",
        "population" : 182984
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 321,
        "countrycode" : "BRA",
        "name" : "Rio Grande",
        "population" : 182222
      },
      {
        "district" : "Bahia",
        "id" : 322,
        "countrycode" : "BRA",
        "name" : "Itabuna",
        "population" : 182148
      },
      {
        "district" : "Bahia",
        "id" : 323,
        "countrycode" : "BRA",
        "name" : "Jequiï¿½",
        "population" : 179128
      },
      {
        "district" : "Alagoas",
        "id" : 324,
        "countrycode" : "BRA",
        "name" : "Arapiraca",
        "population" : 178988
      },
      {
        "district" : "Paranï¿½",
        "id" : 325,
        "countrycode" : "BRA",
        "name" : "Colombo",
        "population" : 177764
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 326,
        "countrycode" : "BRA",
        "name" : "Americana",
        "population" : 177409
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 327,
        "countrycode" : "BRA",
        "name" : "Alvorada",
        "population" : 175574
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 328,
        "countrycode" : "BRA",
        "name" : "Araraquara",
        "population" : 174381
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 329,
        "countrycode" : "BRA",
        "name" : "Itaboraï¿½",
        "population" : 173977
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 330,
        "countrycode" : "BRA",
        "name" : "Santa Bï¿½rbara dï¿½Oeste",
        "population" : 171657
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 331,
        "countrycode" : "BRA",
        "name" : "Nova Friburgo",
        "population" : 170697
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 332,
        "countrycode" : "BRA",
        "name" : "Jacareï¿½",
        "population" : 170356
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 333,
        "countrycode" : "BRA",
        "name" : "Araï¿½atuba",
        "population" : 169303
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 334,
        "countrycode" : "BRA",
        "name" : "Barra Mansa",
        "population" : 168953
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 335,
        "countrycode" : "BRA",
        "name" : "Praia Grande",
        "population" : 168434
      },
      {
        "district" : "Parï¿½",
        "id" : 336,
        "countrycode" : "BRA",
        "name" : "Marabï¿½",
        "population" : 167795
      },
      {
        "district" : "Santa Catarina",
        "id" : 337,
        "countrycode" : "BRA",
        "name" : "Criciï¿½ma",
        "population" : 167661
      },
      {
        "district" : "Roraima",
        "id" : 338,
        "countrycode" : "BRA",
        "name" : "Boa Vista",
        "population" : 167185
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 339,
        "countrycode" : "BRA",
        "name" : "Passo Fundo",
        "population" : 166343
      },
      {
        "district" : "Mato Grosso do Sul",
        "id" : 340,
        "countrycode" : "BRA",
        "name" : "Dourados",
        "population" : 164716
      },
      {
        "district" : "Minas Gerais",
        "id" : 341,
        "countrycode" : "BRA",
        "name" : "Santa Luzia",
        "population" : 164704
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 342,
        "countrycode" : "BRA",
        "name" : "Rio Claro",
        "population" : 163551
      },
      {
        "district" : "Cearï¿½",
        "id" : 343,
        "countrycode" : "BRA",
        "name" : "Maracanaï¿½",
        "population" : 162022
      },
      {
        "district" : "Paranï¿½",
        "id" : 344,
        "countrycode" : "BRA",
        "name" : "Guarapuava",
        "population" : 160510
      },
      {
        "district" : "Mato Grosso",
        "id" : 345,
        "countrycode" : "BRA",
        "name" : "Rondonï¿½polis",
        "population" : 155115
      },
      {
        "district" : "Santa Catarina",
        "id" : 346,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Josï¿½",
        "population" : 155105
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 347,
        "countrycode" : "BRA",
        "name" : "Cachoeiro de Itapemirim",
        "population" : 155024
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 348,
        "countrycode" : "BRA",
        "name" : "Nilï¿½polis",
        "population" : 153383
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 349,
        "countrycode" : "BRA",
        "name" : "Itapevi",
        "population" : 150664
      },
      {
        "district" : "Pernambuco",
        "id" : 350,
        "countrycode" : "BRA",
        "name" : "Cabo de Santo Agostinho",
        "population" : 149964
      },
      {
        "district" : "Bahia",
        "id" : 351,
        "countrycode" : "BRA",
        "name" : "Camaï¿½ari",
        "population" : 149146
      },
      {
        "district" : "Cearï¿½",
        "id" : 352,
        "countrycode" : "BRA",
        "name" : "Sobral",
        "population" : 146005
      },
      {
        "district" : "Santa Catarina",
        "id" : 353,
        "countrycode" : "BRA",
        "name" : "Itajaï¿½",
        "population" : 145197
      },
      {
        "district" : "Santa Catarina",
        "id" : 354,
        "countrycode" : "BRA",
        "name" : "Chapecï¿½",
        "population" : 144158
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 355,
        "countrycode" : "BRA",
        "name" : "Cotia",
        "population" : 140042
      },
      {
        "district" : "Santa Catarina",
        "id" : 356,
        "countrycode" : "BRA",
        "name" : "Lages",
        "population" : 139570
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 357,
        "countrycode" : "BRA",
        "name" : "Ferraz de Vasconcelos",
        "population" : 139283
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 358,
        "countrycode" : "BRA",
        "name" : "Indaiatuba",
        "population" : 135968
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 359,
        "countrycode" : "BRA",
        "name" : "Hortolï¿½ndia",
        "population" : 135755
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 360,
        "countrycode" : "BRA",
        "name" : "Caxias",
        "population" : 133980
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 361,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Caetano do Sul",
        "population" : 133321
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 362,
        "countrycode" : "BRA",
        "name" : "Itu",
        "population" : 132736
      },
      {
        "district" : "Sergipe",
        "id" : 363,
        "countrycode" : "BRA",
        "name" : "Nossa Senhora do Socorro",
        "population" : 131351
      },
      {
        "district" : "Piauï¿½",
        "id" : 364,
        "countrycode" : "BRA",
        "name" : "Parnaï¿½ba",
        "population" : 129756
      },
      {
        "district" : "Minas Gerais",
        "id" : 365,
        "countrycode" : "BRA",
        "name" : "Poï¿½os de Caldas",
        "population" : 129683
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 366,
        "countrycode" : "BRA",
        "name" : "Teresï¿½polis",
        "population" : 128079
      },
      {
        "district" : "Bahia",
        "id" : 367,
        "countrycode" : "BRA",
        "name" : "Barreiras",
        "population" : 127801
      },
      {
        "district" : "Parï¿½",
        "id" : 368,
        "countrycode" : "BRA",
        "name" : "Castanhal",
        "population" : 127634
      },
      {
        "district" : "Bahia",
        "id" : 369,
        "countrycode" : "BRA",
        "name" : "Alagoinhas",
        "population" : 126820
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 370,
        "countrycode" : "BRA",
        "name" : "Itapecerica da Serra",
        "population" : 126672
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 371,
        "countrycode" : "BRA",
        "name" : "Uruguaiana",
        "population" : 126305
      },
      {
        "district" : "Paranï¿½",
        "id" : 372,
        "countrycode" : "BRA",
        "name" : "Paranaguï¿½",
        "population" : 126076
      },
      {
        "district" : "Minas Gerais",
        "id" : 373,
        "countrycode" : "BRA",
        "name" : "Ibiritï¿½",
        "population" : 125982
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 374,
        "countrycode" : "BRA",
        "name" : "Timon",
        "population" : 125812
      },
      {
        "district" : "Goiï¿½s",
        "id" : 375,
        "countrycode" : "BRA",
        "name" : "Luziï¿½nia",
        "population" : 125597
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 376,
        "countrycode" : "BRA",
        "name" : "Macaï¿½",
        "population" : 125597
      },
      {
        "district" : "Minas Gerais",
        "id" : 377,
        "countrycode" : "BRA",
        "name" : "Teï¿½filo Otoni",
        "population" : 124489
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 378,
        "countrycode" : "BRA",
        "name" : "Moji-Guaï¿½u",
        "population" : 123782
      },
      {
        "district" : "Tocantins",
        "id" : 379,
        "countrycode" : "BRA",
        "name" : "Palmas",
        "population" : 121919
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 380,
        "countrycode" : "BRA",
        "name" : "Pindamonhangaba",
        "population" : 121904
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 381,
        "countrycode" : "BRA",
        "name" : "Francisco Morato",
        "population" : 121197
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 382,
        "countrycode" : "BRA",
        "name" : "Bagï¿½",
        "population" : 120793
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 383,
        "countrycode" : "BRA",
        "name" : "Sapucaia do Sul",
        "population" : 120217
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 384,
        "countrycode" : "BRA",
        "name" : "Cabo Frio",
        "population" : 119503
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 385,
        "countrycode" : "BRA",
        "name" : "Itapetininga",
        "population" : 119391
      },
      {
        "district" : "Minas Gerais",
        "id" : 386,
        "countrycode" : "BRA",
        "name" : "Patos de Minas",
        "population" : 119262
      },
      {
        "district" : "Pernambuco",
        "id" : 387,
        "countrycode" : "BRA",
        "name" : "Camaragibe",
        "population" : 118968
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 388,
        "countrycode" : "BRA",
        "name" : "Braganï¿½a Paulista",
        "population" : 116929
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 389,
        "countrycode" : "BRA",
        "name" : "Queimados",
        "population" : 115020
      },
      {
        "district" : "Tocantins",
        "id" : 390,
        "countrycode" : "BRA",
        "name" : "Araguaï¿½na",
        "population" : 114948
      },
      {
        "district" : "Pernambuco",
        "id" : 391,
        "countrycode" : "BRA",
        "name" : "Garanhuns",
        "population" : 114603
      },
      {
        "district" : "Pernambuco",
        "id" : 392,
        "countrycode" : "BRA",
        "name" : "Vitï¿½ria de Santo Antï¿½o",
        "population" : 113595
      },
      {
        "district" : "Paraï¿½ba",
        "id" : 393,
        "countrycode" : "BRA",
        "name" : "Santa Rita",
        "population" : 113135
      },
      {
        "district" : "Minas Gerais",
        "id" : 394,
        "countrycode" : "BRA",
        "name" : "Barbacena",
        "population" : 113079
      },
      {
        "district" : "Parï¿½",
        "id" : 395,
        "countrycode" : "BRA",
        "name" : "Abaetetuba",
        "population" : 111258
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 396,
        "countrycode" : "BRA",
        "name" : "Jaï¿½",
        "population" : 109965
      },
      {
        "district" : "Bahia",
        "id" : 397,
        "countrycode" : "BRA",
        "name" : "Lauro de Freitas",
        "population" : 109236
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 398,
        "countrycode" : "BRA",
        "name" : "Franco da Rocha",
        "population" : 108964
      },
      {
        "district" : "Bahia",
        "id" : 399,
        "countrycode" : "BRA",
        "name" : "Teixeira de Freitas",
        "population" : 108441
      },
      {
        "district" : "Minas Gerais",
        "id" : 400,
        "countrycode" : "BRA",
        "name" : "Varginha",
        "population" : 108314
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 401,
        "countrycode" : "BRA",
        "name" : "Ribeirï¿½o Pires",
        "population" : 108121
      },
      {
        "district" : "Minas Gerais",
        "id" : 402,
        "countrycode" : "BRA",
        "name" : "Sabarï¿½",
        "population" : 107781
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 403,
        "countrycode" : "BRA",
        "name" : "Catanduva",
        "population" : 107761
      },
      {
        "district" : "Goiï¿½s",
        "id" : 404,
        "countrycode" : "BRA",
        "name" : "Rio Verde",
        "population" : 107755
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 405,
        "countrycode" : "BRA",
        "name" : "Botucatu",
        "population" : 107663
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 406,
        "countrycode" : "BRA",
        "name" : "Colatina",
        "population" : 107354
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 407,
        "countrycode" : "BRA",
        "name" : "Santa Cruz do Sul",
        "population" : 106734
      },
      {
        "district" : "Espï¿½rito Santo",
        "id" : 408,
        "countrycode" : "BRA",
        "name" : "Linhares",
        "population" : 106278
      },
      {
        "district" : "Paranï¿½",
        "id" : 409,
        "countrycode" : "BRA",
        "name" : "Apucarana",
        "population" : 105114
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 410,
        "countrycode" : "BRA",
        "name" : "Barretos",
        "population" : 104156
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 411,
        "countrycode" : "BRA",
        "name" : "Guaratinguetï¿½",
        "population" : 103433
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 412,
        "countrycode" : "BRA",
        "name" : "Cachoeirinha",
        "population" : 103240
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 413,
        "countrycode" : "BRA",
        "name" : "Codï¿½",
        "population" : 103153
      },
      {
        "district" : "Santa Catarina",
        "id" : 414,
        "countrycode" : "BRA",
        "name" : "Jaraguï¿½ do Sul",
        "population" : 102580
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 415,
        "countrycode" : "BRA",
        "name" : "Cubatï¿½o",
        "population" : 102372
      },
      {
        "district" : "Minas Gerais",
        "id" : 416,
        "countrycode" : "BRA",
        "name" : "Itabira",
        "population" : 102217
      },
      {
        "district" : "Parï¿½",
        "id" : 417,
        "countrycode" : "BRA",
        "name" : "Itaituba",
        "population" : 101320
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 418,
        "countrycode" : "BRA",
        "name" : "Araras",
        "population" : 101046
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 419,
        "countrycode" : "BRA",
        "name" : "Resende",
        "population" : 100627
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 420,
        "countrycode" : "BRA",
        "name" : "Atibaia",
        "population" : 100356
      },
      {
        "district" : "Minas Gerais",
        "id" : 421,
        "countrycode" : "BRA",
        "name" : "Pouso Alegre",
        "population" : 100028
      },
      {
        "district" : "Paranï¿½",
        "id" : 422,
        "countrycode" : "BRA",
        "name" : "Toledo",
        "population" : 99387
      },
      {
        "district" : "Cearï¿½",
        "id" : 423,
        "countrycode" : "BRA",
        "name" : "Crato",
        "population" : 98965
      },
      {
        "district" : "Minas Gerais",
        "id" : 424,
        "countrycode" : "BRA",
        "name" : "Passos",
        "population" : 98570
      },
      {
        "district" : "Minas Gerais",
        "id" : 425,
        "countrycode" : "BRA",
        "name" : "Araguari",
        "population" : 98399
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 426,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Josï¿½ de Ribamar",
        "population" : 98318
      },
      {
        "district" : "Paranï¿½",
        "id" : 427,
        "countrycode" : "BRA",
        "name" : "Pinhais",
        "population" : 98198
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 428,
        "countrycode" : "BRA",
        "name" : "Sertï¿½ozinho",
        "population" : 98140
      },
      {
        "district" : "Minas Gerais",
        "id" : 429,
        "countrycode" : "BRA",
        "name" : "Conselheiro Lafaiete",
        "population" : 97507
      },
      {
        "district" : "Bahia",
        "id" : 430,
        "countrycode" : "BRA",
        "name" : "Paulo Afonso",
        "population" : 97291
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 431,
        "countrycode" : "BRA",
        "name" : "Angra dos Reis",
        "population" : 96864
      },
      {
        "district" : "Bahia",
        "id" : 432,
        "countrycode" : "BRA",
        "name" : "Eunï¿½polis",
        "population" : 96610
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 433,
        "countrycode" : "BRA",
        "name" : "Salto",
        "population" : 96348
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 434,
        "countrycode" : "BRA",
        "name" : "Ourinhos",
        "population" : 96291
      },
      {
        "district" : "Rio Grande do Norte",
        "id" : 435,
        "countrycode" : "BRA",
        "name" : "Parnamirim",
        "population" : 96210
      },
      {
        "district" : "Bahia",
        "id" : 436,
        "countrycode" : "BRA",
        "name" : "Jacobina",
        "population" : 96131
      },
      {
        "district" : "Minas Gerais",
        "id" : 437,
        "countrycode" : "BRA",
        "name" : "Coronel Fabriciano",
        "population" : 95933
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 438,
        "countrycode" : "BRA",
        "name" : "Birigui",
        "population" : 94685
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 439,
        "countrycode" : "BRA",
        "name" : "Tatuï¿½",
        "population" : 93897
      },
      {
        "district" : "Rondï¿½nia",
        "id" : 440,
        "countrycode" : "BRA",
        "name" : "Ji-Paranï¿½",
        "population" : 93346
      },
      {
        "district" : "Maranhï¿½o",
        "id" : 441,
        "countrycode" : "BRA",
        "name" : "Bacabal",
        "population" : 93121
      },
      {
        "district" : "Parï¿½",
        "id" : 442,
        "countrycode" : "BRA",
        "name" : "Cametï¿½",
        "population" : 92779
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 443,
        "countrycode" : "BRA",
        "name" : "Guaï¿½ba",
        "population" : 92224
      },
      {
        "district" : "Pernambuco",
        "id" : 444,
        "countrycode" : "BRA",
        "name" : "Sï¿½o Lourenï¿½o da Mata",
        "population" : 91999
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 445,
        "countrycode" : "BRA",
        "name" : "Santana do Livramento",
        "population" : 91779
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 446,
        "countrycode" : "BRA",
        "name" : "Votorantim",
        "population" : 91777
      },
      {
        "district" : "Paranï¿½",
        "id" : 447,
        "countrycode" : "BRA",
        "name" : "Campo Largo",
        "population" : 91203
      },
      {
        "district" : "Paraï¿½ba",
        "id" : 448,
        "countrycode" : "BRA",
        "name" : "Patos",
        "population" : 90519
      },
      {
        "district" : "Minas Gerais",
        "id" : 449,
        "countrycode" : "BRA",
        "name" : "Ituiutaba",
        "population" : 90507
      },
      {
        "district" : "Mato Grosso do Sul",
        "id" : 450,
        "countrycode" : "BRA",
        "name" : "Corumbï¿½",
        "population" : 90111
      },
      {
        "district" : "Santa Catarina",
        "id" : 451,
        "countrycode" : "BRA",
        "name" : "Palhoï¿½a",
        "population" : 89465
      },
      {
        "district" : "Rio de Janeiro",
        "id" : 452,
        "countrycode" : "BRA",
        "name" : "Barra do Piraï¿½",
        "population" : 89388
      },
      {
        "district" : "Rio Grande do Sul",
        "id" : 453,
        "countrycode" : "BRA",
        "name" : "Bento Gonï¿½alves",
        "population" : 89254
      },
      {
        "district" : "Sï¿½o Paulo",
        "id" : 454,
        "countrycode" : "BRA",
        "name" : "Poï¿½",
        "population" : 89236
      },
      {
        "district" : "Goiï¿½s",
        "id" : 455,
        "countrycode" : "BRA",
        "name" : "ï¿½guas Lindas de Goiï¿½s",
        "population" : 89200
      },
      {
        "district" : "England",
        "id" : 456,
        "countrycode" : "GBR",
        "name" : "London",
        "population" : 7285000
      },
      {
        "district" : "England",
        "id" : 457,
        "countrycode" : "GBR",
        "name" : "Birmingham",
        "population" : 1013000
      },
      {
        "district" : "Scotland",
        "id" : 458,
        "countrycode" : "GBR",
        "name" : "Glasgow",
        "population" : 619680
      },
      {
        "district" : "England",
        "id" : 459,
        "countrycode" : "GBR",
        "name" : "Liverpool",
        "population" : 461000
      },
      {
        "district" : "Scotland",
        "id" : 460,
        "countrycode" : "GBR",
        "name" : "Edinburgh",
        "population" : 450180
      },
      {
        "district" : "England",
        "id" : 461,
        "countrycode" : "GBR",
        "name" : "Sheffield",
        "population" : 431607
      },
      {
        "district" : "England",
        "id" : 462,
        "countrycode" : "GBR",
        "name" : "Manchester",
        "population" : 430000
      },
      {
        "district" : "England",
        "id" : 463,
        "countrycode" : "GBR",
        "name" : "Leeds",
        "population" : 424194
      },
      {
        "district" : "England",
        "id" : 464,
        "countrycode" : "GBR",
        "name" : "Bristol",
        "population" : 402000
      },
      {
        "district" : "Wales",
        "id" : 465,
        "countrycode" : "GBR",
        "name" : "Cardiff",
        "population" : 321000
      },
      {
        "district" : "England",
        "id" : 466,
        "countrycode" : "GBR",
        "name" : "Coventry",
        "population" : 304000
      },
      {
        "district" : "England",
        "id" : 467,
        "countrycode" : "GBR",
        "name" : "Leicester",
        "population" : 294000
      },
      {
        "district" : "England",
        "id" : 468,
        "countrycode" : "GBR",
        "name" : "Bradford",
        "population" : 289376
      },
      {
        "district" : "North Ireland",
        "id" : 469,
        "countrycode" : "GBR",
        "name" : "Belfast",
        "population" : 287500
      },
      {
        "district" : "England",
        "id" : 470,
        "countrycode" : "GBR",
        "name" : "Nottingham",
        "population" : 287000
      },
      {
        "district" : "England",
        "id" : 471,
        "countrycode" : "GBR",
        "name" : "Kingston upon Hull",
        "population" : 262000
      },
      {
        "district" : "England",
        "id" : 472,
        "countrycode" : "GBR",
        "name" : "Plymouth",
        "population" : 253000
      },
      {
        "district" : "England",
        "id" : 473,
        "countrycode" : "GBR",
        "name" : "Stoke-on-Trent",
        "population" : 252000
      },
      {
        "district" : "England",
        "id" : 474,
        "countrycode" : "GBR",
        "name" : "Wolverhampton",
        "population" : 242000
      },
      {
        "district" : "England",
        "id" : 475,
        "countrycode" : "GBR",
        "name" : "Derby",
        "population" : 236000
      },
      {
        "district" : "Wales",
        "id" : 476,
        "countrycode" : "GBR",
        "name" : "Swansea",
        "population" : 230000
      },
      {
        "district" : "England",
        "id" : 477,
        "countrycode" : "GBR",
        "name" : "Southampton",
        "population" : 216000
      },
      {
        "district" : "Scotland",
        "id" : 478,
        "countrycode" : "GBR",
        "name" : "Aberdeen",
        "population" : 213070
      },
      {
        "district" : "England",
        "id" : 479,
        "countrycode" : "GBR",
        "name" : "Northampton",
        "population" : 196000
      },
      {
        "district" : "England",
        "id" : 480,
        "countrycode" : "GBR",
        "name" : "Dudley",
        "population" : 192171
      },
      {
        "district" : "England",
        "id" : 481,
        "countrycode" : "GBR",
        "name" : "Portsmouth",
        "population" : 190000
      },
      {
        "district" : "England",
        "id" : 482,
        "countrycode" : "GBR",
        "name" : "Newcastle upon Tyne",
        "population" : 189150
      },
      {
        "district" : "England",
        "id" : 483,
        "countrycode" : "GBR",
        "name" : "Sunderland",
        "population" : 183310
      },
      {
        "district" : "England",
        "id" : 484,
        "countrycode" : "GBR",
        "name" : "Luton",
        "population" : 183000
      },
      {
        "district" : "England",
        "id" : 485,
        "countrycode" : "GBR",
        "name" : "Swindon",
        "population" : 180000
      },
      {
        "district" : "England",
        "id" : 486,
        "countrycode" : "GBR",
        "name" : "Southend-on-Sea",
        "population" : 176000
      },
      {
        "district" : "England",
        "id" : 487,
        "countrycode" : "GBR",
        "name" : "Walsall",
        "population" : 174739
      },
      {
        "district" : "England",
        "id" : 488,
        "countrycode" : "GBR",
        "name" : "Bournemouth",
        "population" : 162000
      },
      {
        "district" : "England",
        "id" : 489,
        "countrycode" : "GBR",
        "name" : "Peterborough",
        "population" : 156000
      },
      {
        "district" : "England",
        "id" : 490,
        "countrycode" : "GBR",
        "name" : "Brighton",
        "population" : 156124
      },
      {
        "district" : "England",
        "id" : 491,
        "countrycode" : "GBR",
        "name" : "Blackpool",
        "population" : 151000
      },
      {
        "district" : "Scotland",
        "id" : 492,
        "countrycode" : "GBR",
        "name" : "Dundee",
        "population" : 146690
      },
      {
        "district" : "England",
        "id" : 493,
        "countrycode" : "GBR",
        "name" : "West Bromwich",
        "population" : 146386
      },
      {
        "district" : "England",
        "id" : 494,
        "countrycode" : "GBR",
        "name" : "Reading",
        "population" : 148000
      },
      {
        "district" : "England",
        "id" : 495,
        "countrycode" : "GBR",
        "name" : "Oldbury\/Smethwick (Warley)",
        "population" : 145542
      },
      {
        "district" : "England",
        "id" : 496,
        "countrycode" : "GBR",
        "name" : "Middlesbrough",
        "population" : 145000
      },
      {
        "district" : "England",
        "id" : 497,
        "countrycode" : "GBR",
        "name" : "Huddersfield",
        "population" : 143726
      },
      {
        "district" : "England",
        "id" : 498,
        "countrycode" : "GBR",
        "name" : "Oxford",
        "population" : 144000
      },
      {
        "district" : "England",
        "id" : 499,
        "countrycode" : "GBR",
        "name" : "Poole",
        "population" : 141000
      },
      {
        "district" : "England",
        "id" : 500,
        "countrycode" : "GBR",
        "name" : "Bolton",
        "population" : 139020
      },
      {
        "district" : "England",
        "id" : 501,
        "countrycode" : "GBR",
        "name" : "Blackburn",
        "population" : 140000
      },
      {
        "district" : "Wales",
        "id" : 502,
        "countrycode" : "GBR",
        "name" : "Newport",
        "population" : 139000
      },
      {
        "district" : "England",
        "id" : 503,
        "countrycode" : "GBR",
        "name" : "Preston",
        "population" : 135000
      },
      {
        "district" : "England",
        "id" : 504,
        "countrycode" : "GBR",
        "name" : "Stockport",
        "population" : 132813
      },
      {
        "district" : "England",
        "id" : 505,
        "countrycode" : "GBR",
        "name" : "Norwich",
        "population" : 124000
      },
      {
        "district" : "England",
        "id" : 506,
        "countrycode" : "GBR",
        "name" : "Rotherham",
        "population" : 121380
      },
      {
        "district" : "England",
        "id" : 507,
        "countrycode" : "GBR",
        "name" : "Cambridge",
        "population" : 121000
      },
      {
        "district" : "England",
        "id" : 508,
        "countrycode" : "GBR",
        "name" : "Watford",
        "population" : 113080
      },
      {
        "district" : "England",
        "id" : 509,
        "countrycode" : "GBR",
        "name" : "Ipswich",
        "population" : 114000
      },
      {
        "district" : "England",
        "id" : 510,
        "countrycode" : "GBR",
        "name" : "Slough",
        "population" : 112000
      },
      {
        "district" : "England",
        "id" : 511,
        "countrycode" : "GBR",
        "name" : "Exeter",
        "population" : 111000
      },
      {
        "district" : "England",
        "id" : 512,
        "countrycode" : "GBR",
        "name" : "Cheltenham",
        "population" : 106000
      },
      {
        "district" : "England",
        "id" : 513,
        "countrycode" : "GBR",
        "name" : "Gloucester",
        "population" : 107000
      },
      {
        "district" : "England",
        "id" : 514,
        "countrycode" : "GBR",
        "name" : "Saint Helens",
        "population" : 106293
      },
      {
        "district" : "England",
        "id" : 515,
        "countrycode" : "GBR",
        "name" : "Sutton Coldfield",
        "population" : 106001
      },
      {
        "district" : "England",
        "id" : 516,
        "countrycode" : "GBR",
        "name" : "York",
        "population" : 104425
      },
      {
        "district" : "England",
        "id" : 517,
        "countrycode" : "GBR",
        "name" : "Oldham",
        "population" : 103931
      },
      {
        "district" : "England",
        "id" : 518,
        "countrycode" : "GBR",
        "name" : "Basildon",
        "population" : 100924
      },
      {
        "district" : "England",
        "id" : 519,
        "countrycode" : "GBR",
        "name" : "Worthing",
        "population" : 100000
      },
      {
        "district" : "England",
        "id" : 520,
        "countrycode" : "GBR",
        "name" : "Chelmsford",
        "population" : 97451
      },
      {
        "district" : "England",
        "id" : 521,
        "countrycode" : "GBR",
        "name" : "Colchester",
        "population" : 96063
      },
      {
        "district" : "England",
        "id" : 522,
        "countrycode" : "GBR",
        "name" : "Crawley",
        "population" : 97000
      },
      {
        "district" : "England",
        "id" : 523,
        "countrycode" : "GBR",
        "name" : "Gillingham",
        "population" : 92000
      },
      {
        "district" : "England",
        "id" : 524,
        "countrycode" : "GBR",
        "name" : "Solihull",
        "population" : 94531
      },
      {
        "district" : "England",
        "id" : 525,
        "countrycode" : "GBR",
        "name" : "Rochdale",
        "population" : 94313
      },
      {
        "district" : "England",
        "id" : 526,
        "countrycode" : "GBR",
        "name" : "Birkenhead",
        "population" : 93087
      },
      {
        "district" : "England",
        "id" : 527,
        "countrycode" : "GBR",
        "name" : "Worcester",
        "population" : 95000
      },
      {
        "district" : "England",
        "id" : 528,
        "countrycode" : "GBR",
        "name" : "Hartlepool",
        "population" : 92000
      },
      {
        "district" : "England",
        "id" : 529,
        "countrycode" : "GBR",
        "name" : "Halifax",
        "population" : 91069
      },
      {
        "district" : "England",
        "id" : 530,
        "countrycode" : "GBR",
        "name" : "Woking\/Byfleet",
        "population" : 92000
      },
      {
        "district" : "England",
        "id" : 531,
        "countrycode" : "GBR",
        "name" : "Southport",
        "population" : 90959
      },
      {
        "district" : "England",
        "id" : 532,
        "countrycode" : "GBR",
        "name" : "Maidstone",
        "population" : 90878
      },
      {
        "district" : "England",
        "id" : 533,
        "countrycode" : "GBR",
        "name" : "Eastbourne",
        "population" : 90000
      },
      {
        "district" : "England",
        "id" : 534,
        "countrycode" : "GBR",
        "name" : "Grimsby",
        "population" : 89000
      },
      {
        "district" : "Jersey",
        "id" : 535,
        "countrycode" : "GBR",
        "name" : "Saint Helier",
        "population" : 27523
      },
      {
        "district" : "ï¿½",
        "id" : 536,
        "countrycode" : "GBR",
        "name" : "Douglas",
        "population" : 23487
      },
      {
        "district" : "Tortola",
        "id" : 537,
        "countrycode" : "VGB",
        "name" : "Road Town",
        "population" : 8000
      },
      {
        "district" : "Brunei and Muara",
        "id" : 538,
        "countrycode" : "BRN",
        "name" : "Bandar Seri Begawan",
        "population" : 21484
      },
      {
        "district" : "Grad Sofija",
        "id" : 539,
        "countrycode" : "BGR",
        "name" : "Sofija",
        "population" : 1122302
      },
      {
        "district" : "Plovdiv",
        "id" : 540,
        "countrycode" : "BGR",
        "name" : "Plovdiv",
        "population" : 342584
      },
      {
        "district" : "Varna",
        "id" : 541,
        "countrycode" : "BGR",
        "name" : "Varna",
        "population" : 299801
      },
      {
        "district" : "Burgas",
        "id" : 542,
        "countrycode" : "BGR",
        "name" : "Burgas",
        "population" : 195255
      },
      {
        "district" : "Ruse",
        "id" : 543,
        "countrycode" : "BGR",
        "name" : "Ruse",
        "population" : 166467
      },
      {
        "district" : "Haskovo",
        "id" : 544,
        "countrycode" : "BGR",
        "name" : "Stara Zagora",
        "population" : 147939
      },
      {
        "district" : "Lovec",
        "id" : 545,
        "countrycode" : "BGR",
        "name" : "Pleven",
        "population" : 121952
      },
      {
        "district" : "Burgas",
        "id" : 546,
        "countrycode" : "BGR",
        "name" : "Sliven",
        "population" : 105530
      },
      {
        "district" : "Varna",
        "id" : 547,
        "countrycode" : "BGR",
        "name" : "Dobric",
        "population" : 100399
      },
      {
        "district" : "Varna",
        "id" : 548,
        "countrycode" : "BGR",
        "name" : "ï¿½umen",
        "population" : 94686
      },
      {
        "district" : "Kadiogo",
        "id" : 549,
        "countrycode" : "BFA",
        "name" : "Ouagadougou",
        "population" : 824000
      },
      {
        "district" : "Houet",
        "id" : 550,
        "countrycode" : "BFA",
        "name" : "Bobo-Dioulasso",
        "population" : 300000
      },
      {
        "district" : "Boulkiemdï¿½",
        "id" : 551,
        "countrycode" : "BFA",
        "name" : "Koudougou",
        "population" : 105000
      },
      {
        "district" : "Bujumbura",
        "id" : 552,
        "countrycode" : "BDI",
        "name" : "Bujumbura",
        "population" : 300000
      },
      {
        "district" : "Grand Cayman",
        "id" : 553,
        "countrycode" : "CYM",
        "name" : "George Town",
        "population" : 19600
      },
      {
        "district" : "Santiago",
        "id" : 554,
        "countrycode" : "CHL",
        "name" : "Santiago de Chile",
        "population" : 4703954
      },
      {
        "district" : "Santiago",
        "id" : 555,
        "countrycode" : "CHL",
        "name" : "Puente Alto",
        "population" : 386236
      },
      {
        "district" : "Valparaï¿½so",
        "id" : 556,
        "countrycode" : "CHL",
        "name" : "Viï¿½a del Mar",
        "population" : 312493
      },
      {
        "district" : "Valparaï¿½so",
        "id" : 557,
        "countrycode" : "CHL",
        "name" : "Valparaï¿½so",
        "population" : 293800
      },
      {
        "district" : "Bï¿½obï¿½o",
        "id" : 558,
        "countrycode" : "CHL",
        "name" : "Talcahuano",
        "population" : 277752
      },
      {
        "district" : "Antofagasta",
        "id" : 559,
        "countrycode" : "CHL",
        "name" : "Antofagasta",
        "population" : 251429
      },
      {
        "district" : "Santiago",
        "id" : 560,
        "countrycode" : "CHL",
        "name" : "San Bernardo",
        "population" : 241910
      },
      {
        "district" : "La Araucanï¿½a",
        "id" : 561,
        "countrycode" : "CHL",
        "name" : "Temuco",
        "population" : 233041
      },
      {
        "district" : "Bï¿½obï¿½o",
        "id" : 562,
        "countrycode" : "CHL",
        "name" : "Concepciï¿½n",
        "population" : 217664
      },
      {
        "district" : "Oï¿½Higgins",
        "id" : 563,
        "countrycode" : "CHL",
        "name" : "Rancagua",
        "population" : 212977
      },
      {
        "district" : "Tarapacï¿½",
        "id" : 564,
        "countrycode" : "CHL",
        "name" : "Arica",
        "population" : 189036
      },
      {
        "district" : "Maule",
        "id" : 565,
        "countrycode" : "CHL",
        "name" : "Talca",
        "population" : 187557
      },
      {
        "district" : "Bï¿½obï¿½o",
        "id" : 566,
        "countrycode" : "CHL",
        "name" : "Chillï¿½n",
        "population" : 178182
      },
      {
        "district" : "Tarapacï¿½",
        "id" : 567,
        "countrycode" : "CHL",
        "name" : "Iquique",
        "population" : 177892
      },
      {
        "district" : "Bï¿½obï¿½o",
        "id" : 568,
        "countrycode" : "CHL",
        "name" : "Los Angeles",
        "population" : 158215
      },
      {
        "district" : "Los Lagos",
        "id" : 569,
        "countrycode" : "CHL",
        "name" : "Puerto Montt",
        "population" : 152194
      },
      {
        "district" : "Coquimbo",
        "id" : 570,
        "countrycode" : "CHL",
        "name" : "Coquimbo",
        "population" : 143353
      },
      {
        "district" : "Los Lagos",
        "id" : 571,
        "countrycode" : "CHL",
        "name" : "Osorno",
        "population" : 141468
      },
      {
        "district" : "Coquimbo",
        "id" : 572,
        "countrycode" : "CHL",
        "name" : "La Serena",
        "population" : 137409
      },
      {
        "district" : "Antofagasta",
        "id" : 573,
        "countrycode" : "CHL",
        "name" : "Calama",
        "population" : 137265
      },
      {
        "district" : "Los Lagos",
        "id" : 574,
        "countrycode" : "CHL",
        "name" : "Valdivia",
        "population" : 133106
      },
      {
        "district" : "Magallanes",
        "id" : 575,
        "countrycode" : "CHL",
        "name" : "Punta Arenas",
        "population" : 125631
      },
      {
        "district" : "Atacama",
        "id" : 576,
        "countrycode" : "CHL",
        "name" : "Copiapï¿½",
        "population" : 120128
      },
      {
        "district" : "Valparaï¿½so",
        "id" : 577,
        "countrycode" : "CHL",
        "name" : "Quilpuï¿½",
        "population" : 118857
      },
      {
        "district" : "Maule",
        "id" : 578,
        "countrycode" : "CHL",
        "name" : "Curicï¿½",
        "population" : 115766
      },
      {
        "district" : "Coquimbo",
        "id" : 579,
        "countrycode" : "CHL",
        "name" : "Ovalle",
        "population" : 94854
      },
      {
        "district" : "Bï¿½obï¿½o",
        "id" : 580,
        "countrycode" : "CHL",
        "name" : "Coronel",
        "population" : 93061
      },
      {
        "district" : "Bï¿½obï¿½o",
        "id" : 581,
        "countrycode" : "CHL",
        "name" : "San Pedro de la Paz",
        "population" : 91684
      },
      {
        "district" : "Santiago",
        "id" : 582,
        "countrycode" : "CHL",
        "name" : "Melipilla",
        "population" : 91056
      },
      {
        "district" : "Rarotonga",
        "id" : 583,
        "countrycode" : "COK",
        "name" : "Avarua",
        "population" : 11900
      },
      {
        "district" : "San Josï¿½",
        "id" : 584,
        "countrycode" : "CRI",
        "name" : "San Josï¿½",
        "population" : 339131
      },
      {
        "district" : "Djibouti",
        "id" : 585,
        "countrycode" : "DJI",
        "name" : "Djibouti",
        "population" : 383000
      },
      {
        "district" : "St George",
        "id" : 586,
        "countrycode" : "DMA",
        "name" : "Roseau",
        "population" : 16243
      },
      {
        "district" : "Distrito Nacional",
        "id" : 587,
        "countrycode" : "DOM",
        "name" : "Santo Domingo de Guzmï¿½n",
        "population" : 1609966
      },
      {
        "district" : "Santiago",
        "id" : 588,
        "countrycode" : "DOM",
        "name" : "Santiago de los Caballeros",
        "population" : 365463
      },
      {
        "district" : "La Romana",
        "id" : 589,
        "countrycode" : "DOM",
        "name" : "La Romana",
        "population" : 140204
      },
      {
        "district" : "San Pedro de Macorï¿½s",
        "id" : 590,
        "countrycode" : "DOM",
        "name" : "San Pedro de Macorï¿½s",
        "population" : 124735
      },
      {
        "district" : "Duarte",
        "id" : 591,
        "countrycode" : "DOM",
        "name" : "San Francisco de Macorï¿½s",
        "population" : 108485
      },
      {
        "district" : "Puerto Plata",
        "id" : 592,
        "countrycode" : "DOM",
        "name" : "San Felipe de Puerto Plata",
        "population" : 89423
      },
      {
        "district" : "Guayas",
        "id" : 593,
        "countrycode" : "ECU",
        "name" : "Guayaquil",
        "population" : 2070040
      },
      {
        "district" : "Pichincha",
        "id" : 594,
        "countrycode" : "ECU",
        "name" : "Quito",
        "population" : 1573458
      },
      {
        "district" : "Azuay",
        "id" : 595,
        "countrycode" : "ECU",
        "name" : "Cuenca",
        "population" : 270353
      },
      {
        "district" : "El Oro",
        "id" : 596,
        "countrycode" : "ECU",
        "name" : "Machala",
        "population" : 210368
      },
      {
        "district" : "Pichincha",
        "id" : 597,
        "countrycode" : "ECU",
        "name" : "Santo Domingo de los Colorados",
        "population" : 202111
      },
      {
        "district" : "Manabï¿½",
        "id" : 598,
        "countrycode" : "ECU",
        "name" : "Portoviejo",
        "population" : 176413
      },
      {
        "district" : "Tungurahua",
        "id" : 599,
        "countrycode" : "ECU",
        "name" : "Ambato",
        "population" : 169612
      },
      {
        "district" : "Manabï¿½",
        "id" : 600,
        "countrycode" : "ECU",
        "name" : "Manta",
        "population" : 164739
      },
      {
        "district" : "Guayas",
        "id" : 601,
        "countrycode" : "ECU",
        "name" : "Duran [Eloy Alfaro]",
        "population" : 152514
      },
      {
        "district" : "Imbabura",
        "id" : 602,
        "countrycode" : "ECU",
        "name" : "Ibarra",
        "population" : 130643
      },
      {
        "district" : "Los Rï¿½os",
        "id" : 603,
        "countrycode" : "ECU",
        "name" : "Quevedo",
        "population" : 129631
      },
      {
        "district" : "Guayas",
        "id" : 604,
        "countrycode" : "ECU",
        "name" : "Milagro",
        "population" : 124177
      },
      {
        "district" : "Loja",
        "id" : 605,
        "countrycode" : "ECU",
        "name" : "Loja",
        "population" : 123875
      },
      {
        "district" : "Chimborazo",
        "id" : 606,
        "countrycode" : "ECU",
        "name" : "Rï¿½obamba",
        "population" : 123163
      },
      {
        "district" : "Esmeraldas",
        "id" : 607,
        "countrycode" : "ECU",
        "name" : "Esmeraldas",
        "population" : 123045
      },
      {
        "district" : "Kairo",
        "id" : 608,
        "countrycode" : "EGY",
        "name" : "Cairo",
        "population" : 6789479
      },
      {
        "district" : "Aleksandria",
        "id" : 609,
        "countrycode" : "EGY",
        "name" : "Alexandria",
        "population" : 3328196
      },
      {
        "district" : "Giza",
        "id" : 610,
        "countrycode" : "EGY",
        "name" : "Giza",
        "population" : 2221868
      },
      {
        "district" : "al-Qalyubiya",
        "id" : 611,
        "countrycode" : "EGY",
        "name" : "Shubra al-Khayma",
        "population" : 870716
      },
      {
        "district" : "Port Said",
        "id" : 612,
        "countrycode" : "EGY",
        "name" : "Port Said",
        "population" : 469533
      },
      {
        "district" : "Suez",
        "id" : 613,
        "countrycode" : "EGY",
        "name" : "Suez",
        "population" : 417610
      },
      {
        "district" : "al-Gharbiya",
        "id" : 614,
        "countrycode" : "EGY",
        "name" : "al-Mahallat al-Kubra",
        "population" : 395402
      },
      {
        "district" : "al-Gharbiya",
        "id" : 615,
        "countrycode" : "EGY",
        "name" : "Tanta",
        "population" : 371010
      },
      {
        "district" : "al-Daqahliya",
        "id" : 616,
        "countrycode" : "EGY",
        "name" : "al-Mansura",
        "population" : 369621
      },
      {
        "district" : "Luxor",
        "id" : 617,
        "countrycode" : "EGY",
        "name" : "Luxor",
        "population" : 360503
      },
      {
        "district" : "Asyut",
        "id" : 618,
        "countrycode" : "EGY",
        "name" : "Asyut",
        "population" : 343498
      },
      {
        "district" : "al-Qalyubiya",
        "id" : 619,
        "countrycode" : "EGY",
        "name" : "Bahtim",
        "population" : 275807
      },
      {
        "district" : "al-Sharqiya",
        "id" : 620,
        "countrycode" : "EGY",
        "name" : "Zagazig",
        "population" : 267351
      },
      {
        "district" : "al-Faiyum",
        "id" : 621,
        "countrycode" : "EGY",
        "name" : "al-Faiyum",
        "population" : 260964
      },
      {
        "district" : "Ismailia",
        "id" : 622,
        "countrycode" : "EGY",
        "name" : "Ismailia",
        "population" : 254477
      },
      {
        "district" : "al-Buhayra",
        "id" : 623,
        "countrycode" : "EGY",
        "name" : "Kafr al-Dawwar",
        "population" : 231978
      },
      {
        "district" : "Assuan",
        "id" : 624,
        "countrycode" : "EGY",
        "name" : "Assuan",
        "population" : 219017
      },
      {
        "district" : "al-Buhayra",
        "id" : 625,
        "countrycode" : "EGY",
        "name" : "Damanhur",
        "population" : 212203
      },
      {
        "district" : "al-Minya",
        "id" : 626,
        "countrycode" : "EGY",
        "name" : "al-Minya",
        "population" : 201360
      },
      {
        "district" : "Bani Suwayf",
        "id" : 627,
        "countrycode" : "EGY",
        "name" : "Bani Suwayf",
        "population" : 172032
      },
      {
        "district" : "Qina",
        "id" : 628,
        "countrycode" : "EGY",
        "name" : "Qina",
        "population" : 171275
      },
      {
        "district" : "Sawhaj",
        "id" : 629,
        "countrycode" : "EGY",
        "name" : "Sawhaj",
        "population" : 170125
      },
      {
        "district" : "al-Minufiya",
        "id" : 630,
        "countrycode" : "EGY",
        "name" : "Shibin al-Kawm",
        "population" : 159909
      },
      {
        "district" : "Giza",
        "id" : 631,
        "countrycode" : "EGY",
        "name" : "Bulaq al-Dakrur",
        "population" : 148787
      },
      {
        "district" : "al-Qalyubiya",
        "id" : 632,
        "countrycode" : "EGY",
        "name" : "Banha",
        "population" : 145792
      },
      {
        "district" : "Giza",
        "id" : 633,
        "countrycode" : "EGY",
        "name" : "Warraq al-Arab",
        "population" : 127108
      },
      {
        "district" : "Kafr al-Shaykh",
        "id" : 634,
        "countrycode" : "EGY",
        "name" : "Kafr al-Shaykh",
        "population" : 124819
      },
      {
        "district" : "al-Minya",
        "id" : 635,
        "countrycode" : "EGY",
        "name" : "Mallawi",
        "population" : 119283
      },
      {
        "district" : "al-Sharqiya",
        "id" : 636,
        "countrycode" : "EGY",
        "name" : "Bilbays",
        "population" : 113608
      },
      {
        "district" : "al-Daqahliya",
        "id" : 637,
        "countrycode" : "EGY",
        "name" : "Mit Ghamr",
        "population" : 101801
      },
      {
        "district" : "Shamal Sina",
        "id" : 638,
        "countrycode" : "EGY",
        "name" : "al-Arish",
        "population" : 100447
      },
      {
        "district" : "al-Daqahliya",
        "id" : 639,
        "countrycode" : "EGY",
        "name" : "Talkha",
        "population" : 97700
      },
      {
        "district" : "al-Qalyubiya",
        "id" : 640,
        "countrycode" : "EGY",
        "name" : "Qalyub",
        "population" : 97200
      },
      {
        "district" : "Sawhaj",
        "id" : 641,
        "countrycode" : "EGY",
        "name" : "Jirja",
        "population" : 95400
      },
      {
        "district" : "Qina",
        "id" : 642,
        "countrycode" : "EGY",
        "name" : "Idfu",
        "population" : 94200
      },
      {
        "district" : "Giza",
        "id" : 643,
        "countrycode" : "EGY",
        "name" : "al-Hawamidiya",
        "population" : 91700
      },
      {
        "district" : "Kafr al-Shaykh",
        "id" : 644,
        "countrycode" : "EGY",
        "name" : "Disuq",
        "population" : 91300
      },
      {
        "district" : "San Salvador",
        "id" : 645,
        "countrycode" : "SLV",
        "name" : "San Salvador",
        "population" : 415346
      },
      {
        "district" : "Santa Ana",
        "id" : 646,
        "countrycode" : "SLV",
        "name" : "Santa Ana",
        "population" : 139389
      },
      {
        "district" : "San Salvador",
        "id" : 647,
        "countrycode" : "SLV",
        "name" : "Mejicanos",
        "population" : 138800
      },
      {
        "district" : "San Salvador",
        "id" : 648,
        "countrycode" : "SLV",
        "name" : "Soyapango",
        "population" : 129800
      },
      {
        "district" : "San Miguel",
        "id" : 649,
        "countrycode" : "SLV",
        "name" : "San Miguel",
        "population" : 127696
      },
      {
        "district" : "La Libertad",
        "id" : 650,
        "countrycode" : "SLV",
        "name" : "Nueva San Salvador",
        "population" : 98400
      },
      {
        "district" : "San Salvador",
        "id" : 651,
        "countrycode" : "SLV",
        "name" : "Apopa",
        "population" : 88800
      },
      {
        "district" : "Maekel",
        "id" : 652,
        "countrycode" : "ERI",
        "name" : "Asmara",
        "population" : 431000
      },
      {
        "district" : "Madrid",
        "id" : 653,
        "countrycode" : "ESP",
        "name" : "Madrid",
        "population" : 2879052
      },
      {
        "district" : "Katalonia",
        "id" : 654,
        "countrycode" : "ESP",
        "name" : "Barcelona",
        "population" : 1503451
      },
      {
        "district" : "Valencia",
        "id" : 655,
        "countrycode" : "ESP",
        "name" : "Valencia",
        "population" : 739412
      },
      {
        "district" : "Andalusia",
        "id" : 656,
        "countrycode" : "ESP",
        "name" : "Sevilla",
        "population" : 701927
      },
      {
        "district" : "Aragonia",
        "id" : 657,
        "countrycode" : "ESP",
        "name" : "Zaragoza",
        "population" : 603367
      },
      {
        "district" : "Andalusia",
        "id" : 658,
        "countrycode" : "ESP",
        "name" : "Mï¿½laga",
        "population" : 530553
      },
      {
        "district" : "Baskimaa",
        "id" : 659,
        "countrycode" : "ESP",
        "name" : "Bilbao",
        "population" : 357589
      },
      {
        "district" : "Canary Islands",
        "id" : 660,
        "countrycode" : "ESP",
        "name" : "Las Palmas de Gran Canaria",
        "population" : 354757
      },
      {
        "district" : "Murcia",
        "id" : 661,
        "countrycode" : "ESP",
        "name" : "Murcia",
        "population" : 353504
      },
      {
        "district" : "Balears",
        "id" : 662,
        "countrycode" : "ESP",
        "name" : "Palma de Mallorca",
        "population" : 326993
      },
      {
        "district" : "Castilla and Leï¿½n",
        "id" : 663,
        "countrycode" : "ESP",
        "name" : "Valladolid",
        "population" : 319998
      },
      {
        "district" : "Andalusia",
        "id" : 664,
        "countrycode" : "ESP",
        "name" : "Cï¿½rdoba",
        "population" : 311708
      },
      {
        "district" : "Galicia",
        "id" : 665,
        "countrycode" : "ESP",
        "name" : "Vigo",
        "population" : 283670
      },
      {
        "district" : "Valencia",
        "id" : 666,
        "countrycode" : "ESP",
        "name" : "Alicante [Alacant]",
        "population" : 272432
      },
      {
        "district" : "Asturia",
        "id" : 667,
        "countrycode" : "ESP",
        "name" : "Gijï¿½n",
        "population" : 267980
      },
      {
        "district" : "Katalonia",
        "id" : 668,
        "countrycode" : "ESP",
        "name" : "Lï¿½Hospitalet de Llobregat",
        "population" : 247986
      },
      {
        "district" : "Andalusia",
        "id" : 669,
        "countrycode" : "ESP",
        "name" : "Granada",
        "population" : 244767
      },
      {
        "district" : "Galicia",
        "id" : 670,
        "countrycode" : "ESP",
        "name" : "A Coruï¿½a (La Coruï¿½a)",
        "population" : 243402
      },
      {
        "district" : "Baskimaa",
        "id" : 671,
        "countrycode" : "ESP",
        "name" : "Vitoria-Gasteiz",
        "population" : 217154
      },
      {
        "district" : "Canary Islands",
        "id" : 672,
        "countrycode" : "ESP",
        "name" : "Santa Cruz de Tenerife",
        "population" : 213050
      },
      {
        "district" : "Katalonia",
        "id" : 673,
        "countrycode" : "ESP",
        "name" : "Badalona",
        "population" : 209635
      },
      {
        "district" : "Asturia",
        "id" : 674,
        "countrycode" : "ESP",
        "name" : "Oviedo",
        "population" : 200453
      },
      {
        "district" : "Madrid",
        "id" : 675,
        "countrycode" : "ESP",
        "name" : "Mï¿½stoles",
        "population" : 195351
      },
      {
        "district" : "Valencia",
        "id" : 676,
        "countrycode" : "ESP",
        "name" : "Elche [Elx]",
        "population" : 193174
      },
      {
        "district" : "Katalonia",
        "id" : 677,
        "countrycode" : "ESP",
        "name" : "Sabadell",
        "population" : 184859
      },
      {
        "district" : "Cantabria",
        "id" : 678,
        "countrycode" : "ESP",
        "name" : "Santander",
        "population" : 184165
      },
      {
        "district" : "Andalusia",
        "id" : 679,
        "countrycode" : "ESP",
        "name" : "Jerez de la Frontera",
        "population" : 182660
      },
      {
        "district" : "Navarra",
        "id" : 680,
        "countrycode" : "ESP",
        "name" : "Pamplona [Iruï¿½a]",
        "population" : 180483
      },
      {
        "district" : "Baskimaa",
        "id" : 681,
        "countrycode" : "ESP",
        "name" : "Donostia-San Sebastiï¿½n",
        "population" : 179208
      },
      {
        "district" : "Murcia",
        "id" : 682,
        "countrycode" : "ESP",
        "name" : "Cartagena",
        "population" : 177709
      },
      {
        "district" : "Madrid",
        "id" : 683,
        "countrycode" : "ESP",
        "name" : "Leganï¿½s",
        "population" : 173163
      },
      {
        "district" : "Madrid",
        "id" : 684,
        "countrycode" : "ESP",
        "name" : "Fuenlabrada",
        "population" : 171173
      },
      {
        "district" : "Andalusia",
        "id" : 685,
        "countrycode" : "ESP",
        "name" : "Almerï¿½a",
        "population" : 169027
      },
      {
        "district" : "Katalonia",
        "id" : 686,
        "countrycode" : "ESP",
        "name" : "Terrassa",
        "population" : 168695
      },
      {
        "district" : "Madrid",
        "id" : 687,
        "countrycode" : "ESP",
        "name" : "Alcalï¿½ de Henares",
        "population" : 164463
      },
      {
        "district" : "Castilla and Leï¿½n",
        "id" : 688,
        "countrycode" : "ESP",
        "name" : "Burgos",
        "population" : 162802
      },
      {
        "district" : "Castilla and Leï¿½n",
        "id" : 689,
        "countrycode" : "ESP",
        "name" : "Salamanca",
        "population" : 158720
      },
      {
        "district" : "Kastilia-La Mancha",
        "id" : 690,
        "countrycode" : "ESP",
        "name" : "Albacete",
        "population" : 147527
      },
      {
        "district" : "Madrid",
        "id" : 691,
        "countrycode" : "ESP",
        "name" : "Getafe",
        "population" : 145371
      },
      {
        "district" : "Andalusia",
        "id" : 692,
        "countrycode" : "ESP",
        "name" : "Cï¿½diz",
        "population" : 142449
      },
      {
        "district" : "Madrid",
        "id" : 693,
        "countrycode" : "ESP",
        "name" : "Alcorcï¿½n",
        "population" : 142048
      },
      {
        "district" : "Andalusia",
        "id" : 694,
        "countrycode" : "ESP",
        "name" : "Huelva",
        "population" : 140583
      },
      {
        "district" : "Castilla and Leï¿½n",
        "id" : 695,
        "countrycode" : "ESP",
        "name" : "Leï¿½n",
        "population" : 139809
      },
      {
        "district" : "Valencia",
        "id" : 696,
        "countrycode" : "ESP",
        "name" : "Castellï¿½n de la Plana [Castell",
        "population" : 139712
      },
      {
        "district" : "Extremadura",
        "id" : 697,
        "countrycode" : "ESP",
        "name" : "Badajoz",
        "population" : 136613
      },
      {
        "district" : "Canary Islands",
        "id" : 698,
        "countrycode" : "ESP",
        "name" : "[San Cristï¿½bal de] la Laguna",
        "population" : 127945
      },
      {
        "district" : "La Rioja",
        "id" : 699,
        "countrycode" : "ESP",
        "name" : "Logroï¿½o",
        "population" : 127093
      },
      {
        "district" : "Katalonia",
        "id" : 700,
        "countrycode" : "ESP",
        "name" : "Santa Coloma de Gramenet",
        "population" : 120802
      },
      {
        "district" : "Katalonia",
        "id" : 701,
        "countrycode" : "ESP",
        "name" : "Tarragona",
        "population" : 113016
      },
      {
        "district" : "Katalonia",
        "id" : 702,
        "countrycode" : "ESP",
        "name" : "Lleida (Lï¿½rida)",
        "population" : 112207
      },
      {
        "district" : "Andalusia",
        "id" : 703,
        "countrycode" : "ESP",
        "name" : "Jaï¿½n",
        "population" : 109247
      },
      {
        "district" : "Galicia",
        "id" : 704,
        "countrycode" : "ESP",
        "name" : "Ourense (Orense)",
        "population" : 109120
      },
      {
        "district" : "Katalonia",
        "id" : 705,
        "countrycode" : "ESP",
        "name" : "Matarï¿½",
        "population" : 104095
      },
      {
        "district" : "Andalusia",
        "id" : 706,
        "countrycode" : "ESP",
        "name" : "Algeciras",
        "population" : 103106
      },
      {
        "district" : "Andalusia",
        "id" : 707,
        "countrycode" : "ESP",
        "name" : "Marbella",
        "population" : 101144
      },
      {
        "district" : "Baskimaa",
        "id" : 708,
        "countrycode" : "ESP",
        "name" : "Barakaldo",
        "population" : 98212
      },
      {
        "district" : "Andalusia",
        "id" : 709,
        "countrycode" : "ESP",
        "name" : "Dos Hermanas",
        "population" : 94591
      },
      {
        "district" : "Galicia",
        "id" : 710,
        "countrycode" : "ESP",
        "name" : "Santiago de Compostela",
        "population" : 93745
      },
      {
        "district" : "Madrid",
        "id" : 711,
        "countrycode" : "ESP",
        "name" : "Torrejï¿½n de Ardoz",
        "population" : 92262
      },
      {
        "district" : "Western Cape",
        "id" : 712,
        "countrycode" : "ZAF",
        "name" : "Cape Town",
        "population" : 2352121
      },
      {
        "district" : "Gauteng",
        "id" : 713,
        "countrycode" : "ZAF",
        "name" : "Soweto",
        "population" : 904165
      },
      {
        "district" : "Gauteng",
        "id" : 714,
        "countrycode" : "ZAF",
        "name" : "Johannesburg",
        "population" : 756653
      },
      {
        "district" : "Eastern Cape",
        "id" : 715,
        "countrycode" : "ZAF",
        "name" : "Port Elizabeth",
        "population" : 752319
      },
      {
        "district" : "Gauteng",
        "id" : 716,
        "countrycode" : "ZAF",
        "name" : "Pretoria",
        "population" : 658630
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 717,
        "countrycode" : "ZAF",
        "name" : "Inanda",
        "population" : 634065
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 718,
        "countrycode" : "ZAF",
        "name" : "Durban",
        "population" : 566120
      },
      {
        "district" : "Gauteng",
        "id" : 719,
        "countrycode" : "ZAF",
        "name" : "Vanderbijlpark",
        "population" : 468931
      },
      {
        "district" : "Gauteng",
        "id" : 720,
        "countrycode" : "ZAF",
        "name" : "Kempton Park",
        "population" : 442633
      },
      {
        "district" : "Gauteng",
        "id" : 721,
        "countrycode" : "ZAF",
        "name" : "Alberton",
        "population" : 410102
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 722,
        "countrycode" : "ZAF",
        "name" : "Pinetown",
        "population" : 378810
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 723,
        "countrycode" : "ZAF",
        "name" : "Pietermaritzburg",
        "population" : 370190
      },
      {
        "district" : "Gauteng",
        "id" : 724,
        "countrycode" : "ZAF",
        "name" : "Benoni",
        "population" : 365467
      },
      {
        "district" : "Gauteng",
        "id" : 725,
        "countrycode" : "ZAF",
        "name" : "Randburg",
        "population" : 341288
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 726,
        "countrycode" : "ZAF",
        "name" : "Umlazi",
        "population" : 339233
      },
      {
        "district" : "Free State",
        "id" : 727,
        "countrycode" : "ZAF",
        "name" : "Bloemfontein",
        "population" : 334341
      },
      {
        "district" : "Gauteng",
        "id" : 728,
        "countrycode" : "ZAF",
        "name" : "Vereeniging",
        "population" : 328535
      },
      {
        "district" : "Gauteng",
        "id" : 729,
        "countrycode" : "ZAF",
        "name" : "Wonderboom",
        "population" : 283289
      },
      {
        "district" : "Gauteng",
        "id" : 730,
        "countrycode" : "ZAF",
        "name" : "Roodepoort",
        "population" : 279340
      },
      {
        "district" : "Gauteng",
        "id" : 731,
        "countrycode" : "ZAF",
        "name" : "Boksburg",
        "population" : 262648
      },
      {
        "district" : "North West",
        "id" : 732,
        "countrycode" : "ZAF",
        "name" : "Klerksdorp",
        "population" : 261911
      },
      {
        "district" : "Gauteng",
        "id" : 733,
        "countrycode" : "ZAF",
        "name" : "Soshanguve",
        "population" : 242727
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 734,
        "countrycode" : "ZAF",
        "name" : "Newcastle",
        "population" : 222993
      },
      {
        "district" : "Eastern Cape",
        "id" : 735,
        "countrycode" : "ZAF",
        "name" : "East London",
        "population" : 221047
      },
      {
        "district" : "Free State",
        "id" : 736,
        "countrycode" : "ZAF",
        "name" : "Welkom",
        "population" : 203296
      },
      {
        "district" : "Northern Cape",
        "id" : 737,
        "countrycode" : "ZAF",
        "name" : "Kimberley",
        "population" : 197254
      },
      {
        "district" : "Eastern Cape",
        "id" : 738,
        "countrycode" : "ZAF",
        "name" : "Uitenhage",
        "population" : 192120
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 739,
        "countrycode" : "ZAF",
        "name" : "Chatsworth",
        "population" : 189885
      },
      {
        "district" : "Eastern Cape",
        "id" : 740,
        "countrycode" : "ZAF",
        "name" : "Mdantsane",
        "population" : 182639
      },
      {
        "district" : "Gauteng",
        "id" : 741,
        "countrycode" : "ZAF",
        "name" : "Krugersdorp",
        "population" : 181503
      },
      {
        "district" : "Free State",
        "id" : 742,
        "countrycode" : "ZAF",
        "name" : "Botshabelo",
        "population" : 177971
      },
      {
        "district" : "Gauteng",
        "id" : 743,
        "countrycode" : "ZAF",
        "name" : "Brakpan",
        "population" : 171363
      },
      {
        "district" : "Mpumalanga",
        "id" : 744,
        "countrycode" : "ZAF",
        "name" : "Witbank",
        "population" : 167183
      },
      {
        "district" : "Gauteng",
        "id" : 745,
        "countrycode" : "ZAF",
        "name" : "Oberholzer",
        "population" : 164367
      },
      {
        "district" : "Gauteng",
        "id" : 746,
        "countrycode" : "ZAF",
        "name" : "Germiston",
        "population" : 164252
      },
      {
        "district" : "Gauteng",
        "id" : 747,
        "countrycode" : "ZAF",
        "name" : "Springs",
        "population" : 162072
      },
      {
        "district" : "Gauteng",
        "id" : 748,
        "countrycode" : "ZAF",
        "name" : "Westonaria",
        "population" : 159632
      },
      {
        "district" : "Gauteng",
        "id" : 749,
        "countrycode" : "ZAF",
        "name" : "Randfontein",
        "population" : 120838
      },
      {
        "district" : "Western Cape",
        "id" : 750,
        "countrycode" : "ZAF",
        "name" : "Paarl",
        "population" : 105768
      },
      {
        "district" : "North West",
        "id" : 751,
        "countrycode" : "ZAF",
        "name" : "Potchefstroom",
        "population" : 101817
      },
      {
        "district" : "North West",
        "id" : 752,
        "countrycode" : "ZAF",
        "name" : "Rustenburg",
        "population" : 97008
      },
      {
        "district" : "Gauteng",
        "id" : 753,
        "countrycode" : "ZAF",
        "name" : "Nigel",
        "population" : 96734
      },
      {
        "district" : "Western Cape",
        "id" : 754,
        "countrycode" : "ZAF",
        "name" : "George",
        "population" : 93818
      },
      {
        "district" : "KwaZulu-Natal",
        "id" : 755,
        "countrycode" : "ZAF",
        "name" : "Ladysmith",
        "population" : 89292
      },
      {
        "district" : "Addis Abeba",
        "id" : 756,
        "countrycode" : "ETH",
        "name" : "Addis Abeba",
        "population" : 2495000
      },
      {
        "district" : "Dire Dawa",
        "id" : 757,
        "countrycode" : "ETH",
        "name" : "Dire Dawa",
        "population" : 164851
      },
      {
        "district" : "Oromia",
        "id" : 758,
        "countrycode" : "ETH",
        "name" : "Nazret",
        "population" : 127842
      },
      {
        "district" : "Amhara",
        "id" : 759,
        "countrycode" : "ETH",
        "name" : "Gonder",
        "population" : 112249
      },
      {
        "district" : "Amhara",
        "id" : 760,
        "countrycode" : "ETH",
        "name" : "Dese",
        "population" : 97314
      },
      {
        "district" : "Tigray",
        "id" : 761,
        "countrycode" : "ETH",
        "name" : "Mekele",
        "population" : 96938
      },
      {
        "district" : "Amhara",
        "id" : 762,
        "countrycode" : "ETH",
        "name" : "Bahir Dar",
        "population" : 96140
      },
      {
        "district" : "East Falkland",
        "id" : 763,
        "countrycode" : "FLK",
        "name" : "Stanley",
        "population" : 1636
      },
      {
        "district" : "Central",
        "id" : 764,
        "countrycode" : "FJI",
        "name" : "Suva",
        "population" : 77366
      },
      {
        "district" : "National Capital Reg",
        "id" : 765,
        "countrycode" : "PHL",
        "name" : "Quezon",
        "population" : 2173831
      },
      {
        "district" : "National Capital Reg",
        "id" : 766,
        "countrycode" : "PHL",
        "name" : "Manila",
        "population" : 1581082
      },
      {
        "district" : "National Capital Reg",
        "id" : 767,
        "countrycode" : "PHL",
        "name" : "Kalookan",
        "population" : 1177604
      },
      {
        "district" : "Southern Mindanao",
        "id" : 768,
        "countrycode" : "PHL",
        "name" : "Davao",
        "population" : 1147116
      },
      {
        "district" : "Central Visayas",
        "id" : 769,
        "countrycode" : "PHL",
        "name" : "Cebu",
        "population" : 718821
      },
      {
        "district" : "Western Mindanao",
        "id" : 770,
        "countrycode" : "PHL",
        "name" : "Zamboanga",
        "population" : 601794
      },
      {
        "district" : "National Capital Reg",
        "id" : 771,
        "countrycode" : "PHL",
        "name" : "Pasig",
        "population" : 505058
      },
      {
        "district" : "National Capital Reg",
        "id" : 772,
        "countrycode" : "PHL",
        "name" : "Valenzuela",
        "population" : 485433
      },
      {
        "district" : "National Capital Reg",
        "id" : 773,
        "countrycode" : "PHL",
        "name" : "Las Piï¿½as",
        "population" : 472780
      },
      {
        "district" : "Southern Tagalog",
        "id" : 774,
        "countrycode" : "PHL",
        "name" : "Antipolo",
        "population" : 470866
      },
      {
        "district" : "National Capital Reg",
        "id" : 775,
        "countrycode" : "PHL",
        "name" : "Taguig",
        "population" : 467375
      },
      {
        "district" : "Northern Mindanao",
        "id" : 776,
        "countrycode" : "PHL",
        "name" : "Cagayan de Oro",
        "population" : 461877
      },
      {
        "district" : "National Capital Reg",
        "id" : 777,
        "countrycode" : "PHL",
        "name" : "Paraï¿½aque",
        "population" : 449811
      },
      {
        "district" : "National Capital Reg",
        "id" : 778,
        "countrycode" : "PHL",
        "name" : "Makati",
        "population" : 444867
      },
      {
        "district" : "Western Visayas",
        "id" : 779,
        "countrycode" : "PHL",
        "name" : "Bacolod",
        "population" : 429076
      },
      {
        "district" : "Southern Mindanao",
        "id" : 780,
        "countrycode" : "PHL",
        "name" : "General Santos",
        "population" : 411822
      },
      {
        "district" : "National Capital Reg",
        "id" : 781,
        "countrycode" : "PHL",
        "name" : "Marikina",
        "population" : 391170
      },
      {
        "district" : "Southern Tagalog",
        "id" : 782,
        "countrycode" : "PHL",
        "name" : "Dasmariï¿½as",
        "population" : 379520
      },
      {
        "district" : "National Capital Reg",
        "id" : 783,
        "countrycode" : "PHL",
        "name" : "Muntinlupa",
        "population" : 379310
      },
      {
        "district" : "Western Visayas",
        "id" : 784,
        "countrycode" : "PHL",
        "name" : "Iloilo",
        "population" : 365820
      },
      {
        "district" : "National Capital Reg",
        "id" : 785,
        "countrycode" : "PHL",
        "name" : "Pasay",
        "population" : 354908
      },
      {
        "district" : "National Capital Reg",
        "id" : 786,
        "countrycode" : "PHL",
        "name" : "Malabon",
        "population" : 338855
      },
      {
        "district" : "Central Luzon",
        "id" : 787,
        "countrycode" : "PHL",
        "name" : "San Josï¿½ del Monte",
        "population" : 315807
      },
      {
        "district" : "Southern Tagalog",
        "id" : 788,
        "countrycode" : "PHL",
        "name" : "Bacoor",
        "population" : 305699
      },
      {
        "district" : "Central Mindanao",
        "id" : 789,
        "countrycode" : "PHL",
        "name" : "Iligan",
        "population" : 285061
      },
      {
        "district" : "Southern Tagalog",
        "id" : 790,
        "countrycode" : "PHL",
        "name" : "Calamba",
        "population" : 281146
      },
      {
        "district" : "National Capital Reg",
        "id" : 791,
        "countrycode" : "PHL",
        "name" : "Mandaluyong",
        "population" : 278474
      },
      {
        "district" : "Caraga",
        "id" : 792,
        "countrycode" : "PHL",
        "name" : "Butuan",
        "population" : 267279
      },
      {
        "district" : "Central Luzon",
        "id" : 793,
        "countrycode" : "PHL",
        "name" : "Angeles",
        "population" : 263971
      },
      {
        "district" : "Central Luzon",
        "id" : 794,
        "countrycode" : "PHL",
        "name" : "Tarlac",
        "population" : 262481
      },
      {
        "district" : "Central Visayas",
        "id" : 795,
        "countrycode" : "PHL",
        "name" : "Mandaue",
        "population" : 259728
      },
      {
        "district" : "CAR",
        "id" : 796,
        "countrycode" : "PHL",
        "name" : "Baguio",
        "population" : 252386
      },
      {
        "district" : "Southern Tagalog",
        "id" : 797,
        "countrycode" : "PHL",
        "name" : "Batangas",
        "population" : 247588
      },
      {
        "district" : "Southern Tagalog",
        "id" : 798,
        "countrycode" : "PHL",
        "name" : "Cainta",
        "population" : 242511
      },
      {
        "district" : "Southern Tagalog",
        "id" : 799,
        "countrycode" : "PHL",
        "name" : "San Pedro",
        "population" : 231403
      },
      {
        "district" : "National Capital Reg",
        "id" : 800,
        "countrycode" : "PHL",
        "name" : "Navotas",
        "population" : 230403
      },
      {
        "district" : "Central Luzon",
        "id" : 801,
        "countrycode" : "PHL",
        "name" : "Cabanatuan",
        "population" : 222859
      },
      {
        "district" : "Central Luzon",
        "id" : 802,
        "countrycode" : "PHL",
        "name" : "San Fernando",
        "population" : 221857
      },
      {
        "district" : "Southern Tagalog",
        "id" : 803,
        "countrycode" : "PHL",
        "name" : "Lipa",
        "population" : 218447
      },
      {
        "district" : "Central Visayas",
        "id" : 804,
        "countrycode" : "PHL",
        "name" : "Lapu-Lapu",
        "population" : 217019
      },
      {
        "district" : "Southern Tagalog",
        "id" : 805,
        "countrycode" : "PHL",
        "name" : "San Pablo",
        "population" : 207927
      },
      {
        "district" : "Southern Tagalog",
        "id" : 806,
        "countrycode" : "PHL",
        "name" : "Biï¿½an",
        "population" : 201186
      },
      {
        "district" : "Southern Tagalog",
        "id" : 807,
        "countrycode" : "PHL",
        "name" : "Taytay",
        "population" : 198183
      },
      {
        "district" : "Southern Tagalog",
        "id" : 808,
        "countrycode" : "PHL",
        "name" : "Lucena",
        "population" : 196075
      },
      {
        "district" : "Southern Tagalog",
        "id" : 809,
        "countrycode" : "PHL",
        "name" : "Imus",
        "population" : 195482
      },
      {
        "district" : "Central Luzon",
        "id" : 810,
        "countrycode" : "PHL",
        "name" : "Olongapo",
        "population" : 194260
      },
      {
        "district" : "Southern Tagalog",
        "id" : 811,
        "countrycode" : "PHL",
        "name" : "Binangonan",
        "population" : 187691
      },
      {
        "district" : "Southern Tagalog",
        "id" : 812,
        "countrycode" : "PHL",
        "name" : "Santa Rosa",
        "population" : 185633
      },
      {
        "district" : "Southern Mindanao",
        "id" : 813,
        "countrycode" : "PHL",
        "name" : "Tagum",
        "population" : 179531
      },
      {
        "district" : "Eastern Visayas",
        "id" : 814,
        "countrycode" : "PHL",
        "name" : "Tacloban",
        "population" : 178639
      },
      {
        "district" : "Central Luzon",
        "id" : 815,
        "countrycode" : "PHL",
        "name" : "Malolos",
        "population" : 175291
      },
      {
        "district" : "Central Luzon",
        "id" : 816,
        "countrycode" : "PHL",
        "name" : "Mabalacat",
        "population" : 171045
      },
      {
        "district" : "Central Mindanao",
        "id" : 817,
        "countrycode" : "PHL",
        "name" : "Cotabato",
        "population" : 163849
      },
      {
        "district" : "Central Luzon",
        "id" : 818,
        "countrycode" : "PHL",
        "name" : "Meycauayan",
        "population" : 163037
      },
      {
        "district" : "Southern Tagalog",
        "id" : 819,
        "countrycode" : "PHL",
        "name" : "Puerto Princesa",
        "population" : 161912
      },
      {
        "district" : "Bicol",
        "id" : 820,
        "countrycode" : "PHL",
        "name" : "Legazpi",
        "population" : 157010
      },
      {
        "district" : "Southern Tagalog",
        "id" : 821,
        "countrycode" : "PHL",
        "name" : "Silang",
        "population" : 156137
      },
      {
        "district" : "Eastern Visayas",
        "id" : 822,
        "countrycode" : "PHL",
        "name" : "Ormoc",
        "population" : 154297
      },
      {
        "district" : "Ilocos",
        "id" : 823,
        "countrycode" : "PHL",
        "name" : "San Carlos",
        "population" : 154264
      },
      {
        "district" : "Western Visayas",
        "id" : 824,
        "countrycode" : "PHL",
        "name" : "Kabankalan",
        "population" : 149769
      },
      {
        "district" : "Central Visayas",
        "id" : 825,
        "countrycode" : "PHL",
        "name" : "Talisay",
        "population" : 148110
      },
      {
        "district" : "Northern Mindanao",
        "id" : 826,
        "countrycode" : "PHL",
        "name" : "Valencia",
        "population" : 147924
      },
      {
        "district" : "Eastern Visayas",
        "id" : 827,
        "countrycode" : "PHL",
        "name" : "Calbayog",
        "population" : 147187
      },
      {
        "district" : "Central Luzon",
        "id" : 828,
        "countrycode" : "PHL",
        "name" : "Santa Maria",
        "population" : 144282
      },
      {
        "district" : "Western Mindanao",
        "id" : 829,
        "countrycode" : "PHL",
        "name" : "Pagadian",
        "population" : 142515
      },
      {
        "district" : "Western Visayas",
        "id" : 830,
        "countrycode" : "PHL",
        "name" : "Cadiz",
        "population" : 141954
      },
      {
        "district" : "Western Visayas",
        "id" : 831,
        "countrycode" : "PHL",
        "name" : "Bago",
        "population" : 141721
      },
      {
        "district" : "Central Visayas",
        "id" : 832,
        "countrycode" : "PHL",
        "name" : "Toledo",
        "population" : 141174
      },
      {
        "district" : "Bicol",
        "id" : 833,
        "countrycode" : "PHL",
        "name" : "Naga",
        "population" : 137810
      },
      {
        "district" : "Southern Tagalog",
        "id" : 834,
        "countrycode" : "PHL",
        "name" : "San Mateo",
        "population" : 135603
      },
      {
        "district" : "Southern Mindanao",
        "id" : 835,
        "countrycode" : "PHL",
        "name" : "Panabo",
        "population" : 133950
      },
      {
        "district" : "Southern Mindanao",
        "id" : 836,
        "countrycode" : "PHL",
        "name" : "Koronadal",
        "population" : 133786
      },
      {
        "district" : "Central Mindanao",
        "id" : 837,
        "countrycode" : "PHL",
        "name" : "Marawi",
        "population" : 131090
      },
      {
        "district" : "Ilocos",
        "id" : 838,
        "countrycode" : "PHL",
        "name" : "Dagupan",
        "population" : 130328
      },
      {
        "district" : "Western Visayas",
        "id" : 839,
        "countrycode" : "PHL",
        "name" : "Sagay",
        "population" : 129765
      },
      {
        "district" : "Western Visayas",
        "id" : 840,
        "countrycode" : "PHL",
        "name" : "Roxas",
        "population" : 126352
      },
      {
        "district" : "Central Luzon",
        "id" : 841,
        "countrycode" : "PHL",
        "name" : "Lubao",
        "population" : 125699
      },
      {
        "district" : "Southern Mindanao",
        "id" : 842,
        "countrycode" : "PHL",
        "name" : "Digos",
        "population" : 125171
      },
      {
        "district" : "Central Luzon",
        "id" : 843,
        "countrycode" : "PHL",
        "name" : "San Miguel",
        "population" : 123824
      },
      {
        "district" : "Northern Mindanao",
        "id" : 844,
        "countrycode" : "PHL",
        "name" : "Malaybalay",
        "population" : 123672
      },
      {
        "district" : "Cagayan Valley",
        "id" : 845,
        "countrycode" : "PHL",
        "name" : "Tuguegarao",
        "population" : 120645
      },
      {
        "district" : "Cagayan Valley",
        "id" : 846,
        "countrycode" : "PHL",
        "name" : "Ilagan",
        "population" : 119990
      },
      {
        "district" : "Central Luzon",
        "id" : 847,
        "countrycode" : "PHL",
        "name" : "Baliuag",
        "population" : 119675
      },
      {
        "district" : "Caraga",
        "id" : 848,
        "countrycode" : "PHL",
        "name" : "Surigao",
        "population" : 118534
      },
      {
        "district" : "Western Visayas",
        "id" : 849,
        "countrycode" : "PHL",
        "name" : "San Carlos",
        "population" : 118259
      },
      {
        "district" : "National Capital Reg",
        "id" : 850,
        "countrycode" : "PHL",
        "name" : "San Juan del Monte",
        "population" : 117680
      },
      {
        "district" : "Southern Tagalog",
        "id" : 851,
        "countrycode" : "PHL",
        "name" : "Tanauan",
        "population" : 117539
      },
      {
        "district" : "Central Luzon",
        "id" : 852,
        "countrycode" : "PHL",
        "name" : "Concepcion",
        "population" : 115171
      },
      {
        "district" : "Southern Tagalog",
        "id" : 853,
        "countrycode" : "PHL",
        "name" : "Rodriguez (Montalban)",
        "population" : 115167
      },
      {
        "district" : "Southern Tagalog",
        "id" : 854,
        "countrycode" : "PHL",
        "name" : "Sariaya",
        "population" : 114568
      },
      {
        "district" : "Ilocos",
        "id" : 855,
        "countrycode" : "PHL",
        "name" : "Malasiqui",
        "population" : 113190
      },
      {
        "district" : "Southern Tagalog",
        "id" : 856,
        "countrycode" : "PHL",
        "name" : "General Mariano Alvarez",
        "population" : 112446
      },
      {
        "district" : "Ilocos",
        "id" : 857,
        "countrycode" : "PHL",
        "name" : "Urdaneta",
        "population" : 111582
      },
      {
        "district" : "Central Luzon",
        "id" : 858,
        "countrycode" : "PHL",
        "name" : "Hagonoy",
        "population" : 111425
      },
      {
        "district" : "Southern Tagalog",
        "id" : 859,
        "countrycode" : "PHL",
        "name" : "San Jose",
        "population" : 111009
      },
      {
        "district" : "Southern Mindanao",
        "id" : 860,
        "countrycode" : "PHL",
        "name" : "Polomolok",
        "population" : 110709
      },
      {
        "district" : "Cagayan Valley",
        "id" : 861,
        "countrycode" : "PHL",
        "name" : "Santiago",
        "population" : 110531
      },
      {
        "district" : "Southern Tagalog",
        "id" : 862,
        "countrycode" : "PHL",
        "name" : "Tanza",
        "population" : 110517
      },
      {
        "district" : "Northern Mindanao",
        "id" : 863,
        "countrycode" : "PHL",
        "name" : "Ozamis",
        "population" : 110420
      },
      {
        "district" : "Central Luzon",
        "id" : 864,
        "countrycode" : "PHL",
        "name" : "Mexico",
        "population" : 109481
      },
      {
        "district" : "Central Luzon",
        "id" : 865,
        "countrycode" : "PHL",
        "name" : "San Jose",
        "population" : 108254
      },
      {
        "district" : "Western Visayas",
        "id" : 866,
        "countrycode" : "PHL",
        "name" : "Silay",
        "population" : 107722
      },
      {
        "district" : "Southern Tagalog",
        "id" : 867,
        "countrycode" : "PHL",
        "name" : "General Trias",
        "population" : 107691
      },
      {
        "district" : "Bicol",
        "id" : 868,
        "countrycode" : "PHL",
        "name" : "Tabaco",
        "population" : 107166
      },
      {
        "district" : "Southern Tagalog",
        "id" : 869,
        "countrycode" : "PHL",
        "name" : "Cabuyao",
        "population" : 106630
      },
      {
        "district" : "Southern Tagalog",
        "id" : 870,
        "countrycode" : "PHL",
        "name" : "Calapan",
        "population" : 105910
      },
      {
        "district" : "Southern Mindanao",
        "id" : 871,
        "countrycode" : "PHL",
        "name" : "Mati",
        "population" : 105908
      },
      {
        "district" : "Central Mindanao",
        "id" : 872,
        "countrycode" : "PHL",
        "name" : "Midsayap",
        "population" : 105760
      },
      {
        "district" : "Cagayan Valley",
        "id" : 873,
        "countrycode" : "PHL",
        "name" : "Cauayan",
        "population" : 103952
      },
      {
        "district" : "Northern Mindanao",
        "id" : 874,
        "countrycode" : "PHL",
        "name" : "Gingoog",
        "population" : 102379
      },
      {
        "district" : "Central Visayas",
        "id" : 875,
        "countrycode" : "PHL",
        "name" : "Dumaguete",
        "population" : 102265
      },
      {
        "district" : "Ilocos",
        "id" : 876,
        "countrycode" : "PHL",
        "name" : "San Fernando",
        "population" : 102082
      },
      {
        "district" : "Central Luzon",
        "id" : 877,
        "countrycode" : "PHL",
        "name" : "Arayat",
        "population" : 101792
      },
      {
        "district" : "Central Visayas",
        "id" : 878,
        "countrycode" : "PHL",
        "name" : "Bayawan (Tulong)",
        "population" : 101391
      },
      {
        "district" : "Central Mindanao",
        "id" : 879,
        "countrycode" : "PHL",
        "name" : "Kidapawan",
        "population" : 101205
      },
      {
        "district" : "Bicol",
        "id" : 880,
        "countrycode" : "PHL",
        "name" : "Daraga (Locsin)",
        "population" : 101031
      },
      {
        "district" : "Central Luzon",
        "id" : 881,
        "countrycode" : "PHL",
        "name" : "Marilao",
        "population" : 101017
      },
      {
        "district" : "Southern Mindanao",
        "id" : 882,
        "countrycode" : "PHL",
        "name" : "Malita",
        "population" : 100000
      },
      {
        "district" : "Western Mindanao",
        "id" : 883,
        "countrycode" : "PHL",
        "name" : "Dipolog",
        "population" : 99862
      },
      {
        "district" : "Southern Tagalog",
        "id" : 884,
        "countrycode" : "PHL",
        "name" : "Cavite",
        "population" : 99367
      },
      {
        "district" : "Central Visayas",
        "id" : 885,
        "countrycode" : "PHL",
        "name" : "Danao",
        "population" : 98781
      },
      {
        "district" : "Caraga",
        "id" : 886,
        "countrycode" : "PHL",
        "name" : "Bislig",
        "population" : 97860
      },
      {
        "district" : "Central Luzon",
        "id" : 887,
        "countrycode" : "PHL",
        "name" : "Talavera",
        "population" : 97329
      },
      {
        "district" : "Central Luzon",
        "id" : 888,
        "countrycode" : "PHL",
        "name" : "Guagua",
        "population" : 96858
      },
      {
        "district" : "Ilocos",
        "id" : 889,
        "countrycode" : "PHL",
        "name" : "Bayambang",
        "population" : 96609
      },
      {
        "district" : "Southern Tagalog",
        "id" : 890,
        "countrycode" : "PHL",
        "name" : "Nasugbu",
        "population" : 96113
      },
      {
        "district" : "Eastern Visayas",
        "id" : 891,
        "countrycode" : "PHL",
        "name" : "Baybay",
        "population" : 95630
      },
      {
        "district" : "Central Luzon",
        "id" : 892,
        "countrycode" : "PHL",
        "name" : "Capas",
        "population" : 95219
      },
      {
        "district" : "ARMM",
        "id" : 893,
        "countrycode" : "PHL",
        "name" : "Sultan Kudarat",
        "population" : 94861
      },
      {
        "district" : "Ilocos",
        "id" : 894,
        "countrycode" : "PHL",
        "name" : "Laoag",
        "population" : 94466
      },
      {
        "district" : "Caraga",
        "id" : 895,
        "countrycode" : "PHL",
        "name" : "Bayugan",
        "population" : 93623
      },
      {
        "district" : "Southern Mindanao",
        "id" : 896,
        "countrycode" : "PHL",
        "name" : "Malungon",
        "population" : 93232
      },
      {
        "district" : "Southern Tagalog",
        "id" : 897,
        "countrycode" : "PHL",
        "name" : "Santa Cruz",
        "population" : 92694
      },
      {
        "district" : "Bicol",
        "id" : 898,
        "countrycode" : "PHL",
        "name" : "Sorsogon",
        "population" : 92512
      },
      {
        "district" : "Southern Tagalog",
        "id" : 899,
        "countrycode" : "PHL",
        "name" : "Candelaria",
        "population" : 92429
      },
      {
        "district" : "Bicol",
        "id" : 900,
        "countrycode" : "PHL",
        "name" : "Ligao",
        "population" : 90603
      },
      {
        "district" : "Streymoyar",
        "id" : 901,
        "countrycode" : "FRO",
        "name" : "Tï¿½rshavn",
        "population" : 14542
      },
      {
        "district" : "Estuaire",
        "id" : 902,
        "countrycode" : "GAB",
        "name" : "Libreville",
        "population" : 419000
      },
      {
        "district" : "Kombo St Mary",
        "id" : 903,
        "countrycode" : "GMB",
        "name" : "Serekunda",
        "population" : 102600
      },
      {
        "district" : "Banjul",
        "id" : 904,
        "countrycode" : "GMB",
        "name" : "Banjul",
        "population" : 42326
      },
      {
        "district" : "Tbilisi",
        "id" : 905,
        "countrycode" : "GEO",
        "name" : "Tbilisi",
        "population" : 1235200
      },
      {
        "district" : "Imereti",
        "id" : 906,
        "countrycode" : "GEO",
        "name" : "Kutaisi",
        "population" : 240900
      },
      {
        "district" : "Kvemo Kartli",
        "id" : 907,
        "countrycode" : "GEO",
        "name" : "Rustavi",
        "population" : 155400
      },
      {
        "district" : "Adzaria [Atï¿½ara]",
        "id" : 908,
        "countrycode" : "GEO",
        "name" : "Batumi",
        "population" : 137700
      },
      {
        "district" : "Abhasia [Aphazeti]",
        "id" : 909,
        "countrycode" : "GEO",
        "name" : "Sohumi",
        "population" : 111700
      },
      {
        "district" : "Greater Accra",
        "id" : 910,
        "countrycode" : "GHA",
        "name" : "Accra",
        "population" : 1070000
      },
      {
        "district" : "Ashanti",
        "id" : 911,
        "countrycode" : "GHA",
        "name" : "Kumasi",
        "population" : 385192
      },
      {
        "district" : "Northern",
        "id" : 912,
        "countrycode" : "GHA",
        "name" : "Tamale",
        "population" : 151069
      },
      {
        "district" : "Greater Accra",
        "id" : 913,
        "countrycode" : "GHA",
        "name" : "Tema",
        "population" : 109975
      },
      {
        "district" : "Western",
        "id" : 914,
        "countrycode" : "GHA",
        "name" : "Sekondi-Takoradi",
        "population" : 103653
      },
      {
        "district" : "ï¿½",
        "id" : 915,
        "countrycode" : "GIB",
        "name" : "Gibraltar",
        "population" : 27025
      },
      {
        "district" : "St George",
        "id" : 916,
        "countrycode" : "GRD",
        "name" : "Saint Georgeï¿½s",
        "population" : 4621
      },
      {
        "district" : "Kitaa",
        "id" : 917,
        "countrycode" : "GRL",
        "name" : "Nuuk",
        "population" : 13445
      },
      {
        "district" : "Grande-Terre",
        "id" : 918,
        "countrycode" : "GLP",
        "name" : "Les Abymes",
        "population" : 62947
      },
      {
        "district" : "Basse-Terre",
        "id" : 919,
        "countrycode" : "GLP",
        "name" : "Basse-Terre",
        "population" : 12433
      },
      {
        "district" : "ï¿½",
        "id" : 920,
        "countrycode" : "GUM",
        "name" : "Tamuning",
        "population" : 9500
      },
      {
        "district" : "ï¿½",
        "id" : 921,
        "countrycode" : "GUM",
        "name" : "Agaï¿½a",
        "population" : 1139
      },
      {
        "district" : "Guatemala",
        "id" : 922,
        "countrycode" : "GTM",
        "name" : "Ciudad de Guatemala",
        "population" : 823301
      },
      {
        "district" : "Guatemala",
        "id" : 923,
        "countrycode" : "GTM",
        "name" : "Mixco",
        "population" : 209791
      },
      {
        "district" : "Guatemala",
        "id" : 924,
        "countrycode" : "GTM",
        "name" : "Villa Nueva",
        "population" : 101295
      },
      {
        "district" : "Quetzaltenango",
        "id" : 925,
        "countrycode" : "GTM",
        "name" : "Quetzaltenango",
        "population" : 90801
      },
      {
        "district" : "Conakry",
        "id" : 926,
        "countrycode" : "GIN",
        "name" : "Conakry",
        "population" : 1090610
      },
      {
        "district" : "Bissau",
        "id" : 927,
        "countrycode" : "GNB",
        "name" : "Bissau",
        "population" : 241000
      },
      {
        "district" : "Georgetown",
        "id" : 928,
        "countrycode" : "GUY",
        "name" : "Georgetown",
        "population" : 254000
      },
      {
        "district" : "Ouest",
        "id" : 929,
        "countrycode" : "HTI",
        "name" : "Port-au-Prince",
        "population" : 884472
      },
      {
        "district" : "Ouest",
        "id" : 930,
        "countrycode" : "HTI",
        "name" : "Carrefour",
        "population" : 290204
      },
      {
        "district" : "Ouest",
        "id" : 931,
        "countrycode" : "HTI",
        "name" : "Delmas",
        "population" : 240429
      },
      {
        "district" : "Nord",
        "id" : 932,
        "countrycode" : "HTI",
        "name" : "Le-Cap-Haï¿½tien",
        "population" : 102233
      },
      {
        "district" : "Distrito Central",
        "id" : 933,
        "countrycode" : "HND",
        "name" : "Tegucigalpa",
        "population" : 813900
      },
      {
        "district" : "Cortï¿½s",
        "id" : 934,
        "countrycode" : "HND",
        "name" : "San Pedro Sula",
        "population" : 383900
      },
      {
        "district" : "Atlï¿½ntida",
        "id" : 935,
        "countrycode" : "HND",
        "name" : "La Ceiba",
        "population" : 89200
      },
      {
        "district" : "Kowloon and New Kowl",
        "id" : 936,
        "countrycode" : "HKG",
        "name" : "Kowloon and New Kowloon",
        "population" : 1987996
      },
      {
        "district" : "Hongkong",
        "id" : 937,
        "countrycode" : "HKG",
        "name" : "Victoria",
        "population" : 1312637
      },
      {
        "district" : "Lï¿½nsimaa",
        "id" : 938,
        "countrycode" : "SJM",
        "name" : "Longyearbyen",
        "population" : 1438
      },
      {
        "district" : "Jakarta Raya",
        "id" : 939,
        "countrycode" : "IDN",
        "name" : "Jakarta",
        "population" : 9604900
      },
      {
        "district" : "East Java",
        "id" : 940,
        "countrycode" : "IDN",
        "name" : "Surabaya",
        "population" : 2663820
      },
      {
        "district" : "West Java",
        "id" : 941,
        "countrycode" : "IDN",
        "name" : "Bandung",
        "population" : 2429000
      },
      {
        "district" : "Sumatera Utara",
        "id" : 942,
        "countrycode" : "IDN",
        "name" : "Medan",
        "population" : 1843919
      },
      {
        "district" : "Sumatera Selatan",
        "id" : 943,
        "countrycode" : "IDN",
        "name" : "Palembang",
        "population" : 1222764
      },
      {
        "district" : "West Java",
        "id" : 944,
        "countrycode" : "IDN",
        "name" : "Tangerang",
        "population" : 1198300
      },
      {
        "district" : "Central Java",
        "id" : 945,
        "countrycode" : "IDN",
        "name" : "Semarang",
        "population" : 1104405
      },
      {
        "district" : "Sulawesi Selatan",
        "id" : 946,
        "countrycode" : "IDN",
        "name" : "Ujung Pandang",
        "population" : 1060257
      },
      {
        "district" : "East Java",
        "id" : 947,
        "countrycode" : "IDN",
        "name" : "Malang",
        "population" : 716862
      },
      {
        "district" : "Lampung",
        "id" : 948,
        "countrycode" : "IDN",
        "name" : "Bandar Lampung",
        "population" : 680332
      },
      {
        "district" : "West Java",
        "id" : 949,
        "countrycode" : "IDN",
        "name" : "Bekasi",
        "population" : 644300
      },
      {
        "district" : "Sumatera Barat",
        "id" : 950,
        "countrycode" : "IDN",
        "name" : "Padang",
        "population" : 534474
      },
      {
        "district" : "Central Java",
        "id" : 951,
        "countrycode" : "IDN",
        "name" : "Surakarta",
        "population" : 518600
      },
      {
        "district" : "Kalimantan Selatan",
        "id" : 952,
        "countrycode" : "IDN",
        "name" : "Banjarmasin",
        "population" : 482931
      },
      {
        "district" : "Riau",
        "id" : 953,
        "countrycode" : "IDN",
        "name" : "Pekan Baru",
        "population" : 438638
      },
      {
        "district" : "Bali",
        "id" : 954,
        "countrycode" : "IDN",
        "name" : "Denpasar",
        "population" : 435000
      },
      {
        "district" : "Yogyakarta",
        "id" : 955,
        "countrycode" : "IDN",
        "name" : "Yogyakarta",
        "population" : 418944
      },
      {
        "district" : "Kalimantan Barat",
        "id" : 956,
        "countrycode" : "IDN",
        "name" : "Pontianak",
        "population" : 409632
      },
      {
        "district" : "Kalimantan Timur",
        "id" : 957,
        "countrycode" : "IDN",
        "name" : "Samarinda",
        "population" : 399175
      },
      {
        "district" : "Jambi",
        "id" : 958,
        "countrycode" : "IDN",
        "name" : "Jambi",
        "population" : 385201
      },
      {
        "district" : "West Java",
        "id" : 959,
        "countrycode" : "IDN",
        "name" : "Depok",
        "population" : 365200
      },
      {
        "district" : "West Java",
        "id" : 960,
        "countrycode" : "IDN",
        "name" : "Cimahi",
        "population" : 344600
      },
      {
        "district" : "Kalimantan Timur",
        "id" : 961,
        "countrycode" : "IDN",
        "name" : "Balikpapan",
        "population" : 338752
      },
      {
        "district" : "Sulawesi Utara",
        "id" : 962,
        "countrycode" : "IDN",
        "name" : "Manado",
        "population" : 332288
      },
      {
        "district" : "Nusa Tenggara Barat",
        "id" : 963,
        "countrycode" : "IDN",
        "name" : "Mataram",
        "population" : 306600
      },
      {
        "district" : "Central Java",
        "id" : 964,
        "countrycode" : "IDN",
        "name" : "Pekalongan",
        "population" : 301504
      },
      {
        "district" : "Central Java",
        "id" : 965,
        "countrycode" : "IDN",
        "name" : "Tegal",
        "population" : 289744
      },
      {
        "district" : "West Java",
        "id" : 966,
        "countrycode" : "IDN",
        "name" : "Bogor",
        "population" : 285114
      },
      {
        "district" : "West Java",
        "id" : 967,
        "countrycode" : "IDN",
        "name" : "Ciputat",
        "population" : 270800
      },
      {
        "district" : "West Java",
        "id" : 968,
        "countrycode" : "IDN",
        "name" : "Pondokgede",
        "population" : 263200
      },
      {
        "district" : "West Java",
        "id" : 969,
        "countrycode" : "IDN",
        "name" : "Cirebon",
        "population" : 254406
      },
      {
        "district" : "East Java",
        "id" : 970,
        "countrycode" : "IDN",
        "name" : "Kediri",
        "population" : 253760
      },
      {
        "district" : "Molukit",
        "id" : 971,
        "countrycode" : "IDN",
        "name" : "Ambon",
        "population" : 249312
      },
      {
        "district" : "East Java",
        "id" : 972,
        "countrycode" : "IDN",
        "name" : "Jember",
        "population" : 218500
      },
      {
        "district" : "Central Java",
        "id" : 973,
        "countrycode" : "IDN",
        "name" : "Cilacap",
        "population" : 206900
      },
      {
        "district" : "West Java",
        "id" : 974,
        "countrycode" : "IDN",
        "name" : "Cimanggis",
        "population" : 205100
      },
      {
        "district" : "Sumatera Utara",
        "id" : 975,
        "countrycode" : "IDN",
        "name" : "Pematang Siantar",
        "population" : 203056
      },
      {
        "district" : "Central Java",
        "id" : 976,
        "countrycode" : "IDN",
        "name" : "Purwokerto",
        "population" : 202500
      },
      {
        "district" : "West Java",
        "id" : 977,
        "countrycode" : "IDN",
        "name" : "Ciomas",
        "population" : 187400
      },
      {
        "district" : "West Java",
        "id" : 978,
        "countrycode" : "IDN",
        "name" : "Tasikmalaya",
        "population" : 179800
      },
      {
        "district" : "East Java",
        "id" : 979,
        "countrycode" : "IDN",
        "name" : "Madiun",
        "population" : 171532
      },
      {
        "district" : "Bengkulu",
        "id" : 980,
        "countrycode" : "IDN",
        "name" : "Bengkulu",
        "population" : 146439
      },
      {
        "district" : "West Java",
        "id" : 981,
        "countrycode" : "IDN",
        "name" : "Karawang",
        "population" : 145000
      },
      {
        "district" : "Aceh",
        "id" : 982,
        "countrycode" : "IDN",
        "name" : "Banda Aceh",
        "population" : 143409
      },
      {
        "district" : "Sulawesi Tengah",
        "id" : 983,
        "countrycode" : "IDN",
        "name" : "Palu",
        "population" : 142800
      },
      {
        "district" : "East Java",
        "id" : 984,
        "countrycode" : "IDN",
        "name" : "Pasuruan",
        "population" : 134019
      },
      {
        "district" : "Nusa Tenggara Timur",
        "id" : 985,
        "countrycode" : "IDN",
        "name" : "Kupang",
        "population" : 129300
      },
      {
        "district" : "Sumatera Utara",
        "id" : 986,
        "countrycode" : "IDN",
        "name" : "Tebing Tinggi",
        "population" : 129300
      },
      {
        "district" : "Sumatera Utara",
        "id" : 987,
        "countrycode" : "IDN",
        "name" : "Percut Sei Tuan",
        "population" : 129000
      },
      {
        "district" : "Sumatera Utara",
        "id" : 988,
        "countrycode" : "IDN",
        "name" : "Binjai",
        "population" : 127222
      },
      {
        "district" : "West Java",
        "id" : 989,
        "countrycode" : "IDN",
        "name" : "Sukabumi",
        "population" : 125766
      },
      {
        "district" : "East Java",
        "id" : 990,
        "countrycode" : "IDN",
        "name" : "Waru",
        "population" : 124300
      },
      {
        "district" : "Sumatera Selatan",
        "id" : 991,
        "countrycode" : "IDN",
        "name" : "Pangkal Pinang",
        "population" : 124000
      },
      {
        "district" : "Central Java",
        "id" : 992,
        "countrycode" : "IDN",
        "name" : "Magelang",
        "population" : 123800
      },
      {
        "district" : "East Java",
        "id" : 993,
        "countrycode" : "IDN",
        "name" : "Blitar",
        "population" : 122600
      },
      {
        "district" : "West Java",
        "id" : 994,
        "countrycode" : "IDN",
        "name" : "Serang",
        "population" : 122400
      },
      {
        "district" : "East Java",
        "id" : 995,
        "countrycode" : "IDN",
        "name" : "Probolinggo",
        "population" : 120770
      },
      {
        "district" : "West Java",
        "id" : 996,
        "countrycode" : "IDN",
        "name" : "Cilegon",
        "population" : 117000
      },
      {
        "district" : "West Java",
        "id" : 997,
        "countrycode" : "IDN",
        "name" : "Cianjur",
        "population" : 114300
      },
      {
        "district" : "West Java",
        "id" : 998,
        "countrycode" : "IDN",
        "name" : "Ciparay",
        "population" : 111500
      },
      {
        "district" : "Aceh",
        "id" : 999,
        "countrycode" : "IDN",
        "name" : "Lhokseumawe",
        "population" : 109600
      },
      {
        "district" : "East Java",
        "id" : 1000,
        "countrycode" : "IDN",
        "name" : "Taman",
        "population" : 107000
      },
      {
        "district" : "Yogyakarta",
        "id" : 1001,
        "countrycode" : "IDN",
        "name" : "Depok",
        "population" : 106800
      },
      {
        "district" : "West Java",
        "id" : 1002,
        "countrycode" : "IDN",
        "name" : "Citeureup",
        "population" : 105100
      },
      {
        "district" : "Central Java",
        "id" : 1003,
        "countrycode" : "IDN",
        "name" : "Pemalang",
        "population" : 103500
      },
      {
        "district" : "Central Java",
        "id" : 1004,
        "countrycode" : "IDN",
        "name" : "Klaten",
        "population" : 103300
      },
      {
        "district" : "Central Java",
        "id" : 1005,
        "countrycode" : "IDN",
        "name" : "Salatiga",
        "population" : 103000
      },
      {
        "district" : "West Java",
        "id" : 1006,
        "countrycode" : "IDN",
        "name" : "Cibinong",
        "population" : 101300
      },
      {
        "district" : "Kalimantan Tengah",
        "id" : 1007,
        "countrycode" : "IDN",
        "name" : "Palangka Raya",
        "population" : 99693
      },
      {
        "district" : "East Java",
        "id" : 1008,
        "countrycode" : "IDN",
        "name" : "Mojokerto",
        "population" : 96626
      },
      {
        "district" : "West Java",
        "id" : 1009,
        "countrycode" : "IDN",
        "name" : "Purwakarta",
        "population" : 95900
      },
      {
        "district" : "West Java",
        "id" : 1010,
        "countrycode" : "IDN",
        "name" : "Garut",
        "population" : 95800
      },
      {
        "district" : "Central Java",
        "id" : 1011,
        "countrycode" : "IDN",
        "name" : "Kudus",
        "population" : 95300
      },
      {
        "district" : "Sulawesi Tenggara",
        "id" : 1012,
        "countrycode" : "IDN",
        "name" : "Kendari",
        "population" : 94800
      },
      {
        "district" : "West Irian",
        "id" : 1013,
        "countrycode" : "IDN",
        "name" : "Jaya Pura",
        "population" : 94700
      },
      {
        "district" : "Sulawesi Utara",
        "id" : 1014,
        "countrycode" : "IDN",
        "name" : "Gorontalo",
        "population" : 94058
      },
      {
        "district" : "West Java",
        "id" : 1015,
        "countrycode" : "IDN",
        "name" : "Majalaya",
        "population" : 93200
      },
      {
        "district" : "West Java",
        "id" : 1016,
        "countrycode" : "IDN",
        "name" : "Pondok Aren",
        "population" : 92700
      },
      {
        "district" : "East Java",
        "id" : 1017,
        "countrycode" : "IDN",
        "name" : "Jombang",
        "population" : 92600
      },
      {
        "district" : "Sumatera Utara",
        "id" : 1018,
        "countrycode" : "IDN",
        "name" : "Sunggal",
        "population" : 92300
      },
      {
        "district" : "Riau",
        "id" : 1019,
        "countrycode" : "IDN",
        "name" : "Batam",
        "population" : 91871
      },
      {
        "district" : "Sumatera Utara",
        "id" : 1020,
        "countrycode" : "IDN",
        "name" : "Padang Sidempuan",
        "population" : 91200
      },
      {
        "district" : "West Java",
        "id" : 1021,
        "countrycode" : "IDN",
        "name" : "Sawangan",
        "population" : 91100
      },
      {
        "district" : "East Java",
        "id" : 1022,
        "countrycode" : "IDN",
        "name" : "Banyuwangi",
        "population" : 89900
      },
      {
        "district" : "Riau",
        "id" : 1023,
        "countrycode" : "IDN",
        "name" : "Tanjung Pinang",
        "population" : 89900
      },
      {
        "district" : "Maharashtra",
        "id" : 1024,
        "countrycode" : "IND",
        "name" : "Mumbai (Bombay)",
        "population" : 10500000
      },
      {
        "district" : "Delhi",
        "id" : 1025,
        "countrycode" : "IND",
        "name" : "Delhi",
        "population" : 7206704
      },
      {
        "district" : "West Bengali",
        "id" : 1026,
        "countrycode" : "IND",
        "name" : "Calcutta [Kolkata]",
        "population" : 4399819
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1027,
        "countrycode" : "IND",
        "name" : "Chennai (Madras)",
        "population" : 3841396
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1028,
        "countrycode" : "IND",
        "name" : "Hyderabad",
        "population" : 2964638
      },
      {
        "district" : "Gujarat",
        "id" : 1029,
        "countrycode" : "IND",
        "name" : "Ahmedabad",
        "population" : 2876710
      },
      {
        "district" : "Karnataka",
        "id" : 1030,
        "countrycode" : "IND",
        "name" : "Bangalore",
        "population" : 2660088
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1031,
        "countrycode" : "IND",
        "name" : "Kanpur",
        "population" : 1874409
      },
      {
        "district" : "Maharashtra",
        "id" : 1032,
        "countrycode" : "IND",
        "name" : "Nagpur",
        "population" : 1624752
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1033,
        "countrycode" : "IND",
        "name" : "Lucknow",
        "population" : 1619115
      },
      {
        "district" : "Maharashtra",
        "id" : 1034,
        "countrycode" : "IND",
        "name" : "Pune",
        "population" : 1566651
      },
      {
        "district" : "Gujarat",
        "id" : 1035,
        "countrycode" : "IND",
        "name" : "Surat",
        "population" : 1498817
      },
      {
        "district" : "Rajasthan",
        "id" : 1036,
        "countrycode" : "IND",
        "name" : "Jaipur",
        "population" : 1458483
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1037,
        "countrycode" : "IND",
        "name" : "Indore",
        "population" : 1091674
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1038,
        "countrycode" : "IND",
        "name" : "Bhopal",
        "population" : 1062771
      },
      {
        "district" : "Punjab",
        "id" : 1039,
        "countrycode" : "IND",
        "name" : "Ludhiana",
        "population" : 1042740
      },
      {
        "district" : "Gujarat",
        "id" : 1040,
        "countrycode" : "IND",
        "name" : "Vadodara (Baroda)",
        "population" : 1031346
      },
      {
        "district" : "Maharashtra",
        "id" : 1041,
        "countrycode" : "IND",
        "name" : "Kalyan",
        "population" : 1014557
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1042,
        "countrycode" : "IND",
        "name" : "Madurai",
        "population" : 977856
      },
      {
        "district" : "West Bengali",
        "id" : 1043,
        "countrycode" : "IND",
        "name" : "Haora (Howrah)",
        "population" : 950435
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1044,
        "countrycode" : "IND",
        "name" : "Varanasi (Benares)",
        "population" : 929270
      },
      {
        "district" : "Bihar",
        "id" : 1045,
        "countrycode" : "IND",
        "name" : "Patna",
        "population" : 917243
      },
      {
        "district" : "Jammu and Kashmir",
        "id" : 1046,
        "countrycode" : "IND",
        "name" : "Srinagar",
        "population" : 892506
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1047,
        "countrycode" : "IND",
        "name" : "Agra",
        "population" : 891790
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1048,
        "countrycode" : "IND",
        "name" : "Coimbatore",
        "population" : 816321
      },
      {
        "district" : "Maharashtra",
        "id" : 1049,
        "countrycode" : "IND",
        "name" : "Thane (Thana)",
        "population" : 803389
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1050,
        "countrycode" : "IND",
        "name" : "Allahabad",
        "population" : 792858
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1051,
        "countrycode" : "IND",
        "name" : "Meerut",
        "population" : 753778
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1052,
        "countrycode" : "IND",
        "name" : "Vishakhapatnam",
        "population" : 752037
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1053,
        "countrycode" : "IND",
        "name" : "Jabalpur",
        "population" : 741927
      },
      {
        "district" : "Punjab",
        "id" : 1054,
        "countrycode" : "IND",
        "name" : "Amritsar",
        "population" : 708835
      },
      {
        "district" : "Haryana",
        "id" : 1055,
        "countrycode" : "IND",
        "name" : "Faridabad",
        "population" : 703592
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1056,
        "countrycode" : "IND",
        "name" : "Vijayawada",
        "population" : 701827
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1057,
        "countrycode" : "IND",
        "name" : "Gwalior",
        "population" : 690765
      },
      {
        "district" : "Rajasthan",
        "id" : 1058,
        "countrycode" : "IND",
        "name" : "Jodhpur",
        "population" : 666279
      },
      {
        "district" : "Maharashtra",
        "id" : 1059,
        "countrycode" : "IND",
        "name" : "Nashik (Nasik)",
        "population" : 656925
      },
      {
        "district" : "Karnataka",
        "id" : 1060,
        "countrycode" : "IND",
        "name" : "Hubli-Dharwad",
        "population" : 648298
      },
      {
        "district" : "Maharashtra",
        "id" : 1061,
        "countrycode" : "IND",
        "name" : "Solapur (Sholapur)",
        "population" : 604215
      },
      {
        "district" : "Jharkhand",
        "id" : 1062,
        "countrycode" : "IND",
        "name" : "Ranchi",
        "population" : 599306
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1063,
        "countrycode" : "IND",
        "name" : "Bareilly",
        "population" : 587211
      },
      {
        "district" : "Assam",
        "id" : 1064,
        "countrycode" : "IND",
        "name" : "Guwahati (Gauhati)",
        "population" : 584342
      },
      {
        "district" : "Maharashtra",
        "id" : 1065,
        "countrycode" : "IND",
        "name" : "Shambajinagar (Aurangabad)",
        "population" : 573272
      },
      {
        "district" : "Kerala",
        "id" : 1066,
        "countrycode" : "IND",
        "name" : "Cochin (Kochi)",
        "population" : 564589
      },
      {
        "district" : "Gujarat",
        "id" : 1067,
        "countrycode" : "IND",
        "name" : "Rajkot",
        "population" : 559407
      },
      {
        "district" : "Rajasthan",
        "id" : 1068,
        "countrycode" : "IND",
        "name" : "Kota",
        "population" : 537371
      },
      {
        "district" : "Kerala",
        "id" : 1069,
        "countrycode" : "IND",
        "name" : "Thiruvananthapuram (Trivandrum",
        "population" : 524006
      },
      {
        "district" : "Maharashtra",
        "id" : 1070,
        "countrycode" : "IND",
        "name" : "Pimpri-Chinchwad",
        "population" : 517083
      },
      {
        "district" : "Punjab",
        "id" : 1071,
        "countrycode" : "IND",
        "name" : "Jalandhar (Jullundur)",
        "population" : 509510
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1072,
        "countrycode" : "IND",
        "name" : "Gorakhpur",
        "population" : 505566
      },
      {
        "district" : "Chandigarh",
        "id" : 1073,
        "countrycode" : "IND",
        "name" : "Chandigarh",
        "population" : 504094
      },
      {
        "district" : "Karnataka",
        "id" : 1074,
        "countrycode" : "IND",
        "name" : "Mysore",
        "population" : 480692
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1075,
        "countrycode" : "IND",
        "name" : "Aligarh",
        "population" : 480520
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1076,
        "countrycode" : "IND",
        "name" : "Guntur",
        "population" : 471051
      },
      {
        "district" : "Jharkhand",
        "id" : 1077,
        "countrycode" : "IND",
        "name" : "Jamshedpur",
        "population" : 460577
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1078,
        "countrycode" : "IND",
        "name" : "Ghaziabad",
        "population" : 454156
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1079,
        "countrycode" : "IND",
        "name" : "Warangal",
        "population" : 447657
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1080,
        "countrycode" : "IND",
        "name" : "Raipur",
        "population" : 438639
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1081,
        "countrycode" : "IND",
        "name" : "Moradabad",
        "population" : 429214
      },
      {
        "district" : "West Bengali",
        "id" : 1082,
        "countrycode" : "IND",
        "name" : "Durgapur",
        "population" : 425836
      },
      {
        "district" : "Maharashtra",
        "id" : 1083,
        "countrycode" : "IND",
        "name" : "Amravati",
        "population" : 421576
      },
      {
        "district" : "Kerala",
        "id" : 1084,
        "countrycode" : "IND",
        "name" : "Calicut (Kozhikode)",
        "population" : 419831
      },
      {
        "district" : "Rajasthan",
        "id" : 1085,
        "countrycode" : "IND",
        "name" : "Bikaner",
        "population" : 416289
      },
      {
        "district" : "Orissa",
        "id" : 1086,
        "countrycode" : "IND",
        "name" : "Bhubaneswar",
        "population" : 411542
      },
      {
        "district" : "Maharashtra",
        "id" : 1087,
        "countrycode" : "IND",
        "name" : "Kolhapur",
        "population" : 406370
      },
      {
        "district" : "Orissa",
        "id" : 1088,
        "countrycode" : "IND",
        "name" : "Kataka (Cuttack)",
        "population" : 403418
      },
      {
        "district" : "Rajasthan",
        "id" : 1089,
        "countrycode" : "IND",
        "name" : "Ajmer",
        "population" : 402700
      },
      {
        "district" : "Gujarat",
        "id" : 1090,
        "countrycode" : "IND",
        "name" : "Bhavnagar",
        "population" : 402338
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1091,
        "countrycode" : "IND",
        "name" : "Tiruchirapalli",
        "population" : 387223
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1092,
        "countrycode" : "IND",
        "name" : "Bhilai",
        "population" : 386159
      },
      {
        "district" : "Maharashtra",
        "id" : 1093,
        "countrycode" : "IND",
        "name" : "Bhiwandi",
        "population" : 379070
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1094,
        "countrycode" : "IND",
        "name" : "Saharanpur",
        "population" : 374945
      },
      {
        "district" : "Maharashtra",
        "id" : 1095,
        "countrycode" : "IND",
        "name" : "Ulhasnagar",
        "population" : 369077
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1096,
        "countrycode" : "IND",
        "name" : "Salem",
        "population" : 366712
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1097,
        "countrycode" : "IND",
        "name" : "Ujjain",
        "population" : 362266
      },
      {
        "district" : "Maharashtra",
        "id" : 1098,
        "countrycode" : "IND",
        "name" : "Malegaon",
        "population" : 342595
      },
      {
        "district" : "Gujarat",
        "id" : 1099,
        "countrycode" : "IND",
        "name" : "Jamnagar",
        "population" : 341637
      },
      {
        "district" : "Jharkhand",
        "id" : 1100,
        "countrycode" : "IND",
        "name" : "Bokaro Steel City",
        "population" : 333683
      },
      {
        "district" : "Maharashtra",
        "id" : 1101,
        "countrycode" : "IND",
        "name" : "Akola",
        "population" : 328034
      },
      {
        "district" : "Karnataka",
        "id" : 1102,
        "countrycode" : "IND",
        "name" : "Belgaum",
        "population" : 326399
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1103,
        "countrycode" : "IND",
        "name" : "Rajahmundry",
        "population" : 324851
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1104,
        "countrycode" : "IND",
        "name" : "Nellore",
        "population" : 316606
      },
      {
        "district" : "Rajasthan",
        "id" : 1105,
        "countrycode" : "IND",
        "name" : "Udaipur",
        "population" : 308571
      },
      {
        "district" : "Maharashtra",
        "id" : 1106,
        "countrycode" : "IND",
        "name" : "New Bombay",
        "population" : 307297
      },
      {
        "district" : "West Bengali",
        "id" : 1107,
        "countrycode" : "IND",
        "name" : "Bhatpara",
        "population" : 304952
      },
      {
        "district" : "Karnataka",
        "id" : 1108,
        "countrycode" : "IND",
        "name" : "Gulbarga",
        "population" : 304099
      },
      {
        "district" : "Delhi",
        "id" : 1109,
        "countrycode" : "IND",
        "name" : "New Delhi",
        "population" : 301297
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1110,
        "countrycode" : "IND",
        "name" : "Jhansi",
        "population" : 300850
      },
      {
        "district" : "Bihar",
        "id" : 1111,
        "countrycode" : "IND",
        "name" : "Gaya",
        "population" : 291675
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1112,
        "countrycode" : "IND",
        "name" : "Kakinada",
        "population" : 279980
      },
      {
        "district" : "Maharashtra",
        "id" : 1113,
        "countrycode" : "IND",
        "name" : "Dhule (Dhulia)",
        "population" : 278317
      },
      {
        "district" : "West Bengali",
        "id" : 1114,
        "countrycode" : "IND",
        "name" : "Panihati",
        "population" : 275990
      },
      {
        "district" : "Maharashtra",
        "id" : 1115,
        "countrycode" : "IND",
        "name" : "Nanded (Nander)",
        "population" : 275083
      },
      {
        "district" : "Karnataka",
        "id" : 1116,
        "countrycode" : "IND",
        "name" : "Mangalore",
        "population" : 273304
      },
      {
        "district" : "Uttaranchal",
        "id" : 1117,
        "countrycode" : "IND",
        "name" : "Dehra Dun",
        "population" : 270159
      },
      {
        "district" : "West Bengali",
        "id" : 1118,
        "countrycode" : "IND",
        "name" : "Kamarhati",
        "population" : 266889
      },
      {
        "district" : "Karnataka",
        "id" : 1119,
        "countrycode" : "IND",
        "name" : "Davangere",
        "population" : 266082
      },
      {
        "district" : "West Bengali",
        "id" : 1120,
        "countrycode" : "IND",
        "name" : "Asansol",
        "population" : 262188
      },
      {
        "district" : "Bihar",
        "id" : 1121,
        "countrycode" : "IND",
        "name" : "Bhagalpur",
        "population" : 253225
      },
      {
        "district" : "Karnataka",
        "id" : 1122,
        "countrycode" : "IND",
        "name" : "Bellary",
        "population" : 245391
      },
      {
        "district" : "West Bengali",
        "id" : 1123,
        "countrycode" : "IND",
        "name" : "Barddhaman (Burdwan)",
        "population" : 245079
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1124,
        "countrycode" : "IND",
        "name" : "Rampur",
        "population" : 243742
      },
      {
        "district" : "Maharashtra",
        "id" : 1125,
        "countrycode" : "IND",
        "name" : "Jalgaon",
        "population" : 242193
      },
      {
        "district" : "Bihar",
        "id" : 1126,
        "countrycode" : "IND",
        "name" : "Muzaffarpur",
        "population" : 241107
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1127,
        "countrycode" : "IND",
        "name" : "Nizamabad",
        "population" : 241034
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1128,
        "countrycode" : "IND",
        "name" : "Muzaffarnagar",
        "population" : 240609
      },
      {
        "district" : "Punjab",
        "id" : 1129,
        "countrycode" : "IND",
        "name" : "Patiala",
        "population" : 238368
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1130,
        "countrycode" : "IND",
        "name" : "Shahjahanpur",
        "population" : 237713
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1131,
        "countrycode" : "IND",
        "name" : "Kurnool",
        "population" : 236800
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1132,
        "countrycode" : "IND",
        "name" : "Tiruppur (Tirupper)",
        "population" : 235661
      },
      {
        "district" : "Haryana",
        "id" : 1133,
        "countrycode" : "IND",
        "name" : "Rohtak",
        "population" : 233400
      },
      {
        "district" : "West Bengali",
        "id" : 1134,
        "countrycode" : "IND",
        "name" : "South Dum Dum",
        "population" : 232811
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1135,
        "countrycode" : "IND",
        "name" : "Mathura",
        "population" : 226691
      },
      {
        "district" : "Maharashtra",
        "id" : 1136,
        "countrycode" : "IND",
        "name" : "Chandrapur",
        "population" : 226105
      },
      {
        "district" : "West Bengali",
        "id" : 1137,
        "countrycode" : "IND",
        "name" : "Barahanagar (Baranagar)",
        "population" : 224821
      },
      {
        "district" : "Bihar",
        "id" : 1138,
        "countrycode" : "IND",
        "name" : "Darbhanga",
        "population" : 218391
      },
      {
        "district" : "West Bengali",
        "id" : 1139,
        "countrycode" : "IND",
        "name" : "Siliguri (Shiliguri)",
        "population" : 216950
      },
      {
        "district" : "Orissa",
        "id" : 1140,
        "countrycode" : "IND",
        "name" : "Raurkela",
        "population" : 215489
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1141,
        "countrycode" : "IND",
        "name" : "Ambattur",
        "population" : 215424
      },
      {
        "district" : "Haryana",
        "id" : 1142,
        "countrycode" : "IND",
        "name" : "Panipat",
        "population" : 215218
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1143,
        "countrycode" : "IND",
        "name" : "Firozabad",
        "population" : 215128
      },
      {
        "district" : "Maharashtra",
        "id" : 1144,
        "countrycode" : "IND",
        "name" : "Ichalkaranji",
        "population" : 214950
      },
      {
        "district" : "Jammu and Kashmir",
        "id" : 1145,
        "countrycode" : "IND",
        "name" : "Jammu",
        "population" : 214737
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1146,
        "countrycode" : "IND",
        "name" : "Ramagundam",
        "population" : 214384
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1147,
        "countrycode" : "IND",
        "name" : "Eluru",
        "population" : 212866
      },
      {
        "district" : "Orissa",
        "id" : 1148,
        "countrycode" : "IND",
        "name" : "Brahmapur",
        "population" : 210418
      },
      {
        "district" : "Rajasthan",
        "id" : 1149,
        "countrycode" : "IND",
        "name" : "Alwar",
        "population" : 205086
      },
      {
        "district" : "Pondicherry",
        "id" : 1150,
        "countrycode" : "IND",
        "name" : "Pondicherry",
        "population" : 203065
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1151,
        "countrycode" : "IND",
        "name" : "Thanjavur",
        "population" : 202013
      },
      {
        "district" : "Bihar",
        "id" : 1152,
        "countrycode" : "IND",
        "name" : "Bihar Sharif",
        "population" : 201323
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1153,
        "countrycode" : "IND",
        "name" : "Tuticorin",
        "population" : 199854
      },
      {
        "district" : "Manipur",
        "id" : 1154,
        "countrycode" : "IND",
        "name" : "Imphal",
        "population" : 198535
      },
      {
        "district" : "Maharashtra",
        "id" : 1155,
        "countrycode" : "IND",
        "name" : "Latur",
        "population" : 197408
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1156,
        "countrycode" : "IND",
        "name" : "Sagar",
        "population" : 195346
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1157,
        "countrycode" : "IND",
        "name" : "Farrukhabad-cum-Fatehgarh",
        "population" : 194567
      },
      {
        "district" : "Maharashtra",
        "id" : 1158,
        "countrycode" : "IND",
        "name" : "Sangli",
        "population" : 193197
      },
      {
        "district" : "Maharashtra",
        "id" : 1159,
        "countrycode" : "IND",
        "name" : "Parbhani",
        "population" : 190255
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1160,
        "countrycode" : "IND",
        "name" : "Nagar Coil",
        "population" : 190084
      },
      {
        "district" : "Karnataka",
        "id" : 1161,
        "countrycode" : "IND",
        "name" : "Bijapur",
        "population" : 186939
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1162,
        "countrycode" : "IND",
        "name" : "Kukatpalle",
        "population" : 185378
      },
      {
        "district" : "West Bengali",
        "id" : 1163,
        "countrycode" : "IND",
        "name" : "Bally",
        "population" : 184474
      },
      {
        "district" : "Rajasthan",
        "id" : 1164,
        "countrycode" : "IND",
        "name" : "Bhilwara",
        "population" : 183965
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1165,
        "countrycode" : "IND",
        "name" : "Ratlam",
        "population" : 183375
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1166,
        "countrycode" : "IND",
        "name" : "Avadi",
        "population" : 183215
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1167,
        "countrycode" : "IND",
        "name" : "Dindigul",
        "population" : 182477
      },
      {
        "district" : "Maharashtra",
        "id" : 1168,
        "countrycode" : "IND",
        "name" : "Ahmadnagar",
        "population" : 181339
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1169,
        "countrycode" : "IND",
        "name" : "Bilaspur",
        "population" : 179833
      },
      {
        "district" : "Karnataka",
        "id" : 1170,
        "countrycode" : "IND",
        "name" : "Shimoga",
        "population" : 179258
      },
      {
        "district" : "West Bengali",
        "id" : 1171,
        "countrycode" : "IND",
        "name" : "Kharagpur",
        "population" : 177989
      },
      {
        "district" : "Maharashtra",
        "id" : 1172,
        "countrycode" : "IND",
        "name" : "Mira Bhayandar",
        "population" : 175372
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1173,
        "countrycode" : "IND",
        "name" : "Vellore",
        "population" : 175061
      },
      {
        "district" : "Maharashtra",
        "id" : 1174,
        "countrycode" : "IND",
        "name" : "Jalna",
        "population" : 174985
      },
      {
        "district" : "West Bengali",
        "id" : 1175,
        "countrycode" : "IND",
        "name" : "Burnpur",
        "population" : 174933
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1176,
        "countrycode" : "IND",
        "name" : "Anantapur",
        "population" : 174924
      },
      {
        "district" : "Kerala",
        "id" : 1177,
        "countrycode" : "IND",
        "name" : "Allappuzha (Alleppey)",
        "population" : 174666
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1178,
        "countrycode" : "IND",
        "name" : "Tirupati",
        "population" : 174369
      },
      {
        "district" : "Haryana",
        "id" : 1179,
        "countrycode" : "IND",
        "name" : "Karnal",
        "population" : 173751
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1180,
        "countrycode" : "IND",
        "name" : "Burhanpur",
        "population" : 172710
      },
      {
        "district" : "Haryana",
        "id" : 1181,
        "countrycode" : "IND",
        "name" : "Hisar (Hissar)",
        "population" : 172677
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1182,
        "countrycode" : "IND",
        "name" : "Tiruvottiyur",
        "population" : 172562
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1183,
        "countrycode" : "IND",
        "name" : "Mirzapur-cum-Vindhyachal",
        "population" : 169336
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1184,
        "countrycode" : "IND",
        "name" : "Secunderabad",
        "population" : 167461
      },
      {
        "district" : "Gujarat",
        "id" : 1185,
        "countrycode" : "IND",
        "name" : "Nadiad",
        "population" : 167051
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1186,
        "countrycode" : "IND",
        "name" : "Dewas",
        "population" : 164364
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1187,
        "countrycode" : "IND",
        "name" : "Murwara (Katni)",
        "population" : 163431
      },
      {
        "district" : "Rajasthan",
        "id" : 1188,
        "countrycode" : "IND",
        "name" : "Ganganagar",
        "population" : 161482
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1189,
        "countrycode" : "IND",
        "name" : "Vizianagaram",
        "population" : 160359
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1190,
        "countrycode" : "IND",
        "name" : "Erode",
        "population" : 159232
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1191,
        "countrycode" : "IND",
        "name" : "Machilipatnam (Masulipatam)",
        "population" : 159110
      },
      {
        "district" : "Punjab",
        "id" : 1192,
        "countrycode" : "IND",
        "name" : "Bhatinda (Bathinda)",
        "population" : 159042
      },
      {
        "district" : "Karnataka",
        "id" : 1193,
        "countrycode" : "IND",
        "name" : "Raichur",
        "population" : 157551
      },
      {
        "district" : "Tripura",
        "id" : 1194,
        "countrycode" : "IND",
        "name" : "Agartala",
        "population" : 157358
      },
      {
        "district" : "Bihar",
        "id" : 1195,
        "countrycode" : "IND",
        "name" : "Arrah (Ara)",
        "population" : 157082
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1196,
        "countrycode" : "IND",
        "name" : "Satna",
        "population" : 156630
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1197,
        "countrycode" : "IND",
        "name" : "Lalbahadur Nagar",
        "population" : 155500
      },
      {
        "district" : "Mizoram",
        "id" : 1198,
        "countrycode" : "IND",
        "name" : "Aizawl",
        "population" : 155240
      },
      {
        "district" : "West Bengali",
        "id" : 1199,
        "countrycode" : "IND",
        "name" : "Uluberia",
        "population" : 155172
      },
      {
        "district" : "Bihar",
        "id" : 1200,
        "countrycode" : "IND",
        "name" : "Katihar",
        "population" : 154367
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1201,
        "countrycode" : "IND",
        "name" : "Cuddalore",
        "population" : 153086
      },
      {
        "district" : "West Bengali",
        "id" : 1202,
        "countrycode" : "IND",
        "name" : "Hugli-Chinsurah",
        "population" : 151806
      },
      {
        "district" : "Jharkhand",
        "id" : 1203,
        "countrycode" : "IND",
        "name" : "Dhanbad",
        "population" : 151789
      },
      {
        "district" : "West Bengali",
        "id" : 1204,
        "countrycode" : "IND",
        "name" : "Raiganj",
        "population" : 151045
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1205,
        "countrycode" : "IND",
        "name" : "Sambhal",
        "population" : 150869
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1206,
        "countrycode" : "IND",
        "name" : "Durg",
        "population" : 150645
      },
      {
        "district" : "Bihar",
        "id" : 1207,
        "countrycode" : "IND",
        "name" : "Munger (Monghyr)",
        "population" : 150112
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1208,
        "countrycode" : "IND",
        "name" : "Kanchipuram",
        "population" : 150100
      },
      {
        "district" : "West Bengali",
        "id" : 1209,
        "countrycode" : "IND",
        "name" : "North Dum Dum",
        "population" : 149965
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1210,
        "countrycode" : "IND",
        "name" : "Karimnagar",
        "population" : 148583
      },
      {
        "district" : "Rajasthan",
        "id" : 1211,
        "countrycode" : "IND",
        "name" : "Bharatpur",
        "population" : 148519
      },
      {
        "district" : "Rajasthan",
        "id" : 1212,
        "countrycode" : "IND",
        "name" : "Sikar",
        "population" : 148272
      },
      {
        "district" : "Uttaranchal",
        "id" : 1213,
        "countrycode" : "IND",
        "name" : "Hardwar (Haridwar)",
        "population" : 147305
      },
      {
        "district" : "West Bengali",
        "id" : 1214,
        "countrycode" : "IND",
        "name" : "Dabgram",
        "population" : 147217
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1215,
        "countrycode" : "IND",
        "name" : "Morena",
        "population" : 147124
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1216,
        "countrycode" : "IND",
        "name" : "Noida",
        "population" : 146514
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1217,
        "countrycode" : "IND",
        "name" : "Hapur",
        "population" : 146262
      },
      {
        "district" : "Maharashtra",
        "id" : 1218,
        "countrycode" : "IND",
        "name" : "Bhusawal",
        "population" : 145143
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1219,
        "countrycode" : "IND",
        "name" : "Khandwa",
        "population" : 145133
      },
      {
        "district" : "Haryana",
        "id" : 1220,
        "countrycode" : "IND",
        "name" : "Yamuna Nagar",
        "population" : 144346
      },
      {
        "district" : "Haryana",
        "id" : 1221,
        "countrycode" : "IND",
        "name" : "Sonipat (Sonepat)",
        "population" : 143922
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1222,
        "countrycode" : "IND",
        "name" : "Tenali",
        "population" : 143726
      },
      {
        "district" : "Orissa",
        "id" : 1223,
        "countrycode" : "IND",
        "name" : "Raurkela Civil Township",
        "population" : 140408
      },
      {
        "district" : "Kerala",
        "id" : 1224,
        "countrycode" : "IND",
        "name" : "Kollam (Quilon)",
        "population" : 139852
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1225,
        "countrycode" : "IND",
        "name" : "Kumbakonam",
        "population" : 139483
      },
      {
        "district" : "West Bengali",
        "id" : 1226,
        "countrycode" : "IND",
        "name" : "Ingraj Bazar (English Bazar)",
        "population" : 139204
      },
      {
        "district" : "Karnataka",
        "id" : 1227,
        "countrycode" : "IND",
        "name" : "Timkur",
        "population" : 138903
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1228,
        "countrycode" : "IND",
        "name" : "Amroha",
        "population" : 137061
      },
      {
        "district" : "West Bengali",
        "id" : 1229,
        "countrycode" : "IND",
        "name" : "Serampore",
        "population" : 137028
      },
      {
        "district" : "Bihar",
        "id" : 1230,
        "countrycode" : "IND",
        "name" : "Chapra",
        "population" : 136877
      },
      {
        "district" : "Rajasthan",
        "id" : 1231,
        "countrycode" : "IND",
        "name" : "Pali",
        "population" : 136842
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1232,
        "countrycode" : "IND",
        "name" : "Maunath Bhanjan",
        "population" : 136697
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1233,
        "countrycode" : "IND",
        "name" : "Adoni",
        "population" : 136182
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1234,
        "countrycode" : "IND",
        "name" : "Jaunpur",
        "population" : 136062
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1235,
        "countrycode" : "IND",
        "name" : "Tirunelveli",
        "population" : 135825
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1236,
        "countrycode" : "IND",
        "name" : "Bahraich",
        "population" : 135400
      },
      {
        "district" : "Karnataka",
        "id" : 1237,
        "countrycode" : "IND",
        "name" : "Gadag Betigeri",
        "population" : 134051
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1238,
        "countrycode" : "IND",
        "name" : "Proddatur",
        "population" : 133914
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1239,
        "countrycode" : "IND",
        "name" : "Chittoor",
        "population" : 133462
      },
      {
        "district" : "West Bengali",
        "id" : 1240,
        "countrycode" : "IND",
        "name" : "Barrackpur",
        "population" : 133265
      },
      {
        "district" : "Gujarat",
        "id" : 1241,
        "countrycode" : "IND",
        "name" : "Bharuch (Broach)",
        "population" : 133102
      },
      {
        "district" : "West Bengali",
        "id" : 1242,
        "countrycode" : "IND",
        "name" : "Naihati",
        "population" : 132701
      },
      {
        "district" : "Meghalaya",
        "id" : 1243,
        "countrycode" : "IND",
        "name" : "Shillong",
        "population" : 131719
      },
      {
        "district" : "Orissa",
        "id" : 1244,
        "countrycode" : "IND",
        "name" : "Sambalpur",
        "population" : 131138
      },
      {
        "district" : "Gujarat",
        "id" : 1245,
        "countrycode" : "IND",
        "name" : "Junagadh",
        "population" : 130484
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1246,
        "countrycode" : "IND",
        "name" : "Rae Bareli",
        "population" : 129904
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1247,
        "countrycode" : "IND",
        "name" : "Rewa",
        "population" : 128981
      },
      {
        "district" : "Haryana",
        "id" : 1248,
        "countrycode" : "IND",
        "name" : "Gurgaon",
        "population" : 128608
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1249,
        "countrycode" : "IND",
        "name" : "Khammam",
        "population" : 127992
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1250,
        "countrycode" : "IND",
        "name" : "Bulandshahr",
        "population" : 127201
      },
      {
        "district" : "Gujarat",
        "id" : 1251,
        "countrycode" : "IND",
        "name" : "Navsari",
        "population" : 126089
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1252,
        "countrycode" : "IND",
        "name" : "Malkajgiri",
        "population" : 126066
      },
      {
        "district" : "West Bengali",
        "id" : 1253,
        "countrycode" : "IND",
        "name" : "Midnapore (Medinipur)",
        "population" : 125498
      },
      {
        "district" : "Maharashtra",
        "id" : 1254,
        "countrycode" : "IND",
        "name" : "Miraj",
        "population" : 125407
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1255,
        "countrycode" : "IND",
        "name" : "Raj Nandgaon",
        "population" : 125371
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1256,
        "countrycode" : "IND",
        "name" : "Alandur",
        "population" : 125244
      },
      {
        "district" : "Orissa",
        "id" : 1257,
        "countrycode" : "IND",
        "name" : "Puri",
        "population" : 125199
      },
      {
        "district" : "West Bengali",
        "id" : 1258,
        "countrycode" : "IND",
        "name" : "Navadwip",
        "population" : 125037
      },
      {
        "district" : "Haryana",
        "id" : 1259,
        "countrycode" : "IND",
        "name" : "Sirsa",
        "population" : 125000
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1260,
        "countrycode" : "IND",
        "name" : "Korba",
        "population" : 124501
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1261,
        "countrycode" : "IND",
        "name" : "Faizabad",
        "population" : 124437
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1262,
        "countrycode" : "IND",
        "name" : "Etawah",
        "population" : 124072
      },
      {
        "district" : "Punjab",
        "id" : 1263,
        "countrycode" : "IND",
        "name" : "Pathankot",
        "population" : 123930
      },
      {
        "district" : "Gujarat",
        "id" : 1264,
        "countrycode" : "IND",
        "name" : "Gandhinagar",
        "population" : 123359
      },
      {
        "district" : "Kerala",
        "id" : 1265,
        "countrycode" : "IND",
        "name" : "Palghat (Palakkad)",
        "population" : 123289
      },
      {
        "district" : "Gujarat",
        "id" : 1266,
        "countrycode" : "IND",
        "name" : "Veraval",
        "population" : 123000
      },
      {
        "district" : "Punjab",
        "id" : 1267,
        "countrycode" : "IND",
        "name" : "Hoshiarpur",
        "population" : 122705
      },
      {
        "district" : "Haryana",
        "id" : 1268,
        "countrycode" : "IND",
        "name" : "Ambala",
        "population" : 122596
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1269,
        "countrycode" : "IND",
        "name" : "Sitapur",
        "population" : 121842
      },
      {
        "district" : "Haryana",
        "id" : 1270,
        "countrycode" : "IND",
        "name" : "Bhiwani",
        "population" : 121629
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1271,
        "countrycode" : "IND",
        "name" : "Cuddapah",
        "population" : 121463
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1272,
        "countrycode" : "IND",
        "name" : "Bhimavaram",
        "population" : 121314
      },
      {
        "district" : "West Bengali",
        "id" : 1273,
        "countrycode" : "IND",
        "name" : "Krishnanagar",
        "population" : 121110
      },
      {
        "district" : "West Bengali",
        "id" : 1274,
        "countrycode" : "IND",
        "name" : "Chandannagar",
        "population" : 120378
      },
      {
        "district" : "Karnataka",
        "id" : 1275,
        "countrycode" : "IND",
        "name" : "Mandya",
        "population" : 120265
      },
      {
        "district" : "Assam",
        "id" : 1276,
        "countrycode" : "IND",
        "name" : "Dibrugarh",
        "population" : 120127
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1277,
        "countrycode" : "IND",
        "name" : "Nandyal",
        "population" : 119813
      },
      {
        "district" : "West Bengali",
        "id" : 1278,
        "countrycode" : "IND",
        "name" : "Balurghat",
        "population" : 119796
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1279,
        "countrycode" : "IND",
        "name" : "Neyveli",
        "population" : 118080
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1280,
        "countrycode" : "IND",
        "name" : "Fatehpur",
        "population" : 117675
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1281,
        "countrycode" : "IND",
        "name" : "Mahbubnagar",
        "population" : 116833
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1282,
        "countrycode" : "IND",
        "name" : "Budaun",
        "population" : 116695
      },
      {
        "district" : "Gujarat",
        "id" : 1283,
        "countrycode" : "IND",
        "name" : "Porbandar",
        "population" : 116671
      },
      {
        "district" : "Assam",
        "id" : 1284,
        "countrycode" : "IND",
        "name" : "Silchar",
        "population" : 115483
      },
      {
        "district" : "West Bengali",
        "id" : 1285,
        "countrycode" : "IND",
        "name" : "Berhampore (Baharampur)",
        "population" : 115144
      },
      {
        "district" : "Jharkhand",
        "id" : 1286,
        "countrycode" : "IND",
        "name" : "Purnea (Purnia)",
        "population" : 114912
      },
      {
        "district" : "West Bengali",
        "id" : 1287,
        "countrycode" : "IND",
        "name" : "Bankura",
        "population" : 114876
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1288,
        "countrycode" : "IND",
        "name" : "Rajapalaiyam",
        "population" : 114202
      },
      {
        "district" : "West Bengali",
        "id" : 1289,
        "countrycode" : "IND",
        "name" : "Titagarh",
        "population" : 114085
      },
      {
        "district" : "West Bengali",
        "id" : 1290,
        "countrycode" : "IND",
        "name" : "Halisahar",
        "population" : 114028
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1291,
        "countrycode" : "IND",
        "name" : "Hathras",
        "population" : 113285
      },
      {
        "district" : "Maharashtra",
        "id" : 1292,
        "countrycode" : "IND",
        "name" : "Bhir (Bid)",
        "population" : 112434
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1293,
        "countrycode" : "IND",
        "name" : "Pallavaram",
        "population" : 111866
      },
      {
        "district" : "Gujarat",
        "id" : 1294,
        "countrycode" : "IND",
        "name" : "Anand",
        "population" : 110266
      },
      {
        "district" : "Jharkhand",
        "id" : 1295,
        "countrycode" : "IND",
        "name" : "Mango",
        "population" : 110024
      },
      {
        "district" : "West Bengali",
        "id" : 1296,
        "countrycode" : "IND",
        "name" : "Santipur",
        "population" : 109956
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1297,
        "countrycode" : "IND",
        "name" : "Bhind",
        "population" : 109755
      },
      {
        "district" : "Maharashtra",
        "id" : 1298,
        "countrycode" : "IND",
        "name" : "Gondiya",
        "population" : 109470
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1299,
        "countrycode" : "IND",
        "name" : "Tiruvannamalai",
        "population" : 109196
      },
      {
        "district" : "Maharashtra",
        "id" : 1300,
        "countrycode" : "IND",
        "name" : "Yeotmal (Yavatmal)",
        "population" : 108578
      },
      {
        "district" : "West Bengali",
        "id" : 1301,
        "countrycode" : "IND",
        "name" : "Kulti-Barakar",
        "population" : 108518
      },
      {
        "district" : "Punjab",
        "id" : 1302,
        "countrycode" : "IND",
        "name" : "Moga",
        "population" : 108304
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1303,
        "countrycode" : "IND",
        "name" : "Shivapuri",
        "population" : 108277
      },
      {
        "district" : "Karnataka",
        "id" : 1304,
        "countrycode" : "IND",
        "name" : "Bidar",
        "population" : 108016
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1305,
        "countrycode" : "IND",
        "name" : "Guntakal",
        "population" : 107592
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1306,
        "countrycode" : "IND",
        "name" : "Unnao",
        "population" : 107425
      },
      {
        "district" : "West Bengali",
        "id" : 1307,
        "countrycode" : "IND",
        "name" : "Barasat",
        "population" : 107365
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1308,
        "countrycode" : "IND",
        "name" : "Tambaram",
        "population" : 107187
      },
      {
        "district" : "Punjab",
        "id" : 1309,
        "countrycode" : "IND",
        "name" : "Abohar",
        "population" : 107163
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1310,
        "countrycode" : "IND",
        "name" : "Pilibhit",
        "population" : 106605
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1311,
        "countrycode" : "IND",
        "name" : "Valparai",
        "population" : 106523
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1312,
        "countrycode" : "IND",
        "name" : "Gonda",
        "population" : 106078
      },
      {
        "district" : "Gujarat",
        "id" : 1313,
        "countrycode" : "IND",
        "name" : "Surendranagar",
        "population" : 105973
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1314,
        "countrycode" : "IND",
        "name" : "Qutubullapur",
        "population" : 105380
      },
      {
        "district" : "Rajasthan",
        "id" : 1315,
        "countrycode" : "IND",
        "name" : "Beawar",
        "population" : 105363
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1316,
        "countrycode" : "IND",
        "name" : "Hindupur",
        "population" : 104651
      },
      {
        "district" : "Gujarat",
        "id" : 1317,
        "countrycode" : "IND",
        "name" : "Gandhidham",
        "population" : 104585
      },
      {
        "district" : "Uttaranchal",
        "id" : 1318,
        "countrycode" : "IND",
        "name" : "Haldwani-cum-Kathgodam",
        "population" : 104195
      },
      {
        "district" : "Kerala",
        "id" : 1319,
        "countrycode" : "IND",
        "name" : "Tellicherry (Thalassery)",
        "population" : 103579
      },
      {
        "district" : "Maharashtra",
        "id" : 1320,
        "countrycode" : "IND",
        "name" : "Wardha",
        "population" : 102985
      },
      {
        "district" : "West Bengali",
        "id" : 1321,
        "countrycode" : "IND",
        "name" : "Rishra",
        "population" : 102649
      },
      {
        "district" : "Gujarat",
        "id" : 1322,
        "countrycode" : "IND",
        "name" : "Bhuj",
        "population" : 102176
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1323,
        "countrycode" : "IND",
        "name" : "Modinagar",
        "population" : 101660
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1324,
        "countrycode" : "IND",
        "name" : "Gudivada",
        "population" : 101656
      },
      {
        "district" : "West Bengali",
        "id" : 1325,
        "countrycode" : "IND",
        "name" : "Basirhat",
        "population" : 101409
      },
      {
        "district" : "West Bengali",
        "id" : 1326,
        "countrycode" : "IND",
        "name" : "Uttarpara-Kotrung",
        "population" : 100867
      },
      {
        "district" : "Andhra Pradesh",
        "id" : 1327,
        "countrycode" : "IND",
        "name" : "Ongole",
        "population" : 100836
      },
      {
        "district" : "West Bengali",
        "id" : 1328,
        "countrycode" : "IND",
        "name" : "North Barrackpur",
        "population" : 100513
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1329,
        "countrycode" : "IND",
        "name" : "Guna",
        "population" : 100490
      },
      {
        "district" : "West Bengali",
        "id" : 1330,
        "countrycode" : "IND",
        "name" : "Haldia",
        "population" : 100347
      },
      {
        "district" : "West Bengali",
        "id" : 1331,
        "countrycode" : "IND",
        "name" : "Habra",
        "population" : 100223
      },
      {
        "district" : "West Bengali",
        "id" : 1332,
        "countrycode" : "IND",
        "name" : "Kanchrapara",
        "population" : 100194
      },
      {
        "district" : "Rajasthan",
        "id" : 1333,
        "countrycode" : "IND",
        "name" : "Tonk",
        "population" : 100079
      },
      {
        "district" : "West Bengali",
        "id" : 1334,
        "countrycode" : "IND",
        "name" : "Champdani",
        "population" : 98818
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1335,
        "countrycode" : "IND",
        "name" : "Orai",
        "population" : 98640
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1336,
        "countrycode" : "IND",
        "name" : "Pudukkottai",
        "population" : 98619
      },
      {
        "district" : "Bihar",
        "id" : 1337,
        "countrycode" : "IND",
        "name" : "Sasaram",
        "population" : 98220
      },
      {
        "district" : "Jharkhand",
        "id" : 1338,
        "countrycode" : "IND",
        "name" : "Hazaribag",
        "population" : 97712
      },
      {
        "district" : "Tamil Nadu",
        "id" : 1339,
        "countrycode" : "IND",
        "name" : "Palayankottai",
        "population" : 97662
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1340,
        "countrycode" : "IND",
        "name" : "Banda",
        "population" : 97227
      },
      {
        "district" : "Gujarat",
        "id" : 1341,
        "countrycode" : "IND",
        "name" : "Godhra",
        "population" : 96813
      },
      {
        "district" : "Karnataka",
        "id" : 1342,
        "countrycode" : "IND",
        "name" : "Hospet",
        "population" : 96322
      },
      {
        "district" : "West Bengali",
        "id" : 1343,
        "countrycode" : "IND",
        "name" : "Ashoknagar-Kalyangarh",
        "population" : 96315
      },
      {
        "district" : "Maharashtra",
        "id" : 1344,
        "countrycode" : "IND",
        "name" : "Achalpur",
        "population" : 96216
      },
      {
        "district" : "Gujarat",
        "id" : 1345,
        "countrycode" : "IND",
        "name" : "Patan",
        "population" : 96109
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1346,
        "countrycode" : "IND",
        "name" : "Mandasor",
        "population" : 95758
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1347,
        "countrycode" : "IND",
        "name" : "Damoh",
        "population" : 95661
      },
      {
        "district" : "Maharashtra",
        "id" : 1348,
        "countrycode" : "IND",
        "name" : "Satara",
        "population" : 95133
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1349,
        "countrycode" : "IND",
        "name" : "Meerut Cantonment",
        "population" : 94876
      },
      {
        "district" : "Bihar",
        "id" : 1350,
        "countrycode" : "IND",
        "name" : "Dehri",
        "population" : 94526
      },
      {
        "district" : "Delhi",
        "id" : 1351,
        "countrycode" : "IND",
        "name" : "Delhi Cantonment",
        "population" : 94326
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1352,
        "countrycode" : "IND",
        "name" : "Chhindwara",
        "population" : 93731
      },
      {
        "district" : "West Bengali",
        "id" : 1353,
        "countrycode" : "IND",
        "name" : "Bansberia",
        "population" : 93447
      },
      {
        "district" : "Assam",
        "id" : 1354,
        "countrycode" : "IND",
        "name" : "Nagaon",
        "population" : 93350
      },
      {
        "district" : "Uttar Pradesh",
        "id" : 1355,
        "countrycode" : "IND",
        "name" : "Kanpur Cantonment",
        "population" : 93109
      },
      {
        "district" : "Madhya Pradesh",
        "id" : 1356,
        "countrycode" : "IND",
        "name" : "Vidisha",
        "population" : 92917
      },
      {
        "district" : "Bihar",
        "id" : 1357,
        "countrycode" : "IND",
        "name" : "Bettiah",
        "population" : 92583
      },
      {
        "district" : "Jharkhand",
        "id" : 1358,
        "countrycode" : "IND",
        "name" : "Purulia",
        "population" : 92574
      },
      {
        "district" : "Karnataka",
        "id" : 1359,
        "countrycode" : "IND",
        "name" : "Hassan",
        "population" : 90803
      },
      {
        "district" : "Haryana",
        "id" : 1360,
        "countrycode" : "IND",
        "name" : "Ambala Sadar",
        "population" : 90712
      },
      {
        "district" : "West Bengali",
        "id" : 1361,
        "countrycode" : "IND",
        "name" : "Baidyabati",
        "population" : 90601
      },
      {
        "district" : "Gujarat",
        "id" : 1362,
        "countrycode" : "IND",
        "name" : "Morvi",
        "population" : 90357
      },
      {
        "district" : "Chhatisgarh",
        "id" : 1363,
        "countrycode" : "IND",
        "name" : "Raigarh",
        "population" : 89166
      },
      {
        "district" : "Gujarat",
        "id" : 1364,
        "countrycode" : "IND",
        "name" : "Vejalpur",
        "population" : 89053
      },
      {
        "district" : "Baghdad",
        "id" : 1365,
        "countrycode" : "IRQ",
        "name" : "Baghdad",
        "population" : 4336000
      },
      {
        "district" : "Ninawa",
        "id" : 1366,
        "countrycode" : "IRQ",
        "name" : "Mosul",
        "population" : 879000
      },
      {
        "district" : "Irbil",
        "id" : 1367,
        "countrycode" : "IRQ",
        "name" : "Irbil",
        "population" : 485968
      },
      {
        "district" : "al-Tamim",
        "id" : 1368,
        "countrycode" : "IRQ",
        "name" : "Kirkuk",
        "population" : 418624
      },
      {
        "district" : "Basra",
        "id" : 1369,
        "countrycode" : "IRQ",
        "name" : "Basra",
        "population" : 406296
      },
      {
        "district" : "al-Sulaymaniya",
        "id" : 1370,
        "countrycode" : "IRQ",
        "name" : "al-Sulaymaniya",
        "population" : 364096
      },
      {
        "district" : "al-Najaf",
        "id" : 1371,
        "countrycode" : "IRQ",
        "name" : "al-Najaf",
        "population" : 309010
      },
      {
        "district" : "Karbala",
        "id" : 1372,
        "countrycode" : "IRQ",
        "name" : "Karbala",
        "population" : 296705
      },
      {
        "district" : "Babil",
        "id" : 1373,
        "countrycode" : "IRQ",
        "name" : "al-Hilla",
        "population" : 268834
      },
      {
        "district" : "DhiQar",
        "id" : 1374,
        "countrycode" : "IRQ",
        "name" : "al-Nasiriya",
        "population" : 265937
      },
      {
        "district" : "Maysan",
        "id" : 1375,
        "countrycode" : "IRQ",
        "name" : "al-Amara",
        "population" : 208797
      },
      {
        "district" : "al-Qadisiya",
        "id" : 1376,
        "countrycode" : "IRQ",
        "name" : "al-Diwaniya",
        "population" : 196519
      },
      {
        "district" : "al-Anbar",
        "id" : 1377,
        "countrycode" : "IRQ",
        "name" : "al-Ramadi",
        "population" : 192556
      },
      {
        "district" : "Wasit",
        "id" : 1378,
        "countrycode" : "IRQ",
        "name" : "al-Kut",
        "population" : 183183
      },
      {
        "district" : "Diyala",
        "id" : 1379,
        "countrycode" : "IRQ",
        "name" : "Baquba",
        "population" : 114516
      },
      {
        "district" : "Teheran",
        "id" : 1380,
        "countrycode" : "IRN",
        "name" : "Teheran",
        "population" : 6758845
      },
      {
        "district" : "Khorasan",
        "id" : 1381,
        "countrycode" : "IRN",
        "name" : "Mashhad",
        "population" : 1887405
      },
      {
        "district" : "Esfahan",
        "id" : 1382,
        "countrycode" : "IRN",
        "name" : "Esfahan",
        "population" : 1266072
      },
      {
        "district" : "East Azerbaidzan",
        "id" : 1383,
        "countrycode" : "IRN",
        "name" : "Tabriz",
        "population" : 1191043
      },
      {
        "district" : "Fars",
        "id" : 1384,
        "countrycode" : "IRN",
        "name" : "Shiraz",
        "population" : 1053025
      },
      {
        "district" : "Teheran",
        "id" : 1385,
        "countrycode" : "IRN",
        "name" : "Karaj",
        "population" : 940968
      },
      {
        "district" : "Khuzestan",
        "id" : 1386,
        "countrycode" : "IRN",
        "name" : "Ahvaz",
        "population" : 804980
      },
      {
        "district" : "Qom",
        "id" : 1387,
        "countrycode" : "IRN",
        "name" : "Qom",
        "population" : 777677
      },
      {
        "district" : "Kermanshah",
        "id" : 1388,
        "countrycode" : "IRN",
        "name" : "Kermanshah",
        "population" : 692986
      },
      {
        "district" : "West Azerbaidzan",
        "id" : 1389,
        "countrycode" : "IRN",
        "name" : "Urmia",
        "population" : 435200
      },
      {
        "district" : "Sistan va Baluchesta",
        "id" : 1390,
        "countrycode" : "IRN",
        "name" : "Zahedan",
        "population" : 419518
      },
      {
        "district" : "Gilan",
        "id" : 1391,
        "countrycode" : "IRN",
        "name" : "Rasht",
        "population" : 417748
      },
      {
        "district" : "Hamadan",
        "id" : 1392,
        "countrycode" : "IRN",
        "name" : "Hamadan",
        "population" : 401281
      },
      {
        "district" : "Kerman",
        "id" : 1393,
        "countrycode" : "IRN",
        "name" : "Kerman",
        "population" : 384991
      },
      {
        "district" : "Markazi",
        "id" : 1394,
        "countrycode" : "IRN",
        "name" : "Arak",
        "population" : 380755
      },
      {
        "district" : "Ardebil",
        "id" : 1395,
        "countrycode" : "IRN",
        "name" : "Ardebil",
        "population" : 340386
      },
      {
        "district" : "Yazd",
        "id" : 1396,
        "countrycode" : "IRN",
        "name" : "Yazd",
        "population" : 326776
      },
      {
        "district" : "Qazvin",
        "id" : 1397,
        "countrycode" : "IRN",
        "name" : "Qazvin",
        "population" : 291117
      },
      {
        "district" : "Zanjan",
        "id" : 1398,
        "countrycode" : "IRN",
        "name" : "Zanjan",
        "population" : 286295
      },
      {
        "district" : "Kordestan",
        "id" : 1399,
        "countrycode" : "IRN",
        "name" : "Sanandaj",
        "population" : 277808
      },
      {
        "district" : "Hormozgan",
        "id" : 1400,
        "countrycode" : "IRN",
        "name" : "Bandar-e-Abbas",
        "population" : 273578
      },
      {
        "district" : "Lorestan",
        "id" : 1401,
        "countrycode" : "IRN",
        "name" : "Khorramabad",
        "population" : 272815
      },
      {
        "district" : "Teheran",
        "id" : 1402,
        "countrycode" : "IRN",
        "name" : "Eslamshahr",
        "population" : 265450
      },
      {
        "district" : "Lorestan",
        "id" : 1403,
        "countrycode" : "IRN",
        "name" : "Borujerd",
        "population" : 217804
      },
      {
        "district" : "Khuzestan",
        "id" : 1404,
        "countrycode" : "IRN",
        "name" : "Abadan",
        "population" : 206073
      },
      {
        "district" : "Khuzestan",
        "id" : 1405,
        "countrycode" : "IRN",
        "name" : "Dezful",
        "population" : 202639
      },
      {
        "district" : "Esfahan",
        "id" : 1406,
        "countrycode" : "IRN",
        "name" : "Kashan",
        "population" : 201372
      },
      {
        "district" : "Mazandaran",
        "id" : 1407,
        "countrycode" : "IRN",
        "name" : "Sari",
        "population" : 195882
      },
      {
        "district" : "Golestan",
        "id" : 1408,
        "countrycode" : "IRN",
        "name" : "Gorgan",
        "population" : 188710
      },
      {
        "district" : "Esfahan",
        "id" : 1409,
        "countrycode" : "IRN",
        "name" : "Najafabad",
        "population" : 178498
      },
      {
        "district" : "Khorasan",
        "id" : 1410,
        "countrycode" : "IRN",
        "name" : "Sabzevar",
        "population" : 170738
      },
      {
        "district" : "Esfahan",
        "id" : 1411,
        "countrycode" : "IRN",
        "name" : "Khomeynishahr",
        "population" : 165888
      },
      {
        "district" : "Mazandaran",
        "id" : 1412,
        "countrycode" : "IRN",
        "name" : "Amol",
        "population" : 159092
      },
      {
        "district" : "Khorasan",
        "id" : 1413,
        "countrycode" : "IRN",
        "name" : "Neyshabur",
        "population" : 158847
      },
      {
        "district" : "Mazandaran",
        "id" : 1414,
        "countrycode" : "IRN",
        "name" : "Babol",
        "population" : 158346
      },
      {
        "district" : "West Azerbaidzan",
        "id" : 1415,
        "countrycode" : "IRN",
        "name" : "Khoy",
        "population" : 148944
      },
      {
        "district" : "Hamadan",
        "id" : 1416,
        "countrycode" : "IRN",
        "name" : "Malayer",
        "population" : 144373
      },
      {
        "district" : "Bushehr",
        "id" : 1417,
        "countrycode" : "IRN",
        "name" : "Bushehr",
        "population" : 143641
      },
      {
        "district" : "Mazandaran",
        "id" : 1418,
        "countrycode" : "IRN",
        "name" : "Qaemshahr",
        "population" : 143286
      },
      {
        "district" : "Teheran",
        "id" : 1419,
        "countrycode" : "IRN",
        "name" : "Qarchak",
        "population" : 142690
      },
      {
        "district" : "Teheran",
        "id" : 1420,
        "countrycode" : "IRN",
        "name" : "Qods",
        "population" : 138278
      },
      {
        "district" : "Kerman",
        "id" : 1421,
        "countrycode" : "IRN",
        "name" : "Sirjan",
        "population" : 135024
      },
      {
        "district" : "Khorasan",
        "id" : 1422,
        "countrycode" : "IRN",
        "name" : "Bojnurd",
        "population" : 134835
      },
      {
        "district" : "East Azerbaidzan",
        "id" : 1423,
        "countrycode" : "IRN",
        "name" : "Maragheh",
        "population" : 132318
      },
      {
        "district" : "Khorasan",
        "id" : 1424,
        "countrycode" : "IRN",
        "name" : "Birjand",
        "population" : 127608
      },
      {
        "district" : "Ilam",
        "id" : 1425,
        "countrycode" : "IRN",
        "name" : "Ilam",
        "population" : 126346
      },
      {
        "district" : "West Azerbaidzan",
        "id" : 1426,
        "countrycode" : "IRN",
        "name" : "Bukan",
        "population" : 120020
      },
      {
        "district" : "Khuzestan",
        "id" : 1427,
        "countrycode" : "IRN",
        "name" : "Masjed-e-Soleyman",
        "population" : 116883
      },
      {
        "district" : "Kordestan",
        "id" : 1428,
        "countrycode" : "IRN",
        "name" : "Saqqez",
        "population" : 115394
      },
      {
        "district" : "Mazandaran",
        "id" : 1429,
        "countrycode" : "IRN",
        "name" : "Gonbad-e Qabus",
        "population" : 111253
      },
      {
        "district" : "Qom",
        "id" : 1430,
        "countrycode" : "IRN",
        "name" : "Saveh",
        "population" : 111245
      },
      {
        "district" : "West Azerbaidzan",
        "id" : 1431,
        "countrycode" : "IRN",
        "name" : "Mahabad",
        "population" : 107799
      },
      {
        "district" : "Teheran",
        "id" : 1432,
        "countrycode" : "IRN",
        "name" : "Varamin",
        "population" : 107233
      },
      {
        "district" : "Khuzestan",
        "id" : 1433,
        "countrycode" : "IRN",
        "name" : "Andimeshk",
        "population" : 106923
      },
      {
        "district" : "Khuzestan",
        "id" : 1434,
        "countrycode" : "IRN",
        "name" : "Khorramshahr",
        "population" : 105636
      },
      {
        "district" : "Semnan",
        "id" : 1435,
        "countrycode" : "IRN",
        "name" : "Shahrud",
        "population" : 104765
      },
      {
        "district" : "Fars",
        "id" : 1436,
        "countrycode" : "IRN",
        "name" : "Marv Dasht",
        "population" : 103579
      },
      {
        "district" : "Sistan va Baluchesta",
        "id" : 1437,
        "countrycode" : "IRN",
        "name" : "Zabol",
        "population" : 100887
      },
      {
        "district" : "Chaharmahal va Bakht",
        "id" : 1438,
        "countrycode" : "IRN",
        "name" : "Shahr-e Kord",
        "population" : 100477
      },
      {
        "district" : "Gilan",
        "id" : 1439,
        "countrycode" : "IRN",
        "name" : "Bandar-e Anzali",
        "population" : 98500
      },
      {
        "district" : "Kerman",
        "id" : 1440,
        "countrycode" : "IRN",
        "name" : "Rafsanjan",
        "population" : 98300
      },
      {
        "district" : "East Azerbaidzan",
        "id" : 1441,
        "countrycode" : "IRN",
        "name" : "Marand",
        "population" : 96400
      },
      {
        "district" : "Khorasan",
        "id" : 1442,
        "countrycode" : "IRN",
        "name" : "Torbat-e Heydariyeh",
        "population" : 94600
      },
      {
        "district" : "Fars",
        "id" : 1443,
        "countrycode" : "IRN",
        "name" : "Jahrom",
        "population" : 94200
      },
      {
        "district" : "Semnan",
        "id" : 1444,
        "countrycode" : "IRN",
        "name" : "Semnan",
        "population" : 91045
      },
      {
        "district" : "West Azerbaidzan",
        "id" : 1445,
        "countrycode" : "IRN",
        "name" : "Miandoab",
        "population" : 90100
      },
      {
        "district" : "Esfahan",
        "id" : 1446,
        "countrycode" : "IRN",
        "name" : "Qomsheh",
        "population" : 89800
      },
      {
        "district" : "Leinster",
        "id" : 1447,
        "countrycode" : "IRL",
        "name" : "Dublin",
        "population" : 481854
      },
      {
        "district" : "Munster",
        "id" : 1448,
        "countrycode" : "IRL",
        "name" : "Cork",
        "population" : 127187
      },
      {
        "district" : "Hï¿½fuï¿½borgarsvï¿½ï¿½i",
        "id" : 1449,
        "countrycode" : "ISL",
        "name" : "Reykjavï¿½k",
        "population" : 109184
      },
      {
        "district" : "Jerusalem",
        "id" : 1450,
        "countrycode" : "ISR",
        "name" : "Jerusalem",
        "population" : 633700
      },
      {
        "district" : "Tel Aviv",
        "id" : 1451,
        "countrycode" : "ISR",
        "name" : "Tel Aviv-Jaffa",
        "population" : 348100
      },
      {
        "district" : "Haifa",
        "id" : 1452,
        "countrycode" : "ISR",
        "name" : "Haifa",
        "population" : 265700
      },
      {
        "district" : "Ha Merkaz",
        "id" : 1453,
        "countrycode" : "ISR",
        "name" : "Rishon Le Ziyyon",
        "population" : 188200
      },
      {
        "district" : "Ha Darom",
        "id" : 1454,
        "countrycode" : "ISR",
        "name" : "Beerseba",
        "population" : 163700
      },
      {
        "district" : "Tel Aviv",
        "id" : 1455,
        "countrycode" : "ISR",
        "name" : "Holon",
        "population" : 163100
      },
      {
        "district" : "Ha Merkaz",
        "id" : 1456,
        "countrycode" : "ISR",
        "name" : "Petah Tiqwa",
        "population" : 159400
      },
      {
        "district" : "Ha Darom",
        "id" : 1457,
        "countrycode" : "ISR",
        "name" : "Ashdod",
        "population" : 155800
      },
      {
        "district" : "Ha Merkaz",
        "id" : 1458,
        "countrycode" : "ISR",
        "name" : "Netanya",
        "population" : 154900
      },
      {
        "district" : "Tel Aviv",
        "id" : 1459,
        "countrycode" : "ISR",
        "name" : "Bat Yam",
        "population" : 137000
      },
      {
        "district" : "Tel Aviv",
        "id" : 1460,
        "countrycode" : "ISR",
        "name" : "Bene Beraq",
        "population" : 133900
      },
      {
        "district" : "Tel Aviv",
        "id" : 1461,
        "countrycode" : "ISR",
        "name" : "Ramat Gan",
        "population" : 126900
      },
      {
        "district" : "Ha Darom",
        "id" : 1462,
        "countrycode" : "ISR",
        "name" : "Ashqelon",
        "population" : 92300
      },
      {
        "district" : "Ha Merkaz",
        "id" : 1463,
        "countrycode" : "ISR",
        "name" : "Rehovot",
        "population" : 90300
      },
      {
        "district" : "Latium",
        "id" : 1464,
        "countrycode" : "ITA",
        "name" : "Roma",
        "population" : 2643581
      },
      {
        "district" : "Lombardia",
        "id" : 1465,
        "countrycode" : "ITA",
        "name" : "Milano",
        "population" : 1300977
      },
      {
        "district" : "Campania",
        "id" : 1466,
        "countrycode" : "ITA",
        "name" : "Napoli",
        "population" : 1002619
      },
      {
        "district" : "Piemonte",
        "id" : 1467,
        "countrycode" : "ITA",
        "name" : "Torino",
        "population" : 903705
      },
      {
        "district" : "Sisilia",
        "id" : 1468,
        "countrycode" : "ITA",
        "name" : "Palermo",
        "population" : 683794
      },
      {
        "district" : "Liguria",
        "id" : 1469,
        "countrycode" : "ITA",
        "name" : "Genova",
        "population" : 636104
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1470,
        "countrycode" : "ITA",
        "name" : "Bologna",
        "population" : 381161
      },
      {
        "district" : "Toscana",
        "id" : 1471,
        "countrycode" : "ITA",
        "name" : "Firenze",
        "population" : 376662
      },
      {
        "district" : "Sisilia",
        "id" : 1472,
        "countrycode" : "ITA",
        "name" : "Catania",
        "population" : 337862
      },
      {
        "district" : "Apulia",
        "id" : 1473,
        "countrycode" : "ITA",
        "name" : "Bari",
        "population" : 331848
      },
      {
        "district" : "Veneto",
        "id" : 1474,
        "countrycode" : "ITA",
        "name" : "Venezia",
        "population" : 277305
      },
      {
        "district" : "Sisilia",
        "id" : 1475,
        "countrycode" : "ITA",
        "name" : "Messina",
        "population" : 259156
      },
      {
        "district" : "Veneto",
        "id" : 1476,
        "countrycode" : "ITA",
        "name" : "Verona",
        "population" : 255268
      },
      {
        "district" : "Friuli-Venezia Giuli",
        "id" : 1477,
        "countrycode" : "ITA",
        "name" : "Trieste",
        "population" : 216459
      },
      {
        "district" : "Veneto",
        "id" : 1478,
        "countrycode" : "ITA",
        "name" : "Padova",
        "population" : 211391
      },
      {
        "district" : "Apulia",
        "id" : 1479,
        "countrycode" : "ITA",
        "name" : "Taranto",
        "population" : 208214
      },
      {
        "district" : "Lombardia",
        "id" : 1480,
        "countrycode" : "ITA",
        "name" : "Brescia",
        "population" : 191317
      },
      {
        "district" : "Calabria",
        "id" : 1481,
        "countrycode" : "ITA",
        "name" : "Reggio di Calabria",
        "population" : 179617
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1482,
        "countrycode" : "ITA",
        "name" : "Modena",
        "population" : 176022
      },
      {
        "district" : "Toscana",
        "id" : 1483,
        "countrycode" : "ITA",
        "name" : "Prato",
        "population" : 172473
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1484,
        "countrycode" : "ITA",
        "name" : "Parma",
        "population" : 168717
      },
      {
        "district" : "Sardinia",
        "id" : 1485,
        "countrycode" : "ITA",
        "name" : "Cagliari",
        "population" : 165926
      },
      {
        "district" : "Toscana",
        "id" : 1486,
        "countrycode" : "ITA",
        "name" : "Livorno",
        "population" : 161673
      },
      {
        "district" : "Umbria",
        "id" : 1487,
        "countrycode" : "ITA",
        "name" : "Perugia",
        "population" : 156673
      },
      {
        "district" : "Apulia",
        "id" : 1488,
        "countrycode" : "ITA",
        "name" : "Foggia",
        "population" : 154891
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1489,
        "countrycode" : "ITA",
        "name" : "Reggio nellï¿½ Emilia",
        "population" : 143664
      },
      {
        "district" : "Campania",
        "id" : 1490,
        "countrycode" : "ITA",
        "name" : "Salerno",
        "population" : 142055
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1491,
        "countrycode" : "ITA",
        "name" : "Ravenna",
        "population" : 138418
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1492,
        "countrycode" : "ITA",
        "name" : "Ferrara",
        "population" : 132127
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1493,
        "countrycode" : "ITA",
        "name" : "Rimini",
        "population" : 131062
      },
      {
        "district" : "Sisilia",
        "id" : 1494,
        "countrycode" : "ITA",
        "name" : "Syrakusa",
        "population" : 126282
      },
      {
        "district" : "Sardinia",
        "id" : 1495,
        "countrycode" : "ITA",
        "name" : "Sassari",
        "population" : 120803
      },
      {
        "district" : "Lombardia",
        "id" : 1496,
        "countrycode" : "ITA",
        "name" : "Monza",
        "population" : 119516
      },
      {
        "district" : "Lombardia",
        "id" : 1497,
        "countrycode" : "ITA",
        "name" : "Bergamo",
        "population" : 117837
      },
      {
        "district" : "Abruzzit",
        "id" : 1498,
        "countrycode" : "ITA",
        "name" : "Pescara",
        "population" : 115698
      },
      {
        "district" : "Latium",
        "id" : 1499,
        "countrycode" : "ITA",
        "name" : "Latina",
        "population" : 114099
      },
      {
        "district" : "Veneto",
        "id" : 1500,
        "countrycode" : "ITA",
        "name" : "Vicenza",
        "population" : 109738
      },
      {
        "district" : "Umbria",
        "id" : 1501,
        "countrycode" : "ITA",
        "name" : "Terni",
        "population" : 107770
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1502,
        "countrycode" : "ITA",
        "name" : "Forlï¿½",
        "population" : 107475
      },
      {
        "district" : "Trentino-Alto Adige",
        "id" : 1503,
        "countrycode" : "ITA",
        "name" : "Trento",
        "population" : 104906
      },
      {
        "district" : "Piemonte",
        "id" : 1504,
        "countrycode" : "ITA",
        "name" : "Novara",
        "population" : 102037
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1505,
        "countrycode" : "ITA",
        "name" : "Piacenza",
        "population" : 98384
      },
      {
        "district" : "Marche",
        "id" : 1506,
        "countrycode" : "ITA",
        "name" : "Ancona",
        "population" : 98329
      },
      {
        "district" : "Apulia",
        "id" : 1507,
        "countrycode" : "ITA",
        "name" : "Lecce",
        "population" : 98208
      },
      {
        "district" : "Trentino-Alto Adige",
        "id" : 1508,
        "countrycode" : "ITA",
        "name" : "Bolzano",
        "population" : 97232
      },
      {
        "district" : "Calabria",
        "id" : 1509,
        "countrycode" : "ITA",
        "name" : "Catanzaro",
        "population" : 96700
      },
      {
        "district" : "Liguria",
        "id" : 1510,
        "countrycode" : "ITA",
        "name" : "La Spezia",
        "population" : 95504
      },
      {
        "district" : "Friuli-Venezia Giuli",
        "id" : 1511,
        "countrycode" : "ITA",
        "name" : "Udine",
        "population" : 94932
      },
      {
        "district" : "Campania",
        "id" : 1512,
        "countrycode" : "ITA",
        "name" : "Torre del Greco",
        "population" : 94505
      },
      {
        "district" : "Apulia",
        "id" : 1513,
        "countrycode" : "ITA",
        "name" : "Andria",
        "population" : 94443
      },
      {
        "district" : "Apulia",
        "id" : 1514,
        "countrycode" : "ITA",
        "name" : "Brindisi",
        "population" : 93454
      },
      {
        "district" : "Campania",
        "id" : 1515,
        "countrycode" : "ITA",
        "name" : "Giugliano in Campania",
        "population" : 93286
      },
      {
        "district" : "Toscana",
        "id" : 1516,
        "countrycode" : "ITA",
        "name" : "Pisa",
        "population" : 92379
      },
      {
        "district" : "Apulia",
        "id" : 1517,
        "countrycode" : "ITA",
        "name" : "Barletta",
        "population" : 91904
      },
      {
        "district" : "Toscana",
        "id" : 1518,
        "countrycode" : "ITA",
        "name" : "Arezzo",
        "population" : 91729
      },
      {
        "district" : "Piemonte",
        "id" : 1519,
        "countrycode" : "ITA",
        "name" : "Alessandria",
        "population" : 90289
      },
      {
        "district" : "Emilia-Romagna",
        "id" : 1520,
        "countrycode" : "ITA",
        "name" : "Cesena",
        "population" : 89852
      },
      {
        "district" : "Marche",
        "id" : 1521,
        "countrycode" : "ITA",
        "name" : "Pesaro",
        "population" : 88987
      },
      {
        "district" : "Dili",
        "id" : 1522,
        "countrycode" : "TMP",
        "name" : "Dili",
        "population" : 47900
      },
      {
        "district" : "Wien",
        "id" : 1523,
        "countrycode" : "AUT",
        "name" : "Wien",
        "population" : 1608144
      },
      {
        "district" : "Steiermark",
        "id" : 1524,
        "countrycode" : "AUT",
        "name" : "Graz",
        "population" : 240967
      },
      {
        "district" : "North Austria",
        "id" : 1525,
        "countrycode" : "AUT",
        "name" : "Linz",
        "population" : 188022
      },
      {
        "district" : "Salzburg",
        "id" : 1526,
        "countrycode" : "AUT",
        "name" : "Salzburg",
        "population" : 144247
      },
      {
        "district" : "Tiroli",
        "id" : 1527,
        "countrycode" : "AUT",
        "name" : "Innsbruck",
        "population" : 111752
      },
      {
        "district" : "Kï¿½rnten",
        "id" : 1528,
        "countrycode" : "AUT",
        "name" : "Klagenfurt",
        "population" : 91141
      },
      {
        "district" : "St. Catherine",
        "id" : 1529,
        "countrycode" : "JAM",
        "name" : "Spanish Town",
        "population" : 110379
      },
      {
        "district" : "St. Andrew",
        "id" : 1530,
        "countrycode" : "JAM",
        "name" : "Kingston",
        "population" : 103962
      },
      {
        "district" : "St. Andrew",
        "id" : 1531,
        "countrycode" : "JAM",
        "name" : "Portmore",
        "population" : 99799
      },
      {
        "district" : "Tokyo-to",
        "id" : 1532,
        "countrycode" : "JPN",
        "name" : "Tokyo",
        "population" : 7980230
      },
      {
        "district" : "Kanagawa",
        "id" : 1533,
        "countrycode" : "JPN",
        "name" : "Jokohama [Yokohama]",
        "population" : 3339594
      },
      {
        "district" : "Osaka",
        "id" : 1534,
        "countrycode" : "JPN",
        "name" : "Osaka",
        "population" : 2595674
      },
      {
        "district" : "Aichi",
        "id" : 1535,
        "countrycode" : "JPN",
        "name" : "Nagoya",
        "population" : 2154376
      },
      {
        "district" : "Hokkaido",
        "id" : 1536,
        "countrycode" : "JPN",
        "name" : "Sapporo",
        "population" : 1790886
      },
      {
        "district" : "Kyoto",
        "id" : 1537,
        "countrycode" : "JPN",
        "name" : "Kioto",
        "population" : 1461974
      },
      {
        "district" : "Hyogo",
        "id" : 1538,
        "countrycode" : "JPN",
        "name" : "Kobe",
        "population" : 1425139
      },
      {
        "district" : "Fukuoka",
        "id" : 1539,
        "countrycode" : "JPN",
        "name" : "Fukuoka",
        "population" : 1308379
      },
      {
        "district" : "Kanagawa",
        "id" : 1540,
        "countrycode" : "JPN",
        "name" : "Kawasaki",
        "population" : 1217359
      },
      {
        "district" : "Hiroshima",
        "id" : 1541,
        "countrycode" : "JPN",
        "name" : "Hiroshima",
        "population" : 1119117
      },
      {
        "district" : "Fukuoka",
        "id" : 1542,
        "countrycode" : "JPN",
        "name" : "Kitakyushu",
        "population" : 1016264
      },
      {
        "district" : "Miyagi",
        "id" : 1543,
        "countrycode" : "JPN",
        "name" : "Sendai",
        "population" : 989975
      },
      {
        "district" : "Chiba",
        "id" : 1544,
        "countrycode" : "JPN",
        "name" : "Chiba",
        "population" : 863930
      },
      {
        "district" : "Osaka",
        "id" : 1545,
        "countrycode" : "JPN",
        "name" : "Sakai",
        "population" : 797735
      },
      {
        "district" : "Kumamoto",
        "id" : 1546,
        "countrycode" : "JPN",
        "name" : "Kumamoto",
        "population" : 656734
      },
      {
        "district" : "Okayama",
        "id" : 1547,
        "countrycode" : "JPN",
        "name" : "Okayama",
        "population" : 624269
      },
      {
        "district" : "Kanagawa",
        "id" : 1548,
        "countrycode" : "JPN",
        "name" : "Sagamihara",
        "population" : 586300
      },
      {
        "district" : "Shizuoka",
        "id" : 1549,
        "countrycode" : "JPN",
        "name" : "Hamamatsu",
        "population" : 568796
      },
      {
        "district" : "Kagoshima",
        "id" : 1550,
        "countrycode" : "JPN",
        "name" : "Kagoshima",
        "population" : 549977
      },
      {
        "district" : "Chiba",
        "id" : 1551,
        "countrycode" : "JPN",
        "name" : "Funabashi",
        "population" : 545299
      },
      {
        "district" : "Osaka",
        "id" : 1552,
        "countrycode" : "JPN",
        "name" : "Higashiosaka",
        "population" : 517785
      },
      {
        "district" : "Tokyo-to",
        "id" : 1553,
        "countrycode" : "JPN",
        "name" : "Hachioji",
        "population" : 513451
      },
      {
        "district" : "Niigata",
        "id" : 1554,
        "countrycode" : "JPN",
        "name" : "Niigata",
        "population" : 497464
      },
      {
        "district" : "Hyogo",
        "id" : 1555,
        "countrycode" : "JPN",
        "name" : "Amagasaki",
        "population" : 481434
      },
      {
        "district" : "Hyogo",
        "id" : 1556,
        "countrycode" : "JPN",
        "name" : "Himeji",
        "population" : 475167
      },
      {
        "district" : "Shizuoka",
        "id" : 1557,
        "countrycode" : "JPN",
        "name" : "Shizuoka",
        "population" : 473854
      },
      {
        "district" : "Saitama",
        "id" : 1558,
        "countrycode" : "JPN",
        "name" : "Urawa",
        "population" : 469675
      },
      {
        "district" : "Ehime",
        "id" : 1559,
        "countrycode" : "JPN",
        "name" : "Matsuyama",
        "population" : 466133
      },
      {
        "district" : "Chiba",
        "id" : 1560,
        "countrycode" : "JPN",
        "name" : "Matsudo",
        "population" : 461126
      },
      {
        "district" : "Ishikawa",
        "id" : 1561,
        "countrycode" : "JPN",
        "name" : "Kanazawa",
        "population" : 455386
      },
      {
        "district" : "Saitama",
        "id" : 1562,
        "countrycode" : "JPN",
        "name" : "Kawaguchi",
        "population" : 452155
      },
      {
        "district" : "Chiba",
        "id" : 1563,
        "countrycode" : "JPN",
        "name" : "Ichikawa",
        "population" : 441893
      },
      {
        "district" : "Saitama",
        "id" : 1564,
        "countrycode" : "JPN",
        "name" : "Omiya",
        "population" : 441649
      },
      {
        "district" : "Tochigi",
        "id" : 1565,
        "countrycode" : "JPN",
        "name" : "Utsunomiya",
        "population" : 440353
      },
      {
        "district" : "Oita",
        "id" : 1566,
        "countrycode" : "JPN",
        "name" : "Oita",
        "population" : 433401
      },
      {
        "district" : "Nagasaki",
        "id" : 1567,
        "countrycode" : "JPN",
        "name" : "Nagasaki",
        "population" : 432759
      },
      {
        "district" : "Kanagawa",
        "id" : 1568,
        "countrycode" : "JPN",
        "name" : "Yokosuka",
        "population" : 430200
      },
      {
        "district" : "Okayama",
        "id" : 1569,
        "countrycode" : "JPN",
        "name" : "Kurashiki",
        "population" : 425103
      },
      {
        "district" : "Gifu",
        "id" : 1570,
        "countrycode" : "JPN",
        "name" : "Gifu",
        "population" : 408007
      },
      {
        "district" : "Osaka",
        "id" : 1571,
        "countrycode" : "JPN",
        "name" : "Hirakata",
        "population" : 403151
      },
      {
        "district" : "Hyogo",
        "id" : 1572,
        "countrycode" : "JPN",
        "name" : "Nishinomiya",
        "population" : 397618
      },
      {
        "district" : "Osaka",
        "id" : 1573,
        "countrycode" : "JPN",
        "name" : "Toyonaka",
        "population" : 396689
      },
      {
        "district" : "Wakayama",
        "id" : 1574,
        "countrycode" : "JPN",
        "name" : "Wakayama",
        "population" : 391233
      },
      {
        "district" : "Hiroshima",
        "id" : 1575,
        "countrycode" : "JPN",
        "name" : "Fukuyama",
        "population" : 376921
      },
      {
        "district" : "Kanagawa",
        "id" : 1576,
        "countrycode" : "JPN",
        "name" : "Fujisawa",
        "population" : 372840
      },
      {
        "district" : "Hokkaido",
        "id" : 1577,
        "countrycode" : "JPN",
        "name" : "Asahikawa",
        "population" : 364813
      },
      {
        "district" : "Tokyo-to",
        "id" : 1578,
        "countrycode" : "JPN",
        "name" : "Machida",
        "population" : 364197
      },
      {
        "district" : "Nara",
        "id" : 1579,
        "countrycode" : "JPN",
        "name" : "Nara",
        "population" : 362812
      },
      {
        "district" : "Osaka",
        "id" : 1580,
        "countrycode" : "JPN",
        "name" : "Takatsuki",
        "population" : 361747
      },
      {
        "district" : "Fukushima",
        "id" : 1581,
        "countrycode" : "JPN",
        "name" : "Iwaki",
        "population" : 361737
      },
      {
        "district" : "Nagano",
        "id" : 1582,
        "countrycode" : "JPN",
        "name" : "Nagano",
        "population" : 361391
      },
      {
        "district" : "Aichi",
        "id" : 1583,
        "countrycode" : "JPN",
        "name" : "Toyohashi",
        "population" : 360066
      },
      {
        "district" : "Aichi",
        "id" : 1584,
        "countrycode" : "JPN",
        "name" : "Toyota",
        "population" : 346090
      },
      {
        "district" : "Osaka",
        "id" : 1585,
        "countrycode" : "JPN",
        "name" : "Suita",
        "population" : 345750
      },
      {
        "district" : "Kagawa",
        "id" : 1586,
        "countrycode" : "JPN",
        "name" : "Takamatsu",
        "population" : 332471
      },
      {
        "district" : "Fukushima",
        "id" : 1587,
        "countrycode" : "JPN",
        "name" : "Koriyama",
        "population" : 330335
      },
      {
        "district" : "Aichi",
        "id" : 1588,
        "countrycode" : "JPN",
        "name" : "Okazaki",
        "population" : 328711
      },
      {
        "district" : "Saitama",
        "id" : 1589,
        "countrycode" : "JPN",
        "name" : "Kawagoe",
        "population" : 327211
      },
      {
        "district" : "Saitama",
        "id" : 1590,
        "countrycode" : "JPN",
        "name" : "Tokorozawa",
        "population" : 325809
      },
      {
        "district" : "Toyama",
        "id" : 1591,
        "countrycode" : "JPN",
        "name" : "Toyama",
        "population" : 325790
      },
      {
        "district" : "Kochi",
        "id" : 1592,
        "countrycode" : "JPN",
        "name" : "Kochi",
        "population" : 324710
      },
      {
        "district" : "Chiba",
        "id" : 1593,
        "countrycode" : "JPN",
        "name" : "Kashiwa",
        "population" : 320296
      },
      {
        "district" : "Akita",
        "id" : 1594,
        "countrycode" : "JPN",
        "name" : "Akita",
        "population" : 314440
      },
      {
        "district" : "Miyazaki",
        "id" : 1595,
        "countrycode" : "JPN",
        "name" : "Miyazaki",
        "population" : 303784
      },
      {
        "district" : "Saitama",
        "id" : 1596,
        "countrycode" : "JPN",
        "name" : "Koshigaya",
        "population" : 301446
      },
      {
        "district" : "Okinawa",
        "id" : 1597,
        "countrycode" : "JPN",
        "name" : "Naha",
        "population" : 299851
      },
      {
        "district" : "Aomori",
        "id" : 1598,
        "countrycode" : "JPN",
        "name" : "Aomori",
        "population" : 295969
      },
      {
        "district" : "Hokkaido",
        "id" : 1599,
        "countrycode" : "JPN",
        "name" : "Hakodate",
        "population" : 294788
      },
      {
        "district" : "Hyogo",
        "id" : 1600,
        "countrycode" : "JPN",
        "name" : "Akashi",
        "population" : 292253
      },
      {
        "district" : "Mie",
        "id" : 1601,
        "countrycode" : "JPN",
        "name" : "Yokkaichi",
        "population" : 288173
      },
      {
        "district" : "Fukushima",
        "id" : 1602,
        "countrycode" : "JPN",
        "name" : "Fukushima",
        "population" : 287525
      },
      {
        "district" : "Iwate",
        "id" : 1603,
        "countrycode" : "JPN",
        "name" : "Morioka",
        "population" : 287353
      },
      {
        "district" : "Gumma",
        "id" : 1604,
        "countrycode" : "JPN",
        "name" : "Maebashi",
        "population" : 284473
      },
      {
        "district" : "Aichi",
        "id" : 1605,
        "countrycode" : "JPN",
        "name" : "Kasugai",
        "population" : 282348
      },
      {
        "district" : "Shiga",
        "id" : 1606,
        "countrycode" : "JPN",
        "name" : "Otsu",
        "population" : 282070
      },
      {
        "district" : "Chiba",
        "id" : 1607,
        "countrycode" : "JPN",
        "name" : "Ichihara",
        "population" : 279280
      },
      {
        "district" : "Osaka",
        "id" : 1608,
        "countrycode" : "JPN",
        "name" : "Yao",
        "population" : 276421
      },
      {
        "district" : "Aichi",
        "id" : 1609,
        "countrycode" : "JPN",
        "name" : "Ichinomiya",
        "population" : 270828
      },
      {
        "district" : "Tokushima",
        "id" : 1610,
        "countrycode" : "JPN",
        "name" : "Tokushima",
        "population" : 269649
      },
      {
        "district" : "Hyogo",
        "id" : 1611,
        "countrycode" : "JPN",
        "name" : "Kakogawa",
        "population" : 266281
      },
      {
        "district" : "Osaka",
        "id" : 1612,
        "countrycode" : "JPN",
        "name" : "Ibaraki",
        "population" : 261020
      },
      {
        "district" : "Osaka",
        "id" : 1613,
        "countrycode" : "JPN",
        "name" : "Neyagawa",
        "population" : 257315
      },
      {
        "district" : "Yamaguchi",
        "id" : 1614,
        "countrycode" : "JPN",
        "name" : "Shimonoseki",
        "population" : 257263
      },
      {
        "district" : "Yamagata",
        "id" : 1615,
        "countrycode" : "JPN",
        "name" : "Yamagata",
        "population" : 255617
      },
      {
        "district" : "Fukui",
        "id" : 1616,
        "countrycode" : "JPN",
        "name" : "Fukui",
        "population" : 254818
      },
      {
        "district" : "Kanagawa",
        "id" : 1617,
        "countrycode" : "JPN",
        "name" : "Hiratsuka",
        "population" : 254207
      },
      {
        "district" : "Ibaragi",
        "id" : 1618,
        "countrycode" : "JPN",
        "name" : "Mito",
        "population" : 246559
      },
      {
        "district" : "Nagasaki",
        "id" : 1619,
        "countrycode" : "JPN",
        "name" : "Sasebo",
        "population" : 244240
      },
      {
        "district" : "Aomori",
        "id" : 1620,
        "countrycode" : "JPN",
        "name" : "Hachinohe",
        "population" : 242979
      },
      {
        "district" : "Gumma",
        "id" : 1621,
        "countrycode" : "JPN",
        "name" : "Takasaki",
        "population" : 239124
      },
      {
        "district" : "Shizuoka",
        "id" : 1622,
        "countrycode" : "JPN",
        "name" : "Shimizu",
        "population" : 239123
      },
      {
        "district" : "Fukuoka",
        "id" : 1623,
        "countrycode" : "JPN",
        "name" : "Kurume",
        "population" : 235611
      },
      {
        "district" : "Shizuoka",
        "id" : 1624,
        "countrycode" : "JPN",
        "name" : "Fuji",
        "population" : 231527
      },
      {
        "district" : "Saitama",
        "id" : 1625,
        "countrycode" : "JPN",
        "name" : "Soka",
        "population" : 222768
      },
      {
        "district" : "Tokyo-to",
        "id" : 1626,
        "countrycode" : "JPN",
        "name" : "Fuchu",
        "population" : 220576
      },
      {
        "district" : "Kanagawa",
        "id" : 1627,
        "countrycode" : "JPN",
        "name" : "Chigasaki",
        "population" : 216015
      },
      {
        "district" : "Kanagawa",
        "id" : 1628,
        "countrycode" : "JPN",
        "name" : "Atsugi",
        "population" : 212407
      },
      {
        "district" : "Shizuoka",
        "id" : 1629,
        "countrycode" : "JPN",
        "name" : "Numazu",
        "population" : 211382
      },
      {
        "district" : "Saitama",
        "id" : 1630,
        "countrycode" : "JPN",
        "name" : "Ageo",
        "population" : 209442
      },
      {
        "district" : "Kanagawa",
        "id" : 1631,
        "countrycode" : "JPN",
        "name" : "Yamato",
        "population" : 208234
      },
      {
        "district" : "Nagano",
        "id" : 1632,
        "countrycode" : "JPN",
        "name" : "Matsumoto",
        "population" : 206801
      },
      {
        "district" : "Hiroshima",
        "id" : 1633,
        "countrycode" : "JPN",
        "name" : "Kure",
        "population" : 206504
      },
      {
        "district" : "Hyogo",
        "id" : 1634,
        "countrycode" : "JPN",
        "name" : "Takarazuka",
        "population" : 205993
      },
      {
        "district" : "Saitama",
        "id" : 1635,
        "countrycode" : "JPN",
        "name" : "Kasukabe",
        "population" : 201838
      },
      {
        "district" : "Tokyo-to",
        "id" : 1636,
        "countrycode" : "JPN",
        "name" : "Chofu",
        "population" : 201585
      },
      {
        "district" : "Kanagawa",
        "id" : 1637,
        "countrycode" : "JPN",
        "name" : "Odawara",
        "population" : 200171
      },
      {
        "district" : "Yamanashi",
        "id" : 1638,
        "countrycode" : "JPN",
        "name" : "Kofu",
        "population" : 199753
      },
      {
        "district" : "Hokkaido",
        "id" : 1639,
        "countrycode" : "JPN",
        "name" : "Kushiro",
        "population" : 197608
      },
      {
        "district" : "Osaka",
        "id" : 1640,
        "countrycode" : "JPN",
        "name" : "Kishiwada",
        "population" : 197276
      },
      {
        "district" : "Ibaragi",
        "id" : 1641,
        "countrycode" : "JPN",
        "name" : "Hitachi",
        "population" : 196622
      },
      {
        "district" : "Niigata",
        "id" : 1642,
        "countrycode" : "JPN",
        "name" : "Nagaoka",
        "population" : 192407
      },
      {
        "district" : "Hyogo",
        "id" : 1643,
        "countrycode" : "JPN",
        "name" : "Itami",
        "population" : 190886
      },
      {
        "district" : "Kyoto",
        "id" : 1644,
        "countrycode" : "JPN",
        "name" : "Uji",
        "population" : 188735
      },
      {
        "district" : "Mie",
        "id" : 1645,
        "countrycode" : "JPN",
        "name" : "Suzuka",
        "population" : 184061
      },
      {
        "district" : "Aomori",
        "id" : 1646,
        "countrycode" : "JPN",
        "name" : "Hirosaki",
        "population" : 177522
      },
      {
        "district" : "Yamaguchi",
        "id" : 1647,
        "countrycode" : "JPN",
        "name" : "Ube",
        "population" : 175206
      },
      {
        "district" : "Tokyo-to",
        "id" : 1648,
        "countrycode" : "JPN",
        "name" : "Kodaira",
        "population" : 174984
      },
      {
        "district" : "Toyama",
        "id" : 1649,
        "countrycode" : "JPN",
        "name" : "Takaoka",
        "population" : 174380
      },
      {
        "district" : "Hokkaido",
        "id" : 1650,
        "countrycode" : "JPN",
        "name" : "Obihiro",
        "population" : 173685
      },
      {
        "district" : "Hokkaido",
        "id" : 1651,
        "countrycode" : "JPN",
        "name" : "Tomakomai",
        "population" : 171958
      },
      {
        "district" : "Saga",
        "id" : 1652,
        "countrycode" : "JPN",
        "name" : "Saga",
        "population" : 170034
      },
      {
        "district" : "Chiba",
        "id" : 1653,
        "countrycode" : "JPN",
        "name" : "Sakura",
        "population" : 168072
      },
      {
        "district" : "Kanagawa",
        "id" : 1654,
        "countrycode" : "JPN",
        "name" : "Kamakura",
        "population" : 167661
      },
      {
        "district" : "Tokyo-to",
        "id" : 1655,
        "countrycode" : "JPN",
        "name" : "Mitaka",
        "population" : 167268
      },
      {
        "district" : "Osaka",
        "id" : 1656,
        "countrycode" : "JPN",
        "name" : "Izumi",
        "population" : 166979
      },
      {
        "district" : "Tokyo-to",
        "id" : 1657,
        "countrycode" : "JPN",
        "name" : "Hino",
        "population" : 166770
      },
      {
        "district" : "Kanagawa",
        "id" : 1658,
        "countrycode" : "JPN",
        "name" : "Hadano",
        "population" : 166512
      },
      {
        "district" : "Tochigi",
        "id" : 1659,
        "countrycode" : "JPN",
        "name" : "Ashikaga",
        "population" : 165243
      },
      {
        "district" : "Mie",
        "id" : 1660,
        "countrycode" : "JPN",
        "name" : "Tsu",
        "population" : 164543
      },
      {
        "district" : "Saitama",
        "id" : 1661,
        "countrycode" : "JPN",
        "name" : "Sayama",
        "population" : 162472
      },
      {
        "district" : "Chiba",
        "id" : 1662,
        "countrycode" : "JPN",
        "name" : "Yachiyo",
        "population" : 161222
      },
      {
        "district" : "Ibaragi",
        "id" : 1663,
        "countrycode" : "JPN",
        "name" : "Tsukuba",
        "population" : 160768
      },
      {
        "district" : "Tokyo-to",
        "id" : 1664,
        "countrycode" : "JPN",
        "name" : "Tachikawa",
        "population" : 159430
      },
      {
        "district" : "Saitama",
        "id" : 1665,
        "countrycode" : "JPN",
        "name" : "Kumagaya",
        "population" : 157171
      },
      {
        "district" : "Osaka",
        "id" : 1666,
        "countrycode" : "JPN",
        "name" : "Moriguchi",
        "population" : 155941
      },
      {
        "district" : "Hokkaido",
        "id" : 1667,
        "countrycode" : "JPN",
        "name" : "Otaru",
        "population" : 155784
      },
      {
        "district" : "Aichi",
        "id" : 1668,
        "countrycode" : "JPN",
        "name" : "Anjo",
        "population" : 153823
      },
      {
        "district" : "Chiba",
        "id" : 1669,
        "countrycode" : "JPN",
        "name" : "Narashino",
        "population" : 152849
      },
      {
        "district" : "Tochigi",
        "id" : 1670,
        "countrycode" : "JPN",
        "name" : "Oyama",
        "population" : 152820
      },
      {
        "district" : "Gifu",
        "id" : 1671,
        "countrycode" : "JPN",
        "name" : "Ogaki",
        "population" : 151758
      },
      {
        "district" : "Shimane",
        "id" : 1672,
        "countrycode" : "JPN",
        "name" : "Matsue",
        "population" : 149821
      },
      {
        "district" : "Hyogo",
        "id" : 1673,
        "countrycode" : "JPN",
        "name" : "Kawanishi",
        "population" : 149794
      },
      {
        "district" : "Tokyo-to",
        "id" : 1674,
        "countrycode" : "JPN",
        "name" : "Hitachinaka",
        "population" : 148006
      },
      {
        "district" : "Saitama",
        "id" : 1675,
        "countrycode" : "JPN",
        "name" : "Niiza",
        "population" : 147744
      },
      {
        "district" : "Chiba",
        "id" : 1676,
        "countrycode" : "JPN",
        "name" : "Nagareyama",
        "population" : 147738
      },
      {
        "district" : "Tottori",
        "id" : 1677,
        "countrycode" : "JPN",
        "name" : "Tottori",
        "population" : 147523
      },
      {
        "district" : "Ibaragi",
        "id" : 1678,
        "countrycode" : "JPN",
        "name" : "Tama",
        "population" : 146712
      },
      {
        "district" : "Saitama",
        "id" : 1679,
        "countrycode" : "JPN",
        "name" : "Iruma",
        "population" : 145922
      },
      {
        "district" : "Gumma",
        "id" : 1680,
        "countrycode" : "JPN",
        "name" : "Ota",
        "population" : 145317
      },
      {
        "district" : "Fukuoka",
        "id" : 1681,
        "countrycode" : "JPN",
        "name" : "Omuta",
        "population" : 142889
      },
      {
        "district" : "Aichi",
        "id" : 1682,
        "countrycode" : "JPN",
        "name" : "Komaki",
        "population" : 139827
      },
      {
        "district" : "Tokyo-to",
        "id" : 1683,
        "countrycode" : "JPN",
        "name" : "Ome",
        "population" : 139216
      },
      {
        "district" : "Osaka",
        "id" : 1684,
        "countrycode" : "JPN",
        "name" : "Kadoma",
        "population" : 138953
      },
      {
        "district" : "Yamaguchi",
        "id" : 1685,
        "countrycode" : "JPN",
        "name" : "Yamaguchi",
        "population" : 138210
      },
      {
        "district" : "Tokyo-to",
        "id" : 1686,
        "countrycode" : "JPN",
        "name" : "Higashimurayama",
        "population" : 136970
      },
      {
        "district" : "Tottori",
        "id" : 1687,
        "countrycode" : "JPN",
        "name" : "Yonago",
        "population" : 136461
      },
      {
        "district" : "Osaka",
        "id" : 1688,
        "countrycode" : "JPN",
        "name" : "Matsubara",
        "population" : 135010
      },
      {
        "district" : "Tokyo-to",
        "id" : 1689,
        "countrycode" : "JPN",
        "name" : "Musashino",
        "population" : 134426
      },
      {
        "district" : "Ibaragi",
        "id" : 1690,
        "countrycode" : "JPN",
        "name" : "Tsuchiura",
        "population" : 134072
      },
      {
        "district" : "Niigata",
        "id" : 1691,
        "countrycode" : "JPN",
        "name" : "Joetsu",
        "population" : 133505
      },
      {
        "district" : "Miyazaki",
        "id" : 1692,
        "countrycode" : "JPN",
        "name" : "Miyakonojo",
        "population" : 133183
      },
      {
        "district" : "Saitama",
        "id" : 1693,
        "countrycode" : "JPN",
        "name" : "Misato",
        "population" : 132957
      },
      {
        "district" : "Gifu",
        "id" : 1694,
        "countrycode" : "JPN",
        "name" : "Kakamigahara",
        "population" : 131831
      },
      {
        "district" : "Osaka",
        "id" : 1695,
        "countrycode" : "JPN",
        "name" : "Daito",
        "population" : 130594
      },
      {
        "district" : "Aichi",
        "id" : 1696,
        "countrycode" : "JPN",
        "name" : "Seto",
        "population" : 130470
      },
      {
        "district" : "Aichi",
        "id" : 1697,
        "countrycode" : "JPN",
        "name" : "Kariya",
        "population" : 127969
      },
      {
        "district" : "Chiba",
        "id" : 1698,
        "countrycode" : "JPN",
        "name" : "Urayasu",
        "population" : 127550
      },
      {
        "district" : "Oita",
        "id" : 1699,
        "countrycode" : "JPN",
        "name" : "Beppu",
        "population" : 127486
      },
      {
        "district" : "Ehime",
        "id" : 1700,
        "countrycode" : "JPN",
        "name" : "Niihama",
        "population" : 127207
      },
      {
        "district" : "Osaka",
        "id" : 1701,
        "countrycode" : "JPN",
        "name" : "Minoo",
        "population" : 127026
      },
      {
        "district" : "Shizuoka",
        "id" : 1702,
        "countrycode" : "JPN",
        "name" : "Fujieda",
        "population" : 126897
      },
      {
        "district" : "Chiba",
        "id" : 1703,
        "countrycode" : "JPN",
        "name" : "Abiko",
        "population" : 126670
      },
      {
        "district" : "Miyazaki",
        "id" : 1704,
        "countrycode" : "JPN",
        "name" : "Nobeoka",
        "population" : 125547
      },
      {
        "district" : "Osaka",
        "id" : 1705,
        "countrycode" : "JPN",
        "name" : "Tondabayashi",
        "population" : 125094
      },
      {
        "district" : "Nagano",
        "id" : 1706,
        "countrycode" : "JPN",
        "name" : "Ueda",
        "population" : 124217
      },
      {
        "district" : "Nara",
        "id" : 1707,
        "countrycode" : "JPN",
        "name" : "Kashihara",
        "population" : 124013
      },
      {
        "district" : "Mie",
        "id" : 1708,
        "countrycode" : "JPN",
        "name" : "Matsusaka",
        "population" : 123582
      },
      {
        "district" : "Gumma",
        "id" : 1709,
        "countrycode" : "JPN",
        "name" : "Isesaki",
        "population" : 123285
      },
      {
        "district" : "Kanagawa",
        "id" : 1710,
        "countrycode" : "JPN",
        "name" : "Zama",
        "population" : 122046
      },
      {
        "district" : "Chiba",
        "id" : 1711,
        "countrycode" : "JPN",
        "name" : "Kisarazu",
        "population" : 121967
      },
      {
        "district" : "Chiba",
        "id" : 1712,
        "countrycode" : "JPN",
        "name" : "Noda",
        "population" : 121030
      },
      {
        "district" : "Miyagi",
        "id" : 1713,
        "countrycode" : "JPN",
        "name" : "Ishinomaki",
        "population" : 120963
      },
      {
        "district" : "Shizuoka",
        "id" : 1714,
        "countrycode" : "JPN",
        "name" : "Fujinomiya",
        "population" : 119714
      },
      {
        "district" : "Osaka",
        "id" : 1715,
        "countrycode" : "JPN",
        "name" : "Kawachinagano",
        "population" : 119666
      },
      {
        "district" : "Ehime",
        "id" : 1716,
        "countrycode" : "JPN",
        "name" : "Imabari",
        "population" : 119357
      },
      {
        "district" : "Fukushima",
        "id" : 1717,
        "countrycode" : "JPN",
        "name" : "Aizuwakamatsu",
        "population" : 119287
      },
      {
        "district" : "Hiroshima",
        "id" : 1718,
        "countrycode" : "JPN",
        "name" : "Higashihiroshima",
        "population" : 119166
      },
      {
        "district" : "Osaka",
        "id" : 1719,
        "countrycode" : "JPN",
        "name" : "Habikino",
        "population" : 118968
      },
      {
        "district" : "Hokkaido",
        "id" : 1720,
        "countrycode" : "JPN",
        "name" : "Ebetsu",
        "population" : 118805
      },
      {
        "district" : "Yamaguchi",
        "id" : 1721,
        "countrycode" : "JPN",
        "name" : "Hofu",
        "population" : 118751
      },
      {
        "district" : "Gumma",
        "id" : 1722,
        "countrycode" : "JPN",
        "name" : "Kiryu",
        "population" : 118326
      },
      {
        "district" : "Okinawa",
        "id" : 1723,
        "countrycode" : "JPN",
        "name" : "Okinawa",
        "population" : 117748
      },
      {
        "district" : "Shizuoka",
        "id" : 1724,
        "countrycode" : "JPN",
        "name" : "Yaizu",
        "population" : 117258
      },
      {
        "district" : "Aichi",
        "id" : 1725,
        "countrycode" : "JPN",
        "name" : "Toyokawa",
        "population" : 115781
      },
      {
        "district" : "Kanagawa",
        "id" : 1726,
        "countrycode" : "JPN",
        "name" : "Ebina",
        "population" : 115571
      },
      {
        "district" : "Saitama",
        "id" : 1727,
        "countrycode" : "JPN",
        "name" : "Asaka",
        "population" : 114815
      },
      {
        "district" : "Tokyo-to",
        "id" : 1728,
        "countrycode" : "JPN",
        "name" : "Higashikurume",
        "population" : 111666
      },
      {
        "district" : "Nara",
        "id" : 1729,
        "countrycode" : "JPN",
        "name" : "Ikoma",
        "population" : 111645
      },
      {
        "district" : "Hokkaido",
        "id" : 1730,
        "countrycode" : "JPN",
        "name" : "Kitami",
        "population" : 111295
      },
      {
        "district" : "Tokyo-to",
        "id" : 1731,
        "countrycode" : "JPN",
        "name" : "Koganei",
        "population" : 110969
      },
      {
        "district" : "Saitama",
        "id" : 1732,
        "countrycode" : "JPN",
        "name" : "Iwatsuki",
        "population" : 110034
      },
      {
        "district" : "Shizuoka",
        "id" : 1733,
        "countrycode" : "JPN",
        "name" : "Mishima",
        "population" : 109699
      },
      {
        "district" : "Aichi",
        "id" : 1734,
        "countrycode" : "JPN",
        "name" : "Handa",
        "population" : 108600
      },
      {
        "district" : "Hokkaido",
        "id" : 1735,
        "countrycode" : "JPN",
        "name" : "Muroran",
        "population" : 108275
      },
      {
        "district" : "Ishikawa",
        "id" : 1736,
        "countrycode" : "JPN",
        "name" : "Komatsu",
        "population" : 107937
      },
      {
        "district" : "Kumamoto",
        "id" : 1737,
        "countrycode" : "JPN",
        "name" : "Yatsushiro",
        "population" : 107661
      },
      {
        "district" : "Nagano",
        "id" : 1738,
        "countrycode" : "JPN",
        "name" : "Iida",
        "population" : 107583
      },
      {
        "district" : "Yamaguchi",
        "id" : 1739,
        "countrycode" : "JPN",
        "name" : "Tokuyama",
        "population" : 107078
      },
      {
        "district" : "Tokyo-to",
        "id" : 1740,
        "countrycode" : "JPN",
        "name" : "Kokubunji",
        "population" : 106996
      },
      {
        "district" : "Tokyo-to",
        "id" : 1741,
        "countrycode" : "JPN",
        "name" : "Akishima",
        "population" : 106914
      },
      {
        "district" : "Yamaguchi",
        "id" : 1742,
        "countrycode" : "JPN",
        "name" : "Iwakuni",
        "population" : 106647
      },
      {
        "district" : "Shiga",
        "id" : 1743,
        "countrycode" : "JPN",
        "name" : "Kusatsu",
        "population" : 106232
      },
      {
        "district" : "Mie",
        "id" : 1744,
        "countrycode" : "JPN",
        "name" : "Kuwana",
        "population" : 106121
      },
      {
        "district" : "Hyogo",
        "id" : 1745,
        "countrycode" : "JPN",
        "name" : "Sanda",
        "population" : 105643
      },
      {
        "district" : "Shiga",
        "id" : 1746,
        "countrycode" : "JPN",
        "name" : "Hikone",
        "population" : 105508
      },
      {
        "district" : "Saitama",
        "id" : 1747,
        "countrycode" : "JPN",
        "name" : "Toda",
        "population" : 103969
      },
      {
        "district" : "Gifu",
        "id" : 1748,
        "countrycode" : "JPN",
        "name" : "Tajimi",
        "population" : 103171
      },
      {
        "district" : "Osaka",
        "id" : 1749,
        "countrycode" : "JPN",
        "name" : "Ikeda",
        "population" : 102710
      },
      {
        "district" : "Saitama",
        "id" : 1750,
        "countrycode" : "JPN",
        "name" : "Fukaya",
        "population" : 102156
      },
      {
        "district" : "Mie",
        "id" : 1751,
        "countrycode" : "JPN",
        "name" : "Ise",
        "population" : 101732
      },
      {
        "district" : "Yamagata",
        "id" : 1752,
        "countrycode" : "JPN",
        "name" : "Sakata",
        "population" : 101651
      },
      {
        "district" : "Fukuoka",
        "id" : 1753,
        "countrycode" : "JPN",
        "name" : "Kasuga",
        "population" : 101344
      },
      {
        "district" : "Chiba",
        "id" : 1754,
        "countrycode" : "JPN",
        "name" : "Kamagaya",
        "population" : 100821
      },
      {
        "district" : "Yamagata",
        "id" : 1755,
        "countrycode" : "JPN",
        "name" : "Tsuruoka",
        "population" : 100713
      },
      {
        "district" : "Tokyo-to",
        "id" : 1756,
        "countrycode" : "JPN",
        "name" : "Hoya",
        "population" : 100313
      },
      {
        "district" : "Chiba",
        "id" : 1757,
        "countrycode" : "JPN",
        "name" : "Nishio",
        "population" : 100032
      },
      {
        "district" : "Aichi",
        "id" : 1758,
        "countrycode" : "JPN",
        "name" : "Tokai",
        "population" : 99738
      },
      {
        "district" : "Aichi",
        "id" : 1759,
        "countrycode" : "JPN",
        "name" : "Inazawa",
        "population" : 98746
      },
      {
        "district" : "Saitama",
        "id" : 1760,
        "countrycode" : "JPN",
        "name" : "Sakado",
        "population" : 98221
      },
      {
        "district" : "Kanagawa",
        "id" : 1761,
        "countrycode" : "JPN",
        "name" : "Isehara",
        "population" : 98123
      },
      {
        "district" : "Hyogo",
        "id" : 1762,
        "countrycode" : "JPN",
        "name" : "Takasago",
        "population" : 97632
      },
      {
        "district" : "Saitama",
        "id" : 1763,
        "countrycode" : "JPN",
        "name" : "Fujimi",
        "population" : 96972
      },
      {
        "district" : "Okinawa",
        "id" : 1764,
        "countrycode" : "JPN",
        "name" : "Urasoe",
        "population" : 96002
      },
      {
        "district" : "Yamagata",
        "id" : 1765,
        "countrycode" : "JPN",
        "name" : "Yonezawa",
        "population" : 95592
      },
      {
        "district" : "Aichi",
        "id" : 1766,
        "countrycode" : "JPN",
        "name" : "Konan",
        "population" : 95521
      },
      {
        "district" : "Nara",
        "id" : 1767,
        "countrycode" : "JPN",
        "name" : "Yamatokoriyama",
        "population" : 95165
      },
      {
        "district" : "Kyoto",
        "id" : 1768,
        "countrycode" : "JPN",
        "name" : "Maizuru",
        "population" : 94784
      },
      {
        "district" : "Hiroshima",
        "id" : 1769,
        "countrycode" : "JPN",
        "name" : "Onomichi",
        "population" : 93756
      },
      {
        "district" : "Saitama",
        "id" : 1770,
        "countrycode" : "JPN",
        "name" : "Higashimatsuyama",
        "population" : 93342
      },
      {
        "district" : "Chiba",
        "id" : 1771,
        "countrycode" : "JPN",
        "name" : "Kimitsu",
        "population" : 93216
      },
      {
        "district" : "Nagasaki",
        "id" : 1772,
        "countrycode" : "JPN",
        "name" : "Isahaya",
        "population" : 93058
      },
      {
        "district" : "Tochigi",
        "id" : 1773,
        "countrycode" : "JPN",
        "name" : "Kanuma",
        "population" : 93053
      },
      {
        "district" : "Osaka",
        "id" : 1774,
        "countrycode" : "JPN",
        "name" : "Izumisano",
        "population" : 92583
      },
      {
        "district" : "Kyoto",
        "id" : 1775,
        "countrycode" : "JPN",
        "name" : "Kameoka",
        "population" : 92398
      },
      {
        "district" : "Chiba",
        "id" : 1776,
        "countrycode" : "JPN",
        "name" : "Mobara",
        "population" : 91664
      },
      {
        "district" : "Chiba",
        "id" : 1777,
        "countrycode" : "JPN",
        "name" : "Narita",
        "population" : 91470
      },
      {
        "district" : "Niigata",
        "id" : 1778,
        "countrycode" : "JPN",
        "name" : "Kashiwazaki",
        "population" : 91229
      },
      {
        "district" : "Okayama",
        "id" : 1779,
        "countrycode" : "JPN",
        "name" : "Tsuyama",
        "population" : 91170
      },
      {
        "district" : "Sanaa",
        "id" : 1780,
        "countrycode" : "YEM",
        "name" : "Sanaa",
        "population" : 503600
      },
      {
        "district" : "Aden",
        "id" : 1781,
        "countrycode" : "YEM",
        "name" : "Aden",
        "population" : 398300
      },
      {
        "district" : "Taizz",
        "id" : 1782,
        "countrycode" : "YEM",
        "name" : "Taizz",
        "population" : 317600
      },
      {
        "district" : "Hodeida",
        "id" : 1783,
        "countrycode" : "YEM",
        "name" : "Hodeida",
        "population" : 298500
      },
      {
        "district" : "Hadramawt",
        "id" : 1784,
        "countrycode" : "YEM",
        "name" : "al-Mukalla",
        "population" : 122400
      },
      {
        "district" : "Ibb",
        "id" : 1785,
        "countrycode" : "YEM",
        "name" : "Ibb",
        "population" : 103300
      },
      {
        "district" : "Amman",
        "id" : 1786,
        "countrycode" : "JOR",
        "name" : "Amman",
        "population" : 1000000
      },
      {
        "district" : "al-Zarqa",
        "id" : 1787,
        "countrycode" : "JOR",
        "name" : "al-Zarqa",
        "population" : 389815
      },
      {
        "district" : "Irbid",
        "id" : 1788,
        "countrycode" : "JOR",
        "name" : "Irbid",
        "population" : 231511
      },
      {
        "district" : "al-Zarqa",
        "id" : 1789,
        "countrycode" : "JOR",
        "name" : "al-Rusayfa",
        "population" : 137247
      },
      {
        "district" : "Amman",
        "id" : 1790,
        "countrycode" : "JOR",
        "name" : "Wadi al-Sir",
        "population" : 89104
      },
      {
        "district" : "ï¿½",
        "id" : 1791,
        "countrycode" : "CXR",
        "name" : "Flying Fish Cove",
        "population" : 700
      },
      {
        "district" : "Central Serbia",
        "id" : 1792,
        "countrycode" : "YUG",
        "name" : "Beograd",
        "population" : 1204000
      },
      {
        "district" : "Vojvodina",
        "id" : 1793,
        "countrycode" : "YUG",
        "name" : "Novi Sad",
        "population" : 179626
      },
      {
        "district" : "Central Serbia",
        "id" : 1794,
        "countrycode" : "YUG",
        "name" : "Niï¿½",
        "population" : 175391
      },
      {
        "district" : "Kosovo and Metohija",
        "id" : 1795,
        "countrycode" : "YUG",
        "name" : "Priï¿½tina",
        "population" : 155496
      },
      {
        "district" : "Central Serbia",
        "id" : 1796,
        "countrycode" : "YUG",
        "name" : "Kragujevac",
        "population" : 147305
      },
      {
        "district" : "Montenegro",
        "id" : 1797,
        "countrycode" : "YUG",
        "name" : "Podgorica",
        "population" : 135000
      },
      {
        "district" : "Vojvodina",
        "id" : 1798,
        "countrycode" : "YUG",
        "name" : "Subotica",
        "population" : 100386
      },
      {
        "district" : "Kosovo and Metohija",
        "id" : 1799,
        "countrycode" : "YUG",
        "name" : "Prizren",
        "population" : 92303
      },
      {
        "district" : "Phnom Penh",
        "id" : 1800,
        "countrycode" : "KHM",
        "name" : "Phnom Penh",
        "population" : 570155
      },
      {
        "district" : "Battambang",
        "id" : 1801,
        "countrycode" : "KHM",
        "name" : "Battambang",
        "population" : 129800
      },
      {
        "district" : "Siem Reap",
        "id" : 1802,
        "countrycode" : "KHM",
        "name" : "Siem Reap",
        "population" : 105100
      },
      {
        "district" : "Littoral",
        "id" : 1803,
        "countrycode" : "CMR",
        "name" : "Douala",
        "population" : 1448300
      },
      {
        "district" : "Centre",
        "id" : 1804,
        "countrycode" : "CMR",
        "name" : "Yaoundï¿½",
        "population" : 1372800
      },
      {
        "district" : "Nord",
        "id" : 1805,
        "countrycode" : "CMR",
        "name" : "Garoua",
        "population" : 177000
      },
      {
        "district" : "Extrï¿½me-Nord",
        "id" : 1806,
        "countrycode" : "CMR",
        "name" : "Maroua",
        "population" : 143000
      },
      {
        "district" : "Nord-Ouest",
        "id" : 1807,
        "countrycode" : "CMR",
        "name" : "Bamenda",
        "population" : 138000
      },
      {
        "district" : "Ouest",
        "id" : 1808,
        "countrycode" : "CMR",
        "name" : "Bafoussam",
        "population" : 131000
      },
      {
        "district" : "Littoral",
        "id" : 1809,
        "countrycode" : "CMR",
        "name" : "Nkongsamba",
        "population" : 112454
      },
      {
        "district" : "Quï¿½bec",
        "id" : 1810,
        "countrycode" : "CAN",
        "name" : "Montrï¿½al",
        "population" : 1016376
      },
      {
        "district" : "Alberta",
        "id" : 1811,
        "countrycode" : "CAN",
        "name" : "Calgary",
        "population" : 768082
      },
      {
        "district" : "Ontario",
        "id" : 1812,
        "countrycode" : "CAN",
        "name" : "Toronto",
        "population" : 688275
      },
      {
        "district" : "Ontario",
        "id" : 1813,
        "countrycode" : "CAN",
        "name" : "North York",
        "population" : 622632
      },
      {
        "district" : "Manitoba",
        "id" : 1814,
        "countrycode" : "CAN",
        "name" : "Winnipeg",
        "population" : 618477
      },
      {
        "district" : "Alberta",
        "id" : 1815,
        "countrycode" : "CAN",
        "name" : "Edmonton",
        "population" : 616306
      },
      {
        "district" : "Ontario",
        "id" : 1816,
        "countrycode" : "CAN",
        "name" : "Mississauga",
        "population" : 608072
      },
      {
        "district" : "Ontario",
        "id" : 1817,
        "countrycode" : "CAN",
        "name" : "Scarborough",
        "population" : 594501
      },
      {
        "district" : "British Colombia",
        "id" : 1818,
        "countrycode" : "CAN",
        "name" : "Vancouver",
        "population" : 514008
      },
      {
        "district" : "Ontario",
        "id" : 1819,
        "countrycode" : "CAN",
        "name" : "Etobicoke",
        "population" : 348845
      },
      {
        "district" : "Ontario",
        "id" : 1820,
        "countrycode" : "CAN",
        "name" : "London",
        "population" : 339917
      },
      {
        "district" : "Ontario",
        "id" : 1821,
        "countrycode" : "CAN",
        "name" : "Hamilton",
        "population" : 335614
      },
      {
        "district" : "Ontario",
        "id" : 1822,
        "countrycode" : "CAN",
        "name" : "Ottawa",
        "population" : 335277
      },
      {
        "district" : "Quï¿½bec",
        "id" : 1823,
        "countrycode" : "CAN",
        "name" : "Laval",
        "population" : 330393
      },
      {
        "district" : "British Colombia",
        "id" : 1824,
        "countrycode" : "CAN",
        "name" : "Surrey",
        "population" : 304477
      },
      {
        "district" : "Ontario",
        "id" : 1825,
        "countrycode" : "CAN",
        "name" : "Brampton",
        "population" : 296711
      },
      {
        "district" : "Ontario",
        "id" : 1826,
        "countrycode" : "CAN",
        "name" : "Windsor",
        "population" : 207588
      },
      {
        "district" : "Saskatchewan",
        "id" : 1827,
        "countrycode" : "CAN",
        "name" : "Saskatoon",
        "population" : 193647
      },
      {
        "district" : "Ontario",
        "id" : 1828,
        "countrycode" : "CAN",
        "name" : "Kitchener",
        "population" : 189959
      },
      {
        "district" : "Ontario",
        "id" : 1829,
        "countrycode" : "CAN",
        "name" : "Markham",
        "population" : 189098
      },
      {
        "district" : "Saskatchewan",
        "id" : 1830,
        "countrycode" : "CAN",
        "name" : "Regina",
        "population" : 180400
      },
      {
        "district" : "British Colombia",
        "id" : 1831,
        "countrycode" : "CAN",
        "name" : "Burnaby",
        "population" : 179209
      },
      {
        "district" : "Quï¿½bec",
        "id" : 1832,
        "countrycode" : "CAN",
        "name" : "Quï¿½bec",
        "population" : 167264
      },
      {
        "district" : "Ontario",
        "id" : 1833,
        "countrycode" : "CAN",
        "name" : "York",
        "population" : 154980
      },
      {
        "district" : "British Colombia",
        "id" : 1834,
        "countrycode" : "CAN",
        "name" : "Richmond",
        "population" : 148867
      },
      {
        "district" : "Ontario",
        "id" : 1835,
        "countrycode" : "CAN",
        "name" : "Vaughan",
        "population" : 147889
      },
      {
        "district" : "Ontario",
        "id" : 1836,
        "countrycode" : "CAN",
        "name" : "Burlington",
        "population" : 145150
      },
      {
        "district" : "Ontario",
        "id" : 1837,
        "countrycode" : "CAN",
        "name" : "Oshawa",
        "population" : 140173
      },
      {
        "district" : "Ontario",
        "id" : 1838,
        "countrycode" : "CAN",
        "name" : "Oakville",
        "population" : 139192
      },
      {
        "district" : "Ontario",
        "id" : 1839,
        "countrycode" : "CAN",
        "name" : "Saint Catharines",
        "population" : 136216
      },
      {
        "district" : "Quï¿½bec",
        "id" : 1840,
        "countrycode" : "CAN",
        "name" : "Longueuil",
        "population" : 127977
      },
      {
        "district" : "Ontario",
        "id" : 1841,
        "countrycode" : "CAN",
        "name" : "Richmond Hill",
        "population" : 116428
      },
      {
        "district" : "Ontario",
        "id" : 1842,
        "countrycode" : "CAN",
        "name" : "Thunder Bay",
        "population" : 115913
      },
      {
        "district" : "Ontario",
        "id" : 1843,
        "countrycode" : "CAN",
        "name" : "Nepean",
        "population" : 115100
      },
      {
        "district" : "Nova Scotia",
        "id" : 1844,
        "countrycode" : "CAN",
        "name" : "Cape Breton",
        "population" : 114733
      },
      {
        "district" : "Ontario",
        "id" : 1845,
        "countrycode" : "CAN",
        "name" : "East York",
        "population" : 114034
      },
      {
        "district" : "Nova Scotia",
        "id" : 1846,
        "countrycode" : "CAN",
        "name" : "Halifax",
        "population" : 113910
      },
      {
        "district" : "Ontario",
        "id" : 1847,
        "countrycode" : "CAN",
        "name" : "Cambridge",
        "population" : 109186
      },
      {
        "district" : "Ontario",
        "id" : 1848,
        "countrycode" : "CAN",
        "name" : "Gloucester",
        "population" : 107314
      },
      {
        "district" : "British Colombia",
        "id" : 1849,
        "countrycode" : "CAN",
        "name" : "Abbotsford",
        "population" : 105403
      },
      {
        "district" : "Ontario",
        "id" : 1850,
        "countrycode" : "CAN",
        "name" : "Guelph",
        "population" : 103593
      },
      {
        "district" : "Newfoundland",
        "id" : 1851,
        "countrycode" : "CAN",
        "name" : "Saint Johnï¿½s",
        "population" : 101936
      },
      {
        "district" : "British Colombia",
        "id" : 1852,
        "countrycode" : "CAN",
        "name" : "Coquitlam",
        "population" : 101820
      },
      {
        "district" : "British Colombia",
        "id" : 1853,
        "countrycode" : "CAN",
        "name" : "Saanich",
        "population" : 101388
      },
      {
        "district" : "Quï¿½bec",
        "id" : 1854,
        "countrycode" : "CAN",
        "name" : "Gatineau",
        "population" : 100702
      },
      {
        "district" : "British Colombia",
        "id" : 1855,
        "countrycode" : "CAN",
        "name" : "Delta",
        "population" : 95411
      },
      {
        "district" : "Ontario",
        "id" : 1856,
        "countrycode" : "CAN",
        "name" : "Sudbury",
        "population" : 92686
      },
      {
        "district" : "British Colombia",
        "id" : 1857,
        "countrycode" : "CAN",
        "name" : "Kelowna",
        "population" : 89442
      },
      {
        "district" : "Ontario",
        "id" : 1858,
        "countrycode" : "CAN",
        "name" : "Barrie",
        "population" : 89269
      },
      {
        "district" : "Sï¿½o Tiago",
        "id" : 1859,
        "countrycode" : "CPV",
        "name" : "Praia",
        "population" : 94800
      },
      {
        "district" : "Almaty Qalasy",
        "id" : 1860,
        "countrycode" : "KAZ",
        "name" : "Almaty",
        "population" : 1129400
      },
      {
        "district" : "Qaraghandy",
        "id" : 1861,
        "countrycode" : "KAZ",
        "name" : "Qaraghandy",
        "population" : 436900
      },
      {
        "district" : "South Kazakstan",
        "id" : 1862,
        "countrycode" : "KAZ",
        "name" : "Shymkent",
        "population" : 360100
      },
      {
        "district" : "Taraz",
        "id" : 1863,
        "countrycode" : "KAZ",
        "name" : "Taraz",
        "population" : 330100
      },
      {
        "district" : "Astana",
        "id" : 1864,
        "countrycode" : "KAZ",
        "name" : "Astana",
        "population" : 311200
      },
      {
        "district" : "East Kazakstan",
        "id" : 1865,
        "countrycode" : "KAZ",
        "name" : "ï¿½skemen",
        "population" : 311000
      },
      {
        "district" : "Pavlodar",
        "id" : 1866,
        "countrycode" : "KAZ",
        "name" : "Pavlodar",
        "population" : 300500
      },
      {
        "district" : "East Kazakstan",
        "id" : 1867,
        "countrycode" : "KAZ",
        "name" : "Semey",
        "population" : 269600
      },
      {
        "district" : "Aqtï¿½be",
        "id" : 1868,
        "countrycode" : "KAZ",
        "name" : "Aqtï¿½be",
        "population" : 253100
      },
      {
        "district" : "Qostanay",
        "id" : 1869,
        "countrycode" : "KAZ",
        "name" : "Qostanay",
        "population" : 221400
      },
      {
        "district" : "North Kazakstan",
        "id" : 1870,
        "countrycode" : "KAZ",
        "name" : "Petropavl",
        "population" : 203500
      },
      {
        "district" : "West Kazakstan",
        "id" : 1871,
        "countrycode" : "KAZ",
        "name" : "Oral",
        "population" : 195500
      },
      {
        "district" : "Qaraghandy",
        "id" : 1872,
        "countrycode" : "KAZ",
        "name" : "Temirtau",
        "population" : 170500
      },
      {
        "district" : "Qyzylorda",
        "id" : 1873,
        "countrycode" : "KAZ",
        "name" : "Qyzylorda",
        "population" : 157400
      },
      {
        "district" : "Mangghystau",
        "id" : 1874,
        "countrycode" : "KAZ",
        "name" : "Aqtau",
        "population" : 143400
      },
      {
        "district" : "Atyrau",
        "id" : 1875,
        "countrycode" : "KAZ",
        "name" : "Atyrau",
        "population" : 142500
      },
      {
        "district" : "Pavlodar",
        "id" : 1876,
        "countrycode" : "KAZ",
        "name" : "Ekibastuz",
        "population" : 127200
      },
      {
        "district" : "North Kazakstan",
        "id" : 1877,
        "countrycode" : "KAZ",
        "name" : "Kï¿½kshetau",
        "population" : 123400
      },
      {
        "district" : "Qostanay",
        "id" : 1878,
        "countrycode" : "KAZ",
        "name" : "Rudnyy",
        "population" : 109500
      },
      {
        "district" : "Almaty",
        "id" : 1879,
        "countrycode" : "KAZ",
        "name" : "Taldyqorghan",
        "population" : 98000
      },
      {
        "district" : "Qaraghandy",
        "id" : 1880,
        "countrycode" : "KAZ",
        "name" : "Zhezqazghan",
        "population" : 90000
      },
      {
        "district" : "Nairobi",
        "id" : 1881,
        "countrycode" : "KEN",
        "name" : "Nairobi",
        "population" : 2290000
      },
      {
        "district" : "Coast",
        "id" : 1882,
        "countrycode" : "KEN",
        "name" : "Mombasa",
        "population" : 461753
      },
      {
        "district" : "Nyanza",
        "id" : 1883,
        "countrycode" : "KEN",
        "name" : "Kisumu",
        "population" : 192733
      },
      {
        "district" : "Rift Valley",
        "id" : 1884,
        "countrycode" : "KEN",
        "name" : "Nakuru",
        "population" : 163927
      },
      {
        "district" : "Eastern",
        "id" : 1885,
        "countrycode" : "KEN",
        "name" : "Machakos",
        "population" : 116293
      },
      {
        "district" : "Rift Valley",
        "id" : 1886,
        "countrycode" : "KEN",
        "name" : "Eldoret",
        "population" : 111882
      },
      {
        "district" : "Eastern",
        "id" : 1887,
        "countrycode" : "KEN",
        "name" : "Meru",
        "population" : 94947
      },
      {
        "district" : "Central",
        "id" : 1888,
        "countrycode" : "KEN",
        "name" : "Nyeri",
        "population" : 91258
      },
      {
        "district" : "Bangui",
        "id" : 1889,
        "countrycode" : "CAF",
        "name" : "Bangui",
        "population" : 524000
      },
      {
        "district" : "Shanghai",
        "id" : 1890,
        "countrycode" : "CHN",
        "name" : "Shanghai",
        "population" : 9696300
      },
      {
        "district" : "Peking",
        "id" : 1891,
        "countrycode" : "CHN",
        "name" : "Peking",
        "population" : 7472000
      },
      {
        "district" : "Chongqing",
        "id" : 1892,
        "countrycode" : "CHN",
        "name" : "Chongqing",
        "population" : 6351600
      },
      {
        "district" : "Tianjin",
        "id" : 1893,
        "countrycode" : "CHN",
        "name" : "Tianjin",
        "population" : 5286800
      },
      {
        "district" : "Hubei",
        "id" : 1894,
        "countrycode" : "CHN",
        "name" : "Wuhan",
        "population" : 4344600
      },
      {
        "district" : "Heilongjiang",
        "id" : 1895,
        "countrycode" : "CHN",
        "name" : "Harbin",
        "population" : 4289800
      },
      {
        "district" : "Liaoning",
        "id" : 1896,
        "countrycode" : "CHN",
        "name" : "Shenyang",
        "population" : 4265200
      },
      {
        "district" : "Guangdong",
        "id" : 1897,
        "countrycode" : "CHN",
        "name" : "Kanton [Guangzhou]",
        "population" : 4256300
      },
      {
        "district" : "Sichuan",
        "id" : 1898,
        "countrycode" : "CHN",
        "name" : "Chengdu",
        "population" : 3361500
      },
      {
        "district" : "Jiangsu",
        "id" : 1899,
        "countrycode" : "CHN",
        "name" : "Nanking [Nanjing]",
        "population" : 2870300
      },
      {
        "district" : "Jilin",
        "id" : 1900,
        "countrycode" : "CHN",
        "name" : "Changchun",
        "population" : 2812000
      },
      {
        "district" : "Shaanxi",
        "id" : 1901,
        "countrycode" : "CHN",
        "name" : "Xiï¿½an",
        "population" : 2761400
      },
      {
        "district" : "Liaoning",
        "id" : 1902,
        "countrycode" : "CHN",
        "name" : "Dalian",
        "population" : 2697000
      },
      {
        "district" : "Shandong",
        "id" : 1903,
        "countrycode" : "CHN",
        "name" : "Qingdao",
        "population" : 2596000
      },
      {
        "district" : "Shandong",
        "id" : 1904,
        "countrycode" : "CHN",
        "name" : "Jinan",
        "population" : 2278100
      },
      {
        "district" : "Zhejiang",
        "id" : 1905,
        "countrycode" : "CHN",
        "name" : "Hangzhou",
        "population" : 2190500
      },
      {
        "district" : "Henan",
        "id" : 1906,
        "countrycode" : "CHN",
        "name" : "Zhengzhou",
        "population" : 2107200
      },
      {
        "district" : "Hebei",
        "id" : 1907,
        "countrycode" : "CHN",
        "name" : "Shijiazhuang",
        "population" : 2041500
      },
      {
        "district" : "Shanxi",
        "id" : 1908,
        "countrycode" : "CHN",
        "name" : "Taiyuan",
        "population" : 1968400
      },
      {
        "district" : "Yunnan",
        "id" : 1909,
        "countrycode" : "CHN",
        "name" : "Kunming",
        "population" : 1829500
      },
      {
        "district" : "Hunan",
        "id" : 1910,
        "countrycode" : "CHN",
        "name" : "Changsha",
        "population" : 1809800
      },
      {
        "district" : "Jiangxi",
        "id" : 1911,
        "countrycode" : "CHN",
        "name" : "Nanchang",
        "population" : 1691600
      },
      {
        "district" : "Fujian",
        "id" : 1912,
        "countrycode" : "CHN",
        "name" : "Fuzhou",
        "population" : 1593800
      },
      {
        "district" : "Gansu",
        "id" : 1913,
        "countrycode" : "CHN",
        "name" : "Lanzhou",
        "population" : 1565800
      },
      {
        "district" : "Guizhou",
        "id" : 1914,
        "countrycode" : "CHN",
        "name" : "Guiyang",
        "population" : 1465200
      },
      {
        "district" : "Zhejiang",
        "id" : 1915,
        "countrycode" : "CHN",
        "name" : "Ningbo",
        "population" : 1371200
      },
      {
        "district" : "Anhui",
        "id" : 1916,
        "countrycode" : "CHN",
        "name" : "Hefei",
        "population" : 1369100
      },
      {
        "district" : "Xinxiang",
        "id" : 1917,
        "countrycode" : "CHN",
        "name" : "Urumtï¿½i [ï¿½rï¿½mqi]",
        "population" : 1310100
      },
      {
        "district" : "Liaoning",
        "id" : 1918,
        "countrycode" : "CHN",
        "name" : "Anshan",
        "population" : 1200000
      },
      {
        "district" : "Liaoning",
        "id" : 1919,
        "countrycode" : "CHN",
        "name" : "Fushun",
        "population" : 1200000
      },
      {
        "district" : "Guangxi",
        "id" : 1920,
        "countrycode" : "CHN",
        "name" : "Nanning",
        "population" : 1161800
      },
      {
        "district" : "Shandong",
        "id" : 1921,
        "countrycode" : "CHN",
        "name" : "Zibo",
        "population" : 1140000
      },
      {
        "district" : "Heilongjiang",
        "id" : 1922,
        "countrycode" : "CHN",
        "name" : "Qiqihar",
        "population" : 1070000
      },
      {
        "district" : "Jilin",
        "id" : 1923,
        "countrycode" : "CHN",
        "name" : "Jilin",
        "population" : 1040000
      },
      {
        "district" : "Hebei",
        "id" : 1924,
        "countrycode" : "CHN",
        "name" : "Tangshan",
        "population" : 1040000
      },
      {
        "district" : "Inner Mongolia",
        "id" : 1925,
        "countrycode" : "CHN",
        "name" : "Baotou",
        "population" : 980000
      },
      {
        "district" : "Guangdong",
        "id" : 1926,
        "countrycode" : "CHN",
        "name" : "Shenzhen",
        "population" : 950500
      },
      {
        "district" : "Inner Mongolia",
        "id" : 1927,
        "countrycode" : "CHN",
        "name" : "Hohhot",
        "population" : 916700
      },
      {
        "district" : "Hebei",
        "id" : 1928,
        "countrycode" : "CHN",
        "name" : "Handan",
        "population" : 840000
      },
      {
        "district" : "Jiangsu",
        "id" : 1929,
        "countrycode" : "CHN",
        "name" : "Wuxi",
        "population" : 830000
      },
      {
        "district" : "Jiangsu",
        "id" : 1930,
        "countrycode" : "CHN",
        "name" : "Xuzhou",
        "population" : 810000
      },
      {
        "district" : "Shanxi",
        "id" : 1931,
        "countrycode" : "CHN",
        "name" : "Datong",
        "population" : 800000
      },
      {
        "district" : "Heilongjiang",
        "id" : 1932,
        "countrycode" : "CHN",
        "name" : "Yichun",
        "population" : 800000
      },
      {
        "district" : "Liaoning",
        "id" : 1933,
        "countrycode" : "CHN",
        "name" : "Benxi",
        "population" : 770000
      },
      {
        "district" : "Henan",
        "id" : 1934,
        "countrycode" : "CHN",
        "name" : "Luoyang",
        "population" : 760000
      },
      {
        "district" : "Jiangsu",
        "id" : 1935,
        "countrycode" : "CHN",
        "name" : "Suzhou",
        "population" : 710000
      },
      {
        "district" : "Qinghai",
        "id" : 1936,
        "countrycode" : "CHN",
        "name" : "Xining",
        "population" : 700200
      },
      {
        "district" : "Anhui",
        "id" : 1937,
        "countrycode" : "CHN",
        "name" : "Huainan",
        "population" : 700000
      },
      {
        "district" : "Heilongjiang",
        "id" : 1938,
        "countrycode" : "CHN",
        "name" : "Jixi",
        "population" : 683885
      },
      {
        "district" : "Heilongjiang",
        "id" : 1939,
        "countrycode" : "CHN",
        "name" : "Daqing",
        "population" : 660000
      },
      {
        "district" : "Liaoning",
        "id" : 1940,
        "countrycode" : "CHN",
        "name" : "Fuxin",
        "population" : 640000
      },
      {
        "district" : "Fujian",
        "id" : 1941,
        "countrycode" : "CHN",
        "name" : "Amoy [Xiamen]",
        "population" : 627500
      },
      {
        "district" : "Guangxi",
        "id" : 1942,
        "countrycode" : "CHN",
        "name" : "Liuzhou",
        "population" : 610000
      },
      {
        "district" : "Guangdong",
        "id" : 1943,
        "countrycode" : "CHN",
        "name" : "Shantou",
        "population" : 580000
      },
      {
        "district" : "Liaoning",
        "id" : 1944,
        "countrycode" : "CHN",
        "name" : "Jinzhou",
        "population" : 570000
      },
      {
        "district" : "Heilongjiang",
        "id" : 1945,
        "countrycode" : "CHN",
        "name" : "Mudanjiang",
        "population" : 570000
      },
      {
        "district" : "Ningxia",
        "id" : 1946,
        "countrycode" : "CHN",
        "name" : "Yinchuan",
        "population" : 544500
      },
      {
        "district" : "Jiangsu",
        "id" : 1947,
        "countrycode" : "CHN",
        "name" : "Changzhou",
        "population" : 530000
      },
      {
        "district" : "Hebei",
        "id" : 1948,
        "countrycode" : "CHN",
        "name" : "Zhangjiakou",
        "population" : 530000
      },
      {
        "district" : "Liaoning",
        "id" : 1949,
        "countrycode" : "CHN",
        "name" : "Dandong",
        "population" : 520000
      },
      {
        "district" : "Heilongjiang",
        "id" : 1950,
        "countrycode" : "CHN",
        "name" : "Hegang",
        "population" : 520000
      },
      {
        "district" : "Henan",
        "id" : 1951,
        "countrycode" : "CHN",
        "name" : "Kaifeng",
        "population" : 510000
      },
      {
        "district" : "Heilongjiang",
        "id" : 1952,
        "countrycode" : "CHN",
        "name" : "Jiamusi",
        "population" : 493409
      },
      {
        "district" : "Liaoning",
        "id" : 1953,
        "countrycode" : "CHN",
        "name" : "Liaoyang",
        "population" : 492559
      },
      {
        "district" : "Hunan",
        "id" : 1954,
        "countrycode" : "CHN",
        "name" : "Hengyang",
        "population" : 487148
      },
      {
        "district" : "Hebei",
        "id" : 1955,
        "countrycode" : "CHN",
        "name" : "Baoding",
        "population" : 483155
      },
      {
        "district" : "Jilin",
        "id" : 1956,
        "countrycode" : "CHN",
        "name" : "Hunjiang",
        "population" : 482043
      },
      {
        "district" : "Henan",
        "id" : 1957,
        "countrycode" : "CHN",
        "name" : "Xinxiang",
        "population" : 473762
      },
      {
        "district" : "Hubei",
        "id" : 1958,
        "countrycode" : "CHN",
        "name" : "Huangshi",
        "population" : 457601
      },
      {
        "district" : "Hainan",
        "id" : 1959,
        "countrycode" : "CHN",
        "name" : "Haikou",
        "population" : 454300
      },
      {
        "district" : "Shandong",
        "id" : 1960,
        "countrycode" : "CHN",
        "name" : "Yantai",
        "population" : 452127
      },
      {
        "district" : "Anhui",
        "id" : 1961,
        "countrycode" : "CHN",
        "name" : "Bengbu",
        "population" : 449245
      },
      {
        "district" : "Hunan",
        "id" : 1962,
        "countrycode" : "CHN",
        "name" : "Xiangtan",
        "population" : 441968
      },
      {
        "district" : "Shandong",
        "id" : 1963,
        "countrycode" : "CHN",
        "name" : "Weifang",
        "population" : 428522
      },
      {
        "district" : "Anhui",
        "id" : 1964,
        "countrycode" : "CHN",
        "name" : "Wuhu",
        "population" : 425740
      },
      {
        "district" : "Jiangxi",
        "id" : 1965,
        "countrycode" : "CHN",
        "name" : "Pingxiang",
        "population" : 425579
      },
      {
        "district" : "Liaoning",
        "id" : 1966,
        "countrycode" : "CHN",
        "name" : "Yingkou",
        "population" : 421589
      },
      {
        "district" : "Henan",
        "id" : 1967,
        "countrycode" : "CHN",
        "name" : "Anyang",
        "population" : 420332
      },
      {
        "district" : "Sichuan",
        "id" : 1968,
        "countrycode" : "CHN",
        "name" : "Panzhihua",
        "population" : 415466
      },
      {
        "district" : "Henan",
        "id" : 1969,
        "countrycode" : "CHN",
        "name" : "Pingdingshan",
        "population" : 410775
      },
      {
        "district" : "Hubei",
        "id" : 1970,
        "countrycode" : "CHN",
        "name" : "Xiangfan",
        "population" : 410407
      },
      {
        "district" : "Hunan",
        "id" : 1971,
        "countrycode" : "CHN",
        "name" : "Zhuzhou",
        "population" : 409924
      },
      {
        "district" : "Henan",
        "id" : 1972,
        "countrycode" : "CHN",
        "name" : "Jiaozuo",
        "population" : 409100
      },
      {
        "district" : "Zhejiang",
        "id" : 1973,
        "countrycode" : "CHN",
        "name" : "Wenzhou",
        "population" : 401871
      },
      {
        "district" : "Guangdong",
        "id" : 1974,
        "countrycode" : "CHN",
        "name" : "Zhangjiang",
        "population" : 400997
      },
      {
        "district" : "Sichuan",
        "id" : 1975,
        "countrycode" : "CHN",
        "name" : "Zigong",
        "population" : 393184
      },
      {
        "district" : "Heilongjiang",
        "id" : 1976,
        "countrycode" : "CHN",
        "name" : "Shuangyashan",
        "population" : 386081
      },
      {
        "district" : "Shandong",
        "id" : 1977,
        "countrycode" : "CHN",
        "name" : "Zaozhuang",
        "population" : 380846
      },
      {
        "district" : "Inner Mongolia",
        "id" : 1978,
        "countrycode" : "CHN",
        "name" : "Yakeshi",
        "population" : 377869
      },
      {
        "district" : "Hubei",
        "id" : 1979,
        "countrycode" : "CHN",
        "name" : "Yichang",
        "population" : 371601
      },
      {
        "district" : "Jiangsu",
        "id" : 1980,
        "countrycode" : "CHN",
        "name" : "Zhenjiang",
        "population" : 368316
      },
      {
        "district" : "Anhui",
        "id" : 1981,
        "countrycode" : "CHN",
        "name" : "Huaibei",
        "population" : 366549
      },
      {
        "district" : "Hebei",
        "id" : 1982,
        "countrycode" : "CHN",
        "name" : "Qinhuangdao",
        "population" : 364972
      },
      {
        "district" : "Guangxi",
        "id" : 1983,
        "countrycode" : "CHN",
        "name" : "Guilin",
        "population" : 364130
      },
      {
        "district" : "Guizhou",
        "id" : 1984,
        "countrycode" : "CHN",
        "name" : "Liupanshui",
        "population" : 363954
      },
      {
        "district" : "Liaoning",
        "id" : 1985,
        "countrycode" : "CHN",
        "name" : "Panjin",
        "population" : 362773
      },
      {
        "district" : "Shanxi",
        "id" : 1986,
        "countrycode" : "CHN",
        "name" : "Yangquan",
        "population" : 362268
      },
      {
        "district" : "Liaoning",
        "id" : 1987,
        "countrycode" : "CHN",
        "name" : "Jinxi",
        "population" : 357052
      },
      {
        "district" : "Jilin",
        "id" : 1988,
        "countrycode" : "CHN",
        "name" : "Liaoyuan",
        "population" : 354141
      },
      {
        "district" : "Jiangsu",
        "id" : 1989,
        "countrycode" : "CHN",
        "name" : "Lianyungang",
        "population" : 354139
      },
      {
        "district" : "Shaanxi",
        "id" : 1990,
        "countrycode" : "CHN",
        "name" : "Xianyang",
        "population" : 352125
      },
      {
        "district" : "Shandong",
        "id" : 1991,
        "countrycode" : "CHN",
        "name" : "Taiï¿½an",
        "population" : 350696
      },
      {
        "district" : "Inner Mongolia",
        "id" : 1992,
        "countrycode" : "CHN",
        "name" : "Chifeng",
        "population" : 350077
      },
      {
        "district" : "Guangdong",
        "id" : 1993,
        "countrycode" : "CHN",
        "name" : "Shaoguan",
        "population" : 350043
      },
      {
        "district" : "Jiangsu",
        "id" : 1994,
        "countrycode" : "CHN",
        "name" : "Nantong",
        "population" : 343341
      },
      {
        "district" : "Sichuan",
        "id" : 1995,
        "countrycode" : "CHN",
        "name" : "Leshan",
        "population" : 341128
      },
      {
        "district" : "Shaanxi",
        "id" : 1996,
        "countrycode" : "CHN",
        "name" : "Baoji",
        "population" : 337765
      },
      {
        "district" : "Shandong",
        "id" : 1997,
        "countrycode" : "CHN",
        "name" : "Linyi",
        "population" : 324720
      },
      {
        "district" : "Jilin",
        "id" : 1998,
        "countrycode" : "CHN",
        "name" : "Tonghua",
        "population" : 324600
      },
      {
        "district" : "Jilin",
        "id" : 1999,
        "countrycode" : "CHN",
        "name" : "Siping",
        "population" : 317223
      },
      {
        "district" : "Shanxi",
        "id" : 2000,
        "countrycode" : "CHN",
        "name" : "Changzhi",
        "population" : 317144
      },
      {
        "district" : "Shandong",
        "id" : 2001,
        "countrycode" : "CHN",
        "name" : "Tengzhou",
        "population" : 315083
      },
      {
        "district" : "Guangdong",
        "id" : 2002,
        "countrycode" : "CHN",
        "name" : "Chaozhou",
        "population" : 313469
      },
      {
        "district" : "Jiangsu",
        "id" : 2003,
        "countrycode" : "CHN",
        "name" : "Yangzhou",
        "population" : 312892
      },
      {
        "district" : "Guangdong",
        "id" : 2004,
        "countrycode" : "CHN",
        "name" : "Dongwan",
        "population" : 308669
      },
      {
        "district" : "Anhui",
        "id" : 2005,
        "countrycode" : "CHN",
        "name" : "Maï¿½anshan",
        "population" : 305421
      },
      {
        "district" : "Guangdong",
        "id" : 2006,
        "countrycode" : "CHN",
        "name" : "Foshan",
        "population" : 303160
      },
      {
        "district" : "Hunan",
        "id" : 2007,
        "countrycode" : "CHN",
        "name" : "Yueyang",
        "population" : 302800
      },
      {
        "district" : "Hebei",
        "id" : 2008,
        "countrycode" : "CHN",
        "name" : "Xingtai",
        "population" : 302789
      },
      {
        "district" : "Hunan",
        "id" : 2009,
        "countrycode" : "CHN",
        "name" : "Changde",
        "population" : 301276
      },
      {
        "district" : "Xinxiang",
        "id" : 2010,
        "countrycode" : "CHN",
        "name" : "Shihezi",
        "population" : 299676
      },
      {
        "district" : "Jiangsu",
        "id" : 2011,
        "countrycode" : "CHN",
        "name" : "Yancheng",
        "population" : 296831
      },
      {
        "district" : "Jiangxi",
        "id" : 2012,
        "countrycode" : "CHN",
        "name" : "Jiujiang",
        "population" : 291187
      },
      {
        "district" : "Shandong",
        "id" : 2013,
        "countrycode" : "CHN",
        "name" : "Dongying",
        "population" : 281728
      },
      {
        "district" : "Hubei",
        "id" : 2014,
        "countrycode" : "CHN",
        "name" : "Shashi",
        "population" : 281352
      },
      {
        "district" : "Shandong",
        "id" : 2015,
        "countrycode" : "CHN",
        "name" : "Xintai",
        "population" : 281248
      },
      {
        "district" : "Jiangxi",
        "id" : 2016,
        "countrycode" : "CHN",
        "name" : "Jingdezhen",
        "population" : 281183
      },
      {
        "district" : "Shaanxi",
        "id" : 2017,
        "countrycode" : "CHN",
        "name" : "Tongchuan",
        "population" : 280657
      },
      {
        "district" : "Guangdong",
        "id" : 2018,
        "countrycode" : "CHN",
        "name" : "Zhongshan",
        "population" : 278829
      },
      {
        "district" : "Hubei",
        "id" : 2019,
        "countrycode" : "CHN",
        "name" : "Shiyan",
        "population" : 273786
      },
      {
        "district" : "Heilongjiang",
        "id" : 2020,
        "countrycode" : "CHN",
        "name" : "Tieli",
        "population" : 265683
      },
      {
        "district" : "Shandong",
        "id" : 2021,
        "countrycode" : "CHN",
        "name" : "Jining",
        "population" : 265248
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2022,
        "countrycode" : "CHN",
        "name" : "Wuhai",
        "population" : 264081
      },
      {
        "district" : "Sichuan",
        "id" : 2023,
        "countrycode" : "CHN",
        "name" : "Mianyang",
        "population" : 262947
      },
      {
        "district" : "Sichuan",
        "id" : 2024,
        "countrycode" : "CHN",
        "name" : "Luzhou",
        "population" : 262892
      },
      {
        "district" : "Guizhou",
        "id" : 2025,
        "countrycode" : "CHN",
        "name" : "Zunyi",
        "population" : 261862
      },
      {
        "district" : "Ningxia",
        "id" : 2026,
        "countrycode" : "CHN",
        "name" : "Shizuishan",
        "population" : 257862
      },
      {
        "district" : "Sichuan",
        "id" : 2027,
        "countrycode" : "CHN",
        "name" : "Neijiang",
        "population" : 256012
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2028,
        "countrycode" : "CHN",
        "name" : "Tongliao",
        "population" : 255129
      },
      {
        "district" : "Liaoning",
        "id" : 2029,
        "countrycode" : "CHN",
        "name" : "Tieling",
        "population" : 254842
      },
      {
        "district" : "Liaoning",
        "id" : 2030,
        "countrycode" : "CHN",
        "name" : "Wafangdian",
        "population" : 251733
      },
      {
        "district" : "Anhui",
        "id" : 2031,
        "countrycode" : "CHN",
        "name" : "Anqing",
        "population" : 250718
      },
      {
        "district" : "Hunan",
        "id" : 2032,
        "countrycode" : "CHN",
        "name" : "Shaoyang",
        "population" : 247227
      },
      {
        "district" : "Shandong",
        "id" : 2033,
        "countrycode" : "CHN",
        "name" : "Laiwu",
        "population" : 246833
      },
      {
        "district" : "Hebei",
        "id" : 2034,
        "countrycode" : "CHN",
        "name" : "Chengde",
        "population" : 246799
      },
      {
        "district" : "Gansu",
        "id" : 2035,
        "countrycode" : "CHN",
        "name" : "Tianshui",
        "population" : 244974
      },
      {
        "district" : "Henan",
        "id" : 2036,
        "countrycode" : "CHN",
        "name" : "Nanyang",
        "population" : 243303
      },
      {
        "district" : "Hebei",
        "id" : 2037,
        "countrycode" : "CHN",
        "name" : "Cangzhou",
        "population" : 242708
      },
      {
        "district" : "Sichuan",
        "id" : 2038,
        "countrycode" : "CHN",
        "name" : "Yibin",
        "population" : 241019
      },
      {
        "district" : "Jiangsu",
        "id" : 2039,
        "countrycode" : "CHN",
        "name" : "Huaiyin",
        "population" : 239675
      },
      {
        "district" : "Jilin",
        "id" : 2040,
        "countrycode" : "CHN",
        "name" : "Dunhua",
        "population" : 235100
      },
      {
        "district" : "Jilin",
        "id" : 2041,
        "countrycode" : "CHN",
        "name" : "Yanji",
        "population" : 230892
      },
      {
        "district" : "Guangdong",
        "id" : 2042,
        "countrycode" : "CHN",
        "name" : "Jiangmen",
        "population" : 230587
      },
      {
        "district" : "Anhui",
        "id" : 2043,
        "countrycode" : "CHN",
        "name" : "Tongling",
        "population" : 228017
      },
      {
        "district" : "Heilongjiang",
        "id" : 2044,
        "countrycode" : "CHN",
        "name" : "Suihua",
        "population" : 227881
      },
      {
        "district" : "Jilin",
        "id" : 2045,
        "countrycode" : "CHN",
        "name" : "Gongziling",
        "population" : 226569
      },
      {
        "district" : "Hubei",
        "id" : 2046,
        "countrycode" : "CHN",
        "name" : "Xiantao",
        "population" : 222884
      },
      {
        "district" : "Liaoning",
        "id" : 2047,
        "countrycode" : "CHN",
        "name" : "Chaoyang",
        "population" : 222394
      },
      {
        "district" : "Jiangxi",
        "id" : 2048,
        "countrycode" : "CHN",
        "name" : "Ganzhou",
        "population" : 220129
      },
      {
        "district" : "Zhejiang",
        "id" : 2049,
        "countrycode" : "CHN",
        "name" : "Huzhou",
        "population" : 218071
      },
      {
        "district" : "Jilin",
        "id" : 2050,
        "countrycode" : "CHN",
        "name" : "Baicheng",
        "population" : 217987
      },
      {
        "district" : "Heilongjiang",
        "id" : 2051,
        "countrycode" : "CHN",
        "name" : "Shangzi",
        "population" : 215373
      },
      {
        "district" : "Guangdong",
        "id" : 2052,
        "countrycode" : "CHN",
        "name" : "Yangjiang",
        "population" : 215196
      },
      {
        "district" : "Heilongjiang",
        "id" : 2053,
        "countrycode" : "CHN",
        "name" : "Qitaihe",
        "population" : 214957
      },
      {
        "district" : "Yunnan",
        "id" : 2054,
        "countrycode" : "CHN",
        "name" : "Gejiu",
        "population" : 214294
      },
      {
        "district" : "Jiangsu",
        "id" : 2055,
        "countrycode" : "CHN",
        "name" : "Jiangyin",
        "population" : 213659
      },
      {
        "district" : "Henan",
        "id" : 2056,
        "countrycode" : "CHN",
        "name" : "Hebi",
        "population" : 212976
      },
      {
        "district" : "Zhejiang",
        "id" : 2057,
        "countrycode" : "CHN",
        "name" : "Jiaxing",
        "population" : 211526
      },
      {
        "district" : "Guangxi",
        "id" : 2058,
        "countrycode" : "CHN",
        "name" : "Wuzhou",
        "population" : 210452
      },
      {
        "district" : "Jilin",
        "id" : 2059,
        "countrycode" : "CHN",
        "name" : "Meihekou",
        "population" : 209038
      },
      {
        "district" : "Henan",
        "id" : 2060,
        "countrycode" : "CHN",
        "name" : "Xuchang",
        "population" : 208815
      },
      {
        "district" : "Shandong",
        "id" : 2061,
        "countrycode" : "CHN",
        "name" : "Liaocheng",
        "population" : 207844
      },
      {
        "district" : "Liaoning",
        "id" : 2062,
        "countrycode" : "CHN",
        "name" : "Haicheng",
        "population" : 205560
      },
      {
        "district" : "Hubei",
        "id" : 2063,
        "countrycode" : "CHN",
        "name" : "Qianjiang",
        "population" : 205504
      },
      {
        "district" : "Gansu",
        "id" : 2064,
        "countrycode" : "CHN",
        "name" : "Baiyin",
        "population" : 204970
      },
      {
        "district" : "Heilongjiang",
        "id" : 2065,
        "countrycode" : "CHN",
        "name" : "Beiï¿½an",
        "population" : 204899
      },
      {
        "district" : "Jiangsu",
        "id" : 2066,
        "countrycode" : "CHN",
        "name" : "Yixing",
        "population" : 200824
      },
      {
        "district" : "Shandong",
        "id" : 2067,
        "countrycode" : "CHN",
        "name" : "Laizhou",
        "population" : 198664
      },
      {
        "district" : "Xinxiang",
        "id" : 2068,
        "countrycode" : "CHN",
        "name" : "Qaramay",
        "population" : 197602
      },
      {
        "district" : "Heilongjiang",
        "id" : 2069,
        "countrycode" : "CHN",
        "name" : "Acheng",
        "population" : 197595
      },
      {
        "district" : "Shandong",
        "id" : 2070,
        "countrycode" : "CHN",
        "name" : "Dezhou",
        "population" : 195485
      },
      {
        "district" : "Fujian",
        "id" : 2071,
        "countrycode" : "CHN",
        "name" : "Nanping",
        "population" : 195064
      },
      {
        "district" : "Guangdong",
        "id" : 2072,
        "countrycode" : "CHN",
        "name" : "Zhaoqing",
        "population" : 194784
      },
      {
        "district" : "Liaoning",
        "id" : 2073,
        "countrycode" : "CHN",
        "name" : "Beipiao",
        "population" : 194301
      },
      {
        "district" : "Jiangxi",
        "id" : 2074,
        "countrycode" : "CHN",
        "name" : "Fengcheng",
        "population" : 193784
      },
      {
        "district" : "Jilin",
        "id" : 2075,
        "countrycode" : "CHN",
        "name" : "Fuyu",
        "population" : 192981
      },
      {
        "district" : "Henan",
        "id" : 2076,
        "countrycode" : "CHN",
        "name" : "Xinyang",
        "population" : 192509
      },
      {
        "district" : "Jiangsu",
        "id" : 2077,
        "countrycode" : "CHN",
        "name" : "Dongtai",
        "population" : 192247
      },
      {
        "district" : "Shanxi",
        "id" : 2078,
        "countrycode" : "CHN",
        "name" : "Yuci",
        "population" : 191356
      },
      {
        "district" : "Hubei",
        "id" : 2079,
        "countrycode" : "CHN",
        "name" : "Honghu",
        "population" : 190772
      },
      {
        "district" : "Hubei",
        "id" : 2080,
        "countrycode" : "CHN",
        "name" : "Ezhou",
        "population" : 190123
      },
      {
        "district" : "Shandong",
        "id" : 2081,
        "countrycode" : "CHN",
        "name" : "Heze",
        "population" : 189293
      },
      {
        "district" : "Sichuan",
        "id" : 2082,
        "countrycode" : "CHN",
        "name" : "Daxian",
        "population" : 188101
      },
      {
        "district" : "Shanxi",
        "id" : 2083,
        "countrycode" : "CHN",
        "name" : "Linfen",
        "population" : 187309
      },
      {
        "district" : "Hubei",
        "id" : 2084,
        "countrycode" : "CHN",
        "name" : "Tianmen",
        "population" : 186332
      },
      {
        "district" : "Hunan",
        "id" : 2085,
        "countrycode" : "CHN",
        "name" : "Yiyang",
        "population" : 185818
      },
      {
        "district" : "Fujian",
        "id" : 2086,
        "countrycode" : "CHN",
        "name" : "Quanzhou",
        "population" : 185154
      },
      {
        "district" : "Shandong",
        "id" : 2087,
        "countrycode" : "CHN",
        "name" : "Rizhao",
        "population" : 185048
      },
      {
        "district" : "Sichuan",
        "id" : 2088,
        "countrycode" : "CHN",
        "name" : "Deyang",
        "population" : 182488
      },
      {
        "district" : "Sichuan",
        "id" : 2089,
        "countrycode" : "CHN",
        "name" : "Guangyuan",
        "population" : 182241
      },
      {
        "district" : "Jiangsu",
        "id" : 2090,
        "countrycode" : "CHN",
        "name" : "Changshu",
        "population" : 181805
      },
      {
        "district" : "Fujian",
        "id" : 2091,
        "countrycode" : "CHN",
        "name" : "Zhangzhou",
        "population" : 181424
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2092,
        "countrycode" : "CHN",
        "name" : "Hailar",
        "population" : 180650
      },
      {
        "district" : "Sichuan",
        "id" : 2093,
        "countrycode" : "CHN",
        "name" : "Nanchong",
        "population" : 180273
      },
      {
        "district" : "Jilin",
        "id" : 2094,
        "countrycode" : "CHN",
        "name" : "Jiutai",
        "population" : 180130
      },
      {
        "district" : "Heilongjiang",
        "id" : 2095,
        "countrycode" : "CHN",
        "name" : "Zhaodong",
        "population" : 179976
      },
      {
        "district" : "Zhejiang",
        "id" : 2096,
        "countrycode" : "CHN",
        "name" : "Shaoxing",
        "population" : 179818
      },
      {
        "district" : "Anhui",
        "id" : 2097,
        "countrycode" : "CHN",
        "name" : "Fuyang",
        "population" : 179572
      },
      {
        "district" : "Guangdong",
        "id" : 2098,
        "countrycode" : "CHN",
        "name" : "Maoming",
        "population" : 178683
      },
      {
        "district" : "Yunnan",
        "id" : 2099,
        "countrycode" : "CHN",
        "name" : "Qujing",
        "population" : 178669
      },
      {
        "district" : "Xinxiang",
        "id" : 2100,
        "countrycode" : "CHN",
        "name" : "Ghulja",
        "population" : 177193
      },
      {
        "district" : "Jilin",
        "id" : 2101,
        "countrycode" : "CHN",
        "name" : "Jiaohe",
        "population" : 176367
      },
      {
        "district" : "Henan",
        "id" : 2102,
        "countrycode" : "CHN",
        "name" : "Puyang",
        "population" : 175988
      },
      {
        "district" : "Jilin",
        "id" : 2103,
        "countrycode" : "CHN",
        "name" : "Huadian",
        "population" : 175873
      },
      {
        "district" : "Sichuan",
        "id" : 2104,
        "countrycode" : "CHN",
        "name" : "Jiangyou",
        "population" : 175753
      },
      {
        "district" : "Xinxiang",
        "id" : 2105,
        "countrycode" : "CHN",
        "name" : "Qashqar",
        "population" : 174570
      },
      {
        "district" : "Guizhou",
        "id" : 2106,
        "countrycode" : "CHN",
        "name" : "Anshun",
        "population" : 174142
      },
      {
        "district" : "Sichuan",
        "id" : 2107,
        "countrycode" : "CHN",
        "name" : "Fuling",
        "population" : 173878
      },
      {
        "district" : "Jiangxi",
        "id" : 2108,
        "countrycode" : "CHN",
        "name" : "Xinyu",
        "population" : 173524
      },
      {
        "district" : "Shaanxi",
        "id" : 2109,
        "countrycode" : "CHN",
        "name" : "Hanzhong",
        "population" : 169930
      },
      {
        "district" : "Jiangsu",
        "id" : 2110,
        "countrycode" : "CHN",
        "name" : "Danyang",
        "population" : 169603
      },
      {
        "district" : "Hunan",
        "id" : 2111,
        "countrycode" : "CHN",
        "name" : "Chenzhou",
        "population" : 169400
      },
      {
        "district" : "Hubei",
        "id" : 2112,
        "countrycode" : "CHN",
        "name" : "Xiaogan",
        "population" : 166280
      },
      {
        "district" : "Henan",
        "id" : 2113,
        "countrycode" : "CHN",
        "name" : "Shangqiu",
        "population" : 164880
      },
      {
        "district" : "Guangdong",
        "id" : 2114,
        "countrycode" : "CHN",
        "name" : "Zhuhai",
        "population" : 164747
      },
      {
        "district" : "Guangdong",
        "id" : 2115,
        "countrycode" : "CHN",
        "name" : "Qingyuan",
        "population" : 164641
      },
      {
        "district" : "Xinxiang",
        "id" : 2116,
        "countrycode" : "CHN",
        "name" : "Aqsu",
        "population" : 164092
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2117,
        "countrycode" : "CHN",
        "name" : "Jining",
        "population" : 163552
      },
      {
        "district" : "Zhejiang",
        "id" : 2118,
        "countrycode" : "CHN",
        "name" : "Xiaoshan",
        "population" : 162930
      },
      {
        "district" : "Hubei",
        "id" : 2119,
        "countrycode" : "CHN",
        "name" : "Zaoyang",
        "population" : 162198
      },
      {
        "district" : "Jiangsu",
        "id" : 2120,
        "countrycode" : "CHN",
        "name" : "Xinghua",
        "population" : 161910
      },
      {
        "district" : "Xinxiang",
        "id" : 2121,
        "countrycode" : "CHN",
        "name" : "Hami",
        "population" : 161315
      },
      {
        "district" : "Guangdong",
        "id" : 2122,
        "countrycode" : "CHN",
        "name" : "Huizhou",
        "population" : 161023
      },
      {
        "district" : "Hubei",
        "id" : 2123,
        "countrycode" : "CHN",
        "name" : "Jinmen",
        "population" : 160794
      },
      {
        "district" : "Fujian",
        "id" : 2124,
        "countrycode" : "CHN",
        "name" : "Sanming",
        "population" : 160691
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2125,
        "countrycode" : "CHN",
        "name" : "Ulanhot",
        "population" : 159538
      },
      {
        "district" : "Xinxiang",
        "id" : 2126,
        "countrycode" : "CHN",
        "name" : "Korla",
        "population" : 159344
      },
      {
        "district" : "Sichuan",
        "id" : 2127,
        "countrycode" : "CHN",
        "name" : "Wanxian",
        "population" : 156823
      },
      {
        "district" : "Zhejiang",
        "id" : 2128,
        "countrycode" : "CHN",
        "name" : "Ruiï¿½an",
        "population" : 156468
      },
      {
        "district" : "Zhejiang",
        "id" : 2129,
        "countrycode" : "CHN",
        "name" : "Zhoushan",
        "population" : 156317
      },
      {
        "district" : "Shandong",
        "id" : 2130,
        "countrycode" : "CHN",
        "name" : "Liangcheng",
        "population" : 156307
      },
      {
        "district" : "Shandong",
        "id" : 2131,
        "countrycode" : "CHN",
        "name" : "Jiaozhou",
        "population" : 153364
      },
      {
        "district" : "Jiangsu",
        "id" : 2132,
        "countrycode" : "CHN",
        "name" : "Taizhou",
        "population" : 152442
      },
      {
        "district" : "Anhui",
        "id" : 2133,
        "countrycode" : "CHN",
        "name" : "Suzhou",
        "population" : 151862
      },
      {
        "district" : "Jiangxi",
        "id" : 2134,
        "countrycode" : "CHN",
        "name" : "Yichun",
        "population" : 151585
      },
      {
        "district" : "Jilin",
        "id" : 2135,
        "countrycode" : "CHN",
        "name" : "Taonan",
        "population" : 150168
      },
      {
        "district" : "Shandong",
        "id" : 2136,
        "countrycode" : "CHN",
        "name" : "Pingdu",
        "population" : 150123
      },
      {
        "district" : "Jiangxi",
        "id" : 2137,
        "countrycode" : "CHN",
        "name" : "Jiï¿½an",
        "population" : 148583
      },
      {
        "district" : "Shandong",
        "id" : 2138,
        "countrycode" : "CHN",
        "name" : "Longkou",
        "population" : 148362
      },
      {
        "district" : "Hebei",
        "id" : 2139,
        "countrycode" : "CHN",
        "name" : "Langfang",
        "population" : 148105
      },
      {
        "district" : "Henan",
        "id" : 2140,
        "countrycode" : "CHN",
        "name" : "Zhoukou",
        "population" : 146288
      },
      {
        "district" : "Sichuan",
        "id" : 2141,
        "countrycode" : "CHN",
        "name" : "Suining",
        "population" : 146086
      },
      {
        "district" : "Guangxi",
        "id" : 2142,
        "countrycode" : "CHN",
        "name" : "Yulin",
        "population" : 144467
      },
      {
        "district" : "Zhejiang",
        "id" : 2143,
        "countrycode" : "CHN",
        "name" : "Jinhua",
        "population" : 144280
      },
      {
        "district" : "Anhui",
        "id" : 2144,
        "countrycode" : "CHN",
        "name" : "Liuï¿½an",
        "population" : 144248
      },
      {
        "district" : "Heilongjiang",
        "id" : 2145,
        "countrycode" : "CHN",
        "name" : "Shuangcheng",
        "population" : 142659
      },
      {
        "district" : "Hubei",
        "id" : 2146,
        "countrycode" : "CHN",
        "name" : "Suizhou",
        "population" : 142302
      },
      {
        "district" : "Shaanxi",
        "id" : 2147,
        "countrycode" : "CHN",
        "name" : "Ankang",
        "population" : 142170
      },
      {
        "district" : "Shaanxi",
        "id" : 2148,
        "countrycode" : "CHN",
        "name" : "Weinan",
        "population" : 140169
      },
      {
        "district" : "Jilin",
        "id" : 2149,
        "countrycode" : "CHN",
        "name" : "Longjing",
        "population" : 139417
      },
      {
        "district" : "Jilin",
        "id" : 2150,
        "countrycode" : "CHN",
        "name" : "Daï¿½an",
        "population" : 138963
      },
      {
        "district" : "Hunan",
        "id" : 2151,
        "countrycode" : "CHN",
        "name" : "Lengshuijiang",
        "population" : 137994
      },
      {
        "district" : "Shandong",
        "id" : 2152,
        "countrycode" : "CHN",
        "name" : "Laiyang",
        "population" : 137080
      },
      {
        "district" : "Hubei",
        "id" : 2153,
        "countrycode" : "CHN",
        "name" : "Xianning",
        "population" : 136811
      },
      {
        "district" : "Yunnan",
        "id" : 2154,
        "countrycode" : "CHN",
        "name" : "Dali",
        "population" : 136554
      },
      {
        "district" : "Heilongjiang",
        "id" : 2155,
        "countrycode" : "CHN",
        "name" : "Anda",
        "population" : 136446
      },
      {
        "district" : "Shanxi",
        "id" : 2156,
        "countrycode" : "CHN",
        "name" : "Jincheng",
        "population" : 136396
      },
      {
        "district" : "Fujian",
        "id" : 2157,
        "countrycode" : "CHN",
        "name" : "Longyan",
        "population" : 134481
      },
      {
        "district" : "Sichuan",
        "id" : 2158,
        "countrycode" : "CHN",
        "name" : "Xichang",
        "population" : 134419
      },
      {
        "district" : "Shandong",
        "id" : 2159,
        "countrycode" : "CHN",
        "name" : "Wendeng",
        "population" : 133910
      },
      {
        "district" : "Heilongjiang",
        "id" : 2160,
        "countrycode" : "CHN",
        "name" : "Hailun",
        "population" : 133565
      },
      {
        "district" : "Shandong",
        "id" : 2161,
        "countrycode" : "CHN",
        "name" : "Binzhou",
        "population" : 133555
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2162,
        "countrycode" : "CHN",
        "name" : "Linhe",
        "population" : 133183
      },
      {
        "district" : "Gansu",
        "id" : 2163,
        "countrycode" : "CHN",
        "name" : "Wuwei",
        "population" : 133101
      },
      {
        "district" : "Guizhou",
        "id" : 2164,
        "countrycode" : "CHN",
        "name" : "Duyun",
        "population" : 132971
      },
      {
        "district" : "Heilongjiang",
        "id" : 2165,
        "countrycode" : "CHN",
        "name" : "Mishan",
        "population" : 132744
      },
      {
        "district" : "Jiangxi",
        "id" : 2166,
        "countrycode" : "CHN",
        "name" : "Shangrao",
        "population" : 132455
      },
      {
        "district" : "Xinxiang",
        "id" : 2167,
        "countrycode" : "CHN",
        "name" : "Changji",
        "population" : 132260
      },
      {
        "district" : "Guangdong",
        "id" : 2168,
        "countrycode" : "CHN",
        "name" : "Meixian",
        "population" : 132156
      },
      {
        "district" : "Jilin",
        "id" : 2169,
        "countrycode" : "CHN",
        "name" : "Yushu",
        "population" : 131861
      },
      {
        "district" : "Liaoning",
        "id" : 2170,
        "countrycode" : "CHN",
        "name" : "Tiefa",
        "population" : 131807
      },
      {
        "district" : "Jiangsu",
        "id" : 2171,
        "countrycode" : "CHN",
        "name" : "Huaiï¿½an",
        "population" : 131149
      },
      {
        "district" : "Hunan",
        "id" : 2172,
        "countrycode" : "CHN",
        "name" : "Leiyang",
        "population" : 130115
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2173,
        "countrycode" : "CHN",
        "name" : "Zalantun",
        "population" : 130031
      },
      {
        "district" : "Shandong",
        "id" : 2174,
        "countrycode" : "CHN",
        "name" : "Weihai",
        "population" : 128888
      },
      {
        "district" : "Hunan",
        "id" : 2175,
        "countrycode" : "CHN",
        "name" : "Loudi",
        "population" : 128418
      },
      {
        "district" : "Shandong",
        "id" : 2176,
        "countrycode" : "CHN",
        "name" : "Qingzhou",
        "population" : 128258
      },
      {
        "district" : "Jiangsu",
        "id" : 2177,
        "countrycode" : "CHN",
        "name" : "Qidong",
        "population" : 126872
      },
      {
        "district" : "Hunan",
        "id" : 2178,
        "countrycode" : "CHN",
        "name" : "Huaihua",
        "population" : 126785
      },
      {
        "district" : "Henan",
        "id" : 2179,
        "countrycode" : "CHN",
        "name" : "Luohe",
        "population" : 126438
      },
      {
        "district" : "Anhui",
        "id" : 2180,
        "countrycode" : "CHN",
        "name" : "Chuzhou",
        "population" : 125341
      },
      {
        "district" : "Liaoning",
        "id" : 2181,
        "countrycode" : "CHN",
        "name" : "Kaiyuan",
        "population" : 124219
      },
      {
        "district" : "Shandong",
        "id" : 2182,
        "countrycode" : "CHN",
        "name" : "Linqing",
        "population" : 123958
      },
      {
        "district" : "Anhui",
        "id" : 2183,
        "countrycode" : "CHN",
        "name" : "Chaohu",
        "population" : 123676
      },
      {
        "district" : "Hubei",
        "id" : 2184,
        "countrycode" : "CHN",
        "name" : "Laohekou",
        "population" : 123366
      },
      {
        "district" : "Sichuan",
        "id" : 2185,
        "countrycode" : "CHN",
        "name" : "Dujiangyan",
        "population" : 123357
      },
      {
        "district" : "Henan",
        "id" : 2186,
        "countrycode" : "CHN",
        "name" : "Zhumadian",
        "population" : 123232
      },
      {
        "district" : "Jiangxi",
        "id" : 2187,
        "countrycode" : "CHN",
        "name" : "Linchuan",
        "population" : 121949
      },
      {
        "district" : "Shandong",
        "id" : 2188,
        "countrycode" : "CHN",
        "name" : "Jiaonan",
        "population" : 121397
      },
      {
        "district" : "Henan",
        "id" : 2189,
        "countrycode" : "CHN",
        "name" : "Sanmenxia",
        "population" : 120523
      },
      {
        "district" : "Guangdong",
        "id" : 2190,
        "countrycode" : "CHN",
        "name" : "Heyuan",
        "population" : 120101
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2191,
        "countrycode" : "CHN",
        "name" : "Manzhouli",
        "population" : 120023
      },
      {
        "district" : "Tibet",
        "id" : 2192,
        "countrycode" : "CHN",
        "name" : "Lhasa",
        "population" : 120000
      },
      {
        "district" : "Hunan",
        "id" : 2193,
        "countrycode" : "CHN",
        "name" : "Lianyuan",
        "population" : 118858
      },
      {
        "district" : "Xinxiang",
        "id" : 2194,
        "countrycode" : "CHN",
        "name" : "Kuytun",
        "population" : 118553
      },
      {
        "district" : "Hubei",
        "id" : 2195,
        "countrycode" : "CHN",
        "name" : "Puqi",
        "population" : 117264
      },
      {
        "district" : "Hunan",
        "id" : 2196,
        "countrycode" : "CHN",
        "name" : "Hongjiang",
        "population" : 116188
      },
      {
        "district" : "Guangxi",
        "id" : 2197,
        "countrycode" : "CHN",
        "name" : "Qinzhou",
        "population" : 114586
      },
      {
        "district" : "Hebei",
        "id" : 2198,
        "countrycode" : "CHN",
        "name" : "Renqiu",
        "population" : 114256
      },
      {
        "district" : "Zhejiang",
        "id" : 2199,
        "countrycode" : "CHN",
        "name" : "Yuyao",
        "population" : 114065
      },
      {
        "district" : "Guangxi",
        "id" : 2200,
        "countrycode" : "CHN",
        "name" : "Guigang",
        "population" : 114025
      },
      {
        "district" : "Guizhou",
        "id" : 2201,
        "countrycode" : "CHN",
        "name" : "Kaili",
        "population" : 113958
      },
      {
        "district" : "Shaanxi",
        "id" : 2202,
        "countrycode" : "CHN",
        "name" : "Yanï¿½an",
        "population" : 113277
      },
      {
        "district" : "Guangxi",
        "id" : 2203,
        "countrycode" : "CHN",
        "name" : "Beihai",
        "population" : 112673
      },
      {
        "district" : "Anhui",
        "id" : 2204,
        "countrycode" : "CHN",
        "name" : "Xuangzhou",
        "population" : 112673
      },
      {
        "district" : "Zhejiang",
        "id" : 2205,
        "countrycode" : "CHN",
        "name" : "Quzhou",
        "population" : 112373
      },
      {
        "district" : "Fujian",
        "id" : 2206,
        "countrycode" : "CHN",
        "name" : "Yongï¿½an",
        "population" : 111762
      },
      {
        "district" : "Hunan",
        "id" : 2207,
        "countrycode" : "CHN",
        "name" : "Zixing",
        "population" : 110048
      },
      {
        "district" : "Jiangsu",
        "id" : 2208,
        "countrycode" : "CHN",
        "name" : "Liyang",
        "population" : 109520
      },
      {
        "district" : "Jiangsu",
        "id" : 2209,
        "countrycode" : "CHN",
        "name" : "Yizheng",
        "population" : 109268
      },
      {
        "district" : "Gansu",
        "id" : 2210,
        "countrycode" : "CHN",
        "name" : "Yumen",
        "population" : 109234
      },
      {
        "district" : "Hunan",
        "id" : 2211,
        "countrycode" : "CHN",
        "name" : "Liling",
        "population" : 108504
      },
      {
        "district" : "Shanxi",
        "id" : 2212,
        "countrycode" : "CHN",
        "name" : "Yuncheng",
        "population" : 108359
      },
      {
        "district" : "Guangdong",
        "id" : 2213,
        "countrycode" : "CHN",
        "name" : "Shanwei",
        "population" : 107847
      },
      {
        "district" : "Zhejiang",
        "id" : 2214,
        "countrycode" : "CHN",
        "name" : "Cixi",
        "population" : 107329
      },
      {
        "district" : "Hunan",
        "id" : 2215,
        "countrycode" : "CHN",
        "name" : "Yuanjiang",
        "population" : 107004
      },
      {
        "district" : "Anhui",
        "id" : 2216,
        "countrycode" : "CHN",
        "name" : "Bozhou",
        "population" : 106346
      },
      {
        "district" : "Gansu",
        "id" : 2217,
        "countrycode" : "CHN",
        "name" : "Jinchang",
        "population" : 105287
      },
      {
        "district" : "Fujian",
        "id" : 2218,
        "countrycode" : "CHN",
        "name" : "Fuï¿½an",
        "population" : 105265
      },
      {
        "district" : "Jiangsu",
        "id" : 2219,
        "countrycode" : "CHN",
        "name" : "Suqian",
        "population" : 105021
      },
      {
        "district" : "Hubei",
        "id" : 2220,
        "countrycode" : "CHN",
        "name" : "Shishou",
        "population" : 104571
      },
      {
        "district" : "Hebei",
        "id" : 2221,
        "countrycode" : "CHN",
        "name" : "Hengshui",
        "population" : 104269
      },
      {
        "district" : "Hubei",
        "id" : 2222,
        "countrycode" : "CHN",
        "name" : "Danjiangkou",
        "population" : 103211
      },
      {
        "district" : "Heilongjiang",
        "id" : 2223,
        "countrycode" : "CHN",
        "name" : "Fujin",
        "population" : 103104
      },
      {
        "district" : "Hainan",
        "id" : 2224,
        "countrycode" : "CHN",
        "name" : "Sanya",
        "population" : 102820
      },
      {
        "district" : "Hubei",
        "id" : 2225,
        "countrycode" : "CHN",
        "name" : "Guangshui",
        "population" : 102770
      },
      {
        "district" : "Anhui",
        "id" : 2226,
        "countrycode" : "CHN",
        "name" : "Huangshan",
        "population" : 102628
      },
      {
        "district" : "Liaoning",
        "id" : 2227,
        "countrycode" : "CHN",
        "name" : "Xingcheng",
        "population" : 102384
      },
      {
        "district" : "Shandong",
        "id" : 2228,
        "countrycode" : "CHN",
        "name" : "Zhucheng",
        "population" : 102134
      },
      {
        "district" : "Jiangsu",
        "id" : 2229,
        "countrycode" : "CHN",
        "name" : "Kunshan",
        "population" : 102052
      },
      {
        "district" : "Zhejiang",
        "id" : 2230,
        "countrycode" : "CHN",
        "name" : "Haining",
        "population" : 100478
      },
      {
        "district" : "Gansu",
        "id" : 2231,
        "countrycode" : "CHN",
        "name" : "Pingliang",
        "population" : 99265
      },
      {
        "district" : "Fujian",
        "id" : 2232,
        "countrycode" : "CHN",
        "name" : "Fuqing",
        "population" : 99193
      },
      {
        "district" : "Shanxi",
        "id" : 2233,
        "countrycode" : "CHN",
        "name" : "Xinzhou",
        "population" : 98667
      },
      {
        "district" : "Guangdong",
        "id" : 2234,
        "countrycode" : "CHN",
        "name" : "Jieyang",
        "population" : 98531
      },
      {
        "district" : "Jiangsu",
        "id" : 2235,
        "countrycode" : "CHN",
        "name" : "Zhangjiagang",
        "population" : 97994
      },
      {
        "district" : "Peking",
        "id" : 2236,
        "countrycode" : "CHN",
        "name" : "Tong Xian",
        "population" : 97168
      },
      {
        "district" : "Sichuan",
        "id" : 2237,
        "countrycode" : "CHN",
        "name" : "Yaï¿½an",
        "population" : 95900
      },
      {
        "district" : "Liaoning",
        "id" : 2238,
        "countrycode" : "CHN",
        "name" : "Jinzhou",
        "population" : 95761
      },
      {
        "district" : "Sichuan",
        "id" : 2239,
        "countrycode" : "CHN",
        "name" : "Emeishan",
        "population" : 94000
      },
      {
        "district" : "Hubei",
        "id" : 2240,
        "countrycode" : "CHN",
        "name" : "Enshi",
        "population" : 93056
      },
      {
        "district" : "Guangxi",
        "id" : 2241,
        "countrycode" : "CHN",
        "name" : "Bose",
        "population" : 93009
      },
      {
        "district" : "Henan",
        "id" : 2242,
        "countrycode" : "CHN",
        "name" : "Yuzhou",
        "population" : 92889
      },
      {
        "district" : "Yunnan",
        "id" : 2243,
        "countrycode" : "CHN",
        "name" : "Kaiyuan",
        "population" : 91999
      },
      {
        "district" : "Jilin",
        "id" : 2244,
        "countrycode" : "CHN",
        "name" : "Tumen",
        "population" : 91471
      },
      {
        "district" : "Fujian",
        "id" : 2245,
        "countrycode" : "CHN",
        "name" : "Putian",
        "population" : 91030
      },
      {
        "district" : "Zhejiang",
        "id" : 2246,
        "countrycode" : "CHN",
        "name" : "Linhai",
        "population" : 90870
      },
      {
        "district" : "Inner Mongolia",
        "id" : 2247,
        "countrycode" : "CHN",
        "name" : "Xilin Hot",
        "population" : 90646
      },
      {
        "district" : "Fujian",
        "id" : 2248,
        "countrycode" : "CHN",
        "name" : "Shaowu",
        "population" : 90286
      },
      {
        "district" : "Shandong",
        "id" : 2249,
        "countrycode" : "CHN",
        "name" : "Junan",
        "population" : 90222
      },
      {
        "district" : "Sichuan",
        "id" : 2250,
        "countrycode" : "CHN",
        "name" : "Huaying",
        "population" : 89400
      },
      {
        "district" : "Shandong",
        "id" : 2251,
        "countrycode" : "CHN",
        "name" : "Pingyi",
        "population" : 89373
      },
      {
        "district" : "Zhejiang",
        "id" : 2252,
        "countrycode" : "CHN",
        "name" : "Huangyan",
        "population" : 89288
      },
      {
        "district" : "Bishkek shaary",
        "id" : 2253,
        "countrycode" : "KGZ",
        "name" : "Bishkek",
        "population" : 589400
      },
      {
        "district" : "Osh",
        "id" : 2254,
        "countrycode" : "KGZ",
        "name" : "Osh",
        "population" : 222700
      },
      {
        "district" : "South Tarawa",
        "id" : 2255,
        "countrycode" : "KIR",
        "name" : "Bikenibeu",
        "population" : 5055
      },
      {
        "district" : "South Tarawa",
        "id" : 2256,
        "countrycode" : "KIR",
        "name" : "Bairiki",
        "population" : 2226
      },
      {
        "district" : "Santafï¿½ de Bogotï¿½",
        "id" : 2257,
        "countrycode" : "COL",
        "name" : "Santafï¿½ de Bogotï¿½",
        "population" : 6260862
      },
      {
        "district" : "Valle",
        "id" : 2258,
        "countrycode" : "COL",
        "name" : "Cali",
        "population" : 2077386
      },
      {
        "district" : "Antioquia",
        "id" : 2259,
        "countrycode" : "COL",
        "name" : "Medellï¿½n",
        "population" : 1861265
      },
      {
        "district" : "Atlï¿½ntico",
        "id" : 2260,
        "countrycode" : "COL",
        "name" : "Barranquilla",
        "population" : 1223260
      },
      {
        "district" : "Bolï¿½var",
        "id" : 2261,
        "countrycode" : "COL",
        "name" : "Cartagena",
        "population" : 805757
      },
      {
        "district" : "Norte de Santander",
        "id" : 2262,
        "countrycode" : "COL",
        "name" : "Cï¿½cuta",
        "population" : 606932
      },
      {
        "district" : "Santander",
        "id" : 2263,
        "countrycode" : "COL",
        "name" : "Bucaramanga",
        "population" : 515555
      },
      {
        "district" : "Tolima",
        "id" : 2264,
        "countrycode" : "COL",
        "name" : "Ibaguï¿½",
        "population" : 393664
      },
      {
        "district" : "Risaralda",
        "id" : 2265,
        "countrycode" : "COL",
        "name" : "Pereira",
        "population" : 381725
      },
      {
        "district" : "Magdalena",
        "id" : 2266,
        "countrycode" : "COL",
        "name" : "Santa Marta",
        "population" : 359147
      },
      {
        "district" : "Caldas",
        "id" : 2267,
        "countrycode" : "COL",
        "name" : "Manizales",
        "population" : 337580
      },
      {
        "district" : "Antioquia",
        "id" : 2268,
        "countrycode" : "COL",
        "name" : "Bello",
        "population" : 333470
      },
      {
        "district" : "Nariï¿½o",
        "id" : 2269,
        "countrycode" : "COL",
        "name" : "Pasto",
        "population" : 332396
      },
      {
        "district" : "Huila",
        "id" : 2270,
        "countrycode" : "COL",
        "name" : "Neiva",
        "population" : 300052
      },
      {
        "district" : "Atlï¿½ntico",
        "id" : 2271,
        "countrycode" : "COL",
        "name" : "Soledad",
        "population" : 295058
      },
      {
        "district" : "Quindï¿½o",
        "id" : 2272,
        "countrycode" : "COL",
        "name" : "Armenia",
        "population" : 288977
      },
      {
        "district" : "Meta",
        "id" : 2273,
        "countrycode" : "COL",
        "name" : "Villavicencio",
        "population" : 273140
      },
      {
        "district" : "Cundinamarca",
        "id" : 2274,
        "countrycode" : "COL",
        "name" : "Soacha",
        "population" : 272058
      },
      {
        "district" : "Cesar",
        "id" : 2275,
        "countrycode" : "COL",
        "name" : "Valledupar",
        "population" : 263247
      },
      {
        "district" : "Cï¿½rdoba",
        "id" : 2276,
        "countrycode" : "COL",
        "name" : "Monterï¿½a",
        "population" : 248245
      },
      {
        "district" : "Antioquia",
        "id" : 2277,
        "countrycode" : "COL",
        "name" : "Itagï¿½ï¿½",
        "population" : 228985
      },
      {
        "district" : "Valle",
        "id" : 2278,
        "countrycode" : "COL",
        "name" : "Palmira",
        "population" : 226509
      },
      {
        "district" : "Valle",
        "id" : 2279,
        "countrycode" : "COL",
        "name" : "Buenaventura",
        "population" : 224336
      },
      {
        "district" : "Santander",
        "id" : 2280,
        "countrycode" : "COL",
        "name" : "Floridablanca",
        "population" : 221913
      },
      {
        "district" : "Sucre",
        "id" : 2281,
        "countrycode" : "COL",
        "name" : "Sincelejo",
        "population" : 220704
      },
      {
        "district" : "Cauca",
        "id" : 2282,
        "countrycode" : "COL",
        "name" : "Popayï¿½n",
        "population" : 200719
      },
      {
        "district" : "Santander",
        "id" : 2283,
        "countrycode" : "COL",
        "name" : "Barrancabermeja",
        "population" : 178020
      },
      {
        "district" : "Risaralda",
        "id" : 2284,
        "countrycode" : "COL",
        "name" : "Dos Quebradas",
        "population" : 159363
      },
      {
        "district" : "Valle",
        "id" : 2285,
        "countrycode" : "COL",
        "name" : "Tuluï¿½",
        "population" : 152488
      },
      {
        "district" : "Antioquia",
        "id" : 2286,
        "countrycode" : "COL",
        "name" : "Envigado",
        "population" : 135848
      },
      {
        "district" : "Valle",
        "id" : 2287,
        "countrycode" : "COL",
        "name" : "Cartago",
        "population" : 125884
      },
      {
        "district" : "Cundinamarca",
        "id" : 2288,
        "countrycode" : "COL",
        "name" : "Girardot",
        "population" : 110963
      },
      {
        "district" : "Valle",
        "id" : 2289,
        "countrycode" : "COL",
        "name" : "Buga",
        "population" : 110699
      },
      {
        "district" : "Boyacï¿½",
        "id" : 2290,
        "countrycode" : "COL",
        "name" : "Tunja",
        "population" : 109740
      },
      {
        "district" : "Caquetï¿½",
        "id" : 2291,
        "countrycode" : "COL",
        "name" : "Florencia",
        "population" : 108574
      },
      {
        "district" : "La Guajira",
        "id" : 2292,
        "countrycode" : "COL",
        "name" : "Maicao",
        "population" : 108053
      },
      {
        "district" : "Boyacï¿½",
        "id" : 2293,
        "countrycode" : "COL",
        "name" : "Sogamoso",
        "population" : 107728
      },
      {
        "district" : "Santander",
        "id" : 2294,
        "countrycode" : "COL",
        "name" : "Giron",
        "population" : 90688
      },
      {
        "district" : "Njazidja",
        "id" : 2295,
        "countrycode" : "COM",
        "name" : "Moroni",
        "population" : 36000
      },
      {
        "district" : "Brazzaville",
        "id" : 2296,
        "countrycode" : "COG",
        "name" : "Brazzaville",
        "population" : 950000
      },
      {
        "district" : "Kouilou",
        "id" : 2297,
        "countrycode" : "COG",
        "name" : "Pointe-Noire",
        "population" : 500000
      },
      {
        "district" : "Kinshasa",
        "id" : 2298,
        "countrycode" : "COD",
        "name" : "Kinshasa",
        "population" : 5064000
      },
      {
        "district" : "Shaba",
        "id" : 2299,
        "countrycode" : "COD",
        "name" : "Lubumbashi",
        "population" : 851381
      },
      {
        "district" : "East Kasai",
        "id" : 2300,
        "countrycode" : "COD",
        "name" : "Mbuji-Mayi",
        "population" : 806475
      },
      {
        "district" : "Shaba",
        "id" : 2301,
        "countrycode" : "COD",
        "name" : "Kolwezi",
        "population" : 417810
      },
      {
        "district" : "Haute-Zaï¿½re",
        "id" : 2302,
        "countrycode" : "COD",
        "name" : "Kisangani",
        "population" : 417517
      },
      {
        "district" : "West Kasai",
        "id" : 2303,
        "countrycode" : "COD",
        "name" : "Kananga",
        "population" : 393030
      },
      {
        "district" : "Shaba",
        "id" : 2304,
        "countrycode" : "COD",
        "name" : "Likasi",
        "population" : 299118
      },
      {
        "district" : "South Kivu",
        "id" : 2305,
        "countrycode" : "COD",
        "name" : "Bukavu",
        "population" : 201569
      },
      {
        "district" : "Bandundu",
        "id" : 2306,
        "countrycode" : "COD",
        "name" : "Kikwit",
        "population" : 182142
      },
      {
        "district" : "West Kasai",
        "id" : 2307,
        "countrycode" : "COD",
        "name" : "Tshikapa",
        "population" : 180860
      },
      {
        "district" : "Bas-Zaï¿½re",
        "id" : 2308,
        "countrycode" : "COD",
        "name" : "Matadi",
        "population" : 172730
      },
      {
        "district" : "Equateur",
        "id" : 2309,
        "countrycode" : "COD",
        "name" : "Mbandaka",
        "population" : 169841
      },
      {
        "district" : "East Kasai",
        "id" : 2310,
        "countrycode" : "COD",
        "name" : "Mwene-Ditu",
        "population" : 137459
      },
      {
        "district" : "Bas-Zaï¿½re",
        "id" : 2311,
        "countrycode" : "COD",
        "name" : "Boma",
        "population" : 135284
      },
      {
        "district" : "South Kivu",
        "id" : 2312,
        "countrycode" : "COD",
        "name" : "Uvira",
        "population" : 115590
      },
      {
        "district" : "North Kivu",
        "id" : 2313,
        "countrycode" : "COD",
        "name" : "Butembo",
        "population" : 109406
      },
      {
        "district" : "North Kivu",
        "id" : 2314,
        "countrycode" : "COD",
        "name" : "Goma",
        "population" : 109094
      },
      {
        "district" : "Shaba",
        "id" : 2315,
        "countrycode" : "COD",
        "name" : "Kalemie",
        "population" : 101309
      },
      {
        "district" : "Home Island",
        "id" : 2316,
        "countrycode" : "CCK",
        "name" : "Bantam",
        "population" : 503
      },
      {
        "district" : "West Island",
        "id" : 2317,
        "countrycode" : "CCK",
        "name" : "West Island",
        "population" : 167
      },
      {
        "district" : "Pyongyang-si",
        "id" : 2318,
        "countrycode" : "PRK",
        "name" : "Pyongyang",
        "population" : 2484000
      },
      {
        "district" : "Hamgyong N",
        "id" : 2319,
        "countrycode" : "PRK",
        "name" : "Hamhung",
        "population" : 709730
      },
      {
        "district" : "Hamgyong P",
        "id" : 2320,
        "countrycode" : "PRK",
        "name" : "Chongjin",
        "population" : 582480
      },
      {
        "district" : "Nampo-si",
        "id" : 2321,
        "countrycode" : "PRK",
        "name" : "Nampo",
        "population" : 566200
      },
      {
        "district" : "Pyongan P",
        "id" : 2322,
        "countrycode" : "PRK",
        "name" : "Sinuiju",
        "population" : 326011
      },
      {
        "district" : "Kangwon",
        "id" : 2323,
        "countrycode" : "PRK",
        "name" : "Wonsan",
        "population" : 300148
      },
      {
        "district" : "Pyongan N",
        "id" : 2324,
        "countrycode" : "PRK",
        "name" : "Phyongsong",
        "population" : 272934
      },
      {
        "district" : "Hwanghae P",
        "id" : 2325,
        "countrycode" : "PRK",
        "name" : "Sariwon",
        "population" : 254146
      },
      {
        "district" : "Hwanghae N",
        "id" : 2326,
        "countrycode" : "PRK",
        "name" : "Haeju",
        "population" : 229172
      },
      {
        "district" : "Chagang",
        "id" : 2327,
        "countrycode" : "PRK",
        "name" : "Kanggye",
        "population" : 223410
      },
      {
        "district" : "Hamgyong P",
        "id" : 2328,
        "countrycode" : "PRK",
        "name" : "Kimchaek",
        "population" : 179000
      },
      {
        "district" : "Yanggang",
        "id" : 2329,
        "countrycode" : "PRK",
        "name" : "Hyesan",
        "population" : 178020
      },
      {
        "district" : "Kaesong-si",
        "id" : 2330,
        "countrycode" : "PRK",
        "name" : "Kaesong",
        "population" : 171500
      },
      {
        "district" : "Seoul",
        "id" : 2331,
        "countrycode" : "KOR",
        "name" : "Seoul",
        "population" : 9981619
      },
      {
        "district" : "Pusan",
        "id" : 2332,
        "countrycode" : "KOR",
        "name" : "Pusan",
        "population" : 3804522
      },
      {
        "district" : "Inchon",
        "id" : 2333,
        "countrycode" : "KOR",
        "name" : "Inchon",
        "population" : 2559424
      },
      {
        "district" : "Taegu",
        "id" : 2334,
        "countrycode" : "KOR",
        "name" : "Taegu",
        "population" : 2548568
      },
      {
        "district" : "Taejon",
        "id" : 2335,
        "countrycode" : "KOR",
        "name" : "Taejon",
        "population" : 1425835
      },
      {
        "district" : "Kwangju",
        "id" : 2336,
        "countrycode" : "KOR",
        "name" : "Kwangju",
        "population" : 1368341
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2337,
        "countrycode" : "KOR",
        "name" : "Ulsan",
        "population" : 1084891
      },
      {
        "district" : "Kyonggi",
        "id" : 2338,
        "countrycode" : "KOR",
        "name" : "Songnam",
        "population" : 869094
      },
      {
        "district" : "Kyonggi",
        "id" : 2339,
        "countrycode" : "KOR",
        "name" : "Puchon",
        "population" : 779412
      },
      {
        "district" : "Kyonggi",
        "id" : 2340,
        "countrycode" : "KOR",
        "name" : "Suwon",
        "population" : 755550
      },
      {
        "district" : "Kyonggi",
        "id" : 2341,
        "countrycode" : "KOR",
        "name" : "Anyang",
        "population" : 591106
      },
      {
        "district" : "Chollabuk",
        "id" : 2342,
        "countrycode" : "KOR",
        "name" : "Chonju",
        "population" : 563153
      },
      {
        "district" : "Chungchongbuk",
        "id" : 2343,
        "countrycode" : "KOR",
        "name" : "Chongju",
        "population" : 531376
      },
      {
        "district" : "Kyonggi",
        "id" : 2344,
        "countrycode" : "KOR",
        "name" : "Koyang",
        "population" : 518282
      },
      {
        "district" : "Kyonggi",
        "id" : 2345,
        "countrycode" : "KOR",
        "name" : "Ansan",
        "population" : 510314
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2346,
        "countrycode" : "KOR",
        "name" : "Pohang",
        "population" : 508899
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2347,
        "countrycode" : "KOR",
        "name" : "Chang-won",
        "population" : 481694
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2348,
        "countrycode" : "KOR",
        "name" : "Masan",
        "population" : 441242
      },
      {
        "district" : "Kyonggi",
        "id" : 2349,
        "countrycode" : "KOR",
        "name" : "Kwangmyong",
        "population" : 350914
      },
      {
        "district" : "Chungchongnam",
        "id" : 2350,
        "countrycode" : "KOR",
        "name" : "Chonan",
        "population" : 330259
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2351,
        "countrycode" : "KOR",
        "name" : "Chinju",
        "population" : 329886
      },
      {
        "district" : "Chollabuk",
        "id" : 2352,
        "countrycode" : "KOR",
        "name" : "Iksan",
        "population" : 322685
      },
      {
        "district" : "Kyonggi",
        "id" : 2353,
        "countrycode" : "KOR",
        "name" : "Pyongtaek",
        "population" : 312927
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2354,
        "countrycode" : "KOR",
        "name" : "Kumi",
        "population" : 311431
      },
      {
        "district" : "Kyonggi",
        "id" : 2355,
        "countrycode" : "KOR",
        "name" : "Uijongbu",
        "population" : 276111
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2356,
        "countrycode" : "KOR",
        "name" : "Kyongju",
        "population" : 272968
      },
      {
        "district" : "Chollabuk",
        "id" : 2357,
        "countrycode" : "KOR",
        "name" : "Kunsan",
        "population" : 266569
      },
      {
        "district" : "Cheju",
        "id" : 2358,
        "countrycode" : "KOR",
        "name" : "Cheju",
        "population" : 258511
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2359,
        "countrycode" : "KOR",
        "name" : "Kimhae",
        "population" : 256370
      },
      {
        "district" : "Chollanam",
        "id" : 2360,
        "countrycode" : "KOR",
        "name" : "Sunchon",
        "population" : 249263
      },
      {
        "district" : "Chollanam",
        "id" : 2361,
        "countrycode" : "KOR",
        "name" : "Mokpo",
        "population" : 247452
      },
      {
        "district" : "Kyonggi",
        "id" : 2362,
        "countrycode" : "KOR",
        "name" : "Yong-in",
        "population" : 242643
      },
      {
        "district" : "Kang-won",
        "id" : 2363,
        "countrycode" : "KOR",
        "name" : "Wonju",
        "population" : 237460
      },
      {
        "district" : "Kyonggi",
        "id" : 2364,
        "countrycode" : "KOR",
        "name" : "Kunpo",
        "population" : 235233
      },
      {
        "district" : "Kang-won",
        "id" : 2365,
        "countrycode" : "KOR",
        "name" : "Chunchon",
        "population" : 234528
      },
      {
        "district" : "Kyonggi",
        "id" : 2366,
        "countrycode" : "KOR",
        "name" : "Namyangju",
        "population" : 229060
      },
      {
        "district" : "Kang-won",
        "id" : 2367,
        "countrycode" : "KOR",
        "name" : "Kangnung",
        "population" : 220403
      },
      {
        "district" : "Chungchongbuk",
        "id" : 2368,
        "countrycode" : "KOR",
        "name" : "Chungju",
        "population" : 205206
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2369,
        "countrycode" : "KOR",
        "name" : "Andong",
        "population" : 188443
      },
      {
        "district" : "Chollanam",
        "id" : 2370,
        "countrycode" : "KOR",
        "name" : "Yosu",
        "population" : 183596
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2371,
        "countrycode" : "KOR",
        "name" : "Kyongsan",
        "population" : 173746
      },
      {
        "district" : "Kyonggi",
        "id" : 2372,
        "countrycode" : "KOR",
        "name" : "Paju",
        "population" : 163379
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2373,
        "countrycode" : "KOR",
        "name" : "Yangsan",
        "population" : 163351
      },
      {
        "district" : "Kyonggi",
        "id" : 2374,
        "countrycode" : "KOR",
        "name" : "Ichon",
        "population" : 155332
      },
      {
        "district" : "Chungchongnam",
        "id" : 2375,
        "countrycode" : "KOR",
        "name" : "Asan",
        "population" : 154663
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2376,
        "countrycode" : "KOR",
        "name" : "Koje",
        "population" : 147562
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2377,
        "countrycode" : "KOR",
        "name" : "Kimchon",
        "population" : 147027
      },
      {
        "district" : "Chungchongnam",
        "id" : 2378,
        "countrycode" : "KOR",
        "name" : "Nonsan",
        "population" : 146619
      },
      {
        "district" : "Kyonggi",
        "id" : 2379,
        "countrycode" : "KOR",
        "name" : "Kuri",
        "population" : 142173
      },
      {
        "district" : "Chollabuk",
        "id" : 2380,
        "countrycode" : "KOR",
        "name" : "Chong-up",
        "population" : 139111
      },
      {
        "district" : "Chungchongbuk",
        "id" : 2381,
        "countrycode" : "KOR",
        "name" : "Chechon",
        "population" : 137070
      },
      {
        "district" : "Chungchongnam",
        "id" : 2382,
        "countrycode" : "KOR",
        "name" : "Sosan",
        "population" : 134746
      },
      {
        "district" : "Kyonggi",
        "id" : 2383,
        "countrycode" : "KOR",
        "name" : "Shihung",
        "population" : 133443
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2384,
        "countrycode" : "KOR",
        "name" : "Tong-yong",
        "population" : 131717
      },
      {
        "district" : "Chungchongnam",
        "id" : 2385,
        "countrycode" : "KOR",
        "name" : "Kongju",
        "population" : 131229
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2386,
        "countrycode" : "KOR",
        "name" : "Yongju",
        "population" : 131097
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2387,
        "countrycode" : "KOR",
        "name" : "Chinhae",
        "population" : 125997
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2388,
        "countrycode" : "KOR",
        "name" : "Sangju",
        "population" : 124116
      },
      {
        "district" : "Chungchongnam",
        "id" : 2389,
        "countrycode" : "KOR",
        "name" : "Poryong",
        "population" : 122604
      },
      {
        "district" : "Chollanam",
        "id" : 2390,
        "countrycode" : "KOR",
        "name" : "Kwang-yang",
        "population" : 122052
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2391,
        "countrycode" : "KOR",
        "name" : "Miryang",
        "population" : 121501
      },
      {
        "district" : "Kyonggi",
        "id" : 2392,
        "countrycode" : "KOR",
        "name" : "Hanam",
        "population" : 115812
      },
      {
        "district" : "Chollabuk",
        "id" : 2393,
        "countrycode" : "KOR",
        "name" : "Kimje",
        "population" : 115427
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2394,
        "countrycode" : "KOR",
        "name" : "Yongchon",
        "population" : 113511
      },
      {
        "district" : "Kyongsangnam",
        "id" : 2395,
        "countrycode" : "KOR",
        "name" : "Sachon",
        "population" : 113494
      },
      {
        "district" : "Kyonggi",
        "id" : 2396,
        "countrycode" : "KOR",
        "name" : "Uiwang",
        "population" : 108788
      },
      {
        "district" : "Chollanam",
        "id" : 2397,
        "countrycode" : "KOR",
        "name" : "Naju",
        "population" : 107831
      },
      {
        "district" : "Chollabuk",
        "id" : 2398,
        "countrycode" : "KOR",
        "name" : "Namwon",
        "population" : 103544
      },
      {
        "district" : "Kang-won",
        "id" : 2399,
        "countrycode" : "KOR",
        "name" : "Tonghae",
        "population" : 95472
      },
      {
        "district" : "Kyongsangbuk",
        "id" : 2400,
        "countrycode" : "KOR",
        "name" : "Mun-gyong",
        "population" : 92239
      },
      {
        "district" : "Attika",
        "id" : 2401,
        "countrycode" : "GRC",
        "name" : "Athenai",
        "population" : 772072
      },
      {
        "district" : "Central Macedonia",
        "id" : 2402,
        "countrycode" : "GRC",
        "name" : "Thessaloniki",
        "population" : 383967
      },
      {
        "district" : "Attika",
        "id" : 2403,
        "countrycode" : "GRC",
        "name" : "Pireus",
        "population" : 182671
      },
      {
        "district" : "West Greece",
        "id" : 2404,
        "countrycode" : "GRC",
        "name" : "Patras",
        "population" : 153344
      },
      {
        "district" : "Attika",
        "id" : 2405,
        "countrycode" : "GRC",
        "name" : "Peristerion",
        "population" : 137288
      },
      {
        "district" : "Crete",
        "id" : 2406,
        "countrycode" : "GRC",
        "name" : "Herakleion",
        "population" : 116178
      },
      {
        "district" : "Attika",
        "id" : 2407,
        "countrycode" : "GRC",
        "name" : "Kallithea",
        "population" : 114233
      },
      {
        "district" : "Thessalia",
        "id" : 2408,
        "countrycode" : "GRC",
        "name" : "Larisa",
        "population" : 113090
      },
      {
        "district" : "Grad Zagreb",
        "id" : 2409,
        "countrycode" : "HRV",
        "name" : "Zagreb",
        "population" : 706770
      },
      {
        "district" : "Split-Dalmatia",
        "id" : 2410,
        "countrycode" : "HRV",
        "name" : "Split",
        "population" : 189388
      },
      {
        "district" : "Primorje-Gorski Kota",
        "id" : 2411,
        "countrycode" : "HRV",
        "name" : "Rijeka",
        "population" : 167964
      },
      {
        "district" : "Osijek-Baranja",
        "id" : 2412,
        "countrycode" : "HRV",
        "name" : "Osijek",
        "population" : 104761
      },
      {
        "district" : "La Habana",
        "id" : 2413,
        "countrycode" : "CUB",
        "name" : "La Habana",
        "population" : 2256000
      },
      {
        "district" : "Santiago de Cuba",
        "id" : 2414,
        "countrycode" : "CUB",
        "name" : "Santiago de Cuba",
        "population" : 433180
      },
      {
        "district" : "Camagï¿½ey",
        "id" : 2415,
        "countrycode" : "CUB",
        "name" : "Camagï¿½ey",
        "population" : 298726
      },
      {
        "district" : "Holguï¿½n",
        "id" : 2416,
        "countrycode" : "CUB",
        "name" : "Holguï¿½n",
        "population" : 249492
      },
      {
        "district" : "Villa Clara",
        "id" : 2417,
        "countrycode" : "CUB",
        "name" : "Santa Clara",
        "population" : 207350
      },
      {
        "district" : "Guantï¿½namo",
        "id" : 2418,
        "countrycode" : "CUB",
        "name" : "Guantï¿½namo",
        "population" : 205078
      },
      {
        "district" : "Pinar del Rï¿½o",
        "id" : 2419,
        "countrycode" : "CUB",
        "name" : "Pinar del Rï¿½o",
        "population" : 142100
      },
      {
        "district" : "Granma",
        "id" : 2420,
        "countrycode" : "CUB",
        "name" : "Bayamo",
        "population" : 141000
      },
      {
        "district" : "Cienfuegos",
        "id" : 2421,
        "countrycode" : "CUB",
        "name" : "Cienfuegos",
        "population" : 132770
      },
      {
        "district" : "Las Tunas",
        "id" : 2422,
        "countrycode" : "CUB",
        "name" : "Victoria de las Tunas",
        "population" : 132350
      },
      {
        "district" : "Matanzas",
        "id" : 2423,
        "countrycode" : "CUB",
        "name" : "Matanzas",
        "population" : 123273
      },
      {
        "district" : "Granma",
        "id" : 2424,
        "countrycode" : "CUB",
        "name" : "Manzanillo",
        "population" : 109350
      },
      {
        "district" : "Sancti-Spï¿½ritus",
        "id" : 2425,
        "countrycode" : "CUB",
        "name" : "Sancti-Spï¿½ritus",
        "population" : 100751
      },
      {
        "district" : "Ciego de ï¿½vila",
        "id" : 2426,
        "countrycode" : "CUB",
        "name" : "Ciego de ï¿½vila",
        "population" : 98505
      },
      {
        "district" : "Hawalli",
        "id" : 2427,
        "countrycode" : "KWT",
        "name" : "al-Salimiya",
        "population" : 130215
      },
      {
        "district" : "Hawalli",
        "id" : 2428,
        "countrycode" : "KWT",
        "name" : "Jalib al-Shuyukh",
        "population" : 102178
      },
      {
        "district" : "al-Asima",
        "id" : 2429,
        "countrycode" : "KWT",
        "name" : "Kuwait",
        "population" : 28859
      },
      {
        "district" : "Nicosia",
        "id" : 2430,
        "countrycode" : "CYP",
        "name" : "Nicosia",
        "population" : 195000
      },
      {
        "district" : "Limassol",
        "id" : 2431,
        "countrycode" : "CYP",
        "name" : "Limassol",
        "population" : 154400
      },
      {
        "district" : "Viangchan",
        "id" : 2432,
        "countrycode" : "LAO",
        "name" : "Vientiane",
        "population" : 531800
      },
      {
        "district" : "Savannakhet",
        "id" : 2433,
        "countrycode" : "LAO",
        "name" : "Savannakhet",
        "population" : 96652
      },
      {
        "district" : "Riika",
        "id" : 2434,
        "countrycode" : "LVA",
        "name" : "Riga",
        "population" : 764328
      },
      {
        "district" : "Daugavpils",
        "id" : 2435,
        "countrycode" : "LVA",
        "name" : "Daugavpils",
        "population" : 114829
      },
      {
        "district" : "Liepaja",
        "id" : 2436,
        "countrycode" : "LVA",
        "name" : "Liepaja",
        "population" : 89439
      },
      {
        "district" : "Maseru",
        "id" : 2437,
        "countrycode" : "LSO",
        "name" : "Maseru",
        "population" : 297000
      },
      {
        "district" : "Beirut",
        "id" : 2438,
        "countrycode" : "LBN",
        "name" : "Beirut",
        "population" : 1100000
      },
      {
        "district" : "al-Shamal",
        "id" : 2439,
        "countrycode" : "LBN",
        "name" : "Tripoli",
        "population" : 240000
      },
      {
        "district" : "Montserrado",
        "id" : 2440,
        "countrycode" : "LBR",
        "name" : "Monrovia",
        "population" : 850000
      },
      {
        "district" : "Tripoli",
        "id" : 2441,
        "countrycode" : "LBY",
        "name" : "Tripoli",
        "population" : 1682000
      },
      {
        "district" : "Bengasi",
        "id" : 2442,
        "countrycode" : "LBY",
        "name" : "Bengasi",
        "population" : 804000
      },
      {
        "district" : "Misrata",
        "id" : 2443,
        "countrycode" : "LBY",
        "name" : "Misrata",
        "population" : 121669
      },
      {
        "district" : "al-Zawiya",
        "id" : 2444,
        "countrycode" : "LBY",
        "name" : "al-Zawiya",
        "population" : 89338
      },
      {
        "district" : "Schaan",
        "id" : 2445,
        "countrycode" : "LIE",
        "name" : "Schaan",
        "population" : 5346
      },
      {
        "district" : "Vaduz",
        "id" : 2446,
        "countrycode" : "LIE",
        "name" : "Vaduz",
        "population" : 5043
      },
      {
        "district" : "Vilna",
        "id" : 2447,
        "countrycode" : "LTU",
        "name" : "Vilnius",
        "population" : 577969
      },
      {
        "district" : "Kaunas",
        "id" : 2448,
        "countrycode" : "LTU",
        "name" : "Kaunas",
        "population" : 412639
      },
      {
        "district" : "Klaipeda",
        "id" : 2449,
        "countrycode" : "LTU",
        "name" : "Klaipeda",
        "population" : 202451
      },
      {
        "district" : "ï¿½iauliai",
        "id" : 2450,
        "countrycode" : "LTU",
        "name" : "ï¿½iauliai",
        "population" : 146563
      },
      {
        "district" : "Panevezys",
        "id" : 2451,
        "countrycode" : "LTU",
        "name" : "Panevezys",
        "population" : 133695
      },
      {
        "district" : "Luxembourg",
        "id" : 2452,
        "countrycode" : "LUX",
        "name" : "Luxembourg [Luxemburg\/Lï¿½tzebuerg]",
        "population" : 80700
      },
      {
        "district" : "El-Aaiï¿½n",
        "id" : 2453,
        "countrycode" : "ESH",
        "name" : "El-Aaiï¿½n",
        "population" : 169000
      },
      {
        "district" : "Macau",
        "id" : 2454,
        "countrycode" : "MAC",
        "name" : "Macao",
        "population" : 437500
      },
      {
        "district" : "Antananarivo",
        "id" : 2455,
        "countrycode" : "MDG",
        "name" : "Antananarivo",
        "population" : 675669
      },
      {
        "district" : "Toamasina",
        "id" : 2456,
        "countrycode" : "MDG",
        "name" : "Toamasina",
        "population" : 127441
      },
      {
        "district" : "Antananarivo",
        "id" : 2457,
        "countrycode" : "MDG",
        "name" : "Antsirabï¿½",
        "population" : 120239
      },
      {
        "district" : "Mahajanga",
        "id" : 2458,
        "countrycode" : "MDG",
        "name" : "Mahajanga",
        "population" : 100807
      },
      {
        "district" : "Fianarantsoa",
        "id" : 2459,
        "countrycode" : "MDG",
        "name" : "Fianarantsoa",
        "population" : 99005
      },
      {
        "district" : "Skopje",
        "id" : 2460,
        "countrycode" : "MKD",
        "name" : "Skopje",
        "population" : 444299
      },
      {
        "district" : "Blantyre",
        "id" : 2461,
        "countrycode" : "MWI",
        "name" : "Blantyre",
        "population" : 478155
      },
      {
        "district" : "Lilongwe",
        "id" : 2462,
        "countrycode" : "MWI",
        "name" : "Lilongwe",
        "population" : 435964
      },
      {
        "district" : "Maale",
        "id" : 2463,
        "countrycode" : "MDV",
        "name" : "Male",
        "population" : 71000
      },
      {
        "district" : "Wilayah Persekutuan",
        "id" : 2464,
        "countrycode" : "MYS",
        "name" : "Kuala Lumpur",
        "population" : 1297526
      },
      {
        "district" : "Perak",
        "id" : 2465,
        "countrycode" : "MYS",
        "name" : "Ipoh",
        "population" : 382853
      },
      {
        "district" : "Johor",
        "id" : 2466,
        "countrycode" : "MYS",
        "name" : "Johor Baharu",
        "population" : 328436
      },
      {
        "district" : "Selangor",
        "id" : 2467,
        "countrycode" : "MYS",
        "name" : "Petaling Jaya",
        "population" : 254350
      },
      {
        "district" : "Selangor",
        "id" : 2468,
        "countrycode" : "MYS",
        "name" : "Kelang",
        "population" : 243355
      },
      {
        "district" : "Terengganu",
        "id" : 2469,
        "countrycode" : "MYS",
        "name" : "Kuala Terengganu",
        "population" : 228119
      },
      {
        "district" : "Pulau Pinang",
        "id" : 2470,
        "countrycode" : "MYS",
        "name" : "Pinang",
        "population" : 219603
      },
      {
        "district" : "Kelantan",
        "id" : 2471,
        "countrycode" : "MYS",
        "name" : "Kota Bharu",
        "population" : 219582
      },
      {
        "district" : "Pahang",
        "id" : 2472,
        "countrycode" : "MYS",
        "name" : "Kuantan",
        "population" : 199484
      },
      {
        "district" : "Perak",
        "id" : 2473,
        "countrycode" : "MYS",
        "name" : "Taiping",
        "population" : 183261
      },
      {
        "district" : "Negeri Sembilan",
        "id" : 2474,
        "countrycode" : "MYS",
        "name" : "Seremban",
        "population" : 182869
      },
      {
        "district" : "Sarawak",
        "id" : 2475,
        "countrycode" : "MYS",
        "name" : "Kuching",
        "population" : 148059
      },
      {
        "district" : "Sarawak",
        "id" : 2476,
        "countrycode" : "MYS",
        "name" : "Sibu",
        "population" : 126381
      },
      {
        "district" : "Sabah",
        "id" : 2477,
        "countrycode" : "MYS",
        "name" : "Sandakan",
        "population" : 125841
      },
      {
        "district" : "Kedah",
        "id" : 2478,
        "countrycode" : "MYS",
        "name" : "Alor Setar",
        "population" : 124412
      },
      {
        "district" : "Selangor",
        "id" : 2479,
        "countrycode" : "MYS",
        "name" : "Selayang Baru",
        "population" : 124228
      },
      {
        "district" : "Kedah",
        "id" : 2480,
        "countrycode" : "MYS",
        "name" : "Sungai Petani",
        "population" : 114763
      },
      {
        "district" : "Selangor",
        "id" : 2481,
        "countrycode" : "MYS",
        "name" : "Shah Alam",
        "population" : 102019
      },
      {
        "district" : "Bamako",
        "id" : 2482,
        "countrycode" : "MLI",
        "name" : "Bamako",
        "population" : 809552
      },
      {
        "district" : "Outer Harbour",
        "id" : 2483,
        "countrycode" : "MLT",
        "name" : "Birkirkara",
        "population" : 21445
      },
      {
        "district" : "Inner Harbour",
        "id" : 2484,
        "countrycode" : "MLT",
        "name" : "Valletta",
        "population" : 7073
      },
      {
        "district" : "Casablanca",
        "id" : 2485,
        "countrycode" : "MAR",
        "name" : "Casablanca",
        "population" : 2940623
      },
      {
        "district" : "Rabat-Salï¿½-Zammour-Z",
        "id" : 2486,
        "countrycode" : "MAR",
        "name" : "Rabat",
        "population" : 623457
      },
      {
        "district" : "Marrakech-Tensift-Al",
        "id" : 2487,
        "countrycode" : "MAR",
        "name" : "Marrakech",
        "population" : 621914
      },
      {
        "district" : "Fï¿½s-Boulemane",
        "id" : 2488,
        "countrycode" : "MAR",
        "name" : "Fï¿½s",
        "population" : 541162
      },
      {
        "district" : "Tanger-Tï¿½touan",
        "id" : 2489,
        "countrycode" : "MAR",
        "name" : "Tanger",
        "population" : 521735
      },
      {
        "district" : "Rabat-Salï¿½-Zammour-Z",
        "id" : 2490,
        "countrycode" : "MAR",
        "name" : "Salï¿½",
        "population" : 504420
      },
      {
        "district" : "Meknï¿½s-Tafilalet",
        "id" : 2491,
        "countrycode" : "MAR",
        "name" : "Meknï¿½s",
        "population" : 460000
      },
      {
        "district" : "Oriental",
        "id" : 2492,
        "countrycode" : "MAR",
        "name" : "Oujda",
        "population" : 365382
      },
      {
        "district" : "Gharb-Chrarda-Bï¿½ni H",
        "id" : 2493,
        "countrycode" : "MAR",
        "name" : "Kï¿½nitra",
        "population" : 292600
      },
      {
        "district" : "Tanger-Tï¿½touan",
        "id" : 2494,
        "countrycode" : "MAR",
        "name" : "Tï¿½touan",
        "population" : 277516
      },
      {
        "district" : "Doukkala-Abda",
        "id" : 2495,
        "countrycode" : "MAR",
        "name" : "Safi",
        "population" : 262300
      },
      {
        "district" : "Souss Massa-Draï¿½",
        "id" : 2496,
        "countrycode" : "MAR",
        "name" : "Agadir",
        "population" : 155244
      },
      {
        "district" : "Casablanca",
        "id" : 2497,
        "countrycode" : "MAR",
        "name" : "Mohammedia",
        "population" : 154706
      },
      {
        "district" : "Chaouia-Ouardigha",
        "id" : 2498,
        "countrycode" : "MAR",
        "name" : "Khouribga",
        "population" : 152090
      },
      {
        "district" : "Tadla-Azilal",
        "id" : 2499,
        "countrycode" : "MAR",
        "name" : "Beni-Mellal",
        "population" : 140212
      },
      {
        "district" : "Rabat-Salï¿½-Zammour-Z",
        "id" : 2500,
        "countrycode" : "MAR",
        "name" : "Tï¿½mara",
        "population" : 126303
      },
      {
        "district" : "Doukkala-Abda",
        "id" : 2501,
        "countrycode" : "MAR",
        "name" : "El Jadida",
        "population" : 119083
      },
      {
        "district" : "Oriental",
        "id" : 2502,
        "countrycode" : "MAR",
        "name" : "Nador",
        "population" : 112450
      },
      {
        "district" : "Tanger-Tï¿½touan",
        "id" : 2503,
        "countrycode" : "MAR",
        "name" : "Ksar el Kebir",
        "population" : 107065
      },
      {
        "district" : "Chaouia-Ouardigha",
        "id" : 2504,
        "countrycode" : "MAR",
        "name" : "Settat",
        "population" : 96200
      },
      {
        "district" : "Taza-Al Hoceima-Taou",
        "id" : 2505,
        "countrycode" : "MAR",
        "name" : "Taza",
        "population" : 92700
      },
      {
        "district" : "Tanger-Tï¿½touan",
        "id" : 2506,
        "countrycode" : "MAR",
        "name" : "El Araich",
        "population" : 90400
      },
      {
        "district" : "Majuro",
        "id" : 2507,
        "countrycode" : "MHL",
        "name" : "Dalap-Uliga-Darrit",
        "population" : 28000
      },
      {
        "district" : "Fort-de-France",
        "id" : 2508,
        "countrycode" : "MTQ",
        "name" : "Fort-de-France",
        "population" : 94050
      },
      {
        "district" : "Nouakchott",
        "id" : 2509,
        "countrycode" : "MRT",
        "name" : "Nouakchott",
        "population" : 667300
      },
      {
        "district" : "Dakhlet Nouï¿½dhibou",
        "id" : 2510,
        "countrycode" : "MRT",
        "name" : "Nouï¿½dhibou",
        "population" : 97600
      },
      {
        "district" : "Port-Louis",
        "id" : 2511,
        "countrycode" : "MUS",
        "name" : "Port-Louis",
        "population" : 138200
      },
      {
        "district" : "Plaines Wilhelms",
        "id" : 2512,
        "countrycode" : "MUS",
        "name" : "Beau Bassin-Rose Hill",
        "population" : 100616
      },
      {
        "district" : "Plaines Wilhelms",
        "id" : 2513,
        "countrycode" : "MUS",
        "name" : "Vacoas-Phoenix",
        "population" : 98464
      },
      {
        "district" : "Mamoutzou",
        "id" : 2514,
        "countrycode" : "MYT",
        "name" : "Mamoutzou",
        "population" : 12000
      },
      {
        "district" : "Distrito Federal",
        "id" : 2515,
        "countrycode" : "MEX",
        "name" : "Ciudad de Mï¿½xico",
        "population" : 8591309
      },
      {
        "district" : "Jalisco",
        "id" : 2516,
        "countrycode" : "MEX",
        "name" : "Guadalajara",
        "population" : 1647720
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2517,
        "countrycode" : "MEX",
        "name" : "Ecatepec de Morelos",
        "population" : 1620303
      },
      {
        "district" : "Puebla",
        "id" : 2518,
        "countrycode" : "MEX",
        "name" : "Puebla",
        "population" : 1346176
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2519,
        "countrycode" : "MEX",
        "name" : "Nezahualcï¿½yotl",
        "population" : 1224924
      },
      {
        "district" : "Chihuahua",
        "id" : 2520,
        "countrycode" : "MEX",
        "name" : "Juï¿½rez",
        "population" : 1217818
      },
      {
        "district" : "Baja California",
        "id" : 2521,
        "countrycode" : "MEX",
        "name" : "Tijuana",
        "population" : 1212232
      },
      {
        "district" : "Guanajuato",
        "id" : 2522,
        "countrycode" : "MEX",
        "name" : "Leï¿½n",
        "population" : 1133576
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2523,
        "countrycode" : "MEX",
        "name" : "Monterrey",
        "population" : 1108499
      },
      {
        "district" : "Jalisco",
        "id" : 2524,
        "countrycode" : "MEX",
        "name" : "Zapopan",
        "population" : 1002239
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2525,
        "countrycode" : "MEX",
        "name" : "Naucalpan de Juï¿½rez",
        "population" : 857511
      },
      {
        "district" : "Baja California",
        "id" : 2526,
        "countrycode" : "MEX",
        "name" : "Mexicali",
        "population" : 764902
      },
      {
        "district" : "Sinaloa",
        "id" : 2527,
        "countrycode" : "MEX",
        "name" : "Culiacï¿½n",
        "population" : 744859
      },
      {
        "district" : "Guerrero",
        "id" : 2528,
        "countrycode" : "MEX",
        "name" : "Acapulco de Juï¿½rez",
        "population" : 721011
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2529,
        "countrycode" : "MEX",
        "name" : "Tlalnepantla de Baz",
        "population" : 720755
      },
      {
        "district" : "Yucatï¿½n",
        "id" : 2530,
        "countrycode" : "MEX",
        "name" : "Mï¿½rida",
        "population" : 703324
      },
      {
        "district" : "Chihuahua",
        "id" : 2531,
        "countrycode" : "MEX",
        "name" : "Chihuahua",
        "population" : 670208
      },
      {
        "district" : "San Luis Potosï¿½",
        "id" : 2532,
        "countrycode" : "MEX",
        "name" : "San Luis Potosï¿½",
        "population" : 669353
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2533,
        "countrycode" : "MEX",
        "name" : "Guadalupe",
        "population" : 668780
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2534,
        "countrycode" : "MEX",
        "name" : "Toluca",
        "population" : 665617
      },
      {
        "district" : "Aguascalientes",
        "id" : 2535,
        "countrycode" : "MEX",
        "name" : "Aguascalientes",
        "population" : 643360
      },
      {
        "district" : "Querï¿½taro de Arteaga",
        "id" : 2536,
        "countrycode" : "MEX",
        "name" : "Querï¿½taro",
        "population" : 639839
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2537,
        "countrycode" : "MEX",
        "name" : "Morelia",
        "population" : 619958
      },
      {
        "district" : "Sonora",
        "id" : 2538,
        "countrycode" : "MEX",
        "name" : "Hermosillo",
        "population" : 608697
      },
      {
        "district" : "Coahuila de Zaragoza",
        "id" : 2539,
        "countrycode" : "MEX",
        "name" : "Saltillo",
        "population" : 577352
      },
      {
        "district" : "Coahuila de Zaragoza",
        "id" : 2540,
        "countrycode" : "MEX",
        "name" : "Torreï¿½n",
        "population" : 529093
      },
      {
        "district" : "Tabasco",
        "id" : 2541,
        "countrycode" : "MEX",
        "name" : "Centro (Villahermosa)",
        "population" : 519873
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2542,
        "countrycode" : "MEX",
        "name" : "San Nicolï¿½s de los Garza",
        "population" : 495540
      },
      {
        "district" : "Durango",
        "id" : 2543,
        "countrycode" : "MEX",
        "name" : "Durango",
        "population" : 490524
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2544,
        "countrycode" : "MEX",
        "name" : "Chimalhuacï¿½n",
        "population" : 490245
      },
      {
        "district" : "Jalisco",
        "id" : 2545,
        "countrycode" : "MEX",
        "name" : "Tlaquepaque",
        "population" : 475472
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2546,
        "countrycode" : "MEX",
        "name" : "Atizapï¿½n de Zaragoza",
        "population" : 467262
      },
      {
        "district" : "Veracruz",
        "id" : 2547,
        "countrycode" : "MEX",
        "name" : "Veracruz",
        "population" : 457119
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2548,
        "countrycode" : "MEX",
        "name" : "Cuautitlï¿½n Izcalli",
        "population" : 452976
      },
      {
        "district" : "Guanajuato",
        "id" : 2549,
        "countrycode" : "MEX",
        "name" : "Irapuato",
        "population" : 440039
      },
      {
        "district" : "Chiapas",
        "id" : 2550,
        "countrycode" : "MEX",
        "name" : "Tuxtla Gutiï¿½rrez",
        "population" : 433544
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2551,
        "countrycode" : "MEX",
        "name" : "Tultitlï¿½n",
        "population" : 432411
      },
      {
        "district" : "Tamaulipas",
        "id" : 2552,
        "countrycode" : "MEX",
        "name" : "Reynosa",
        "population" : 419776
      },
      {
        "district" : "Quintana Roo",
        "id" : 2553,
        "countrycode" : "MEX",
        "name" : "Benito Juï¿½rez",
        "population" : 419276
      },
      {
        "district" : "Tamaulipas",
        "id" : 2554,
        "countrycode" : "MEX",
        "name" : "Matamoros",
        "population" : 416428
      },
      {
        "district" : "Veracruz",
        "id" : 2555,
        "countrycode" : "MEX",
        "name" : "Xalapa",
        "population" : 390058
      },
      {
        "district" : "Guanajuato",
        "id" : 2556,
        "countrycode" : "MEX",
        "name" : "Celaya",
        "population" : 382140
      },
      {
        "district" : "Sinaloa",
        "id" : 2557,
        "countrycode" : "MEX",
        "name" : "Mazatlï¿½n",
        "population" : 380265
      },
      {
        "district" : "Baja California",
        "id" : 2558,
        "countrycode" : "MEX",
        "name" : "Ensenada",
        "population" : 369573
      },
      {
        "district" : "Sinaloa",
        "id" : 2559,
        "countrycode" : "MEX",
        "name" : "Ahome",
        "population" : 358663
      },
      {
        "district" : "Sonora",
        "id" : 2560,
        "countrycode" : "MEX",
        "name" : "Cajeme",
        "population" : 355679
      },
      {
        "district" : "Morelos",
        "id" : 2561,
        "countrycode" : "MEX",
        "name" : "Cuernavaca",
        "population" : 337966
      },
      {
        "district" : "Jalisco",
        "id" : 2562,
        "countrycode" : "MEX",
        "name" : "Tonalï¿½",
        "population" : 336109
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2563,
        "countrycode" : "MEX",
        "name" : "Valle de Chalco Solidaridad",
        "population" : 323113
      },
      {
        "district" : "Tamaulipas",
        "id" : 2564,
        "countrycode" : "MEX",
        "name" : "Nuevo Laredo",
        "population" : 310277
      },
      {
        "district" : "Nayarit",
        "id" : 2565,
        "countrycode" : "MEX",
        "name" : "Tepic",
        "population" : 305025
      },
      {
        "district" : "Tamaulipas",
        "id" : 2566,
        "countrycode" : "MEX",
        "name" : "Tampico",
        "population" : 294789
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2567,
        "countrycode" : "MEX",
        "name" : "Ixtapaluca",
        "population" : 293160
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2568,
        "countrycode" : "MEX",
        "name" : "Apodaca",
        "population" : 282941
      },
      {
        "district" : "Sinaloa",
        "id" : 2569,
        "countrycode" : "MEX",
        "name" : "Guasave",
        "population" : 277201
      },
      {
        "district" : "Durango",
        "id" : 2570,
        "countrycode" : "MEX",
        "name" : "Gï¿½mez Palacio",
        "population" : 272806
      },
      {
        "district" : "Chiapas",
        "id" : 2571,
        "countrycode" : "MEX",
        "name" : "Tapachula",
        "population" : 271141
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2572,
        "countrycode" : "MEX",
        "name" : "Nicolï¿½s Romero",
        "population" : 269393
      },
      {
        "district" : "Veracruz",
        "id" : 2573,
        "countrycode" : "MEX",
        "name" : "Coatzacoalcos",
        "population" : 267037
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2574,
        "countrycode" : "MEX",
        "name" : "Uruapan",
        "population" : 265211
      },
      {
        "district" : "Tamaulipas",
        "id" : 2575,
        "countrycode" : "MEX",
        "name" : "Victoria",
        "population" : 262686
      },
      {
        "district" : "Oaxaca",
        "id" : 2576,
        "countrycode" : "MEX",
        "name" : "Oaxaca de Juï¿½rez",
        "population" : 256848
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2577,
        "countrycode" : "MEX",
        "name" : "Coacalco de Berriozï¿½bal",
        "population" : 252270
      },
      {
        "district" : "Hidalgo",
        "id" : 2578,
        "countrycode" : "MEX",
        "name" : "Pachuca de Soto",
        "population" : 244688
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2579,
        "countrycode" : "MEX",
        "name" : "General Escobedo",
        "population" : 232961
      },
      {
        "district" : "Guanajuato",
        "id" : 2580,
        "countrycode" : "MEX",
        "name" : "Salamanca",
        "population" : 226864
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2581,
        "countrycode" : "MEX",
        "name" : "Santa Catarina",
        "population" : 226573
      },
      {
        "district" : "Puebla",
        "id" : 2582,
        "countrycode" : "MEX",
        "name" : "Tehuacï¿½n",
        "population" : 225943
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2583,
        "countrycode" : "MEX",
        "name" : "Chalco",
        "population" : 222201
      },
      {
        "district" : "Tabasco",
        "id" : 2584,
        "countrycode" : "MEX",
        "name" : "Cï¿½rdenas",
        "population" : 216903
      },
      {
        "district" : "Campeche",
        "id" : 2585,
        "countrycode" : "MEX",
        "name" : "Campeche",
        "population" : 216735
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2586,
        "countrycode" : "MEX",
        "name" : "La Paz",
        "population" : 213045
      },
      {
        "district" : "Quintana Roo",
        "id" : 2587,
        "countrycode" : "MEX",
        "name" : "Othï¿½n P. Blanco (Chetumal)",
        "population" : 208014
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2588,
        "countrycode" : "MEX",
        "name" : "Texcoco",
        "population" : 203681
      },
      {
        "district" : "Baja California Sur",
        "id" : 2589,
        "countrycode" : "MEX",
        "name" : "La Paz",
        "population" : 196708
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2590,
        "countrycode" : "MEX",
        "name" : "Metepec",
        "population" : 194265
      },
      {
        "district" : "Coahuila de Zaragoza",
        "id" : 2591,
        "countrycode" : "MEX",
        "name" : "Monclova",
        "population" : 193657
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2592,
        "countrycode" : "MEX",
        "name" : "Huixquilucan",
        "population" : 193156
      },
      {
        "district" : "Guerrero",
        "id" : 2593,
        "countrycode" : "MEX",
        "name" : "Chilpancingo de los Bravo",
        "population" : 192509
      },
      {
        "district" : "Jalisco",
        "id" : 2594,
        "countrycode" : "MEX",
        "name" : "Puerto Vallarta",
        "population" : 183741
      },
      {
        "district" : "Zacatecas",
        "id" : 2595,
        "countrycode" : "MEX",
        "name" : "Fresnillo",
        "population" : 182744
      },
      {
        "district" : "Tamaulipas",
        "id" : 2596,
        "countrycode" : "MEX",
        "name" : "Ciudad Madero",
        "population" : 182012
      },
      {
        "district" : "San Luis Potosï¿½",
        "id" : 2597,
        "countrycode" : "MEX",
        "name" : "Soledad de Graciano Sï¿½nchez",
        "population" : 179956
      },
      {
        "district" : "Querï¿½taro",
        "id" : 2598,
        "countrycode" : "MEX",
        "name" : "San Juan del Rï¿½o",
        "population" : 179300
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2599,
        "countrycode" : "MEX",
        "name" : "San Felipe del Progreso",
        "population" : 177330
      },
      {
        "district" : "Veracruz",
        "id" : 2600,
        "countrycode" : "MEX",
        "name" : "Cï¿½rdoba",
        "population" : 176952
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2601,
        "countrycode" : "MEX",
        "name" : "Tecï¿½mac",
        "population" : 172410
      },
      {
        "district" : "Chiapas",
        "id" : 2602,
        "countrycode" : "MEX",
        "name" : "Ocosingo",
        "population" : 171495
      },
      {
        "district" : "Campeche",
        "id" : 2603,
        "countrycode" : "MEX",
        "name" : "Carmen",
        "population" : 171367
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2604,
        "countrycode" : "MEX",
        "name" : "Lï¿½zaro Cï¿½rdenas",
        "population" : 170878
      },
      {
        "district" : "Morelos",
        "id" : 2605,
        "countrycode" : "MEX",
        "name" : "Jiutepec",
        "population" : 170428
      },
      {
        "district" : "Veracruz",
        "id" : 2606,
        "countrycode" : "MEX",
        "name" : "Papantla",
        "population" : 170123
      },
      {
        "district" : "Tabasco",
        "id" : 2607,
        "countrycode" : "MEX",
        "name" : "Comalcalco",
        "population" : 164640
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2608,
        "countrycode" : "MEX",
        "name" : "Zamora",
        "population" : 161191
      },
      {
        "district" : "Sonora",
        "id" : 2609,
        "countrycode" : "MEX",
        "name" : "Nogales",
        "population" : 159103
      },
      {
        "district" : "Tabasco",
        "id" : 2610,
        "countrycode" : "MEX",
        "name" : "Huimanguillo",
        "population" : 158335
      },
      {
        "district" : "Morelos",
        "id" : 2611,
        "countrycode" : "MEX",
        "name" : "Cuautla",
        "population" : 153132
      },
      {
        "district" : "Veracruz",
        "id" : 2612,
        "countrycode" : "MEX",
        "name" : "Minatitlï¿½n",
        "population" : 152983
      },
      {
        "district" : "Veracruz",
        "id" : 2613,
        "countrycode" : "MEX",
        "name" : "Poza Rica de Hidalgo",
        "population" : 152678
      },
      {
        "district" : "San Luis Potosï¿½",
        "id" : 2614,
        "countrycode" : "MEX",
        "name" : "Ciudad Valles",
        "population" : 146411
      },
      {
        "district" : "Sinaloa",
        "id" : 2615,
        "countrycode" : "MEX",
        "name" : "Navolato",
        "population" : 145396
      },
      {
        "district" : "Sonora",
        "id" : 2616,
        "countrycode" : "MEX",
        "name" : "San Luis Rï¿½o Colorado",
        "population" : 145276
      },
      {
        "district" : "Guanajuato",
        "id" : 2617,
        "countrycode" : "MEX",
        "name" : "Pï¿½njamo",
        "population" : 143927
      },
      {
        "district" : "Veracruz",
        "id" : 2618,
        "countrycode" : "MEX",
        "name" : "San Andrï¿½s Tuxtla",
        "population" : 142251
      },
      {
        "district" : "Guanajuato",
        "id" : 2619,
        "countrycode" : "MEX",
        "name" : "Guanajuato",
        "population" : 141215
      },
      {
        "district" : "Sonora",
        "id" : 2620,
        "countrycode" : "MEX",
        "name" : "Navojoa",
        "population" : 140495
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2621,
        "countrycode" : "MEX",
        "name" : "Zitï¿½cuaro",
        "population" : 137970
      },
      {
        "district" : "Veracruz-Llave",
        "id" : 2622,
        "countrycode" : "MEX",
        "name" : "Boca del Rï¿½o",
        "population" : 135721
      },
      {
        "district" : "Guanajuato",
        "id" : 2623,
        "countrycode" : "MEX",
        "name" : "Allende",
        "population" : 134645
      },
      {
        "district" : "Guanajuato",
        "id" : 2624,
        "countrycode" : "MEX",
        "name" : "Silao",
        "population" : 134037
      },
      {
        "district" : "Tabasco",
        "id" : 2625,
        "countrycode" : "MEX",
        "name" : "Macuspana",
        "population" : 133795
      },
      {
        "district" : "Oaxaca",
        "id" : 2626,
        "countrycode" : "MEX",
        "name" : "San Juan Bautista Tuxtepec",
        "population" : 133675
      },
      {
        "district" : "Chiapas",
        "id" : 2627,
        "countrycode" : "MEX",
        "name" : "San Cristï¿½bal de las Casas",
        "population" : 132317
      },
      {
        "district" : "Guanajuato",
        "id" : 2628,
        "countrycode" : "MEX",
        "name" : "Valle de Santiago",
        "population" : 130557
      },
      {
        "district" : "Sonora",
        "id" : 2629,
        "countrycode" : "MEX",
        "name" : "Guaymas",
        "population" : 130108
      },
      {
        "district" : "Colima",
        "id" : 2630,
        "countrycode" : "MEX",
        "name" : "Colima",
        "population" : 129454
      },
      {
        "district" : "Guanajuato",
        "id" : 2631,
        "countrycode" : "MEX",
        "name" : "Dolores Hidalgo",
        "population" : 128675
      },
      {
        "district" : "Jalisco",
        "id" : 2632,
        "countrycode" : "MEX",
        "name" : "Lagos de Moreno",
        "population" : 127949
      },
      {
        "district" : "Coahuila de Zaragoza",
        "id" : 2633,
        "countrycode" : "MEX",
        "name" : "Piedras Negras",
        "population" : 127898
      },
      {
        "district" : "Tamaulipas",
        "id" : 2634,
        "countrycode" : "MEX",
        "name" : "Altamira",
        "population" : 127490
      },
      {
        "district" : "Veracruz",
        "id" : 2635,
        "countrycode" : "MEX",
        "name" : "Tï¿½xpam",
        "population" : 126475
      },
      {
        "district" : "Nuevo Leï¿½n",
        "id" : 2636,
        "countrycode" : "MEX",
        "name" : "San Pedro Garza Garcï¿½a",
        "population" : 126147
      },
      {
        "district" : "Chihuahua",
        "id" : 2637,
        "countrycode" : "MEX",
        "name" : "Cuauhtï¿½moc",
        "population" : 124279
      },
      {
        "district" : "Colima",
        "id" : 2638,
        "countrycode" : "MEX",
        "name" : "Manzanillo",
        "population" : 124014
      },
      {
        "district" : "Guerrero",
        "id" : 2639,
        "countrycode" : "MEX",
        "name" : "Iguala de la Independencia",
        "population" : 123883
      },
      {
        "district" : "Zacatecas",
        "id" : 2640,
        "countrycode" : "MEX",
        "name" : "Zacatecas",
        "population" : 123700
      },
      {
        "district" : "Jalisco",
        "id" : 2641,
        "countrycode" : "MEX",
        "name" : "Tlajomulco de Zï¿½ï¿½iga",
        "population" : 123220
      },
      {
        "district" : "Hidalgo",
        "id" : 2642,
        "countrycode" : "MEX",
        "name" : "Tulancingo de Bravo",
        "population" : 121946
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2643,
        "countrycode" : "MEX",
        "name" : "Zinacantepec",
        "population" : 121715
      },
      {
        "district" : "Puebla",
        "id" : 2644,
        "countrycode" : "MEX",
        "name" : "San Martï¿½n Texmelucan",
        "population" : 121093
      },
      {
        "district" : "Jalisco",
        "id" : 2645,
        "countrycode" : "MEX",
        "name" : "Tepatitlï¿½n de Morelos",
        "population" : 118948
      },
      {
        "district" : "Veracruz",
        "id" : 2646,
        "countrycode" : "MEX",
        "name" : "Martï¿½nez de la Torre",
        "population" : 118815
      },
      {
        "district" : "Veracruz",
        "id" : 2647,
        "countrycode" : "MEX",
        "name" : "Orizaba",
        "population" : 118488
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2648,
        "countrycode" : "MEX",
        "name" : "Apatzingï¿½n",
        "population" : 117849
      },
      {
        "district" : "Puebla",
        "id" : 2649,
        "countrycode" : "MEX",
        "name" : "Atlixco",
        "population" : 117019
      },
      {
        "district" : "Chihuahua",
        "id" : 2650,
        "countrycode" : "MEX",
        "name" : "Delicias",
        "population" : 116132
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2651,
        "countrycode" : "MEX",
        "name" : "Ixtlahuaca",
        "population" : 115548
      },
      {
        "district" : "Tamaulipas",
        "id" : 2652,
        "countrycode" : "MEX",
        "name" : "El Mante",
        "population" : 112453
      },
      {
        "district" : "Durango",
        "id" : 2653,
        "countrycode" : "MEX",
        "name" : "Lerdo",
        "population" : 112272
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2654,
        "countrycode" : "MEX",
        "name" : "Almoloya de Juï¿½rez",
        "population" : 110550
      },
      {
        "district" : "Guanajuato",
        "id" : 2655,
        "countrycode" : "MEX",
        "name" : "Acï¿½mbaro",
        "population" : 110487
      },
      {
        "district" : "Coahuila de Zaragoza",
        "id" : 2656,
        "countrycode" : "MEX",
        "name" : "Acuï¿½a",
        "population" : 110388
      },
      {
        "district" : "Zacatecas",
        "id" : 2657,
        "countrycode" : "MEX",
        "name" : "Guadalupe",
        "population" : 108881
      },
      {
        "district" : "Hidalgo",
        "id" : 2658,
        "countrycode" : "MEX",
        "name" : "Huejutla de Reyes",
        "population" : 108017
      },
      {
        "district" : "Michoacï¿½n de Ocampo",
        "id" : 2659,
        "countrycode" : "MEX",
        "name" : "Hidalgo",
        "population" : 106198
      },
      {
        "district" : "Baja California Sur",
        "id" : 2660,
        "countrycode" : "MEX",
        "name" : "Los Cabos",
        "population" : 105199
      },
      {
        "district" : "Chiapas",
        "id" : 2661,
        "countrycode" : "MEX",
        "name" : "Comitï¿½n de Domï¿½nguez",
        "population" : 104986
      },
      {
        "district" : "Tabasco",
        "id" : 2662,
        "countrycode" : "MEX",
        "name" : "Cunduacï¿½n",
        "population" : 104164
      },
      {
        "district" : "Tamaulipas",
        "id" : 2663,
        "countrycode" : "MEX",
        "name" : "Rï¿½o Bravo",
        "population" : 103901
      },
      {
        "district" : "Veracruz",
        "id" : 2664,
        "countrycode" : "MEX",
        "name" : "Temapache",
        "population" : 102824
      },
      {
        "district" : "Guerrero",
        "id" : 2665,
        "countrycode" : "MEX",
        "name" : "Chilapa de Alvarez",
        "population" : 102716
      },
      {
        "district" : "Chihuahua",
        "id" : 2666,
        "countrycode" : "MEX",
        "name" : "Hidalgo del Parral",
        "population" : 100881
      },
      {
        "district" : "Guanajuato",
        "id" : 2667,
        "countrycode" : "MEX",
        "name" : "San Francisco del Rincï¿½n",
        "population" : 100149
      },
      {
        "district" : "Guerrero",
        "id" : 2668,
        "countrycode" : "MEX",
        "name" : "Taxco de Alarcï¿½n",
        "population" : 99907
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2669,
        "countrycode" : "MEX",
        "name" : "Zumpango",
        "population" : 99781
      },
      {
        "district" : "Puebla",
        "id" : 2670,
        "countrycode" : "MEX",
        "name" : "San Pedro Cholula",
        "population" : 99734
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2671,
        "countrycode" : "MEX",
        "name" : "Lerma",
        "population" : 99714
      },
      {
        "district" : "Colima",
        "id" : 2672,
        "countrycode" : "MEX",
        "name" : "Tecomï¿½n",
        "population" : 99296
      },
      {
        "district" : "Chiapas",
        "id" : 2673,
        "countrycode" : "MEX",
        "name" : "Las Margaritas",
        "population" : 97389
      },
      {
        "district" : "Veracruz",
        "id" : 2674,
        "countrycode" : "MEX",
        "name" : "Cosoleacaque",
        "population" : 97199
      },
      {
        "district" : "Guanajuato",
        "id" : 2675,
        "countrycode" : "MEX",
        "name" : "San Luis de la Paz",
        "population" : 96763
      },
      {
        "district" : "Guerrero",
        "id" : 2676,
        "countrycode" : "MEX",
        "name" : "Josï¿½ Azueta",
        "population" : 95448
      },
      {
        "district" : "Nayarit",
        "id" : 2677,
        "countrycode" : "MEX",
        "name" : "Santiago Ixcuintla",
        "population" : 95311
      },
      {
        "district" : "Guanajuato",
        "id" : 2678,
        "countrycode" : "MEX",
        "name" : "San Felipe",
        "population" : 95305
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2679,
        "countrycode" : "MEX",
        "name" : "Tejupilco",
        "population" : 94934
      },
      {
        "district" : "Veracruz",
        "id" : 2680,
        "countrycode" : "MEX",
        "name" : "Tantoyuca",
        "population" : 94709
      },
      {
        "district" : "Guanajuato",
        "id" : 2681,
        "countrycode" : "MEX",
        "name" : "Salvatierra",
        "population" : 94322
      },
      {
        "district" : "Mï¿½xico",
        "id" : 2682,
        "countrycode" : "MEX",
        "name" : "Tultepec",
        "population" : 93364
      },
      {
        "district" : "Morelos",
        "id" : 2683,
        "countrycode" : "MEX",
        "name" : "Temixco",
        "population" : 92686
      },
      {
        "district" : "Coahuila de Zaragoza",
        "id" : 2684,
        "countrycode" : "MEX",
        "name" : "Matamoros",
        "population" : 91858
      },
      {
        "district" : "Veracruz",
        "id" : 2685,
        "countrycode" : "MEX",
        "name" : "Pï¿½nuco",
        "population" : 90551
      },
      {
        "district" : "Sinaloa",
        "id" : 2686,
        "countrycode" : "MEX",
        "name" : "El Fuerte",
        "population" : 89556
      },
      {
        "district" : "Veracruz",
        "id" : 2687,
        "countrycode" : "MEX",
        "name" : "Tierra Blanca",
        "population" : 89143
      },
      {
        "district" : "Chuuk",
        "id" : 2688,
        "countrycode" : "FSM",
        "name" : "Weno",
        "population" : 22000
      },
      {
        "district" : "Pohnpei",
        "id" : 2689,
        "countrycode" : "FSM",
        "name" : "Palikir",
        "population" : 8600
      },
      {
        "district" : "Chisinau",
        "id" : 2690,
        "countrycode" : "MDA",
        "name" : "Chisinau",
        "population" : 719900
      },
      {
        "district" : "Dnjestria",
        "id" : 2691,
        "countrycode" : "MDA",
        "name" : "Tiraspol",
        "population" : 194300
      },
      {
        "district" : "Balti",
        "id" : 2692,
        "countrycode" : "MDA",
        "name" : "Balti",
        "population" : 153400
      },
      {
        "district" : "Bender (Tï¿½ghina)",
        "id" : 2693,
        "countrycode" : "MDA",
        "name" : "Bender (Tï¿½ghina)",
        "population" : 125700
      },
      {
        "district" : "ï¿½",
        "id" : 2694,
        "countrycode" : "MCO",
        "name" : "Monte-Carlo",
        "population" : 13154
      },
      {
        "district" : "ï¿½",
        "id" : 2695,
        "countrycode" : "MCO",
        "name" : "Monaco-Ville",
        "population" : 1234
      },
      {
        "district" : "Ulaanbaatar",
        "id" : 2696,
        "countrycode" : "MNG",
        "name" : "Ulan Bator",
        "population" : 773700
      },
      {
        "district" : "Plymouth",
        "id" : 2697,
        "countrycode" : "MSR",
        "name" : "Plymouth",
        "population" : 2000
      },
      {
        "district" : "Maputo",
        "id" : 2698,
        "countrycode" : "MOZ",
        "name" : "Maputo",
        "population" : 1018938
      },
      {
        "district" : "Maputo",
        "id" : 2699,
        "countrycode" : "MOZ",
        "name" : "Matola",
        "population" : 424662
      },
      {
        "district" : "Sofala",
        "id" : 2700,
        "countrycode" : "MOZ",
        "name" : "Beira",
        "population" : 397368
      },
      {
        "district" : "Nampula",
        "id" : 2701,
        "countrycode" : "MOZ",
        "name" : "Nampula",
        "population" : 303346
      },
      {
        "district" : "Manica",
        "id" : 2702,
        "countrycode" : "MOZ",
        "name" : "Chimoio",
        "population" : 171056
      },
      {
        "district" : "Nampula",
        "id" : 2703,
        "countrycode" : "MOZ",
        "name" : "Naï¿½ala-Porto",
        "population" : 158248
      },
      {
        "district" : "Zambï¿½zia",
        "id" : 2704,
        "countrycode" : "MOZ",
        "name" : "Quelimane",
        "population" : 150116
      },
      {
        "district" : "Zambï¿½zia",
        "id" : 2705,
        "countrycode" : "MOZ",
        "name" : "Mocuba",
        "population" : 124700
      },
      {
        "district" : "Tete",
        "id" : 2706,
        "countrycode" : "MOZ",
        "name" : "Tete",
        "population" : 101984
      },
      {
        "district" : "Gaza",
        "id" : 2707,
        "countrycode" : "MOZ",
        "name" : "Xai-Xai",
        "population" : 99442
      },
      {
        "district" : "Zambï¿½zia",
        "id" : 2708,
        "countrycode" : "MOZ",
        "name" : "Gurue",
        "population" : 99300
      },
      {
        "district" : "Inhambane",
        "id" : 2709,
        "countrycode" : "MOZ",
        "name" : "Maxixe",
        "population" : 93985
      },
      {
        "district" : "Rangoon [Yangon]",
        "id" : 2710,
        "countrycode" : "MMR",
        "name" : "Rangoon (Yangon)",
        "population" : 3361700
      },
      {
        "district" : "Mandalay",
        "id" : 2711,
        "countrycode" : "MMR",
        "name" : "Mandalay",
        "population" : 885300
      },
      {
        "district" : "Mon",
        "id" : 2712,
        "countrycode" : "MMR",
        "name" : "Moulmein (Mawlamyine)",
        "population" : 307900
      },
      {
        "district" : "Pegu [Bago]",
        "id" : 2713,
        "countrycode" : "MMR",
        "name" : "Pegu (Bago)",
        "population" : 190900
      },
      {
        "district" : "Irrawaddy [Ayeyarwad",
        "id" : 2714,
        "countrycode" : "MMR",
        "name" : "Bassein (Pathein)",
        "population" : 183900
      },
      {
        "district" : "Sagaing",
        "id" : 2715,
        "countrycode" : "MMR",
        "name" : "Monywa",
        "population" : 138600
      },
      {
        "district" : "Rakhine",
        "id" : 2716,
        "countrycode" : "MMR",
        "name" : "Sittwe (Akyab)",
        "population" : 137600
      },
      {
        "district" : "Shan",
        "id" : 2717,
        "countrycode" : "MMR",
        "name" : "Taunggyi (Taunggye)",
        "population" : 131500
      },
      {
        "district" : "Mandalay",
        "id" : 2718,
        "countrycode" : "MMR",
        "name" : "Meikhtila",
        "population" : 129700
      },
      {
        "district" : "Tenasserim [Tanintha",
        "id" : 2719,
        "countrycode" : "MMR",
        "name" : "Mergui (Myeik)",
        "population" : 122700
      },
      {
        "district" : "Shan",
        "id" : 2720,
        "countrycode" : "MMR",
        "name" : "Lashio (Lasho)",
        "population" : 107600
      },
      {
        "district" : "Pegu [Bago]",
        "id" : 2721,
        "countrycode" : "MMR",
        "name" : "Prome (Pyay)",
        "population" : 105700
      },
      {
        "district" : "Irrawaddy [Ayeyarwad",
        "id" : 2722,
        "countrycode" : "MMR",
        "name" : "Henzada (Hinthada)",
        "population" : 104700
      },
      {
        "district" : "Mandalay",
        "id" : 2723,
        "countrycode" : "MMR",
        "name" : "Myingyan",
        "population" : 103600
      },
      {
        "district" : "Tenasserim [Tanintha",
        "id" : 2724,
        "countrycode" : "MMR",
        "name" : "Tavoy (Dawei)",
        "population" : 96800
      },
      {
        "district" : "Magwe [Magway]",
        "id" : 2725,
        "countrycode" : "MMR",
        "name" : "Pagakku (Pakokku)",
        "population" : 94800
      },
      {
        "district" : "Khomas",
        "id" : 2726,
        "countrycode" : "NAM",
        "name" : "Windhoek",
        "population" : 169000
      },
      {
        "district" : "ï¿½",
        "id" : 2727,
        "countrycode" : "NRU",
        "name" : "Yangor",
        "population" : 4050
      },
      {
        "district" : "ï¿½",
        "id" : 2728,
        "countrycode" : "NRU",
        "name" : "Yaren",
        "population" : 559
      },
      {
        "district" : "Central",
        "id" : 2729,
        "countrycode" : "NPL",
        "name" : "Kathmandu",
        "population" : 591835
      },
      {
        "district" : "Eastern",
        "id" : 2730,
        "countrycode" : "NPL",
        "name" : "Biratnagar",
        "population" : 157764
      },
      {
        "district" : "Western",
        "id" : 2731,
        "countrycode" : "NPL",
        "name" : "Pokhara",
        "population" : 146318
      },
      {
        "district" : "Central",
        "id" : 2732,
        "countrycode" : "NPL",
        "name" : "Lalitapur",
        "population" : 145847
      },
      {
        "district" : "Central",
        "id" : 2733,
        "countrycode" : "NPL",
        "name" : "Birgunj",
        "population" : 90639
      },
      {
        "district" : "Managua",
        "id" : 2734,
        "countrycode" : "NIC",
        "name" : "Managua",
        "population" : 959000
      },
      {
        "district" : "Leï¿½n",
        "id" : 2735,
        "countrycode" : "NIC",
        "name" : "Leï¿½n",
        "population" : 123865
      },
      {
        "district" : "Chinandega",
        "id" : 2736,
        "countrycode" : "NIC",
        "name" : "Chinandega",
        "population" : 97387
      },
      {
        "district" : "Masaya",
        "id" : 2737,
        "countrycode" : "NIC",
        "name" : "Masaya",
        "population" : 88971
      },
      {
        "district" : "Niamey",
        "id" : 2738,
        "countrycode" : "NER",
        "name" : "Niamey",
        "population" : 420000
      },
      {
        "district" : "Zinder",
        "id" : 2739,
        "countrycode" : "NER",
        "name" : "Zinder",
        "population" : 120892
      },
      {
        "district" : "Maradi",
        "id" : 2740,
        "countrycode" : "NER",
        "name" : "Maradi",
        "population" : 112965
      },
      {
        "district" : "Lagos",
        "id" : 2741,
        "countrycode" : "NGA",
        "name" : "Lagos",
        "population" : 1518000
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2742,
        "countrycode" : "NGA",
        "name" : "Ibadan",
        "population" : 1432000
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2743,
        "countrycode" : "NGA",
        "name" : "Ogbomosho",
        "population" : 730000
      },
      {
        "district" : "Kano & Jigawa",
        "id" : 2744,
        "countrycode" : "NGA",
        "name" : "Kano",
        "population" : 674100
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2745,
        "countrycode" : "NGA",
        "name" : "Oshogbo",
        "population" : 476800
      },
      {
        "district" : "Kwara & Kogi",
        "id" : 2746,
        "countrycode" : "NGA",
        "name" : "Ilorin",
        "population" : 475800
      },
      {
        "district" : "Ogun",
        "id" : 2747,
        "countrycode" : "NGA",
        "name" : "Abeokuta",
        "population" : 427400
      },
      {
        "district" : "Rivers & Bayelsa",
        "id" : 2748,
        "countrycode" : "NGA",
        "name" : "Port Harcourt",
        "population" : 410000
      },
      {
        "district" : "Kaduna",
        "id" : 2749,
        "countrycode" : "NGA",
        "name" : "Zaria",
        "population" : 379200
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2750,
        "countrycode" : "NGA",
        "name" : "Ilesha",
        "population" : 378400
      },
      {
        "district" : "Anambra & Enugu & Eb",
        "id" : 2751,
        "countrycode" : "NGA",
        "name" : "Onitsha",
        "population" : 371900
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2752,
        "countrycode" : "NGA",
        "name" : "Iwo",
        "population" : 362000
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2753,
        "countrycode" : "NGA",
        "name" : "Ado-Ekiti",
        "population" : 359400
      },
      {
        "district" : "Federal Capital Dist",
        "id" : 2754,
        "countrycode" : "NGA",
        "name" : "Abuja",
        "population" : 350100
      },
      {
        "district" : "Kaduna",
        "id" : 2755,
        "countrycode" : "NGA",
        "name" : "Kaduna",
        "population" : 342200
      },
      {
        "district" : "Lagos",
        "id" : 2756,
        "countrycode" : "NGA",
        "name" : "Mushin",
        "population" : 333200
      },
      {
        "district" : "Borno & Yobe",
        "id" : 2757,
        "countrycode" : "NGA",
        "name" : "Maiduguri",
        "population" : 320000
      },
      {
        "district" : "Anambra & Enugu & Eb",
        "id" : 2758,
        "countrycode" : "NGA",
        "name" : "Enugu",
        "population" : 316100
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2759,
        "countrycode" : "NGA",
        "name" : "Ede",
        "population" : 307100
      },
      {
        "district" : "Imo & Abia",
        "id" : 2760,
        "countrycode" : "NGA",
        "name" : "Aba",
        "population" : 298900
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2761,
        "countrycode" : "NGA",
        "name" : "Ife",
        "population" : 296800
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2762,
        "countrycode" : "NGA",
        "name" : "Ila",
        "population" : 264000
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2763,
        "countrycode" : "NGA",
        "name" : "Oyo",
        "population" : 256400
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2764,
        "countrycode" : "NGA",
        "name" : "Ikerre",
        "population" : 244600
      },
      {
        "district" : "Edo & Delta",
        "id" : 2765,
        "countrycode" : "NGA",
        "name" : "Benin City",
        "population" : 229400
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2766,
        "countrycode" : "NGA",
        "name" : "Iseyin",
        "population" : 217300
      },
      {
        "district" : "Katsina",
        "id" : 2767,
        "countrycode" : "NGA",
        "name" : "Katsina",
        "population" : 206500
      },
      {
        "district" : "Plateau & Nassarawa",
        "id" : 2768,
        "countrycode" : "NGA",
        "name" : "Jos",
        "population" : 206300
      },
      {
        "district" : "Sokoto & Kebbi & Zam",
        "id" : 2769,
        "countrycode" : "NGA",
        "name" : "Sokoto",
        "population" : 204900
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2770,
        "countrycode" : "NGA",
        "name" : "Ilobu",
        "population" : 199000
      },
      {
        "district" : "Kwara & Kogi",
        "id" : 2771,
        "countrycode" : "NGA",
        "name" : "Offa",
        "population" : 197200
      },
      {
        "district" : "Lagos",
        "id" : 2772,
        "countrycode" : "NGA",
        "name" : "Ikorodu",
        "population" : 184900
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2773,
        "countrycode" : "NGA",
        "name" : "Ilawe-Ekiti",
        "population" : 184500
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2774,
        "countrycode" : "NGA",
        "name" : "Owo",
        "population" : 183500
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2775,
        "countrycode" : "NGA",
        "name" : "Ikirun",
        "population" : 181400
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2776,
        "countrycode" : "NGA",
        "name" : "Shaki",
        "population" : 174500
      },
      {
        "district" : "Cross River",
        "id" : 2777,
        "countrycode" : "NGA",
        "name" : "Calabar",
        "population" : 174400
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2778,
        "countrycode" : "NGA",
        "name" : "Ondo",
        "population" : 173600
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2779,
        "countrycode" : "NGA",
        "name" : "Akure",
        "population" : 162300
      },
      {
        "district" : "Sokoto & Kebbi & Zam",
        "id" : 2780,
        "countrycode" : "NGA",
        "name" : "Gusau",
        "population" : 158000
      },
      {
        "district" : "Ogun",
        "id" : 2781,
        "countrycode" : "NGA",
        "name" : "Ijebu-Ode",
        "population" : 156400
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2782,
        "countrycode" : "NGA",
        "name" : "Effon-Alaiye",
        "population" : 153100
      },
      {
        "district" : "Bauchi & Gombe",
        "id" : 2783,
        "countrycode" : "NGA",
        "name" : "Kumo",
        "population" : 148000
      },
      {
        "district" : "Lagos",
        "id" : 2784,
        "countrycode" : "NGA",
        "name" : "Shomolu",
        "population" : 147700
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2785,
        "countrycode" : "NGA",
        "name" : "Oka-Akoko",
        "population" : 142900
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2786,
        "countrycode" : "NGA",
        "name" : "Ikare",
        "population" : 140800
      },
      {
        "district" : "Edo & Delta",
        "id" : 2787,
        "countrycode" : "NGA",
        "name" : "Sapele",
        "population" : 139200
      },
      {
        "district" : "Bauchi & Gombe",
        "id" : 2788,
        "countrycode" : "NGA",
        "name" : "Deba Habe",
        "population" : 138600
      },
      {
        "district" : "Niger",
        "id" : 2789,
        "countrycode" : "NGA",
        "name" : "Minna",
        "population" : 136900
      },
      {
        "district" : "Edo & Delta",
        "id" : 2790,
        "countrycode" : "NGA",
        "name" : "Warri",
        "population" : 126100
      },
      {
        "district" : "Niger",
        "id" : 2791,
        "countrycode" : "NGA",
        "name" : "Bida",
        "population" : 125500
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2792,
        "countrycode" : "NGA",
        "name" : "Ikire",
        "population" : 123300
      },
      {
        "district" : "Benue",
        "id" : 2793,
        "countrycode" : "NGA",
        "name" : "Makurdi",
        "population" : 123100
      },
      {
        "district" : "Plateau & Nassarawa",
        "id" : 2794,
        "countrycode" : "NGA",
        "name" : "Lafia",
        "population" : 122500
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2795,
        "countrycode" : "NGA",
        "name" : "Inisa",
        "population" : 119800
      },
      {
        "district" : "Ogun",
        "id" : 2796,
        "countrycode" : "NGA",
        "name" : "Shagamu",
        "population" : 117200
      },
      {
        "district" : "Anambra & Enugu & Eb",
        "id" : 2797,
        "countrycode" : "NGA",
        "name" : "Awka",
        "population" : 111200
      },
      {
        "district" : "Bauchi & Gombe",
        "id" : 2798,
        "countrycode" : "NGA",
        "name" : "Gombe",
        "population" : 107800
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2799,
        "countrycode" : "NGA",
        "name" : "Igboho",
        "population" : 106800
      },
      {
        "district" : "Oyo & Osun",
        "id" : 2800,
        "countrycode" : "NGA",
        "name" : "Ejigbo",
        "population" : 105900
      },
      {
        "district" : "Lagos",
        "id" : 2801,
        "countrycode" : "NGA",
        "name" : "Agege",
        "population" : 105000
      },
      {
        "district" : "Ondo & Ekiti",
        "id" : 2802,
        "countrycode" : "NGA",
        "name" : "Ise-Ekiti",
        "population" : 103400
      },
      {
        "district" : "Cross River",
        "id" : 2803,
        "countrycode" : "NGA",
        "name" : "Ugep",
        "population" : 102600
      },
      {
        "district" : "Lagos",
        "id" : 2804,
        "countrycode" : "NGA",
        "name" : "Epe",
        "population" : 101000
      },
      {
        "district" : "ï¿½",
        "id" : 2805,
        "countrycode" : "NIU",
        "name" : "Alofi",
        "population" : 682
      },
      {
        "district" : "ï¿½",
        "id" : 2806,
        "countrycode" : "NFK",
        "name" : "Kingston",
        "population" : 800
      },
      {
        "district" : "Oslo",
        "id" : 2807,
        "countrycode" : "NOR",
        "name" : "Oslo",
        "population" : 508726
      },
      {
        "district" : "Hordaland",
        "id" : 2808,
        "countrycode" : "NOR",
        "name" : "Bergen",
        "population" : 230948
      },
      {
        "district" : "Sï¿½r-Trï¿½ndelag",
        "id" : 2809,
        "countrycode" : "NOR",
        "name" : "Trondheim",
        "population" : 150166
      },
      {
        "district" : "Rogaland",
        "id" : 2810,
        "countrycode" : "NOR",
        "name" : "Stavanger",
        "population" : 108848
      },
      {
        "district" : "Akershus",
        "id" : 2811,
        "countrycode" : "NOR",
        "name" : "Bï¿½rum",
        "population" : 101340
      },
      {
        "district" : "Abidjan",
        "id" : 2812,
        "countrycode" : "CIV",
        "name" : "Abidjan",
        "population" : 2500000
      },
      {
        "district" : "Bouakï¿½",
        "id" : 2813,
        "countrycode" : "CIV",
        "name" : "Bouakï¿½",
        "population" : 329850
      },
      {
        "district" : "Yamoussoukro",
        "id" : 2814,
        "countrycode" : "CIV",
        "name" : "Yamoussoukro",
        "population" : 130000
      },
      {
        "district" : "Daloa",
        "id" : 2815,
        "countrycode" : "CIV",
        "name" : "Daloa",
        "population" : 121842
      },
      {
        "district" : "Korhogo",
        "id" : 2816,
        "countrycode" : "CIV",
        "name" : "Korhogo",
        "population" : 109445
      },
      {
        "district" : "Masqat",
        "id" : 2817,
        "countrycode" : "OMN",
        "name" : "al-Sib",
        "population" : 155000
      },
      {
        "district" : "Zufar",
        "id" : 2818,
        "countrycode" : "OMN",
        "name" : "Salala",
        "population" : 131813
      },
      {
        "district" : "Masqat",
        "id" : 2819,
        "countrycode" : "OMN",
        "name" : "Bawshar",
        "population" : 107500
      },
      {
        "district" : "al-Batina",
        "id" : 2820,
        "countrycode" : "OMN",
        "name" : "Suhar",
        "population" : 90814
      },
      {
        "district" : "Masqat",
        "id" : 2821,
        "countrycode" : "OMN",
        "name" : "Masqat",
        "population" : 51969
      },
      {
        "district" : "Sindh",
        "id" : 2822,
        "countrycode" : "PAK",
        "name" : "Karachi",
        "population" : 9269265
      },
      {
        "district" : "Punjab",
        "id" : 2823,
        "countrycode" : "PAK",
        "name" : "Lahore",
        "population" : 5063499
      },
      {
        "district" : "Punjab",
        "id" : 2824,
        "countrycode" : "PAK",
        "name" : "Faisalabad",
        "population" : 1977246
      },
      {
        "district" : "Punjab",
        "id" : 2825,
        "countrycode" : "PAK",
        "name" : "Rawalpindi",
        "population" : 1406214
      },
      {
        "district" : "Punjab",
        "id" : 2826,
        "countrycode" : "PAK",
        "name" : "Multan",
        "population" : 1182441
      },
      {
        "district" : "Sindh",
        "id" : 2827,
        "countrycode" : "PAK",
        "name" : "Hyderabad",
        "population" : 1151274
      },
      {
        "district" : "Punjab",
        "id" : 2828,
        "countrycode" : "PAK",
        "name" : "Gujranwala",
        "population" : 1124749
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2829,
        "countrycode" : "PAK",
        "name" : "Peshawar",
        "population" : 988005
      },
      {
        "district" : "Baluchistan",
        "id" : 2830,
        "countrycode" : "PAK",
        "name" : "Quetta",
        "population" : 560307
      },
      {
        "district" : "Islamabad",
        "id" : 2831,
        "countrycode" : "PAK",
        "name" : "Islamabad",
        "population" : 524500
      },
      {
        "district" : "Punjab",
        "id" : 2832,
        "countrycode" : "PAK",
        "name" : "Sargodha",
        "population" : 455360
      },
      {
        "district" : "Punjab",
        "id" : 2833,
        "countrycode" : "PAK",
        "name" : "Sialkot",
        "population" : 417597
      },
      {
        "district" : "Punjab",
        "id" : 2834,
        "countrycode" : "PAK",
        "name" : "Bahawalpur",
        "population" : 403408
      },
      {
        "district" : "Sindh",
        "id" : 2835,
        "countrycode" : "PAK",
        "name" : "Sukkur",
        "population" : 329176
      },
      {
        "district" : "Punjab",
        "id" : 2836,
        "countrycode" : "PAK",
        "name" : "Jhang",
        "population" : 292214
      },
      {
        "district" : "Punjab",
        "id" : 2837,
        "countrycode" : "PAK",
        "name" : "Sheikhupura",
        "population" : 271875
      },
      {
        "district" : "Sindh",
        "id" : 2838,
        "countrycode" : "PAK",
        "name" : "Larkana",
        "population" : 270366
      },
      {
        "district" : "Punjab",
        "id" : 2839,
        "countrycode" : "PAK",
        "name" : "Gujrat",
        "population" : 250121
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2840,
        "countrycode" : "PAK",
        "name" : "Mardan",
        "population" : 244511
      },
      {
        "district" : "Punjab",
        "id" : 2841,
        "countrycode" : "PAK",
        "name" : "Kasur",
        "population" : 241649
      },
      {
        "district" : "Punjab",
        "id" : 2842,
        "countrycode" : "PAK",
        "name" : "Rahim Yar Khan",
        "population" : 228479
      },
      {
        "district" : "Punjab",
        "id" : 2843,
        "countrycode" : "PAK",
        "name" : "Sahiwal",
        "population" : 207388
      },
      {
        "district" : "Punjab",
        "id" : 2844,
        "countrycode" : "PAK",
        "name" : "Okara",
        "population" : 200901
      },
      {
        "district" : "Punjab",
        "id" : 2845,
        "countrycode" : "PAK",
        "name" : "Wah",
        "population" : 198400
      },
      {
        "district" : "Punjab",
        "id" : 2846,
        "countrycode" : "PAK",
        "name" : "Dera Ghazi Khan",
        "population" : 188100
      },
      {
        "district" : "Sind",
        "id" : 2847,
        "countrycode" : "PAK",
        "name" : "Mirpur Khas",
        "population" : 184500
      },
      {
        "district" : "Sind",
        "id" : 2848,
        "countrycode" : "PAK",
        "name" : "Nawabshah",
        "population" : 183100
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2849,
        "countrycode" : "PAK",
        "name" : "Mingora",
        "population" : 174500
      },
      {
        "district" : "Punjab",
        "id" : 2850,
        "countrycode" : "PAK",
        "name" : "Chiniot",
        "population" : 169300
      },
      {
        "district" : "Punjab",
        "id" : 2851,
        "countrycode" : "PAK",
        "name" : "Kamoke",
        "population" : 151000
      },
      {
        "district" : "Punjab",
        "id" : 2852,
        "countrycode" : "PAK",
        "name" : "Mandi Burewala",
        "population" : 149900
      },
      {
        "district" : "Punjab",
        "id" : 2853,
        "countrycode" : "PAK",
        "name" : "Jhelum",
        "population" : 145800
      },
      {
        "district" : "Punjab",
        "id" : 2854,
        "countrycode" : "PAK",
        "name" : "Sadiqabad",
        "population" : 141500
      },
      {
        "district" : "Sind",
        "id" : 2855,
        "countrycode" : "PAK",
        "name" : "Jacobabad",
        "population" : 137700
      },
      {
        "district" : "Sind",
        "id" : 2856,
        "countrycode" : "PAK",
        "name" : "Shikarpur",
        "population" : 133300
      },
      {
        "district" : "Punjab",
        "id" : 2857,
        "countrycode" : "PAK",
        "name" : "Khanewal",
        "population" : 133000
      },
      {
        "district" : "Punjab",
        "id" : 2858,
        "countrycode" : "PAK",
        "name" : "Hafizabad",
        "population" : 130200
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2859,
        "countrycode" : "PAK",
        "name" : "Kohat",
        "population" : 125300
      },
      {
        "district" : "Punjab",
        "id" : 2860,
        "countrycode" : "PAK",
        "name" : "Muzaffargarh",
        "population" : 121600
      },
      {
        "district" : "Punjab",
        "id" : 2861,
        "countrycode" : "PAK",
        "name" : "Khanpur",
        "population" : 117800
      },
      {
        "district" : "Punjab",
        "id" : 2862,
        "countrycode" : "PAK",
        "name" : "Gojra",
        "population" : 115000
      },
      {
        "district" : "Punjab",
        "id" : 2863,
        "countrycode" : "PAK",
        "name" : "Bahawalnagar",
        "population" : 109600
      },
      {
        "district" : "Punjab",
        "id" : 2864,
        "countrycode" : "PAK",
        "name" : "Muridke",
        "population" : 108600
      },
      {
        "district" : "Punjab",
        "id" : 2865,
        "countrycode" : "PAK",
        "name" : "Pak Pattan",
        "population" : 107800
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2866,
        "countrycode" : "PAK",
        "name" : "Abottabad",
        "population" : 106000
      },
      {
        "district" : "Sind",
        "id" : 2867,
        "countrycode" : "PAK",
        "name" : "Tando Adam",
        "population" : 103400
      },
      {
        "district" : "Punjab",
        "id" : 2868,
        "countrycode" : "PAK",
        "name" : "Jaranwala",
        "population" : 103300
      },
      {
        "district" : "Sind",
        "id" : 2869,
        "countrycode" : "PAK",
        "name" : "Khairpur",
        "population" : 102200
      },
      {
        "district" : "Punjab",
        "id" : 2870,
        "countrycode" : "PAK",
        "name" : "Chishtian Mandi",
        "population" : 101700
      },
      {
        "district" : "Punjab",
        "id" : 2871,
        "countrycode" : "PAK",
        "name" : "Daska",
        "population" : 101500
      },
      {
        "district" : "Sind",
        "id" : 2872,
        "countrycode" : "PAK",
        "name" : "Dadu",
        "population" : 98600
      },
      {
        "district" : "Punjab",
        "id" : 2873,
        "countrycode" : "PAK",
        "name" : "Mandi Bahauddin",
        "population" : 97300
      },
      {
        "district" : "Punjab",
        "id" : 2874,
        "countrycode" : "PAK",
        "name" : "Ahmadpur East",
        "population" : 96000
      },
      {
        "district" : "Punjab",
        "id" : 2875,
        "countrycode" : "PAK",
        "name" : "Kamalia",
        "population" : 95300
      },
      {
        "district" : "Baluchistan",
        "id" : 2876,
        "countrycode" : "PAK",
        "name" : "Khuzdar",
        "population" : 93100
      },
      {
        "district" : "Punjab",
        "id" : 2877,
        "countrycode" : "PAK",
        "name" : "Vihari",
        "population" : 92300
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2878,
        "countrycode" : "PAK",
        "name" : "Dera Ismail Khan",
        "population" : 90400
      },
      {
        "district" : "Punjab",
        "id" : 2879,
        "countrycode" : "PAK",
        "name" : "Wazirabad",
        "population" : 89700
      },
      {
        "district" : "Nothwest Border Prov",
        "id" : 2880,
        "countrycode" : "PAK",
        "name" : "Nowshera",
        "population" : 89400
      },
      {
        "district" : "Koror",
        "id" : 2881,
        "countrycode" : "PLW",
        "name" : "Koror",
        "population" : 12000
      },
      {
        "district" : "Panamï¿½",
        "id" : 2882,
        "countrycode" : "PAN",
        "name" : "Ciudad de Panamï¿½",
        "population" : 471373
      },
      {
        "district" : "San Miguelito",
        "id" : 2883,
        "countrycode" : "PAN",
        "name" : "San Miguelito",
        "population" : 315382
      },
      {
        "district" : "National Capital Dis",
        "id" : 2884,
        "countrycode" : "PNG",
        "name" : "Port Moresby",
        "population" : 247000
      },
      {
        "district" : "Asunciï¿½n",
        "id" : 2885,
        "countrycode" : "PRY",
        "name" : "Asunciï¿½n",
        "population" : 557776
      },
      {
        "district" : "Alto Paranï¿½",
        "id" : 2886,
        "countrycode" : "PRY",
        "name" : "Ciudad del Este",
        "population" : 133881
      },
      {
        "district" : "Central",
        "id" : 2887,
        "countrycode" : "PRY",
        "name" : "San Lorenzo",
        "population" : 133395
      },
      {
        "district" : "Central",
        "id" : 2888,
        "countrycode" : "PRY",
        "name" : "Lambarï¿½",
        "population" : 99681
      },
      {
        "district" : "Central",
        "id" : 2889,
        "countrycode" : "PRY",
        "name" : "Fernando de la Mora",
        "population" : 95287
      },
      {
        "district" : "Lima",
        "id" : 2890,
        "countrycode" : "PER",
        "name" : "Lima",
        "population" : 6464693
      },
      {
        "district" : "Arequipa",
        "id" : 2891,
        "countrycode" : "PER",
        "name" : "Arequipa",
        "population" : 762000
      },
      {
        "district" : "La Libertad",
        "id" : 2892,
        "countrycode" : "PER",
        "name" : "Trujillo",
        "population" : 652000
      },
      {
        "district" : "Lambayeque",
        "id" : 2893,
        "countrycode" : "PER",
        "name" : "Chiclayo",
        "population" : 517000
      },
      {
        "district" : "Callao",
        "id" : 2894,
        "countrycode" : "PER",
        "name" : "Callao",
        "population" : 424294
      },
      {
        "district" : "Loreto",
        "id" : 2895,
        "countrycode" : "PER",
        "name" : "Iquitos",
        "population" : 367000
      },
      {
        "district" : "Ancash",
        "id" : 2896,
        "countrycode" : "PER",
        "name" : "Chimbote",
        "population" : 336000
      },
      {
        "district" : "Junï¿½n",
        "id" : 2897,
        "countrycode" : "PER",
        "name" : "Huancayo",
        "population" : 327000
      },
      {
        "district" : "Piura",
        "id" : 2898,
        "countrycode" : "PER",
        "name" : "Piura",
        "population" : 325000
      },
      {
        "district" : "Cusco",
        "id" : 2899,
        "countrycode" : "PER",
        "name" : "Cusco",
        "population" : 291000
      },
      {
        "district" : "Ucayali",
        "id" : 2900,
        "countrycode" : "PER",
        "name" : "Pucallpa",
        "population" : 220866
      },
      {
        "district" : "Tacna",
        "id" : 2901,
        "countrycode" : "PER",
        "name" : "Tacna",
        "population" : 215683
      },
      {
        "district" : "Ica",
        "id" : 2902,
        "countrycode" : "PER",
        "name" : "Ica",
        "population" : 194820
      },
      {
        "district" : "Piura",
        "id" : 2903,
        "countrycode" : "PER",
        "name" : "Sullana",
        "population" : 147361
      },
      {
        "district" : "Puno",
        "id" : 2904,
        "countrycode" : "PER",
        "name" : "Juliaca",
        "population" : 142576
      },
      {
        "district" : "Huanuco",
        "id" : 2905,
        "countrycode" : "PER",
        "name" : "Huï¿½nuco",
        "population" : 129688
      },
      {
        "district" : "Ayacucho",
        "id" : 2906,
        "countrycode" : "PER",
        "name" : "Ayacucho",
        "population" : 118960
      },
      {
        "district" : "Ica",
        "id" : 2907,
        "countrycode" : "PER",
        "name" : "Chincha Alta",
        "population" : 110016
      },
      {
        "district" : "Cajamarca",
        "id" : 2908,
        "countrycode" : "PER",
        "name" : "Cajamarca",
        "population" : 108009
      },
      {
        "district" : "Puno",
        "id" : 2909,
        "countrycode" : "PER",
        "name" : "Puno",
        "population" : 101578
      },
      {
        "district" : "Callao",
        "id" : 2910,
        "countrycode" : "PER",
        "name" : "Ventanilla",
        "population" : 101056
      },
      {
        "district" : "Piura",
        "id" : 2911,
        "countrycode" : "PER",
        "name" : "Castilla",
        "population" : 90642
      },
      {
        "district" : "ï¿½",
        "id" : 2912,
        "countrycode" : "PCN",
        "name" : "Adamstown",
        "population" : 42
      },
      {
        "district" : "Saipan",
        "id" : 2913,
        "countrycode" : "MNP",
        "name" : "Garapan",
        "population" : 9200
      },
      {
        "district" : "Lisboa",
        "id" : 2914,
        "countrycode" : "PRT",
        "name" : "Lisboa",
        "population" : 563210
      },
      {
        "district" : "Porto",
        "id" : 2915,
        "countrycode" : "PRT",
        "name" : "Porto",
        "population" : 273060
      },
      {
        "district" : "Lisboa",
        "id" : 2916,
        "countrycode" : "PRT",
        "name" : "Amadora",
        "population" : 122106
      },
      {
        "district" : "Coï¿½mbra",
        "id" : 2917,
        "countrycode" : "PRT",
        "name" : "Coï¿½mbra",
        "population" : 96100
      },
      {
        "district" : "Braga",
        "id" : 2918,
        "countrycode" : "PRT",
        "name" : "Braga",
        "population" : 90535
      },
      {
        "district" : "San Juan",
        "id" : 2919,
        "countrycode" : "PRI",
        "name" : "San Juan",
        "population" : 434374
      },
      {
        "district" : "Bayamï¿½n",
        "id" : 2920,
        "countrycode" : "PRI",
        "name" : "Bayamï¿½n",
        "population" : 224044
      },
      {
        "district" : "Ponce",
        "id" : 2921,
        "countrycode" : "PRI",
        "name" : "Ponce",
        "population" : 186475
      },
      {
        "district" : "Carolina",
        "id" : 2922,
        "countrycode" : "PRI",
        "name" : "Carolina",
        "population" : 186076
      },
      {
        "district" : "Caguas",
        "id" : 2923,
        "countrycode" : "PRI",
        "name" : "Caguas",
        "population" : 140502
      },
      {
        "district" : "Arecibo",
        "id" : 2924,
        "countrycode" : "PRI",
        "name" : "Arecibo",
        "population" : 100131
      },
      {
        "district" : "Guaynabo",
        "id" : 2925,
        "countrycode" : "PRI",
        "name" : "Guaynabo",
        "population" : 100053
      },
      {
        "district" : "Mayagï¿½ez",
        "id" : 2926,
        "countrycode" : "PRI",
        "name" : "Mayagï¿½ez",
        "population" : 98434
      },
      {
        "district" : "Toa Baja",
        "id" : 2927,
        "countrycode" : "PRI",
        "name" : "Toa Baja",
        "population" : 94085
      },
      {
        "district" : "Mazowieckie",
        "id" : 2928,
        "countrycode" : "POL",
        "name" : "Warszawa",
        "population" : 1615369
      },
      {
        "district" : "Lodzkie",
        "id" : 2929,
        "countrycode" : "POL",
        "name" : "Lï¿½dz",
        "population" : 800110
      },
      {
        "district" : "Malopolskie",
        "id" : 2930,
        "countrycode" : "POL",
        "name" : "Krakï¿½w",
        "population" : 738150
      },
      {
        "district" : "Dolnoslaskie",
        "id" : 2931,
        "countrycode" : "POL",
        "name" : "Wroclaw",
        "population" : 636765
      },
      {
        "district" : "Wielkopolskie",
        "id" : 2932,
        "countrycode" : "POL",
        "name" : "Poznan",
        "population" : 576899
      },
      {
        "district" : "Pomorskie",
        "id" : 2933,
        "countrycode" : "POL",
        "name" : "Gdansk",
        "population" : 458988
      },
      {
        "district" : "Zachodnio-Pomorskie",
        "id" : 2934,
        "countrycode" : "POL",
        "name" : "Szczecin",
        "population" : 416988
      },
      {
        "district" : "Kujawsko-Pomorskie",
        "id" : 2935,
        "countrycode" : "POL",
        "name" : "Bydgoszcz",
        "population" : 386855
      },
      {
        "district" : "Lubelskie",
        "id" : 2936,
        "countrycode" : "POL",
        "name" : "Lublin",
        "population" : 356251
      },
      {
        "district" : "Slaskie",
        "id" : 2937,
        "countrycode" : "POL",
        "name" : "Katowice",
        "population" : 345934
      },
      {
        "district" : "Podlaskie",
        "id" : 2938,
        "countrycode" : "POL",
        "name" : "Bialystok",
        "population" : 283937
      },
      {
        "district" : "Slaskie",
        "id" : 2939,
        "countrycode" : "POL",
        "name" : "Czestochowa",
        "population" : 257812
      },
      {
        "district" : "Pomorskie",
        "id" : 2940,
        "countrycode" : "POL",
        "name" : "Gdynia",
        "population" : 253521
      },
      {
        "district" : "Slaskie",
        "id" : 2941,
        "countrycode" : "POL",
        "name" : "Sosnowiec",
        "population" : 244102
      },
      {
        "district" : "Mazowieckie",
        "id" : 2942,
        "countrycode" : "POL",
        "name" : "Radom",
        "population" : 232262
      },
      {
        "district" : "Swietokrzyskie",
        "id" : 2943,
        "countrycode" : "POL",
        "name" : "Kielce",
        "population" : 212383
      },
      {
        "district" : "Slaskie",
        "id" : 2944,
        "countrycode" : "POL",
        "name" : "Gliwice",
        "population" : 212164
      },
      {
        "district" : "Kujawsko-Pomorskie",
        "id" : 2945,
        "countrycode" : "POL",
        "name" : "Torun",
        "population" : 206158
      },
      {
        "district" : "Slaskie",
        "id" : 2946,
        "countrycode" : "POL",
        "name" : "Bytom",
        "population" : 205560
      },
      {
        "district" : "Slaskie",
        "id" : 2947,
        "countrycode" : "POL",
        "name" : "Zabrze",
        "population" : 200177
      },
      {
        "district" : "Slaskie",
        "id" : 2948,
        "countrycode" : "POL",
        "name" : "Bielsko-Biala",
        "population" : 180307
      },
      {
        "district" : "Warminsko-Mazurskie",
        "id" : 2949,
        "countrycode" : "POL",
        "name" : "Olsztyn",
        "population" : 170904
      },
      {
        "district" : "Podkarpackie",
        "id" : 2950,
        "countrycode" : "POL",
        "name" : "Rzeszï¿½w",
        "population" : 162049
      },
      {
        "district" : "Slaskie",
        "id" : 2951,
        "countrycode" : "POL",
        "name" : "Ruda Slaska",
        "population" : 159665
      },
      {
        "district" : "Slaskie",
        "id" : 2952,
        "countrycode" : "POL",
        "name" : "Rybnik",
        "population" : 144582
      },
      {
        "district" : "Dolnoslaskie",
        "id" : 2953,
        "countrycode" : "POL",
        "name" : "Walbrzych",
        "population" : 136923
      },
      {
        "district" : "Slaskie",
        "id" : 2954,
        "countrycode" : "POL",
        "name" : "Tychy",
        "population" : 133178
      },
      {
        "district" : "Slaskie",
        "id" : 2955,
        "countrycode" : "POL",
        "name" : "Dabrowa Gï¿½rnicza",
        "population" : 131037
      },
      {
        "district" : "Mazowieckie",
        "id" : 2956,
        "countrycode" : "POL",
        "name" : "Plock",
        "population" : 131011
      },
      {
        "district" : "Warminsko-Mazurskie",
        "id" : 2957,
        "countrycode" : "POL",
        "name" : "Elblag",
        "population" : 129782
      },
      {
        "district" : "Opolskie",
        "id" : 2958,
        "countrycode" : "POL",
        "name" : "Opole",
        "population" : 129553
      },
      {
        "district" : "Lubuskie",
        "id" : 2959,
        "countrycode" : "POL",
        "name" : "Gorzï¿½w Wielkopolski",
        "population" : 126019
      },
      {
        "district" : "Kujawsko-Pomorskie",
        "id" : 2960,
        "countrycode" : "POL",
        "name" : "Wloclawek",
        "population" : 123373
      },
      {
        "district" : "Slaskie",
        "id" : 2961,
        "countrycode" : "POL",
        "name" : "Chorzï¿½w",
        "population" : 121708
      },
      {
        "district" : "Malopolskie",
        "id" : 2962,
        "countrycode" : "POL",
        "name" : "Tarnï¿½w",
        "population" : 121494
      },
      {
        "district" : "Lubuskie",
        "id" : 2963,
        "countrycode" : "POL",
        "name" : "Zielona Gï¿½ra",
        "population" : 118182
      },
      {
        "district" : "Zachodnio-Pomorskie",
        "id" : 2964,
        "countrycode" : "POL",
        "name" : "Koszalin",
        "population" : 112375
      },
      {
        "district" : "Dolnoslaskie",
        "id" : 2965,
        "countrycode" : "POL",
        "name" : "Legnica",
        "population" : 109335
      },
      {
        "district" : "Wielkopolskie",
        "id" : 2966,
        "countrycode" : "POL",
        "name" : "Kalisz",
        "population" : 106641
      },
      {
        "district" : "Kujawsko-Pomorskie",
        "id" : 2967,
        "countrycode" : "POL",
        "name" : "Grudziadz",
        "population" : 102434
      },
      {
        "district" : "Pomorskie",
        "id" : 2968,
        "countrycode" : "POL",
        "name" : "Slupsk",
        "population" : 102370
      },
      {
        "district" : "Slaskie",
        "id" : 2969,
        "countrycode" : "POL",
        "name" : "Jastrzebie-Zdrï¿½j",
        "population" : 102294
      },
      {
        "district" : "Slaskie",
        "id" : 2970,
        "countrycode" : "POL",
        "name" : "Jaworzno",
        "population" : 97929
      },
      {
        "district" : "Dolnoslaskie",
        "id" : 2971,
        "countrycode" : "POL",
        "name" : "Jelenia Gï¿½ra",
        "population" : 93901
      },
      {
        "district" : "Bioko",
        "id" : 2972,
        "countrycode" : "GNQ",
        "name" : "Malabo",
        "population" : 40000
      },
      {
        "district" : "Doha",
        "id" : 2973,
        "countrycode" : "QAT",
        "name" : "Doha",
        "population" : 355000
      },
      {
        "district" : "ï¿½le-de-France",
        "id" : 2974,
        "countrycode" : "FRA",
        "name" : "Paris",
        "population" : 2125246
      },
      {
        "district" : "Provence-Alpes-Cï¿½te",
        "id" : 2975,
        "countrycode" : "FRA",
        "name" : "Marseille",
        "population" : 798430
      },
      {
        "district" : "Rhï¿½ne-Alpes",
        "id" : 2976,
        "countrycode" : "FRA",
        "name" : "Lyon",
        "population" : 445452
      },
      {
        "district" : "Midi-Pyrï¿½nï¿½es",
        "id" : 2977,
        "countrycode" : "FRA",
        "name" : "Toulouse",
        "population" : 390350
      },
      {
        "district" : "Provence-Alpes-Cï¿½te",
        "id" : 2978,
        "countrycode" : "FRA",
        "name" : "Nice",
        "population" : 342738
      },
      {
        "district" : "Pays de la Loire",
        "id" : 2979,
        "countrycode" : "FRA",
        "name" : "Nantes",
        "population" : 270251
      },
      {
        "district" : "Alsace",
        "id" : 2980,
        "countrycode" : "FRA",
        "name" : "Strasbourg",
        "population" : 264115
      },
      {
        "district" : "Languedoc-Roussillon",
        "id" : 2981,
        "countrycode" : "FRA",
        "name" : "Montpellier",
        "population" : 225392
      },
      {
        "district" : "Aquitaine",
        "id" : 2982,
        "countrycode" : "FRA",
        "name" : "Bordeaux",
        "population" : 215363
      },
      {
        "district" : "Haute-Normandie",
        "id" : 2983,
        "countrycode" : "FRA",
        "name" : "Rennes",
        "population" : 206229
      },
      {
        "district" : "Champagne-Ardenne",
        "id" : 2984,
        "countrycode" : "FRA",
        "name" : "Le Havre",
        "population" : 190905
      },
      {
        "district" : "Nord-Pas-de-Calais",
        "id" : 2985,
        "countrycode" : "FRA",
        "name" : "Reims",
        "population" : 187206
      },
      {
        "district" : "Rhï¿½ne-Alpes",
        "id" : 2986,
        "countrycode" : "FRA",
        "name" : "Lille",
        "population" : 184657
      },
      {
        "district" : "Bretagne",
        "id" : 2987,
        "countrycode" : "FRA",
        "name" : "St-ï¿½tienne",
        "population" : 180210
      },
      {
        "district" : "Provence-Alpes-Cï¿½te",
        "id" : 2988,
        "countrycode" : "FRA",
        "name" : "Toulon",
        "population" : 160639
      },
      {
        "district" : "Rhï¿½ne-Alpes",
        "id" : 2989,
        "countrycode" : "FRA",
        "name" : "Grenoble",
        "population" : 153317
      },
      {
        "district" : "Pays de la Loire",
        "id" : 2990,
        "countrycode" : "FRA",
        "name" : "Angers",
        "population" : 151279
      },
      {
        "district" : "Bourgogne",
        "id" : 2991,
        "countrycode" : "FRA",
        "name" : "Dijon",
        "population" : 149867
      },
      {
        "district" : "Bretagne",
        "id" : 2992,
        "countrycode" : "FRA",
        "name" : "Brest",
        "population" : 149634
      },
      {
        "district" : "Pays de la Loire",
        "id" : 2993,
        "countrycode" : "FRA",
        "name" : "Le Mans",
        "population" : 146105
      },
      {
        "district" : "Auvergne",
        "id" : 2994,
        "countrycode" : "FRA",
        "name" : "Clermont-Ferrand",
        "population" : 137140
      },
      {
        "district" : "Picardie",
        "id" : 2995,
        "countrycode" : "FRA",
        "name" : "Amiens",
        "population" : 135501
      },
      {
        "district" : "Provence-Alpes-Cï¿½te",
        "id" : 2996,
        "countrycode" : "FRA",
        "name" : "Aix-en-Provence",
        "population" : 134222
      },
      {
        "district" : "Limousin",
        "id" : 2997,
        "countrycode" : "FRA",
        "name" : "Limoges",
        "population" : 133968
      },
      {
        "district" : "Languedoc-Roussillon",
        "id" : 2998,
        "countrycode" : "FRA",
        "name" : "Nï¿½mes",
        "population" : 133424
      },
      {
        "district" : "Centre",
        "id" : 2999,
        "countrycode" : "FRA",
        "name" : "Tours",
        "population" : 132820
      },
      {
        "district" : "Rhï¿½ne-Alpes",
        "id" : 3000,
        "countrycode" : "FRA",
        "name" : "Villeurbanne",
        "population" : 124215
      },
        {
          "district" : "Lorraine",
          "id" : 3001,
          "countrycode" : "FRA",
          "name" : "Metz",
          "population" : 123776
        },
        {
          "district" : "Franche-Comtï¿½",
          "id" : 3002,
          "countrycode" : "FRA",
          "name" : "Besanï¿½on",
          "population" : 117733
        },
        {
          "district" : "Basse-Normandie",
          "id" : 3003,
          "countrycode" : "FRA",
          "name" : "Caen",
          "population" : 113987
        },
        {
          "district" : "Centre",
          "id" : 3004,
          "countrycode" : "FRA",
          "name" : "Orlï¿½ans",
          "population" : 113126
        },
        {
          "district" : "Alsace",
          "id" : 3005,
          "countrycode" : "FRA",
          "name" : "Mulhouse",
          "population" : 110359
        },
        {
          "district" : "Haute-Normandie",
          "id" : 3006,
          "countrycode" : "FRA",
          "name" : "Rouen",
          "population" : 106592
        },
        {
          "district" : "ï¿½le-de-France",
          "id" : 3007,
          "countrycode" : "FRA",
          "name" : "Boulogne-Billancourt",
          "population" : 106367
        },
        {
          "district" : "Languedoc-Roussillon",
          "id" : 3008,
          "countrycode" : "FRA",
          "name" : "Perpignan",
          "population" : 105115
        },
        {
          "district" : "Lorraine",
          "id" : 3009,
          "countrycode" : "FRA",
          "name" : "Nancy",
          "population" : 103605
        },
        {
          "district" : "Nord-Pas-de-Calais",
          "id" : 3010,
          "countrycode" : "FRA",
          "name" : "Roubaix",
          "population" : 96984
        },
        {
          "district" : "ï¿½le-de-France",
          "id" : 3011,
          "countrycode" : "FRA",
          "name" : "Argenteuil",
          "population" : 93961
        },
        {
          "district" : "Nord-Pas-de-Calais",
          "id" : 3012,
          "countrycode" : "FRA",
          "name" : "Tourcoing",
          "population" : 93540
        },
        {
          "district" : "ï¿½le-de-France",
          "id" : 3013,
          "countrycode" : "FRA",
          "name" : "Montreuil",
          "population" : 90674
        },
        {
          "district" : "Cayenne",
          "id" : 3014,
          "countrycode" : "GUF",
          "name" : "Cayenne",
          "population" : 50699
        },
        {
          "district" : "Tahiti",
          "id" : 3015,
          "countrycode" : "PYF",
          "name" : "Faaa",
          "population" : 25888
        },
        {
          "district" : "Tahiti",
          "id" : 3016,
          "countrycode" : "PYF",
          "name" : "Papeete",
          "population" : 25553
        },
        {
          "district" : "Saint-Denis",
          "id" : 3017,
          "countrycode" : "REU",
          "name" : "Saint-Denis",
          "population" : 131480
        },
        {
          "district" : "Bukarest",
          "id" : 3018,
          "countrycode" : "ROM",
          "name" : "Bucuresti",
          "population" : 2016131
        },
        {
          "district" : "Iasi",
          "id" : 3019,
          "countrycode" : "ROM",
          "name" : "Iasi",
          "population" : 348070
        },
        {
          "district" : "Constanta",
          "id" : 3020,
          "countrycode" : "ROM",
          "name" : "Constanta",
          "population" : 342264
        },
        {
          "district" : "Cluj",
          "id" : 3021,
          "countrycode" : "ROM",
          "name" : "Cluj-Napoca",
          "population" : 332498
        },
        {
          "district" : "Galati",
          "id" : 3022,
          "countrycode" : "ROM",
          "name" : "Galati",
          "population" : 330276
        },
        {
          "district" : "Timis",
          "id" : 3023,
          "countrycode" : "ROM",
          "name" : "Timisoara",
          "population" : 324304
        },
        {
          "district" : "Brasov",
          "id" : 3024,
          "countrycode" : "ROM",
          "name" : "Brasov",
          "population" : 314225
        },
        {
          "district" : "Dolj",
          "id" : 3025,
          "countrycode" : "ROM",
          "name" : "Craiova",
          "population" : 313530
        },
        {
          "district" : "Prahova",
          "id" : 3026,
          "countrycode" : "ROM",
          "name" : "Ploiesti",
          "population" : 251348
        },
        {
          "district" : "Braila",
          "id" : 3027,
          "countrycode" : "ROM",
          "name" : "Braila",
          "population" : 233756
        },
        {
          "district" : "Bihor",
          "id" : 3028,
          "countrycode" : "ROM",
          "name" : "Oradea",
          "population" : 222239
        },
        {
          "district" : "Bacau",
          "id" : 3029,
          "countrycode" : "ROM",
          "name" : "Bacau",
          "population" : 209235
        },
        {
          "district" : "Arges",
          "id" : 3030,
          "countrycode" : "ROM",
          "name" : "Pitesti",
          "population" : 187170
        },
        {
          "district" : "Arad",
          "id" : 3031,
          "countrycode" : "ROM",
          "name" : "Arad",
          "population" : 184408
        },
        {
          "district" : "Sibiu",
          "id" : 3032,
          "countrycode" : "ROM",
          "name" : "Sibiu",
          "population" : 169611
        },
        {
          "district" : "Mures",
          "id" : 3033,
          "countrycode" : "ROM",
          "name" : "Tï¿½rgu Mures",
          "population" : 165153
        },
        {
          "district" : "Maramures",
          "id" : 3034,
          "countrycode" : "ROM",
          "name" : "Baia Mare",
          "population" : 149665
        },
        {
          "district" : "Buzau",
          "id" : 3035,
          "countrycode" : "ROM",
          "name" : "Buzau",
          "population" : 148372
        },
        {
          "district" : "Satu Mare",
          "id" : 3036,
          "countrycode" : "ROM",
          "name" : "Satu Mare",
          "population" : 130059
        },
        {
          "district" : "Botosani",
          "id" : 3037,
          "countrycode" : "ROM",
          "name" : "Botosani",
          "population" : 128730
        },
        {
          "district" : "Neamt",
          "id" : 3038,
          "countrycode" : "ROM",
          "name" : "Piatra Neamt",
          "population" : 125070
        },
        {
          "district" : "Vï¿½lcea",
          "id" : 3039,
          "countrycode" : "ROM",
          "name" : "Rï¿½mnicu Vï¿½lcea",
          "population" : 119741
        },
        {
          "district" : "Suceava",
          "id" : 3040,
          "countrycode" : "ROM",
          "name" : "Suceava",
          "population" : 118549
        },
        {
          "district" : "Mehedinti",
          "id" : 3041,
          "countrycode" : "ROM",
          "name" : "Drobeta-Turnu Severin",
          "population" : 117865
        },
        {
          "district" : "Dï¿½mbovita",
          "id" : 3042,
          "countrycode" : "ROM",
          "name" : "Tï¿½rgoviste",
          "population" : 98980
        },
        {
          "district" : "Vrancea",
          "id" : 3043,
          "countrycode" : "ROM",
          "name" : "Focsani",
          "population" : 98979
        },
        {
          "district" : "Gorj",
          "id" : 3044,
          "countrycode" : "ROM",
          "name" : "Tï¿½rgu Jiu",
          "population" : 98524
        },
        {
          "district" : "Tulcea",
          "id" : 3045,
          "countrycode" : "ROM",
          "name" : "Tulcea",
          "population" : 96278
        },
        {
          "district" : "Caras-Severin",
          "id" : 3046,
          "countrycode" : "ROM",
          "name" : "Resita",
          "population" : 93976
        },
        {
          "district" : "Kigali",
          "id" : 3047,
          "countrycode" : "RWA",
          "name" : "Kigali",
          "population" : 286000
        },
        {
          "district" : "Lisboa",
          "id" : 3048,
          "countrycode" : "SWE",
          "name" : "Stockholm",
          "population" : 750348
        },
        {
          "district" : "West Gï¿½tanmaan lï¿½n",
          "id" : 3049,
          "countrycode" : "SWE",
          "name" : "Gothenburg [Gï¿½teborg]",
          "population" : 466990
        },
        {
          "district" : "Skï¿½ne lï¿½n",
          "id" : 3050,
          "countrycode" : "SWE",
          "name" : "Malmï¿½",
          "population" : 259579
        },
        {
          "district" : "Uppsala lï¿½n",
          "id" : 3051,
          "countrycode" : "SWE",
          "name" : "Uppsala",
          "population" : 189569
        },
        {
          "district" : "East Gï¿½tanmaan lï¿½n",
          "id" : 3052,
          "countrycode" : "SWE",
          "name" : "Linkï¿½ping",
          "population" : 133168
        },
        {
          "district" : "Vï¿½stmanlands lï¿½n",
          "id" : 3053,
          "countrycode" : "SWE",
          "name" : "Vï¿½sterï¿½s",
          "population" : 126328
        },
        {
          "district" : "ï¿½rebros lï¿½n",
          "id" : 3054,
          "countrycode" : "SWE",
          "name" : "ï¿½rebro",
          "population" : 124207
        },
        {
          "district" : "East Gï¿½tanmaan lï¿½n",
          "id" : 3055,
          "countrycode" : "SWE",
          "name" : "Norrkï¿½ping",
          "population" : 122199
        },
        {
          "district" : "Skï¿½ne lï¿½n",
          "id" : 3056,
          "countrycode" : "SWE",
          "name" : "Helsingborg",
          "population" : 117737
        },
        {
          "district" : "Jï¿½nkï¿½pings lï¿½n",
          "id" : 3057,
          "countrycode" : "SWE",
          "name" : "Jï¿½nkï¿½ping",
          "population" : 117095
        },
        {
          "district" : "Vï¿½sterbottens lï¿½n",
          "id" : 3058,
          "countrycode" : "SWE",
          "name" : "Umeï¿½",
          "population" : 104512
        },
        {
          "district" : "Skï¿½ne lï¿½n",
          "id" : 3059,
          "countrycode" : "SWE",
          "name" : "Lund",
          "population" : 98948
        },
        {
          "district" : "West Gï¿½tanmaan lï¿½n",
          "id" : 3060,
          "countrycode" : "SWE",
          "name" : "Borï¿½s",
          "population" : 96883
        },
        {
          "district" : "Vï¿½sternorrlands lï¿½n",
          "id" : 3061,
          "countrycode" : "SWE",
          "name" : "Sundsvall",
          "population" : 93126
        },
        {
          "district" : "Gï¿½vleborgs lï¿½n",
          "id" : 3062,
          "countrycode" : "SWE",
          "name" : "Gï¿½vle",
          "population" : 90742
        },
        {
          "district" : "Saint Helena",
          "id" : 3063,
          "countrycode" : "SHN",
          "name" : "Jamestown",
          "population" : 1500
        },
        {
          "district" : "St George Basseterre",
          "id" : 3064,
          "countrycode" : "KNA",
          "name" : "Basseterre",
          "population" : 11600
        },
        {
          "district" : "Castries",
          "id" : 3065,
          "countrycode" : "LCA",
          "name" : "Castries",
          "population" : 2301
        },
        {
          "district" : "St George",
          "id" : 3066,
          "countrycode" : "VCT",
          "name" : "Kingstown",
          "population" : 17100
        },
        {
          "district" : "Saint-Pierre",
          "id" : 3067,
          "countrycode" : "SPM",
          "name" : "Saint-Pierre",
          "population" : 5808
        },
        {
          "district" : "Berliini",
          "id" : 3068,
          "countrycode" : "DEU",
          "name" : "Berlin",
          "population" : 3386667
        },
        {
          "district" : "Hamburg",
          "id" : 3069,
          "countrycode" : "DEU",
          "name" : "Hamburg",
          "population" : 1704735
        },
        {
          "district" : "Baijeri",
          "id" : 3070,
          "countrycode" : "DEU",
          "name" : "Munich [Mï¿½nchen]",
          "population" : 1194560
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3071,
          "countrycode" : "DEU",
          "name" : "Kï¿½ln",
          "population" : 962507
        },
        {
          "district" : "Hessen",
          "id" : 3072,
          "countrycode" : "DEU",
          "name" : "Frankfurt am Main",
          "population" : 643821
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3073,
          "countrycode" : "DEU",
          "name" : "Essen",
          "population" : 599515
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3074,
          "countrycode" : "DEU",
          "name" : "Dortmund",
          "population" : 590213
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3075,
          "countrycode" : "DEU",
          "name" : "Stuttgart",
          "population" : 582443
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3076,
          "countrycode" : "DEU",
          "name" : "Dï¿½sseldorf",
          "population" : 568855
        },
        {
          "district" : "Bremen",
          "id" : 3077,
          "countrycode" : "DEU",
          "name" : "Bremen",
          "population" : 540330
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3078,
          "countrycode" : "DEU",
          "name" : "Duisburg",
          "population" : 519793
        },
        {
          "district" : "Niedersachsen",
          "id" : 3079,
          "countrycode" : "DEU",
          "name" : "Hannover",
          "population" : 514718
        },
        {
          "district" : "Saksi",
          "id" : 3080,
          "countrycode" : "DEU",
          "name" : "Leipzig",
          "population" : 489532
        },
        {
          "district" : "Baijeri",
          "id" : 3081,
          "countrycode" : "DEU",
          "name" : "Nï¿½rnberg",
          "population" : 486628
        },
        {
          "district" : "Saksi",
          "id" : 3082,
          "countrycode" : "DEU",
          "name" : "Dresden",
          "population" : 476668
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3083,
          "countrycode" : "DEU",
          "name" : "Bochum",
          "population" : 392830
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3084,
          "countrycode" : "DEU",
          "name" : "Wuppertal",
          "population" : 368993
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3085,
          "countrycode" : "DEU",
          "name" : "Bielefeld",
          "population" : 321125
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3086,
          "countrycode" : "DEU",
          "name" : "Mannheim",
          "population" : 307730
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3087,
          "countrycode" : "DEU",
          "name" : "Bonn",
          "population" : 301048
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3088,
          "countrycode" : "DEU",
          "name" : "Gelsenkirchen",
          "population" : 281979
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3089,
          "countrycode" : "DEU",
          "name" : "Karlsruhe",
          "population" : 277204
        },
        {
          "district" : "Hessen",
          "id" : 3090,
          "countrycode" : "DEU",
          "name" : "Wiesbaden",
          "population" : 268716
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3091,
          "countrycode" : "DEU",
          "name" : "Mï¿½nster",
          "population" : 264670
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3092,
          "countrycode" : "DEU",
          "name" : "Mï¿½nchengladbach",
          "population" : 263697
        },
        {
          "district" : "Saksi",
          "id" : 3093,
          "countrycode" : "DEU",
          "name" : "Chemnitz",
          "population" : 263222
        },
        {
          "district" : "Baijeri",
          "id" : 3094,
          "countrycode" : "DEU",
          "name" : "Augsburg",
          "population" : 254867
        },
        {
          "district" : "Anhalt Sachsen",
          "id" : 3095,
          "countrycode" : "DEU",
          "name" : "Halle\/Saale",
          "population" : 254360
        },
        {
          "district" : "Niedersachsen",
          "id" : 3096,
          "countrycode" : "DEU",
          "name" : "Braunschweig",
          "population" : 246322
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3097,
          "countrycode" : "DEU",
          "name" : "Aachen",
          "population" : 243825
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3098,
          "countrycode" : "DEU",
          "name" : "Krefeld",
          "population" : 241769
        },
        {
          "district" : "Anhalt Sachsen",
          "id" : 3099,
          "countrycode" : "DEU",
          "name" : "Magdeburg",
          "population" : 235073
        },
        {
          "district" : "Schleswig-Holstein",
          "id" : 3100,
          "countrycode" : "DEU",
          "name" : "Kiel",
          "population" : 233795
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3101,
          "countrycode" : "DEU",
          "name" : "Oberhausen",
          "population" : 222349
        },
        {
          "district" : "Schleswig-Holstein",
          "id" : 3102,
          "countrycode" : "DEU",
          "name" : "Lï¿½beck",
          "population" : 213326
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3103,
          "countrycode" : "DEU",
          "name" : "Hagen",
          "population" : 205201
        },
        {
          "district" : "Mecklenburg-Vorpomme",
          "id" : 3104,
          "countrycode" : "DEU",
          "name" : "Rostock",
          "population" : 203279
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3105,
          "countrycode" : "DEU",
          "name" : "Freiburg im Breisgau",
          "population" : 202455
        },
        {
          "district" : "Thï¿½ringen",
          "id" : 3106,
          "countrycode" : "DEU",
          "name" : "Erfurt",
          "population" : 201267
        },
        {
          "district" : "Hessen",
          "id" : 3107,
          "countrycode" : "DEU",
          "name" : "Kassel",
          "population" : 196211
        },
        {
          "district" : "Saarland",
          "id" : 3108,
          "countrycode" : "DEU",
          "name" : "Saarbrï¿½cken",
          "population" : 183836
        },
        {
          "district" : "Rheinland-Pfalz",
          "id" : 3109,
          "countrycode" : "DEU",
          "name" : "Mainz",
          "population" : 183134
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3110,
          "countrycode" : "DEU",
          "name" : "Hamm",
          "population" : 181804
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3111,
          "countrycode" : "DEU",
          "name" : "Herne",
          "population" : 175661
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3112,
          "countrycode" : "DEU",
          "name" : "Mï¿½lheim an der Ruhr",
          "population" : 173895
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3113,
          "countrycode" : "DEU",
          "name" : "Solingen",
          "population" : 165583
        },
        {
          "district" : "Niedersachsen",
          "id" : 3114,
          "countrycode" : "DEU",
          "name" : "Osnabrï¿½ck",
          "population" : 164539
        },
        {
          "district" : "Rheinland-Pfalz",
          "id" : 3115,
          "countrycode" : "DEU",
          "name" : "Ludwigshafen am Rhein",
          "population" : 163771
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3116,
          "countrycode" : "DEU",
          "name" : "Leverkusen",
          "population" : 160841
        },
        {
          "district" : "Niedersachsen",
          "id" : 3117,
          "countrycode" : "DEU",
          "name" : "Oldenburg",
          "population" : 154125
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3118,
          "countrycode" : "DEU",
          "name" : "Neuss",
          "population" : 149702
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3119,
          "countrycode" : "DEU",
          "name" : "Heidelberg",
          "population" : 139672
        },
        {
          "district" : "Hessen",
          "id" : 3120,
          "countrycode" : "DEU",
          "name" : "Darmstadt",
          "population" : 137776
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3121,
          "countrycode" : "DEU",
          "name" : "Paderborn",
          "population" : 137647
        },
        {
          "district" : "Brandenburg",
          "id" : 3122,
          "countrycode" : "DEU",
          "name" : "Potsdam",
          "population" : 128983
        },
        {
          "district" : "Baijeri",
          "id" : 3123,
          "countrycode" : "DEU",
          "name" : "Wï¿½rzburg",
          "population" : 127350
        },
        {
          "district" : "Baijeri",
          "id" : 3124,
          "countrycode" : "DEU",
          "name" : "Regensburg",
          "population" : 125236
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3125,
          "countrycode" : "DEU",
          "name" : "Recklinghausen",
          "population" : 125022
        },
        {
          "district" : "Niedersachsen",
          "id" : 3126,
          "countrycode" : "DEU",
          "name" : "Gï¿½ttingen",
          "population" : 124775
        },
        {
          "district" : "Bremen",
          "id" : 3127,
          "countrycode" : "DEU",
          "name" : "Bremerhaven",
          "population" : 122735
        },
        {
          "district" : "Niedersachsen",
          "id" : 3128,
          "countrycode" : "DEU",
          "name" : "Wolfsburg",
          "population" : 121954
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3129,
          "countrycode" : "DEU",
          "name" : "Bottrop",
          "population" : 121097
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3130,
          "countrycode" : "DEU",
          "name" : "Remscheid",
          "population" : 120125
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3131,
          "countrycode" : "DEU",
          "name" : "Heilbronn",
          "population" : 119526
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3132,
          "countrycode" : "DEU",
          "name" : "Pforzheim",
          "population" : 117227
        },
        {
          "district" : "Hessen",
          "id" : 3133,
          "countrycode" : "DEU",
          "name" : "Offenbach am Main",
          "population" : 116627
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3134,
          "countrycode" : "DEU",
          "name" : "Ulm",
          "population" : 116103
        },
        {
          "district" : "Baijeri",
          "id" : 3135,
          "countrycode" : "DEU",
          "name" : "Ingolstadt",
          "population" : 114826
        },
        {
          "district" : "Thï¿½ringen",
          "id" : 3136,
          "countrycode" : "DEU",
          "name" : "Gera",
          "population" : 114718
        },
        {
          "district" : "Niedersachsen",
          "id" : 3137,
          "countrycode" : "DEU",
          "name" : "Salzgitter",
          "population" : 112934
        },
        {
          "district" : "Brandenburg",
          "id" : 3138,
          "countrycode" : "DEU",
          "name" : "Cottbus",
          "population" : 110894
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3139,
          "countrycode" : "DEU",
          "name" : "Reutlingen",
          "population" : 110343
        },
        {
          "district" : "Baijeri",
          "id" : 3140,
          "countrycode" : "DEU",
          "name" : "Fï¿½rth",
          "population" : 109771
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3141,
          "countrycode" : "DEU",
          "name" : "Siegen",
          "population" : 109225
        },
        {
          "district" : "Rheinland-Pfalz",
          "id" : 3142,
          "countrycode" : "DEU",
          "name" : "Koblenz",
          "population" : 108003
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3143,
          "countrycode" : "DEU",
          "name" : "Moers",
          "population" : 106837
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3144,
          "countrycode" : "DEU",
          "name" : "Bergisch Gladbach",
          "population" : 106150
        },
        {
          "district" : "Saksi",
          "id" : 3145,
          "countrycode" : "DEU",
          "name" : "Zwickau",
          "population" : 104146
        },
        {
          "district" : "Niedersachsen",
          "id" : 3146,
          "countrycode" : "DEU",
          "name" : "Hildesheim",
          "population" : 104013
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3147,
          "countrycode" : "DEU",
          "name" : "Witten",
          "population" : 103384
        },
        {
          "district" : "Mecklenburg-Vorpomme",
          "id" : 3148,
          "countrycode" : "DEU",
          "name" : "Schwerin",
          "population" : 102878
        },
        {
          "district" : "Baijeri",
          "id" : 3149,
          "countrycode" : "DEU",
          "name" : "Erlangen",
          "population" : 100750
        },
        {
          "district" : "Rheinland-Pfalz",
          "id" : 3150,
          "countrycode" : "DEU",
          "name" : "Kaiserslautern",
          "population" : 100025
        },
        {
          "district" : "Rheinland-Pfalz",
          "id" : 3151,
          "countrycode" : "DEU",
          "name" : "Trier",
          "population" : 99891
        },
        {
          "district" : "Thï¿½ringen",
          "id" : 3152,
          "countrycode" : "DEU",
          "name" : "Jena",
          "population" : 99779
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3153,
          "countrycode" : "DEU",
          "name" : "Iserlohn",
          "population" : 99474
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3154,
          "countrycode" : "DEU",
          "name" : "Gï¿½tersloh",
          "population" : 95028
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3155,
          "countrycode" : "DEU",
          "name" : "Marl",
          "population" : 93735
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3156,
          "countrycode" : "DEU",
          "name" : "Lï¿½nen",
          "population" : 92044
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3157,
          "countrycode" : "DEU",
          "name" : "Dï¿½ren",
          "population" : 91092
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3158,
          "countrycode" : "DEU",
          "name" : "Ratingen",
          "population" : 90951
        },
        {
          "district" : "Nordrhein-Westfalen",
          "id" : 3159,
          "countrycode" : "DEU",
          "name" : "Velbert",
          "population" : 89881
        },
        {
          "district" : "Baden-Wï¿½rttemberg",
          "id" : 3160,
          "countrycode" : "DEU",
          "name" : "Esslingen am Neckar",
          "population" : 89667
        },
        {
          "district" : "Honiara",
          "id" : 3161,
          "countrycode" : "SLB",
          "name" : "Honiara",
          "population" : 50100
        },
        {
          "district" : "Lusaka",
          "id" : 3162,
          "countrycode" : "ZMB",
          "name" : "Lusaka",
          "population" : 1317000
        },
        {
          "district" : "Copperbelt",
          "id" : 3163,
          "countrycode" : "ZMB",
          "name" : "Ndola",
          "population" : 329200
        },
        {
          "district" : "Copperbelt",
          "id" : 3164,
          "countrycode" : "ZMB",
          "name" : "Kitwe",
          "population" : 288600
        },
        {
          "district" : "Central",
          "id" : 3165,
          "countrycode" : "ZMB",
          "name" : "Kabwe",
          "population" : 154300
        },
        {
          "district" : "Copperbelt",
          "id" : 3166,
          "countrycode" : "ZMB",
          "name" : "Chingola",
          "population" : 142400
        },
        {
          "district" : "Copperbelt",
          "id" : 3167,
          "countrycode" : "ZMB",
          "name" : "Mufulira",
          "population" : 123900
        },
        {
          "district" : "Copperbelt",
          "id" : 3168,
          "countrycode" : "ZMB",
          "name" : "Luanshya",
          "population" : 118100
        },
        {
          "district" : "Upolu",
          "id" : 3169,
          "countrycode" : "WSM",
          "name" : "Apia",
          "population" : 35900
        },
        {
          "district" : "Serravalle\/Dogano",
          "id" : 3170,
          "countrycode" : "SMR",
          "name" : "Serravalle",
          "population" : 4802
        },
        {
          "district" : "San Marino",
          "id" : 3171,
          "countrycode" : "SMR",
          "name" : "San Marino",
          "population" : 2294
        },
        {
          "district" : "Aqua Grande",
          "id" : 3172,
          "countrycode" : "STP",
          "name" : "Sï¿½o Tomï¿½",
          "population" : 49541
        },
        {
          "district" : "Riyadh",
          "id" : 3173,
          "countrycode" : "SAU",
          "name" : "Riyadh",
          "population" : 3324000
        },
        {
          "district" : "Mekka",
          "id" : 3174,
          "countrycode" : "SAU",
          "name" : "Jedda",
          "population" : 2046300
        },
        {
          "district" : "Mekka",
          "id" : 3175,
          "countrycode" : "SAU",
          "name" : "Mekka",
          "population" : 965700
        },
        {
          "district" : "Medina",
          "id" : 3176,
          "countrycode" : "SAU",
          "name" : "Medina",
          "population" : 608300
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3177,
          "countrycode" : "SAU",
          "name" : "al-Dammam",
          "population" : 482300
        },
        {
          "district" : "Mekka",
          "id" : 3178,
          "countrycode" : "SAU",
          "name" : "al-Taif",
          "population" : 416100
        },
        {
          "district" : "Tabuk",
          "id" : 3179,
          "countrycode" : "SAU",
          "name" : "Tabuk",
          "population" : 292600
        },
        {
          "district" : "al-Qasim",
          "id" : 3180,
          "countrycode" : "SAU",
          "name" : "Burayda",
          "population" : 248600
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3181,
          "countrycode" : "SAU",
          "name" : "al-Hufuf",
          "population" : 225800
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3182,
          "countrycode" : "SAU",
          "name" : "al-Mubarraz",
          "population" : 219100
        },
        {
          "district" : "Asir",
          "id" : 3183,
          "countrycode" : "SAU",
          "name" : "Khamis Mushayt",
          "population" : 217900
        },
        {
          "district" : "Hail",
          "id" : 3184,
          "countrycode" : "SAU",
          "name" : "Hail",
          "population" : 176800
        },
        {
          "district" : "Riad",
          "id" : 3185,
          "countrycode" : "SAU",
          "name" : "al-Kharj",
          "population" : 152100
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3186,
          "countrycode" : "SAU",
          "name" : "al-Khubar",
          "population" : 141700
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3187,
          "countrycode" : "SAU",
          "name" : "Jubayl",
          "population" : 140800
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3188,
          "countrycode" : "SAU",
          "name" : "Hafar al-Batin",
          "population" : 137800
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3189,
          "countrycode" : "SAU",
          "name" : "al-Tuqba",
          "population" : 125700
        },
        {
          "district" : "Medina",
          "id" : 3190,
          "countrycode" : "SAU",
          "name" : "Yanbu",
          "population" : 119800
        },
        {
          "district" : "Asir",
          "id" : 3191,
          "countrycode" : "SAU",
          "name" : "Abha",
          "population" : 112300
        },
        {
          "district" : "al-Khudud al-Samaliy",
          "id" : 3192,
          "countrycode" : "SAU",
          "name" : "Araï¿½ar",
          "population" : 108100
        },
        {
          "district" : "al-Sharqiya",
          "id" : 3193,
          "countrycode" : "SAU",
          "name" : "al-Qatif",
          "population" : 98900
        },
        {
          "district" : "Mekka",
          "id" : 3194,
          "countrycode" : "SAU",
          "name" : "al-Hawiya",
          "population" : 93900
        },
        {
          "district" : "Qasim",
          "id" : 3195,
          "countrycode" : "SAU",
          "name" : "Unayza",
          "population" : 91100
        },
        {
          "district" : "Najran",
          "id" : 3196,
          "countrycode" : "SAU",
          "name" : "Najran",
          "population" : 91000
        },
        {
          "district" : "Cap-Vert",
          "id" : 3197,
          "countrycode" : "SEN",
          "name" : "Pikine",
          "population" : 855287
        },
        {
          "district" : "Cap-Vert",
          "id" : 3198,
          "countrycode" : "SEN",
          "name" : "Dakar",
          "population" : 785071
        },
        {
          "district" : "Thiï¿½s",
          "id" : 3199,
          "countrycode" : "SEN",
          "name" : "Thiï¿½s",
          "population" : 248000
        },
        {
          "district" : "Kaolack",
          "id" : 3200,
          "countrycode" : "SEN",
          "name" : "Kaolack",
          "population" : 199000
        },
        {
          "district" : "Ziguinchor",
          "id" : 3201,
          "countrycode" : "SEN",
          "name" : "Ziguinchor",
          "population" : 192000
        },
        {
          "district" : "Cap-Vert",
          "id" : 3202,
          "countrycode" : "SEN",
          "name" : "Rufisque",
          "population" : 150000
        },
        {
          "district" : "Saint-Louis",
          "id" : 3203,
          "countrycode" : "SEN",
          "name" : "Saint-Louis",
          "population" : 132400
        },
        {
          "district" : "Thiï¿½s",
          "id" : 3204,
          "countrycode" : "SEN",
          "name" : "Mbour",
          "population" : 109300
        },
        {
          "district" : "Diourbel",
          "id" : 3205,
          "countrycode" : "SEN",
          "name" : "Diourbel",
          "population" : 99400
        },
        {
          "district" : "Mahï¿½",
          "id" : 3206,
          "countrycode" : "SYC",
          "name" : "Victoria",
          "population" : 41000
        },
        {
          "district" : "Western",
          "id" : 3207,
          "countrycode" : "SLE",
          "name" : "Freetown",
          "population" : 850000
        },
        {
          "district" : "ï¿½",
          "id" : 3208,
          "countrycode" : "SGP",
          "name" : "Singapore",
          "population" : 4017733
        },
        {
          "district" : "Bratislava",
          "id" : 3209,
          "countrycode" : "SVK",
          "name" : "Bratislava",
          "population" : 448292
        },
        {
          "district" : "Vï¿½chodnï¿½ Slovensko",
          "id" : 3210,
          "countrycode" : "SVK",
          "name" : "Koï¿½ice",
          "population" : 241874
        },
        {
          "district" : "Vï¿½chodnï¿½ Slovensko",
          "id" : 3211,
          "countrycode" : "SVK",
          "name" : "Preï¿½ov",
          "population" : 93977
        },
        {
          "district" : "Osrednjeslovenska",
          "id" : 3212,
          "countrycode" : "SVN",
          "name" : "Ljubljana",
          "population" : 270986
        },
        {
          "district" : "Podravska",
          "id" : 3213,
          "countrycode" : "SVN",
          "name" : "Maribor",
          "population" : 115532
        },
        {
          "district" : "Banaadir",
          "id" : 3214,
          "countrycode" : "SOM",
          "name" : "Mogadishu",
          "population" : 997000
        },
        {
          "district" : "Woqooyi Galbeed",
          "id" : 3215,
          "countrycode" : "SOM",
          "name" : "Hargeysa",
          "population" : 90000
        },
        {
          "district" : "Jubbada Hoose",
          "id" : 3216,
          "countrycode" : "SOM",
          "name" : "Kismaayo",
          "population" : 90000
        },
        {
          "district" : "Western",
          "id" : 3217,
          "countrycode" : "LKA",
          "name" : "Colombo",
          "population" : 645000
        },
        {
          "district" : "Western",
          "id" : 3218,
          "countrycode" : "LKA",
          "name" : "Dehiwala",
          "population" : 203000
        },
        {
          "district" : "Western",
          "id" : 3219,
          "countrycode" : "LKA",
          "name" : "Moratuwa",
          "population" : 190000
        },
        {
          "district" : "Northern",
          "id" : 3220,
          "countrycode" : "LKA",
          "name" : "Jaffna",
          "population" : 149000
        },
        {
          "district" : "Central",
          "id" : 3221,
          "countrycode" : "LKA",
          "name" : "Kandy",
          "population" : 140000
        },
        {
          "district" : "Western",
          "id" : 3222,
          "countrycode" : "LKA",
          "name" : "Sri Jayawardenepura Kotte",
          "population" : 118000
        },
        {
          "district" : "Western",
          "id" : 3223,
          "countrycode" : "LKA",
          "name" : "Negombo",
          "population" : 100000
        },
        {
          "district" : "Khartum",
          "id" : 3224,
          "countrycode" : "SDN",
          "name" : "Omdurman",
          "population" : 1271403
        },
        {
          "district" : "Khartum",
          "id" : 3225,
          "countrycode" : "SDN",
          "name" : "Khartum",
          "population" : 947483
        },
        {
          "district" : "Khartum",
          "id" : 3226,
          "countrycode" : "SDN",
          "name" : "Sharq al-Nil",
          "population" : 700887
        },
        {
          "district" : "al-Bahr al-Ahmar",
          "id" : 3227,
          "countrycode" : "SDN",
          "name" : "Port Sudan",
          "population" : 308195
        },
        {
          "district" : "Kassala",
          "id" : 3228,
          "countrycode" : "SDN",
          "name" : "Kassala",
          "population" : 234622
        },
        {
          "district" : "Kurdufan al-Shamaliy",
          "id" : 3229,
          "countrycode" : "SDN",
          "name" : "Obeid",
          "population" : 229425
        },
        {
          "district" : "Darfur al-Janubiya",
          "id" : 3230,
          "countrycode" : "SDN",
          "name" : "Nyala",
          "population" : 227183
        },
        {
          "district" : "al-Jazira",
          "id" : 3231,
          "countrycode" : "SDN",
          "name" : "Wad Madani",
          "population" : 211362
        },
        {
          "district" : "al-Qadarif",
          "id" : 3232,
          "countrycode" : "SDN",
          "name" : "al-Qadarif",
          "population" : 191164
        },
        {
          "district" : "al-Bahr al-Abyad",
          "id" : 3233,
          "countrycode" : "SDN",
          "name" : "Kusti",
          "population" : 173599
        },
        {
          "district" : "Darfur al-Shamaliya",
          "id" : 3234,
          "countrycode" : "SDN",
          "name" : "al-Fashir",
          "population" : 141884
        },
        {
          "district" : "Bahr al-Jabal",
          "id" : 3235,
          "countrycode" : "SDN",
          "name" : "Juba",
          "population" : 114980
        },
        {
          "district" : "Newmaa",
          "id" : 3236,
          "countrycode" : "FIN",
          "name" : "Helsinki [Helsingfors]",
          "population" : 555474
        },
        {
          "district" : "Newmaa",
          "id" : 3237,
          "countrycode" : "FIN",
          "name" : "Espoo",
          "population" : 213271
        },
        {
          "district" : "Pirkanmaa",
          "id" : 3238,
          "countrycode" : "FIN",
          "name" : "Tampere",
          "population" : 195468
        },
        {
          "district" : "Newmaa",
          "id" : 3239,
          "countrycode" : "FIN",
          "name" : "Vantaa",
          "population" : 178471
        },
        {
          "district" : "Varsinais-Suomi",
          "id" : 3240,
          "countrycode" : "FIN",
          "name" : "Turku [ï¿½bo]",
          "population" : 172561
        },
        {
          "district" : "Pohjois-Pohjanmaa",
          "id" : 3241,
          "countrycode" : "FIN",
          "name" : "Oulu",
          "population" : 120753
        },
        {
          "district" : "Pï¿½ijï¿½t-Hï¿½me",
          "id" : 3242,
          "countrycode" : "FIN",
          "name" : "Lahti",
          "population" : 96921
        },
        {
          "district" : "Paramaribo",
          "id" : 3243,
          "countrycode" : "SUR",
          "name" : "Paramaribo",
          "population" : 112000
        },
        {
          "district" : "Hhohho",
          "id" : 3244,
          "countrycode" : "SWZ",
          "name" : "Mbabane",
          "population" : 61000
        },
        {
          "district" : "Zï¿½rich",
          "id" : 3245,
          "countrycode" : "CHE",
          "name" : "Zï¿½rich",
          "population" : 336800
        },
        {
          "district" : "Geneve",
          "id" : 3246,
          "countrycode" : "CHE",
          "name" : "Geneve",
          "population" : 173500
        },
        {
          "district" : "Basel-Stadt",
          "id" : 3247,
          "countrycode" : "CHE",
          "name" : "Basel",
          "population" : 166700
        },
        {
          "district" : "Bern",
          "id" : 3248,
          "countrycode" : "CHE",
          "name" : "Bern",
          "population" : 122700
        },
        {
          "district" : "Vaud",
          "id" : 3249,
          "countrycode" : "CHE",
          "name" : "Lausanne",
          "population" : 114500
        },
        {
          "district" : "Damascus",
          "id" : 3250,
          "countrycode" : "SYR",
          "name" : "Damascus",
          "population" : 1347000
        },
        {
          "district" : "Aleppo",
          "id" : 3251,
          "countrycode" : "SYR",
          "name" : "Aleppo",
          "population" : 1261983
        },
        {
          "district" : "Hims",
          "id" : 3252,
          "countrycode" : "SYR",
          "name" : "Hims",
          "population" : 507404
        },
        {
          "district" : "Hama",
          "id" : 3253,
          "countrycode" : "SYR",
          "name" : "Hama",
          "population" : 343361
        },
        {
          "district" : "Latakia",
          "id" : 3254,
          "countrycode" : "SYR",
          "name" : "Latakia",
          "population" : 264563
        },
        {
          "district" : "al-Hasaka",
          "id" : 3255,
          "countrycode" : "SYR",
          "name" : "al-Qamishliya",
          "population" : 144286
        },
        {
          "district" : "Dayr al-Zawr",
          "id" : 3256,
          "countrycode" : "SYR",
          "name" : "Dayr al-Zawr",
          "population" : 140459
        },
        {
          "district" : "Damaskos",
          "id" : 3257,
          "countrycode" : "SYR",
          "name" : "Jaramana",
          "population" : 138469
        },
        {
          "district" : "Damaskos",
          "id" : 3258,
          "countrycode" : "SYR",
          "name" : "Duma",
          "population" : 131158
        },
        {
          "district" : "al-Raqqa",
          "id" : 3259,
          "countrycode" : "SYR",
          "name" : "al-Raqqa",
          "population" : 108020
        },
        {
          "district" : "Idlib",
          "id" : 3260,
          "countrycode" : "SYR",
          "name" : "Idlib",
          "population" : 91081
        },
        {
          "district" : "Karotegin",
          "id" : 3261,
          "countrycode" : "TJK",
          "name" : "Dushanbe",
          "population" : 524000
        },
        {
          "district" : "Khujand",
          "id" : 3262,
          "countrycode" : "TJK",
          "name" : "Khujand",
          "population" : 161500
        },
        {
          "district" : "Taipei",
          "id" : 3263,
          "countrycode" : "TWN",
          "name" : "Taipei",
          "population" : 2641312
        },
        {
          "district" : "Kaohsiung",
          "id" : 3264,
          "countrycode" : "TWN",
          "name" : "Kaohsiung",
          "population" : 1475505
        },
        {
          "district" : "Taichung",
          "id" : 3265,
          "countrycode" : "TWN",
          "name" : "Taichung",
          "population" : 940589
        },
        {
          "district" : "Tainan",
          "id" : 3266,
          "countrycode" : "TWN",
          "name" : "Tainan",
          "population" : 728060
        },
        {
          "district" : "Taipei",
          "id" : 3267,
          "countrycode" : "TWN",
          "name" : "Panchiao",
          "population" : 523850
        },
        {
          "district" : "Taipei",
          "id" : 3268,
          "countrycode" : "TWN",
          "name" : "Chungho",
          "population" : 392176
        },
        {
          "district" : "Keelung",
          "id" : 3269,
          "countrycode" : "TWN",
          "name" : "Keelung (Chilung)",
          "population" : 385201
        },
        {
          "district" : "Taipei",
          "id" : 3270,
          "countrycode" : "TWN",
          "name" : "Sanchung",
          "population" : 380084
        },
        {
          "district" : "Taipei",
          "id" : 3271,
          "countrycode" : "TWN",
          "name" : "Hsinchuang",
          "population" : 365048
        },
        {
          "district" : "Hsinchu",
          "id" : 3272,
          "countrycode" : "TWN",
          "name" : "Hsinchu",
          "population" : 361958
        },
        {
          "district" : "Taoyuan",
          "id" : 3273,
          "countrycode" : "TWN",
          "name" : "Chungli",
          "population" : 318649
        },
        {
          "district" : "Kaohsiung",
          "id" : 3274,
          "countrycode" : "TWN",
          "name" : "Fengshan",
          "population" : 318562
        },
        {
          "district" : "Taoyuan",
          "id" : 3275,
          "countrycode" : "TWN",
          "name" : "Taoyuan",
          "population" : 316438
        },
        {
          "district" : "Chiayi",
          "id" : 3276,
          "countrycode" : "TWN",
          "name" : "Chiayi",
          "population" : 265109
        },
        {
          "district" : "Taipei",
          "id" : 3277,
          "countrycode" : "TWN",
          "name" : "Hsintien",
          "population" : 263603
        },
        {
          "district" : "Changhwa",
          "id" : 3278,
          "countrycode" : "TWN",
          "name" : "Changhwa",
          "population" : 227715
        },
        {
          "district" : "Taipei",
          "id" : 3279,
          "countrycode" : "TWN",
          "name" : "Yungho",
          "population" : 227700
        },
        {
          "district" : "Taipei",
          "id" : 3280,
          "countrycode" : "TWN",
          "name" : "Tucheng",
          "population" : 224897
        },
        {
          "district" : "Pingtung",
          "id" : 3281,
          "countrycode" : "TWN",
          "name" : "Pingtung",
          "population" : 214727
        },
        {
          "district" : "Tainan",
          "id" : 3282,
          "countrycode" : "TWN",
          "name" : "Yungkang",
          "population" : 193005
        },
        {
          "district" : "Taoyuan",
          "id" : 3283,
          "countrycode" : "TWN",
          "name" : "Pingchen",
          "population" : 188344
        },
        {
          "district" : "Taichung",
          "id" : 3284,
          "countrycode" : "TWN",
          "name" : "Tali",
          "population" : 171940
        },
        {
          "district" : "",
          "id" : 3285,
          "countrycode" : "TWN",
          "name" : "Taiping",
          "population" : 165524
        },
        {
          "district" : "Taoyuan",
          "id" : 3286,
          "countrycode" : "TWN",
          "name" : "Pate",
          "population" : 161700
        },
        {
          "district" : "Taichung",
          "id" : 3287,
          "countrycode" : "TWN",
          "name" : "Fengyuan",
          "population" : 161032
        },
        {
          "district" : "Taipei",
          "id" : 3288,
          "countrycode" : "TWN",
          "name" : "Luchou",
          "population" : 160516
        },
        {
          "district" : "Taipei",
          "id" : 3289,
          "countrycode" : "TWN",
          "name" : "Hsichuh",
          "population" : 154976
        },
        {
          "district" : "Taipei",
          "id" : 3290,
          "countrycode" : "TWN",
          "name" : "Shulin",
          "population" : 151260
        },
        {
          "district" : "Changhwa",
          "id" : 3291,
          "countrycode" : "TWN",
          "name" : "Yuanlin",
          "population" : 126402
        },
        {
          "district" : "Taoyuan",
          "id" : 3292,
          "countrycode" : "TWN",
          "name" : "Yangmei",
          "population" : 126323
        },
        {
          "district" : "",
          "id" : 3293,
          "countrycode" : "TWN",
          "name" : "Taliao",
          "population" : 115897
        },
        {
          "district" : "",
          "id" : 3294,
          "countrycode" : "TWN",
          "name" : "Kueishan",
          "population" : 112195
        },
        {
          "district" : "Taipei",
          "id" : 3295,
          "countrycode" : "TWN",
          "name" : "Tanshui",
          "population" : 111882
        },
        {
          "district" : "Taitung",
          "id" : 3296,
          "countrycode" : "TWN",
          "name" : "Taitung",
          "population" : 111039
        },
        {
          "district" : "Hualien",
          "id" : 3297,
          "countrycode" : "TWN",
          "name" : "Hualien",
          "population" : 108407
        },
        {
          "district" : "Nantou",
          "id" : 3298,
          "countrycode" : "TWN",
          "name" : "Nantou",
          "population" : 104723
        },
        {
          "district" : "Taipei",
          "id" : 3299,
          "countrycode" : "TWN",
          "name" : "Lungtan",
          "population" : 103088
        },
        {
          "district" : "Yï¿½nlin",
          "id" : 3300,
          "countrycode" : "TWN",
          "name" : "Touliu",
          "population" : 98900
        },
        {
          "district" : "Nantou",
          "id" : 3301,
          "countrycode" : "TWN",
          "name" : "Tsaotun",
          "population" : 96800
        },
        {
          "district" : "Kaohsiung",
          "id" : 3302,
          "countrycode" : "TWN",
          "name" : "Kangshan",
          "population" : 92200
        },
        {
          "district" : "Ilan",
          "id" : 3303,
          "countrycode" : "TWN",
          "name" : "Ilan",
          "population" : 92000
        },
        {
          "district" : "Miaoli",
          "id" : 3304,
          "countrycode" : "TWN",
          "name" : "Miaoli",
          "population" : 90000
        },
        {
          "district" : "Dar es Salaam",
          "id" : 3305,
          "countrycode" : "TZA",
          "name" : "Dar es Salaam",
          "population" : 1747000
        },
        {
          "district" : "Dodoma",
          "id" : 3306,
          "countrycode" : "TZA",
          "name" : "Dodoma",
          "population" : 189000
        },
        {
          "district" : "Mwanza",
          "id" : 3307,
          "countrycode" : "TZA",
          "name" : "Mwanza",
          "population" : 172300
        },
        {
          "district" : "Zanzibar West",
          "id" : 3308,
          "countrycode" : "TZA",
          "name" : "Zanzibar",
          "population" : 157634
        },
        {
          "district" : "Tanga",
          "id" : 3309,
          "countrycode" : "TZA",
          "name" : "Tanga",
          "population" : 137400
        },
        {
          "district" : "Mbeya",
          "id" : 3310,
          "countrycode" : "TZA",
          "name" : "Mbeya",
          "population" : 130800
        },
        {
          "district" : "Morogoro",
          "id" : 3311,
          "countrycode" : "TZA",
          "name" : "Morogoro",
          "population" : 117800
        },
        {
          "district" : "Arusha",
          "id" : 3312,
          "countrycode" : "TZA",
          "name" : "Arusha",
          "population" : 102500
        },
        {
          "district" : "Kilimanjaro",
          "id" : 3313,
          "countrycode" : "TZA",
          "name" : "Moshi",
          "population" : 96800
        },
        {
          "district" : "Tabora",
          "id" : 3314,
          "countrycode" : "TZA",
          "name" : "Tabora",
          "population" : 92800
        },
        {
          "district" : "Kï¿½benhavn",
          "id" : 3315,
          "countrycode" : "DNK",
          "name" : "Kï¿½benhavn",
          "population" : 495699
        },
        {
          "district" : "ï¿½rhus",
          "id" : 3316,
          "countrycode" : "DNK",
          "name" : "ï¿½rhus",
          "population" : 284846
        },
        {
          "district" : "Fyn",
          "id" : 3317,
          "countrycode" : "DNK",
          "name" : "Odense",
          "population" : 183912
        },
        {
          "district" : "Nordjylland",
          "id" : 3318,
          "countrycode" : "DNK",
          "name" : "Aalborg",
          "population" : 161161
        },
        {
          "district" : "Frederiksberg",
          "id" : 3319,
          "countrycode" : "DNK",
          "name" : "Frederiksberg",
          "population" : 90327
        },
        {
          "district" : "Bangkok",
          "id" : 3320,
          "countrycode" : "THA",
          "name" : "Bangkok",
          "population" : 6320174
        },
        {
          "district" : "Nonthaburi",
          "id" : 3321,
          "countrycode" : "THA",
          "name" : "Nonthaburi",
          "population" : 292100
        },
        {
          "district" : "Nakhon Ratchasima",
          "id" : 3322,
          "countrycode" : "THA",
          "name" : "Nakhon Ratchasima",
          "population" : 181400
        },
        {
          "district" : "Chiang Mai",
          "id" : 3323,
          "countrycode" : "THA",
          "name" : "Chiang Mai",
          "population" : 171100
        },
        {
          "district" : "Udon Thani",
          "id" : 3324,
          "countrycode" : "THA",
          "name" : "Udon Thani",
          "population" : 158100
        },
        {
          "district" : "Songkhla",
          "id" : 3325,
          "countrycode" : "THA",
          "name" : "Hat Yai",
          "population" : 148632
        },
        {
          "district" : "Khon Kaen",
          "id" : 3326,
          "countrycode" : "THA",
          "name" : "Khon Kaen",
          "population" : 126500
        },
        {
          "district" : "Nonthaburi",
          "id" : 3327,
          "countrycode" : "THA",
          "name" : "Pak Kret",
          "population" : 126055
        },
        {
          "district" : "Nakhon Sawan",
          "id" : 3328,
          "countrycode" : "THA",
          "name" : "Nakhon Sawan",
          "population" : 123800
        },
        {
          "district" : "Ubon Ratchathani",
          "id" : 3329,
          "countrycode" : "THA",
          "name" : "Ubon Ratchathani",
          "population" : 116300
        },
        {
          "district" : "Songkhla",
          "id" : 3330,
          "countrycode" : "THA",
          "name" : "Songkhla",
          "population" : 94900
        },
        {
          "district" : "Nakhon Pathom",
          "id" : 3331,
          "countrycode" : "THA",
          "name" : "Nakhon Pathom",
          "population" : 94100
        },
        {
          "district" : "Maritime",
          "id" : 3332,
          "countrycode" : "TGO",
          "name" : "Lomï¿½",
          "population" : 375000
        },
        {
          "district" : "Fakaofo",
          "id" : 3333,
          "countrycode" : "TKL",
          "name" : "Fakaofo",
          "population" : 300
        },
        {
          "district" : "Tongatapu",
          "id" : 3334,
          "countrycode" : "TON",
          "name" : "Nukuï¿½alofa",
          "population" : 22400
        },
        {
          "district" : "Caroni",
          "id" : 3335,
          "countrycode" : "TTO",
          "name" : "Chaguanas",
          "population" : 56601
        },
        {
          "district" : "Port-of-Spain",
          "id" : 3336,
          "countrycode" : "TTO",
          "name" : "Port-of-Spain",
          "population" : 43396
        },
        {
          "district" : "Chari-Baguirmi",
          "id" : 3337,
          "countrycode" : "TCD",
          "name" : "Nï¿½Djamï¿½na",
          "population" : 530965
        },
        {
          "district" : "Logone Occidental",
          "id" : 3338,
          "countrycode" : "TCD",
          "name" : "Moundou",
          "population" : 99500
        },
        {
          "district" : "Hlavnï¿½ mesto Praha",
          "id" : 3339,
          "countrycode" : "CZE",
          "name" : "Praha",
          "population" : 1181126
        },
        {
          "district" : "Jiznï¿½ Morava",
          "id" : 3340,
          "countrycode" : "CZE",
          "name" : "Brno",
          "population" : 381862
        },
        {
          "district" : "Severnï¿½ Morava",
          "id" : 3341,
          "countrycode" : "CZE",
          "name" : "Ostrava",
          "population" : 320041
        },
        {
          "district" : "Zapadnï¿½ Cechy",
          "id" : 3342,
          "countrycode" : "CZE",
          "name" : "Plzen",
          "population" : 166759
        },
        {
          "district" : "Severnï¿½ Morava",
          "id" : 3343,
          "countrycode" : "CZE",
          "name" : "Olomouc",
          "population" : 102702
        },
        {
          "district" : "Severnï¿½ Cechy",
          "id" : 3344,
          "countrycode" : "CZE",
          "name" : "Liberec",
          "population" : 99155
        },
        {
          "district" : "Jiznï¿½ Cechy",
          "id" : 3345,
          "countrycode" : "CZE",
          "name" : "Ceskï¿½ Budejovice",
          "population" : 98186
        },
        {
          "district" : "Vï¿½chodnï¿½ Cechy",
          "id" : 3346,
          "countrycode" : "CZE",
          "name" : "Hradec Krï¿½lovï¿½",
          "population" : 98080
        },
        {
          "district" : "Severnï¿½ Cechy",
          "id" : 3347,
          "countrycode" : "CZE",
          "name" : "ï¿½stï¿½ nad Labem",
          "population" : 95491
        },
        {
          "district" : "Vï¿½chodnï¿½ Cechy",
          "id" : 3348,
          "countrycode" : "CZE",
          "name" : "Pardubice",
          "population" : 91309
        },
        {
          "district" : "Tunis",
          "id" : 3349,
          "countrycode" : "TUN",
          "name" : "Tunis",
          "population" : 690600
        },
        {
          "district" : "Sfax",
          "id" : 3350,
          "countrycode" : "TUN",
          "name" : "Sfax",
          "population" : 257800
        },
        {
          "district" : "Ariana",
          "id" : 3351,
          "countrycode" : "TUN",
          "name" : "Ariana",
          "population" : 197000
        },
        {
          "district" : "Ariana",
          "id" : 3352,
          "countrycode" : "TUN",
          "name" : "Ettadhamen",
          "population" : 178600
        },
        {
          "district" : "Sousse",
          "id" : 3353,
          "countrycode" : "TUN",
          "name" : "Sousse",
          "population" : 145900
        },
        {
          "district" : "Kairouan",
          "id" : 3354,
          "countrycode" : "TUN",
          "name" : "Kairouan",
          "population" : 113100
        },
        {
          "district" : "Biserta",
          "id" : 3355,
          "countrycode" : "TUN",
          "name" : "Biserta",
          "population" : 108900
        },
        {
          "district" : "Gabï¿½s",
          "id" : 3356,
          "countrycode" : "TUN",
          "name" : "Gabï¿½s",
          "population" : 106600
        },
        {
          "district" : "Istanbul",
          "id" : 3357,
          "countrycode" : "TUR",
          "name" : "Istanbul",
          "population" : 8787958
        },
        {
          "district" : "Ankara",
          "id" : 3358,
          "countrycode" : "TUR",
          "name" : "Ankara",
          "population" : 3038159
        },
        {
          "district" : "Izmir",
          "id" : 3359,
          "countrycode" : "TUR",
          "name" : "Izmir",
          "population" : 2130359
        },
        {
          "district" : "Adana",
          "id" : 3360,
          "countrycode" : "TUR",
          "name" : "Adana",
          "population" : 1131198
        },
        {
          "district" : "Bursa",
          "id" : 3361,
          "countrycode" : "TUR",
          "name" : "Bursa",
          "population" : 1095842
        },
        {
          "district" : "Gaziantep",
          "id" : 3362,
          "countrycode" : "TUR",
          "name" : "Gaziantep",
          "population" : 789056
        },
        {
          "district" : "Konya",
          "id" : 3363,
          "countrycode" : "TUR",
          "name" : "Konya",
          "population" : 628364
        },
        {
          "district" : "Iï¿½el",
          "id" : 3364,
          "countrycode" : "TUR",
          "name" : "Mersin (Iï¿½el)",
          "population" : 587212
        },
        {
          "district" : "Antalya",
          "id" : 3365,
          "countrycode" : "TUR",
          "name" : "Antalya",
          "population" : 564914
        },
        {
          "district" : "Diyarbakir",
          "id" : 3366,
          "countrycode" : "TUR",
          "name" : "Diyarbakir",
          "population" : 479884
        },
        {
          "district" : "Kayseri",
          "id" : 3367,
          "countrycode" : "TUR",
          "name" : "Kayseri",
          "population" : 475657
        },
        {
          "district" : "Eskisehir",
          "id" : 3368,
          "countrycode" : "TUR",
          "name" : "Eskisehir",
          "population" : 470781
        },
        {
          "district" : "Sanliurfa",
          "id" : 3369,
          "countrycode" : "TUR",
          "name" : "Sanliurfa",
          "population" : 405905
        },
        {
          "district" : "Samsun",
          "id" : 3370,
          "countrycode" : "TUR",
          "name" : "Samsun",
          "population" : 339871
        },
        {
          "district" : "Malatya",
          "id" : 3371,
          "countrycode" : "TUR",
          "name" : "Malatya",
          "population" : 330312
        },
        {
          "district" : "Kocaeli",
          "id" : 3372,
          "countrycode" : "TUR",
          "name" : "Gebze",
          "population" : 264170
        },
        {
          "district" : "Denizli",
          "id" : 3373,
          "countrycode" : "TUR",
          "name" : "Denizli",
          "population" : 253848
        },
        {
          "district" : "Sivas",
          "id" : 3374,
          "countrycode" : "TUR",
          "name" : "Sivas",
          "population" : 246642
        },
        {
          "district" : "Erzurum",
          "id" : 3375,
          "countrycode" : "TUR",
          "name" : "Erzurum",
          "population" : 246535
        },
        {
          "district" : "Adana",
          "id" : 3376,
          "countrycode" : "TUR",
          "name" : "Tarsus",
          "population" : 246206
        },
        {
          "district" : "Kahramanmaras",
          "id" : 3377,
          "countrycode" : "TUR",
          "name" : "Kahramanmaras",
          "population" : 245772
        },
        {
          "district" : "Elï¿½zig",
          "id" : 3378,
          "countrycode" : "TUR",
          "name" : "Elï¿½zig",
          "population" : 228815
        },
        {
          "district" : "Van",
          "id" : 3379,
          "countrycode" : "TUR",
          "name" : "Van",
          "population" : 219319
        },
        {
          "district" : "Istanbul",
          "id" : 3380,
          "countrycode" : "TUR",
          "name" : "Sultanbeyli",
          "population" : 211068
        },
        {
          "district" : "Kocaeli",
          "id" : 3381,
          "countrycode" : "TUR",
          "name" : "Izmit (Kocaeli)",
          "population" : 210068
        },
        {
          "district" : "Manisa",
          "id" : 3382,
          "countrycode" : "TUR",
          "name" : "Manisa",
          "population" : 207148
        },
        {
          "district" : "Batman",
          "id" : 3383,
          "countrycode" : "TUR",
          "name" : "Batman",
          "population" : 203793
        },
        {
          "district" : "Balikesir",
          "id" : 3384,
          "countrycode" : "TUR",
          "name" : "Balikesir",
          "population" : 196382
        },
        {
          "district" : "Sakarya",
          "id" : 3385,
          "countrycode" : "TUR",
          "name" : "Sakarya (Adapazari)",
          "population" : 190641
        },
        {
          "district" : "Hatay",
          "id" : 3386,
          "countrycode" : "TUR",
          "name" : "Iskenderun",
          "population" : 153022
        },
        {
          "district" : "Osmaniye",
          "id" : 3387,
          "countrycode" : "TUR",
          "name" : "Osmaniye",
          "population" : 146003
        },
        {
          "district" : "ï¿½orum",
          "id" : 3388,
          "countrycode" : "TUR",
          "name" : "ï¿½orum",
          "population" : 145495
        },
        {
          "district" : "Kï¿½tahya",
          "id" : 3389,
          "countrycode" : "TUR",
          "name" : "Kï¿½tahya",
          "population" : 144761
        },
        {
          "district" : "Hatay",
          "id" : 3390,
          "countrycode" : "TUR",
          "name" : "Hatay (Antakya)",
          "population" : 143982
        },
        {
          "district" : "Kirikkale",
          "id" : 3391,
          "countrycode" : "TUR",
          "name" : "Kirikkale",
          "population" : 142044
        },
        {
          "district" : "Adiyaman",
          "id" : 3392,
          "countrycode" : "TUR",
          "name" : "Adiyaman",
          "population" : 141529
        },
        {
          "district" : "Trabzon",
          "id" : 3393,
          "countrycode" : "TUR",
          "name" : "Trabzon",
          "population" : 138234
        },
        {
          "district" : "Ordu",
          "id" : 3394,
          "countrycode" : "TUR",
          "name" : "Ordu",
          "population" : 133642
        },
        {
          "district" : "Aydin",
          "id" : 3395,
          "countrycode" : "TUR",
          "name" : "Aydin",
          "population" : 128651
        },
        {
          "district" : "Usak",
          "id" : 3396,
          "countrycode" : "TUR",
          "name" : "Usak",
          "population" : 128162
        },
        {
          "district" : "Edirne",
          "id" : 3397,
          "countrycode" : "TUR",
          "name" : "Edirne",
          "population" : 123383
        },
        {
          "district" : "Tekirdag",
          "id" : 3398,
          "countrycode" : "TUR",
          "name" : "ï¿½orlu",
          "population" : 123300
        },
        {
          "district" : "Isparta",
          "id" : 3399,
          "countrycode" : "TUR",
          "name" : "Isparta",
          "population" : 121911
        },
        {
          "district" : "Karabï¿½k",
          "id" : 3400,
          "countrycode" : "TUR",
          "name" : "Karabï¿½k",
          "population" : 118285
        },
        {
          "district" : "Kilis",
          "id" : 3401,
          "countrycode" : "TUR",
          "name" : "Kilis",
          "population" : 118245
        },
        {
          "district" : "Antalya",
          "id" : 3402,
          "countrycode" : "TUR",
          "name" : "Alanya",
          "population" : 117300
        },
        {
          "district" : "Mardin",
          "id" : 3403,
          "countrycode" : "TUR",
          "name" : "Kiziltepe",
          "population" : 112000
        },
        {
          "district" : "Zonguldak",
          "id" : 3404,
          "countrycode" : "TUR",
          "name" : "Zonguldak",
          "population" : 111542
        },
        {
          "district" : "Siirt",
          "id" : 3405,
          "countrycode" : "TUR",
          "name" : "Siirt",
          "population" : 107100
        },
        {
          "district" : "Sanliurfa",
          "id" : 3406,
          "countrycode" : "TUR",
          "name" : "Viransehir",
          "population" : 106400
        },
        {
          "district" : "Tekirdag",
          "id" : 3407,
          "countrycode" : "TUR",
          "name" : "Tekirdag",
          "population" : 106077
        },
        {
          "district" : "Karaman",
          "id" : 3408,
          "countrycode" : "TUR",
          "name" : "Karaman",
          "population" : 104200
        },
        {
          "district" : "Afyon",
          "id" : 3409,
          "countrycode" : "TUR",
          "name" : "Afyon",
          "population" : 103984
        },
        {
          "district" : "Aksaray",
          "id" : 3410,
          "countrycode" : "TUR",
          "name" : "Aksaray",
          "population" : 102681
        },
        {
          "district" : "Adana",
          "id" : 3411,
          "countrycode" : "TUR",
          "name" : "Ceyhan",
          "population" : 102412
        },
        {
          "district" : "Erzincan",
          "id" : 3412,
          "countrycode" : "TUR",
          "name" : "Erzincan",
          "population" : 102304
        },
        {
          "district" : "Diyarbakir",
          "id" : 3413,
          "countrycode" : "TUR",
          "name" : "Bismil",
          "population" : 101400
        },
        {
          "district" : "Aydin",
          "id" : 3414,
          "countrycode" : "TUR",
          "name" : "Nazilli",
          "population" : 99900
        },
        {
          "district" : "Tokat",
          "id" : 3415,
          "countrycode" : "TUR",
          "name" : "Tokat",
          "population" : 99500
        },
        {
          "district" : "Kars",
          "id" : 3416,
          "countrycode" : "TUR",
          "name" : "Kars",
          "population" : 93000
        },
        {
          "district" : "Bursa",
          "id" : 3417,
          "countrycode" : "TUR",
          "name" : "Inegï¿½l",
          "population" : 90500
        },
        {
          "district" : "Balikesir",
          "id" : 3418,
          "countrycode" : "TUR",
          "name" : "Bandirma",
          "population" : 90200
        },
        {
          "district" : "Ahal",
          "id" : 3419,
          "countrycode" : "TKM",
          "name" : "Ashgabat",
          "population" : 540600
        },
        {
          "district" : "Lebap",
          "id" : 3420,
          "countrycode" : "TKM",
          "name" : "Chï¿½rjew",
          "population" : 189200
        },
        {
          "district" : "Dashhowuz",
          "id" : 3421,
          "countrycode" : "TKM",
          "name" : "Dashhowuz",
          "population" : 141800
        },
        {
          "district" : "Mary",
          "id" : 3422,
          "countrycode" : "TKM",
          "name" : "Mary",
          "population" : 101000
        },
        {
          "district" : "Grand Turk",
          "id" : 3423,
          "countrycode" : "TCA",
          "name" : "Cockburn Town",
          "population" : 4800
        },
        {
          "district" : "Funafuti",
          "id" : 3424,
          "countrycode" : "TUV",
          "name" : "Funafuti",
          "population" : 4600
        },
        {
          "district" : "Central",
          "id" : 3425,
          "countrycode" : "UGA",
          "name" : "Kampala",
          "population" : 890800
        },
        {
          "district" : "Kiova",
          "id" : 3426,
          "countrycode" : "UKR",
          "name" : "Kyiv",
          "population" : 2624000
        },
        {
          "district" : "Harkova",
          "id" : 3427,
          "countrycode" : "UKR",
          "name" : "Harkova [Harkiv]",
          "population" : 1500000
        },
        {
          "district" : "Dnipropetrovsk",
          "id" : 3428,
          "countrycode" : "UKR",
          "name" : "Dnipropetrovsk",
          "population" : 1103000
        },
        {
          "district" : "Donetsk",
          "id" : 3429,
          "countrycode" : "UKR",
          "name" : "Donetsk",
          "population" : 1050000
        },
        {
          "district" : "Odesa",
          "id" : 3430,
          "countrycode" : "UKR",
          "name" : "Odesa",
          "population" : 1011000
        },
        {
          "district" : "Zaporizzja",
          "id" : 3431,
          "countrycode" : "UKR",
          "name" : "Zaporizzja",
          "population" : 848000
        },
        {
          "district" : "Lviv",
          "id" : 3432,
          "countrycode" : "UKR",
          "name" : "Lviv",
          "population" : 788000
        },
        {
          "district" : "Dnipropetrovsk",
          "id" : 3433,
          "countrycode" : "UKR",
          "name" : "Kryvyi Rig",
          "population" : 703000
        },
        {
          "district" : "Mykolajiv",
          "id" : 3434,
          "countrycode" : "UKR",
          "name" : "Mykolajiv",
          "population" : 508000
        },
        {
          "district" : "Donetsk",
          "id" : 3435,
          "countrycode" : "UKR",
          "name" : "Mariupol",
          "population" : 490000
        },
        {
          "district" : "Lugansk",
          "id" : 3436,
          "countrycode" : "UKR",
          "name" : "Lugansk",
          "population" : 469000
        },
        {
          "district" : "Vinnytsja",
          "id" : 3437,
          "countrycode" : "UKR",
          "name" : "Vinnytsja",
          "population" : 391000
        },
        {
          "district" : "Donetsk",
          "id" : 3438,
          "countrycode" : "UKR",
          "name" : "Makijivka",
          "population" : 384000
        },
        {
          "district" : "Herson",
          "id" : 3439,
          "countrycode" : "UKR",
          "name" : "Herson",
          "population" : 353000
        },
        {
          "district" : "Krim",
          "id" : 3440,
          "countrycode" : "UKR",
          "name" : "Sevastopol",
          "population" : 348000
        },
        {
          "district" : "Krim",
          "id" : 3441,
          "countrycode" : "UKR",
          "name" : "Simferopol",
          "population" : 339000
        },
        {
          "district" : "Pultava",
          "id" : 3442,
          "countrycode" : "UKR",
          "name" : "Pultava [Poltava]",
          "population" : 313000
        },
        {
          "district" : "Tï¿½ernigiv",
          "id" : 3443,
          "countrycode" : "UKR",
          "name" : "Tï¿½ernigiv",
          "population" : 313000
        },
        {
          "district" : "Tï¿½erkasy",
          "id" : 3444,
          "countrycode" : "UKR",
          "name" : "Tï¿½erkasy",
          "population" : 309000
        },
        {
          "district" : "Donetsk",
          "id" : 3445,
          "countrycode" : "UKR",
          "name" : "Gorlivka",
          "population" : 299000
        },
        {
          "district" : "Zytomyr",
          "id" : 3446,
          "countrycode" : "UKR",
          "name" : "Zytomyr",
          "population" : 297000
        },
        {
          "district" : "Sumy",
          "id" : 3447,
          "countrycode" : "UKR",
          "name" : "Sumy",
          "population" : 294000
        },
        {
          "district" : "Dnipropetrovsk",
          "id" : 3448,
          "countrycode" : "UKR",
          "name" : "Dniprodzerzynsk",
          "population" : 270000
        },
        {
          "district" : "Kirovograd",
          "id" : 3449,
          "countrycode" : "UKR",
          "name" : "Kirovograd",
          "population" : 265000
        },
        {
          "district" : "Hmelnytskyi",
          "id" : 3450,
          "countrycode" : "UKR",
          "name" : "Hmelnytskyi",
          "population" : 262000
        },
        {
          "district" : "Tï¿½ernivtsi",
          "id" : 3451,
          "countrycode" : "UKR",
          "name" : "Tï¿½ernivtsi",
          "population" : 259000
        },
        {
          "district" : "Rivne",
          "id" : 3452,
          "countrycode" : "UKR",
          "name" : "Rivne",
          "population" : 245000
        },
        {
          "district" : "Pultava",
          "id" : 3453,
          "countrycode" : "UKR",
          "name" : "Krementï¿½uk",
          "population" : 239000
        },
        {
          "district" : "Ivano-Frankivsk",
          "id" : 3454,
          "countrycode" : "UKR",
          "name" : "Ivano-Frankivsk",
          "population" : 237000
        },
        {
          "district" : "Ternopil",
          "id" : 3455,
          "countrycode" : "UKR",
          "name" : "Ternopil",
          "population" : 236000
        },
        {
          "district" : "Volynia",
          "id" : 3456,
          "countrycode" : "UKR",
          "name" : "Lutsk",
          "population" : 217000
        },
        {
          "district" : "Kiova",
          "id" : 3457,
          "countrycode" : "UKR",
          "name" : "Bila Tserkva",
          "population" : 215000
        },
        {
          "district" : "Donetsk",
          "id" : 3458,
          "countrycode" : "UKR",
          "name" : "Kramatorsk",
          "population" : 186000
        },
        {
          "district" : "Zaporizzja",
          "id" : 3459,
          "countrycode" : "UKR",
          "name" : "Melitopol",
          "population" : 169000
        },
        {
          "district" : "Krim",
          "id" : 3460,
          "countrycode" : "UKR",
          "name" : "Kertï¿½",
          "population" : 162000
        },
        {
          "district" : "Dnipropetrovsk",
          "id" : 3461,
          "countrycode" : "UKR",
          "name" : "Nikopol",
          "population" : 149000
        },
        {
          "district" : "Zaporizzja",
          "id" : 3462,
          "countrycode" : "UKR",
          "name" : "Berdjansk",
          "population" : 130000
        },
        {
          "district" : "Dnipropetrovsk",
          "id" : 3463,
          "countrycode" : "UKR",
          "name" : "Pavlograd",
          "population" : 127000
        },
        {
          "district" : "Lugansk",
          "id" : 3464,
          "countrycode" : "UKR",
          "name" : "Sjeverodonetsk",
          "population" : 127000
        },
        {
          "district" : "Donetsk",
          "id" : 3465,
          "countrycode" : "UKR",
          "name" : "Slovjansk",
          "population" : 127000
        },
        {
          "district" : "Taka-Karpatia",
          "id" : 3466,
          "countrycode" : "UKR",
          "name" : "Uzgorod",
          "population" : 127000
        },
        {
          "district" : "Lugansk",
          "id" : 3467,
          "countrycode" : "UKR",
          "name" : "Altï¿½evsk",
          "population" : 119000
        },
        {
          "district" : "Lugansk",
          "id" : 3468,
          "countrycode" : "UKR",
          "name" : "Lysytï¿½ansk",
          "population" : 116000
        },
        {
          "district" : "Krim",
          "id" : 3469,
          "countrycode" : "UKR",
          "name" : "Jevpatorija",
          "population" : 112000
        },
        {
          "district" : "Hmelnytskyi",
          "id" : 3470,
          "countrycode" : "UKR",
          "name" : "Kamjanets-Podilskyi",
          "population" : 109000
        },
        {
          "district" : "Donetsk",
          "id" : 3471,
          "countrycode" : "UKR",
          "name" : "Jenakijeve",
          "population" : 105000
        },
        {
          "district" : "Lugansk",
          "id" : 3472,
          "countrycode" : "UKR",
          "name" : "Krasnyi Lutï¿½",
          "population" : 101000
        },
        {
          "district" : "Lugansk",
          "id" : 3473,
          "countrycode" : "UKR",
          "name" : "Stahanov",
          "population" : 101000
        },
        {
          "district" : "Kirovograd",
          "id" : 3474,
          "countrycode" : "UKR",
          "name" : "Oleksandrija",
          "population" : 99000
        },
        {
          "district" : "Sumy",
          "id" : 3475,
          "countrycode" : "UKR",
          "name" : "Konotop",
          "population" : 96000
        },
        {
          "district" : "Donetsk",
          "id" : 3476,
          "countrycode" : "UKR",
          "name" : "Kostjantynivka",
          "population" : 95000
        },
        {
          "district" : "Zytomyr",
          "id" : 3477,
          "countrycode" : "UKR",
          "name" : "Berdytï¿½iv",
          "population" : 90000
        },
        {
          "district" : "Odesa",
          "id" : 3478,
          "countrycode" : "UKR",
          "name" : "Izmajil",
          "population" : 90000
        },
        {
          "district" : "Sumy",
          "id" : 3479,
          "countrycode" : "UKR",
          "name" : "ï¿½ostka",
          "population" : 90000
        },
        {
          "district" : "Tï¿½erkasy",
          "id" : 3480,
          "countrycode" : "UKR",
          "name" : "Uman",
          "population" : 90000
        },
        {
          "district" : "Kiova",
          "id" : 3481,
          "countrycode" : "UKR",
          "name" : "Brovary",
          "population" : 89000
        },
        {
          "district" : "Taka-Karpatia",
          "id" : 3482,
          "countrycode" : "UKR",
          "name" : "Mukatï¿½eve",
          "population" : 89000
        },
        {
          "district" : "Budapest",
          "id" : 3483,
          "countrycode" : "HUN",
          "name" : "Budapest",
          "population" : 1811552
        },
        {
          "district" : "Hajdï¿½-Bihar",
          "id" : 3484,
          "countrycode" : "HUN",
          "name" : "Debrecen",
          "population" : 203648
        },
        {
          "district" : "Borsod-Abaï¿½j-Zemplï¿½n",
          "id" : 3485,
          "countrycode" : "HUN",
          "name" : "Miskolc",
          "population" : 172357
        },
        {
          "district" : "Csongrï¿½d",
          "id" : 3486,
          "countrycode" : "HUN",
          "name" : "Szeged",
          "population" : 158158
        },
        {
          "district" : "Baranya",
          "id" : 3487,
          "countrycode" : "HUN",
          "name" : "Pï¿½cs",
          "population" : 157332
        },
        {
          "district" : "Gyï¿½r-Moson-Sopron",
          "id" : 3488,
          "countrycode" : "HUN",
          "name" : "Gyï¿½r",
          "population" : 127119
        },
        {
          "district" : "Szabolcs-Szatmï¿½r-Ber",
          "id" : 3489,
          "countrycode" : "HUN",
          "name" : "Nyiregyhï¿½za",
          "population" : 112419
        },
        {
          "district" : "Bï¿½cs-Kiskun",
          "id" : 3490,
          "countrycode" : "HUN",
          "name" : "Kecskemï¿½t",
          "population" : 105606
        },
        {
          "district" : "Fejï¿½r",
          "id" : 3491,
          "countrycode" : "HUN",
          "name" : "Szï¿½kesfehï¿½rvï¿½r",
          "population" : 105119
        },
        {
          "district" : "Montevideo",
          "id" : 3492,
          "countrycode" : "URY",
          "name" : "Montevideo",
          "population" : 1236000
        },
        {
          "district" : "ï¿½",
          "id" : 3493,
          "countrycode" : "NCL",
          "name" : "Noumï¿½a",
          "population" : 76293
        },
        {
          "district" : "Auckland",
          "id" : 3494,
          "countrycode" : "NZL",
          "name" : "Auckland",
          "population" : 381800
        },
        {
          "district" : "Canterbury",
          "id" : 3495,
          "countrycode" : "NZL",
          "name" : "Christchurch",
          "population" : 324200
        },
        {
          "district" : "Auckland",
          "id" : 3496,
          "countrycode" : "NZL",
          "name" : "Manukau",
          "population" : 281800
        },
        {
          "district" : "Auckland",
          "id" : 3497,
          "countrycode" : "NZL",
          "name" : "North Shore",
          "population" : 187700
        },
        {
          "district" : "Auckland",
          "id" : 3498,
          "countrycode" : "NZL",
          "name" : "Waitakere",
          "population" : 170600
        },
        {
          "district" : "Wellington",
          "id" : 3499,
          "countrycode" : "NZL",
          "name" : "Wellington",
          "population" : 166700
        },
        {
          "district" : "Dunedin",
          "id" : 3500,
          "countrycode" : "NZL",
          "name" : "Dunedin",
          "population" : 119600
        },
        {
          "district" : "Hamilton",
          "id" : 3501,
          "countrycode" : "NZL",
          "name" : "Hamilton",
          "population" : 117100
        },
        {
          "district" : "Wellington",
          "id" : 3502,
          "countrycode" : "NZL",
          "name" : "Lower Hutt",
          "population" : 98100
        },
        {
          "district" : "Toskent Shahri",
          "id" : 3503,
          "countrycode" : "UZB",
          "name" : "Toskent",
          "population" : 2117500
        },
        {
          "district" : "Namangan",
          "id" : 3504,
          "countrycode" : "UZB",
          "name" : "Namangan",
          "population" : 370500
        },
        {
          "district" : "Samarkand",
          "id" : 3505,
          "countrycode" : "UZB",
          "name" : "Samarkand",
          "population" : 361800
        },
        {
          "district" : "Andijon",
          "id" : 3506,
          "countrycode" : "UZB",
          "name" : "Andijon",
          "population" : 318600
        },
        {
          "district" : "Buhoro",
          "id" : 3507,
          "countrycode" : "UZB",
          "name" : "Buhoro",
          "population" : 237100
        },
        {
          "district" : "Qashqadaryo",
          "id" : 3508,
          "countrycode" : "UZB",
          "name" : "Karsi",
          "population" : 194100
        },
        {
          "district" : "Karakalpakistan",
          "id" : 3509,
          "countrycode" : "UZB",
          "name" : "Nukus",
          "population" : 194100
        },
        {
          "district" : "Fargona",
          "id" : 3510,
          "countrycode" : "UZB",
          "name" : "Kï¿½kon",
          "population" : 190100
        },
        {
          "district" : "Fargona",
          "id" : 3511,
          "countrycode" : "UZB",
          "name" : "Fargona",
          "population" : 180500
        },
        {
          "district" : "Toskent",
          "id" : 3512,
          "countrycode" : "UZB",
          "name" : "Circik",
          "population" : 146400
        },
        {
          "district" : "Fargona",
          "id" : 3513,
          "countrycode" : "UZB",
          "name" : "Margilon",
          "population" : 140800
        },
        {
          "district" : "Khorazm",
          "id" : 3514,
          "countrycode" : "UZB",
          "name" : "ï¿½rgenc",
          "population" : 138900
        },
        {
          "district" : "Toskent",
          "id" : 3515,
          "countrycode" : "UZB",
          "name" : "Angren",
          "population" : 128000
        },
        {
          "district" : "Cizah",
          "id" : 3516,
          "countrycode" : "UZB",
          "name" : "Cizah",
          "population" : 124800
        },
        {
          "district" : "Navoi",
          "id" : 3517,
          "countrycode" : "UZB",
          "name" : "Navoi",
          "population" : 116300
        },
        {
          "district" : "Toskent",
          "id" : 3518,
          "countrycode" : "UZB",
          "name" : "Olmalik",
          "population" : 114900
        },
        {
          "district" : "Surkhondaryo",
          "id" : 3519,
          "countrycode" : "UZB",
          "name" : "Termiz",
          "population" : 109500
        },
        {
          "district" : "Horad Minsk",
          "id" : 3520,
          "countrycode" : "BLR",
          "name" : "Minsk",
          "population" : 1674000
        },
        {
          "district" : "Gomel",
          "id" : 3521,
          "countrycode" : "BLR",
          "name" : "Gomel",
          "population" : 475000
        },
        {
          "district" : "Mogiljov",
          "id" : 3522,
          "countrycode" : "BLR",
          "name" : "Mogiljov",
          "population" : 356000
        },
        {
          "district" : "Vitebsk",
          "id" : 3523,
          "countrycode" : "BLR",
          "name" : "Vitebsk",
          "population" : 340000
        },
        {
          "district" : "Grodno",
          "id" : 3524,
          "countrycode" : "BLR",
          "name" : "Grodno",
          "population" : 302000
        },
        {
          "district" : "Brest",
          "id" : 3525,
          "countrycode" : "BLR",
          "name" : "Brest",
          "population" : 286000
        },
        {
          "district" : "Mogiljov",
          "id" : 3526,
          "countrycode" : "BLR",
          "name" : "Bobruisk",
          "population" : 221000
        },
        {
          "district" : "Brest",
          "id" : 3527,
          "countrycode" : "BLR",
          "name" : "Baranovitï¿½i",
          "population" : 167000
        },
        {
          "district" : "Minsk",
          "id" : 3528,
          "countrycode" : "BLR",
          "name" : "Borisov",
          "population" : 151000
        },
        {
          "district" : "Brest",
          "id" : 3529,
          "countrycode" : "BLR",
          "name" : "Pinsk",
          "population" : 130000
        },
        {
          "district" : "Vitebsk",
          "id" : 3530,
          "countrycode" : "BLR",
          "name" : "Orï¿½a",
          "population" : 124000
        },
        {
          "district" : "Gomel",
          "id" : 3531,
          "countrycode" : "BLR",
          "name" : "Mozyr",
          "population" : 110000
        },
        {
          "district" : "Vitebsk",
          "id" : 3532,
          "countrycode" : "BLR",
          "name" : "Novopolotsk",
          "population" : 106000
        },
        {
          "district" : "Grodno",
          "id" : 3533,
          "countrycode" : "BLR",
          "name" : "Lida",
          "population" : 101000
        },
        {
          "district" : "Minsk",
          "id" : 3534,
          "countrycode" : "BLR",
          "name" : "Soligorsk",
          "population" : 101000
        },
        {
          "district" : "Minsk",
          "id" : 3535,
          "countrycode" : "BLR",
          "name" : "Molodetï¿½no",
          "population" : 97000
        },
        {
          "district" : "Wallis",
          "id" : 3536,
          "countrycode" : "WLF",
          "name" : "Mata-Utu",
          "population" : 1137
        },
        {
          "district" : "Shefa",
          "id" : 3537,
          "countrycode" : "VUT",
          "name" : "Port-Vila",
          "population" : 33700
        },
        {
          "district" : "ï¿½",
          "id" : 3538,
          "countrycode" : "VAT",
          "name" : "Cittï¿½ del Vaticano",
          "population" : 455
        },
        {
          "district" : "Distrito Federal",
          "id" : 3539,
          "countrycode" : "VEN",
          "name" : "Caracas",
          "population" : 1975294
        },
        {
          "district" : "Zulia",
          "id" : 3540,
          "countrycode" : "VEN",
          "name" : "Maracaï¿½bo",
          "population" : 1304776
        },
        {
          "district" : "Lara",
          "id" : 3541,
          "countrycode" : "VEN",
          "name" : "Barquisimeto",
          "population" : 877239
        },
        {
          "district" : "Carabobo",
          "id" : 3542,
          "countrycode" : "VEN",
          "name" : "Valencia",
          "population" : 794246
        },
        {
          "district" : "Bolï¿½var",
          "id" : 3543,
          "countrycode" : "VEN",
          "name" : "Ciudad Guayana",
          "population" : 663713
        },
        {
          "district" : "Miranda",
          "id" : 3544,
          "countrycode" : "VEN",
          "name" : "Petare",
          "population" : 488868
        },
        {
          "district" : "Aragua",
          "id" : 3545,
          "countrycode" : "VEN",
          "name" : "Maracay",
          "population" : 444443
        },
        {
          "district" : "Anzoï¿½tegui",
          "id" : 3546,
          "countrycode" : "VEN",
          "name" : "Barcelona",
          "population" : 322267
        },
        {
          "district" : "Monagas",
          "id" : 3547,
          "countrycode" : "VEN",
          "name" : "Maturï¿½n",
          "population" : 319726
        },
        {
          "district" : "Tï¿½chira",
          "id" : 3548,
          "countrycode" : "VEN",
          "name" : "San Cristï¿½bal",
          "population" : 319373
        },
        {
          "district" : "Bolï¿½var",
          "id" : 3549,
          "countrycode" : "VEN",
          "name" : "Ciudad Bolï¿½var",
          "population" : 301107
        },
        {
          "district" : "Sucre",
          "id" : 3550,
          "countrycode" : "VEN",
          "name" : "Cumanï¿½",
          "population" : 293105
        },
        {
          "district" : "Mï¿½rida",
          "id" : 3551,
          "countrycode" : "VEN",
          "name" : "Mï¿½rida",
          "population" : 224887
        },
        {
          "district" : "Zulia",
          "id" : 3552,
          "countrycode" : "VEN",
          "name" : "Cabimas",
          "population" : 221329
        },
        {
          "district" : "Barinas",
          "id" : 3553,
          "countrycode" : "VEN",
          "name" : "Barinas",
          "population" : 217831
        },
        {
          "district" : "Aragua",
          "id" : 3554,
          "countrycode" : "VEN",
          "name" : "Turmero",
          "population" : 217499
        },
        {
          "district" : "Miranda",
          "id" : 3555,
          "countrycode" : "VEN",
          "name" : "Baruta",
          "population" : 207290
        },
        {
          "district" : "Carabobo",
          "id" : 3556,
          "countrycode" : "VEN",
          "name" : "Puerto Cabello",
          "population" : 187722
        },
        {
          "district" : "Falcï¿½n",
          "id" : 3557,
          "countrycode" : "VEN",
          "name" : "Santa Ana de Coro",
          "population" : 185766
        },
        {
          "district" : "Miranda",
          "id" : 3558,
          "countrycode" : "VEN",
          "name" : "Los Teques",
          "population" : 178784
        },
        {
          "district" : "Falcï¿½n",
          "id" : 3559,
          "countrycode" : "VEN",
          "name" : "Punto Fijo",
          "population" : 167215
        },
        {
          "district" : "Miranda",
          "id" : 3560,
          "countrycode" : "VEN",
          "name" : "Guarenas",
          "population" : 165889
        },
        {
          "district" : "Portuguesa",
          "id" : 3561,
          "countrycode" : "VEN",
          "name" : "Acarigua",
          "population" : 158954
        },
        {
          "district" : "Anzoï¿½tegui",
          "id" : 3562,
          "countrycode" : "VEN",
          "name" : "Puerto La Cruz",
          "population" : 155700
        },
        {
          "district" : "",
          "id" : 3563,
          "countrycode" : "VEN",
          "name" : "Ciudad Losada",
          "population" : 134501
        },
        {
          "district" : "Carabobo",
          "id" : 3564,
          "countrycode" : "VEN",
          "name" : "Guacara",
          "population" : 131334
        },
        {
          "district" : "Trujillo",
          "id" : 3565,
          "countrycode" : "VEN",
          "name" : "Valera",
          "population" : 130281
        },
        {
          "district" : "Portuguesa",
          "id" : 3566,
          "countrycode" : "VEN",
          "name" : "Guanare",
          "population" : 125621
        },
        {
          "district" : "Sucre",
          "id" : 3567,
          "countrycode" : "VEN",
          "name" : "Carï¿½pano",
          "population" : 119639
        },
        {
          "district" : "Distrito Federal",
          "id" : 3568,
          "countrycode" : "VEN",
          "name" : "Catia La Mar",
          "population" : 117012
        },
        {
          "district" : "Anzoï¿½tegui",
          "id" : 3569,
          "countrycode" : "VEN",
          "name" : "El Tigre",
          "population" : 116256
        },
        {
          "district" : "Miranda",
          "id" : 3570,
          "countrycode" : "VEN",
          "name" : "Guatire",
          "population" : 109121
        },
        {
          "district" : "Guï¿½rico",
          "id" : 3571,
          "countrycode" : "VEN",
          "name" : "Calabozo",
          "population" : 107146
        },
        {
          "district" : "Anzoï¿½tegui",
          "id" : 3572,
          "countrycode" : "VEN",
          "name" : "Pozuelos",
          "population" : 105690
        },
        {
          "district" : "Zulia",
          "id" : 3573,
          "countrycode" : "VEN",
          "name" : "Ciudad Ojeda",
          "population" : 99354
        },
        {
          "district" : "Miranda",
          "id" : 3574,
          "countrycode" : "VEN",
          "name" : "Ocumare del Tuy",
          "population" : 97168
        },
        {
          "district" : "Guï¿½rico",
          "id" : 3575,
          "countrycode" : "VEN",
          "name" : "Valle de la Pascua",
          "population" : 95927
        },
        {
          "district" : "Portuguesa",
          "id" : 3576,
          "countrycode" : "VEN",
          "name" : "Araure",
          "population" : 94269
        },
        {
          "district" : "Apure",
          "id" : 3577,
          "countrycode" : "VEN",
          "name" : "San Fernando de Apure",
          "population" : 93809
        },
        {
          "district" : "Yaracuy",
          "id" : 3578,
          "countrycode" : "VEN",
          "name" : "San Felipe",
          "population" : 90940
        },
        {
          "district" : "Aragua",
          "id" : 3579,
          "countrycode" : "VEN",
          "name" : "El Limï¿½n",
          "population" : 90000
        },
        {
          "district" : "Moscow (City)",
          "id" : 3580,
          "countrycode" : "RUS",
          "name" : "Moscow",
          "population" : 8389200
        },
        {
          "district" : "Pietari",
          "id" : 3581,
          "countrycode" : "RUS",
          "name" : "St Petersburg",
          "population" : 4694000
        },
        {
          "district" : "Novosibirsk",
          "id" : 3582,
          "countrycode" : "RUS",
          "name" : "Novosibirsk",
          "population" : 1398800
        },
        {
          "district" : "Nizni Novgorod",
          "id" : 3583,
          "countrycode" : "RUS",
          "name" : "Nizni Novgorod",
          "population" : 1357000
        },
        {
          "district" : "Sverdlovsk",
          "id" : 3584,
          "countrycode" : "RUS",
          "name" : "Jekaterinburg",
          "population" : 1266300
        },
        {
          "district" : "Samara",
          "id" : 3585,
          "countrycode" : "RUS",
          "name" : "Samara",
          "population" : 1156100
        },
        {
          "district" : "Omsk",
          "id" : 3586,
          "countrycode" : "RUS",
          "name" : "Omsk",
          "population" : 1148900
        },
        {
          "district" : "Tatarstan",
          "id" : 3587,
          "countrycode" : "RUS",
          "name" : "Kazan",
          "population" : 1101000
        },
        {
          "district" : "Baï¿½kortostan",
          "id" : 3588,
          "countrycode" : "RUS",
          "name" : "Ufa",
          "population" : 1091200
        },
        {
          "district" : "Tï¿½eljabinsk",
          "id" : 3589,
          "countrycode" : "RUS",
          "name" : "Tï¿½eljabinsk",
          "population" : 1083200
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3590,
          "countrycode" : "RUS",
          "name" : "Rostov-na-Donu",
          "population" : 1012700
        },
        {
          "district" : "Perm",
          "id" : 3591,
          "countrycode" : "RUS",
          "name" : "Perm",
          "population" : 1009700
        },
        {
          "district" : "Volgograd",
          "id" : 3592,
          "countrycode" : "RUS",
          "name" : "Volgograd",
          "population" : 993400
        },
        {
          "district" : "Voronez",
          "id" : 3593,
          "countrycode" : "RUS",
          "name" : "Voronez",
          "population" : 907700
        },
        {
          "district" : "Krasnojarsk",
          "id" : 3594,
          "countrycode" : "RUS",
          "name" : "Krasnojarsk",
          "population" : 875500
        },
        {
          "district" : "Saratov",
          "id" : 3595,
          "countrycode" : "RUS",
          "name" : "Saratov",
          "population" : 874000
        },
        {
          "district" : "Samara",
          "id" : 3596,
          "countrycode" : "RUS",
          "name" : "Toljatti",
          "population" : 722900
        },
        {
          "district" : "Uljanovsk",
          "id" : 3597,
          "countrycode" : "RUS",
          "name" : "Uljanovsk",
          "population" : 667400
        },
        {
          "district" : "Udmurtia",
          "id" : 3598,
          "countrycode" : "RUS",
          "name" : "Izevsk",
          "population" : 652800
        },
        {
          "district" : "Krasnodar",
          "id" : 3599,
          "countrycode" : "RUS",
          "name" : "Krasnodar",
          "population" : 639000
        },
        {
          "district" : "Jaroslavl",
          "id" : 3600,
          "countrycode" : "RUS",
          "name" : "Jaroslavl",
          "population" : 616700
        },
        {
          "district" : "Habarovsk",
          "id" : 3601,
          "countrycode" : "RUS",
          "name" : "Habarovsk",
          "population" : 609400
        },
        {
          "district" : "Primorje",
          "id" : 3602,
          "countrycode" : "RUS",
          "name" : "Vladivostok",
          "population" : 606200
        },
        {
          "district" : "Irkutsk",
          "id" : 3603,
          "countrycode" : "RUS",
          "name" : "Irkutsk",
          "population" : 593700
        },
        {
          "district" : "Altai",
          "id" : 3604,
          "countrycode" : "RUS",
          "name" : "Barnaul",
          "population" : 580100
        },
        {
          "district" : "Kemerovo",
          "id" : 3605,
          "countrycode" : "RUS",
          "name" : "Novokuznetsk",
          "population" : 561600
        },
        {
          "district" : "Penza",
          "id" : 3606,
          "countrycode" : "RUS",
          "name" : "Penza",
          "population" : 532200
        },
        {
          "district" : "Rjazan",
          "id" : 3607,
          "countrycode" : "RUS",
          "name" : "Rjazan",
          "population" : 529900
        },
        {
          "district" : "Orenburg",
          "id" : 3608,
          "countrycode" : "RUS",
          "name" : "Orenburg",
          "population" : 523600
        },
        {
          "district" : "Lipetsk",
          "id" : 3609,
          "countrycode" : "RUS",
          "name" : "Lipetsk",
          "population" : 521000
        },
        {
          "district" : "Tatarstan",
          "id" : 3610,
          "countrycode" : "RUS",
          "name" : "Nabereznyje Tï¿½elny",
          "population" : 514700
        },
        {
          "district" : "Tula",
          "id" : 3611,
          "countrycode" : "RUS",
          "name" : "Tula",
          "population" : 506100
        },
        {
          "district" : "Tjumen",
          "id" : 3612,
          "countrycode" : "RUS",
          "name" : "Tjumen",
          "population" : 503400
        },
        {
          "district" : "Kemerovo",
          "id" : 3613,
          "countrycode" : "RUS",
          "name" : "Kemerovo",
          "population" : 492700
        },
        {
          "district" : "Astrahan",
          "id" : 3614,
          "countrycode" : "RUS",
          "name" : "Astrahan",
          "population" : 486100
        },
        {
          "district" : "Tomsk",
          "id" : 3615,
          "countrycode" : "RUS",
          "name" : "Tomsk",
          "population" : 482100
        },
        {
          "district" : "Kirov",
          "id" : 3616,
          "countrycode" : "RUS",
          "name" : "Kirov",
          "population" : 466200
        },
        {
          "district" : "Ivanovo",
          "id" : 3617,
          "countrycode" : "RUS",
          "name" : "Ivanovo",
          "population" : 459200
        },
        {
          "district" : "Tï¿½uvassia",
          "id" : 3618,
          "countrycode" : "RUS",
          "name" : "Tï¿½eboksary",
          "population" : 459200
        },
        {
          "district" : "Brjansk",
          "id" : 3619,
          "countrycode" : "RUS",
          "name" : "Brjansk",
          "population" : 457400
        },
        {
          "district" : "Tver",
          "id" : 3620,
          "countrycode" : "RUS",
          "name" : "Tver",
          "population" : 454900
        },
        {
          "district" : "Kursk",
          "id" : 3621,
          "countrycode" : "RUS",
          "name" : "Kursk",
          "population" : 443500
        },
        {
          "district" : "Tï¿½eljabinsk",
          "id" : 3622,
          "countrycode" : "RUS",
          "name" : "Magnitogorsk",
          "population" : 427900
        },
        {
          "district" : "Kaliningrad",
          "id" : 3623,
          "countrycode" : "RUS",
          "name" : "Kaliningrad",
          "population" : 424400
        },
        {
          "district" : "Sverdlovsk",
          "id" : 3624,
          "countrycode" : "RUS",
          "name" : "Nizni Tagil",
          "population" : 390900
        },
        {
          "district" : "Murmansk",
          "id" : 3625,
          "countrycode" : "RUS",
          "name" : "Murmansk",
          "population" : 376300
        },
        {
          "district" : "Burjatia",
          "id" : 3626,
          "countrycode" : "RUS",
          "name" : "Ulan-Ude",
          "population" : 370400
        },
        {
          "district" : "Kurgan",
          "id" : 3627,
          "countrycode" : "RUS",
          "name" : "Kurgan",
          "population" : 364700
        },
        {
          "district" : "Arkangeli",
          "id" : 3628,
          "countrycode" : "RUS",
          "name" : "Arkangeli",
          "population" : 361800
        },
        {
          "district" : "Krasnodar",
          "id" : 3629,
          "countrycode" : "RUS",
          "name" : "Sotï¿½i",
          "population" : 358600
        },
        {
          "district" : "Smolensk",
          "id" : 3630,
          "countrycode" : "RUS",
          "name" : "Smolensk",
          "population" : 353400
        },
        {
          "district" : "Orjol",
          "id" : 3631,
          "countrycode" : "RUS",
          "name" : "Orjol",
          "population" : 344500
        },
        {
          "district" : "Stavropol",
          "id" : 3632,
          "countrycode" : "RUS",
          "name" : "Stavropol",
          "population" : 343300
        },
        {
          "district" : "Belgorod",
          "id" : 3633,
          "countrycode" : "RUS",
          "name" : "Belgorod",
          "population" : 342000
        },
        {
          "district" : "Kaluga",
          "id" : 3634,
          "countrycode" : "RUS",
          "name" : "Kaluga",
          "population" : 339300
        },
        {
          "district" : "Vladimir",
          "id" : 3635,
          "countrycode" : "RUS",
          "name" : "Vladimir",
          "population" : 337100
        },
        {
          "district" : "Dagestan",
          "id" : 3636,
          "countrycode" : "RUS",
          "name" : "Mahatï¿½kala",
          "population" : 332800
        },
        {
          "district" : "Vologda",
          "id" : 3637,
          "countrycode" : "RUS",
          "name" : "Tï¿½erepovets",
          "population" : 324400
        },
        {
          "district" : "Mordva",
          "id" : 3638,
          "countrycode" : "RUS",
          "name" : "Saransk",
          "population" : 314800
        },
        {
          "district" : "Tambov",
          "id" : 3639,
          "countrycode" : "RUS",
          "name" : "Tambov",
          "population" : 312000
        },
        {
          "district" : "North Ossetia-Alania",
          "id" : 3640,
          "countrycode" : "RUS",
          "name" : "Vladikavkaz",
          "population" : 310100
        },
        {
          "district" : "Tï¿½ita",
          "id" : 3641,
          "countrycode" : "RUS",
          "name" : "Tï¿½ita",
          "population" : 309900
        },
        {
          "district" : "Vologda",
          "id" : 3642,
          "countrycode" : "RUS",
          "name" : "Vologda",
          "population" : 302500
        },
        {
          "district" : "Novgorod",
          "id" : 3643,
          "countrycode" : "RUS",
          "name" : "Veliki Novgorod",
          "population" : 299500
        },
        {
          "district" : "Habarovsk",
          "id" : 3644,
          "countrycode" : "RUS",
          "name" : "Komsomolsk-na-Amure",
          "population" : 291600
        },
        {
          "district" : "Kostroma",
          "id" : 3645,
          "countrycode" : "RUS",
          "name" : "Kostroma",
          "population" : 288100
        },
        {
          "district" : "Volgograd",
          "id" : 3646,
          "countrycode" : "RUS",
          "name" : "Volzski",
          "population" : 286900
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3647,
          "countrycode" : "RUS",
          "name" : "Taganrog",
          "population" : 284400
        },
        {
          "district" : "Karjala",
          "id" : 3648,
          "countrycode" : "RUS",
          "name" : "Petroskoi",
          "population" : 282100
        },
        {
          "district" : "Irkutsk",
          "id" : 3649,
          "countrycode" : "RUS",
          "name" : "Bratsk",
          "population" : 277600
        },
        {
          "district" : "Nizni Novgorod",
          "id" : 3650,
          "countrycode" : "RUS",
          "name" : "Dzerzinsk",
          "population" : 277100
        },
        {
          "district" : "Hanti-Mansia",
          "id" : 3651,
          "countrycode" : "RUS",
          "name" : "Surgut",
          "population" : 274900
        },
        {
          "district" : "Orenburg",
          "id" : 3652,
          "countrycode" : "RUS",
          "name" : "Orsk",
          "population" : 273900
        },
        {
          "district" : "Baï¿½kortostan",
          "id" : 3653,
          "countrycode" : "RUS",
          "name" : "Sterlitamak",
          "population" : 265200
        },
        {
          "district" : "Irkutsk",
          "id" : 3654,
          "countrycode" : "RUS",
          "name" : "Angarsk",
          "population" : 264700
        },
        {
          "district" : "Marinmaa",
          "id" : 3655,
          "countrycode" : "RUS",
          "name" : "Joï¿½kar-Ola",
          "population" : 249200
        },
        {
          "district" : "Jaroslavl",
          "id" : 3656,
          "countrycode" : "RUS",
          "name" : "Rybinsk",
          "population" : 239600
        },
        {
          "district" : "Kemerovo",
          "id" : 3657,
          "countrycode" : "RUS",
          "name" : "Prokopjevsk",
          "population" : 237300
        },
        {
          "district" : "Hanti-Mansia",
          "id" : 3658,
          "countrycode" : "RUS",
          "name" : "Niznevartovsk",
          "population" : 233900
        },
        {
          "district" : "Kabardi-Balkaria",
          "id" : 3659,
          "countrycode" : "RUS",
          "name" : "Naltï¿½ik",
          "population" : 233400
        },
        {
          "district" : "Komi",
          "id" : 3660,
          "countrycode" : "RUS",
          "name" : "Syktyvkar",
          "population" : 229700
        },
        {
          "district" : "Arkangeli",
          "id" : 3661,
          "countrycode" : "RUS",
          "name" : "Severodvinsk",
          "population" : 229300
        },
        {
          "district" : "Altai",
          "id" : 3662,
          "countrycode" : "RUS",
          "name" : "Bijsk",
          "population" : 225000
        },
        {
          "district" : "Tatarstan",
          "id" : 3663,
          "countrycode" : "RUS",
          "name" : "Niznekamsk",
          "population" : 223400
        },
        {
          "district" : "Amur",
          "id" : 3664,
          "countrycode" : "RUS",
          "name" : "Blagoveï¿½tï¿½ensk",
          "population" : 222000
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3665,
          "countrycode" : "RUS",
          "name" : "ï¿½ahty",
          "population" : 221800
        },
        {
          "district" : "Belgorod",
          "id" : 3666,
          "countrycode" : "RUS",
          "name" : "Staryi Oskol",
          "population" : 213800
        },
        {
          "district" : "Moscow (City)",
          "id" : 3667,
          "countrycode" : "RUS",
          "name" : "Zelenograd",
          "population" : 207100
        },
        {
          "district" : "Saratov",
          "id" : 3668,
          "countrycode" : "RUS",
          "name" : "Balakovo",
          "population" : 206000
        },
        {
          "district" : "Krasnodar",
          "id" : 3669,
          "countrycode" : "RUS",
          "name" : "Novorossijsk",
          "population" : 203300
        },
        {
          "district" : "Pihkova",
          "id" : 3670,
          "countrycode" : "RUS",
          "name" : "Pihkova",
          "population" : 201500
        },
        {
          "district" : "Tï¿½eljabinsk",
          "id" : 3671,
          "countrycode" : "RUS",
          "name" : "Zlatoust",
          "population" : 196900
        },
        {
          "district" : "Saha (Jakutia)",
          "id" : 3672,
          "countrycode" : "RUS",
          "name" : "Jakutsk",
          "population" : 195400
        },
        {
          "district" : "Moskova",
          "id" : 3673,
          "countrycode" : "RUS",
          "name" : "Podolsk",
          "population" : 194300
        },
        {
          "district" : "Kamtï¿½atka",
          "id" : 3674,
          "countrycode" : "RUS",
          "name" : "Petropavlovsk-Kamtï¿½atski",
          "population" : 194100
        },
        {
          "district" : "Sverdlovsk",
          "id" : 3675,
          "countrycode" : "RUS",
          "name" : "Kamensk-Uralski",
          "population" : 190600
        },
        {
          "district" : "Saratov",
          "id" : 3676,
          "countrycode" : "RUS",
          "name" : "Engels",
          "population" : 189000
        },
        {
          "district" : "Samara",
          "id" : 3677,
          "countrycode" : "RUS",
          "name" : "Syzran",
          "population" : 186900
        },
        {
          "district" : "Tï¿½etï¿½enia",
          "id" : 3678,
          "countrycode" : "RUS",
          "name" : "Grozny",
          "population" : 186000
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3679,
          "countrycode" : "RUS",
          "name" : "Novotï¿½erkassk",
          "population" : 184400
        },
        {
          "district" : "Perm",
          "id" : 3680,
          "countrycode" : "RUS",
          "name" : "Berezniki",
          "population" : 181900
        },
        {
          "district" : "Sahalin",
          "id" : 3681,
          "countrycode" : "RUS",
          "name" : "Juzno-Sahalinsk",
          "population" : 179200
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3682,
          "countrycode" : "RUS",
          "name" : "Volgodonsk",
          "population" : 178200
        },
        {
          "district" : "Hakassia",
          "id" : 3683,
          "countrycode" : "RUS",
          "name" : "Abakan",
          "population" : 169200
        },
        {
          "district" : "Adygea",
          "id" : 3684,
          "countrycode" : "RUS",
          "name" : "Maikop",
          "population" : 167300
        },
        {
          "district" : "Tï¿½eljabinsk",
          "id" : 3685,
          "countrycode" : "RUS",
          "name" : "Miass",
          "population" : 166200
        },
        {
          "district" : "Krasnodar",
          "id" : 3686,
          "countrycode" : "RUS",
          "name" : "Armavir",
          "population" : 164900
        },
        {
          "district" : "Moskova",
          "id" : 3687,
          "countrycode" : "RUS",
          "name" : "Ljubertsy",
          "population" : 163900
        },
        {
          "district" : "Altai",
          "id" : 3688,
          "countrycode" : "RUS",
          "name" : "Rubtsovsk",
          "population" : 162600
        },
        {
          "district" : "Vladimir",
          "id" : 3689,
          "countrycode" : "RUS",
          "name" : "Kovrov",
          "population" : 159900
        },
        {
          "district" : "Primorje",
          "id" : 3690,
          "countrycode" : "RUS",
          "name" : "Nahodka",
          "population" : 157700
        },
        {
          "district" : "Primorje",
          "id" : 3691,
          "countrycode" : "RUS",
          "name" : "Ussurijsk",
          "population" : 157300
        },
        {
          "district" : "Baï¿½kortostan",
          "id" : 3692,
          "countrycode" : "RUS",
          "name" : "Salavat",
          "population" : 156800
        },
        {
          "district" : "Moskova",
          "id" : 3693,
          "countrycode" : "RUS",
          "name" : "Mytiï¿½tï¿½i",
          "population" : 155700
        },
        {
          "district" : "Moskova",
          "id" : 3694,
          "countrycode" : "RUS",
          "name" : "Kolomna",
          "population" : 150700
        },
        {
          "district" : "Moskova",
          "id" : 3695,
          "countrycode" : "RUS",
          "name" : "Elektrostal",
          "population" : 147000
        },
        {
          "district" : "Vladimir",
          "id" : 3696,
          "countrycode" : "RUS",
          "name" : "Murom",
          "population" : 142400
        },
        {
          "district" : "Pietari",
          "id" : 3697,
          "countrycode" : "RUS",
          "name" : "Kolpino",
          "population" : 141200
        },
        {
          "district" : "Krasnojarsk",
          "id" : 3698,
          "countrycode" : "RUS",
          "name" : "Norilsk",
          "population" : 140800
        },
        {
          "district" : "Tatarstan",
          "id" : 3699,
          "countrycode" : "RUS",
          "name" : "Almetjevsk",
          "population" : 140700
        },
        {
          "district" : "Tula",
          "id" : 3700,
          "countrycode" : "RUS",
          "name" : "Novomoskovsk",
          "population" : 138100
        },
        {
          "district" : "Uljanovsk",
          "id" : 3701,
          "countrycode" : "RUS",
          "name" : "Dimitrovgrad",
          "population" : 137000
        },
        {
          "district" : "Sverdlovsk",
          "id" : 3702,
          "countrycode" : "RUS",
          "name" : "Pervouralsk",
          "population" : 136100
        },
        {
          "district" : "Moskova",
          "id" : 3703,
          "countrycode" : "RUS",
          "name" : "Himki",
          "population" : 133700
        },
        {
          "district" : "Moskova",
          "id" : 3704,
          "countrycode" : "RUS",
          "name" : "Balaï¿½iha",
          "population" : 132900
        },
        {
          "district" : "Stavropol",
          "id" : 3705,
          "countrycode" : "RUS",
          "name" : "Nevinnomyssk",
          "population" : 132600
        },
        {
          "district" : "Stavropol",
          "id" : 3706,
          "countrycode" : "RUS",
          "name" : "Pjatigorsk",
          "population" : 132500
        },
        {
          "district" : "Moskova",
          "id" : 3707,
          "countrycode" : "RUS",
          "name" : "Korolev",
          "population" : 132400
        },
        {
          "district" : "Moskova",
          "id" : 3708,
          "countrycode" : "RUS",
          "name" : "Serpuhov",
          "population" : 132000
        },
        {
          "district" : "Moskova",
          "id" : 3709,
          "countrycode" : "RUS",
          "name" : "Odintsovo",
          "population" : 127400
        },
        {
          "district" : "Moskova",
          "id" : 3710,
          "countrycode" : "RUS",
          "name" : "Orehovo-Zujevo",
          "population" : 124900
        },
        {
          "district" : "Volgograd",
          "id" : 3711,
          "countrycode" : "RUS",
          "name" : "Kamyï¿½in",
          "population" : 124600
        },
        {
          "district" : "Tï¿½uvassia",
          "id" : 3712,
          "countrycode" : "RUS",
          "name" : "Novotï¿½eboksarsk",
          "population" : 123400
        },
        {
          "district" : "Karatï¿½ai-Tï¿½erkessia",
          "id" : 3713,
          "countrycode" : "RUS",
          "name" : "Tï¿½erkessk",
          "population" : 121700
        },
        {
          "district" : "Krasnojarsk",
          "id" : 3714,
          "countrycode" : "RUS",
          "name" : "Atï¿½insk",
          "population" : 121600
        },
        {
          "district" : "Magadan",
          "id" : 3715,
          "countrycode" : "RUS",
          "name" : "Magadan",
          "population" : 121000
        },
        {
          "district" : "Tambov",
          "id" : 3716,
          "countrycode" : "RUS",
          "name" : "Mitï¿½urinsk",
          "population" : 120700
        },
        {
          "district" : "Stavropol",
          "id" : 3717,
          "countrycode" : "RUS",
          "name" : "Kislovodsk",
          "population" : 120400
        },
        {
          "district" : "Lipetsk",
          "id" : 3718,
          "countrycode" : "RUS",
          "name" : "Jelets",
          "population" : 119400
        },
        {
          "district" : "Tomsk",
          "id" : 3719,
          "countrycode" : "RUS",
          "name" : "Seversk",
          "population" : 118600
        },
        {
          "district" : "Moskova",
          "id" : 3720,
          "countrycode" : "RUS",
          "name" : "Noginsk",
          "population" : 117200
        },
        {
          "district" : "Pihkova",
          "id" : 3721,
          "countrycode" : "RUS",
          "name" : "Velikije Luki",
          "population" : 116300
        },
        {
          "district" : "Samara",
          "id" : 3722,
          "countrycode" : "RUS",
          "name" : "Novokuibyï¿½evsk",
          "population" : 116200
        },
        {
          "district" : "Baï¿½kortostan",
          "id" : 3723,
          "countrycode" : "RUS",
          "name" : "Neftekamsk",
          "population" : 115700
        },
        {
          "district" : "Kemerovo",
          "id" : 3724,
          "countrycode" : "RUS",
          "name" : "Leninsk-Kuznetski",
          "population" : 113800
        },
        {
          "district" : "Baï¿½kortostan",
          "id" : 3725,
          "countrycode" : "RUS",
          "name" : "Oktjabrski",
          "population" : 111500
        },
        {
          "district" : "Moskova",
          "id" : 3726,
          "countrycode" : "RUS",
          "name" : "Sergijev Posad",
          "population" : 111100
        },
        {
          "district" : "Nizni Novgorod",
          "id" : 3727,
          "countrycode" : "RUS",
          "name" : "Arzamas",
          "population" : 110700
        },
        {
          "district" : "Kemerovo",
          "id" : 3728,
          "countrycode" : "RUS",
          "name" : "Kiseljovsk",
          "population" : 110000
        },
        {
          "district" : "Orenburg",
          "id" : 3729,
          "countrycode" : "RUS",
          "name" : "Novotroitsk",
          "population" : 109600
        },
        {
          "district" : "Kaluga",
          "id" : 3730,
          "countrycode" : "RUS",
          "name" : "Obninsk",
          "population" : 108300
        },
        {
          "district" : "Krasnojarsk",
          "id" : 3731,
          "countrycode" : "RUS",
          "name" : "Kansk",
          "population" : 107400
        },
        {
          "district" : "Udmurtia",
          "id" : 3732,
          "countrycode" : "RUS",
          "name" : "Glazov",
          "population" : 106300
        },
        {
          "district" : "Perm",
          "id" : 3733,
          "countrycode" : "RUS",
          "name" : "Solikamsk",
          "population" : 106000
        },
        {
          "district" : "Udmurtia",
          "id" : 3734,
          "countrycode" : "RUS",
          "name" : "Sarapul",
          "population" : 105700
        },
        {
          "district" : "Irkutsk",
          "id" : 3735,
          "countrycode" : "RUS",
          "name" : "Ust-Ilimsk",
          "population" : 105200
        },
        {
          "district" : "Moskova",
          "id" : 3736,
          "countrycode" : "RUS",
          "name" : "ï¿½tï¿½olkovo",
          "population" : 104900
        },
        {
          "district" : "Kemerovo",
          "id" : 3737,
          "countrycode" : "RUS",
          "name" : "Mezduretï¿½ensk",
          "population" : 104400
        },
        {
          "district" : "Irkutsk",
          "id" : 3738,
          "countrycode" : "RUS",
          "name" : "Usolje-Sibirskoje",
          "population" : 103500
        },
        {
          "district" : "Kalmykia",
          "id" : 3739,
          "countrycode" : "RUS",
          "name" : "Elista",
          "population" : 103300
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3740,
          "countrycode" : "RUS",
          "name" : "Novoï¿½ahtinsk",
          "population" : 101900
        },
        {
          "district" : "Udmurtia",
          "id" : 3741,
          "countrycode" : "RUS",
          "name" : "Votkinsk",
          "population" : 101700
        },
        {
          "district" : "Tyva",
          "id" : 3742,
          "countrycode" : "RUS",
          "name" : "Kyzyl",
          "population" : 101100
        },
        {
          "district" : "Sverdlovsk",
          "id" : 3743,
          "countrycode" : "RUS",
          "name" : "Serov",
          "population" : 100400
        },
        {
          "district" : "Tatarstan",
          "id" : 3744,
          "countrycode" : "RUS",
          "name" : "Zelenodolsk",
          "population" : 100200
        },
        {
          "district" : "Moskova",
          "id" : 3745,
          "countrycode" : "RUS",
          "name" : "Zeleznodoroznyi",
          "population" : 100100
        },
        {
          "district" : "Ivanovo",
          "id" : 3746,
          "countrycode" : "RUS",
          "name" : "Kineï¿½ma",
          "population" : 100000
        },
        {
          "district" : "Penza",
          "id" : 3747,
          "countrycode" : "RUS",
          "name" : "Kuznetsk",
          "population" : 98200
        },
        {
          "district" : "Komi",
          "id" : 3748,
          "countrycode" : "RUS",
          "name" : "Uhta",
          "population" : 98000
        },
        {
          "district" : "Stavropol",
          "id" : 3749,
          "countrycode" : "RUS",
          "name" : "Jessentuki",
          "population" : 97900
        },
        {
          "district" : "Tjumen",
          "id" : 3750,
          "countrycode" : "RUS",
          "name" : "Tobolsk",
          "population" : 97600
        },
        {
          "district" : "Hanti-Mansia",
          "id" : 3751,
          "countrycode" : "RUS",
          "name" : "Neftejugansk",
          "population" : 97400
        },
        {
          "district" : "Rostov-na-Donu",
          "id" : 3752,
          "countrycode" : "RUS",
          "name" : "Bataisk",
          "population" : 97300
        },
        {
          "district" : "Yamalin Nenetsia",
          "id" : 3753,
          "countrycode" : "RUS",
          "name" : "Nojabrsk",
          "population" : 97300
        },
        {
          "district" : "Saratov",
          "id" : 3754,
          "countrycode" : "RUS",
          "name" : "Balaï¿½ov",
          "population" : 97100
        },
        {
          "district" : "Kursk",
          "id" : 3755,
          "countrycode" : "RUS",
          "name" : "Zeleznogorsk",
          "population" : 96900
        },
        {
          "district" : "Moskova",
          "id" : 3756,
          "countrycode" : "RUS",
          "name" : "Zukovski",
          "population" : 96500
        },
        {
          "district" : "Kemerovo",
          "id" : 3757,
          "countrycode" : "RUS",
          "name" : "Anzero-Sudzensk",
          "population" : 96100
        },
        {
          "district" : "Tatarstan",
          "id" : 3758,
          "countrycode" : "RUS",
          "name" : "Bugulma",
          "population" : 94100
        },
        {
          "district" : "Krasnojarsk",
          "id" : 3759,
          "countrycode" : "RUS",
          "name" : "Zeleznogorsk",
          "population" : 94000
        },
        {
          "district" : "Sverdlovsk",
          "id" : 3760,
          "countrycode" : "RUS",
          "name" : "Novouralsk",
          "population" : 93300
        },
        {
          "district" : "Pietari",
          "id" : 3761,
          "countrycode" : "RUS",
          "name" : "Puï¿½kin",
          "population" : 92900
        },
        {
          "district" : "Komi",
          "id" : 3762,
          "countrycode" : "RUS",
          "name" : "Vorkuta",
          "population" : 92600
        },
        {
          "district" : "Dagestan",
          "id" : 3763,
          "countrycode" : "RUS",
          "name" : "Derbent",
          "population" : 92300
        },
        {
          "district" : "Kirov",
          "id" : 3764,
          "countrycode" : "RUS",
          "name" : "Kirovo-Tï¿½epetsk",
          "population" : 91600
        },
        {
          "district" : "Moskova",
          "id" : 3765,
          "countrycode" : "RUS",
          "name" : "Krasnogorsk",
          "population" : 91000
        },
        {
          "district" : "Moskova",
          "id" : 3766,
          "countrycode" : "RUS",
          "name" : "Klin",
          "population" : 90000
        },
        {
          "district" : "Perm",
          "id" : 3767,
          "countrycode" : "RUS",
          "name" : "Tï¿½aikovski",
          "population" : 90000
        },
        {
          "district" : "Yamalin Nenetsia",
          "id" : 3768,
          "countrycode" : "RUS",
          "name" : "Novyi Urengoi",
          "population" : 89800
        },
        {
          "district" : "Ho Chi Minh City",
          "id" : 3769,
          "countrycode" : "VNM",
          "name" : "Ho Chi Minh City",
          "population" : 3980000
        },
        {
          "district" : "Hanoi",
          "id" : 3770,
          "countrycode" : "VNM",
          "name" : "Hanoi",
          "population" : 1410000
        },
        {
          "district" : "Haiphong",
          "id" : 3771,
          "countrycode" : "VNM",
          "name" : "Haiphong",
          "population" : 783133
        },
        {
          "district" : "Quang Nam-Da Nang",
          "id" : 3772,
          "countrycode" : "VNM",
          "name" : "Da Nang",
          "population" : 382674
        },
        {
          "district" : "Dong Nai",
          "id" : 3773,
          "countrycode" : "VNM",
          "name" : "Biï¿½n Hoa",
          "population" : 282095
        },
        {
          "district" : "Khanh Hoa",
          "id" : 3774,
          "countrycode" : "VNM",
          "name" : "Nha Trang",
          "population" : 221331
        },
        {
          "district" : "Thua Thien-Hue",
          "id" : 3775,
          "countrycode" : "VNM",
          "name" : "Hue",
          "population" : 219149
        },
        {
          "district" : "Can Tho",
          "id" : 3776,
          "countrycode" : "VNM",
          "name" : "Can Tho",
          "population" : 215587
        },
        {
          "district" : "Quang Binh",
          "id" : 3777,
          "countrycode" : "VNM",
          "name" : "Cam Pha",
          "population" : 209086
        },
        {
          "district" : "Nam Ha",
          "id" : 3778,
          "countrycode" : "VNM",
          "name" : "Nam Dinh",
          "population" : 171699
        },
        {
          "district" : "Binh Dinh",
          "id" : 3779,
          "countrycode" : "VNM",
          "name" : "Quy Nhon",
          "population" : 163385
        },
        {
          "district" : "Ba Ria-Vung Tau",
          "id" : 3780,
          "countrycode" : "VNM",
          "name" : "Vung Tau",
          "population" : 145145
        },
        {
          "district" : "Kien Giang",
          "id" : 3781,
          "countrycode" : "VNM",
          "name" : "Rach Gia",
          "population" : 141132
        },
        {
          "district" : "An Giang",
          "id" : 3782,
          "countrycode" : "VNM",
          "name" : "Long Xuyen",
          "population" : 132681
        },
        {
          "district" : "Bac Thai",
          "id" : 3783,
          "countrycode" : "VNM",
          "name" : "Thai Nguyen",
          "population" : 127643
        },
        {
          "district" : "Quang Ninh",
          "id" : 3784,
          "countrycode" : "VNM",
          "name" : "Hong Gai",
          "population" : 127484
        },
        {
          "district" : "Binh Thuan",
          "id" : 3785,
          "countrycode" : "VNM",
          "name" : "Phan Thiï¿½t",
          "population" : 114236
        },
        {
          "district" : "Khanh Hoa",
          "id" : 3786,
          "countrycode" : "VNM",
          "name" : "Cam Ranh",
          "population" : 114041
        },
        {
          "district" : "Nghe An",
          "id" : 3787,
          "countrycode" : "VNM",
          "name" : "Vinh",
          "population" : 112455
        },
        {
          "district" : "Tien Giang",
          "id" : 3788,
          "countrycode" : "VNM",
          "name" : "My Tho",
          "population" : 108404
        },
        {
          "district" : "Lam Dong",
          "id" : 3789,
          "countrycode" : "VNM",
          "name" : "Da Lat",
          "population" : 106409
        },
        {
          "district" : "Dac Lac",
          "id" : 3790,
          "countrycode" : "VNM",
          "name" : "Buon Ma Thuot",
          "population" : 97044
        },
        {
          "district" : "Harjumaa",
          "id" : 3791,
          "countrycode" : "EST",
          "name" : "Tallinn",
          "population" : 403981
        },
        {
          "district" : "Tartumaa",
          "id" : 3792,
          "countrycode" : "EST",
          "name" : "Tartu",
          "population" : 101246
        },
        {
          "district" : "New York",
          "id" : 3793,
          "countrycode" : "USA",
          "name" : "New York",
          "population" : 8008278
        },
        {
          "district" : "California",
          "id" : 3794,
          "countrycode" : "USA",
          "name" : "Los Angeles",
          "population" : 3694820
        },
        {
          "district" : "Illinois",
          "id" : 3795,
          "countrycode" : "USA",
          "name" : "Chicago",
          "population" : 2896016
        },
        {
          "district" : "Texas",
          "id" : 3796,
          "countrycode" : "USA",
          "name" : "Houston",
          "population" : 1953631
        },
        {
          "district" : "Pennsylvania",
          "id" : 3797,
          "countrycode" : "USA",
          "name" : "Philadelphia",
          "population" : 1517550
        },
        {
          "district" : "Arizona",
          "id" : 3798,
          "countrycode" : "USA",
          "name" : "Phoenix",
          "population" : 1321045
        },
        {
          "district" : "California",
          "id" : 3799,
          "countrycode" : "USA",
          "name" : "San Diego",
          "population" : 1223400
        },
        {
          "district" : "Texas",
          "id" : 3800,
          "countrycode" : "USA",
          "name" : "Dallas",
          "population" : 1188580
        },
        {
          "district" : "Texas",
          "id" : 3801,
          "countrycode" : "USA",
          "name" : "San Antonio",
          "population" : 1144646
        },
        {
          "district" : "Michigan",
          "id" : 3802,
          "countrycode" : "USA",
          "name" : "Detroit",
          "population" : 951270
        },
        {
          "district" : "California",
          "id" : 3803,
          "countrycode" : "USA",
          "name" : "San Jose",
          "population" : 894943
        },
        {
          "district" : "Indiana",
          "id" : 3804,
          "countrycode" : "USA",
          "name" : "Indianapolis",
          "population" : 791926
        },
        {
          "district" : "California",
          "id" : 3805,
          "countrycode" : "USA",
          "name" : "San Francisco",
          "population" : 776733
        },
        {
          "district" : "Florida",
          "id" : 3806,
          "countrycode" : "USA",
          "name" : "Jacksonville",
          "population" : 735167
        },
        {
          "district" : "Ohio",
          "id" : 3807,
          "countrycode" : "USA",
          "name" : "Columbus",
          "population" : 711470
        },
        {
          "district" : "Texas",
          "id" : 3808,
          "countrycode" : "USA",
          "name" : "Austin",
          "population" : 656562
        },
        {
          "district" : "Maryland",
          "id" : 3809,
          "countrycode" : "USA",
          "name" : "Baltimore",
          "population" : 651154
        },
        {
          "district" : "Tennessee",
          "id" : 3810,
          "countrycode" : "USA",
          "name" : "Memphis",
          "population" : 650100
        },
        {
          "district" : "Wisconsin",
          "id" : 3811,
          "countrycode" : "USA",
          "name" : "Milwaukee",
          "population" : 596974
        },
        {
          "district" : "Massachusetts",
          "id" : 3812,
          "countrycode" : "USA",
          "name" : "Boston",
          "population" : 589141
        },
        {
          "district" : "District of Columbia",
          "id" : 3813,
          "countrycode" : "USA",
          "name" : "Washington",
          "population" : 572059
        },
        {
          "district" : "Tennessee",
          "id" : 3814,
          "countrycode" : "USA",
          "name" : "Nashville-Davidson",
          "population" : 569891
        },
        {
          "district" : "Texas",
          "id" : 3815,
          "countrycode" : "USA",
          "name" : "El Paso",
          "population" : 563662
        },
        {
          "district" : "Washington",
          "id" : 3816,
          "countrycode" : "USA",
          "name" : "Seattle",
          "population" : 563374
        },
        {
          "district" : "Colorado",
          "id" : 3817,
          "countrycode" : "USA",
          "name" : "Denver",
          "population" : 554636
        },
        {
          "district" : "North Carolina",
          "id" : 3818,
          "countrycode" : "USA",
          "name" : "Charlotte",
          "population" : 540828
        },
        {
          "district" : "Texas",
          "id" : 3819,
          "countrycode" : "USA",
          "name" : "Fort Worth",
          "population" : 534694
        },
        {
          "district" : "Oregon",
          "id" : 3820,
          "countrycode" : "USA",
          "name" : "Portland",
          "population" : 529121
        },
        {
          "district" : "Oklahoma",
          "id" : 3821,
          "countrycode" : "USA",
          "name" : "Oklahoma City",
          "population" : 506132
        },
        {
          "district" : "Arizona",
          "id" : 3822,
          "countrycode" : "USA",
          "name" : "Tucson",
          "population" : 486699
        },
        {
          "district" : "Louisiana",
          "id" : 3823,
          "countrycode" : "USA",
          "name" : "New Orleans",
          "population" : 484674
        },
        {
          "district" : "Nevada",
          "id" : 3824,
          "countrycode" : "USA",
          "name" : "Las Vegas",
          "population" : 478434
        },
        {
          "district" : "Ohio",
          "id" : 3825,
          "countrycode" : "USA",
          "name" : "Cleveland",
          "population" : 478403
        },
        {
          "district" : "California",
          "id" : 3826,
          "countrycode" : "USA",
          "name" : "Long Beach",
          "population" : 461522
        },
        {
          "district" : "New Mexico",
          "id" : 3827,
          "countrycode" : "USA",
          "name" : "Albuquerque",
          "population" : 448607
        },
        {
          "district" : "Missouri",
          "id" : 3828,
          "countrycode" : "USA",
          "name" : "Kansas City",
          "population" : 441545
        },
        {
          "district" : "California",
          "id" : 3829,
          "countrycode" : "USA",
          "name" : "Fresno",
          "population" : 427652
        },
        {
          "district" : "Virginia",
          "id" : 3830,
          "countrycode" : "USA",
          "name" : "Virginia Beach",
          "population" : 425257
        },
        {
          "district" : "Georgia",
          "id" : 3831,
          "countrycode" : "USA",
          "name" : "Atlanta",
          "population" : 416474
        },
        {
          "district" : "California",
          "id" : 3832,
          "countrycode" : "USA",
          "name" : "Sacramento",
          "population" : 407018
        },
        {
          "district" : "California",
          "id" : 3833,
          "countrycode" : "USA",
          "name" : "Oakland",
          "population" : 399484
        },
        {
          "district" : "Arizona",
          "id" : 3834,
          "countrycode" : "USA",
          "name" : "Mesa",
          "population" : 396375
        },
        {
          "district" : "Oklahoma",
          "id" : 3835,
          "countrycode" : "USA",
          "name" : "Tulsa",
          "population" : 393049
        },
        {
          "district" : "Nebraska",
          "id" : 3836,
          "countrycode" : "USA",
          "name" : "Omaha",
          "population" : 390007
        },
        {
          "district" : "Minnesota",
          "id" : 3837,
          "countrycode" : "USA",
          "name" : "Minneapolis",
          "population" : 382618
        },
        {
          "district" : "Hawaii",
          "id" : 3838,
          "countrycode" : "USA",
          "name" : "Honolulu",
          "population" : 371657
        },
        {
          "district" : "Florida",
          "id" : 3839,
          "countrycode" : "USA",
          "name" : "Miami",
          "population" : 362470
        },
        {
          "district" : "Colorado",
          "id" : 3840,
          "countrycode" : "USA",
          "name" : "Colorado Springs",
          "population" : 360890
        },
        {
          "district" : "Missouri",
          "id" : 3841,
          "countrycode" : "USA",
          "name" : "Saint Louis",
          "population" : 348189
        },
        {
          "district" : "Kansas",
          "id" : 3842,
          "countrycode" : "USA",
          "name" : "Wichita",
          "population" : 344284
        },
        {
          "district" : "California",
          "id" : 3843,
          "countrycode" : "USA",
          "name" : "Santa Ana",
          "population" : 337977
        },
        {
          "district" : "Pennsylvania",
          "id" : 3844,
          "countrycode" : "USA",
          "name" : "Pittsburgh",
          "population" : 334563
        },
        {
          "district" : "Texas",
          "id" : 3845,
          "countrycode" : "USA",
          "name" : "Arlington",
          "population" : 332969
        },
        {
          "district" : "Ohio",
          "id" : 3846,
          "countrycode" : "USA",
          "name" : "Cincinnati",
          "population" : 331285
        },
        {
          "district" : "California",
          "id" : 3847,
          "countrycode" : "USA",
          "name" : "Anaheim",
          "population" : 328014
        },
        {
          "district" : "Ohio",
          "id" : 3848,
          "countrycode" : "USA",
          "name" : "Toledo",
          "population" : 313619
        },
        {
          "district" : "Florida",
          "id" : 3849,
          "countrycode" : "USA",
          "name" : "Tampa",
          "population" : 303447
        },
        {
          "district" : "New York",
          "id" : 3850,
          "countrycode" : "USA",
          "name" : "Buffalo",
          "population" : 292648
        },
        {
          "district" : "Minnesota",
          "id" : 3851,
          "countrycode" : "USA",
          "name" : "Saint Paul",
          "population" : 287151
        },
        {
          "district" : "Texas",
          "id" : 3852,
          "countrycode" : "USA",
          "name" : "Corpus Christi",
          "population" : 277454
        },
        {
          "district" : "Colorado",
          "id" : 3853,
          "countrycode" : "USA",
          "name" : "Aurora",
          "population" : 276393
        },
        {
          "district" : "North Carolina",
          "id" : 3854,
          "countrycode" : "USA",
          "name" : "Raleigh",
          "population" : 276093
        },
        {
          "district" : "New Jersey",
          "id" : 3855,
          "countrycode" : "USA",
          "name" : "Newark",
          "population" : 273546
        },
        {
          "district" : "Kentucky",
          "id" : 3856,
          "countrycode" : "USA",
          "name" : "Lexington-Fayette",
          "population" : 260512
        },
        {
          "district" : "Alaska",
          "id" : 3857,
          "countrycode" : "USA",
          "name" : "Anchorage",
          "population" : 260283
        },
        {
          "district" : "Kentucky",
          "id" : 3858,
          "countrycode" : "USA",
          "name" : "Louisville",
          "population" : 256231
        },
        {
          "district" : "California",
          "id" : 3859,
          "countrycode" : "USA",
          "name" : "Riverside",
          "population" : 255166
        },
        {
          "district" : "Florida",
          "id" : 3860,
          "countrycode" : "USA",
          "name" : "Saint Petersburg",
          "population" : 248232
        },
        {
          "district" : "California",
          "id" : 3861,
          "countrycode" : "USA",
          "name" : "Bakersfield",
          "population" : 247057
        },
        {
          "district" : "California",
          "id" : 3862,
          "countrycode" : "USA",
          "name" : "Stockton",
          "population" : 243771
        },
        {
          "district" : "Alabama",
          "id" : 3863,
          "countrycode" : "USA",
          "name" : "Birmingham",
          "population" : 242820
        },
        {
          "district" : "New Jersey",
          "id" : 3864,
          "countrycode" : "USA",
          "name" : "Jersey City",
          "population" : 240055
        },
        {
          "district" : "Virginia",
          "id" : 3865,
          "countrycode" : "USA",
          "name" : "Norfolk",
          "population" : 234403
        },
        {
          "district" : "Louisiana",
          "id" : 3866,
          "countrycode" : "USA",
          "name" : "Baton Rouge",
          "population" : 227818
        },
        {
          "district" : "Florida",
          "id" : 3867,
          "countrycode" : "USA",
          "name" : "Hialeah",
          "population" : 226419
        },
        {
          "district" : "Nebraska",
          "id" : 3868,
          "countrycode" : "USA",
          "name" : "Lincoln",
          "population" : 225581
        },
        {
          "district" : "North Carolina",
          "id" : 3869,
          "countrycode" : "USA",
          "name" : "Greensboro",
          "population" : 223891
        },
        {
          "district" : "Texas",
          "id" : 3870,
          "countrycode" : "USA",
          "name" : "Plano",
          "population" : 222030
        },
        {
          "district" : "New York",
          "id" : 3871,
          "countrycode" : "USA",
          "name" : "Rochester",
          "population" : 219773
        },
        {
          "district" : "Arizona",
          "id" : 3872,
          "countrycode" : "USA",
          "name" : "Glendale",
          "population" : 218812
        },
        {
          "district" : "Ohio",
          "id" : 3873,
          "countrycode" : "USA",
          "name" : "Akron",
          "population" : 217074
        },
        {
          "district" : "Texas",
          "id" : 3874,
          "countrycode" : "USA",
          "name" : "Garland",
          "population" : 215768
        },
        {
          "district" : "Wisconsin",
          "id" : 3875,
          "countrycode" : "USA",
          "name" : "Madison",
          "population" : 208054
        },
        {
          "district" : "Indiana",
          "id" : 3876,
          "countrycode" : "USA",
          "name" : "Fort Wayne",
          "population" : 205727
        },
        {
          "district" : "California",
          "id" : 3877,
          "countrycode" : "USA",
          "name" : "Fremont",
          "population" : 203413
        },
        {
          "district" : "Arizona",
          "id" : 3878,
          "countrycode" : "USA",
          "name" : "Scottsdale",
          "population" : 202705
        },
        {
          "district" : "Alabama",
          "id" : 3879,
          "countrycode" : "USA",
          "name" : "Montgomery",
          "population" : 201568
        },
        {
          "district" : "Louisiana",
          "id" : 3880,
          "countrycode" : "USA",
          "name" : "Shreveport",
          "population" : 200145
        },
        {
          "district" : "Georgia",
          "id" : 3881,
          "countrycode" : "USA",
          "name" : "Augusta-Richmond County",
          "population" : 199775
        },
        {
          "district" : "Texas",
          "id" : 3882,
          "countrycode" : "USA",
          "name" : "Lubbock",
          "population" : 199564
        },
        {
          "district" : "Virginia",
          "id" : 3883,
          "countrycode" : "USA",
          "name" : "Chesapeake",
          "population" : 199184
        },
        {
          "district" : "Alabama",
          "id" : 3884,
          "countrycode" : "USA",
          "name" : "Mobile",
          "population" : 198915
        },
        {
          "district" : "Iowa",
          "id" : 3885,
          "countrycode" : "USA",
          "name" : "Des Moines",
          "population" : 198682
        },
        {
          "district" : "Michigan",
          "id" : 3886,
          "countrycode" : "USA",
          "name" : "Grand Rapids",
          "population" : 197800
        },
        {
          "district" : "Virginia",
          "id" : 3887,
          "countrycode" : "USA",
          "name" : "Richmond",
          "population" : 197790
        },
        {
          "district" : "New York",
          "id" : 3888,
          "countrycode" : "USA",
          "name" : "Yonkers",
          "population" : 196086
        },
        {
          "district" : "Washington",
          "id" : 3889,
          "countrycode" : "USA",
          "name" : "Spokane",
          "population" : 195629
        },
        {
          "district" : "California",
          "id" : 3890,
          "countrycode" : "USA",
          "name" : "Glendale",
          "population" : 194973
        },
        {
          "district" : "Washington",
          "id" : 3891,
          "countrycode" : "USA",
          "name" : "Tacoma",
          "population" : 193556
        },
        {
          "district" : "Texas",
          "id" : 3892,
          "countrycode" : "USA",
          "name" : "Irving",
          "population" : 191615
        },
        {
          "district" : "California",
          "id" : 3893,
          "countrycode" : "USA",
          "name" : "Huntington Beach",
          "population" : 189594
        },
        {
          "district" : "California",
          "id" : 3894,
          "countrycode" : "USA",
          "name" : "Modesto",
          "population" : 188856
        },
        {
          "district" : "North Carolina",
          "id" : 3895,
          "countrycode" : "USA",
          "name" : "Durham",
          "population" : 187035
        },
        {
          "district" : "Georgia",
          "id" : 3896,
          "countrycode" : "USA",
          "name" : "Columbus",
          "population" : 186291
        },
        {
          "district" : "Florida",
          "id" : 3897,
          "countrycode" : "USA",
          "name" : "Orlando",
          "population" : 185951
        },
        {
          "district" : "Idaho",
          "id" : 3898,
          "countrycode" : "USA",
          "name" : "Boise City",
          "population" : 185787
        },
        {
          "district" : "North Carolina",
          "id" : 3899,
          "countrycode" : "USA",
          "name" : "Winston-Salem",
          "population" : 185776
        },
        {
          "district" : "California",
          "id" : 3900,
          "countrycode" : "USA",
          "name" : "San Bernardino",
          "population" : 185401
        },
        {
          "district" : "Mississippi",
          "id" : 3901,
          "countrycode" : "USA",
          "name" : "Jackson",
          "population" : 184256
        },
        {
          "district" : "Arkansas",
          "id" : 3902,
          "countrycode" : "USA",
          "name" : "Little Rock",
          "population" : 183133
        },
        {
          "district" : "Utah",
          "id" : 3903,
          "countrycode" : "USA",
          "name" : "Salt Lake City",
          "population" : 181743
        },
        {
          "district" : "Nevada",
          "id" : 3904,
          "countrycode" : "USA",
          "name" : "Reno",
          "population" : 180480
        },
        {
          "district" : "Virginia",
          "id" : 3905,
          "countrycode" : "USA",
          "name" : "Newport News",
          "population" : 180150
        },
        {
          "district" : "Arizona",
          "id" : 3906,
          "countrycode" : "USA",
          "name" : "Chandler",
          "population" : 176581
        },
        {
          "district" : "Texas",
          "id" : 3907,
          "countrycode" : "USA",
          "name" : "Laredo",
          "population" : 176576
        },
        {
          "district" : "Nevada",
          "id" : 3908,
          "countrycode" : "USA",
          "name" : "Henderson",
          "population" : 175381
        },
        {
          "district" : "Virginia",
          "id" : 3909,
          "countrycode" : "USA",
          "name" : "Arlington",
          "population" : 174838
        },
        {
          "district" : "Tennessee",
          "id" : 3910,
          "countrycode" : "USA",
          "name" : "Knoxville",
          "population" : 173890
        },
        {
          "district" : "Texas",
          "id" : 3911,
          "countrycode" : "USA",
          "name" : "Amarillo",
          "population" : 173627
        },
        {
          "district" : "Rhode Island",
          "id" : 3912,
          "countrycode" : "USA",
          "name" : "Providence",
          "population" : 173618
        },
        {
          "district" : "California",
          "id" : 3913,
          "countrycode" : "USA",
          "name" : "Chula Vista",
          "population" : 173556
        },
        {
          "district" : "Massachusetts",
          "id" : 3914,
          "countrycode" : "USA",
          "name" : "Worcester",
          "population" : 172648
        },
        {
          "district" : "California",
          "id" : 3915,
          "countrycode" : "USA",
          "name" : "Oxnard",
          "population" : 170358
        },
        {
          "district" : "Ohio",
          "id" : 3916,
          "countrycode" : "USA",
          "name" : "Dayton",
          "population" : 166179
        },
        {
          "district" : "California",
          "id" : 3917,
          "countrycode" : "USA",
          "name" : "Garden Grove",
          "population" : 165196
        },
        {
          "district" : "California",
          "id" : 3918,
          "countrycode" : "USA",
          "name" : "Oceanside",
          "population" : 161029
        },
        {
          "district" : "Arizona",
          "id" : 3919,
          "countrycode" : "USA",
          "name" : "Tempe",
          "population" : 158625
        },
        {
          "district" : "Alabama",
          "id" : 3920,
          "countrycode" : "USA",
          "name" : "Huntsville",
          "population" : 158216
        },
        {
          "district" : "California",
          "id" : 3921,
          "countrycode" : "USA",
          "name" : "Ontario",
          "population" : 158007
        },
        {
          "district" : "Tennessee",
          "id" : 3922,
          "countrycode" : "USA",
          "name" : "Chattanooga",
          "population" : 155554
        },
        {
          "district" : "Florida",
          "id" : 3923,
          "countrycode" : "USA",
          "name" : "Fort Lauderdale",
          "population" : 152397
        },
        {
          "district" : "Massachusetts",
          "id" : 3924,
          "countrycode" : "USA",
          "name" : "Springfield",
          "population" : 152082
        },
        {
          "district" : "Missouri",
          "id" : 3925,
          "countrycode" : "USA",
          "name" : "Springfield",
          "population" : 151580
        },
        {
          "district" : "California",
          "id" : 3926,
          "countrycode" : "USA",
          "name" : "Santa Clarita",
          "population" : 151088
        },
        {
          "district" : "California",
          "id" : 3927,
          "countrycode" : "USA",
          "name" : "Salinas",
          "population" : 151060
        },
        {
          "district" : "Florida",
          "id" : 3928,
          "countrycode" : "USA",
          "name" : "Tallahassee",
          "population" : 150624
        },
        {
          "district" : "Illinois",
          "id" : 3929,
          "countrycode" : "USA",
          "name" : "Rockford",
          "population" : 150115
        },
        {
          "district" : "California",
          "id" : 3930,
          "countrycode" : "USA",
          "name" : "Pomona",
          "population" : 149473
        },
        {
          "district" : "Louisiana",
          "id" : 3931,
          "countrycode" : "USA",
          "name" : "Metairie",
          "population" : 149428
        },
        {
          "district" : "New Jersey",
          "id" : 3932,
          "countrycode" : "USA",
          "name" : "Paterson",
          "population" : 149222
        },
        {
          "district" : "Kansas",
          "id" : 3933,
          "countrycode" : "USA",
          "name" : "Overland Park",
          "population" : 149080
        },
        {
          "district" : "California",
          "id" : 3934,
          "countrycode" : "USA",
          "name" : "Santa Rosa",
          "population" : 147595
        },
        {
          "district" : "New York",
          "id" : 3935,
          "countrycode" : "USA",
          "name" : "Syracuse",
          "population" : 147306
        },
        {
          "district" : "Kansas",
          "id" : 3936,
          "countrycode" : "USA",
          "name" : "Kansas City",
          "population" : 146866
        },
        {
          "district" : "Virginia",
          "id" : 3937,
          "countrycode" : "USA",
          "name" : "Hampton",
          "population" : 146437
        },
        {
          "district" : "Colorado",
          "id" : 3938,
          "countrycode" : "USA",
          "name" : "Lakewood",
          "population" : 144126
        },
        {
          "district" : "Washington",
          "id" : 3939,
          "countrycode" : "USA",
          "name" : "Vancouver",
          "population" : 143560
        },
        {
          "district" : "California",
          "id" : 3940,
          "countrycode" : "USA",
          "name" : "Irvine",
          "population" : 143072
        },
        {
          "district" : "Illinois",
          "id" : 3941,
          "countrycode" : "USA",
          "name" : "Aurora",
          "population" : 142990
        },
        {
          "district" : "California",
          "id" : 3942,
          "countrycode" : "USA",
          "name" : "Moreno Valley",
          "population" : 142381
        },
        {
          "district" : "California",
          "id" : 3943,
          "countrycode" : "USA",
          "name" : "Pasadena",
          "population" : 141674
        },
        {
          "district" : "California",
          "id" : 3944,
          "countrycode" : "USA",
          "name" : "Hayward",
          "population" : 140030
        },
        {
          "district" : "Texas",
          "id" : 3945,
          "countrycode" : "USA",
          "name" : "Brownsville",
          "population" : 139722
        },
        {
          "district" : "Connecticut",
          "id" : 3946,
          "countrycode" : "USA",
          "name" : "Bridgeport",
          "population" : 139529
        },
        {
          "district" : "Florida",
          "id" : 3947,
          "countrycode" : "USA",
          "name" : "Hollywood",
          "population" : 139357
        },
        {
          "district" : "Michigan",
          "id" : 3948,
          "countrycode" : "USA",
          "name" : "Warren",
          "population" : 138247
        },
        {
          "district" : "California",
          "id" : 3949,
          "countrycode" : "USA",
          "name" : "Torrance",
          "population" : 137946
        },
        {
          "district" : "Oregon",
          "id" : 3950,
          "countrycode" : "USA",
          "name" : "Eugene",
          "population" : 137893
        },
        {
          "district" : "Florida",
          "id" : 3951,
          "countrycode" : "USA",
          "name" : "Pembroke Pines",
          "population" : 137427
        },
        {
          "district" : "Oregon",
          "id" : 3952,
          "countrycode" : "USA",
          "name" : "Salem",
          "population" : 136924
        },
        {
          "district" : "Texas",
          "id" : 3953,
          "countrycode" : "USA",
          "name" : "Pasadena",
          "population" : 133936
        },
        {
          "district" : "California",
          "id" : 3954,
          "countrycode" : "USA",
          "name" : "Escondido",
          "population" : 133559
        },
        {
          "district" : "California",
          "id" : 3955,
          "countrycode" : "USA",
          "name" : "Sunnyvale",
          "population" : 131760
        },
        {
          "district" : "Georgia",
          "id" : 3956,
          "countrycode" : "USA",
          "name" : "Savannah",
          "population" : 131510
        },
        {
          "district" : "California",
          "id" : 3957,
          "countrycode" : "USA",
          "name" : "Fontana",
          "population" : 128929
        },
        {
          "district" : "California",
          "id" : 3958,
          "countrycode" : "USA",
          "name" : "Orange",
          "population" : 128821
        },
        {
          "district" : "Illinois",
          "id" : 3959,
          "countrycode" : "USA",
          "name" : "Naperville",
          "population" : 128358
        },
        {
          "district" : "Virginia",
          "id" : 3960,
          "countrycode" : "USA",
          "name" : "Alexandria",
          "population" : 128283
        },
        {
          "district" : "California",
          "id" : 3961,
          "countrycode" : "USA",
          "name" : "Rancho Cucamonga",
          "population" : 127743
        },
        {
          "district" : "Texas",
          "id" : 3962,
          "countrycode" : "USA",
          "name" : "Grand Prairie",
          "population" : 127427
        },
        {
          "district" : "California",
          "id" : 3963,
          "countrycode" : "USA",
          "name" : "East Los Angeles",
          "population" : 126379
        },
        {
          "district" : "California",
          "id" : 3964,
          "countrycode" : "USA",
          "name" : "Fullerton",
          "population" : 126003
        },
        {
          "district" : "California",
          "id" : 3965,
          "countrycode" : "USA",
          "name" : "Corona",
          "population" : 124966
        },
        {
          "district" : "Michigan",
          "id" : 3966,
          "countrycode" : "USA",
          "name" : "Flint",
          "population" : 124943
        },
        {
          "district" : "Nevada",
          "id" : 3967,
          "countrycode" : "USA",
          "name" : "Paradise",
          "population" : 124682
        },
        {
          "district" : "Texas",
          "id" : 3968,
          "countrycode" : "USA",
          "name" : "Mesquite",
          "population" : 124523
        },
        {
          "district" : "Michigan",
          "id" : 3969,
          "countrycode" : "USA",
          "name" : "Sterling Heights",
          "population" : 124471
        },
        {
          "district" : "South Dakota",
          "id" : 3970,
          "countrycode" : "USA",
          "name" : "Sioux Falls",
          "population" : 123975
        },
        {
          "district" : "Connecticut",
          "id" : 3971,
          "countrycode" : "USA",
          "name" : "New Haven",
          "population" : 123626
        },
        {
          "district" : "Kansas",
          "id" : 3972,
          "countrycode" : "USA",
          "name" : "Topeka",
          "population" : 122377
        },
        {
          "district" : "California",
          "id" : 3973,
          "countrycode" : "USA",
          "name" : "Concord",
          "population" : 121780
        },
        {
          "district" : "Indiana",
          "id" : 3974,
          "countrycode" : "USA",
          "name" : "Evansville",
          "population" : 121582
        },
        {
          "district" : "Connecticut",
          "id" : 3975,
          "countrycode" : "USA",
          "name" : "Hartford",
          "population" : 121578
        },
        {
          "district" : "North Carolina",
          "id" : 3976,
          "countrycode" : "USA",
          "name" : "Fayetteville",
          "population" : 121015
        },
        {
          "district" : "Iowa",
          "id" : 3977,
          "countrycode" : "USA",
          "name" : "Cedar Rapids",
          "population" : 120758
        },
        {
          "district" : "New Jersey",
          "id" : 3978,
          "countrycode" : "USA",
          "name" : "Elizabeth",
          "population" : 120568
        },
        {
          "district" : "Michigan",
          "id" : 3979,
          "countrycode" : "USA",
          "name" : "Lansing",
          "population" : 119128
        },
        {
          "district" : "California",
          "id" : 3980,
          "countrycode" : "USA",
          "name" : "Lancaster",
          "population" : 118718
        },
        {
          "district" : "Colorado",
          "id" : 3981,
          "countrycode" : "USA",
          "name" : "Fort Collins",
          "population" : 118652
        },
        {
          "district" : "Florida",
          "id" : 3982,
          "countrycode" : "USA",
          "name" : "Coral Springs",
          "population" : 117549
        },
        {
          "district" : "Connecticut",
          "id" : 3983,
          "countrycode" : "USA",
          "name" : "Stamford",
          "population" : 117083
        },
        {
          "district" : "California",
          "id" : 3984,
          "countrycode" : "USA",
          "name" : "Thousand Oaks",
          "population" : 117005
        },
        {
          "district" : "California",
          "id" : 3985,
          "countrycode" : "USA",
          "name" : "Vallejo",
          "population" : 116760
        },
        {
          "district" : "California",
          "id" : 3986,
          "countrycode" : "USA",
          "name" : "Palmdale",
          "population" : 116670
        },
        {
          "district" : "South Carolina",
          "id" : 3987,
          "countrycode" : "USA",
          "name" : "Columbia",
          "population" : 116278
        },
        {
          "district" : "California",
          "id" : 3988,
          "countrycode" : "USA",
          "name" : "El Monte",
          "population" : 115965
        },
        {
          "district" : "Texas",
          "id" : 3989,
          "countrycode" : "USA",
          "name" : "Abilene",
          "population" : 115930
        },
        {
          "district" : "Nevada",
          "id" : 3990,
          "countrycode" : "USA",
          "name" : "North Las Vegas",
          "population" : 115488
        },
        {
          "district" : "Michigan",
          "id" : 3991,
          "countrycode" : "USA",
          "name" : "Ann Arbor",
          "population" : 114024
        },
        {
          "district" : "Texas",
          "id" : 3992,
          "countrycode" : "USA",
          "name" : "Beaumont",
          "population" : 113866
        },
        {
          "district" : "Texas",
          "id" : 3993,
          "countrycode" : "USA",
          "name" : "Waco",
          "population" : 113726
        },
        {
          "district" : "Georgia",
          "id" : 3994,
          "countrycode" : "USA",
          "name" : "Macon",
          "population" : 113336
        },
        {
          "district" : "Missouri",
          "id" : 3995,
          "countrycode" : "USA",
          "name" : "Independence",
          "population" : 113288
        },
        {
          "district" : "Illinois",
          "id" : 3996,
          "countrycode" : "USA",
          "name" : "Peoria",
          "population" : 112936
        },
        {
          "district" : "California",
          "id" : 3997,
          "countrycode" : "USA",
          "name" : "Inglewood",
          "population" : 112580
        },
        {
          "district" : "Illinois",
          "id" : 3998,
          "countrycode" : "USA",
          "name" : "Springfield",
          "population" : 111454
        },
        {
          "district" : "California",
          "id" : 3999,
          "countrycode" : "USA",
          "name" : "Simi Valley",
          "population" : 111351
        },
        {
          "district" : "Louisiana",
          "id" : 4000,
          "countrycode" : "USA",
          "name" : "Lafayette",
          "population" : 110257
        },
          {
            "district" : "Arizona",
            "id" : 4001,
            "countrycode" : "USA",
            "name" : "Gilbert",
            "population" : 109697
          },
          {
            "district" : "Texas",
            "id" : 4002,
            "countrycode" : "USA",
            "name" : "Carrollton",
            "population" : 109576
          },
          {
            "district" : "Washington",
            "id" : 4003,
            "countrycode" : "USA",
            "name" : "Bellevue",
            "population" : 109569
          },
          {
            "district" : "Utah",
            "id" : 4004,
            "countrycode" : "USA",
            "name" : "West Valley City",
            "population" : 108896
          },
          {
            "district" : "Tennessee",
            "id" : 4005,
            "countrycode" : "USA",
            "name" : "Clarksville",
            "population" : 108787
          },
          {
            "district" : "California",
            "id" : 4006,
            "countrycode" : "USA",
            "name" : "Costa Mesa",
            "population" : 108724
          },
          {
            "district" : "Arizona",
            "id" : 4007,
            "countrycode" : "USA",
            "name" : "Peoria",
            "population" : 108364
          },
          {
            "district" : "Indiana",
            "id" : 4008,
            "countrycode" : "USA",
            "name" : "South Bend",
            "population" : 107789
          },
          {
            "district" : "California",
            "id" : 4009,
            "countrycode" : "USA",
            "name" : "Downey",
            "population" : 107323
          },
          {
            "district" : "Connecticut",
            "id" : 4010,
            "countrycode" : "USA",
            "name" : "Waterbury",
            "population" : 107271
          },
          {
            "district" : "New Hampshire",
            "id" : 4011,
            "countrycode" : "USA",
            "name" : "Manchester",
            "population" : 107006
          },
          {
            "district" : "Pennsylvania",
            "id" : 4012,
            "countrycode" : "USA",
            "name" : "Allentown",
            "population" : 106632
          },
          {
            "district" : "Texas",
            "id" : 4013,
            "countrycode" : "USA",
            "name" : "McAllen",
            "population" : 106414
          },
          {
            "district" : "Illinois",
            "id" : 4014,
            "countrycode" : "USA",
            "name" : "Joliet",
            "population" : 106221
          },
          {
            "district" : "Massachusetts",
            "id" : 4015,
            "countrycode" : "USA",
            "name" : "Lowell",
            "population" : 105167
          },
          {
            "district" : "Utah",
            "id" : 4016,
            "countrycode" : "USA",
            "name" : "Provo",
            "population" : 105166
          },
          {
            "district" : "California",
            "id" : 4017,
            "countrycode" : "USA",
            "name" : "West Covina",
            "population" : 105080
          },
          {
            "district" : "Texas",
            "id" : 4018,
            "countrycode" : "USA",
            "name" : "Wichita Falls",
            "population" : 104197
          },
          {
            "district" : "Pennsylvania",
            "id" : 4019,
            "countrycode" : "USA",
            "name" : "Erie",
            "population" : 103717
          },
          {
            "district" : "California",
            "id" : 4020,
            "countrycode" : "USA",
            "name" : "Daly City",
            "population" : 103621
          },
          {
            "district" : "California",
            "id" : 4021,
            "countrycode" : "USA",
            "name" : "Citrus Heights",
            "population" : 103455
          },
          {
            "district" : "California",
            "id" : 4022,
            "countrycode" : "USA",
            "name" : "Norwalk",
            "population" : 103298
          },
          {
            "district" : "Indiana",
            "id" : 4023,
            "countrycode" : "USA",
            "name" : "Gary",
            "population" : 102746
          },
          {
            "district" : "California",
            "id" : 4024,
            "countrycode" : "USA",
            "name" : "Berkeley",
            "population" : 102743
          },
          {
            "district" : "California",
            "id" : 4025,
            "countrycode" : "USA",
            "name" : "Santa Clara",
            "population" : 102361
          },
          {
            "district" : "Wisconsin",
            "id" : 4026,
            "countrycode" : "USA",
            "name" : "Green Bay",
            "population" : 102313
          },
          {
            "district" : "Florida",
            "id" : 4027,
            "countrycode" : "USA",
            "name" : "Cape Coral",
            "population" : 102286
          },
          {
            "district" : "Colorado",
            "id" : 4028,
            "countrycode" : "USA",
            "name" : "Arvada",
            "population" : 102153
          },
          {
            "district" : "Colorado",
            "id" : 4029,
            "countrycode" : "USA",
            "name" : "Pueblo",
            "population" : 102121
          },
          {
            "district" : "Utah",
            "id" : 4030,
            "countrycode" : "USA",
            "name" : "Sandy",
            "population" : 101853
          },
          {
            "district" : "Georgia",
            "id" : 4031,
            "countrycode" : "USA",
            "name" : "Athens-Clarke County",
            "population" : 101489
          },
          {
            "district" : "Massachusetts",
            "id" : 4032,
            "countrycode" : "USA",
            "name" : "Cambridge",
            "population" : 101355
          },
          {
            "district" : "Colorado",
            "id" : 4033,
            "countrycode" : "USA",
            "name" : "Westminster",
            "population" : 100940
          },
          {
            "district" : "California",
            "id" : 4034,
            "countrycode" : "USA",
            "name" : "San Buenaventura",
            "population" : 100916
          },
          {
            "district" : "Virginia",
            "id" : 4035,
            "countrycode" : "USA",
            "name" : "Portsmouth",
            "population" : 100565
          },
          {
            "district" : "Michigan",
            "id" : 4036,
            "countrycode" : "USA",
            "name" : "Livonia",
            "population" : 100545
          },
          {
            "district" : "California",
            "id" : 4037,
            "countrycode" : "USA",
            "name" : "Burbank",
            "population" : 100316
          },
          {
            "district" : "Florida",
            "id" : 4038,
            "countrycode" : "USA",
            "name" : "Clearwater",
            "population" : 99936
          },
          {
            "district" : "Texas",
            "id" : 4039,
            "countrycode" : "USA",
            "name" : "Midland",
            "population" : 98293
          },
          {
            "district" : "Iowa",
            "id" : 4040,
            "countrycode" : "USA",
            "name" : "Davenport",
            "population" : 98256
          },
          {
            "district" : "California",
            "id" : 4041,
            "countrycode" : "USA",
            "name" : "Mission Viejo",
            "population" : 98049
          },
          {
            "district" : "Florida",
            "id" : 4042,
            "countrycode" : "USA",
            "name" : "Miami Beach",
            "population" : 97855
          },
          {
            "district" : "Nevada",
            "id" : 4043,
            "countrycode" : "USA",
            "name" : "Sunrise Manor",
            "population" : 95362
          },
          {
            "district" : "Massachusetts",
            "id" : 4044,
            "countrycode" : "USA",
            "name" : "New Bedford",
            "population" : 94780
          },
          {
            "district" : "California",
            "id" : 4045,
            "countrycode" : "USA",
            "name" : "El Cajon",
            "population" : 94578
          },
          {
            "district" : "Oklahoma",
            "id" : 4046,
            "countrycode" : "USA",
            "name" : "Norman",
            "population" : 94193
          },
          {
            "district" : "California",
            "id" : 4047,
            "countrycode" : "USA",
            "name" : "Richmond",
            "population" : 94100
          },
          {
            "district" : "New York",
            "id" : 4048,
            "countrycode" : "USA",
            "name" : "Albany",
            "population" : 93994
          },
          {
            "district" : "Massachusetts",
            "id" : 4049,
            "countrycode" : "USA",
            "name" : "Brockton",
            "population" : 93653
          },
          {
            "district" : "Virginia",
            "id" : 4050,
            "countrycode" : "USA",
            "name" : "Roanoke",
            "population" : 93357
          },
          {
            "district" : "Montana",
            "id" : 4051,
            "countrycode" : "USA",
            "name" : "Billings",
            "population" : 92988
          },
          {
            "district" : "California",
            "id" : 4052,
            "countrycode" : "USA",
            "name" : "Compton",
            "population" : 92864
          },
          {
            "district" : "Florida",
            "id" : 4053,
            "countrycode" : "USA",
            "name" : "Gainesville",
            "population" : 92291
          },
          {
            "district" : "California",
            "id" : 4054,
            "countrycode" : "USA",
            "name" : "Fairfield",
            "population" : 92256
          },
          {
            "district" : "California",
            "id" : 4055,
            "countrycode" : "USA",
            "name" : "Arden-Arcade",
            "population" : 92040
          },
          {
            "district" : "California",
            "id" : 4056,
            "countrycode" : "USA",
            "name" : "San Mateo",
            "population" : 91799
          },
          {
            "district" : "California",
            "id" : 4057,
            "countrycode" : "USA",
            "name" : "Visalia",
            "population" : 91762
          },
          {
            "district" : "Colorado",
            "id" : 4058,
            "countrycode" : "USA",
            "name" : "Boulder",
            "population" : 91238
          },
          {
            "district" : "North Carolina",
            "id" : 4059,
            "countrycode" : "USA",
            "name" : "Cary",
            "population" : 91213
          },
          {
            "district" : "California",
            "id" : 4060,
            "countrycode" : "USA",
            "name" : "Santa Monica",
            "population" : 91084
          },
          {
            "district" : "Massachusetts",
            "id" : 4061,
            "countrycode" : "USA",
            "name" : "Fall River",
            "population" : 90555
          },
          {
            "district" : "Wisconsin",
            "id" : 4062,
            "countrycode" : "USA",
            "name" : "Kenosha",
            "population" : 89447
          },
          {
            "district" : "Illinois",
            "id" : 4063,
            "countrycode" : "USA",
            "name" : "Elgin",
            "population" : 89408
          },
          {
            "district" : "Texas",
            "id" : 4064,
            "countrycode" : "USA",
            "name" : "Odessa",
            "population" : 89293
          },
          {
            "district" : "California",
            "id" : 4065,
            "countrycode" : "USA",
            "name" : "Carson",
            "population" : 89089
          },
          {
            "district" : "South Carolina",
            "id" : 4066,
            "countrycode" : "USA",
            "name" : "Charleston",
            "population" : 89063
          },
          {
            "district" : "St Thomas",
            "id" : 4067,
            "countrycode" : "VIR",
            "name" : "Charlotte Amalie",
            "population" : 13000
          },
          {
            "district" : "Harare",
            "id" : 4068,
            "countrycode" : "ZWE",
            "name" : "Harare",
            "population" : 1410000
          },
          {
            "district" : "Bulawayo",
            "id" : 4069,
            "countrycode" : "ZWE",
            "name" : "Bulawayo",
            "population" : 621742
          },
          {
            "district" : "Harare",
            "id" : 4070,
            "countrycode" : "ZWE",
            "name" : "Chitungwiza",
            "population" : 274912
          },
          {
            "district" : "Harare",
            "id" : 4071,
            "countrycode" : "ZWE",
            "name" : "Mount Darwin",
            "population" : 164362
          },
          {
            "district" : "Manicaland",
            "id" : 4072,
            "countrycode" : "ZWE",
            "name" : "Mutare",
            "population" : 131367
          },
          {
            "district" : "Midlands",
            "id" : 4073,
            "countrycode" : "ZWE",
            "name" : "Gweru",
            "population" : 128037
          },
          {
            "district" : "Gaza",
            "id" : 4074,
            "countrycode" : "PSE",
            "name" : "Gaza",
            "population" : 353632
          },
          {
            "district" : "Khan Yunis",
            "id" : 4075,
            "countrycode" : "PSE",
            "name" : "Khan Yunis",
            "population" : 123175
          },
          {
            "district" : "Hebron",
            "id" : 4076,
            "countrycode" : "PSE",
            "name" : "Hebron",
            "population" : 119401
          },
          {
            "district" : "North Gaza",
            "id" : 4077,
            "countrycode" : "PSE",
            "name" : "Jabaliya",
            "population" : 113901
          },
          {
            "district" : "Nablus",
            "id" : 4078,
            "countrycode" : "PSE",
            "name" : "Nablus",
            "population" : 100231
          },
          {
            "district" : "Rafah",
            "id" : 4079,
            "countrycode" : "PSE",
            "name" : "Rafah",
            "population" : 92020
          }
        ]


    return  Promise.all(cities.map( city => { 
         return models.City.update(
        {countrycode: city.countrycode },
          { where: {id: city.id}}
         )
    }))
      
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cities", null, {});
  }
};
