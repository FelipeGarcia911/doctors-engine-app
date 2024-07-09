import React from "react";
import { Column } from "react-table";

import BaseTable from "./core/table/BaseTable";
import { SearchResults } from "../types/types";

interface ResultsTableProps {
  data: SearchResults[];
  loading?: boolean;
}

const ResultsTable = (props: ResultsTableProps) => {
  const { data, loading } = props;

  const columns: Column<SearchResults>[] = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "NPI Number",
        accessor: "number",
      },
      {
        Header: "First Name",
        accessor: ({ basic }: SearchResults) =>
          basic.authorized_official_first_name ?? basic.first_name,
        id: "authorized_official_first_name",
      },
      {
        Header: "Last Name",
        accessor: ({ basic }: SearchResults) =>
          basic.authorized_official_last_name ?? basic.last_name,
        id: "authorized_official_last_name",
      },
      {
        Header: "Position",
        accessor: (row: SearchResults) =>
          row.basic.authorized_official_title_or_position,
        id: "authorized_official_title_or_position",
      },
      {
        Header: "Country Code",
        accessor: (row: SearchResults) => row.addresses[0]?.country_code || "",
        id: "country_code",
      },
      {
        Header: "State",
        accessor: (row: SearchResults) => row.addresses[0]?.state || "",
        id: "state",
      },
      {
        Header: "City",
        accessor: (row: SearchResults) => row.addresses[0]?.city || "",
        id: "city",
      },
      {
        Header: "Postal Code",
        accessor: (row: SearchResults) => row.addresses[0]?.postal_code || "",
        id: "postal_code",
      },
      {
        Header: "Score",
        accessor: (row: SearchResults) => row.score?.toFixed(5) ?? "N/A",
        id: "score",
      },
    ],
    []
  );

  return <BaseTable columns={columns} data={data} loading={loading} />;
};

export default ResultsTable;
