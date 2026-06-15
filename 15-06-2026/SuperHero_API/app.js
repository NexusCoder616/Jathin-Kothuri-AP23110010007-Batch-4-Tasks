const API =
"https://akabab.github.io/superhero-api/api/all.json";

async function searchHero() {

    const heroName =
        document.getElementById("heroInput")
        .value
        .trim()
        .toLowerCase();

    const res = await fetch(API);
    const heroes = await res.json();

    let foundHero = null;

    for (let i = 0; i < heroes.length; i++) {

        if (
            heroes[i].name.toLowerCase() === heroName
        ) {
            foundHero = heroes[i];
            break;
        }
    }

    const result =
        document.getElementById("result");

    if (!foundHero) {

        result.innerHTML =
            "<h2>Hero not found</h2>";

        return;
    }

    result.innerHTML = `
        <div class="card">
            <img src="${foundHero.images.md}">
            <h2>${foundHero.name}</h2>

            <p>
                Publisher:
                ${foundHero.biography.publisher}
            </p>

            <p>
                Alignment:
                ${foundHero.biography.alignment}
            </p>

            <p>
                Intelligence:
                ${foundHero.powerstats.intelligence}
            </p>

            <p>
                Strength:
                ${foundHero.powerstats.strength}
            </p>
        </div>
    `;
}