export const ROUTER_PATH = '/';

export const ROUTER_STANDINGS = `${ROUTER_PATH}competitions/:id/standings`;
export const ROUTER_STANDINGS_LINK = id => `${ROUTER_PATH}competitions/${id}/standings`;

export const ROUTER_TEAM = `${ROUTER_PATH}competitions/:id/teams`;
export const ROUTER_TEAM_LINK = id => `${ROUTER_TEAM}competitions/${id}/teams`;

