export interface ICharacter {
  "id": number,
  "name": string,
  "status": string,
  "species": string,
  "type": string,
  "gender": string,
  "origin": ILocation,
  "location": ILocation,
  "image": string,
  "episode": string[],
  "url": string,
  "created": string
}

interface ILocation {
  "name": string,
  "url": string
}