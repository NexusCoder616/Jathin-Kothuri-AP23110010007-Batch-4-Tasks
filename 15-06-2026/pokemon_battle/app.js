async function startBattle() {

    let id1 = Math.floor(Math.random() * 200) + 1;
    let id2 = Math.floor(Math.random() * 200) + 1;

    let response1 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id1}`
    );

    let response2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id2}`
    );

    let pokemon1 = await response1.json();
    let pokemon2 = await response2.json();

    document.getElementById("battleArea").innerHTML = `

    <div class="pokemon">

        <h2>${pokemon1.name.toUpperCase()}</h2>

        <img src="${pokemon1.sprites.front_default}">

        <p>
            Attack: ${pokemon1.stats[1].base_stat}
        </p>

    </div>

    <div>

        <h1>VS</h1>

    </div>

    <div class="pokemon">

        <h2>${pokemon2.name.toUpperCase()}</h2>

        <img src="${pokemon2.sprites.front_default}">

        <p>
            Attack: ${pokemon2.stats[1].base_stat}
        </p>

    </div>

`;
    let attack1 = pokemon1.stats[1].base_stat;
    let attack2 = pokemon2.stats[1].base_stat;

    if (attack1 > attack2) {

        document.getElementById("battleLog").innerHTML =
            `<h2>${pokemon1.name} Wins!</h2>`;

    } else if (attack2 > attack1) {

        document.getElementById("battleLog").innerHTML =
            `<h2>${pokemon2.name} Wins!</h2>`;

    } else {

        document.getElementById("battleLog").innerHTML =
            "<h2>Draw!</h2>";
    }
}
