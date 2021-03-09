import React from "react";
import "./app.scss";
import { Artists } from "../artists/artists";
import { QueryClient, QueryClientProvider } from "react-query";
export default function Root(props) {
  return (
    <section className="search-app">
      <QueryClientProvider client={new QueryClient()}>
        <Artists />
      </QueryClientProvider>
    </section>
  );
}
