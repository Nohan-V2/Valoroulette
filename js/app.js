const $btnSelectAll = document.querySelector(".btn-select-all");
const $btnRoll = document.querySelector(".btn-roll");
const $btnDeselectAll = document.querySelector(".btn-deselect-all");

const $duelist = document.querySelector(".duelist");
const $initiator = document.querySelector(".initiator");
const $controller = document.querySelector(".controller");
const $sentinel = document.querySelector(".sentinel");

const $namePersonSelected = document.querySelector(".name-person-selected");
const $agentsList = document.querySelector(".agents-list");
const $messageAllAgentsLocked = document.querySelector(
  ".message-all-agents-locked"
);

fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    // Loop create agent cards
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
        $agentImg.alt = agent.displayName;
        $agentImg.src = agentImage;
        $agentCard.appendChild($agentImg);

        const $lockIcon = document.createElement("img");
        $lockIcon.classList.add("lock-icon");
        $lockIcon.src = "assets/img/lock.svg"; // Adjust path to where your lock.svg is stored
        $agentCard.appendChild($lockIcon);

        const checkAllAgentsLocked = () => {
          const allAgents = document.querySelectorAll(".agent-card");
          const allLocked = Array.from(allAgents).every((agent) =>
            agent.classList.contains("locked")
          );

          if (allLocked) {
            $messageAllAgentsLocked.classList.remove("hidden");
          } else {
            $messageAllAgentsLocked.classList.add("hidden");
          }
        };

        // lock/unlock agent
        $agentCard.addEventListener("click", () => {
          document.querySelectorAll(".agent-card").forEach((agent) => {
            agent.classList.remove("selected");
            agent.classList.remove("not-selected");
          });

          $agentCard.classList.toggle("locked");
          $namePersonSelected.textContent = "Null";
          $namePersonSelected.classList.add("invisible");
          checkAllAgentsLocked();
        });

        // Select all agents
        $btnSelectAll.addEventListener("click", () => {
          $agentCard.classList.remove("locked");
          $agentCard.classList.remove("not-selected");
          $agentCard.classList.remove("selected");
          $namePersonSelected.textContent = "Null";
          $namePersonSelected.classList.add("invisible");
          checkAllAgentsLocked();
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

          // Selectionne tous les agents
          document.querySelectorAll(".agent-card").forEach((agent) => {
            agent.classList.add("not-selected");
            agent.classList.remove("selected");
          });

          // Déselectionne uniquement l'agent sélectionné
          selectedAgent.classList.remove("not-selected");
          selectedAgent.classList.add("selected");

          // Afficher le nom de l'agent sélectionné
          $namePersonSelected.textContent =
            selectedAgent.querySelector(".agent-img").alt;
          $namePersonSelected.classList.remove("invisible");
        });

        // deselect all agents
        $btnDeselectAll.addEventListener("click", () => {
          $agentCard.classList.add("locked");
          $agentCard.classList.remove("selected");
          $namePersonSelected.textContent = "Null";
          $namePersonSelected.classList.add("invisible");
          checkAllAgentsLocked();
        });

        // Select all duelists
        $duelist.addEventListener("click", () => {
          if (agent.role.displayName === "Duelist") {
            $agentCard.classList.remove("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          } else {
            $agentCard.classList.add("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          }
        });

        //select all initiators
        $initiator.addEventListener("click", () => {
          if (agent.role.displayName === "Initiator") {
            $agentCard.classList.remove("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          } else {
            $agentCard.classList.add("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          }
        });

        //select all controllers
        $controller.addEventListener("click", () => {
          if (agent.role.displayName === "Controller") {
            $agentCard.classList.remove("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          } else {
            $agentCard.classList.add("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          }
        });

        // select all sentinels
        $sentinel.addEventListener("click", () => {
          if (agent.role.displayName === "Sentinel") {
            $agentCard.classList.remove("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          } else {
            $agentCard.classList.add("locked");
            $agentCard.classList.remove("selected");
            $agentCard.classList.remove("not-selected");
            $namePersonSelected.textContent = "Null";
            $namePersonSelected.classList.add("invisible");
            checkAllAgentsLocked();
          }
        });
      }
    });
  })
  .catch((error) => "Error: " + error);
