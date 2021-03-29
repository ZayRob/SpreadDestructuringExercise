const mcuShows = [
    "The Falcon And The Winter Soldier",
    "WandaVision"
];

const starWarsShows = [
    "The Mandalorian",
    "The Clone Wars"
];

const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    "Muppets Now"
];

console.log(disneyPlusShows);

const netflixMovies = {
    action: "Extraction",
    drama: "The Irishman"
};

const disneyPlusMovies = {
    musical: "Hamilton",
    drama: "Togo"
};

const streamingMovies = {
    ...disneyPlusMovies,
    ...netflixMovies,
    comedy: "Shazam!"
};

console.log(streamingMovies);

const disneyJunior = [
    "PJ Masks",
    "Jake and the Neverland Pirates"
];

const [pj, jake] = disneyJunior;

console.log(pj, jake);

const avengers = {
    captainAmerica: "Steve Rogers",
    theHulk: "Bruce Banner"
};

const { captainAmerica, theHulk } = avengers;

console.log(captainAmerica, theHulk);

const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
};

const { blackWidow: nat, ...others } = moreAvengers;

console.log(nat, others);