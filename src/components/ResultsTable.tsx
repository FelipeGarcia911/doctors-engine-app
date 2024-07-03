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
        Header: "NPI Number",
        accessor: "number",
      },
      {
        Header: "First Name",
        accessor: (row: SearchResults) =>
          row.basic.authorized_official_first_name,
        id: "authorized_official_first_name",
      },
      {
        Header: "Last Name",
        accessor: (row: SearchResults) =>
          row.basic.authorized_official_last_name,
        id: "authorized_official_last_name",
      },
      {
        Header: "Position",
        accessor: (row: SearchResults) =>
          row.basic.authorized_official_title_or_position,
        id: "authorized_official_title_or_position",
      },
      {
        Header: "City",
        accessor: (row: SearchResults) => row.addresses[0]?.city || "",
        id: "city",
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
    ],
    []
  );

  return <BaseTable columns={columns} data={data} loading={loading} />;
};

export default ResultsTable;
