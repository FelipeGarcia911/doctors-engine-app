import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  Column,
  TableInstance,
  TableState,
} from "react-table";
import {
  Box,
  Table,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import BaseTableBody from "./BaseTableBody";
import BaseTableHead from "./BaseTableHeader";
import Loader from "../Loader";

interface BaseTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
}

function BaseTable<T extends object>(props: BaseTableProps<T>) {
  const { columns, data, loading } = props;

  const isEmpty = data?.length === 0;
  const hideResults = loading || isEmpty;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy
  ) as TableInstance<T> & {
    state: TableState<T> & { globalFilter: any };
    setGlobalFilter: (filterValue: any) => void;
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
  };

  const render = () => {
    let component = <></>;
    if (loading) {
      component = <Loader />;
    } else if (data.length === 0) {
      component = <Typography variant="h5">No results found</Typography>;
    }

    return component;
  };

  return (
    <>
      <TextField
        disabled={loading}
        label="Search Results"
        onChange={handleFilterChange}
        variant="outlined"
      />
      <TableContainer>
        <Table {...getTableProps()}>
          <BaseTableHead headerGroups={headerGroups} />
          {hideResults ? null : (
            <BaseTableBody
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
            />
          )}
        </Table>
        <Box display="flex" justifyContent="center" mt={2}>
          {render()}
        </Box>
      </TableContainer>
    </>
  );
}

export default BaseTable;
