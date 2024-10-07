let faveMovie = {
    cast: {
        mainCharacter: {
            actor: "Will Ferrell",
            character: "Harold Crick",
            job: "IRS auditor"
            },
        supportCharacter: {
            actor: "Emma Thompson",
            character:  "Karen Eiffel",
            job: "author"
        },
        loveInterest: {
            actor: "Maggie Gyllenhaal",
            character: "Ana Pascal",
            job: "Baker"
        }
    },
    director: "Marc Forster",
    imdbRAting: "",
    title: "Stranger than Fiction",
    genre: "Drama",
    famousQuote: () => {
        return 'I brought you flours!';
    }
}

console.log(`My favourite movie is ${faveMovie.title}.`);
console.log(`The protagonist is ${faveMovie.cast.mainCharacter.actor}, an ${faveMovie.cast.mainCharacter.job} named ${faveMovie.cast.mainCharacter.character}.`);
console.log(`His love interest is ${faveMovie.cast.loveInterest.character} who is a ${faveMovie.cast.loveInterest.job}.`);
console.log(faveMovie.budget); // --- empty property
console.log(faveMovie?.series?.volume); //---- checks if a specific property is defined, if so, log
console.log(faveMovie.famousQuote());

// iterate through keys 
console.log(Object.keys(faveMovie));  

for (let key in faveMovie) {
    console.log(`${key}: ${faveMovie[key]}`);
}