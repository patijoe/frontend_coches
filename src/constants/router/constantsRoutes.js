export const ROUTER_PATH = '/';

export const ROUTER_STANDINGS = `${ROUTER_PATH}competitions/:id/standings`;
export const ROUTER_STANDINGS_LINK = id => `${ROUTER_PATH}competitions/${id}/standings`;

export const ROUTER_RESULTS = `${ROUTER_PATH}competitions/:id/matches`;
export const ROUTER_RESULTS_LINK = id => `${ROUTER_PATH}competitions/${id}/matches`;
