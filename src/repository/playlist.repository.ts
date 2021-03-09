import { Artist } from "../models/artist.model";

export class PlaylistRepository {
  static search(filter: string): Promise<Artist[]> {
    const endpoint = `https://api.spotify.com/v1/search?q=${filter}&type=artist`;
    const accessToken = localStorage.getItem("token").trim();
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(endpoint, {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .then((data) =>
        data.artists.items.map((item) => new Artist().fromJSON(item))
      );
  }
}
