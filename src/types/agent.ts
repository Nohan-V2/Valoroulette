export interface Agent {
  uuid: string;
  displayName: string;
  displayIcon: string;
  role?: {
    displayName: string;
    displayIcon: string;
  };
  isPlayableCharacter: boolean;
}

export interface ApiResponse {
  status: number;
  data: Agent[];
}

export type RoleName = 'Duelist' | 'Initiator' | 'Controller' | 'Sentinel';
