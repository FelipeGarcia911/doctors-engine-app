import { TableBody, TableCell, TableRow } from "@mui/material";

interface BaseTableBodyProps {
  getTableBodyProps: any;
  rows: any;
  prepareRow: any;
}

const BaseTableBody = (props: BaseTableBodyProps) => {
  const { getTableBodyProps, rows, prepareRow } = props;

  return (
    <TableBody {...getTableBodyProps()}>
      {rows.map((row: any, key: number) => {
        prepareRow(row);
        return (
          <TableRow {...row.getRowProps()} key={`TableRow-${key}`}>
            {row.cells.map((cell: any, idx: number) => (
              <TableCell {...cell.getCellProps()} key={`TableCell-${key}-${idx}`}>
                {cell.render("Cell")}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default BaseTableBody;
