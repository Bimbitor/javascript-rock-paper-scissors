let minTries = 1;
        let maxTries = 3;
        
        function generateAleatoryNumber(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        function showElection (player, election){
            if(election == 1) {
                alert( player + " Eligió piedra 🗿" )
            } else if (election == 2) {
                alert(player + " Eligió papel 📃")
            } else if (election == 3) {
                alert(player + " Eligió tijera ✂️")
            } else {
                playerElection()
            }
        }

        function playerElection () {
            let jugadorElection = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"))
            showElection(jugador, jugadorElection)
        }

        function pcElection () {
            let pcElection = generateAleatoryNumber(minTries, maxTries)
            showElection(pc, pcElection)
        }

        function combat (jugadorElection, pcElection) {
            if (jugadorElection === pcElection) {
                alert("EMPATE")
            } else if (jugadorElection == 1 && pcElection == 3 || jugadorElection == 2 && pcElection == 1 || jugadorElection == 3 && pcElection == 2) {
                alert("GANASTE")
                jugadorVictories += 1
                console.log("player" + jugadorVictories)
            } else{
                alert("PERDISTE")
                pcVictories += 1
                console.log("pc" + pcVictories)
            }
        }
        
        let jugador = "Jugador"
        let pc = "pc"

        let jugadorVictories = 0;
        let pcVictories = 0;

        while(pcVictories < 3 && jugadorVictories < 3) {

            combat(playerElection(), pcElection())

        }