export const COUNTRY_GERMANY = 'germany'
export const COUNTRY_ITALY = 'italy'
export const COUNTRY_USA = 'usa'

const COUNTRIES = [COUNTRY_GERMANY, COUNTRY_ITALY, COUNTRY_USA]

export const cars = [
    {
        title: "Alfa Romeo Giulia",
        img: "alfa-romeo-giulia.jpg",
        year: 2016,
        fuel: "Gas, 2.0",
        hp: 240,
        country: COUNTRY_ITALY
    },
    {
        title: "BMW i3",
        img: "i3.jpg",
        year: 2015,
        fuel: "Hybrid, 0.65",
        hp: 170,
        country: COUNTRY_GERMANY
    },
    {
        title: "Porsche Cayenne",
        img: "cayenne.jpg",
        year: 2017,
        fuel: "Gas, 3.0",
        hp: 340,
        country: COUNTRY_GERMANY
    },
    {
        title: "Tesla Model S",
        img: "tesla.jpg",
        year: 2017,
        fuel: "Electro",
        hp: 362,
        country: COUNTRY_USA
    }
].map((car, i) => { return { id: i + 1, ...car} })