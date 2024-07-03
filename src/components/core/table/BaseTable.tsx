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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";

interface BaseTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

function BaseTable<T extends object>({ columns, data }: BaseTableProps<T>) {
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

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleFilterChange}
        style={{ marginBottom: "1rem" }}
      />
      <TableContainer>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: any) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? "desc" : "asc"}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BaseTable;
