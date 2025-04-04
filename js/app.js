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

// Fonction pour réinitialiser les classes .selected et le nom sélectionné
const resetSelected = () => {
  document.querySelectorAll(".agent-card").forEach((agentCard) => {
    agentCard.classList.remove("selected");
  });
  $namePersonSelected.textContent = "Aucun"; // Réinitialise le nom affiché
  $namePersonSelected.classList.add("invisible"); // Cache le nom
};

// Fonction pour réinitialiser la sélection
const resetSelection = () => {
  document.querySelectorAll(".agent-card").forEach((agentCard) => {
    const $agentImg = agentCard.querySelector(".agent-img");
    const $lockIcon = agentCard.querySelector(".lock-icon");

    $agentImg.classList.remove("locked", "not-selected");
    $lockIcon.style.display = "none"; // Masque l'icône de verrouillage
  });
  resetSelected(); // Réinitialise les .selected et le nom
  lastSelectedAgentName = null;
};

// Fonction pour vérifier si tous les agents sont verrouillés
const checkAllAgentsLocked = () => {
  const allAgents = document.querySelectorAll(".agent-img");
  const allLocked = Array.from(allAgents).every((agent) =>
    agent.classList.contains("locked")
  );

  $messageAllAgentsLocked.classList.toggle("hidden", !allLocked);
};

// Fonction pour gérer le filtrage par rôle
const handleRoleFilter = (roleName) => {
  resetSelected(); // Retire les .selected et réinitialise le nom

  agentCards.forEach((card) => {
    const $agentImg = card.element.querySelector(".agent-img");
    const $lockIcon = card.element.querySelector(".lock-icon");

    if (card.role === roleName) {
      // Si l'agent appartient au rôle sélectionné, déverrouille-le
      $agentImg.classList.remove("locked", "not-selected");
      $lockIcon.style.display = "none"; // Masque l'icône de verrouillage
    } else {
      // Sinon, verrouille l'agent
      $agentImg.classList.add("locked");
      $lockIcon.style.display = "block"; // Affiche l'icône de verrouillage
    }
  });

  checkAllAgentsLocked(); // Vérifie si tous les agents sont verrouillés
};

// Fonction pour sélectionner un agent aléatoire
const selectRandomAgent = () => {
  // Récupérer tous les agents non verrouillés
  const unlockedAgents = document.querySelectorAll(".agent-card .agent-img:not(.locked)");

  // Convertir en tableau pour pouvoir filtrer
  let availableAgents = Array.from(unlockedAgents);

  // Filtrer le dernier agent sélectionné s'il y a plus d'un agent déverrouillé
  if (lastSelectedAgentName && availableAgents.length > 1) {
    availableAgents = availableAgents.filter(
      (agentImg) => agentImg.alt !== lastSelectedAgentName
    );
  }

  // S'assurer qu'il y a des agents disponibles
  if (availableAgents.length === 0) {
    console.log("Aucun agent disponible pour la sélection");
    return;
  }

  // Sélectionner l'agent aléatoire
  const randomIndex = Math.floor(Math.random() * availableAgents.length);
  const selectedAgentImg = availableAgents[randomIndex];
  const selectedAgentCard = selectedAgentImg.closest(".agent-card");

  // Stocker le nom de l'agent sélectionné pour le prochain tirage
  lastSelectedAgentName = selectedAgentImg.alt;

  // Mettre à jour les classes CSS
  document.querySelectorAll(".agent-card").forEach((agentCard) => {
    const $agentImg = agentCard.querySelector(".agent-img");
    $agentImg.classList.add("not-selected"); // Applique .not-selected à l'image
    agentCard.classList.remove("selected"); // Retire .selected de la carte
  });

  selectedAgentImg.classList.remove("not-selected"); // Retire .not-selected de l'image
  selectedAgentCard.classList.add("selected"); // Applique .selected à la carte

  // Afficher le nom de l'agent sélectionné
  $namePersonSelected.textContent = lastSelectedAgentName;
  $namePersonSelected.classList.remove("invisible");
};

// Charger les données des agents avec une fonction asynchrone
async function loadAgents() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();

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
          $agentImg.classList.toggle("locked"); // Toggle uniquement sur l'image de la carte cliquée
          $lockIcon.style.display = $agentImg.classList.contains("locked")
            ? "block"
            : "none"; // Affiche ou masque l'icône de verrouillage
          checkAllAgentsLocked();
        });
      }
    });

    // Ajouter les événements aux boutons
    $btnSelectAll.addEventListener("click", () => {
      resetSelected(); // Retire les .selected et réinitialise le nom
      agentCards.forEach((card) => {
        const $agentImg = card.element.querySelector(".agent-img");
        const $lockIcon = card.element.querySelector(".lock-icon");

        $agentImg.classList.remove("locked", "not-selected"); // Retire les classes
        $lockIcon.style.display = "none"; // Masque l'icône de verrouillage
      });
      checkAllAgentsLocked();
    });

    $btnDeselectAll.addEventListener("click", () => {
      resetSelected(); // Retire les .selected et réinitialise le nom
      agentCards.forEach((card) => {
        const $agentImg = card.element.querySelector(".agent-img");
        const $lockIcon = card.element.querySelector(".lock-icon");

        $agentImg.classList.add("locked"); // Ajoute la classe .locked
        $agentImg.classList.remove("not-selected"); // Retire la classe .not-selected
        $lockIcon.style.display = "block"; // Affiche l'icône de verrouillage
      });
      checkAllAgentsLocked();
    });

    $btnRoll.addEventListener("click", selectRandomAgent);

    // Gestion des boutons de rôle
    $roleButtons.duelist.addEventListener("click", () => {
      handleRoleFilter("Duelist");
    });

    $roleButtons.initiator.addEventListener("click", () => {
      handleRoleFilter("Initiator");
    });

    $roleButtons.controller.addEventListener("click", () => {
      handleRoleFilter("Controller");
    });

    $roleButtons.sentinel.addEventListener("click", () => {
      handleRoleFilter("Sentinel");
    });

    // Vérifier l'état initial
    checkAllAgentsLocked();
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// Exécuter la fonction de chargement
loadAgents();