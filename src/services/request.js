import { GET_COMPETITIONS } from "../constants/service/rest";

const misCabeceras = new Headers({
  "X-Auth-Token": "99a616a5ee384c24bc24ba68b44fb5bd",
});
const miInit = { 
  method: 'GET',
  headers: misCabeceras
};

export const getCompetitions = () => fetch(GET_COMPETITIONS, miInit).then(response => response.json());

export const getStandings = id => fetch(`${GET_COMPETITIONS}/${id}/standings`, miInit).then(response => response.json());

export const getTeams = id => fetch(`${GET_COMPETITIONS}/${id}/teams`, miInit).then(response => response.json());
