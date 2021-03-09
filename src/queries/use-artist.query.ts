import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Artist } from "src/models/artist.model";
import { PlaylistRepository } from "../repository/playlist.repository";

export function useArtistsQuery(filter: string) {
  const { isFetching, isSuccess, data, isLoading } = useQuery<Artist[]>(
    ["search", filter],
    () => PlaylistRepository.search(filter)
  );

  return { isFetching, isSuccess, data, isLoading };
}
