import { getHotelPrice, getFlightPrice } from "../utils/priceUtils.js";

const today = new Date();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const countryData = [
 /* 1. Australia */
  {
    code: "AU",
    country: "Australia",
    cities: [
      {
        name: "Sydney",
        airport: "Sydney Kingsford Smith Airport (SYD)",
        hotels: [
          { name: "Shangri-La Hotel, Sydney", price: getRandomInt(2500, 35000) },
          { name: "Park Hyatt Sydney", price: getRandomInt(2500, 35000) },
          { name: "The Fullerton Hotel Sydney", price: getRandomInt(2500, 35000) },
          { name: "InterContinental Sydney", price: getRandomInt(2500, 35000) },
          { name: "Sofitel Sydney Darling Harbour", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Qantas", airlineCode: "QF", flightNumber: "QF400", dep: "07:00", arr: "09:50", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "MEL" },
          { airline: "Virgin Australia", airlineCode: "VA", flightNumber: "VA120", dep: "08:30", arr: "11:10", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "BNE" },
          { airline: "Air New Zealand", airlineCode: "NZ", flightNumber: "NZ900", dep: "10:00", arr: "16:20", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "AKL" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK414", dep: "12:00", arr: "22:00", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR906", dep: "13:30", arr: "23:40", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "DOH" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ208", dep: "15:00", arr: "01:15", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "SIN" },
          { airline: "Cathay Pacific", airlineCode: "CX", flightNumber: "CX150", dep: "18:20", arr: "04:10", price: getRandomInt(25000, 350000), fromAirport: "SYD", toAirport: "HKG" }
        ]
      },
      {
        name: "Melbourne",
        airport: "Melbourne Tullamarine Airport (MEL)",
        hotels: [
          { name: "Crown Towers", price: getRandomInt(2500, 35000) },
          { name: "Park Hyatt Melbourne", price: getRandomInt(2500, 35000) },
          { name: "Langham Melbourne", price: getRandomInt(2500, 35000) },
          { name: "Grand Hyatt Melbourne", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Qantas", airlineCode: "QF", flightNumber: "QF600", dep: "06:00", arr: "08:05", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "SYD" },
          { airline: "Virgin Australia", airlineCode: "VA", flightNumber: "VA332", dep: "09:00", arr: "11:10", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "BNE" },
          { airline: "Jetstar", airlineCode: "JQ", flightNumber: "JQ210", dep: "12:30", arr: "14:40", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "OOL" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ246", dep: "13:45", arr: "23:10", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "SIN" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK408", dep: "16:00", arr: "02:10", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "DXB" },
          { airline: "Cathay Pacific", airlineCode: "CX", flightNumber: "CX142", dep: "18:00", arr: "04:05", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "HKG" },
          { airline: "Air New Zealand", airlineCode: "NZ", flightNumber: "NZ612", dep: "20:00", arr: "22:30", price: getRandomInt(25000, 350000), fromAirport: "MEL", toAirport: "AKL" }
        ]
      },
      {
        name: "Brisbane",
        airport: "Brisbane Airport (BNE)",
        hotels: [
          { name: "W Brisbane", price: getRandomInt(2500, 35000) },
          { name: "Emporium Hotel", price: getRandomInt(2500, 35000) },
          { name: "Treasury Brisbane", price: getRandomInt(2500, 35000) },
          { name: "Rydges South Bank", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Virgin Australia", airlineCode: "VA", flightNumber: "VA101", dep: "07:30", arr: "09:20", price: getRandomInt(25000, 350000), fromAirport: "BNE", toAirport: "SYD" },
          { airline: "Qantas", airlineCode: "QF", flightNumber: "QF210", dep: "10:00", arr: "12:00", price: getRandomInt(25000, 350000), fromAirport: "BNE", toAirport: "MEL" },
          { airline: "Air New Zealand", airlineCode: "NZ", flightNumber: "NZ300", dep: "13:00", arr: "19:30", price: getRandomInt(25000, 350000), fromAirport: "BNE", toAirport: "AKL" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ240", dep: "15:00", arr: "23:30", price: getRandomInt(25000, 350000), fromAirport: "BNE", toAirport: "SIN" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK412", dep: "17:30", arr: "03:00", price: getRandomInt(25000, 350000), fromAirport: "BNE", toAirport: "DXB" }
        ]
      }
    ]
  },

 /* 2. Brazil */
  {
    code: "BR",
    country: "Brazil",
    cities: [
      {
        name: "São Paulo",
        airport: "São Paulo–Guarulhos International Airport (GRU)",
        hotels: [
          { name: "Hotel Unique", price: getRandomInt(2500, 35000) },
          { name: "Tivoli Mofarrej", price: getRandomInt(2500, 35000) },
          { name: "Sheraton São Paulo WTC", price: getRandomInt(2500, 35000) },
          { name: "Hilton São Paulo Morumbi", price: getRandomInt(2500, 35000) },
          { name: "Radisson Blu São Paulo", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "LATAM Brasil", airlineCode: "LA", flightNumber: "LA401", dep: "06:00", arr: "08:20", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "RIO" },
          { airline: "Gol Linhas Aéreas", airlineCode: "G3", flightNumber: "G3401", dep: "07:30", arr: "09:45", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "REC" },
          { airline: "Avianca Brazil", airlineCode: "O6", flightNumber: "O6102", dep: "10:00", arr: "12:20", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "BSB" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK247", dep: "12:00", arr: "02:00", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "DXB" },
          { airline: "LATAM", airlineCode: "LA", flightNumber: "LA902", dep: "14:00", arr: "18:30", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "SCL" },
          { airline: "Iberia", airlineCode: "IB", flightNumber: "IB401", dep: "16:30", arr: "06:50", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "MAD" },
          { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA900", dep: "19:00", arr: "01:30", price: getRandomInt(25000, 350000), fromAirport: "GRU", toAirport: "MIA" }
        ]
      },
      {
        name: "Rio de Janeiro",
        airport: "Galeão International Airport (GIG)",
        hotels: [
          { name: "Belmond Copacabana Palace", price: getRandomInt(2500, 35000) },
          { name: "Hotel Fasano Rio de Janeiro", price: getRandomInt(2500, 35000) },
          { name: "PortoBay Rio Internacional", price: getRandomInt(2500, 35000) },
          { name: "Hilton Copacabana", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Gol Linhas Aéreas", airlineCode: "G3", flightNumber: "G301", dep: "06:30", arr: "08:20", price: getRandomInt(25000, 350000), fromAirport: "GIG", toAirport: "GRU" },
          { airline: "LATAM", airlineCode: "LA", flightNumber: "LA605", dep: "09:30", arr: "11:45", price: getRandomInt(25000, 350000), fromAirport: "GIG", toAirport: "BSB" },
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF424", dep: "14:00", arr: "04:00", price: getRandomInt(25000, 350000), fromAirport: "GIG", toAirport: "CDG" },
          { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA110", dep: "18:00", arr: "00:30", price: getRandomInt(25000, 350000), fromAirport: "GIG", toAirport: "MIA" }
        ]
      },
      {
        name: "Brasília",
        airport: "Brasília International Airport (BSB)",
        hotels: [
          { name: "B Hotel Brasília", price: getRandomInt(2500, 35000) },
          { name: "Bristol Union Hotel", price: getRandomInt(2500, 35000) },
          { name: "Royal Tulip Brasília Alvorada", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "LATAM", airlineCode: "LA", flightNumber: "LA201", dep: "07:00", arr: "09:00", price: getRandomInt(25000, 350000), fromAirport: "BSB", toAirport: "GRU" },
          { airline: "Gol", airlineCode: "G3", flightNumber: "G305", dep: "10:30", arr: "12:30", price: getRandomInt(25000, 350000), fromAirport: "BSB", toAirport: "GIG" },
          { airline: "Azul", airlineCode: "AD", flightNumber: "AD120", dep: "13:00", arr: "15:00", price: getRandomInt(25000, 350000), fromAirport: "BSB", toAirport: "REC" }
        ]
      }
    ]
  },

  /* 3. Canada */
  {
    code: "CA",
    country: "Canada",
    cities: [
      {
        name: "Toronto",
        airport: "Toronto Pearson International Airport (YYZ)",
        hotels: [
          { name: "Fairmont Royal York", price: getRandomInt(2500, 35000) },
          { name: "The Ritz-Carlton, Toronto", price: getRandomInt(2500, 35000) },
          { name: "Shangri-La Toronto", price: getRandomInt(2500, 35000) },
          { name: "Delta Toronto", price: getRandomInt(2500, 35000) },
          { name: "Hilton Toronto", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air Canada", airlineCode: "AC", flightNumber: "AC801", dep: "07:00", arr: "09:30", price: getRandomInt(25000, 350000), fromAirport: "YYZ", toAirport: "YVR" },
          { airline: "WestJet", airlineCode: "WS", flightNumber: "WS501", dep: "09:30", arr: "12:00", price: getRandomInt(25000, 350000), fromAirport: "YYZ", toAirport: "YYC" },
          { airline: "Air Canada", airlineCode: "AC", flightNumber: "AC700", dep: "11:00", arr: "19:30", price: getRandomInt(25000, 350000), fromAirport: "YYZ", toAirport: "LHR" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA85", dep: "14:00", arr: "02:30", price: getRandomInt(25000, 350000), fromAirport: "YYZ", toAirport: "LHR" },
          { airline: "Air Canada", airlineCode: "AC", flightNumber: "AC902", dep: "17:00", arr: "21:30", price: getRandomInt(25000, 350000), fromAirport: "YYZ", toAirport: "JFK" }
        ]
      },
      {
        name: "Vancouver",
        airport: "Vancouver International Airport (YVR)",
        hotels: [
          { name: "Fairmont Pacific Rim", price: getRandomInt(2500, 35000) },
          { name: "Rosewood Hotel Georgia", price: getRandomInt(2500, 35000) },
          { name: "Pan Pacific Vancouver", price: getRandomInt(2500, 35000) },
          { name: "The Sutton Place", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air Canada", airlineCode: "AC", flightNumber: "AC880", dep: "08:00", arr: "10:40", price: getRandomInt(25000, 350000), fromAirport: "YVR", toAirport: "YYZ" },
          { airline: "WestJet", airlineCode: "WS", flightNumber: "WS110", dep: "11:00", arr: "13:45", price: getRandomInt(25000, 350000), fromAirport: "YVR", toAirport: "YYC" },
          { airline: "Air Canada", airlineCode: "AC", flightNumber: "AC25", dep: "13:00", arr: "07:00", price: getRandomInt(25000, 350000), fromAirport: "YVR", toAirport: "LHR" }
        ]
      },
      {
        name: "Montreal",
        airport: "Montréal–Pierre Elliott Trudeau International Airport (YUL)",
        hotels: [
          { name: "Fairmont The Queen Elizabeth", price: getRandomInt(2500, 35000) },
          { name: "Hotel Le St-James", price: getRandomInt(2500, 35000) },
          { name: "Le Centre Sheraton Montreal", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air Canada", airlineCode: "AC", flightNumber: "AC810", dep: "06:30", arr: "08:30", price: getRandomInt(25000, 350000), fromAirport: "YUL", toAirport: "YYZ" },
          { airline: "Air Transat", airlineCode: "TS", flightNumber: "TS300", dep: "10:00", arr: "14:00", price: getRandomInt(25000, 350000), fromAirport: "YUL", toAirport: "PAR" }
        ]
      }
    ]
  },

 /* 4. China */
  {
    code: "CN",
    country: "China",
    cities: [
      {
        name: "Beijing",
        airport: "Beijing Capital International Airport (PEK)",
        hotels: [
          { name: "The Peninsula Beijing", price: getRandomInt(2500, 35000) },
          { name: "W Beijing", price: getRandomInt(2500, 35000) },
          { name: "Rosewood Beijing", price: getRandomInt(2500, 35000) },
          { name: "Grand Hyatt Beijing", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air China", airlineCode: "CA", flightNumber: "CA150", dep: "07:00", arr: "09:00", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "PVG" },
          { airline: "China Eastern", airlineCode: "MU", flightNumber: "MU510", dep: "09:30", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "PVG" },
          { airline: "Hainan Airlines", airlineCode: "HU", flightNumber: "HU700", dep: "12:00", arr: "14:00", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "CAN" },
          { airline: "Cathay Pacific", airlineCode: "CX", flightNumber: "CX350", dep: "14:30", arr: "19:30", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "HKG" },
          { airline: "Air China", airlineCode: "CA", flightNumber: "CA983", dep: "17:00", arr: "23:50", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "LAX" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK306", dep: "19:30", arr: "03:30", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "DXB" },
          { airline: "Japan Airlines", airlineCode: "JL", flightNumber: "JL70", dep: "21:00", arr: "01:30", price: getRandomInt(25000, 350000), fromAirport: "PEK", toAirport: "NRT" }
        ]
      },
      {
        name: "Shanghai",
        airport: "Shanghai Pudong International Airport (PVG)",
        hotels: [
          { name: "The Peninsula Shanghai", price: getRandomInt(2500, 35000) },
          { name: "W Shanghai - The Bund", price: getRandomInt(2500, 35000) },
          { name: "Four Seasons Shanghai", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "China Eastern", airlineCode: "MU", flightNumber: "MU200", dep: "08:00", arr: "10:00", price: getRandomInt(25000, 350000), fromAirport: "PVG", toAirport: "PEK" },
          { airline: "Shanghai Airlines", airlineCode: "FM", flightNumber: "FM320", dep: "12:00", arr: "14:00", price: getRandomInt(25000, 350000), fromAirport: "PVG", toAirport: "CAN" },
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF168", dep: "13:30", arr: "07:30", price: getRandomInt(25000, 350000), fromAirport: "PVG", toAirport: "CDG" }
        ]
      },
      {
        name: "Guangzhou",
        airport: "Guangzhou Baiyun International Airport (CAN)",
        hotels: [
          { name: "Sofitel Guangzhou Sunrich", price: getRandomInt(2500, 35000) },
          { name: "Shangri-La Guangzhou", price: getRandomInt(2500, 35000) },
          { name: "Four Seasons Guangzhou", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "China Southern", airlineCode: "CZ", flightNumber: "CZ310", dep: "06:30", arr: "08:45", price: getRandomInt(25000, 350000), fromAirport: "CAN", toAirport: "HKG" },
          { airline: "Cathay Pacific", airlineCode: "CX", flightNumber: "CX388", dep: "10:00", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "CAN", toAirport: "PVG" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK305", dep: "16:00", arr: "02:00", price: getRandomInt(25000, 350000), fromAirport: "CAN", toAirport: "DXB" }
        ]
      }
    ]
  },

  /* 5. Egypt */
  {
    code: "EG",
    country: "Egypt",
    cities: [
      {
        name: "Cairo",
        airport: "Cairo International Airport (CAI)",
        hotels: [
          { name: "Marriott Mena House", price: getRandomInt(2500, 35000) },
          { name: "Four Seasons Cairo", price: getRandomInt(2500, 35000) },
          { name: "Kempinski Nile Hotel", price: getRandomInt(2500, 35000) },
          { name: "Sofitel Cairo Nile El Gezirah", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "EgyptAir", airlineCode: "MS", flightNumber: "MS300", dep: "06:00", arr: "08:30", price: getRandomInt(25000, 350000), fromAirport: "CAI", toAirport: "JED" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK927", dep: "09:00", arr: "10:30", price: getRandomInt(25000, 350000), fromAirport: "CAI", toAirport: "DXB" },
          { airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK690", dep: "12:00", arr: "14:45", price: getRandomInt(25000, 350000), fromAirport: "CAI", toAirport: "IST" },
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH350", dep: "16:30", arr: "21:30", price: getRandomInt(25000, 350000), fromAirport: "CAI", toAirport: "FRA" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA180", dep: "19:00", arr: "23:00", price: getRandomInt(25000, 350000), fromAirport: "CAI", toAirport: "LHR" }
        ]
      },
      {
        name: "Alexandria",
        airport: "Borg El Arab Airport (HBE)",
        hotels: [
          { name: "Steigenberger Cecil Alexandria", price: getRandomInt(2500, 35000) },
          { name: "Helnan Palestine Hotel", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "EgyptAir", airlineCode: "MS", flightNumber: "MS700", dep: "08:00", arr: "09:20", price: getRandomInt(25000, 350000), fromAirport: "HBE", toAirport: "CAI" },
          { airline: "EgyptAir", airlineCode: "MS", flightNumber: "MS701", dep: "11:00", arr: "12:20", price: getRandomInt(25000, 350000), fromAirport: "HBE", toAirport: "HRG" }
        ]
      },
      {
        name: "Hurghada",
        airport: "Hurghada International Airport (HRG)",
        hotels: [
          { name: "Steigenberger Al Dau Beach Hotel", price: getRandomInt(2500, 35000) },
          { name: "Jaz Aquamarine", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air Arabia Egypt", airlineCode: "E3", flightNumber: "E3701", dep: "07:30", arr: "08:45", price: getRandomInt(25000, 350000), fromAirport: "HRG", toAirport: "CAI" },
          { airline: "EgyptAir", airlineCode: "MS", flightNumber: "MS710", dep: "13:00", arr: "14:20", price: getRandomInt(25000, 350000), fromAirport: "HRG", toAirport: "HBE" }
        ]
      }
    ]
  },

 /* 6. France */
  {
    code: "FR",
    country: "France",
    cities: [
      {
        name: "Paris",
        airport: "Charles de Gaulle Airport (CDG)",
        hotels: [
          { name: "Hotel Le Meurice", price: getRandomInt(2500, 35000) },
          { name: "Ritz Paris", price: getRandomInt(2500, 35000) },
          { name: "Shangri-La Hotel Paris", price: getRandomInt(2500, 35000) },
          { name: "Four Seasons Hotel George V", price: getRandomInt(2500, 35000) },
          { name: "Le Bristol Paris", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF108", dep: "07:00", arr: "09:30", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "LHR" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA304", dep: "09:30", arr: "10:50", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "LHR" },
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH101", dep: "11:00", arr: "13:30", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "FRA" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK72", dep: "13:00", arr: "23:30", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "DXB" },
          { airline: "Delta", airlineCode: "DL", flightNumber: "DL200", dep: "15:30", arr: "18:10", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "JFK" },
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF22", dep: "19:00", arr: "21:30", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "NCE" },
          { airline: "KLM", airlineCode: "KL", flightNumber: "KL135", dep: "21:00", arr: "22:20", price: getRandomInt(25000, 350000), fromAirport: "CDG", toAirport: "AMS" }
        ]
      },
      {
        name: "Nice",
        airport: "Nice Côte d'Azur Airport (NCE)",
        hotels: [
          { name: "Hotel Negresco", price: getRandomInt(2500, 35000) },
          { name: "Hyatt Regency Nice", price: getRandomInt(2500, 35000) },
          { name: "Le Meridien Nice", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF700", dep: "08:00", arr: "09:10", price: getRandomInt(25000, 350000), fromAirport: "NCE", toAirport: "CDG" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA820", dep: "11:00", arr: "12:10", price: getRandomInt(25000, 350000), fromAirport: "NCE", toAirport: "LHR" },
          { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2810", dep: "14:30", arr: "15:40", price: getRandomInt(25000, 350000), fromAirport: "NCE", toAirport: "MAN" }
        ]
      },
      {
        name: "Lyon",
        airport: "Lyon–Saint-Exupéry Airport (LYS)",
        hotels: [
          { name: "Hotel Le Royal Lyon", price: getRandomInt(2500, 35000) },
          { name: "Cour des Loges", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF820", dep: "06:30", arr: "07:50", price: getRandomInt(25000, 350000), fromAirport: "LYS", toAirport: "CDG" },
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH506", dep: "09:00", arr: "11:20", price: getRandomInt(25000, 350000), fromAirport: "LYS", toAirport: "FRA" }
        ]
      }
    ]
  },

  /* 7. Germany */
  {
    code: "DE",
    country: "Germany",
    cities: [
      {
        name: "Berlin",
        airport: "Berlin Brandenburg Airport (BER)",
        hotels: [
          { name: "Hotel Adlon Kempinski", price: getRandomInt(2500, 35000) },
          { name: "Ritz-Carlton Berlin", price: getRandomInt(2500, 35000) },
          { name: "Pullman Berlin", price: getRandomInt(2500, 35000) },
          { name: "NH Collection", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH100", dep: "07:00", arr: "09:00", price: getRandomInt(25000, 350000), fromAirport: "BER", toAirport: "FRA" },
          { airline: "EasyJet", airlineCode: "U2", flightNumber: "U281", dep: "09:30", arr: "10:50", price: getRandomInt(25000, 350000), fromAirport: "BER", toAirport: "LHR" },
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF820", dep: "12:00", arr: "14:30", price: getRandomInt(25000, 350000), fromAirport: "BER", toAirport: "CDG" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK46", dep: "16:00", arr: "01:00", price: getRandomInt(25000, 350000), fromAirport: "BER", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR76", dep: "18:30", arr: "03:00", price: getRandomInt(25000, 350000), fromAirport: "BER", toAirport: "DOH" }
        ]
      },
      {
        name: "Munich",
        airport: "Munich Airport (MUC)",
        hotels: [
          { name: "Hotel Bayerischer Hof", price: getRandomInt(2500, 35000) },
          { name: "Mandarin Oriental, Munich", price: getRandomInt(2500, 35000) },
          { name: "Hilton Munich", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH200", dep: "07:30", arr: "09:20", price: getRandomInt(25000, 350000), fromAirport: "MUC", toAirport: "FRA" },
          { airline: "Austrian Airlines", airlineCode: "OS", flightNumber: "OS310", dep: "10:00", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "MUC", toAirport: "VIE" }
        ]
      },
      {
        name: "Frankfurt",
        airport: "Frankfurt Airport (FRA)",
        hotels: [
          { name: "Jumeirah Frankfurt", price: getRandomInt(2500, 35000) },
          { name: "Steigenberger Frankfurter Hof", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH10", dep: "06:00", arr: "08:10", price: getRandomInt(25000, 350000), fromAirport: "FRA", toAirport: "LHR" },
          { airline: "United", airlineCode: "UA", flightNumber: "UA800", dep: "09:30", arr: "11:40", price: getRandomInt(25000, 350000), fromAirport: "FRA", toAirport: "JFK" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK44", dep: "14:00", arr: "23:30", price: getRandomInt(25000, 350000), fromAirport: "FRA", toAirport: "DXB" }
        ]
      }
    ]
  },

  /* 8. India */
  {
    code: "IN",
    country: "India",
    cities: [
      {
        name: "Delhi",
        airport: "Indira Gandhi International Airport (DEL)",
        hotels: [
          { name: "Taj Palace, New Delhi", price: getRandomInt(2500, 35000) },
          { name: "The Leela Palace New Delhi", price: getRandomInt(2500, 35000) },
          { name: "ITC Maurya", price: getRandomInt(2500, 35000) },
          { name: "The Oberoi, New Delhi", price: getRandomInt(2500, 35000) },
          { name: "Shangri-La Eros", price: getRandomInt(2500, 35000) },
          { name: "The Lalit", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air India", airlineCode: "AI", flightNumber: "AI101", dep: "06:00", arr: "08:30", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "BOM" },
          { airline: "IndiGo", airlineCode: "6E", flightNumber: "6E203", dep: "07:30", arr: "10:00", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "BLR" },
          { airline: "Vistara", airlineCode: "UK", flightNumber: "UK404", dep: "09:00", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "MAA" },
          { airline: "SpiceJet", airlineCode: "SG", flightNumber: "SG505", dep: "11:00", arr: "13:25", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "CCU" },
          { airline: "AirAsia India", airlineCode: "I5", flightNumber: "I5201", dep: "13:00", arr: "15:30", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "HYD" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK501", dep: "16:00", arr: "20:00", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR571", dep: "19:30", arr: "23:40", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "DOH" },
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH760", dep: "21:00", arr: "03:30", price: getRandomInt(25000, 350000), fromAirport: "DEL", toAirport: "FRA" }
        ]
      },
      {
        name: "Mumbai",
        airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
        hotels: [
          { name: "The Taj Mahal Palace", price: getRandomInt(2500, 35000) },
          { name: "Trident Nariman Point", price: getRandomInt(2500, 35000) },
          { name: "JW Marriott Mumbai Juhu", price: getRandomInt(2500, 35000) },
          { name: "ITC Maratha", price: getRandomInt(2500, 35000) },
          { name: "The Oberoi, Mumbai", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Air India", airlineCode: "AI", flightNumber: "AI102", dep: "06:45", arr: "09:20", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "DEL" },
          { airline: "IndiGo", airlineCode: "6E", flightNumber: "6E204", dep: "08:30", arr: "11:00", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "BLR" },
          { airline: "Vistara", airlineCode: "UK", flightNumber: "UK406", dep: "10:00", arr: "12:40", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "HYD" },
          { airline: "SpiceJet", airlineCode: "SG", flightNumber: "SG507", dep: "13:00", arr: "15:30", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "CCU" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK502", dep: "16:30", arr: "20:30", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR573", dep: "18:30", arr: "23:00", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "DOH" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ421", dep: "21:00", arr: "06:00", price: getRandomInt(25000, 350000), fromAirport: "BOM", toAirport: "SIN" }
        ]
      },
      {
        name: "Bengaluru",
        airport: "Kempegowda International Airport (BLR)",
        hotels: [
          { name: "The Leela Palace Bengaluru", price: getRandomInt(2500, 35000) },
          { name: "Taj West End", price: getRandomInt(2500, 35000) },
          { name: "Shangri-La Bengaluru", price: getRandomInt(2500, 35000) },
          { name: "ITC Windsor", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "IndiGo", airlineCode: "6E", flightNumber: "6E800", dep: "06:30", arr: "08:40", price: getRandomInt(25000, 350000), fromAirport: "BLR", toAirport: "DEL" },
          { airline: "Air India", airlineCode: "AI", flightNumber: "AI901", dep: "09:30", arr: "11:40", price: getRandomInt(25000, 350000), fromAirport: "BLR", toAirport: "BOM" },
          { airline: "Vistara", airlineCode: "UK", flightNumber: "UK900", dep: "12:00", arr: "14:10", price: getRandomInt(25000, 350000), fromAirport: "BLR", toAirport: "HYD" },
          { airline: "SpiceJet", airlineCode: "SG", flightNumber: "SG800", dep: "15:30", arr: "17:50", price: getRandomInt(25000, 350000), fromAirport: "BLR", toAirport: "CCU" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK508", dep: "18:30", arr: "23:00", price: getRandomInt(25000, 350000), fromAirport: "BLR", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR577", dep: "20:00", arr: "01:20", price: getRandomInt(25000, 350000), fromAirport: "BLR", toAirport: "DOH" }
        ]
      },
      {
        name: "Hyderabad",
        airport: "Rajiv Gandhi International Airport (HYD)",
        hotels: [
          { name: "Taj Falaknuma Palace", price: getRandomInt(2500, 35000) },
          { name: "Taj Krishna", price: getRandomInt(2500, 35000) },
          { name: "Trident Hyderabad", price: getRandomInt(2500, 35000) },
          { name: "ITC Kohenur", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "IndiGo", airlineCode: "6E", flightNumber: "6E601", dep: "06:40", arr: "08:55", price: getRandomInt(25000, 350000), fromAirport: "HYD", toAirport: "DEL" },
          { airline: "Air India", airlineCode: "AI", flightNumber: "AI760", dep: "09:30", arr: "11:50", price: getRandomInt(25000, 350000), fromAirport: "HYD", toAirport: "BOM" },
          { airline: "Vistara", airlineCode: "UK", flightNumber: "UK610", dep: "13:00", arr: "15:20", price: getRandomInt(25000, 350000), fromAirport: "HYD", toAirport: "BLR" },
          { airline: "SpiceJet", airlineCode: "SG", flightNumber: "SG901", dep: "16:30", arr: "18:50", price: getRandomInt(25000, 350000), fromAirport: "HYD", toAirport: "CCU" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK512", dep: "20:00", arr: "01:30", price: getRandomInt(25000, 350000), fromAirport: "HYD", toAirport: "DXB" }
        ]
      }
    ]
  },

  /* 9. Indonesia */
  {
    code: "ID",
    country: "Indonesia",
    cities: [
      {
        name: "Jakarta",
        airport: "Soekarno–Hatta International Airport (CGK)",
        hotels: [
          { name: "Hotel Indonesia Kempinski", price: getRandomInt(2500, 35000) },
          { name: "Shangri-La Jakarta", price: getRandomInt(2500, 35000) },
          { name: "The Ritz-Carlton Jakarta", price: getRandomInt(2500, 35000) },
          { name: "Mandarin Oriental Jakarta", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Garuda Indonesia", airlineCode: "GA", flightNumber: "GA328", dep: "06:00", arr: "08:20", price: getRandomInt(25000, 350000), fromAirport: "CGK", toAirport: "DPS" },
          { airline: "Lion Air", airlineCode: "JT", flightNumber: "JT610", dep: "08:30", arr: "10:50", price: getRandomInt(25000, 350000), fromAirport: "CGK", toAirport: "SUB" },
          { airline: "AirAsia", airlineCode: "AK", flightNumber: "AK604", dep: "11:00", arr: "13:20", price: getRandomInt(25000, 350000), fromAirport: "CGK", toAirport: "KUL" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ965", dep: "15:00", arr: "21:40", price: getRandomInt(25000, 350000), fromAirport: "CGK", toAirport: "SIN" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK358", dep: "17:00", arr: "03:50", price: getRandomInt(25000, 350000), fromAirport: "CGK", toAirport: "DXB" }
        ]
      },
      {
        name: "Bali (Denpasar)",
        airport: "Ngurah Rai International Airport (DPS)",
        hotels: [
          { name: "Ayana Resort and Spa Bali", price: getRandomInt(2500, 35000) },
          { name: "The St. Regis Bali Resort", price: getRandomInt(2500, 35000) },
          { name: "Bulgari Resort Bali", price: getRandomInt(2500, 35000) },
          { name: "COMO Uma Ubud", price: getRandomInt(2500, 35000) },
          { name: "Four Seasons Resort Bali at Sayan", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Garuda Indonesia", airlineCode: "GA", flightNumber: "GA412", dep: "06:30", arr: "09:00", price: getRandomInt(25000, 350000), fromAirport: "DPS", toAirport: "CGK" },
          { airline: "Jetstar Asia", airlineCode: "3K", flightNumber: "3K305", dep: "10:00", arr: "12:30", price: getRandomInt(25000, 350000), fromAirport: "DPS", toAirport: "SIN" },
          { airline: "Scoot", airlineCode: "TR", flightNumber: "TR170", dep: "13:00", arr: "15:50", price: getRandomInt(25000, 350000), fromAirport: "DPS", toAirport: "KUL" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK356", dep: "18:00", arr: "04:00", price: getRandomInt(25000, 350000), fromAirport: "DPS", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR965", dep: "20:30", arr: "06:00", price: getRandomInt(25000, 350000), fromAirport: "DPS", toAirport: "DOH" }
        ]
      },
      {
        name: "Surabaya",
        airport: "Juanda International Airport (SUB)",
        hotels: [
          { name: "Majapahit Hotel", price: getRandomInt(2500, 35000) },
          { name: "JW Marriott Surabaya", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Lion Air", airlineCode: "JT", flightNumber: "JT240", dep: "07:00", arr: "08:20", price: getRandomInt(25000, 350000), fromAirport: "SUB", toAirport: "CGK" },
          { airline: "Garuda Indonesia", airlineCode: "GA", flightNumber: "GA252", dep: "11:00", arr: "12:20", price: getRandomInt(25000, 350000), fromAirport: "SUB", toAirport: "DPS" }
        ]
      }
    ]
  },

 /* 10. Italy */
  {
    code: "IT",
    country: "Italy",
    cities: [
      {
        name: "Rome",
        airport: "Leonardo da Vinci–Fiumicino Airport (FCO)",
        hotels: [
          { name: "Hotel Hassler Roma", price: getRandomInt(2500, 35000) },
          { name: "Rome Cavalieri, A Waldorf Astoria", price: getRandomInt(2500, 35000) },
          { name: "Hotel Eden", price: getRandomInt(2500, 35000) },
          { name: "Hotel de Russie", price: getRandomInt(2500, 35000) },
          { name: "NH Collection Roma Palazzo Cinquecento", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Alitalia (ITA Airways)", airlineCode: "AZ", flightNumber: "AZ400", dep: "07:00", arr: "09:00", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "MXP" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA330", dep: "09:30", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "LHR" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK96", dep: "13:00", arr: "23:55", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "DXB" },
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH213", dep: "15:30", arr: "17:45", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "FRA" },
          { airline: "Air France", airlineCode: "AF", flightNumber: "AF140", dep: "19:00", arr: "21:15", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "CDG" },
          { airline: "Delta", airlineCode: "DL", flightNumber: "DL120", dep: "21:30", arr: "00:10", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "JFK" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR80", dep: "23:00", arr: "08:30", price: getRandomInt(25000, 350000), fromAirport: "FCO", toAirport: "DOH" }
        ]
      },
      {
        name: "Milan",
        airport: "Milan Malpensa Airport (MXP)",
        hotels: [
          { name: "Hotel Principe di Savoia", price: getRandomInt(2500, 35000) },
          { name: "Bulgari Hotel Milano", price: getRandomInt(2500, 35000) },
          { name: "Mandarin Oriental Milan", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "ITA Airways", airlineCode: "AZ", flightNumber: "AZ210", dep: "06:00", arr: "07:45", price: getRandomInt(25000, 350000), fromAirport: "MXP", toAirport: "FCO" },
          { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH220", dep: "09:00", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "MXP", toAirport: "FRA" },
          { airline: "Swiss", airlineCode: "LX", flightNumber: "LX150", dep: "14:30", arr: "16:40", price: getRandomInt(25000, 350000), fromAirport: "MXP", toAirport: "ZRH" }
        ]
      },
      {
        name: "Venice",
        airport: "Venice Marco Polo Airport (VCE)",
        hotels: [
          { name: "Belmond Hotel Cipriani", price: getRandomInt(2500, 35000) },
          { name: "The Gritti Palace", price: getRandomInt(2500, 35000) }
        ],
        flights: [
          { airline: "Alitalia (ITA Airways)", airlineCode: "AZ", flightNumber: "AZ310", dep: "08:30", arr: "09:50", price: getRandomInt(25000, 350000), fromAirport: "VCE", toAirport: "FCO" },
          { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2251", dep: "11:00", arr: "12:15", price: getRandomInt(25000, 350000), fromAirport: "VCE", toAirport: "LGW" }
        ]
      }
    ]
  },

  /* 11. Japan */
{
  code: "JP",
  country: "Japan",
  cities: [
    {
      name: "Tokyo",
      airport: "Narita International Airport (NRT)",
      hotels: [
        { name: "Park Hyatt Tokyo", price: getRandomInt(2500, 35000) },
        { name: "Imperial Hotel Tokyo", price: getRandomInt(2500, 35000) },
        { name: "The Peninsula Tokyo", price: getRandomInt(2500, 35000) },
        { name: "Conrad Tokyo", price: getRandomInt(2500, 35000) },
        { name: "Shangri-La Tokyo", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Japan Airlines", airlineCode: "JL", flightNumber: "JL002", dep: "10:00", arr: "12:30", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "HND" },
        { airline: "All Nippon Airways", airlineCode: "NH", flightNumber: "NH216", dep: "13:00", arr: "19:00", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "SFO" },
        { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ638", dep: "20:30", arr: "01:40", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "SIN" },
        { airline: "Cathay Pacific", airlineCode: "CX", flightNumber: "CX509", dep: "16:10", arr: "20:30", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "HKG" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK316", dep: "22:00", arr: "06:30", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "DXB" },
        { airline: "Korean Air", airlineCode: "KE", flightNumber: "KE701", dep: "07:30", arr: "10:00", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "ICN" },
        { airline: "ANA", airlineCode: "NH", flightNumber: "NH8", dep: "09:40", arr: "17:00", price: getRandomInt(25000, 350000), fromAirport: "NRT", toAirport: "LAX" }
      ]
    },
    {
      name: "Osaka",
      airport: "Kansai International Airport (KIX)",
      hotels: [
        { name: "The St. Regis Osaka", price: getRandomInt(2500, 35000) },
        { name: "Conrad Osaka", price: getRandomInt(2500, 35000) },
        { name: "InterContinental Osaka", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Peach Aviation", airlineCode: "MM", flightNumber: "MM101", dep: "06:00", arr: "07:10", price: getRandomInt(25000, 350000), fromAirport: "KIX", toAirport: "ITM" },
        { airline: "ANA", airlineCode: "NH", flightNumber: "NH46", dep: "09:30", arr: "11:45", price: getRandomInt(25000, 350000), fromAirport: "KIX", toAirport: "NRT" },
        { airline: "Japan Airlines", airlineCode: "JL", flightNumber: "JL300", dep: "13:20", arr: "18:30", price: getRandomInt(25000, 350000), fromAirport: "KIX", toAirport: "SFO" }
      ]
    },
    {
      name: "Kyoto",
      airport: "Kansai International Airport (KIX) / Osaka (nearest)",
      hotels: [
        { name: "Hoshinoya Kyoto", price: getRandomInt(2500, 35000) },
        { name: "The Ritz-Carlton, Kyoto", price: getRandomInt(2500, 35000) },
        { name: "Hotel Granvia Kyoto", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "ANA", airlineCode: "NH", flightNumber: "NH78", dep: "08:00", arr: "09:20", price: getRandomInt(25000, 350000), fromAirport: "KIX", toAirport: "NRT" }
      ]
    },
    {
      name: "Sapporo",
      airport: "New Chitose Airport (CTS)",
      hotels: [
        { name: "JR Tower Hotel Nikko Sapporo", price: getRandomInt(2500, 35000) },
        { name: "ANA Crowne Plaza", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "JAL", airlineCode: "JL", flightNumber: "JL501", dep: "07:00", arr: "09:30", price: getRandomInt(25000, 350000), fromAirport: "CTS", toAirport: "NRT" },
        { airline: "ANA", airlineCode: "NH", flightNumber: "NH123", dep: "12:20", arr: "15:00", price: getRandomInt(25000, 350000), fromAirport: "CTS", toAirport: "ITM" }
      ]
    },
    {
      name: "Fukuoka",
      airport: "Fukuoka Airport (FUK)",
      hotels: [
        { name: "Grand Hyatt Fukuoka", price: getRandomInt(2500, 35000) },
        { name: "Hotel Nikko Fukuoka", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Japan Airlines", airlineCode: "JL", flightNumber: "JL301", dep: "09:00", arr: "11:20", price: getRandomInt(25000, 350000), fromAirport: "FUK", toAirport: "NRT" },
        { airline: "Asiana", airlineCode: "OZ", flightNumber: "OZ110", dep: "14:00", arr: "16:30", price: getRandomInt(25000, 350000), fromAirport: "FUK", toAirport: "ICN" }
      ]
    },
    {
      name: "Nagoya",
      airport: "Chubu Centrair International Airport (NGO)",
      hotels: [
        { name: "Hilton Nagoya", price: getRandomInt(2500, 35000) },
        { name: "Nagoya Marriott Associa Hotel", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "ANA", airlineCode: "NH", flightNumber: "NH323", dep: "10:00", arr: "12:10", price: getRandomInt(25000, 350000), fromAirport: "NGO", toAirport: "NRT" }
      ]
    },
    {
      name: "Hiroshima",
      airport: "Hiroshima Airport (HIJ)",
      hotels: [
        { name: "Sheraton Grand Hiroshima", price: getRandomInt(2500, 35000) },
        { name: "Rihga Royal Hotel Hiroshima", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "JAL", airlineCode: "JL", flightNumber: "JL701", dep: "06:40", arr: "08:20", price: getRandomInt(25000, 350000), fromAirport: "HIJ", toAirport: "ITM" }
      ]
    }
  ]
},

// /* 12. Saudi Arabia */
{
  code: "SA",
  country: "Saudi Arabia",
  cities: [
    {
      name: "Riyadh",
      airport: "King Khalid International Airport (RUH)",
      hotels: [
        { name: "Ritz-Carlton Riyadh", price: getRandomInt(2500, 35000) },
        { name: "Four Seasons Hotel Riyadh", price: getRandomInt(2500, 35000) },
        { name: "Hilton Riyadh", price: getRandomInt(2500, 35000) },
        { name: "InterContinental Riyadh", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Saudia", airlineCode: "SV", flightNumber: "SV100", dep: "08:00", arr: "10:45", price: getRandomInt(25000, 350000), fromAirport: "RUH", toAirport: "JED" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK806", dep: "12:30", arr: "20:00", price: getRandomInt(25000, 350000), fromAirport: "RUH", toAirport: "DXB" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR124", dep: "16:00", arr: "18:00", price: getRandomInt(25000, 350000), fromAirport: "RUH", toAirport: "DOH" },
        { airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK789", dep: "21:30", arr: "02:10", price: getRandomInt(25000, 350000), fromAirport: "RUH", toAirport: "IST" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH799", dep: "23:00", arr: "07:10", price: getRandomInt(25000, 350000), fromAirport: "RUH", toAirport: "FRA" }
      ]
    },
    {
      name: "Jeddah",
      airport: "King Abdulaziz International Airport (JED)",
      hotels: [
        { name: "Jeddah Hilton", price: getRandomInt(2500, 35000) },
        { name: "Mövenpick Hotel Jeddah", price: getRandomInt(2500, 35000) },
        { name: "Park Hyatt Jeddah", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Saudia", airlineCode: "SV", flightNumber: "SV300", dep: "07:30", arr: "09:40", price: getRandomInt(25000, 350000), fromAirport: "JED", toAirport: "RUH" },
        { airline: "EgyptAir", airlineCode: "MS", flightNumber: "MS612", dep: "11:00", arr: "13:30", price: getRandomInt(25000, 350000), fromAirport: "JED", toAirport: "CAI" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK402", dep: "18:20", arr: "23:40", price: getRandomInt(25000, 350000), fromAirport: "JED", toAirport: "DXB" }
      ]
    },
    {
      name: "Dammam",
      airport: "King Fahd International Airport (DMM)",
      hotels: [
        { name: "InterContinental Dammam", price: getRandomInt(2500, 35000) },
        { name: "Sheraton Dammam", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Saudia", airlineCode: "SV", flightNumber: "SV220", dep: "09:00", arr: "10:20", price: getRandomInt(25000, 350000), fromAirport: "DMM", toAirport: "RUH" },
        { airline: "Gulf Air", airlineCode: "GF", flightNumber: "GF200", dep: "15:40", arr: "18:20", price: getRandomInt(25000, 350000), fromAirport: "DMM", toAirport: "BAH" }
      ]
    },
    {
      name: "Medina",
      airport: "Prince Mohammad bin Abdulaziz Airport (MED)",
      hotels: [
        { name: "InterContinental Madinah", price: getRandomInt(2500, 35000) },
        { name: "Madinah Hilton", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Saudia", airlineCode: "SV", flightNumber: "SV120", dep: "06:00", arr: "07:30", price: getRandomInt(25000, 350000), fromAirport: "MED", toAirport: "JED" }
      ]
    }
  ]
},

/* 13. United Arab Emirates (UAE) */
{
  code: "AE",
  country: "United Arab Emirates",
  cities: [
    {
      name: "Dubai",
      airport: "Dubai International Airport (DXB)",
      hotels: [
        { name: "Burj Al Arab Jumeirah", price: getRandomInt(2500, 35000) },
        { name: "Atlantis The Palm", price: getRandomInt(2500, 35000) },
        { name: "Armani Hotel Dubai", price: getRandomInt(2500, 35000) },
        { name: "Jumeirah Emirates Towers", price: getRandomInt(2500, 35000) },
        { name: "Ritz-Carlton Dubai", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK202", dep: "08:00", arr: "12:30", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "LHR" },
        { airline: "Flydubai", airlineCode: "FZ", flightNumber: "FZ310", dep: "10:00", arr: "14:50", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "BOM" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR120", dep: "13:20", arr: "15:00", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "DOH" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA107", dep: "18:30", arr: "22:40", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "LHR" },
        { airline: "Etihad", airlineCode: "EY", flightNumber: "EY905", dep: "20:00", arr: "21:20", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "AUH" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK396", dep: "23:15", arr: "08:05", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "NRT" },
        { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ495", dep: "22:50", arr: "08:50", price: getRandomInt(25000, 350000), fromAirport: "DXB", toAirport: "SIN" }
      ]
    },
    {
      name: "Abu Dhabi",
      airport: "Abu Dhabi International Airport (AUH)",
      hotels: [
        { name: "Emirates Palace", price: getRandomInt(2500, 35000) },
        { name: "The St. Regis Abu Dhabi", price: getRandomInt(2500, 35000) },
        { name: "Rosewood Abu Dhabi", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Etihad", airlineCode: "EY", flightNumber: "EY702", dep: "09:00", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "AUH", toAirport: "LHR" },
        { airline: "Air India", airlineCode: "AI", flightNumber: "AI842", dep: "14:00", arr: "20:40", price: getRandomInt(25000, 350000), fromAirport: "AUH", toAirport: "DEL" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK958", dep: "19:15", arr: "20:30", price: getRandomInt(25000, 350000), fromAirport: "AUH", toAirport: "DXB" }
      ]
    },
    {
      name: "Sharjah",
      airport: "Sharjah International Airport (SHJ)",
      hotels: [
        { name: "Sheraton Sharjah Beach Resort & Spa", price: getRandomInt(2500, 35000) },
        { name: "Radisson Blu Resort, Sharjah", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Air Arabia", airlineCode: "G9", flightNumber: "G9181", dep: "08:30", arr: "10:45", price: getRandomInt(25000, 350000), fromAirport: "SHJ", toAirport: "CMB" }
      ]
    }
  ]
},

/* 14. Qatar */
{
  code: "QA",
  country: "Qatar",
  cities: [
    {
      name: "Doha",
      airport: "Hamad International Airport (DOH)",
      hotels: [
        { name: "Mars Grand Hyatt Doha", price: getRandomInt(2500, 35000) },
        { name: "W Doha", price: getRandomInt(2500, 35000) },
        { name: "The St. Regis Doha", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR001", dep: "09:00", arr: "12:00", price: getRandomInt(25000, 350000), fromAirport: "DOH", toAirport: "DXB" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR23", dep: "13:30", arr: "18:30", price: getRandomInt(25000, 350000), fromAirport: "DOH", toAirport: "LHR" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK852", dep: "20:00", arr: "00:15", price: getRandomInt(25000, 350000), fromAirport: "DOH", toAirport: "DXB" }
      ]
    },
    {
      name: "Al Khor",
      airport: "Doha (nearest HAM) / local",
      hotels: [
        { name: "Al Khor Beach Hotel (sample)", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR220", dep: "07:00", arr: "08:00", price: getRandomInt(25000, 350000), fromAirport: "DOH", toAirport: "BOM" }
      ]
    }
  ]
},

/* 15. Bahrain */
{
  code: "BH",
  country: "Bahrain",
  cities: [
    {
      name: "Manama",
      airport: "Bahrain International Airport (BAH)",
      hotels: [
        { name: "The Ritz-Carlton, Bahrain", price: getRandomInt(2500, 35000) },
        { name: "Gulf Hotel Bahrain", price: getRandomInt(2500, 35000) },
        { name: "Wyndham Grand Manama", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Gulf Air", airlineCode: "GF", flightNumber: "GF100", dep: "09:00", arr: "11:10", price: getRandomInt(25000, 350000), fromAirport: "BAH", toAirport: "DXB" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK798", dep: "14:30", arr: "19:00", price: getRandomInt(25000, 350000), fromAirport: "BAH", toAirport: "LHR" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR700", dep: "17:20", arr: "18:40", price: getRandomInt(25000, 350000), fromAirport: "BAH", toAirport: "DOH" }
      ]
    },
    {
      name: "Muharraq",
      airport: "Bahrain International Airport (nearby)",
      hotels: [
        { name: "Armani Hotel (sample)", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Gulf Air", airlineCode: "GF", flightNumber: "GF110", dep: "06:00", arr: "08:00", price: getRandomInt(25000, 350000), fromAirport: "BAH", toAirport: "CAI" }
      ]
    }
  ]
},

/* 16. Nepal */
{
  code: "NP",
  country: "Nepal",
  cities: [
    {
      name: "Kathmandu",
      airport: "Tribhuvan International Airport (KTM)",
      hotels: [
        { name: "Dwarika's Hotel", price: getRandomInt(2500, 35000) },
        { name: "Hyatt Regency Kathmandu", price: getRandomInt(2500, 35000) },
        { name: "Hotel Yak & Yeti", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Nepal Airlines", airlineCode: "RA", flightNumber: "RA306", dep: "08:00", arr: "10:45", price: getRandomInt(25000, 350000), fromAirport: "KTM", toAirport: "BIR" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR120", dep: "13:00", arr: "20:30", price: getRandomInt(25000, 350000), fromAirport: "KTM", toAirport: "DOH" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK302", dep: "23:00", arr: "05:10", price: getRandomInt(25000, 350000), fromAirport: "KTM", toAirport: "DXB" }
      ]
    },
    {
      name: "Pokhara",
      airport: "Pokhara Airport (PKR)",
      hotels: [
        { name: "Tiger Mountain Pokhara Lodge", price: getRandomInt(2500, 35000) },
        { name: "Temple Tree Resort & Spa", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Nepal Airlines", airlineCode: "RA", flightNumber: "RA512", dep: "07:00", arr: "07:30", price: getRandomInt(25000, 350000), fromAirport: "PKR", toAirport: "KTM" }
      ]
    },
    {
      name: "Lumbini",
      airport: "Bhairahawa Gautam Buddha Airport (BWA)",
      hotels: [
        { name: "Lumbini Buddha Resort (sample)", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Buddha Air", airlineCode: "U4", flightNumber: "U422", dep: "09:00", arr: "10:15", price: getRandomInt(25000, 350000), fromAirport: "BWA", toAirport: "KTM" }
      ]
    }
  ]
},

  /* 17. Sri Lanka */
{
  code: "LK",
  country: "Sri Lanka",
  cities: [
    {
      name: "Colombo",
      airport: "Bandaranaike International Airport (CMB)",
      hotels: [
        { name: "Cinnamon Grand Colombo", price: getRandomInt(2500, 35000) },
        { name: "Shangri-La Colombo", price: getRandomInt(2500, 35000) },
        { name: "Marriott Colombo", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "SriLankan Airlines", airlineCode: "UL", flightNumber: "UL215", dep: "08:00", arr: "12:30", price: getRandomInt(25000, 350000), fromAirport: "CMB", toAirport: "DXB" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK654", dep: "14:00", arr: "18:15", price: getRandomInt(25000, 350000), fromAirport: "CMB", toAirport: "LHR" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR622", dep: "21:00", arr: "02:00", price: getRandomInt(25000, 350000), fromAirport: "CMB", toAirport: "DOH" }
      ]
    },
    {
      name: "Kandy",
      airport: "Mattala Rajapaksa International Airport (HRI) / near",
      hotels: [
        { name: "Earl's Regency", price: getRandomInt(2500, 35000) },
        { name: "The Kandy House", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Domestic (sample)", airlineCode: "UL", flightNumber: "ULD01", dep: "08:00", arr: "08:50", price: getRandomInt(25000, 350000), fromAirport: "CMB", toAirport: "HRI" }
      ]
    },
    {
      name: "Galle",
      airport: "Koggala Airport (KCT) / near",
      hotels: [
        { name: "Amangalla", price: getRandomInt(2500, 35000) },
        { name: "Fort Bazaar", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Domestic (sample)", airlineCode: "UL", flightNumber: "ULD02", dep: "09:00", arr: "10:00", price: getRandomInt(25000, 350000), fromAirport: "CMB", toAirport: "KCT" }
      ]
    }
  ]
},

  /* 18. Maldives */
{
  code: "MV",
  country: "Maldives",
  cities: [
    {
      name: "Malé",
      airport: "Velana International Airport (MLE)",
      hotels: [
        { name: "Gili Lankanfushi Maldives", price: getRandomInt(2500, 35000) },
        { name: "Soneva Fushi", price: getRandomInt(2500, 35000) },
        { name: "Constance Halaveli", price: getRandomInt(2500, 35000) },
        { name: "One&Only Reethi Rah", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Maldivian", airlineCode: "Q2", flightNumber: "Q210", dep: "07:00", arr: "09:50", price: getRandomInt(25000, 350000), fromAirport: "MLE", toAirport: "CMB" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK652", dep: "13:00", arr: "18:30", price: getRandomInt(25000, 350000), fromAirport: "MLE", toAirport: "DXB" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR702", dep: "20:00", arr: "02:30", price: getRandomInt(25000, 350000), fromAirport: "MLE", toAirport: "DOH" }
      ]
    },
    {
      name: "Addu City",
      airport: "Gan International Airport (GAN)",
      hotels: [
        { name: "Seagull Hotel Addu", price: getRandomInt(2500, 35000) },
        { name: "MILAIDHOO Island Resort (sample)", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Maldivian", airlineCode: "Q2", flightNumber: "Q220", dep: "10:00", arr: "11:30", price: getRandomInt(25000, 350000), fromAirport: "GAN", toAirport: "MLE" }
      ]
    }
  ]
},

  /* 19. Malaysia */
{
  code: "MY",
  country: "Malaysia",
  cities: [
    {
      name: "Kuala Lumpur",
      airport: "Kuala Lumpur International Airport (KUL)",
      hotels: [
        { name: "Mandarin Oriental Kuala Lumpur", price: getRandomInt(2500, 35000) },
        { name: "Grand Hyatt Kuala Lumpur", price: getRandomInt(2500, 35000) },
        { name: "Four Seasons Hotel Kuala Lumpur", price: getRandomInt(2500, 35000) },
        { name: "St. Regis Kuala Lumpur", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Malaysia Airlines", airlineCode: "MH", flightNumber: "MH602", dep: "09:00", arr: "13:30", price: getRandomInt(25000, 350000), fromAirport: "KUL", toAirport: "SIN" },
        { airline: "AirAsia", airlineCode: "AK", flightNumber: "AK203", dep: "12:00", arr: "14:30", price: getRandomInt(25000, 350000), fromAirport: "KUL", toAirport: "KUL" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK346", dep: "17:30", arr: "23:10", price: getRandomInt(25000, 350000), fromAirport: "KUL", toAirport: "DXB" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR852", dep: "21:00", arr: "03:00", price: getRandomInt(25000, 350000), fromAirport: "KUL", toAirport: "DOH" }
      ]
    },
    {
      name: "Penang",
      airport: "Penang International Airport (PEN)",
      hotels: [
        { name: "Shangri-La's Rasa Sayang Resort", price: getRandomInt(2500, 35000) },
        { name: "Eastern & Oriental Hotel", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "AirAsia", airlineCode: "AK", flightNumber: "AK506", dep: "07:00", arr: "08:15", price: getRandomInt(25000, 350000), fromAirport: "PEN", toAirport: "KUL" },
        { airline: "Malaysia Airlines", airlineCode: "MH", flightNumber: "MH160", dep: "11:00", arr: "12:20", price: getRandomInt(25000, 350000), fromAirport: "PEN", toAirport: "SIN" }
      ]
    },
    {
      name: "Langkawi",
      airport: "Langkawi International Airport (LGK)",
      hotels: [
        { name: "The Datai Langkawi", price: getRandomInt(2500, 35000) },
        { name: "The Andaman", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Malaysia Airlines", airlineCode: "MH", flightNumber: "MH262", dep: "09:00", arr: "10:30", price: getRandomInt(25000, 350000), fromAirport: "LGK", toAirport: "KUL" }
      ]
    },
    {
      name: "Kota Kinabalu",
      airport: "Kota Kinabalu International Airport (BKI)",
      hotels: [
        { name: "Shangri-La's Tanjung Aru Resort", price: getRandomInt(2500, 35000) },
        { name: "Le Meridien Kota Kinabalu", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Malaysia Airlines", airlineCode: "MH", flightNumber: "MH320", dep: "07:30", arr: "09:00", price: getRandomInt(25000, 350000), fromAirport: "BKI", toAirport: "KUL" }
      ]
    }
  ]
},

  /* 20. Singapore */
{
  code: "SG",
  country: "Singapore",
  cities: [
    {
      name: "Singapore",
      airport: "Changi Airport (SIN)",
      hotels: [
        { name: "Marina Bay Sands", price: getRandomInt(2500, 35000) },
        { name: "Raffles Singapore", price: getRandomInt(2500, 35000) },
        { name: "The Fullerton Hotel Singapore", price: getRandomInt(2500, 35000) },
        { name: "Shangri-La Singapore", price: getRandomInt(2500, 35000) }
      ],
      flights: [
        { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ001", dep: "09:00", arr: "11:40", price: getRandomInt(25000, 350000), fromAirport: "SIN", toAirport: "BKK" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK352", dep: "12:30", arr: "20:10", price: getRandomInt(25000, 350000), fromAirport: "SIN", toAirport: "DXB" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA16", dep: "22:00", arr: "05:45", price: getRandomInt(25000, 350000), fromAirport: "SIN", toAirport: "LHR" }
      ]
    }
  ]
},

  /* 21. Thailand */
  {
    code: "TH",
    country: "Thailand",
    cities: [
      {
        name: "Bangkok",
        airport: "Suvarnabhumi Airport (BKK)",
        hotels: [
          { name: "Mandarin Oriental Bangkok", price: getRandomInt(2500, 35000) },
          { name: "The Siam", price: getRandomInt(2200, 32000) },
          { name: "Anantara Siam Bangkok", price: getRandomInt(2000, 30000) },
          { name: "Siam Kempinski", price: getRandomInt(2200, 33000) }
        ],
        flights: [
          { airline: "Thai Airways", airlineCode: "TG", flightNumber: "TG676", dep: "09:00", arr: "11:30", price: getRandomInt(20000, 130000), fromAirport: "BKK", toAirport: "KUL" },
          { airline: "Bangkok Airways", airlineCode: "PG", flightNumber: "PG123", dep: "07:30", arr: "10:00", price: getRandomInt(18000, 110000), fromAirport: "BKK", toAirport: "HKG" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK384", dep: "00:30", arr: "06:10", price: getRandomInt(32000, 210000), fromAirport: "BKK", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR832", dep: "22:20", arr: "02:00", price: getRandomInt(35000, 230000), fromAirport: "BKK", toAirport: "DOH" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ701", dep: "10:15", arr: "12:20", price: getRandomInt(18000, 120000), fromAirport: "BKK", toAirport: "SIN" },
          { airline: "AirAsia", airlineCode: "AK", flightNumber: "AK103", dep: "14:00", arr: "16:20", price: getRandomInt(9000, 70000), fromAirport: "BKK", toAirport: "DMK" },
          { airline: "Japan Airlines", airlineCode: "JL", flightNumber: "JL708", dep: "20:30", arr: "06:50", price: getRandomInt(42000, 260000), fromAirport: "BKK", toAirport: "NRT" }
        ]
      },
      {
        name: "Phuket",
        airport: "Phuket International Airport (HKT)",
        hotels: [
          { name: "Trisara Phuket", price: getRandomInt(3000, 32000) },
          { name: "Sri Panwa Phuket", price: getRandomInt(2800, 30000) },
          { name: "Anantara Phuket", price: getRandomInt(2200, 25000) }
        ],
        flights: [
          { airline: "Thai Airways", airlineCode: "TG", flightNumber: "TG201", dep: "08:00", arr: "09:10", price: getRandomInt(12000, 85000), fromAirport: "HKT", toAirport: "BKK" },
          { airline: "AirAsia", airlineCode: "AK", flightNumber: "AK420", dep: "11:30", arr: "12:45", price: getRandomInt(9000, 60000), fromAirport: "HKT", toAirport: "SIN" },
          { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ556", dep: "14:20", arr: "16:40", price: getRandomInt(17000, 110000), fromAirport: "HKT", toAirport: "SIN" }
        ]
      },
      {
        name: "Chiang Mai",
        airport: "Chiang Mai International Airport (CNX)",
        hotels: [
          { name: "137 Pillars House", price: getRandomInt(2000, 24000) },
          { name: "Anantara Chiang Mai", price: getRandomInt(1800, 20000) }
        ],
        flights: [
          { airline: "Thai Smile", airlineCode: "WE", flightNumber: "WE105", dep: "07:30", arr: "09:00", price: getRandomInt(9000, 60000), fromAirport: "CNX", toAirport: "BKK" },
          { airline: "Bangkok Airways", airlineCode: "PG", flightNumber: "PG212", dep: "12:00", arr: "13:30", price: getRandomInt(10000, 70000), fromAirport: "CNX", toAirport: "SIN" }
        ]
      }
    ]
  },

  /* 22. Turkey */
  {
    code: "TR",
    country: "Turkey",
    cities: [
      {
        name: "Istanbul",
        airport: "Istanbul Airport (IST)",
        hotels: [
          { name: "Four Seasons Istanbul", price: getRandomInt(2200, 28000) },
          { name: "Ciragan Palace Kempinski", price: getRandomInt(2400, 30000) },
          { name: "Raffles Istanbul", price: getRandomInt(2300, 28000) },
          { name: "Swissotel The Bosphorus", price: getRandomInt(2000, 26000) }
        ],
        flights: [
          { airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK1984", dep: "09:00", arr: "11:20", price: getRandomInt(25000, 180000), fromAirport: "IST", toAirport: "CDG" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK122", dep: "12:30", arr: "18:50", price: getRandomInt(35000, 220000), fromAirport: "IST", toAirport: "DXB" },
          { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR243", dep: "16:20", arr: "20:10", price: getRandomInt(33000, 210000), fromAirport: "IST", toAirport: "DOH" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA920", dep: "07:15", arr: "09:40", price: getRandomInt(27000, 190000), fromAirport: "IST", toAirport: "LHR" },
          { airline: "Pegasus Airlines", airlineCode: "PC", flightNumber: "PC1001", dep: "06:00", arr: "07:40", price: getRandomInt(9000, 70000), fromAirport: "SAW", toAirport: "ESB" }
        ]
      },
      {
        name: "Antalya",
        airport: "Antalya Airport (AYT)",
        hotels: [
          { name: "Rixos Premium Belek", price: getRandomInt(1800, 22000) },
          { name: "Titanic Deluxe Golf Belek", price: getRandomInt(1600, 20000) },
          { name: "Akra Hotel Antalya", price: getRandomInt(1500, 18000) }
        ],
        flights: [
          { airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK2341", dep: "10:00", arr: "11:30", price: getRandomInt(12000, 90000), fromAirport: "AYT", toAirport: "IST" },
          { airline: "Pegasus Airlines", airlineCode: "PC", flightNumber: "PC1782", dep: "14:15", arr: "15:50", price: getRandomInt(10000, 80000), fromAirport: "AYT", toAirport: "SAW" }
        ]
      },
      {
        name: "Cappadocia (Nevşehir)",
        airport: "Nevşehir Kapadokya Airport (NAV)",
        hotels: [
          { name: "Museum Hotel Cappadocia", price: getRandomInt(1800, 20000) },
          { name: "Argos in Cappadocia", price: getRandomInt(1700, 19000) }
        ],
        flights: [
          { airline: "Turkish Airlines", airlineCode: "TK", flightNumber: "TK2154", dep: "09:30", arr: "10:40", price: getRandomInt(10000, 70000), fromAirport: "NAV", toAirport: "IST" }
        ]
      }
    ]
  },

  /* 23. South Korea */
  {
    code: "KR",
    country: "South Korea",
    cities: [
      {
        name: "Seoul",
        airport: "Incheon International Airport (ICN)",
        hotels: [
          { name: "The Shilla Seoul", price: getRandomInt(2200, 30000) },
          { name: "Grand Hyatt Seoul", price: getRandomInt(2000, 26000) },
          { name: "Signiel Seoul", price: getRandomInt(2400, 32000) }
        ],
        flights: [
          { airline: "Korean Air", airlineCode: "KE", flightNumber: "KE123", dep: "08:00", arr: "10:30", price: getRandomInt(27000, 190000), fromAirport: "ICN", toAirport: "NRT" },
          { airline: "Asiana Airlines", airlineCode: "OZ", flightNumber: "OZ741", dep: "11:20", arr: "13:40", price: getRandomInt(25000, 180000), fromAirport: "ICN", toAirport: "HKG" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK322", dep: "22:50", arr: "04:20", price: getRandomInt(35000, 230000), fromAirport: "ICN", toAirport: "DXB" }
        ]
      },
      {
        name: "Busan",
        airport: "Gimhae International Airport (PUS)",
        hotels: [
          { name: "The Westin Josun Busan", price: getRandomInt(1600, 20000) },
          { name: "Paradise Hotel Busan", price: getRandomInt(1500, 19000) }
        ],
        flights: [
          { airline: "Korean Air", airlineCode: "KE", flightNumber: "KE112", dep: "07:10", arr: "08:30", price: getRandomInt(9000, 70000), fromAirport: "PUS", toAirport: "ICN" }
        ]
      }
    ]
  },

  /* 23. South Africa */
  {
    code: "ZA",
    country: "South Africa",
    cities: [
      {
        name: "Johannesburg",
        airport: "O. R. Tambo International Airport (JNB)",
        hotels: [
          { name: "Four Seasons Hotel The Westcliff", price: getRandomInt(2000, 24000) },
          { name: "Sandton Sun", price: getRandomInt(1800, 22000) }
        ],
        flights: [
          { airline: "South African Airways", airlineCode: "SA", flightNumber: "SA241", dep: "06:00", arr: "08:45", price: getRandomInt(22000, 160000), fromAirport: "JNB", toAirport: "CPT" },
          { airline: "British Airways", airlineCode: "BA", flightNumber: "BA50", dep: "11:30", arr: "21:45", price: getRandomInt(35000, 230000), fromAirport: "JNB", toAirport: "LHR" },
          { airline: "Emirates", airlineCode: "EK", flightNumber: "EK764", dep: "22:20", arr: "08:50", price: getRandomInt(40000, 260000), fromAirport: "JNB", toAirport: "DXB" }
        ]
      },
      {
        name: "Cape Town",
        airport: "Cape Town International Airport (CPT)",
        hotels: [
          { name: "One&Only Cape Town", price: getRandomInt(2000, 24000) },
          { name: "Belmond Mount Nelson", price: getRandomInt(1800, 22000) }
        ],
        flights: [
          { airline: "Kulula", airlineCode: "MN", flightNumber: "MN501", dep: "07:00", arr: "09:00", price: getRandomInt(12000, 90000), fromAirport: "CPT", toAirport: "JNB" }
        ]
      }
    ]
  },
  
  // 24 — Kenya
{
  code: "KE",
  country: "Kenya",
  cities: [
    {
      name: "Nairobi",
      airport: "Jomo Kenyatta International Airport (NBO)",
      hotels: [
        { name: "Nairobi Serena Hotel", price: getRandomInt(3000, 26000) },
        { name: "Radisson Blu Nairobi", price: getRandomInt(3200, 24000) },
        { name: "Hemingways Nairobi", price: getRandomInt(3500, 28000) },
        { name: "Villa Rosa Kempinski", price: getRandomInt(2800, 23000) }
      ],
      flights: [
        { airline: "Kenya Airways", airlineCode: "KQ", flightNumber: "KQ101", dep: "06:00", arr: "08:00", price: getRandomInt(20000, 120000), fromAirport: "NBO", toAirport: "MBA" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA202", dep: "09:00", arr: "11:00", price: getRandomInt(30000, 180000), fromAirport: "NBO", toAirport: "LHR" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK303", dep: "13:00", arr: "20:00", price: getRandomInt(35000, 200000), fromAirport: "NBO", toAirport: "DXB" },
        { airline: "Qatar Airways", airlineCode: "QR", flightNumber: "QR404", dep: "15:00", arr: "23:00", price: getRandomInt(32000, 190000), fromAirport: "NBO", toAirport: "DOH" }
      ]
    },
    {
      name: "Mombasa",
      airport: "Moi International Airport (MBA)",
      hotels: [
        { name: "Sarova Whitesands", price: getRandomInt(2800, 22000) },
        { name: "Voyager Beach Resort", price: getRandomInt(2500, 20000) },
        { name: "EnglishPoint Marina", price: getRandomInt(2700, 21000) }
      ],
      flights: [
        { airline: "Kenya Airways", airlineCode: "KQ", flightNumber: "KQ102", dep: "07:00", arr: "09:00", price: getRandomInt(15000, 90000), fromAirport: "MBA", toAirport: "NBO" },
        { airline: "Fly540", airlineCode: "5H", flightNumber: "5H201", dep: "08:30", arr: "10:30", price: getRandomInt(12000, 80000), fromAirport: "MBA", toAirport: "NBO" },
        { airline: "Jambojet", airlineCode: "JM", flightNumber: "JM301", dep: "11:00", arr: "13:00", price: getRandomInt(11000, 70000), fromAirport: "MBA", toAirport: "NBO" }
      ]
    },
    {
      name: "Kisumu",
      airport: "Kisumu International Airport (KIS)",
      hotels: [
        { name: "Acacia Premier", price: getRandomInt(2400, 18000) },
        { name: "Imperial Hotel", price: getRandomInt(2200, 16500) },
        { name: "City Imperial Hotel", price: getRandomInt(2100, 15000) }
      ],
      flights: [
        { airline: "Kenya Airways", airlineCode: "KQ", flightNumber: "KQ103", dep: "08:00", arr: "09:30", price: getRandomInt(12000, 80000), fromAirport: "KIS", toAirport: "NBO" },
        { airline: "Fly540", airlineCode: "5H", flightNumber: "5H202", dep: "10:00", arr: "11:30", price: getRandomInt(11000, 75000), fromAirport: "KIS", toAirport: "MBA" },
        { airline: "Jambojet", airlineCode: "JM", flightNumber: "JM302", dep: "12:00", arr: "13:30", price: getRandomInt(10000, 70000), fromAirport: "KIS", toAirport: "NBO" }
      ]
    }
  ]
},

// 25 — Russia
{
  code: "RU",
  country: "Russia",
  cities: [
    // Major Cities
    {
      name: "Moscow",
      airport: "Sheremetyevo International Airport (SVO)",
      hotels: [
        { name: "Hotel Baltschug Kempinski", price: getRandomInt(4000, 35000) },
        { name: "The Ritz-Carlton Moscow", price: getRandomInt(5000, 40000) },
        { name: "Ararat Park Hyatt", price: getRandomInt(4500, 36000) },
        { name: "Radisson Blu Moscow", price: getRandomInt(3500, 25000) },
        { name: "Metropol Moscow", price: getRandomInt(4000, 30000) },
        { name: "Swissotel Krasnye Holmy", price: getRandomInt(4500, 38000) }
      ],
      flights: [
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU100", dep: "06:00", arr: "08:30", price: getRandomInt(20000, 120000), fromAirport: "SVO", toAirport: "LED" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7100", dep: "07:00", arr: "09:30", price: getRandomInt(18000, 110000), fromAirport: "SVO", toAirport: "KZN" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU101", dep: "08:00", arr: "10:30", price: getRandomInt(22000, 130000), fromAirport: "SVO", toAirport: "NSK" },
        { airline: "Ural Airlines", airlineCode: "U6", flightNumber: "U6101", dep: "09:00", arr: "11:30", price: getRandomInt(21000, 125000), fromAirport: "SVO", toAirport: "SVX" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU102", dep: "12:00", arr: "14:30", price: getRandomInt(25000, 140000), fromAirport: "SVO", toAirport: "LED" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7102", dep: "15:00", arr: "17:30", price: getRandomInt(24000, 135000), fromAirport: "SVO", toAirport: "KZN" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU103", dep: "18:00", arr: "20:30", price: getRandomInt(26000, 150000), fromAirport: "SVO", toAirport: "NSK" }
      ]
    },
    {
      name: "Saint Petersburg",
      airport: "Pulkovo Airport (LED)",
      hotels: [
        { name: "Belmond Grand Hotel", price: getRandomInt(3500, 30000) },
        { name: "Four Seasons Lion Palace", price: getRandomInt(4500, 33000) },
        { name: "Wyndham Saint Petersburg", price: getRandomInt(3000, 25000) },
        { name: "Corinthia Hotel St Petersburg", price: getRandomInt(4000, 35000) },
        { name: "Astoria Hotel", price: getRandomInt(3800, 32000) },
        { name: "Park Inn by Radisson Nevsky", price: getRandomInt(3000, 28000) }
      ],
      flights: [
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU200", dep: "06:30", arr: "09:00", price: getRandomInt(18000, 100000), fromAirport: "LED", toAirport: "SVO" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7200", dep: "07:30", arr: "10:00", price: getRandomInt(17000, 95000), fromAirport: "LED", toAirport: "KZN" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU201", dep: "09:00", arr: "11:30", price: getRandomInt(19000, 105000), fromAirport: "LED", toAirport: "NSK" },
        { airline: "Nordwind Airlines", airlineCode: "N4", flightNumber: "N4101", dep: "11:00", arr: "13:30", price: getRandomInt(16000, 95000), fromAirport: "LED", toAirport: "SVX" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU202", dep: "13:30", arr: "16:00", price: getRandomInt(20000, 110000), fromAirport: "LED", toAirport: "SVO" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7201", dep: "15:30", arr: "18:00", price: getRandomInt(21000, 115000), fromAirport: "LED", toAirport: "KZN" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU203", dep: "18:00", arr: "20:30", price: getRandomInt(22000, 120000), fromAirport: "LED", toAirport: "NSK" }
      ]
    },
    {
      name: "Kazan",
      airport: "Kazan International Airport (KZN)",
      hotels: [
        { name: "Riviera Hotel", price: getRandomInt(2500, 18000) },
        { name: "Korston Tower", price: getRandomInt(2300, 16000) },
        { name: "Grand Hotel Kazan", price: getRandomInt(3000, 20000) },
        { name: "Mercure Kazan", price: getRandomInt(2800, 19000) },
        { name: "Courtyard by Marriott Kazan", price: getRandomInt(2600, 18000) }
      ],
      flights: [
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU300", dep: "07:00", arr: "09:00", price: getRandomInt(15000, 90000), fromAirport: "KZN", toAirport: "SVO" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7300", dep: "08:00", arr: "10:00", price: getRandomInt(14000, 85000), fromAirport: "KZN", toAirport: "LED" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU301", dep: "09:30", arr: "11:30", price: getRandomInt(16000, 95000), fromAirport: "KZN", toAirport: "NSK" },
        { airline: "Ural Airlines", airlineCode: "U6", flightNumber: "U6301", dep: "11:00", arr: "13:00", price: getRandomInt(15000, 90000), fromAirport: "KZN", toAirport: "SVX" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU302", dep: "13:00", arr: "15:00", price: getRandomInt(17000, 100000), fromAirport: "KZN", toAirport: "SVO" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7301", dep: "15:00", arr: "17:00", price: getRandomInt(16000, 95000), fromAirport: "KZN", toAirport: "LED" }
      ]
    },
    {
      name: "Novosibirsk",
      airport: "Tolmachevo Airport (OVB)",
      hotels: [
        { name: "Marins Park Hotel Novosibirsk", price: getRandomInt(2000, 15000) },
        { name: "Novosibirsk Marriott Hotel", price: getRandomInt(2500, 18000) },
        { name: "Park Inn by Radisson", price: getRandomInt(2200, 16000) },
        { name: "Azimut Hotel Novosibirsk", price: getRandomInt(2000, 14000) },
        { name: "DoubleTree by Hilton Novosibirsk", price: getRandomInt(2500, 18000) }
      ],
      flights: [
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7400", dep: "07:00", arr: "09:30", price: getRandomInt(15000, 90000), fromAirport: "OVB", toAirport: "SVO" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU400", dep: "09:00", arr: "11:30", price: getRandomInt(16000, 95000), fromAirport: "OVB", toAirport: "LED" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7401", dep: "11:00", arr: "13:30", price: getRandomInt(14000, 85000), fromAirport: "OVB", toAirport: "KZN" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU401", dep: "13:30", arr: "16:00", price: getRandomInt(15000, 90000), fromAirport: "OVB", toAirport: "SVX" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7402", dep: "16:00", arr: "18:30", price: getRandomInt(16000, 95000), fromAirport: "OVB", toAirport: "SVO" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU402", dep: "18:00", arr: "20:30", price: getRandomInt(17000, 100000), fromAirport: "OVB", toAirport: "LED" }
      ]
    },
    {
      name: "Yekaterinburg",
      airport: "Koltsovo Airport (SVX)",
      hotels: [
        { name: "Hyatt Regency Ekaterinburg", price: getRandomInt(2000, 14000) },
        { name: "Park Inn by Radisson Yekaterinburg", price: getRandomInt(1800, 12000) },
        { name: "Novotel Yekaterinburg Center", price: getRandomInt(2000, 14000) },
        { name: "Mercure Yekaterinburg", price: getRandomInt(1900, 13000) },
        { name: "Ibis Yekaterinburg Center", price: getRandomInt(1500, 12000) }
      ],
      flights: [
        { airline: "Ural Airlines", airlineCode: "U6", flightNumber: "U6102", dep: "07:00", arr: "09:00", price: getRandomInt(12000, 80000), fromAirport: "SVX", toAirport: "SVO" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU500", dep: "09:00", arr: "11:00", price: getRandomInt(13000, 90000), fromAirport: "SVX", toAirport: "LED" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7500", dep: "11:00", arr: "13:00", price: getRandomInt(12000, 85000), fromAirport: "SVX", toAirport: "KZN" },
        { airline: "Ural Airlines", airlineCode: "U6", flightNumber: "U6103", dep: "13:00", arr: "15:00", price: getRandomInt(13000, 90000), fromAirport: "SVX", toAirport: "NSK" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU501", dep: "15:00", arr: "17:00", price: getRandomInt(14000, 95000), fromAirport: "SVX", toAirport: "KZN" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7501", dep: "17:00", arr: "19:00", price: getRandomInt(15000, 100000), fromAirport: "SVX", toAirport: "OVB" }
      ]
    },
    {
      name: "Novgorod",
      airport: "Yurievo Airport (VGD)",
      hotels: [
        { name: "Park Hotel Veliky Novgorod", price: getRandomInt(1500, 12000) },
        { name: "Slavyanka Hotel", price: getRandomInt(1400, 10000) },
        { name: "Gostiny Dvor Hotel", price: getRandomInt(1600, 11000) },
        { name: "Hotel Aleksandrovskiy", price: getRandomInt(1500, 10000) }
      ],
      flights: [
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU600", dep: "07:00", arr: "09:00", price: getRandomInt(10000, 70000), fromAirport: "VGD", toAirport: "SVO" },
        { airline: "S7 Airlines", airlineCode: "S7", flightNumber: "S7600", dep: "09:00", arr: "11:00", price: getRandomInt(9000, 65000), fromAirport: "VGD", toAirport: "LED" },
        { airline: "Aeroflot", airlineCode: "SU", flightNumber: "SU601", dep: "11:00", arr: "13:00", price: getRandomInt(11000, 75000), fromAirport: "VGD", toAirport: "KZN" }
      ]
    }
  ]
},

  // 26 — United Kingdom
{
  code: "UK",
  country: "United Kingdom",
  cities: [
    // Major city 1 - London
    {
      name: "London",
      airport: "Heathrow Airport (LHR)",
      hotels: [
        { name: "The Savoy", price: getRandomInt(8000, 55000) },
        { name: "The Ritz London", price: getRandomInt(9000, 60000) },
        { name: "Shangri-La The Shard", price: getRandomInt(8500, 58000) },
        { name: "Park Plaza Westminster", price: getRandomInt(6000, 30000) }
      ],
      flights: [
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA100", dep: "06:00", arr: "08:30", price: getRandomInt(25000, 150000), fromAirport: "LHR", toAirport: "JFK" },
        { airline: "Virgin Atlantic", airlineCode: "VS", flightNumber: "VS200", dep: "09:00", arr: "11:30", price: getRandomInt(27000, 160000), fromAirport: "LHR", toAirport: "LAX" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK300", dep: "13:00", arr: "21:30", price: getRandomInt(35000, 200000), fromAirport: "LHR", toAirport: "DXB" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH400", dep: "15:00", arr: "18:00", price: getRandomInt(23000, 140000), fromAirport: "LHR", toAirport: "FRA" },
        { airline: "KLM", airlineCode: "KL", flightNumber: "KL500", dep: "16:00", arr: "19:00", price: getRandomInt(20000, 120000), fromAirport: "LHR", toAirport: "AMS" },
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2101", dep: "18:00", arr: "19:30", price: getRandomInt(15000, 80000), fromAirport: "LHR", toAirport: "LGW" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS601", dep: "20:00", arr: "22:00", price: getRandomInt(12000, 70000), fromAirport: "LHR", toAirport: "MAN" },
        { airline: "Aer Lingus", airlineCode: "EI", flightNumber: "EI701", dep: "21:00", arr: "23:00", price: getRandomInt(14000, 90000), fromAirport: "LHR", toAirport: "DUB" }
      ]
    },
    // Major city 2 - Manchester
    {
      name: "Manchester",
      airport: "Manchester Airport (MAN)",
      hotels: [
        { name: "The Edwardian Manchester", price: getRandomInt(5000, 25000) },
        { name: "Hotel Gotham", price: getRandomInt(4500, 23000) },
        { name: "Radisson Blu Manchester", price: getRandomInt(4000, 22000) },
        { name: "Crowne Plaza Manchester", price: getRandomInt(3500, 20000) }
      ],
      flights: [
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA101", dep: "07:00", arr: "09:00", price: getRandomInt(18000, 120000), fromAirport: "MAN", toAirport: "LHR" },
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2102", dep: "11:00", arr: "13:00", price: getRandomInt(14000, 90000), fromAirport: "MAN", toAirport: "LGW" },
        { airline: "Virgin Atlantic", airlineCode: "VS", flightNumber: "VS201", dep: "15:00", arr: "17:00", price: getRandomInt(22000, 130000), fromAirport: "MAN", toAirport: "JFK" },
        { airline: "KLM", airlineCode: "KL", flightNumber: "KL502", dep: "10:00", arr: "13:00", price: getRandomInt(18000, 120000), fromAirport: "MAN", toAirport: "AMS" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH402", dep: "14:00", arr: "17:00", price: getRandomInt(20000, 125000), fromAirport: "MAN", toAirport: "FRA" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS602", dep: "18:00", arr: "20:00", price: getRandomInt(15000, 90000), fromAirport: "MAN", toAirport: "EDI" },
        { airline: "Aer Lingus", airlineCode: "EI", flightNumber: "EI702", dep: "20:00", arr: "22:00", price: getRandomInt(14000, 85000), fromAirport: "MAN", toAirport: "DUB" }
      ]
    },
    // Major city 3 - Edinburgh
    {
      name: "Edinburgh",
      airport: "Edinburgh Airport (EDI)",
      hotels: [
        { name: "The Balmoral", price: getRandomInt(7000, 45000) },
        { name: "Radisson Blu Edinburgh", price: getRandomInt(6500, 40000) },
        { name: "Sheraton Grand Edinburgh", price: getRandomInt(6000, 38000) },
        { name: "Apex Grassmarket Hotel", price: getRandomInt(5500, 35000) }
      ],
      flights: [
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA301", dep: "06:30", arr: "08:00", price: getRandomInt(15000, 90000), fromAirport: "EDI", toAirport: "LHR" },
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2301", dep: "09:00", arr: "10:30", price: getRandomInt(12000, 80000), fromAirport: "EDI", toAirport: "LGW" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS603", dep: "11:00", arr: "12:30", price: getRandomInt(12000, 85000), fromAirport: "EDI", toAirport: "MAN" },
        { airline: "Aer Lingus", airlineCode: "EI", flightNumber: "EI703", dep: "13:00", arr: "14:30", price: getRandomInt(14000, 90000), fromAirport: "EDI", toAirport: "DUB" },
        { airline: "KLM", airlineCode: "KL", flightNumber: "KL503", dep: "15:00", arr: "17:00", price: getRandomInt(18000, 100000), fromAirport: "EDI", toAirport: "AMS" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH403", dep: "17:00", arr: "19:30", price: getRandomInt(20000, 120000), fromAirport: "EDI", toAirport: "FRA" },
        { airline: "Virgin Atlantic", airlineCode: "VS", flightNumber: "VS302", dep: "19:00", arr: "21:30", price: getRandomInt(22000, 130000), fromAirport: "EDI", toAirport: "JFK" }
      ]
    },
    // Major city 4 - Glasgow
    {
      name: "Glasgow",
      airport: "Glasgow International Airport (GLA)",
      hotels: [
        { name: "Radisson Blu Glasgow", price: getRandomInt(5000, 30000) },
        { name: "Hotel Indigo Glasgow", price: getRandomInt(4500, 28000) },
        { name: "Grand Central Hotel", price: getRandomInt(4000, 25000) },
        { name: "Malmaison Glasgow", price: getRandomInt(3500, 23000) }
      ],
      flights: [
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA401", dep: "07:00", arr: "08:30", price: getRandomInt(15000, 90000), fromAirport: "GLA", toAirport: "LHR" },
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2401", dep: "09:00", arr: "10:30", price: getRandomInt(12000, 80000), fromAirport: "GLA", toAirport: "LGW" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS604", dep: "11:00", arr: "12:30", price: getRandomInt(12000, 85000), fromAirport: "GLA", toAirport: "MAN" },
        { airline: "Aer Lingus", airlineCode: "EI", flightNumber: "EI704", dep: "13:00", arr: "14:30", price: getRandomInt(14000, 90000), fromAirport: "GLA", toAirport: "DUB" },
        { airline: "KLM", airlineCode: "KL", flightNumber: "KL504", dep: "15:00", arr: "17:00", price: getRandomInt(18000, 100000), fromAirport: "GLA", toAirport: "AMS" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH404", dep: "17:00", arr: "19:30", price: getRandomInt(20000, 120000), fromAirport: "GLA", toAirport: "FRA" },
        { airline: "Virgin Atlantic", airlineCode: "VS", flightNumber: "VS303", dep: "19:00", arr: "21:30", price: getRandomInt(22000, 130000), fromAirport: "GLA", toAirport: "JFK" }
      ]
    },
    // Major city 5 - Aberdeen
    {
      name: "Aberdeen",
      airport: "Aberdeen International Airport (ABZ)",
      hotels: [
        { name: "Malmaison Aberdeen", price: getRandomInt(4000, 25000) },
        { name: "Hilton Aberdeen Treetops", price: getRandomInt(4500, 28000) },
        { name: "The Marcliffe Hotel", price: getRandomInt(4000, 24000) },
        { name: "Ardoe House Hotel", price: getRandomInt(3500, 22000) }
      ],
      flights: [
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2501", dep: "06:00", arr: "07:30", price: getRandomInt(12000, 80000), fromAirport: "ABZ", toAirport: "LHR" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA801", dep: "08:00", arr: "09:30", price: getRandomInt(15000, 90000), fromAirport: "ABZ", toAirport: "LGW" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS805", dep: "10:00", arr: "11:30", price: getRandomInt(12000, 85000), fromAirport: "ABZ", toAirport: "MAN" },
        { airline: "Aer Lingus", airlineCode: "EI", flightNumber: "EI805", dep: "12:00", arr: "13:30", price: getRandomInt(14000, 90000), fromAirport: "ABZ", toAirport: "DUB" },
        { airline: "KLM", airlineCode: "KL", flightNumber: "KL805", dep: "14:00", arr: "15:30", price: getRandomInt(18000, 100000), fromAirport: "ABZ", toAirport: "AMS" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH805", dep: "16:00", arr: "17:30", price: getRandomInt(20000, 120000), fromAirport: "ABZ", toAirport: "FRA" },
        { airline: "Virgin Atlantic", airlineCode: "VS", flightNumber: "VS805", dep: "18:00", arr: "19:30", price: getRandomInt(22000, 130000), fromAirport: "ABZ", toAirport: "JFK" }
      ]
    },
    // Remaining cities with fewer flights
    {
      name: "Inverness",
      airport: "Inverness Airport (INV)",
      hotels: [
        { name: "Kingsmills Hotel", price: getRandomInt(3500, 20000) },
        { name: "Macdonald Drumossie Hotel", price: getRandomInt(3000, 18000) }
      ],
      flights: [
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2901", dep: "06:00", arr: "07:30", price: getRandomInt(12000, 80000), fromAirport: "INV", toAirport: "LHR" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA901", dep: "08:00", arr: "09:30", price: getRandomInt(15000, 90000), fromAirport: "INV", toAirport: "LGW" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS905", dep: "10:00", arr: "11:30", price: getRandomInt(12000, 85000), fromAirport: "INV", toAirport: "MAN" }
      ]
    },
    {
      name: "Dundee",
      airport: "Dundee Airport (DND)",
      hotels: [
        { name: "Apex City Quay Hotel", price: getRandomInt(3500, 20000) },
        { name: "Best Western Dundee", price: getRandomInt(3000, 18000) }
      ],
      flights: [
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2910", dep: "06:00", arr: "07:30", price: getRandomInt(12000, 80000), fromAirport: "DND", toAirport: "LHR" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA910", dep: "08:00", arr: "09:30", price: getRandomInt(15000, 90000), fromAirport: "DND", toAirport: "LGW" },
        { airline: "Jet2", airlineCode: "LS", flightNumber: "LS910", dep: "10:00", arr: "11:30", price: getRandomInt(12000, 85000), fromAirport: "DND", toAirport: "MAN" }
      ]
    },
    {
      name: "Stirling",
      airport: "Stirling Airport (STL)",
      hotels: [
        { name: "Hotel Colessio", price: getRandomInt(3000, 18000) },
        { name: "Stirling Court Hotel", price: getRandomInt(2500, 15000) }
      ],
      flights: [
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2920", dep: "06:00", arr: "07:30", price: getRandomInt(12000, 80000), fromAirport: "STL", toAirport: "LHR" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA920", dep: "08:00", arr: "09:30", price: getRandomInt(15000, 90000), fromAirport: "STL", toAirport: "LGW" }
      ]
    },
    {
      name: "Cardiff",
      airport: "Cardiff Airport (CWL)",
      hotels: [
        { name: "Clayton Hotel Cardiff", price: getRandomInt(3500, 20000) },
        { name: "Radisson Blu Cardiff", price: getRandomInt(3000, 18000) }
      ],
      flights: [
        { airline: "EasyJet", airlineCode: "U2", flightNumber: "U2801", dep: "06:00", arr: "08:00", price: getRandomInt(12000, 80000), fromAirport: "CWL", toAirport: "LGW" },
        { airline: "British Airways", airlineCode: "BA", flightNumber: "BA801", dep: "08:00", arr: "10:00", price: getRandomInt(15000, 90000), fromAirport: "CWL", toAirport: "LHR" }
      ]
    }
  ]
},

  // 27 — Greece
{
  code: "GR",
  country: "Greece",
  cities: [
    {
      name: "Athens",
      airport: "Athens International Airport (ATH)",
      hotels: [
        { name: "Hotel Grande Bretagne", price: getRandomInt(6000, 40000) },
        { name: "Electra Metropolis", price: getRandomInt(5000, 30000) },
        { name: "King George Hotel", price: getRandomInt(5500, 32000) },
        { name: "Coco-Mat Athens", price: getRandomInt(4500, 25000) }
      ],
      flights: [
        { airline: "Aegean Airlines", airlineCode: "A3", flightNumber: "A3101", dep: "06:00", arr: "08:30", price: getRandomInt(20000, 120000), fromAirport: "ATH", toAirport: "JFK" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH202", dep: "09:00", arr: "11:30", price: getRandomInt(22000, 140000), fromAirport: "ATH", toAirport: "FRA" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK303", dep: "12:00", arr: "20:30", price: getRandomInt(35000, 200000), fromAirport: "ATH", toAirport: "DXB" }
      ]
    },
    {
      name: "Thessaloniki",
      airport: "Thessaloniki Airport (SKG)",
      hotels: [
        { name: "The Met Hotel", price: getRandomInt(4500, 23000) },
        { name: "Makedonia Palace", price: getRandomInt(5000, 27000) },
        { name: "Electra Palace Thessaloniki", price: getRandomInt(4000, 22000) }
      ],
      flights: [
        { airline: "Aegean Airlines", airlineCode: "A3", flightNumber: "A3201", dep: "07:00", arr: "09:00", price: getRandomInt(18000, 100000), fromAirport: "SKG", toAirport: "ATH" },
        { airline: "Olympic Air", airlineCode: "OA", flightNumber: "OA201", dep: "10:00", arr: "12:00", price: getRandomInt(15000, 90000), fromAirport: "SKG", toAirport: "ATH" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH203", dep: "13:00", arr: "15:30", price: getRandomInt(20000, 120000), fromAirport: "SKG", toAirport: "FRA" }
      ]
    },
    {
      name: "Santorini",
      airport: "Santorini International Airport (JTR)",
      hotels: [
        { name: "Katikies Hotel", price: getRandomInt(8000, 60000) },
        { name: "Grace Hotel Santorini", price: getRandomInt(8500, 62000) },
        { name: "Canaves Oia Hotel", price: getRandomInt(9000, 65000) }
      ],
      flights: [
        { airline: "Aegean Airlines", airlineCode: "A3", flightNumber: "A3301", dep: "06:00", arr: "07:00", price: getRandomInt(12000, 90000), fromAirport: "JTR", toAirport: "ATH" },
        { airline: "Olympic Air", airlineCode: "OA", flightNumber: "OA301", dep: "09:00", arr: "10:00", price: getRandomInt(11000, 85000), fromAirport: "JTR", toAirport: "ATH" },
        { airline: "Sky Express", airlineCode: "GQ", flightNumber: "GQ101", dep: "12:00", arr: "13:00", price: getRandomInt(10000, 80000), fromAirport: "JTR", toAirport: "HER" }
      ]
    }
  ]
},

// 28 — Switzerland
{
  code: "CH",
  country: "Switzerland",
  cities: [
    {
      name: "Zurich",
      airport: "Zurich Airport (ZRH)",
      hotels: [
        { name: "Baur au Lac", price: getRandomInt(9000, 65000) },
        { name: "The Dolder Grand", price: getRandomInt(10000, 70000) },
        { name: "Hotel Storchen", price: getRandomInt(8000, 50000) }
      ],
      flights: [
        { airline: "Swiss", airlineCode: "LX", flightNumber: "LX101", dep: "06:00", arr: "08:30", price: getRandomInt(20000, 120000), fromAirport: "ZRH", toAirport: "FRA" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH102", dep: "09:00", arr: "11:30", price: getRandomInt(22000, 140000), fromAirport: "ZRH", toAirport: "MUC" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK103", dep: "12:00", arr: "20:30", price: getRandomInt(35000, 200000), fromAirport: "ZRH", toAirport: "DXB" }
      ]
    },
    {
      name: "Geneva",
      airport: "Geneva Airport (GVA)",
      hotels: [
        { name: "Hotel President Wilson", price: getRandomInt(8500, 60000) },
        { name: "Four Seasons Geneva", price: getRandomInt(9000, 65000) }
      ],
      flights: [
        { airline: "Swiss", airlineCode: "LX", flightNumber: "LX201", dep: "07:00", arr: "09:30", price: getRandomInt(18000, 100000), fromAirport: "GVA", toAirport: "ZRH" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH202", dep: "10:00", arr: "12:30", price: getRandomInt(20000, 120000), fromAirport: "GVA", toAirport: "FRA" }
      ]
    }
  ]
},

// 29 — Austria
{
  code: "AT",
  country: "Austria",
  cities: [
    {
      name: "Vienna",
      airport: "Vienna International Airport (VIE)",
      hotels: [
        { name: "Hotel Sacher", price: getRandomInt(8000, 45000) },
        { name: "The Ritz-Carlton Vienna", price: getRandomInt(7500, 42000) },
        { name: "Palais Hansen Kempinski", price: getRandomInt(7000, 40000) }
      ],
      flights: [
        { airline: "Austrian Airlines", airlineCode: "OS", flightNumber: "OS101", dep: "06:00", arr: "08:30", price: getRandomInt(20000, 120000), fromAirport: "VIE", toAirport: "FRA" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH201", dep: "09:00", arr: "11:30", price: getRandomInt(22000, 140000), fromAirport: "VIE", toAirport: "MUC" }
      ]
    },
    {
      name: "Salzburg",
      airport: "Salzburg Airport (SZG)",
      hotels: [
        { name: "Hotel Goldener Hirsch", price: getRandomInt(6000, 30000) },
        { name: "Sheraton Grand Salzburg", price: getRandomInt(5500, 28000) }
      ],
      flights: [
        { airline: "Austrian Airlines", airlineCode: "OS", flightNumber: "OS201", dep: "07:00", arr: "08:30", price: getRandomInt(15000, 90000), fromAirport: "SZG", toAirport: "VIE" },
        { airline: "Lufthansa", airlineCode: "LH", flightNumber: "LH202", dep: "09:00", arr: "10:30", price: getRandomInt(16000, 95000), fromAirport: "SZG", toAirport: "FRA" }
      ]
    }
  ]
},

  // 30 — Norway
{
  code: "NO",
  country: "Norway",
  cities: [
    {
      name: "Oslo",
      airport: "Oslo Gardermoen Airport (OSL)",
      hotels: [
        { name: "Grand Hotel Oslo", price: getRandomInt(6000, 35000) },
        { name: "Clarion Hotel The Hub", price: getRandomInt(5000, 30000) }
      ],
      flights: [
        { airline: "SAS", airlineCode: "SK", flightNumber: "SK101", dep: "06:00", arr: "08:00", price: getRandomInt(20000, 120000), fromAirport: "OSL", toAirport: "CPH" },
        { airline: "Norwegian", airlineCode: "DY", flightNumber: "DY201", dep: "09:00", arr: "11:00", price: getRandomInt(18000, 100000), fromAirport: "OSL", toAirport: "ARN" }
      ]
    },
    {
      name: "Bergen",
      airport: "Bergen Airport (BGO)",
      hotels: [
        { name: "Hotel Norge", price: getRandomInt(4500, 25000) },
        { name: "Bergen Børs Hotel", price: getRandomInt(4200, 23000) }
      ],
      flights: [
        { airline: "SAS", airlineCode: "SK", flightNumber: "SK201", dep: "07:00", arr: "08:00", price: getRandomInt(15000, 90000), fromAirport: "BGO", toAirport: "OSL" },
        { airline: "Norwegian", airlineCode: "DY", flightNumber: "DY202", dep: "10:00", arr: "11:00", price: getRandomInt(14000, 85000), fromAirport: "BGO", toAirport: "OSL" }
      ]
    }
  ]
},

  // 31 — USA
{
  code: "US",
  country: "United States",
  cities: [
    // Major city 1
    {
      name: "New York",
      airport: "JFK International Airport (JFK)",
      hotels: [
        { name: "The Plaza", price: getRandomInt(10000, 70000) },
        { name: "Four Seasons New York", price: getRandomInt(12000, 80000) },
        { name: "The Standard", price: getRandomInt(8000, 50000) },
        { name: "Park Hyatt NYC", price: getRandomInt(9000, 60000) }
      ],
      flights: [
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL101", dep: "06:00", arr: "09:00", price: getRandomInt(20000, 120000), fromAirport: "JFK", toAirport: "LAX" },
        { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA202", dep: "08:00", arr: "11:00", price: getRandomInt(22000, 140000), fromAirport: "JFK", toAirport: "ORD" },
        { airline: "United Airlines", airlineCode: "UA", flightNumber: "UA303", dep: "10:00", arr: "13:00", price: getRandomInt(21000, 130000), fromAirport: "JFK", toAirport: "MIA" },
        { airline: "JetBlue", airlineCode: "B6", flightNumber: "B6101", dep: "12:00", arr: "15:00", price: getRandomInt(18000, 110000), fromAirport: "JFK", toAirport: "BOS" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK201", dep: "18:00", arr: "06:00", price: getRandomInt(35000, 200000), fromAirport: "JFK", toAirport: "DXB" },
        { airline: "Spirit Airlines", airlineCode: "NK", flightNumber: "NK400", dep: "14:00", arr: "17:00", price: getRandomInt(15000, 90000), fromAirport: "JFK", toAirport: "ATL" },
        { airline: "Southwest", airlineCode: "WN", flightNumber: "WN701", dep: "16:00", arr: "19:00", price: getRandomInt(14000, 85000), fromAirport: "JFK", toAirport: "PHX" }
      ]
    },
    // Major city 2
    {
      name: "Los Angeles",
      airport: "Los Angeles International Airport (LAX)",
      hotels: [
        { name: "The Beverly Hills Hotel", price: getRandomInt(9000, 65000) },
        { name: "The Ritz-Carlton LA", price: getRandomInt(8500, 55000) },
        { name: "Hotel Bel-Air", price: getRandomInt(8000, 50000) },
        { name: "Fairmont Miramar", price: getRandomInt(7500, 48000) }
      ],
      flights: [
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL401", dep: "07:00", arr: "10:00", price: getRandomInt(20000, 120000), fromAirport: "LAX", toAirport: "JFK" },
        { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA502", dep: "09:00", arr: "12:00", price: getRandomInt(22000, 140000), fromAirport: "LAX", toAirport: "ORD" },
        { airline: "United Airlines", airlineCode: "UA", flightNumber: "UA603", dep: "11:00", arr: "14:00", price: getRandomInt(21000, 130000), fromAirport: "LAX", toAirport: "MIA" },
        { airline: "JetBlue", airlineCode: "B6", flightNumber: "B6201", dep: "13:00", arr: "16:00", price: getRandomInt(18000, 110000), fromAirport: "LAX", toAirport: "BOS" },
        { airline: "Spirit Airlines", airlineCode: "NK", flightNumber: "NK501", dep: "15:00", arr: "18:00", price: getRandomInt(15000, 90000), fromAirport: "LAX", toAirport: "ATL" },
        { airline: "Southwest", airlineCode: "WN", flightNumber: "WN801", dep: "17:00", arr: "20:00", price: getRandomInt(14000, 85000), fromAirport: "LAX", toAirport: "PHX" },
        { airline: "Alaska Airlines", airlineCode: "AS", flightNumber: "AS701", dep: "19:00", arr: "22:00", price: getRandomInt(16000, 95000), fromAirport: "LAX", toAirport: "SEA" }
      ]
    },
    // Major city 3
    {
      name: "Chicago",
      airport: "O'Hare International Airport (ORD)",
      hotels: [
        { name: "The Peninsula Chicago", price: getRandomInt(8000, 55000) },
        { name: "Four Seasons Chicago", price: getRandomInt(7500, 50000) },
        { name: "Langham Chicago", price: getRandomInt(7000, 48000) },
        { name: "Trump International Hotel", price: getRandomInt(6500, 45000) }
      ],
      flights: [
        { airline: "United Airlines", airlineCode: "UA", flightNumber: "UA701", dep: "06:30", arr: "09:30", price: getRandomInt(18000, 110000), fromAirport: "ORD", toAirport: "JFK" },
        { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA802", dep: "08:30", arr: "11:30", price: getRandomInt(20000, 120000), fromAirport: "ORD", toAirport: "LAX" },
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL903", dep: "10:30", arr: "13:30", price: getRandomInt(19000, 115000), fromAirport: "ORD", toAirport: "MIA" },
        { airline: "Spirit Airlines", airlineCode: "NK", flightNumber: "NK601", dep: "12:30", arr: "15:30", price: getRandomInt(15000, 90000), fromAirport: "ORD", toAirport: "ATL" },
        { airline: "Southwest", airlineCode: "WN", flightNumber: "WN901", dep: "14:30", arr: "17:30", price: getRandomInt(14000, 85000), fromAirport: "ORD", toAirport: "PHX" },
        { airline: "JetBlue", airlineCode: "B6", flightNumber: "B6301", dep: "16:30", arr: "19:30", price: getRandomInt(18000, 110000), fromAirport: "ORD", toAirport: "BOS" }
      ]
    },
    // Major city 4
    {
      name: "San Francisco",
      airport: "San Francisco International Airport (SFO)",
      hotels: [
        { name: "Fairmont San Francisco", price: getRandomInt(8500, 60000) },
        { name: "The St. Regis SF", price: getRandomInt(9000, 65000) },
        { name: "Hotel Nikko", price: getRandomInt(8000, 55000) },
        { name: "Palace Hotel SF", price: getRandomInt(7500, 50000) }
      ],
      flights: [
        { airline: "United Airlines", airlineCode: "UA", flightNumber: "UA801", dep: "07:00", arr: "10:00", price: getRandomInt(18000, 110000), fromAirport: "SFO", toAirport: "LAX" },
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL902", dep: "09:00", arr: "12:00", price: getRandomInt(19000, 120000), fromAirport: "SFO", toAirport: "JFK" },
        { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA903", dep: "11:00", arr: "14:00", price: getRandomInt(20000, 125000), fromAirport: "SFO", toAirport: "ORD" },
        { airline: "Spirit Airlines", airlineCode: "NK", flightNumber: "NK701", dep: "13:00", arr: "16:00", price: getRandomInt(15000, 95000), fromAirport: "SFO", toAirport: "SEA" },
        { airline: "Southwest", airlineCode: "WN", flightNumber: "WN1001", dep: "15:00", arr: "18:00", price: getRandomInt(14000, 90000), fromAirport: "SFO", toAirport: "PHX" },
        { airline: "JetBlue", airlineCode: "B6", flightNumber: "B6401", dep: "17:00", arr: "20:00", price: getRandomInt(18000, 115000), fromAirport: "SFO", toAirport: "MIA" }
      ]
    },
    // Major city 5
    {
      name: "Miami",
      airport: "Miami International Airport (MIA)",
      hotels: [
        { name: "Fontainebleau Miami Beach", price: getRandomInt(5000, 35000) },
        { name: "Eden Roc Miami", price: getRandomInt(4500, 30000) },
        { name: "The Biltmore Miami", price: getRandomInt(4000, 28000) },
        { name: "W South Beach", price: getRandomInt(4500, 32000) }
      ],
      flights: [
        { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA901", dep: "06:00", arr: "09:00", price: getRandomInt(15000, 95000), fromAirport: "MIA", toAirport: "JFK" },
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL1002", dep: "08:00", arr: "11:00", price: getRandomInt(16000, 100000), fromAirport: "MIA", toAirport: "ORD" },
        { airline: "United Airlines", airlineCode: "UA", flightNumber: "UA1003", dep: "10:00", arr: "13:00", price: getRandomInt(18000, 110000), fromAirport: "MIA", toAirport: "LAX" },
        { airline: "JetBlue", airlineCode: "B6", flightNumber: "B6501", dep: "12:00", arr: "15:00", price: getRandomInt(14000, 90000), fromAirport: "MIA", toAirport: "BOS" },
        { airline: "Spirit Airlines", airlineCode: "NK", flightNumber: "NK801", dep: "14:00", arr: "17:00", price: getRandomInt(15000, 95000), fromAirport: "MIA", toAirport: "ATL" },
        { airline: "Southwest", airlineCode: "WN", flightNumber: "WN1101", dep: "16:00", arr: "19:00", price: getRandomInt(14000, 90000), fromAirport: "MIA", toAirport: "PHX" }
      ]
    },
    // Remaining city 1
    {
      name: "Seattle",
      airport: "Seattle-Tacoma International Airport (SEA)",
      hotels: [
        { name: "Fairmont Olympic Hotel", price: getRandomInt(5000, 35000) },
        { name: "Four Seasons Seattle", price: getRandomInt(5500, 38000) }
      ],
      flights: [
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL1101", dep: "07:00", arr: "10:00", price: getRandomInt(15000, 95000), fromAirport: "SEA", toAirport: "LAX" },
        { airline: "Alaska Airlines", airlineCode: "AS", flightNumber: "AS1201", dep: "09:00", arr: "12:00", price: getRandomInt(14000, 90000), fromAirport: "SEA", toAirport: "SFO" },
        { airline: "Spirit Airlines", airlineCode: "NK", flightNumber: "NK901", dep: "11:00", arr: "14:00", price: getRandomInt(13000, 85000), fromAirport: "SEA", toAirport: "ORD" }
      ]
    },
    // Remaining city 2
    {
      name: "Boston",
      airport: "Logan International Airport (BOS)",
      hotels: [
        { name: "Boston Harbor Hotel", price: getRandomInt(5000, 35000) },
        { name: "Four Seasons Boston", price: getRandomInt(5500, 38000) }
      ],
      flights: [
        { airline: "JetBlue", airlineCode: "B6", flightNumber: "B6601", dep: "06:00", arr: "09:00", price: getRandomInt(15000, 95000), fromAirport: "BOS", toAirport: "JFK" },
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL1202", dep: "08:00", arr: "11:00", price: getRandomInt(16000, 100000), fromAirport: "BOS", toAirport: "ORD" },
        { airline: "American Airlines", airlineCode: "AA", flightNumber: "AA1303", dep: "10:00", arr: "13:00", price: getRandomInt(15000, 95000), fromAirport: "BOS", toAirport: "MIA" }
      ]
    }
  ]
},

// 32 — New Zealand
{
  code: "NZ",
  country: "New Zealand",
  cities: [
    {
      name: "Auckland",
      airport: "Auckland Airport (AKL)",
      hotels: [
        { name: "Sofitel Auckland", price: getRandomInt(5000, 35000) },
        { name: "Cordis Auckland", price: getRandomInt(4500, 30000) }
      ],
      flights: [
        { airline: "Air New Zealand", airlineCode: "NZ", flightNumber: "NZ101", dep: "07:00", arr: "09:30", price: getRandomInt(15000, 90000), fromAirport: "AKL", toAirport: "WLG" },
        { airline: "Qantas", airlineCode: "QF", flightNumber: "QF201", dep: "12:00", arr: "14:30", price: getRandomInt(18000, 100000), fromAirport: "AKL", toAirport: "CHC" }
      ]
    },
    {
      name: "Wellington",
      airport: "Wellington Airport (WLG)",
      hotels: [
        { name: "InterContinental Wellington", price: getRandomInt(4000, 25000) },
        { name: "QT Wellington", price: getRandomInt(3800, 23000) }
      ],
      flights: [
        { airline: "Air New Zealand", airlineCode: "NZ", flightNumber: "NZ201", dep: "08:00", arr: "09:00", price: getRandomInt(12000, 85000), fromAirport: "WLG", toAirport: "AKL" }
      ]
    },
    {
      name: "Queenstown",
      airport: "Queenstown Airport (ZQN)",
      hotels: [
        { name: "Eichardt's Private Hotel", price: getRandomInt(7000, 50000) },
        { name: "The Rees Hotel", price: getRandomInt(6500, 45000) }
      ],
      flights: [
        { airline: "Air New Zealand", airlineCode: "NZ", flightNumber: "NZ301", dep: "09:00", arr: "10:30", price: getRandomInt(13000, 90000), fromAirport: "ZQN", toAirport: "AKL" }
      ]
    }
  ]
},

// 33 — Jordan
{
  code: "JO",
  country: "Jordan",
  cities: [
    {
      name: "Amman",
      airport: "Queen Alia International Airport (AMM)",
      hotels: [
        { name: "The St. Regis Amman", price: getRandomInt(6000, 35000) },
        { name: "Four Seasons Amman", price: getRandomInt(7000, 45000) }
      ],
      flights: [
        { airline: "Royal Jordanian", airlineCode: "RJ", flightNumber: "RJ101", dep: "06:00", arr: "08:30", price: getRandomInt(15000, 90000), fromAirport: "AMM", toAirport: "DXB" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK201", dep: "09:00", arr: "11:30", price: getRandomInt(18000, 100000), fromAirport: "AMM", toAirport: "JFK" }
      ]
    },
    {
      name: "Aqaba",
      airport: "King Hussein International Airport (AQJ)",
      hotels: [
        { name: "Kempinski Aqaba", price: getRandomInt(5500, 30000) },
        { name: "Hilton Aqaba", price: getRandomInt(4500, 25000) }
      ],
      flights: [
        { airline: "Royal Jordanian", airlineCode: "RJ", flightNumber: "RJ201", dep: "07:00", arr: "08:00", price: getRandomInt(12000, 80000), fromAirport: "AQJ", toAirport: "AMM" }
      ]
    }
  ]
},

// 34 — Israel
{
  code: "IL",
  country: "Israel",
  cities: [
    {
      name: "Tel Aviv",
      airport: "Ben Gurion Airport (TLV)",
      hotels: [
        { name: "The Norman Tel Aviv", price: getRandomInt(7000, 45000) },
        { name: "Carlton Tel Aviv", price: getRandomInt(6000, 35000) }
      ],
      flights: [
        { airline: "El Al", airlineCode: "LY", flightNumber: "LY101", dep: "06:00", arr: "08:30", price: getRandomInt(15000, 90000), fromAirport: "TLV", toAirport: "JFK" },
        { airline: "Delta", airlineCode: "DL", flightNumber: "DL201", dep: "09:00", arr: "11:30", price: getRandomInt(18000, 100000), fromAirport: "TLV", toAirport: "LHR" }
      ]
    },
    {
      name: "Jerusalem",
      airport: "Ben Gurion Airport (TLV)",
      hotels: [
        { name: "King David Hotel", price: getRandomInt(8000, 50000) },
        { name: "Waldorf Astoria Jerusalem", price: getRandomInt(9000, 60000) }
      ],
      flights: [
        { airline: "El Al", airlineCode: "LY", flightNumber: "LY201", dep: "07:00", arr: "09:30", price: getRandomInt(16000, 95000), fromAirport: "TLV", toAirport: "CDG" }
      ]
    }
  ]
},

// 35 — Hong Kong
{
  code: "HK",
  country: "Hong Kong",
  cities: [
    {
      name: "Hong Kong",
      airport: "Hong Kong International Airport (HKG)",
      hotels: [
        { name: "The Peninsula Hong Kong", price: getRandomInt(9000, 70000) },
        { name: "Four Seasons Hong Kong", price: getRandomInt(10000, 80000) },
        { name: "Mandarin Oriental", price: getRandomInt(8500, 65000) }
      ],
      flights: [
        { airline: "Cathay Pacific", airlineCode: "CX", flightNumber: "CX101", dep: "06:00", arr: "08:30", price: getRandomInt(20000, 120000), fromAirport: "HKG", toAirport: "NRT" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK201", dep: "09:00", arr: "11:30", price: getRandomInt(25000, 150000), fromAirport: "HKG", toAirport: "DXB" }
      ]
    }
  ]
},

// 36 — Vietnam
{
  code: "VN",
  country: "Vietnam",
  cities: [
    {
      name: "Hanoi",
      airport: "Noi Bai International Airport (HAN)",
      hotels: [
        { name: "Sofitel Legend Metropole", price: getRandomInt(5000, 35000) },
        { name: "Lotte Hotel Hanoi", price: getRandomInt(4500, 30000) }
      ],
      flights: [
        { airline: "Vietnam Airlines", airlineCode: "VN", flightNumber: "VN101", dep: "06:00", arr: "08:30", price: getRandomInt(15000, 90000), fromAirport: "HAN", toAirport: "SGN" },
        { airline: "Emirates", airlineCode: "EK", flightNumber: "EK201", dep: "09:00", arr: "11:30", price: getRandomInt(25000, 150000), fromAirport: "HAN", toAirport: "DXB" }
      ]
    },
    {
      name: "Ho Chi Minh City",
      airport: "Tan Son Nhat Airport (SGN)",
      hotels: [
        { name: "The Reverie Saigon", price: getRandomInt(5500, 38000) },
        { name: "Park Hyatt Saigon", price: getRandomInt(6000, 40000) }
      ],
      flights: [
        { airline: "Vietnam Airlines", airlineCode: "VN", flightNumber: "VN201", dep: "07:00", arr: "09:00", price: getRandomInt(14000, 85000), fromAirport: "SGN", toAirport: "HAN" },
        { airline: "Singapore Airlines", airlineCode: "SQ", flightNumber: "SQ301", dep: "10:00", arr: "12:30", price: getRandomInt(20000, 120000), fromAirport: "SGN", toAirport: "SIN" }
      ]
    },
    {
      name: "Da Nang",
      airport: "Da Nang International Airport (DAD)",
      hotels: [
        { name: "Furama Resort", price: getRandomInt(3000, 20000) },
        { name: "Hyatt Regency Da Nang", price: getRandomInt(3500, 25000) }
      ],
      flights: [
        { airline: "Vietnam Airlines", airlineCode: "VN", flightNumber: "VN301", dep: "08:00", arr: "09:30", price: getRandomInt(12000, 80000), fromAirport: "DAD", toAirport: "HAN" }
      ]
    }
  ]
}





// 25 — KENYA
// {
//   code: "KE",
//   country: "Kenya",
//   cities: [
//     {
//       name: "Nairobi",
//       hotels: [
//         { name: "Nairobi Serena Hotel", price: getRandomInt(3000, 26000) },
//         { name: "Radisson Blu Nairobi", price: getRandomInt(3200, 24000) },
//         { name: "Hemingways Nairobi", price: getRandomInt(3500, 28000) }
//       ],
//       flights:("Jomo Kenyatta International Airport")
//     },
//     {
//       name: "Mombasa",
//       hotels: [
//         { name: "Sarova Whitesands", price: getRandomInt(2800, 22000) },
//         { name: "Voyager Beach Resort", price: getRandomInt(2500, 20000) }
//       ],
//       flights: ("Moi International Airport")
//     },
//     {
//       name: "Kisumu",
//       hotels: [
//         { name: "Acacia Premier", price: getRandomInt(2400, 18000) },
//         { name: "Imperial Hotel", price: getRandomInt(2200, 16500) }
//       ],
//       flights: ("Kisumu International Airport")
//     }
//   ]
// },
// 26 — RUSSIA
// {
//   code: "RU",
//   country: "Russia",
//   cities: [
//     {
//       name: "Moscow",
//       hotels: [
//         { name: "Hotel Baltschug Kempinski", price: getRandomInt(4000, 35000) },
//         { name: "The Ritz-Carlton Moscow", price: getRandomInt(5000, 40000) },
//         { name: "Ararat Park Hyatt", price: getRandomInt(4500, 36000) },
//         { name: "Radisson Blu Moscow", price: getRandomInt(3500, 25000) }
//       ],
//       flights: ("Sheremetyevo International Airport")
//     },
//     {
//       name: "Saint Petersburg",
//       hotels: [
//         { name: "Belmond Grand Hotel", price: getRandomInt(3500, 30000) },
//         { name: "Four Seasons Lion Palace", price: getRandomInt(4500, 33000) }
//       ],
//       flights: ("Pulkovo Airport")
//     },
//     {
//       name: "Kazan",
//       hotels: [
//         { name: "Riviera Hotel", price: getRandomInt(2500, 18000) },
//         { name: "Korston Tower", price: getRandomInt(2300, 16000) }
//       ],
//       flights: ("Kazan International Airport")
//     }
//   ]
// },
//  27 - UK
// {
//   code: "UK",
//   country: "United Kingdom",
//   cities: [
//     {
//       name: "London",
//       hotels: [
//         { name: "The Savoy", price: getRandomInt(8000, 55000) },
//         { name: "The Ritz London", price: getRandomInt(9000, 60000) },
//         { name: "Shangri-La The Shard", price: getRandomInt(8500, 58000) },
//         { name: "Park Plaza Westminster", price: getRandomInt(6000, 30000) }
//       ],
//       flights: ("Heathrow Airport")
//     },
//     {
//       name: "Manchester",
//       hotels: [
//         { name: "The Edwardian Manchester", price: getRandomInt(5000, 25000) },
//         { name: "Hotel Gotham", price: getRandomInt(4500, 23000) }
//       ],
//       flights: ("Manchester Airport")
//     },
//     {
//       name: "Birmingham",
//       hotels: [
//         { name: "Hyatt Regency Birmingham", price: getRandomInt(4500, 24000) },
//         { name: "Radisson Blu Birmingham", price: getRandomInt(4000, 21000) }
//       ],
//       flights: ("Birmingham Airport")
//     },
//     {
//       name: "Liverpool",
//       hotels: [
//         { name: "Hope Street Hotel", price: getRandomInt(4000, 20000) },
//         { name: "Titanic Hotel", price: getRandomInt(4500, 23000) }
//       ],
//       flights: ("Liverpool John Lennon Airport")
//     },
//     {
//       name: "Edinburgh",
//       hotels: [
//         { name: "The Balmoral", price: getRandomInt(6500, 35000) },
//         { name: "Waldorf Astoria Edinburgh", price: getRandomInt(6000, 31000) }
//       ],
//       flights: ("Edinburgh Airport")
//     },
//     {
//       name: "Glasgow",
//       hotels: [
//         { name: "Grand Central Hotel", price: getRandomInt(4200, 22000) },
//         { name: "Kimpton Blythswood Square", price: getRandomInt(5000, 26000) }
//       ],
//       flights: ("Glasgow Airport")
//     },
//     {
//       name: "Leeds",
//       hotels: [
//         { name: "The Queens Hotel", price: getRandomInt(4000, 20000) },
//         { name: "DoubleTree by Hilton", price: getRandomInt(3800, 18000) }
//       ],
//       flights: ("Leeds Bradford Airport")
//     },
//     {
//       name: "Bristol",
//       hotels: [
//         { name: "Bristol Harbour Hotel", price: getRandomInt(4500, 22000) },
//         { name: "Hotel du Vin Bristol", price: getRandomInt(4300, 21000) }
//       ],
//       flights: ("Bristol Airport")
//     },
//     {
//       name: "Newcastle",
//       hotels: [
//         { name: "Maldron Hotel Newcastle", price: getRandomInt(3500, 17000) },
//         { name: "Crowne Plaza Newcastle", price: getRandomInt(4200, 20000) }
//       ],
//       flights: ("Newcastle Airport")
//     },
//     {
//       name: "Nottingham",
//       hotels: [
//         { name: "Crowne Plaza Nottingham", price: getRandomInt(3800, 19000) },
//         { name: "St James Hotel", price: getRandomInt(3200, 16000) }
//       ],
//       flights: ("East Midlands Airport")
//     },
//     {
//       name: "Sheffield",
//       hotels: [
//         { name: "Mercure Sheffield St Paul's", price: getRandomInt(3500, 18000) },
//         { name: "Leopold Hotel", price: getRandomInt(3200, 16000) }
//       ],
//       flights: ("Doncaster Sheffield Airport")
//     },
//     {
//       name: "Cardiff",
//       hotels: [
//         { name: "Clayton Hotel Cardiff", price: getRandomInt(3000, 15000) },
//         { name: "Park Plaza Cardiff", price: getRandomInt(3500, 17000) }
//       ],
//       flights: ("Cardiff Airport")
//     },
//     {
//       name: "Belfast",
//       hotels: [
//         { name: "The Fitzwilliam Hotel", price: getRandomInt(4500, 20000) },
//         { name: "Grand Central Hotel", price: getRandomInt(5000, 23000) }
//       ],
//       flights: ("Belfast International Airport")
//     },
//     {
//       name: "Aberdeen",
//       hotels: [
//         { name: "Sandman Signature Aberdeen", price: getRandomInt(3200, 15000) },
//         { name: "The Chester Hotel", price: getRandomInt(4000, 18000) }
//       ],
//       flights: ("Aberdeen Airport")
//     },
//     {
//       name: "Cambridge",
//       hotels: [
//         { name: "Hotel du Vin Cambridge", price: getRandomInt(5000, 26000) },
//         { name: "The Varsity Hotel", price: getRandomInt(5500, 28000) }
//       ],
//       flights: ("London Stansted Airport")
//     }
//   ]
// },
// 28 - Greece
// {
//   code: "GR",
//   country: "Greece",
//   cities: [
//     {
//       name: "Athens",
//       hotels: [
//         { name: "Hotel Grande Bretagne", price: getRandomInt(6000, 40000) },
//         { name: "Electra Metropolis", price: getRandomInt(5000, 30000) },
//         { name: "King George Hotel", price: getRandomInt(5500, 32000) },
//         { name: "Coco-Mat Athens", price: getRandomInt(4500, 25000) }
//       ],
//       flights: ("Athens International Airport")
//     },
//     {
//       name: "Thessaloniki",
//       hotels: [
//         { name: "The Met Hotel", price: getRandomInt(4500, 23000) },
//         { name: "Makedonia Palace", price: getRandomInt(5000, 27000) }
//       ],
//       flights: ("Thessaloniki Airport")
//     },
//     {
//       name: "Santorini",
//       hotels: [
//         { name: "Katikies Hotel", price: getRandomInt(8000, 60000) },
//         { name: "Grace Hotel Santorini", price: getRandomInt(8500, 62000) }
//       ],
//       flights: ("Santorini International Airport")
//     },
//     {
//       name: "Mykonos",
//       hotels: [
//         { name: "Cavo Tagoo Mykonos", price: getRandomInt(9000, 65000) },
//         { name: "Mykonos Blu Grecotel", price: getRandomInt(7500, 50000) }
//       ],
//       flights: ("Mykonos Airport")
//     },
//     {
//       name: "Crete",
//       hotels: [
//         { name: "Blue Palace Resort", price: getRandomInt(7000, 45000) },
//         { name: "Amirandes Grecotel", price: getRandomInt(6500, 42000) }
//       ],
//       flights: ("Heraklion Airport")
//     },
//     {
//       name: "Rhodes",
//       hotels: [
//         { name: "Lindos Blu Luxury Hotel", price: getRandomInt(5000, 30000) },
//         { name: "Mitsis Grand Hotel", price: getRandomInt(4500, 25000) }
//       ],
//       flights: ("Rhodes International Airport")
//     },
//     {
//       name: "Corfu",
//       hotels: [
//         { name: "Corfu Imperial", price: getRandomInt(6000, 35000) },
//         { name: "Angsana Corfu Resort", price: getRandomInt(5500, 30000) }
//       ],
//       flights: ("Corfu International Airport")
//     }
//   ]
// },
// // 29 — SWITZERLAND
  // {
  //   code: "CH",
  //   country: "Switzerland",
  //   cities: [
  //     {
  //       name: "Zurich",
  //       hotels: [
  //         { name: "Baur au Lac", price: getRandomInt(9000, 65000) },
  //         { name: "The Dolder Grand", price: getRandomInt(10000, 70000) },
  //         { name: "Hotel Storchen", price: getRandomInt(8000, 50000) }
  //       ],
  //       flights: ("Zurich Airport")
  //     },
  //     {
  //       name: "Geneva",
  //       hotels: [
  //         { name: "Hotel President Wilson", price: getRandomInt(8500, 60000) },
  //         { name: "Four Seasons Geneva", price: getRandomInt(9000, 65000) }
  //       ],
  //       flights: ("Geneva Airport")
  //     },
  //     {
  //       name: "Lucerne",
  //       hotels: [
  //         { name: "Hotel Schweizerhof", price: getRandomInt(7000, 40000) },
  //         { name: "Grand Hotel National", price: getRandomInt(6500, 35000) }
  //       ],
  //       flights: ("Zurich Airport")
  //     }
  //   ]
  // },

  // 30 — AUSTRIA
  // {
  //   code: "AT",
  //   country: "Austria",
  //   cities: [
  //     {
  //       name: "Vienna",
  //       hotels: [
  //         { name: "Hotel Sacher", price: getRandomInt(8000, 45000) },
  //         { name: "The Ritz-Carlton Vienna", price: getRandomInt(7500, 42000) },
  //         { name: "Palais Hansen Kempinski", price: getRandomInt(7000, 40000) }
  //       ],
  //       flights: ("Vienna International Airport")
  //     },
  //     {
  //       name: "Salzburg",
  //       hotels: [
  //         { name: "Hotel Goldener Hirsch", price: getRandomInt(6000, 30000) },
  //         { name: "Sheraton Grand Salzburg", price: getRandomInt(5500, 28000) }
  //       ],
  //       flights: ("Salzburg Airport")
  //     },
  //     {
  //       name: "Innsbruck",
  //       hotels: [
  //         { name: "The Penz Hotel", price: getRandomInt(4500, 25000) },
  //         { name: "Hotel Innsbruck", price: getRandomInt(4000, 22000) }
  //       ],
  //       flights: ("Innsbruck Airport")
  //     }
  //   ]
  // },

  // 31 — NORWAY
  // {
  //   code: "NO",
  //   country: "Norway",
  //   cities: [
  //     {
  //       name: "Oslo",
  //       hotels: [
  //         { name: "Grand Hotel Oslo", price: getRandomInt(6000, 35000) },
  //         { name: "Clarion Hotel The Hub", price: getRandomInt(5000, 30000) }
  //       ],
  //       flights: ("Oslo Gardermoen Airport")
  //     },
  //     {
  //       name: "Bergen",
  //       hotels: [
  //         { name: "Hotel Norge", price: getRandomInt(4500, 25000) },
  //         { name: "Bergen Børs Hotel", price: getRandomInt(4200, 23000) }
  //       ],
  //       flights: ("Bergen Airport")
  //     },
  //     {
  //       name: "Trondheim",
  //       hotels: [
  //         { name: "Scandic Nidelven", price: getRandomInt(4000, 20000) }
  //       ],
  //       flights: ("Trondheim Airport")
  //     }
  //   ]
  // },

  // 32 — USA (BIG COUNTRY — 10 CITIES)
  // {
  //   code: "US",
  //   country: "United States",
  //   cities: [
  //     {
  //       name: "New York",
  //       hotels: [
  //         { name: "The Plaza", price: getRandomInt(10000, 70000) },
  //         { name: "Four Seasons New York", price: getRandomInt(12000, 80000) },
  //         { name: "The Standard", price: getRandomInt(8000, 50000) },
  //         { name: "Park Hyatt NYC", price: getRandomInt(9000, 60000) }
  //       ],
  //       flights: ("JFK International Airport")
  //     },
  //     {
  //       name: "Los Angeles",
  //       hotels: [
  //         { name: "The Beverly Hills Hotel", price: getRandomInt(9000, 65000) },
  //         { name: "The Ritz-Carlton LA", price: getRandomInt(8500, 55000) }
  //       ],
  //       flights: ("Los Angeles International Airport")
  //     },
  //     {
  //       name: "Chicago",
  //       hotels: [
  //         { name: "The Peninsula Chicago", price: getRandomInt(8000, 55000) },
  //         { name: "Four Seasons Chicago", price: getRandomInt(7500, 50000) }
  //       ],
  //       flights: ("O'Hare International Airport")
  //     },
  //     {
  //       name: "San Francisco",
  //       hotels: [
  //         { name: "Fairmont San Francisco", price: getRandomInt(8500, 60000) },
  //         { name: "The St. Regis SF", price: getRandomInt(9000, 65000) }
  //       ],
  //       flights: ("San Francisco International Airport")
  //     },
  //     {
  //       name: "Miami",
  //       hotels: [
  //         { name: "Fontainebleau Miami Beach", price: getRandomInt(5000, 35000) },
  //         { name: "Eden Roc Miami", price: getRandomInt(4500, 30000) }
  //       ],
  //       flights: ("Miami International Airport")
  //     }
  //   ]
  // },

  // 33 — NEW ZEALAND
  // {
  //   code: "NZ",
  //   country: "New Zealand",
  //   cities: [
  //     {
  //       name: "Auckland",
  //       hotels: [
  //         { name: "Sofitel Auckland", price: getRandomInt(5000, 35000) },
  //         { name: "Cordis Auckland", price: getRandomInt(4500, 30000) }
  //       ],
  //       flights: ("Auckland Airport")
  //     },
  //     {
  //       name: "Wellington",
  //       hotels: [
  //         { name: "InterContinental Wellington", price: getRandomInt(4000, 25000) },
  //         { name: "QT Wellington", price: getRandomInt(3800, 23000) }
  //       ],
  //       flights: ("Wellington Airport")
  //     },
  //     {
  //       name: "Queenstown",
  //       hotels: [
  //         { name: "Eichardt's Private Hotel", price: getRandomInt(7000, 50000) },
  //         { name: "The Rees Hotel", price: getRandomInt(6500, 45000) }
  //       ],
  //       flights: ("Queenstown Airport")
  //     }
  //   ]
  // },

  // 34 — JORDAN
  // {
  //   code: "JO",
  //   country: "Jordan",
  //   cities: [
  //     {
  //       name: "Amman",
  //       hotels: [
  //         { name: "The St. Regis Amman", price: getRandomInt(6000, 35000) },
  //         { name: "Four Seasons Amman", price: getRandomInt(7000, 45000) }
  //       ],
  //       flights: ("Queen Alia International Airport")
  //     },
  //     {
  //       name: "Aqaba",
  //       hotels: [
  //         { name: "Kempinski Aqaba", price: getRandomInt(5500, 30000) },
  //         { name: "Hilton Aqaba", price: getRandomInt(4500, 25000) }
  //       ],
  //       flights: ("King Hussein International Airport")
  //     }
  //   ]
  // },

  // 35 — ISRAEL
  // {
  //   code: "IL",
  //   country: "Israel",
  //   cities: [
  //     {
  //       name: "Tel Aviv",
  //       hotels: [
  //         { name: "The Norman Tel Aviv", price: getRandomInt(7000, 45000) },
  //         { name: "Carlton Tel Aviv", price: getRandomInt(6000, 35000) }
  //       ],
  //       flights: ("Ben Gurion Airport")
  //     },
  //     {
  //       name: "Jerusalem",
  //       hotels: [
  //         { name: "King David Hotel", price: getRandomInt(8000, 50000) },
  //         { name: "Waldorf Astoria Jerusalem", price: getRandomInt(9000, 60000) }
  //       ],
  //       flights: ("Ben Gurion Airport")
  //     }
  //   ]
  // },

  // 36 — HONG KONG
  // {
  //   code: "HK",
  //   country: "Hong Kong",
  //   cities: [
  //     {
  //       name: "Hong Kong",
  //       hotels: [
  //         { name: "The Peninsula Hong Kong", price: getRandomInt(9000, 70000) },
  //         { name: "Four Seasons Hong Kong", price: getRandomInt(10000, 80000) },
  //         { name: "Mandarin Oriental", price: getRandomInt(8500, 65000) }
  //       ],
  //       flights: ("Hong Kong International Airport")
  //     }
  //   ]
  // },

  // 37 — VIETNAM
  // {
  //   code: "VN",
  //   country: "Vietnam",
  //   cities: [
  //     {
  //       name: "Hanoi",
  //       hotels: [
  //         { name: "Sofitel Legend Metropole", price: getRandomInt(5000, 35000) },
  //         { name: "Lotte Hotel Hanoi", price: getRandomInt(4500, 30000) }
  //       ],
  //       flights: ("Noi Bai International Airport")
  //     },
  //     {
  //       name: "Ho Chi Minh City",
  //       hotels: [
  //         { name: "The Reverie Saigon", price: getRandomInt(5500, 38000) },
  //         { name: "Park Hyatt Saigon", price: getRandomInt(6000, 40000) }
  //       ],
  //       flights: ("Tan Son Nhat Airport")
  //     },
  //     {
  //       name: "Da Nang",
  //       hotels: [
  //         { name: "Furama Resort", price: getRandomInt(3000, 20000) },
  //         { name: "Hyatt Regency Da Nang", price: getRandomInt(3500, 25000) }
  //       ],
  //       flights: ("Da Nang International Airport")
  //     }
  //   ]
  // }

]; 
