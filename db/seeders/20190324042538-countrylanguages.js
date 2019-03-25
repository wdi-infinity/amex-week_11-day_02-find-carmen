"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const languages = [
      {
        language: "Dutch",
        countrycode: "ABW",
        percentage: 5.3000001907348633,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "ABW",
        percentage: 9.5,
        isofficial: false
      },
      {
        language: "Papiamento",
        countrycode: "ABW",
        percentage: 76.699996948242188,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "ABW",
        percentage: 7.4000000953674316,
        isofficial: false
      },
      {
        language: "Balochi",
        countrycode: "AFG",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Dari",
        countrycode: "AFG",
        percentage: 32.099998474121094,
        isofficial: true
      },
      {
        language: "Pashto",
        countrycode: "AFG",
        percentage: 52.400001525878906,
        isofficial: true
      },
      {
        language: "Turkmenian",
        countrycode: "AFG",
        percentage: 1.8999999761581421,
        isofficial: false
      },
      {
        language: "Uzbek",
        countrycode: "AFG",
        percentage: 8.8000001907348633,
        isofficial: false
      },
      {
        language: "Ambo",
        countrycode: "AGO",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Chokwe",
        countrycode: "AGO",
        percentage: 4.1999998092651367,
        isofficial: false
      },
      {
        language: "Kongo",
        countrycode: "AGO",
        percentage: 13.199999809265137,
        isofficial: false
      },
      {
        language: "Luchazi",
        countrycode: "AGO",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Luimbe-nganguela",
        countrycode: "AGO",
        percentage: 5.4000000953674316,
        isofficial: false
      },
      {
        language: "Luvale",
        countrycode: "AGO",
        percentage: 3.5999999046325684,
        isofficial: false
      },
      {
        language: "Mbundu",
        countrycode: "AGO",
        percentage: 21.600000381469727,
        isofficial: false
      },
      {
        language: "Nyaneka-nkhumbi",
        countrycode: "AGO",
        percentage: 5.4000000953674316,
        isofficial: false
      },
      {
        language: "Ovimbundu",
        countrycode: "AGO",
        percentage: 37.200000762939453,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "AIA",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Albaniana",
        countrycode: "ALB",
        percentage: 97.900001525878906,
        isofficial: true
      },
      {
        language: "Greek",
        countrycode: "ALB",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Macedonian",
        countrycode: "ALB",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Catalan",
        countrycode: "AND",
        percentage: 32.299999237060547,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "AND",
        percentage: 6.1999998092651367,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "AND",
        percentage: 10.800000190734863,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "AND",
        percentage: 44.599998474121094,
        isofficial: false
      },
      {
        language: "Dutch",
        countrycode: "ANT",
        percentage: 0,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "ANT",
        percentage: 7.8000001907348633,
        isofficial: false
      },
      {
        language: "Papiamento",
        countrycode: "ANT",
        percentage: 86.199996948242188,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "ARE",
        percentage: 42,
        isofficial: true
      },
      {
        language: "Hindi",
        countrycode: "ARE",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Indian Languages",
        countrycode: "ARG",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "ARG",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "ARG",
        percentage: 96.800003051757812,
        isofficial: true
      },
      {
        language: "Armenian",
        countrycode: "ARM",
        percentage: 93.400001525878906,
        isofficial: true
      },
      {
        language: "Azerbaijani",
        countrycode: "ARM",
        percentage: 2.5999999046325684,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "ASM",
        percentage: 3.0999999046325684,
        isofficial: true
      },
      {
        language: "Samoan",
        countrycode: "ASM",
        percentage: 90.599998474121094,
        isofficial: true
      },
      {
        language: "Tongan",
        countrycode: "ASM",
        percentage: 3.0999999046325684,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "ATG",
        percentage: 95.699996948242188,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "ATG",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "AUS",
        percentage: 1,
        isofficial: false
      },
      {
        language: "Canton Chinese",
        countrycode: "AUS",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "AUS",
        percentage: 81.199996948242188,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "AUS",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Greek",
        countrycode: "AUS",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "AUS",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "AUS",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Vietnamese",
        countrycode: "AUS",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Czech",
        countrycode: "AUT",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "AUT",
        percentage: 92,
        isofficial: true
      },
      {
        language: "Hungarian",
        countrycode: "AUT",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "AUT",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Romanian",
        countrycode: "AUT",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "AUT",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Slovene",
        countrycode: "AUT",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "AUT",
        percentage: 1.5,
        isofficial: false
      },
      {
        language: "Armenian",
        countrycode: "AZE",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Azerbaijani",
        countrycode: "AZE",
        percentage: 89,
        isofficial: true
      },
      {
        language: "Lezgian",
        countrycode: "AZE",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "AZE",
        percentage: 3,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "BDI",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Kirundi",
        countrycode: "BDI",
        percentage: 98.099998474121094,
        isofficial: true
      },
      {
        language: "Swahili",
        countrycode: "BDI",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "BEL",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Dutch",
        countrycode: "BEL",
        percentage: 59.200000762939453,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "BEL",
        percentage: 32.599998474121094,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "BEL",
        percentage: 1,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "BEL",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "BEL",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Adja",
        countrycode: "BEN",
        percentage: 11.100000381469727,
        isofficial: false
      },
      {
        language: "Aizo",
        countrycode: "BEN",
        percentage: 8.6999998092651367,
        isofficial: false
      },
      {
        language: "Bariba",
        countrycode: "BEN",
        percentage: 8.6999998092651367,
        isofficial: false
      },
      {
        language: "Fon",
        countrycode: "BEN",
        percentage: 39.799999237060547,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "BEN",
        percentage: 5.5999999046325684,
        isofficial: false
      },
      {
        language: "Joruba",
        countrycode: "BEN",
        percentage: 12.199999809265137,
        isofficial: false
      },
      {
        language: "Somba",
        countrycode: "BEN",
        percentage: 6.6999998092651367,
        isofficial: false
      },
      {
        language: "Busansi",
        countrycode: "BFA",
        percentage: 3.5,
        isofficial: false
      },
      {
        language: "Dagara",
        countrycode: "BFA",
        percentage: 3.0999999046325684,
        isofficial: false
      },
      {
        language: "Dyula",
        countrycode: "BFA",
        percentage: 2.5999999046325684,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "BFA",
        percentage: 9.6999998092651367,
        isofficial: false
      },
      {
        language: "Gurma",
        countrycode: "BFA",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Mossi",
        countrycode: "BFA",
        percentage: 50.200000762939453,
        isofficial: false
      },
      {
        language: "Bengali",
        countrycode: "BGD",
        percentage: 97.699996948242188,
        isofficial: true
      },
      {
        language: "Chakma",
        countrycode: "BGD",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Garo",
        countrycode: "BGD",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Khasi",
        countrycode: "BGD",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Marma",
        countrycode: "BGD",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Santhali",
        countrycode: "BGD",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Tripuri",
        countrycode: "BGD",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Bulgariana",
        countrycode: "BGR",
        percentage: 83.199996948242188,
        isofficial: true
      },
      {
        language: "Macedonian",
        countrycode: "BGR",
        percentage: 2.5999999046325684,
        isofficial: false
      },
      {
        language: "Romani",
        countrycode: "BGR",
        percentage: 3.7000000476837158,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "BGR",
        percentage: 9.3999996185302734,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "BHR",
        percentage: 67.699996948242188,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "BHR",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "BHS",
        percentage: 89.699996948242188,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "BHS",
        percentage: 10.300000190734863,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "BIH",
        percentage: 99.199996948242188,
        isofficial: true
      },
      {
        language: "Belorussian",
        countrycode: "BLR",
        percentage: 65.599998474121094,
        isofficial: true
      },
      {
        language: "Polish",
        countrycode: "BLR",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "BLR",
        percentage: 32,
        isofficial: true
      },
      {
        language: "Ukrainian",
        countrycode: "BLR",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "BLZ",
        percentage: 50.799999237060547,
        isofficial: true
      },
      {
        language: "Garifuna",
        countrycode: "BLZ",
        percentage: 6.8000001907348633,
        isofficial: false
      },
      {
        language: "Maya Languages",
        countrycode: "BLZ",
        percentage: 9.6000003814697266,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "BLZ",
        percentage: 31.600000381469727,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "BMU",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Aimarï¿½",
        countrycode: "BOL",
        percentage: 3.2000000476837158,
        isofficial: true
      },
      {
        language: "Guaranï¿½",
        countrycode: "BOL",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Ketï¿½ua",
        countrycode: "BOL",
        percentage: 8.1000003814697266,
        isofficial: true
      },
      {
        language: "Spanish",
        countrycode: "BOL",
        percentage: 87.699996948242188,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "BRA",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Indian Languages",
        countrycode: "BRA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "BRA",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Japanese",
        countrycode: "BRA",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "BRA",
        percentage: 97.5,
        isofficial: true
      },
      {
        language: "Bajan",
        countrycode: "BRB",
        percentage: 95.099998474121094,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "BRB",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "BRN",
        percentage: 9.3000001907348633,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "BRN",
        percentage: 3.0999999046325684,
        isofficial: false
      },
      {
        language: "Malay",
        countrycode: "BRN",
        percentage: 45.5,
        isofficial: true
      },
      {
        language: "Malay-English",
        countrycode: "BRN",
        percentage: 28.799999237060547,
        isofficial: false
      },
      {
        language: "Asami",
        countrycode: "BTN",
        percentage: 15.199999809265137,
        isofficial: false
      },
      {
        language: "Dzongkha",
        countrycode: "BTN",
        percentage: 50,
        isofficial: true
      },
      {
        language: "Nepali",
        countrycode: "BTN",
        percentage: 34.799999237060547,
        isofficial: false
      },
      {
        language: "Khoekhoe",
        countrycode: "BWA",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Ndebele",
        countrycode: "BWA",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "San",
        countrycode: "BWA",
        percentage: 3.5,
        isofficial: false
      },
      {
        language: "Shona",
        countrycode: "BWA",
        percentage: 12.300000190734863,
        isofficial: false
      },
      {
        language: "Tswana",
        countrycode: "BWA",
        percentage: 75.5,
        isofficial: false
      },
      {
        language: "Banda",
        countrycode: "CAF",
        percentage: 23.5,
        isofficial: false
      },
      {
        language: "Gbaya",
        countrycode: "CAF",
        percentage: 23.799999237060547,
        isofficial: false
      },
      {
        language: "Mandjia",
        countrycode: "CAF",
        percentage: 14.800000190734863,
        isofficial: false
      },
      {
        language: "Mbum",
        countrycode: "CAF",
        percentage: 6.4000000953674316,
        isofficial: false
      },
      {
        language: "Ngbaka",
        countrycode: "CAF",
        percentage: 7.5,
        isofficial: false
      },
      {
        language: "Sara",
        countrycode: "CAF",
        percentage: 6.4000000953674316,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "CAN",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Dutch",
        countrycode: "CAN",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "CAN",
        percentage: 60.400001525878906,
        isofficial: true
      },
      {
        language: "Eskimo Languages",
        countrycode: "CAN",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "CAN",
        percentage: 23.399999618530273,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "CAN",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "CAN",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "CAN",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "CAN",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Punjabi",
        countrycode: "CAN",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "CAN",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "CAN",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "CCK",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Malay",
        countrycode: "CCK",
        percentage: 0,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "CHE",
        percentage: 19.200000762939453,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "CHE",
        percentage: 63.599998474121094,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "CHE",
        percentage: 7.6999998092651367,
        isofficial: true
      },
      {
        language: "Romansh",
        countrycode: "CHE",
        percentage: 0.60000002384185791,
        isofficial: true
      },
      {
        language: "Aimarï¿½",
        countrycode: "CHL",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Araucan",
        countrycode: "CHL",
        percentage: 9.6000003814697266,
        isofficial: false
      },
      {
        language: "Rapa nui",
        countrycode: "CHL",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "CHL",
        percentage: 89.699996948242188,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "CHN",
        percentage: 92,
        isofficial: true
      },
      {
        language: "Dong",
        countrycode: "CHN",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Hui",
        countrycode: "CHN",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Mantï¿½u",
        countrycode: "CHN",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Miao",
        countrycode: "CHN",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Mongolian",
        countrycode: "CHN",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Puyi",
        countrycode: "CHN",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Tibetan",
        countrycode: "CHN",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Tujia",
        countrycode: "CHN",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Uighur",
        countrycode: "CHN",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Yi",
        countrycode: "CHN",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Zhuang",
        countrycode: "CHN",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Akan",
        countrycode: "CIV",
        percentage: 30,
        isofficial: false
      },
      {
        language: "Gur",
        countrycode: "CIV",
        percentage: 11.699999809265137,
        isofficial: false
      },
      {
        language: "Kru",
        countrycode: "CIV",
        percentage: 10.5,
        isofficial: false
      },
      {
        language: "Malinke",
        countrycode: "CIV",
        percentage: 11.399999618530273,
        isofficial: false
      },
      {
        language: "[South]Mande",
        countrycode: "CIV",
        percentage: 7.6999998092651367,
        isofficial: false
      },
      {
        language: "Bamileke-bamum",
        countrycode: "CMR",
        percentage: 18.600000381469727,
        isofficial: false
      },
      {
        language: "Duala",
        countrycode: "CMR",
        percentage: 10.899999618530273,
        isofficial: false
      },
      {
        language: "Fang",
        countrycode: "CMR",
        percentage: 19.700000762939453,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "CMR",
        percentage: 9.6000003814697266,
        isofficial: false
      },
      {
        language: "Maka",
        countrycode: "CMR",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Mandara",
        countrycode: "CMR",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Masana",
        countrycode: "CMR",
        percentage: 3.9000000953674316,
        isofficial: false
      },
      {
        language: "Tikar",
        countrycode: "CMR",
        percentage: 7.4000000953674316,
        isofficial: false
      },
      {
        language: "Boa",
        countrycode: "COD",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Chokwe",
        countrycode: "COD",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Kongo",
        countrycode: "COD",
        percentage: 16,
        isofficial: false
      },
      {
        language: "Luba",
        countrycode: "COD",
        percentage: 18,
        isofficial: false
      },
      {
        language: "Mongo",
        countrycode: "COD",
        percentage: 13.5,
        isofficial: false
      },
      {
        language: "Ngala and Bangi",
        countrycode: "COD",
        percentage: 5.8000001907348633,
        isofficial: false
      },
      {
        language: "Rundi",
        countrycode: "COD",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Rwanda",
        countrycode: "COD",
        percentage: 10.300000190734863,
        isofficial: false
      },
      {
        language: "Teke",
        countrycode: "COD",
        percentage: 2.7000000476837158,
        isofficial: false
      },
      {
        language: "Zande",
        countrycode: "COD",
        percentage: 6.0999999046325684,
        isofficial: false
      },
      {
        language: "Kongo",
        countrycode: "COG",
        percentage: 51.5,
        isofficial: false
      },
      {
        language: "Mbete",
        countrycode: "COG",
        percentage: 4.8000001907348633,
        isofficial: false
      },
      {
        language: "Mboshi",
        countrycode: "COG",
        percentage: 11.399999618530273,
        isofficial: false
      },
      {
        language: "Punu",
        countrycode: "COG",
        percentage: 2.9000000953674316,
        isofficial: false
      },
      {
        language: "Sango",
        countrycode: "COG",
        percentage: 2.5999999046325684,
        isofficial: false
      },
      {
        language: "Teke",
        countrycode: "COG",
        percentage: 17.299999237060547,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "COK",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Maori",
        countrycode: "COK",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Arawakan",
        countrycode: "COL",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Caribbean",
        countrycode: "COL",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Chibcha",
        countrycode: "COL",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "COL",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "COL",
        percentage: 99,
        isofficial: true
      },
      {
        language: "Comorian",
        countrycode: "COM",
        percentage: 75,
        isofficial: true
      },
      {
        language: "Comorian-Arabic",
        countrycode: "COM",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Comorian-French",
        countrycode: "COM",
        percentage: 12.899999618530273,
        isofficial: false
      },
      {
        language: "Comorian-Swahili",
        countrycode: "COM",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Comorian-madagassi",
        countrycode: "COM",
        percentage: 5.5,
        isofficial: false
      },
      {
        language: "Crioulo",
        countrycode: "CPV",
        percentage: 100,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "CPV",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Chibcha",
        countrycode: "CRI",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "CRI",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "CRI",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "CRI",
        percentage: 97.5,
        isofficial: true
      },
      {
        language: "Spanish",
        countrycode: "CUB",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "CXR",
        percentage: 0,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "CXR",
        percentage: 0,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "CYM",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Greek",
        countrycode: "CYP",
        percentage: 74.099998474121094,
        isofficial: true
      },
      {
        language: "Turkish",
        countrycode: "CYP",
        percentage: 22.399999618530273,
        isofficial: true
      },
      {
        language: "Czech",
        countrycode: "CZE",
        percentage: 81.199996948242188,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "CZE",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "CZE",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Moravian",
        countrycode: "CZE",
        percentage: 12.899999618530273,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "CZE",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Romani",
        countrycode: "CZE",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Silesiana",
        countrycode: "CZE",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Slovak",
        countrycode: "CZE",
        percentage: 3.0999999046325684,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "DEU",
        percentage: 91.300003051757812,
        isofficial: true
      },
      {
        language: "Greek",
        countrycode: "DEU",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "DEU",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "DEU",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Southern Slavic Languages",
        countrycode: "DEU",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "DEU",
        percentage: 2.5999999046325684,
        isofficial: false
      },
      {
        language: "Afar",
        countrycode: "DJI",
        percentage: 34.799999237060547,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "DJI",
        percentage: 10.600000381469727,
        isofficial: true
      },
      {
        language: "Somali",
        countrycode: "DJI",
        percentage: 43.900001525878906,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "DMA",
        percentage: 100,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "DMA",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "DNK",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Danish",
        countrycode: "DNK",
        percentage: 93.5,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "DNK",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "DNK",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Norwegian",
        countrycode: "DNK",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Swedish",
        countrycode: "DNK",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "DNK",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "DOM",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "DOM",
        percentage: 98,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "DZA",
        percentage: 86,
        isofficial: true
      },
      {
        language: "Berberi",
        countrycode: "DZA",
        percentage: 14,
        isofficial: false
      },
      {
        language: "Ketï¿½ua",
        countrycode: "ECU",
        percentage: 7,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "ECU",
        percentage: 93,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "EGY",
        percentage: 98.800003051757812,
        isofficial: true
      },
      {
        language: "Sinaberberi",
        countrycode: "EGY",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Afar",
        countrycode: "ERI",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Bilin",
        countrycode: "ERI",
        percentage: 3,
        isofficial: false
      },
      {
        language: "Hadareb",
        countrycode: "ERI",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Saho",
        countrycode: "ERI",
        percentage: 3,
        isofficial: false
      },
      {
        language: "Tigre",
        countrycode: "ERI",
        percentage: 31.700000762939453,
        isofficial: false
      },
      {
        language: "Tigrinja",
        countrycode: "ERI",
        percentage: 49.099998474121094,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "ESH",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Basque",
        countrycode: "ESP",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Catalan",
        countrycode: "ESP",
        percentage: 16.899999618530273,
        isofficial: false
      },
      {
        language: "Galecian",
        countrycode: "ESP",
        percentage: 6.4000000953674316,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "ESP",
        percentage: 74.400001525878906,
        isofficial: true
      },
      {
        language: "Belorussian",
        countrycode: "EST",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Estonian",
        countrycode: "EST",
        percentage: 65.300003051757812,
        isofficial: true
      },
      {
        language: "Finnish",
        countrycode: "EST",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "EST",
        percentage: 27.799999237060547,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "EST",
        percentage: 2.7999999523162842,
        isofficial: false
      },
      {
        language: "Amhara",
        countrycode: "ETH",
        percentage: 30,
        isofficial: false
      },
      {
        language: "Gurage",
        countrycode: "ETH",
        percentage: 4.6999998092651367,
        isofficial: false
      },
      {
        language: "Oromo",
        countrycode: "ETH",
        percentage: 31,
        isofficial: false
      },
      {
        language: "Sidamo",
        countrycode: "ETH",
        percentage: 3.2000000476837158,
        isofficial: false
      },
      {
        language: "Somali",
        countrycode: "ETH",
        percentage: 4.0999999046325684,
        isofficial: false
      },
      {
        language: "Tigrinja",
        countrycode: "ETH",
        percentage: 7.1999998092651367,
        isofficial: false
      },
      {
        language: "Walaita",
        countrycode: "ETH",
        percentage: 2.7999999523162842,
        isofficial: false
      },
      {
        language: "Estonian",
        countrycode: "FIN",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Finnish",
        countrycode: "FIN",
        percentage: 92.699996948242188,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "FIN",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Saame",
        countrycode: "FIN",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Swedish",
        countrycode: "FIN",
        percentage: 5.6999998092651367,
        isofficial: true
      },
      {
        language: "Fijian",
        countrycode: "FJI",
        percentage: 50.799999237060547,
        isofficial: true
      },
      {
        language: "Hindi",
        countrycode: "FJI",
        percentage: 43.700000762939453,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "FLK",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "FRA",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "FRA",
        percentage: 93.599998474121094,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "FRA",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "FRA",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "FRA",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "FRA",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Danish",
        countrycode: "FRO",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Faroese",
        countrycode: "FRO",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Kosrean",
        countrycode: "FSM",
        percentage: 7.3000001907348633,
        isofficial: false
      },
      {
        language: "Mortlock",
        countrycode: "FSM",
        percentage: 7.5999999046325684,
        isofficial: false
      },
      {
        language: "Pohnpei",
        countrycode: "FSM",
        percentage: 23.799999237060547,
        isofficial: false
      },
      {
        language: "Trukese",
        countrycode: "FSM",
        percentage: 41.599998474121094,
        isofficial: false
      },
      {
        language: "Wolea",
        countrycode: "FSM",
        percentage: 3.7000000476837158,
        isofficial: false
      },
      {
        language: "Yap",
        countrycode: "FSM",
        percentage: 5.8000001907348633,
        isofficial: false
      },
      {
        language: "Fang",
        countrycode: "GAB",
        percentage: 35.799999237060547,
        isofficial: false
      },
      {
        language: "Mbete",
        countrycode: "GAB",
        percentage: 13.800000190734863,
        isofficial: false
      },
      {
        language: "Mpongwe",
        countrycode: "GAB",
        percentage: 14.600000381469727,
        isofficial: false
      },
      {
        language: "Punu-sira-nzebi",
        countrycode: "GAB",
        percentage: 17.100000381469727,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "GBR",
        percentage: 97.300003051757812,
        isofficial: true
      },
      {
        language: "Gaeli",
        countrycode: "GBR",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Kymri",
        countrycode: "GBR",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Abhyasi",
        countrycode: "GEO",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Armenian",
        countrycode: "GEO",
        percentage: 6.8000001907348633,
        isofficial: false
      },
      {
        language: "Azerbaijani",
        countrycode: "GEO",
        percentage: 5.5,
        isofficial: false
      },
      {
        language: "Georgiana",
        countrycode: "GEO",
        percentage: 71.699996948242188,
        isofficial: true
      },
      {
        language: "Osseetti",
        countrycode: "GEO",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "GEO",
        percentage: 8.8000001907348633,
        isofficial: false
      },
      {
        language: "Akan",
        countrycode: "GHA",
        percentage: 52.400001525878906,
        isofficial: false
      },
      {
        language: "Ewe",
        countrycode: "GHA",
        percentage: 11.899999618530273,
        isofficial: false
      },
      {
        language: "Ga-adangme",
        countrycode: "GHA",
        percentage: 7.8000001907348633,
        isofficial: false
      },
      {
        language: "Gurma",
        countrycode: "GHA",
        percentage: 3.2999999523162842,
        isofficial: false
      },
      {
        language: "Joruba",
        countrycode: "GHA",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Mossi",
        countrycode: "GHA",
        percentage: 15.800000190734863,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "GIB",
        percentage: 7.4000000953674316,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "GIB",
        percentage: 88.900001525878906,
        isofficial: true
      },
      {
        language: "Ful",
        countrycode: "GIN",
        percentage: 38.599998474121094,
        isofficial: false
      },
      {
        language: "Kissi",
        countrycode: "GIN",
        percentage: 6,
        isofficial: false
      },
      {
        language: "Kpelle",
        countrycode: "GIN",
        percentage: 4.5999999046325684,
        isofficial: false
      },
      {
        language: "Loma",
        countrycode: "GIN",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Malinke",
        countrycode: "GIN",
        percentage: 23.200000762939453,
        isofficial: false
      },
      {
        language: "Susu",
        countrycode: "GIN",
        percentage: 11,
        isofficial: false
      },
      {
        language: "Yalunka",
        countrycode: "GIN",
        percentage: 2.9000000953674316,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "GLP",
        percentage: 95,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "GLP",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Diola",
        countrycode: "GMB",
        percentage: 9.1999998092651367,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "GMB",
        percentage: 16.200000762939453,
        isofficial: false
      },
      {
        language: "Malinke",
        countrycode: "GMB",
        percentage: 34.099998474121094,
        isofficial: false
      },
      {
        language: "Soninke",
        countrycode: "GMB",
        percentage: 7.5999999046325684,
        isofficial: false
      },
      {
        language: "Wolof",
        countrycode: "GMB",
        percentage: 12.600000381469727,
        isofficial: false
      },
      {
        language: "Balante",
        countrycode: "GNB",
        percentage: 14.600000381469727,
        isofficial: false
      },
      {
        language: "Crioulo",
        countrycode: "GNB",
        percentage: 36.400001525878906,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "GNB",
        percentage: 16.600000381469727,
        isofficial: false
      },
      {
        language: "Malinke",
        countrycode: "GNB",
        percentage: 6.9000000953674316,
        isofficial: false
      },
      {
        language: "Mandyako",
        countrycode: "GNB",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "GNB",
        percentage: 8.1000003814697266,
        isofficial: true
      },
      {
        language: "Bubi",
        countrycode: "GNQ",
        percentage: 8.6999998092651367,
        isofficial: false
      },
      {
        language: "Fang",
        countrycode: "GNQ",
        percentage: 84.800003051757812,
        isofficial: false
      },
      {
        language: "Greek",
        countrycode: "GRC",
        percentage: 98.5,
        isofficial: true
      },
      {
        language: "Turkish",
        countrycode: "GRC",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "GRD",
        percentage: 100,
        isofficial: false
      },
      {
        language: "Danish",
        countrycode: "GRL",
        percentage: 12.5,
        isofficial: true
      },
      {
        language: "Greenlandic",
        countrycode: "GRL",
        percentage: 87.5,
        isofficial: true
      },
      {
        language: "Cakchiquel",
        countrycode: "GTM",
        percentage: 8.8999996185302734,
        isofficial: false
      },
      {
        language: "Kekchï¿½",
        countrycode: "GTM",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Mam",
        countrycode: "GTM",
        percentage: 2.7000000476837158,
        isofficial: false
      },
      {
        language: "Quichï¿½",
        countrycode: "GTM",
        percentage: 10.100000381469727,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "GTM",
        percentage: 64.699996948242188,
        isofficial: true
      },
      {
        language: "Creole French",
        countrycode: "GUF",
        percentage: 94.300003051757812,
        isofficial: false
      },
      {
        language: "Indian Languages",
        countrycode: "GUF",
        percentage: 1.8999999761581421,
        isofficial: false
      },
      {
        language: "Chamorro",
        countrycode: "GUM",
        percentage: 29.600000381469727,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "GUM",
        percentage: 37.5,
        isofficial: true
      },
      {
        language: "Japanese",
        countrycode: "GUM",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Korean",
        countrycode: "GUM",
        percentage: 3.2999999523162842,
        isofficial: false
      },
      {
        language: "Philippene Languages",
        countrycode: "GUM",
        percentage: 19.700000762939453,
        isofficial: false
      },
      {
        language: "Arawakan",
        countrycode: "GUY",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Caribbean",
        countrycode: "GUY",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "GUY",
        percentage: 96.400001525878906,
        isofficial: false
      },
      {
        language: "Canton Chinese",
        countrycode: "HKG",
        percentage: 88.699996948242188,
        isofficial: false
      },
      {
        language: "Chiu chau",
        countrycode: "HKG",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "HKG",
        percentage: 2.2000000476837158,
        isofficial: true
      },
      {
        language: "Fukien",
        countrycode: "HKG",
        percentage: 1.8999999761581421,
        isofficial: false
      },
      {
        language: "Hakka",
        countrycode: "HKG",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "HND",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Garifuna",
        countrycode: "HND",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Miskito",
        countrycode: "HND",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "HND",
        percentage: 97.199996948242188,
        isofficial: true
      },
      {
        language: "Serbo-Croatian",
        countrycode: "HRV",
        percentage: 95.900001525878906,
        isofficial: true
      },
      {
        language: "Slovene",
        countrycode: "HRV",
        percentage: 0,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "HTI",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Haiti Creole",
        countrycode: "HTI",
        percentage: 100,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "HUN",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "HUN",
        percentage: 98.5,
        isofficial: true
      },
      {
        language: "Romani",
        countrycode: "HUN",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Romanian",
        countrycode: "HUN",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "HUN",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Slovak",
        countrycode: "HUN",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Bali",
        countrycode: "IDN",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Banja",
        countrycode: "IDN",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Batakki",
        countrycode: "IDN",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Bugi",
        countrycode: "IDN",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Javanese",
        countrycode: "IDN",
        percentage: 39.400001525878906,
        isofficial: false
      },
      {
        language: "Madura",
        countrycode: "IDN",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Malay",
        countrycode: "IDN",
        percentage: 12.100000381469727,
        isofficial: true
      },
      {
        language: "Minangkabau",
        countrycode: "IDN",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Sunda",
        countrycode: "IDN",
        percentage: 15.800000190734863,
        isofficial: false
      },
      {
        language: "Asami",
        countrycode: "IND",
        percentage: 1.5,
        isofficial: false
      },
      {
        language: "Bengali",
        countrycode: "IND",
        percentage: 8.1999998092651367,
        isofficial: false
      },
      {
        language: "Gujarati",
        countrycode: "IND",
        percentage: 4.8000001907348633,
        isofficial: false
      },
      {
        language: "Hindi",
        countrycode: "IND",
        percentage: 39.900001525878906,
        isofficial: true
      },
      {
        language: "Kannada",
        countrycode: "IND",
        percentage: 3.9000000953674316,
        isofficial: false
      },
      {
        language: "Malajalam",
        countrycode: "IND",
        percentage: 3.5999999046325684,
        isofficial: false
      },
      {
        language: "Marathi",
        countrycode: "IND",
        percentage: 7.4000000953674316,
        isofficial: false
      },
      {
        language: "Orija",
        countrycode: "IND",
        percentage: 3.2999999523162842,
        isofficial: false
      },
      {
        language: "Punjabi",
        countrycode: "IND",
        percentage: 2.7999999523162842,
        isofficial: false
      },
      {
        language: "Tamil",
        countrycode: "IND",
        percentage: 6.3000001907348633,
        isofficial: false
      },
      {
        language: "Telugu",
        countrycode: "IND",
        percentage: 7.8000001907348633,
        isofficial: false
      },
      {
        language: "Urdu",
        countrycode: "IND",
        percentage: 5.0999999046325684,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "IRL",
        percentage: 98.400001525878906,
        isofficial: true
      },
      {
        language: "Irish",
        countrycode: "IRL",
        percentage: 1.6000000238418579,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "IRN",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Azerbaijani",
        countrycode: "IRN",
        percentage: 16.799999237060547,
        isofficial: false
      },
      {
        language: "Bakhtyari",
        countrycode: "IRN",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Balochi",
        countrycode: "IRN",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Gilaki",
        countrycode: "IRN",
        percentage: 5.3000001907348633,
        isofficial: false
      },
      {
        language: "Kurdish",
        countrycode: "IRN",
        percentage: 9.1000003814697266,
        isofficial: false
      },
      {
        language: "Luri",
        countrycode: "IRN",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Mazandarani",
        countrycode: "IRN",
        percentage: 3.5999999046325684,
        isofficial: false
      },
      {
        language: "Persian",
        countrycode: "IRN",
        percentage: 45.700000762939453,
        isofficial: true
      },
      {
        language: "Turkmenian",
        countrycode: "IRN",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "IRQ",
        percentage: 77.199996948242188,
        isofficial: true
      },
      {
        language: "Assyrian",
        countrycode: "IRQ",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Azerbaijani",
        countrycode: "IRQ",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Kurdish",
        countrycode: "IRQ",
        percentage: 19,
        isofficial: false
      },
      {
        language: "Persian",
        countrycode: "IRQ",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "ISL",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Icelandic",
        countrycode: "ISL",
        percentage: 95.699996948242188,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "ISR",
        percentage: 18,
        isofficial: true
      },
      {
        language: "Hebrew",
        countrycode: "ISR",
        percentage: 63.099998474121094,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "ISR",
        percentage: 8.8999996185302734,
        isofficial: false
      },
      {
        language: "Albaniana",
        countrycode: "ITA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "ITA",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Friuli",
        countrycode: "ITA",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "ITA",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "ITA",
        percentage: 94.099998474121094,
        isofficial: true
      },
      {
        language: "Romani",
        countrycode: "ITA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Sardinian",
        countrycode: "ITA",
        percentage: 2.7000000476837158,
        isofficial: false
      },
      {
        language: "Slovene",
        countrycode: "ITA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "JAM",
        percentage: 94.199996948242188,
        isofficial: false
      },
      {
        language: "Hindi",
        countrycode: "JAM",
        percentage: 1.8999999761581421,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "JOR",
        percentage: 97.900001525878906,
        isofficial: true
      },
      {
        language: "Armenian",
        countrycode: "JOR",
        percentage: 1,
        isofficial: false
      },
      {
        language: "Circassian",
        countrycode: "JOR",
        percentage: 1,
        isofficial: false
      },
      {
        language: "Ainu",
        countrycode: "JPN",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "JPN",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "JPN",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Japanese",
        countrycode: "JPN",
        percentage: 99.099998474121094,
        isofficial: true
      },
      {
        language: "Korean",
        countrycode: "JPN",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Philippene Languages",
        countrycode: "JPN",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "KAZ",
        percentage: 3.0999999046325684,
        isofficial: false
      },
      {
        language: "Kazakh",
        countrycode: "KAZ",
        percentage: 46,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "KAZ",
        percentage: 34.700000762939453,
        isofficial: false
      },
      {
        language: "Tatar",
        countrycode: "KAZ",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "KAZ",
        percentage: 5,
        isofficial: false
      },
      {
        language: "Uzbek",
        countrycode: "KAZ",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Gusii",
        countrycode: "KEN",
        percentage: 6.0999999046325684,
        isofficial: false
      },
      {
        language: "Kalenjin",
        countrycode: "KEN",
        percentage: 10.800000190734863,
        isofficial: false
      },
      {
        language: "Kamba",
        countrycode: "KEN",
        percentage: 11.199999809265137,
        isofficial: false
      },
      {
        language: "Kikuyu",
        countrycode: "KEN",
        percentage: 20.899999618530273,
        isofficial: false
      },
      {
        language: "Luhya",
        countrycode: "KEN",
        percentage: 13.800000190734863,
        isofficial: false
      },
      {
        language: "Luo",
        countrycode: "KEN",
        percentage: 12.800000190734863,
        isofficial: false
      },
      {
        language: "Masai",
        countrycode: "KEN",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Meru",
        countrycode: "KEN",
        percentage: 5.5,
        isofficial: false
      },
      {
        language: "Nyika",
        countrycode: "KEN",
        percentage: 4.8000001907348633,
        isofficial: false
      },
      {
        language: "Turkana",
        countrycode: "KEN",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Kazakh",
        countrycode: "KGZ",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Kirgiz",
        countrycode: "KGZ",
        percentage: 59.700000762939453,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "KGZ",
        percentage: 16.200000762939453,
        isofficial: true
      },
      {
        language: "Tadzhik",
        countrycode: "KGZ",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Tatar",
        countrycode: "KGZ",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "KGZ",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Uzbek",
        countrycode: "KGZ",
        percentage: 14.100000381469727,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "KHM",
        percentage: 3.0999999046325684,
        isofficial: false
      },
      {
        language: "Khmer",
        countrycode: "KHM",
        percentage: 88.599998474121094,
        isofficial: true
      },
      {
        language: "Tï¿½am",
        countrycode: "KHM",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Vietnamese",
        countrycode: "KHM",
        percentage: 5.5,
        isofficial: false
      },
      {
        language: "Kiribati",
        countrycode: "KIR",
        percentage: 98.900001525878906,
        isofficial: true
      },
      {
        language: "Tuvalu",
        countrycode: "KIR",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "KNA",
        percentage: 100,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "KNA",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "KOR",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Korean",
        countrycode: "KOR",
        percentage: 99.900001525878906,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "KWT",
        percentage: 78.099998474121094,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "KWT",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Lao",
        countrycode: "LAO",
        percentage: 67.199996948242188,
        isofficial: true
      },
      {
        language: "Lao-Soung",
        countrycode: "LAO",
        percentage: 5.1999998092651367,
        isofficial: false
      },
      {
        language: "Mon-khmer",
        countrycode: "LAO",
        percentage: 16.5,
        isofficial: false
      },
      {
        language: "Thai",
        countrycode: "LAO",
        percentage: 7.8000001907348633,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "LBN",
        percentage: 93,
        isofficial: true
      },
      {
        language: "Armenian",
        countrycode: "LBN",
        percentage: 5.9000000953674316,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "LBN",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Bassa",
        countrycode: "LBR",
        percentage: 13.699999809265137,
        isofficial: false
      },
      {
        language: "Gio",
        countrycode: "LBR",
        percentage: 7.9000000953674316,
        isofficial: false
      },
      {
        language: "Grebo",
        countrycode: "LBR",
        percentage: 8.8999996185302734,
        isofficial: false
      },
      {
        language: "Kpelle",
        countrycode: "LBR",
        percentage: 19.5,
        isofficial: false
      },
      {
        language: "Kru",
        countrycode: "LBR",
        percentage: 7.1999998092651367,
        isofficial: false
      },
      {
        language: "Loma",
        countrycode: "LBR",
        percentage: 5.8000001907348633,
        isofficial: false
      },
      {
        language: "Malinke",
        countrycode: "LBR",
        percentage: 5.0999999046325684,
        isofficial: false
      },
      {
        language: "Mano",
        countrycode: "LBR",
        percentage: 7.1999998092651367,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "LBY",
        percentage: 96,
        isofficial: true
      },
      {
        language: "Berberi",
        countrycode: "LBY",
        percentage: 1,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "LCA",
        percentage: 80,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "LCA",
        percentage: 20,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "LIE",
        percentage: 89,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "LIE",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "LIE",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Mixed Languages",
        countrycode: "LKA",
        percentage: 19.600000381469727,
        isofficial: false
      },
      {
        language: "Singali",
        countrycode: "LKA",
        percentage: 60.299999237060547,
        isofficial: true
      },
      {
        language: "Tamil",
        countrycode: "LKA",
        percentage: 19.600000381469727,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "LSO",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Sotho",
        countrycode: "LSO",
        percentage: 85,
        isofficial: true
      },
      {
        language: "Zulu",
        countrycode: "LSO",
        percentage: 15,
        isofficial: false
      },
      {
        language: "Belorussian",
        countrycode: "LTU",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Lithuanian",
        countrycode: "LTU",
        percentage: 81.599998474121094,
        isofficial: true
      },
      {
        language: "Polish",
        countrycode: "LTU",
        percentage: 7,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "LTU",
        percentage: 8.1000003814697266,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "LTU",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "LUX",
        percentage: 4.1999998092651367,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "LUX",
        percentage: 2.2999999523162842,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "LUX",
        percentage: 4.5999999046325684,
        isofficial: false
      },
      {
        language: "Luxembourgish",
        countrycode: "LUX",
        percentage: 64.400001525878906,
        isofficial: true
      },
      {
        language: "Portuguese",
        countrycode: "LUX",
        percentage: 13,
        isofficial: false
      },
      {
        language: "Belorussian",
        countrycode: "LVA",
        percentage: 4.0999999046325684,
        isofficial: false
      },
      {
        language: "Latvian",
        countrycode: "LVA",
        percentage: 55.099998474121094,
        isofficial: true
      },
      {
        language: "Lithuanian",
        countrycode: "LVA",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "LVA",
        percentage: 2.0999999046325684,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "LVA",
        percentage: 32.5,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "LVA",
        percentage: 2.9000000953674316,
        isofficial: false
      },
      {
        language: "Canton Chinese",
        countrycode: "MAC",
        percentage: 85.599998474121094,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MAC",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Mandarin Chinese",
        countrycode: "MAC",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "MAC",
        percentage: 2.2999999523162842,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "MAR",
        percentage: 65,
        isofficial: true
      },
      {
        language: "Berberi",
        countrycode: "MAR",
        percentage: 33,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MCO",
        percentage: 6.5,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "MCO",
        percentage: 41.900001525878906,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "MCO",
        percentage: 16.100000381469727,
        isofficial: false
      },
      {
        language: "Monegasque",
        countrycode: "MCO",
        percentage: 16.100000381469727,
        isofficial: false
      },
      {
        language: "Bulgariana",
        countrycode: "MDA",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Gagauzi",
        countrycode: "MDA",
        percentage: 3.2000000476837158,
        isofficial: false
      },
      {
        language: "Romanian",
        countrycode: "MDA",
        percentage: 61.900001525878906,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "MDA",
        percentage: 23.200000762939453,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "MDA",
        percentage: 8.6000003814697266,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "MDG",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Malagasy",
        countrycode: "MDG",
        percentage: 98.900001525878906,
        isofficial: true
      },
      {
        language: "Dhivehi",
        countrycode: "MDV",
        percentage: 100,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "MDV",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Mixtec",
        countrycode: "MEX",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Nï¿½huatl",
        countrycode: "MEX",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Otomï¿½",
        countrycode: "MEX",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "MEX",
        percentage: 92.099998474121094,
        isofficial: true
      },
      {
        language: "Yucatec",
        countrycode: "MEX",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "Zapotec",
        countrycode: "MEX",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MHL",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Marshallese",
        countrycode: "MHL",
        percentage: 96.800003051757812,
        isofficial: true
      },
      {
        language: "Albaniana",
        countrycode: "MKD",
        percentage: 22.899999618530273,
        isofficial: false
      },
      {
        language: "Macedonian",
        countrycode: "MKD",
        percentage: 66.5,
        isofficial: true
      },
      {
        language: "Romani",
        countrycode: "MKD",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "MKD",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "MKD",
        percentage: 4,
        isofficial: false
      },
      {
        language: "Bambara",
        countrycode: "MLI",
        percentage: 31.799999237060547,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "MLI",
        percentage: 13.899999618530273,
        isofficial: false
      },
      {
        language: "Senufo and Minianka",
        countrycode: "MLI",
        percentage: 12,
        isofficial: false
      },
      {
        language: "Songhai",
        countrycode: "MLI",
        percentage: 6.9000000953674316,
        isofficial: false
      },
      {
        language: "Soninke",
        countrycode: "MLI",
        percentage: 8.6999998092651367,
        isofficial: false
      },
      {
        language: "Tamashek",
        countrycode: "MLI",
        percentage: 7.3000001907348633,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MLT",
        percentage: 2.0999999046325684,
        isofficial: true
      },
      {
        language: "Maltese",
        countrycode: "MLT",
        percentage: 95.800003051757812,
        isofficial: true
      },
      {
        language: "Burmese",
        countrycode: "MMR",
        percentage: 69,
        isofficial: true
      },
      {
        language: "Chin",
        countrycode: "MMR",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Kachin",
        countrycode: "MMR",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Karen",
        countrycode: "MMR",
        percentage: 6.1999998092651367,
        isofficial: false
      },
      {
        language: "Kayah",
        countrycode: "MMR",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Mon",
        countrycode: "MMR",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Rakhine",
        countrycode: "MMR",
        percentage: 4.5,
        isofficial: false
      },
      {
        language: "Shan",
        countrycode: "MMR",
        percentage: 8.5,
        isofficial: false
      },
      {
        language: "Bajad",
        countrycode: "MNG",
        percentage: 1.8999999761581421,
        isofficial: false
      },
      {
        language: "Buryat",
        countrycode: "MNG",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Dariganga",
        countrycode: "MNG",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Dorbet",
        countrycode: "MNG",
        percentage: 2.7000000476837158,
        isofficial: false
      },
      {
        language: "Kazakh",
        countrycode: "MNG",
        percentage: 5.9000000953674316,
        isofficial: false
      },
      {
        language: "Mongolian",
        countrycode: "MNG",
        percentage: 78.800003051757812,
        isofficial: true
      },
      {
        language: "Carolinian",
        countrycode: "MNP",
        percentage: 4.8000001907348633,
        isofficial: false
      },
      {
        language: "Chamorro",
        countrycode: "MNP",
        percentage: 30,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "MNP",
        percentage: 7.0999999046325684,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MNP",
        percentage: 4.8000001907348633,
        isofficial: true
      },
      {
        language: "Korean",
        countrycode: "MNP",
        percentage: 6.5,
        isofficial: false
      },
      {
        language: "Philippene Languages",
        countrycode: "MNP",
        percentage: 34.099998474121094,
        isofficial: false
      },
      {
        language: "Chuabo",
        countrycode: "MOZ",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Lomwe",
        countrycode: "MOZ",
        percentage: 7.8000001907348633,
        isofficial: false
      },
      {
        language: "Makua",
        countrycode: "MOZ",
        percentage: 27.799999237060547,
        isofficial: false
      },
      {
        language: "Marendje",
        countrycode: "MOZ",
        percentage: 3.5,
        isofficial: false
      },
      {
        language: "Nyanja",
        countrycode: "MOZ",
        percentage: 3.2999999523162842,
        isofficial: false
      },
      {
        language: "Ronga",
        countrycode: "MOZ",
        percentage: 3.7000000476837158,
        isofficial: false
      },
      {
        language: "Sena",
        countrycode: "MOZ",
        percentage: 9.3999996185302734,
        isofficial: false
      },
      {
        language: "Shona",
        countrycode: "MOZ",
        percentage: 6.5,
        isofficial: false
      },
      {
        language: "Tsonga",
        countrycode: "MOZ",
        percentage: 12.399999618530273,
        isofficial: false
      },
      {
        language: "Tswa",
        countrycode: "MOZ",
        percentage: 6,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "MRT",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "Hassaniya",
        countrycode: "MRT",
        percentage: 81.699996948242188,
        isofficial: false
      },
      {
        language: "Soninke",
        countrycode: "MRT",
        percentage: 2.7000000476837158,
        isofficial: false
      },
      {
        language: "Tukulor",
        countrycode: "MRT",
        percentage: 5.4000000953674316,
        isofficial: false
      },
      {
        language: "Wolof",
        countrycode: "MRT",
        percentage: 6.5999999046325684,
        isofficial: false
      },
      {
        language: "Zenaga",
        countrycode: "MRT",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MSR",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Creole French",
        countrycode: "MTQ",
        percentage: 96.599998474121094,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "MTQ",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Bhojpuri",
        countrycode: "MUS",
        percentage: 21.100000381469727,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "MUS",
        percentage: 70.599998474121094,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "MUS",
        percentage: 3.4000000953674316,
        isofficial: false
      },
      {
        language: "Hindi",
        countrycode: "MUS",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "Marathi",
        countrycode: "MUS",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Tamil",
        countrycode: "MUS",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Chichewa",
        countrycode: "MWI",
        percentage: 58.299999237060547,
        isofficial: true
      },
      {
        language: "Lomwe",
        countrycode: "MWI",
        percentage: 18.399999618530273,
        isofficial: false
      },
      {
        language: "Ngoni",
        countrycode: "MWI",
        percentage: 6.6999998092651367,
        isofficial: false
      },
      {
        language: "Yao",
        countrycode: "MWI",
        percentage: 13.199999809265137,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "MYS",
        percentage: 9,
        isofficial: false
      },
      {
        language: "Dusun",
        countrycode: "MYS",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "MYS",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Iban",
        countrycode: "MYS",
        percentage: 2.7999999523162842,
        isofficial: false
      },
      {
        language: "Malay",
        countrycode: "MYS",
        percentage: 58.400001525878906,
        isofficial: true
      },
      {
        language: "Tamil",
        countrycode: "MYS",
        percentage: 3.9000000953674316,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "MYT",
        percentage: 20.299999237060547,
        isofficial: true
      },
      {
        language: "Mahorï¿½",
        countrycode: "MYT",
        percentage: 41.900001525878906,
        isofficial: false
      },
      {
        language: "Malagasy",
        countrycode: "MYT",
        percentage: 16.100000381469727,
        isofficial: false
      },
      {
        language: "Afrikaans",
        countrycode: "NAM",
        percentage: 9.5,
        isofficial: false
      },
      {
        language: "Caprivi",
        countrycode: "NAM",
        percentage: 4.6999998092651367,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "NAM",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Herero",
        countrycode: "NAM",
        percentage: 8,
        isofficial: false
      },
      {
        language: "Kavango",
        countrycode: "NAM",
        percentage: 9.6999998092651367,
        isofficial: false
      },
      {
        language: "Nama",
        countrycode: "NAM",
        percentage: 12.399999618530273,
        isofficial: false
      },
      {
        language: "Ovambo",
        countrycode: "NAM",
        percentage: 50.700000762939453,
        isofficial: false
      },
      {
        language: "San",
        countrycode: "NAM",
        percentage: 1.8999999761581421,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "NCL",
        percentage: 34.299999237060547,
        isofficial: true
      },
      {
        language: "Malenasian Languages",
        countrycode: "NCL",
        percentage: 45.400001525878906,
        isofficial: false
      },
      {
        language: "Polynesian Languages",
        countrycode: "NCL",
        percentage: 11.600000381469727,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "NER",
        percentage: 9.6999998092651367,
        isofficial: false
      },
      {
        language: "Hausa",
        countrycode: "NER",
        percentage: 53.099998474121094,
        isofficial: false
      },
      {
        language: "Kanuri",
        countrycode: "NER",
        percentage: 4.4000000953674316,
        isofficial: false
      },
      {
        language: "Songhai-zerma",
        countrycode: "NER",
        percentage: 21.200000762939453,
        isofficial: false
      },
      {
        language: "Tamashek",
        countrycode: "NER",
        percentage: 10.399999618530273,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "NFK",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Bura",
        countrycode: "NGA",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Edo",
        countrycode: "NGA",
        percentage: 3.2999999523162842,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "NGA",
        percentage: 11.300000190734863,
        isofficial: false
      },
      {
        language: "Hausa",
        countrycode: "NGA",
        percentage: 21.100000381469727,
        isofficial: false
      },
      {
        language: "Ibibio",
        countrycode: "NGA",
        percentage: 5.5999999046325684,
        isofficial: false
      },
      {
        language: "Ibo",
        countrycode: "NGA",
        percentage: 18.100000381469727,
        isofficial: false
      },
      {
        language: "Ijo",
        countrycode: "NGA",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Joruba",
        countrycode: "NGA",
        percentage: 21.399999618530273,
        isofficial: false
      },
      {
        language: "Kanuri",
        countrycode: "NGA",
        percentage: 4.0999999046325684,
        isofficial: false
      },
      {
        language: "Tiv",
        countrycode: "NGA",
        percentage: 2.2999999523162842,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "NIC",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Miskito",
        countrycode: "NIC",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "NIC",
        percentage: 97.599998474121094,
        isofficial: true
      },
      {
        language: "Sumo",
        countrycode: "NIC",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "NIU",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Niue",
        countrycode: "NIU",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "NLD",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Dutch",
        countrycode: "NLD",
        percentage: 95.599998474121094,
        isofficial: true
      },
      {
        language: "Fries",
        countrycode: "NLD",
        percentage: 3.7000000476837158,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "NLD",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Danish",
        countrycode: "NOR",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "NOR",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Norwegian",
        countrycode: "NOR",
        percentage: 96.599998474121094,
        isofficial: true
      },
      {
        language: "Saame",
        countrycode: "NOR",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Swedish",
        countrycode: "NOR",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Bhojpuri",
        countrycode: "NPL",
        percentage: 7.5,
        isofficial: false
      },
      {
        language: "Hindi",
        countrycode: "NPL",
        percentage: 3,
        isofficial: false
      },
      {
        language: "Maithili",
        countrycode: "NPL",
        percentage: 11.899999618530273,
        isofficial: false
      },
      {
        language: "Nepali",
        countrycode: "NPL",
        percentage: 50.400001525878906,
        isofficial: true
      },
      {
        language: "Newari",
        countrycode: "NPL",
        percentage: 3.7000000476837158,
        isofficial: false
      },
      {
        language: "Tamang",
        countrycode: "NPL",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Tharu",
        countrycode: "NPL",
        percentage: 5.4000000953674316,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "NRU",
        percentage: 8.5,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "NRU",
        percentage: 7.5,
        isofficial: true
      },
      {
        language: "Kiribati",
        countrycode: "NRU",
        percentage: 17.899999618530273,
        isofficial: false
      },
      {
        language: "Nauru",
        countrycode: "NRU",
        percentage: 57.5,
        isofficial: true
      },
      {
        language: "Tuvalu",
        countrycode: "NRU",
        percentage: 8.5,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "NZL",
        percentage: 87,
        isofficial: true
      },
      {
        language: "Maori",
        countrycode: "NZL",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "OMN",
        percentage: 76.699996948242188,
        isofficial: true
      },
      {
        language: "Balochi",
        countrycode: "OMN",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Balochi",
        countrycode: "PAK",
        percentage: 3,
        isofficial: false
      },
      {
        language: "Brahui",
        countrycode: "PAK",
        percentage: 1.2000000476837158,
        isofficial: false
      },
      {
        language: "Hindko",
        countrycode: "PAK",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Pashto",
        countrycode: "PAK",
        percentage: 13.100000381469727,
        isofficial: false
      },
      {
        language: "Punjabi",
        countrycode: "PAK",
        percentage: 48.200000762939453,
        isofficial: false
      },
      {
        language: "Saraiki",
        countrycode: "PAK",
        percentage: 9.8000001907348633,
        isofficial: false
      },
      {
        language: "Sindhi",
        countrycode: "PAK",
        percentage: 11.800000190734863,
        isofficial: false
      },
      {
        language: "Urdu",
        countrycode: "PAK",
        percentage: 7.5999999046325684,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "PAN",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Creole English",
        countrycode: "PAN",
        percentage: 14,
        isofficial: false
      },
      {
        language: "Cuna",
        countrycode: "PAN",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Embera",
        countrycode: "PAN",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Guaymï¿½",
        countrycode: "PAN",
        percentage: 5.3000001907348633,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "PAN",
        percentage: 76.800003051757812,
        isofficial: true
      },
      {
        language: "Pitcairnese",
        countrycode: "PCN",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Aimarï¿½",
        countrycode: "PER",
        percentage: 2.2999999523162842,
        isofficial: true
      },
      {
        language: "Ketï¿½ua",
        countrycode: "PER",
        percentage: 16.399999618530273,
        isofficial: true
      },
      {
        language: "Spanish",
        countrycode: "PER",
        percentage: 79.800003051757812,
        isofficial: true
      },
      {
        language: "Bicol",
        countrycode: "PHL",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Cebuano",
        countrycode: "PHL",
        percentage: 23.299999237060547,
        isofficial: false
      },
      {
        language: "Hiligaynon",
        countrycode: "PHL",
        percentage: 9.1000003814697266,
        isofficial: false
      },
      {
        language: "Ilocano",
        countrycode: "PHL",
        percentage: 9.3000001907348633,
        isofficial: false
      },
      {
        language: "Maguindanao",
        countrycode: "PHL",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Maranao",
        countrycode: "PHL",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Pampango",
        countrycode: "PHL",
        percentage: 3,
        isofficial: false
      },
      {
        language: "Pangasinan",
        countrycode: "PHL",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Pilipino",
        countrycode: "PHL",
        percentage: 29.299999237060547,
        isofficial: true
      },
      {
        language: "Waray-waray",
        countrycode: "PHL",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "PLW",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "PLW",
        percentage: 3.2000000476837158,
        isofficial: true
      },
      {
        language: "Palau",
        countrycode: "PLW",
        percentage: 82.199996948242188,
        isofficial: true
      },
      {
        language: "Philippene Languages",
        countrycode: "PLW",
        percentage: 9.1999998092651367,
        isofficial: false
      },
      {
        language: "Malenasian Languages",
        countrycode: "PNG",
        percentage: 20,
        isofficial: false
      },
      {
        language: "Papuan Languages",
        countrycode: "PNG",
        percentage: 78.099998474121094,
        isofficial: false
      },
      {
        language: "Belorussian",
        countrycode: "POL",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "POL",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "POL",
        percentage: 97.599998474121094,
        isofficial: true
      },
      {
        language: "Ukrainian",
        countrycode: "POL",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "PRI",
        percentage: 47.400001525878906,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "PRI",
        percentage: 51.299999237060547,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "PRK",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Korean",
        countrycode: "PRK",
        percentage: 99.900001525878906,
        isofficial: true
      },
      {
        language: "Portuguese",
        countrycode: "PRT",
        percentage: 99,
        isofficial: true
      },
      {
        language: "German",
        countrycode: "PRY",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Guaranï¿½",
        countrycode: "PRY",
        percentage: 40.099998474121094,
        isofficial: true
      },
      {
        language: "Portuguese",
        countrycode: "PRY",
        percentage: 3.2000000476837158,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "PRY",
        percentage: 55.099998474121094,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "PSE",
        percentage: 95.900001525878906,
        isofficial: false
      },
      {
        language: "Hebrew",
        countrycode: "PSE",
        percentage: 4.0999999046325684,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "PYF",
        percentage: 2.9000000953674316,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "PYF",
        percentage: 40.799999237060547,
        isofficial: true
      },
      {
        language: "Tahitian",
        countrycode: "PYF",
        percentage: 46.400001525878906,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "QAT",
        percentage: 40.700000762939453,
        isofficial: true
      },
      {
        language: "Urdu",
        countrycode: "QAT",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "REU",
        percentage: 2.7999999523162842,
        isofficial: false
      },
      {
        language: "Comorian",
        countrycode: "REU",
        percentage: 2.7999999523162842,
        isofficial: false
      },
      {
        language: "Creole French",
        countrycode: "REU",
        percentage: 91.5,
        isofficial: false
      },
      {
        language: "Malagasy",
        countrycode: "REU",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Tamil",
        countrycode: "REU",
        percentage: 0,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "ROM",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "ROM",
        percentage: 7.1999998092651367,
        isofficial: false
      },
      {
        language: "Romani",
        countrycode: "ROM",
        percentage: 0.69999998807907104,
        isofficial: true
      },
      {
        language: "Romanian",
        countrycode: "ROM",
        percentage: 90.699996948242188,
        isofficial: true
      },
      {
        language: "Serbo-Croatian",
        countrycode: "ROM",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "ROM",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Avarian",
        countrycode: "RUS",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Bashkir",
        countrycode: "RUS",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Belorussian",
        countrycode: "RUS",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Chechen",
        countrycode: "RUS",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Chuvash",
        countrycode: "RUS",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Kazakh",
        countrycode: "RUS",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Mari",
        countrycode: "RUS",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Mordva",
        countrycode: "RUS",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "RUS",
        percentage: 86.599998474121094,
        isofficial: true
      },
      {
        language: "Tatar",
        countrycode: "RUS",
        percentage: 3.2000000476837158,
        isofficial: false
      },
      {
        language: "Udmur",
        countrycode: "RUS",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "RUS",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "RWA",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Rwanda",
        countrycode: "RWA",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "SAU",
        percentage: 95,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "SDN",
        percentage: 49.400001525878906,
        isofficial: true
      },
      {
        language: "Bari",
        countrycode: "SDN",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Beja",
        countrycode: "SDN",
        percentage: 6.4000000953674316,
        isofficial: false
      },
      {
        language: "Chilluk",
        countrycode: "SDN",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Dinka",
        countrycode: "SDN",
        percentage: 11.5,
        isofficial: false
      },
      {
        language: "Fur",
        countrycode: "SDN",
        percentage: 2.0999999046325684,
        isofficial: false
      },
      {
        language: "Lotuko",
        countrycode: "SDN",
        percentage: 1.5,
        isofficial: false
      },
      {
        language: "Nubian Languages",
        countrycode: "SDN",
        percentage: 8.1000003814697266,
        isofficial: false
      },
      {
        language: "Nuer",
        countrycode: "SDN",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Zande",
        countrycode: "SDN",
        percentage: 2.7000000476837158,
        isofficial: false
      },
      {
        language: "Diola",
        countrycode: "SEN",
        percentage: 5,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "SEN",
        percentage: 21.700000762939453,
        isofficial: false
      },
      {
        language: "Malinke",
        countrycode: "SEN",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Serer",
        countrycode: "SEN",
        percentage: 12.5,
        isofficial: false
      },
      {
        language: "Soninke",
        countrycode: "SEN",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Wolof",
        countrycode: "SEN",
        percentage: 48.099998474121094,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "SGP",
        percentage: 77.099998474121094,
        isofficial: true
      },
      {
        language: "Malay",
        countrycode: "SGP",
        percentage: 14.100000381469727,
        isofficial: true
      },
      {
        language: "Tamil",
        countrycode: "SGP",
        percentage: 7.4000000953674316,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "SHN",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Norwegian",
        countrycode: "SJM",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "SJM",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Malenasian Languages",
        countrycode: "SLB",
        percentage: 85.599998474121094,
        isofficial: false
      },
      {
        language: "Papuan Languages",
        countrycode: "SLB",
        percentage: 8.6000003814697266,
        isofficial: false
      },
      {
        language: "Polynesian Languages",
        countrycode: "SLB",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Bullom-sherbro",
        countrycode: "SLE",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Ful",
        countrycode: "SLE",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Kono-vai",
        countrycode: "SLE",
        percentage: 5.0999999046325684,
        isofficial: false
      },
      {
        language: "Kuranko",
        countrycode: "SLE",
        percentage: 3.4000000953674316,
        isofficial: false
      },
      {
        language: "Limba",
        countrycode: "SLE",
        percentage: 8.3000001907348633,
        isofficial: false
      },
      {
        language: "Mende",
        countrycode: "SLE",
        percentage: 34.799999237060547,
        isofficial: false
      },
      {
        language: "Temne",
        countrycode: "SLE",
        percentage: 31.799999237060547,
        isofficial: false
      },
      {
        language: "Yalunka",
        countrycode: "SLE",
        percentage: 3.4000000953674316,
        isofficial: false
      },
      {
        language: "Nahua",
        countrycode: "SLV",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "SLV",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "SMR",
        percentage: 100,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "SOM",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Somali",
        countrycode: "SOM",
        percentage: 98.300003051757812,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "SPM",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Crioulo",
        countrycode: "STP",
        percentage: 86.300003051757812,
        isofficial: false
      },
      {
        language: "French",
        countrycode: "STP",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Hindi",
        countrycode: "SUR",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Sranantonga",
        countrycode: "SUR",
        percentage: 81,
        isofficial: false
      },
      {
        language: "Czech and Moravian",
        countrycode: "SVK",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "SVK",
        percentage: 10.5,
        isofficial: false
      },
      {
        language: "Romani",
        countrycode: "SVK",
        percentage: 1.7000000476837158,
        isofficial: false
      },
      {
        language: "Slovak",
        countrycode: "SVK",
        percentage: 85.599998474121094,
        isofficial: true
      },
      {
        language: "Ukrainian and Russian",
        countrycode: "SVK",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "SVN",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "SVN",
        percentage: 7.9000000953674316,
        isofficial: false
      },
      {
        language: "Slovene",
        countrycode: "SVN",
        percentage: 87.900001525878906,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "SWE",
        percentage: 0.80000001192092896,
        isofficial: false
      },
      {
        language: "Finnish",
        countrycode: "SWE",
        percentage: 2.4000000953674316,
        isofficial: false
      },
      {
        language: "Norwegian",
        countrycode: "SWE",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Southern Slavic Languages",
        countrycode: "SWE",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "SWE",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Swedish",
        countrycode: "SWE",
        percentage: 89.5,
        isofficial: true
      },
      {
        language: "Swazi",
        countrycode: "SWZ",
        percentage: 89.900001525878906,
        isofficial: true
      },
      {
        language: "Zulu",
        countrycode: "SWZ",
        percentage: 2,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "SYC",
        percentage: 3.7999999523162842,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "SYC",
        percentage: 1.2999999523162842,
        isofficial: true
      },
      {
        language: "Seselwa",
        countrycode: "SYC",
        percentage: 91.300003051757812,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "SYR",
        percentage: 90,
        isofficial: true
      },
      {
        language: "Kurdish",
        countrycode: "SYR",
        percentage: 9,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "TCA",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Arabic",
        countrycode: "TCD",
        percentage: 12.300000190734863,
        isofficial: true
      },
      {
        language: "Gorane",
        countrycode: "TCD",
        percentage: 6.1999998092651367,
        isofficial: false
      },
      {
        language: "Hadjarai",
        countrycode: "TCD",
        percentage: 6.6999998092651367,
        isofficial: false
      },
      {
        language: "Kanem-bornu",
        countrycode: "TCD",
        percentage: 9,
        isofficial: false
      },
      {
        language: "Mayo-kebbi",
        countrycode: "TCD",
        percentage: 11.5,
        isofficial: false
      },
      {
        language: "Ouaddai",
        countrycode: "TCD",
        percentage: 8.6999998092651367,
        isofficial: false
      },
      {
        language: "Sara",
        countrycode: "TCD",
        percentage: 27.700000762939453,
        isofficial: false
      },
      {
        language: "Tandjile",
        countrycode: "TCD",
        percentage: 6.5,
        isofficial: false
      },
      {
        language: "Ane",
        countrycode: "TGO",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Ewe",
        countrycode: "TGO",
        percentage: 23.200000762939453,
        isofficial: true
      },
      {
        language: "Gurma",
        countrycode: "TGO",
        percentage: 3.4000000953674316,
        isofficial: false
      },
      {
        language: "Kabyï¿½",
        countrycode: "TGO",
        percentage: 13.800000190734863,
        isofficial: true
      },
      {
        language: "Kotokoli",
        countrycode: "TGO",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Moba",
        countrycode: "TGO",
        percentage: 5.4000000953674316,
        isofficial: false
      },
      {
        language: "Naudemba",
        countrycode: "TGO",
        percentage: 4.0999999046325684,
        isofficial: false
      },
      {
        language: "Watyi",
        countrycode: "TGO",
        percentage: 10.300000190734863,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "THA",
        percentage: 12.100000381469727,
        isofficial: false
      },
      {
        language: "Khmer",
        countrycode: "THA",
        percentage: 1.2999999523162842,
        isofficial: false
      },
      {
        language: "Kuy",
        countrycode: "THA",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "Lao",
        countrycode: "THA",
        percentage: 26.899999618530273,
        isofficial: false
      },
      {
        language: "Malay",
        countrycode: "THA",
        percentage: 3.5999999046325684,
        isofficial: false
      },
      {
        language: "Thai",
        countrycode: "THA",
        percentage: 52.599998474121094,
        isofficial: true
      },
      {
        language: "Russian",
        countrycode: "TJK",
        percentage: 9.6999998092651367,
        isofficial: false
      },
      {
        language: "Tadzhik",
        countrycode: "TJK",
        percentage: 62.200000762939453,
        isofficial: true
      },
      {
        language: "Uzbek",
        countrycode: "TJK",
        percentage: 23.200000762939453,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "TKL",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Tokelau",
        countrycode: "TKL",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Kazakh",
        countrycode: "TKM",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "TKM",
        percentage: 6.6999998092651367,
        isofficial: false
      },
      {
        language: "Turkmenian",
        countrycode: "TKM",
        percentage: 76.699996948242188,
        isofficial: true
      },
      {
        language: "Uzbek",
        countrycode: "TKM",
        percentage: 9.1999998092651367,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "TMP",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Sunda",
        countrycode: "TMP",
        percentage: 0,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "TON",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Tongan",
        countrycode: "TON",
        percentage: 98.300003051757812,
        isofficial: true
      },
      {
        language: "Creole English",
        countrycode: "TTO",
        percentage: 2.9000000953674316,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "TTO",
        percentage: 93.5,
        isofficial: false
      },
      {
        language: "Hindi",
        countrycode: "TTO",
        percentage: 3.4000000953674316,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "TUN",
        percentage: 69.900001525878906,
        isofficial: true
      },
      {
        language: "Arabic-French",
        countrycode: "TUN",
        percentage: 26.299999237060547,
        isofficial: false
      },
      {
        language: "Arabic-French-English",
        countrycode: "TUN",
        percentage: 3.2000000476837158,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "TUR",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Kurdish",
        countrycode: "TUR",
        percentage: 10.600000381469727,
        isofficial: false
      },
      {
        language: "Turkish",
        countrycode: "TUR",
        percentage: 87.599998474121094,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "TUV",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Kiribati",
        countrycode: "TUV",
        percentage: 7.5,
        isofficial: false
      },
      {
        language: "Tuvalu",
        countrycode: "TUV",
        percentage: 92.5,
        isofficial: true
      },
      {
        language: "Ami",
        countrycode: "TWN",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Atayal",
        countrycode: "TWN",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Hakka",
        countrycode: "TWN",
        percentage: 11,
        isofficial: false
      },
      {
        language: "Mandarin Chinese",
        countrycode: "TWN",
        percentage: 20.100000381469727,
        isofficial: true
      },
      {
        language: "Min",
        countrycode: "TWN",
        percentage: 66.699996948242188,
        isofficial: false
      },
      {
        language: "Paiwan",
        countrycode: "TWN",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Chaga and Pare",
        countrycode: "TZA",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Gogo",
        countrycode: "TZA",
        percentage: 3.9000000953674316,
        isofficial: false
      },
      {
        language: "Ha",
        countrycode: "TZA",
        percentage: 3.5,
        isofficial: false
      },
      {
        language: "Haya",
        countrycode: "TZA",
        percentage: 5.9000000953674316,
        isofficial: false
      },
      {
        language: "Hehet",
        countrycode: "TZA",
        percentage: 6.9000000953674316,
        isofficial: false
      },
      {
        language: "Luguru",
        countrycode: "TZA",
        percentage: 4.9000000953674316,
        isofficial: false
      },
      {
        language: "Makonde",
        countrycode: "TZA",
        percentage: 5.9000000953674316,
        isofficial: false
      },
      {
        language: "Nyakusa",
        countrycode: "TZA",
        percentage: 5.4000000953674316,
        isofficial: false
      },
      {
        language: "Nyamwesi",
        countrycode: "TZA",
        percentage: 21.100000381469727,
        isofficial: false
      },
      {
        language: "Shambala",
        countrycode: "TZA",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Swahili",
        countrycode: "TZA",
        percentage: 8.8000001907348633,
        isofficial: true
      },
      {
        language: "Acholi",
        countrycode: "UGA",
        percentage: 4.4000000953674316,
        isofficial: false
      },
      {
        language: "Ganda",
        countrycode: "UGA",
        percentage: 18.100000381469727,
        isofficial: false
      },
      {
        language: "Gisu",
        countrycode: "UGA",
        percentage: 4.5,
        isofficial: false
      },
      {
        language: "Kiga",
        countrycode: "UGA",
        percentage: 8.3000001907348633,
        isofficial: false
      },
      {
        language: "Lango",
        countrycode: "UGA",
        percentage: 5.9000000953674316,
        isofficial: false
      },
      {
        language: "Lugbara",
        countrycode: "UGA",
        percentage: 4.6999998092651367,
        isofficial: false
      },
      {
        language: "Nkole",
        countrycode: "UGA",
        percentage: 10.699999809265137,
        isofficial: false
      },
      {
        language: "Rwanda",
        countrycode: "UGA",
        percentage: 3.2000000476837158,
        isofficial: false
      },
      {
        language: "Soga",
        countrycode: "UGA",
        percentage: 8.1999998092651367,
        isofficial: false
      },
      {
        language: "Teso",
        countrycode: "UGA",
        percentage: 6,
        isofficial: false
      },
      {
        language: "Belorussian",
        countrycode: "UKR",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Bulgariana",
        countrycode: "UKR",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "UKR",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "UKR",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "Romanian",
        countrycode: "UKR",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "UKR",
        percentage: 32.900001525878906,
        isofficial: false
      },
      {
        language: "Ukrainian",
        countrycode: "UKR",
        percentage: 64.699996948242188,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "UMI",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Spanish",
        countrycode: "URY",
        percentage: 95.699996948242188,
        isofficial: true
      },
      {
        language: "Chinese",
        countrycode: "USA",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "USA",
        percentage: 86.199996948242188,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "USA",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "German",
        countrycode: "USA",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Italian",
        countrycode: "USA",
        percentage: 0.60000002384185791,
        isofficial: false
      },
      {
        language: "Japanese",
        countrycode: "USA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Korean",
        countrycode: "USA",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Polish",
        countrycode: "USA",
        percentage: 0.30000001192092896,
        isofficial: false
      },
      {
        language: "Portuguese",
        countrycode: "USA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "USA",
        percentage: 7.5,
        isofficial: false
      },
      {
        language: "Tagalog",
        countrycode: "USA",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Vietnamese",
        countrycode: "USA",
        percentage: 0.20000000298023224,
        isofficial: false
      },
      {
        language: "Karakalpak",
        countrycode: "UZB",
        percentage: 2,
        isofficial: false
      },
      {
        language: "Kazakh",
        countrycode: "UZB",
        percentage: 3.7999999523162842,
        isofficial: false
      },
      {
        language: "Russian",
        countrycode: "UZB",
        percentage: 10.899999618530273,
        isofficial: false
      },
      {
        language: "Tadzhik",
        countrycode: "UZB",
        percentage: 4.4000000953674316,
        isofficial: false
      },
      {
        language: "Tatar",
        countrycode: "UZB",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Uzbek",
        countrycode: "UZB",
        percentage: 72.599998474121094,
        isofficial: true
      },
      {
        language: "Italian",
        countrycode: "VAT",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Creole English",
        countrycode: "VCT",
        percentage: 99.099998474121094,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "VCT",
        percentage: 0,
        isofficial: true
      },
      {
        language: "Goajiro",
        countrycode: "VEN",
        percentage: 0.40000000596046448,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "VEN",
        percentage: 96.900001525878906,
        isofficial: true
      },
      {
        language: "Warrau",
        countrycode: "VEN",
        percentage: 0.10000000149011612,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "VGB",
        percentage: 0,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "VIR",
        percentage: 81.699996948242188,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "VIR",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Spanish",
        countrycode: "VIR",
        percentage: 13.300000190734863,
        isofficial: false
      },
      {
        language: "Chinese",
        countrycode: "VNM",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Khmer",
        countrycode: "VNM",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Man",
        countrycode: "VNM",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Miao",
        countrycode: "VNM",
        percentage: 0.89999997615814209,
        isofficial: false
      },
      {
        language: "Muong",
        countrycode: "VNM",
        percentage: 1.5,
        isofficial: false
      },
      {
        language: "Nung",
        countrycode: "VNM",
        percentage: 1.1000000238418579,
        isofficial: false
      },
      {
        language: "Thai",
        countrycode: "VNM",
        percentage: 1.6000000238418579,
        isofficial: false
      },
      {
        language: "Tho",
        countrycode: "VNM",
        percentage: 1.7999999523162842,
        isofficial: false
      },
      {
        language: "Vietnamese",
        countrycode: "VNM",
        percentage: 86.800003051757812,
        isofficial: true
      },
      {
        language: "Bislama",
        countrycode: "VUT",
        percentage: 56.599998474121094,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "VUT",
        percentage: 28.299999237060547,
        isofficial: true
      },
      {
        language: "French",
        countrycode: "VUT",
        percentage: 14.199999809265137,
        isofficial: true
      },
      {
        language: "Futuna",
        countrycode: "WLF",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Wallis",
        countrycode: "WLF",
        percentage: 0,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "WSM",
        percentage: 0.60000002384185791,
        isofficial: true
      },
      {
        language: "Samoan",
        countrycode: "WSM",
        percentage: 47.5,
        isofficial: true
      },
      {
        language: "Samoan-English",
        countrycode: "WSM",
        percentage: 52,
        isofficial: false
      },
      {
        language: "Arabic",
        countrycode: "YEM",
        percentage: 99.599998474121094,
        isofficial: true
      },
      {
        language: "Soqutri",
        countrycode: "YEM",
        percentage: 0,
        isofficial: false
      },
      {
        language: "Albaniana",
        countrycode: "YUG",
        percentage: 16.5,
        isofficial: false
      },
      {
        language: "Hungarian",
        countrycode: "YUG",
        percentage: 3.4000000953674316,
        isofficial: false
      },
      {
        language: "Macedonian",
        countrycode: "YUG",
        percentage: 0.5,
        isofficial: false
      },
      {
        language: "Romani",
        countrycode: "YUG",
        percentage: 1.3999999761581421,
        isofficial: false
      },
      {
        language: "Serbo-Croatian",
        countrycode: "YUG",
        percentage: 75.199996948242188,
        isofficial: true
      },
      {
        language: "Slovak",
        countrycode: "YUG",
        percentage: 0.69999998807907104,
        isofficial: false
      },
      {
        language: "Afrikaans",
        countrycode: "ZAF",
        percentage: 14.300000190734863,
        isofficial: true
      },
      {
        language: "English",
        countrycode: "ZAF",
        percentage: 8.5,
        isofficial: true
      },
      {
        language: "Ndebele",
        countrycode: "ZAF",
        percentage: 1.5,
        isofficial: false
      },
      {
        language: "Northsotho",
        countrycode: "ZAF",
        percentage: 9.1000003814697266,
        isofficial: false
      },
      {
        language: "Southsotho",
        countrycode: "ZAF",
        percentage: 7.5999999046325684,
        isofficial: false
      },
      {
        language: "Swazi",
        countrycode: "ZAF",
        percentage: 2.5,
        isofficial: false
      },
      {
        language: "Tsonga",
        countrycode: "ZAF",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Tswana",
        countrycode: "ZAF",
        percentage: 8.1000003814697266,
        isofficial: false
      },
      {
        language: "Venda",
        countrycode: "ZAF",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Xhosa",
        countrycode: "ZAF",
        percentage: 17.700000762939453,
        isofficial: true
      },
      {
        language: "Zulu",
        countrycode: "ZAF",
        percentage: 22.700000762939453,
        isofficial: true
      },
      {
        language: "Bemba",
        countrycode: "ZMB",
        percentage: 29.700000762939453,
        isofficial: false
      },
      {
        language: "Chewa",
        countrycode: "ZMB",
        percentage: 5.6999998092651367,
        isofficial: false
      },
      {
        language: "Lozi",
        countrycode: "ZMB",
        percentage: 6.4000000953674316,
        isofficial: false
      },
      {
        language: "Nsenga",
        countrycode: "ZMB",
        percentage: 4.3000001907348633,
        isofficial: false
      },
      {
        language: "Nyanja",
        countrycode: "ZMB",
        percentage: 7.8000001907348633,
        isofficial: false
      },
      {
        language: "Tongan",
        countrycode: "ZMB",
        percentage: 11,
        isofficial: false
      },
      {
        language: "English",
        countrycode: "ZWE",
        percentage: 2.2000000476837158,
        isofficial: true
      },
      {
        language: "Ndebele",
        countrycode: "ZWE",
        percentage: 16.200000762939453,
        isofficial: false
      },
      {
        language: "Nyanja",
        countrycode: "ZWE",
        percentage: 2.2000000476837158,
        isofficial: false
      },
      {
        language: "Shona",
        countrycode: "ZWE",
        percentage: 72.099998474121094,
        isofficial: false
      }
    ];

    return queryInterface.bulkInsert(
      "country_language",
      languages.map(language => {
        return { ...language, created_at: new Date(), updated_at: new Date() };
      }),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("country_language", null, {});
  }
};
