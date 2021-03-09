import React, { useState } from "react";
import { PlaylistCard, Textfield } from "@ps/styleguide";

import { useArtistsQuery } from "../../queries/use-artist.query";
import "./artists.scss";
import { Artist } from "src/models/artist.model";

export const Artists = () => {
  const [filter, setFilter] = useState<string>("");
  const { isFetching, isSuccess, data = [], isLoading } = useArtistsQuery(
    filter
  );
  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className="search-artists">
      <div className="search-artists__search">
        buscar:
        <Textfield
          defaultValue=""
          value={filter}
          type="text"
          name="filter"
          onChange={onChangeFilter}
        />
      </div>
      {isLoading && "buscando..."}
      {data.map((item: Artist) => (
        <PlaylistCard title={item.name} photo={item.images[0]?.url} />
      ))}
    </div>
  );
};
