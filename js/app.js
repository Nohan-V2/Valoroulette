const $btnSelectAll = document.querySelector(".btn-select-all");
const $btnRoll = document.querySelector(".btn-roll");
const $btnDeselectAll = document.querySelector(".btn-deselect-all");

const $roleButtons = {
  duelist: document.querySelector(".duelist"),
  initiator: document.querySelector(".initiator"),
  controller: document.querySelector(".controller"),
  sentinel: document.querySelector(".sentinel"),
};

const $namePersonSelected = document.querySelector(".name-person-selected");
const $agentsList = document.querySelector(".agents-list");
const $messageAllAgentsLocked = document.querySelector(
  ".message-all-agents-locked"
);

// Variable pour suivre le dernier agent sélectionné
let lastSelectedAgentName = null;
let agentCards = [];

// Fonction pour réinitialiser la sélection
const resetSelection = () => {
  document.querySelectorAll(".agent-card").forEach((agent) => {
    agent.classList.remove("selected", "not-selected");
  });
  $namePersonSelected.textContent = "Aucun";
  $namePersonSelected.classList.add("invisible");
  lastSelectedAgentName = null;
};

// Fonction pour vérifier si tous les agents sont verrouillés
const checkAllAgentsLocked = () => {
  const allAgents = document.querySelectorAll(".agent-card");
  const allLocked = Array.from(allAgents).every((agent) =>
    agent.classList.contains("locked")
  );

  $messageAllAgentsLocked.classList.toggle("hidden", !allLocked);
};

// Fonction pour filtrer les agents par rôle
const filterAgentsByRole = (roleName) => {
  resetSelection();
  agentCards.forEach((card) => {
    const isMatchingRole = card.role === roleName;
    card.element.classList.toggle("locked", !isMatchingRole);
  });
  checkAllAgentsLocked();
};

// Fonction pour sélectionner un agent aléatoire
const selectRandomAgent = () => {
  // Récupérer tous les agents non verrouillés
  const unlockedAgents = document.querySelectorAll(".agent-card:not(.locked)");

  // Convertir en tableau pour pouvoir filtrer
  let availableAgents = Array.from(unlockedAgents);

  // Filtrer le dernier agent sélectionné s'il y a plus d'un agent déverrouillé
  if (lastSelectedAgentName && availableAgents.length > 1) {
    availableAgents = availableAgents.filter(
      (agent) => agent.querySelector(".agent-img").alt !== lastSelectedAgentName
    );
  }

  // S'assurer qu'il y a des agents disponibles
  if (availableAgents.length === 0) {
    console.log("Aucun agent disponible pour la sélection");
    return;
  }

  // Sélectionner l'agent aléatoire
  const randomIndex = Math.floor(Math.random() * availableAgents.length);
  const selectedAgent = availableAgents[randomIndex];

  // Stocker le nom de l'agent sélectionné pour le prochain tirage
  lastSelectedAgentName = selectedAgent.querySelector(".agent-img").alt;

  // Mettre à jour les classes CSS
  document.querySelectorAll(".agent-card").forEach((agent) => {
    agent.classList.add("not-selected");
    agent.classList.remove("selected");
  });

  selectedAgent.classList.remove("not-selected");
  selectedAgent.classList.add("selected");

  // Afficher le nom de l'agent sélectionné
  $namePersonSelected.textContent = lastSelectedAgentName;
  $namePersonSelected.classList.remove("invisible");
};

// Charger les données des agents
fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then((data) => {
    // Créer les cartes d'agents
    data.data.forEach((agent) => {
      if (agent.isPlayableCharacter) {
        // Créer la carte d'agent
        const $agentCard = document.createElement("li");
        $agentCard.classList.add("agent-card");

        // Ajouter l'image de l'agent
        const $agentImg = document.createElement("img");
        $agentImg.classList.add("agent-img");
        $agentImg.alt = agent.displayName;
        $agentImg.src = agent.displayIcon;
        $agentCard.appendChild($agentImg);

        // Ajouter l'icône de verrouillage
        const $lockIcon = document.createElement("img");
        $lockIcon.classList.add("lock-icon");
        $lockIcon.src = "assets/img/lock.svg";
        $agentCard.appendChild($lockIcon);

        // Ajouter la carte à la liste
        $agentsList.appendChild($agentCard);

        // Stocker les informations de l'agent
        agentCards.push({
          element: $agentCard,
          role: agent.role?.displayName || null,
          name: agent.displayName,
        });

        // Ajouter l'événement de verrouillage/déverrouillage
        $agentCard.addEventListener("click", () => {
          resetSelection();
          $agentCard.classList.toggle("locked");
          checkAllAgentsLocked();
        });
      }
    });

    // Ajouter les événements aux boutons
    $btnSelectAll.addEventListener("click", () => {
      resetSelection();
      agentCards.forEach((card) => card.element.classList.remove("locked"));
      checkAllAgentsLocked();
    });

    $btnDeselectAll.addEventListener("click", () => {
      resetSelection();
      agentCards.forEach((card) => card.element.classList.add("locked"));
      checkAllAgentsLocked();
    });

    $btnRoll.addEventListener("click", selectRandomAgent);

    // Ajouter les événements aux boutons de rôle
    $roleButtons.duelist.addEventListener("click", () =>
      filterAgentsByRole("Duelist")
    );
    $roleButtons.initiator.addEventListener("click", () =>
      filterAgentsByRole("Initiator")
    );
    $roleButtons.controller.addEventListener("click", () =>
      filterAgentsByRole("Controller")
    );
    $roleButtons.sentinel.addEventListener("click", () =>
      filterAgentsByRole("Sentinel")
    );

    // Vérifier l'état initial
    checkAllAgentsLocked();
  })
  .catch((error) => console.error("Erreur:", error));
