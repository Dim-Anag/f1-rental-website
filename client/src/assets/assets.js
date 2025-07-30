import logo from "./f1logo.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import trophy_icon from "./trophy_win.png"
import helmet_icon from "./f1helmeticon.jpg"
import location_icon from "./location_icon.svg"
import engine_icon from "./engine.jpg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./lance_stroll1.png"
import testimonial_image_2 from "./markwebber.png"
import testimonial_image_3 from "./leclerc.png"
import main_car from "./main_car.png"
import banner_car_image from "./sennamonacocar.png"
import user_profile from "./zak_brown.webp"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./Mercedes2020car.webp"
import car_image2 from "./redbul2013vettel.jpg"
import car_image3 from "./alonso2005.jpg"
import car_image4 from "./ferrari2004.jpg"
import car_image5 from  "./1998mika.jpg"
import car_image6 from  "./senna1991.webp"

export const cityList = ['Athens', 'Thessaloniki', 'Heraklion', 'Patra', 'Larissa', 'Volos', 'Ioannina', 'Chania',
     'Rhodes', 'Kalamata', 'Kavala', 'Serres', 'Xanthi', 'Alexandroupoli', 'Kastoria', 'Kozani',
      'Drama', 'Komotini', 'Tripoli', 'Corfu'].sort();

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    trophy_icon,
    edit_icon,
    helmet_icon,
    location_icon,
    engine_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    testimonial_image_3,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Zak Brown",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Mercedes-AMG",
        "model": "W11 EQ Performance",
        "image": car_image1,
        "year": 2020,
        "category": "F1",
        "race_wins": 11,
        "engine_type": "Mercedes",
        "driver": "Lewis Hamilton 44",
        "pricePerDay": 8000,
        "location": "Athens",
        "description": "The W11 took thirteen wins (eleven for Hamilton and two for Bottas), fifteen pole positions (ten for Hamilton and five for Bottas), nine fastest laps (six for Hamilton, two for Bottas and one for Russell), twelve front-row lockouts and five 1–2 finishes across 17 races.",
        "features": [
                    "Engine: 1.6L 90° V6 Turbo Hybrid",
                    "Transmission: 8-speed semi-automatic",
                    "Weight: 746 kg (1,644.6 lb)",
                    "Top Speed: 360 km/h (223 mph)",
                    "Horsepower: 1,025 HP (764 kW) @ 13,000 rpm",
                    "Fuel: Petronas Primax",
                    "Tires: Pirelli P-Zero (dry) and Pirelli Cinturato (wet)",],
        "isAvailable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Red Bull Racing",
        "model": "RB9",
        "image": car_image2,
        "year": 2013,
        "category": "F1",
        "race_wins": 13,
        "engine_type": "Renault",
        "driver": "Sebastian Vettel 5",
        "pricePerDay": 7500,
        "location": "Thessaloniki",
        "description": "The Red Bull RB9 is a Formula One racing car designed by Adrian Newey for Red Bull Racing to compete in the 2013 Formula One season.The car was driven by (then) three-time World Drivers' Champion Sebastian Vettel and teammate Mark Webber.",
        "features": [
                    "Engine: 2.4L Renault RS27-2013 90° Naturally-Aspirated V8",
                    "Transmission: Red Bull Technology 7-Speed Semi-Automatic",
                    "Weight: 642 kg (1,415 Ibs)",
                    "Top Speed: 346 km/h (215 mph)",
                    "Horsepower: 750 HP (560 kW) @ 18,000 rpm",
                    "Fuel: 	Total 94.25% 102 RON unleaded gasoline + 5.75% biofuel",
                    "Tires: Pirelli P Zero radial dry slick and Pirelli Cinturato intermediate-wet treaded tyres"],
        "isAvailable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Renault  ",
        "model": "R25",
        "image": car_image3,
        "year": 2005,
        "category": "F1",
        "race_wins": 7,
        "engine_type": "Renault",
        "driver": " Fernando Alonso 14",
        "pricePerDay": 5000,
        "location": "Chania",
        "description": "The Renault R25 was the Formula One car entered by Renault in the 2005 season. The chassis was designed by Bob Bell, James Allison, Tim Densham and Dino Toso with Pat Symonds overseeing the design and production of the car as executive director of Engineering and Bernard Dudot leading the engine design.",
        "features": [
                    "Engine: Renault RS25 3.0 L (183 cu in) V10 72° naturally aspirated",
                    "Transmission: Renault 6-speed sequential semi-automatic gearbox",
                    "Weight: 605 kg (1,334 lb)",
                    "Top Speed:  233 km/h (145 mph)",
                    "Horsepower: 	800–900 hp (597–671 kW) @ 19,000 RPM",
                    "Fuel: 	Elf",
                    "Tires: Michelin"],
        "isAvailable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ferrari",
        "model": "F2004",
        "image": car_image4,
        "year": 2004,
        "category": "F1",
        "race_wins": 13,
        "engine_type": "Ferrari",
        "driver": "Michael Schumacher 7",
        "pricePerDay": 9500,
        "location": "Alexandroupoli",
        "description": "The Ferrari F2004 is a highly successful Formula One racing car that was used by Ferrari for the 2004 Formula One season. The chassis was designed by Rory Byrne, Ignazio Lunetta, Aldo Costa, Marco Fainello, John Iley and James Allison with Ross Brawn playing a vital role in leading the production of the car as the team's Technical Director and Paolo Martinelli assisted by Giles Simon leading the engine design and operations.",
        "features": [
                    "Engine: Ferrari Tipo 053 3.0 L (183 cu in) V10 (90°) (max: 18800 rpm)",
                    "Transmission:  Ferrari 7-speed + 1 reverse sequential semi-automatic paddle-shift with limited-slip differential",
                    "Weight: 605 kg (1,334 lb)",
                    "Top Speed:  233 km/h (145 mph)",
                    "Horsepower: 865 horsepower (645 kW) @ 18,300 rpm (race-spec) 900–940 horsepower (670–700 kW) @ 19,000 rpm (qualifying trim)",
                    "Fuel: 	Shell Fuel",
                    "Tires: Bridgestone BBS Racing Wheels: 13"],
        "isAvailable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e99",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "McLaren",
        "model": "MP4/13",
        "image": car_image5,
        "year": 1998,
        "category": "F1",
        "race_wins": 9,
        "engine_type": "Mercedes",
        "driver": "Mika Häkkinen 9",
        "pricePerDay": 6500,
        "location": "Patra",
        "description": "The McLaren MP4/13 was the car with which the McLaren team competed in the 1998 Formula One World Championship. The chassis was designed by Adrian Newey, Steve Nichols, Neil Oatley and Henri Durand, with Mario Illien designing the bespoke Ilmor engine. Driven by Mika Häkkinen and David Coulthard, the MP4/13 proved to be the dominant car of the season, with Häkkinen winning eight races en route to his first Drivers' Championship, while McLaren won their first Constructors' Championship since 1991. Until 2024, this was the last McLaren Formula One car to win the Constructors' Championship.",
        "features": [
                    "Engine: Mercedes-Benz FO-110G V10 (72º), 4 Valves per cylinder",
                    "Transmission:  McLaren six-gear longitudinal semi-automatic sequential",
                    "Weight: 600 kilograms (1322 lb)",
                    "Top Speed: 353 km/h (219 mph)",
                    "Horsepower: 760 bhp (567 kW)",
                    "Fuel: Mobil 1",
                    "Tires: Bridgestone"],
        "isAvailable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e98",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "McLaren",
        "model": "MP4/6",
        "image": car_image6,
        "year": 1991,
        "category": "F1",
        "race_wins": 8,
        "engine_type": "Honda",
        "driver": "Ayrton Senna 27",
        "pricePerDay": 8500,
        "location": "Rhodes",
        "description": "The McLaren MP4/6 is a Formula One racing car designed by McLaren's Neil Oatley, Matthew Jeffreys, David North, David Neilson, Bob Bell and Mike Gascoyne; powered by the Honda RA121E V12 engine for use in the 1991 Formula One season, with the engine's design and development led by Osamu Goto. It was driven by reigning World Champion, Brazilian Ayrton Senna, and Austria's Gerhard Berger. Ayrton Senna would win his third World Championship in the MP4/6. The MP4/6 was notable for being the last F1 car to win the championship with a manual gearbox and the only F1 car powered by a V12 engine to do so.",
        "features": [
                    "Engine: Honda RA121/E, 3.5 L (214 cu in), 60° V12 NA (max: 14000 rpm for MP4/6 and 15300 rpm for MP4/6B) mid-engine, longitudinally mounted",
                    "Transmission:  Weismann/McLaren Transverse 6-speed manual",
                    "Weight: 	505kg (1.113 lb)",
                    "Top Speed: 333 km/h (207 mph)",
                    "Horsepower: 725 hp (540.6 kW) @ 13,500 rpm (early season) 780 hp (581.6 kW) @ 14,800 rpm (late season)",
                    "Fuel: Shell",
                    "Tires: Goodyear"],
        "isAvailable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    }
];

export const dummyMyBookingsData = [
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "10/06/2025T00:00:00.000Z",
        "returnDate": "18/06/2025T00:00:00.000Z",
        "status": "confirmed",
        "price": 9500,
        "createdAt": "10/06/2025T12:57:48.244Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e99",
        "car": dummyCarData[4],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "12/06/2025T00:00:00.000Z",
        "returnDate": "17/06/2025T00:00:00.000Z",
        "status": "pending",
        "price": 6500,
        "createdAt": "12/06/2025T12:57:25.613Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "12/06/2025T00:00:00.000Z",
        "returnDate": "21/06/2025T00:00:00.000Z",
        "status": "pending",
        "price": 5000,
        "createdAt": "12/06/2025T09:55:06.379Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e98",
        "car": dummyCarData[5],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "01/07/2025T00:00:00.000Z",
        "returnDate": "24/07/2025T00:00:00.000Z",
        "status": "confirmed",
        "price": 8500,
        "createdAt": "01/07/2025T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 2,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1],
        dummyMyBookingsData[2],
        dummyMyBookingsData[3]
    ],
    "monthlyRevenue": 15000
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}