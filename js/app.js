const $btnSelectAll = document.querySelector(".btn-select-all");
const $btnRoll = document.querySelector(".btn-roll");
const $btnDeselectAll = document.querySelector(".btn-deselect-all");

const $duelist = document.querySelector(".duelist");
const $initiator = document.querySelector(".initiator");
const $controller = document.querySelector(".controller");
const $sentinel = document.querySelector(".sentinel");

const $agentsList = document.querySelector(".agents-list");

fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.data.forEach((agent) => {
      let agentImage = agent.displayIcon;
      let table = [];

      if (agent.isPlayableCharacter) {
        table.push(agent.displayName);

        const $agentCard = document.createElement("li");
        $agentCard.classList.add("agent-card");
        $agentsList.appendChild($agentCard);

        const $agentImg = document.createElement("img");
        $agentImg.classList.add("agent-img");
        $agentImg.src = agentImage;
        $agentCard.appendChild($agentImg);

        const $lockIcon = document.createElement("img");
        $lockIcon.classList.add("lock-icon");
        $lockIcon.src = "assets/img/lock.svg"; // Adjust path to where your lock.svg is stored
        $agentCard.appendChild($lockIcon);

        $agentCard.addEventListener("click", () => {
          $agentCard.classList.toggle("locked");
        });

        // Select all agents
        $btnSelectAll.addEventListener("click", () => {
          $agentCard.classList.remove("locked");
          $agentCard.classList.remove("not-selected");
        });

        // Select one agent at random
        $btnRoll.addEventListener("click", () => {
          // Récupérer tous les agents non verrouillés (sans classe 'locked')
          const unlockedAgents = document.querySelectorAll(
            ".agent-card:not(.locked)"
          );

          // Générer un index aléatoire
          const randomIndex = Math.floor(Math.random() * unlockedAgents.length);

          // Sélectionner l'agent aléatoire
          const selectedAgent = unlockedAgents[randomIndex];

          // Verrouiller tous les agents
          document.querySelectorAll(".agent-card").forEach((agent) => {
            agent.classList.add("not-selected");
          });

          // Déverrouiller uniquement l'agent sélectionné
          selectedAgent.classList.remove("not-selected");
        });

        // deselect all agents
        $btnDeselectAll.addEventListener("click", () => {
          $agentCard.classList.add("locked");
        });

        // Select all duelists
        $duelist.addEventListener("click", () => {
          if (agent.role.displayName === "Duelist") {
            $agentCard.classList.remove("locked");
          } else {
            $agentCard.classList.add("locked");
          }
        });

        //select all initiators
        $initiator.addEventListener("click", () => {
          if (agent.role.displayName === "Initiator") {
            $agentCard.classList.remove("locked");
          } else {
            $agentCard.classList.add("locked");
          }
        });

        //select all controllers
        $controller.addEventListener("click", () => {
          if (agent.role.displayName === "Controller") {
            $agentCard.classList.remove("locked");
          } else {
            $agentCard.classList.add("locked");
          }
        });

        // select all sentinels
        $sentinel.addEventListener("click", () => {
          if (agent.role.displayName === "Sentinel") {
            $agentCard.classList.remove("locked");
          } else {
            $agentCard.classList.add("locked");
          }
        });
      }
    });
  })
  .catch((error) => "Error: " + error);
