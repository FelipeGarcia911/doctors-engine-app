import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

interface BaseTableHeadProps {
  headerGroups: any;
}

const BaseTableHead = (props: BaseTableHeadProps) => {
  const { headerGroups } = props;

  return (
    <TableHead>
      {headerGroups.map((headerGroup: any, key: number) => (
        <TableRow {...headerGroup.getHeaderGroupProps()} key={`HeaderGroup-${key}`}>
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
  );
};

export default BaseTableHead;
