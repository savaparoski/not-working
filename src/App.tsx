import React from "react";
import { Cell, Column, Table as FixedTable } from "fixed-data-table-2";

export default function App(): JSX.Element {
  const rows = [0, 1, 2];

  return (
    <FixedTable
      rowHeight={50}
      rowsCount={rows.length}
      width={1500}
      height={800}
      headerHeight={50}
    >
      <Column
        header={<Cell>Col 1</Cell>}
        cell={<Cell>Column 1</Cell>}
        width={1000}
      />
    </FixedTable>
  );
}
