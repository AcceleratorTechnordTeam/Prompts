/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from 'react'

import { Flex } from '../flex/Flex'
import { TableColumnSelectors } from './components/special/tableColumnSelectors/TableColumnSelectors'
import { TableCSVExportButton } from './components/special/tableCSVExportButton/TableCSVExportButton'
import { TablePagination } from './components/special/tablePagination/TablePagination'
import { TableRowPerPage } from './components/special/tableRowPerPage/TableRowPerPage'
import { TableSearchBar } from './components/special/tableSearchBar/TableSearchBar'
import { TableTitle } from './components/special/tableTitle/TableTitle'
import { SuperTable } from './components/SuperTable'
import { Table } from './components/table/Table'
import { TableBody } from './components/tableBody/TableBody'
import { TableCell } from './components/tableCell/TableCell'
import { TableCheckbox } from './components/tableCheckbox/TableCheckbox'
import { TableHeader } from './components/tableHeader/TableHeader'
import { TableHeaderCell } from './components/tableHeaderCell/TableHeaderCell'
import { TableHeaderCheckbox } from './components/tableHeaderCheckbox/TableHeaderCheckbox'
import { TableHeaderRow } from './components/tableHeaderRow/TableHeaderRow'
import { TableRow } from './components/tableRow/TableRow'
import { useColumnSelection } from './hooks/useColumnSelection'
import { useMultiSelection } from './hooks/useMultiSelection'
import { useSuperTable } from './hooks/useSuperTable'
import styles from './table.module.css'

type MyTableProp = {
  tableID: string
  title?: string
  rowData?: any[]
  columnData?: SuperTableColumn[]
  fontSize?: number
  rowPerPage?: number[]
  maxSelectableRows?: number | null
  children?: ReactNode
  onSelectedRowChange?: (rows: any[]) => void
}

export const MyTable = ({
  tableID,
  title,
  rowData = [],
  columnData = [],
  fontSize = 1,
  rowPerPage = [5, 10, 15, 20, 50],
  maxSelectableRows = null,
  children,
  onSelectedRowChange
}: MyTableProp) => {
  type RowData = (typeof rowData)[0]

  const [maxRowPerPage, setMaxRowPerPage] = useState(rowPerPage[0] ?? 5)

  const {
    rows,
    columns,
    searchTerm,
    totalPages,
    currentPage,
    currentSortColumn,
    currentSortDirection,
    sortedData,
    isEmpty,
    handleSearch,
    resetSearch,
    setCurrentPage,
    sortBy
  } = useSuperTable<RowData>({
    rowData,
    columnData,
    maxRowPerPage
  })

  const { effectiveColumns, hideableColumnIDs, handleHideColumn } = useColumnSelection(columns)

  const { selectedRowIDs, isAllSelected, handleMultiSelection, handleSelectAll } =
    useMultiSelection<RowData>({
      maxSelectableRows,
      rows: rows as any[],
      onSelectedRowChange
    })

  return (
    <SuperTable
      className={styles.superContainer}
      currentSortColumn={currentSortColumn}
      currentSortDirection={currentSortDirection}
      disabled={!isEmpty}
      fontSize={fontSize}
      isAllSelected={isAllSelected}
      maxSelectableRows={maxSelectableRows}
      selectedRowIDs={selectedRowIDs}
      tableID={tableID}
    >
      <Flex direction="col" fullWidth gap={6} justify="between">
        <TableTitle className={styles} title={title} />
        <Flex fullWidth gap={6} justify="between">
          <TableSearchBar
            className={styles}
            value={searchTerm}
            onReset={resetSearch}
            onSearch={handleSearch}
          />

          <TableColumnSelectors
            className={styles}
            columns={columns}
            hideableColumnIDs={hideableColumnIDs}
            placeholder={'Hide columns'}
            onHideColumn={handleHideColumn}
          />

          <TableCSVExportButton className={styles.tableCSVExportButton} rows={sortedData} />
        </Flex>
      </Flex>

      <Table className={styles.table}>
        <TableHeader className={styles.tableHeader}>
          <TableHeaderRow className={styles.tableHeaderRow}>
            <TableHeaderCheckbox className={styles} handleCheck={handleSelectAll} />
            {effectiveColumns.map((column) => (
              <TableHeaderCell
                align={column.align}
                cellWidth={column.width}
                className={styles}
                columnID={column.key}
                handleSort={() => sortBy(column.key)}
                highlighted={column.highlighted}
                isSortable={column.sortable}
                key={column.key}
              >
                {column.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHeader>
        <TableBody className={styles.tableBody}>
          {rows.map((row, index) => {
            return (
              <TableRow
                className={styles.tableRow}
                key={`${tableID}-row-${index}`}
                rowID={row?.ID}
                onSelectedRow={() => handleMultiSelection(row as any)}
              >
                <TableCheckbox className={styles} rowID={row?.ID} />
                {effectiveColumns.map((column) => {
                  const columnKey = column.key
                  const value = row[columnKey]

                  return (
                    <TableCell
                      cellWidth={column.width}
                      className={styles.tableCell}
                      highlighted={column.highlighted}
                      key={columnKey}
                    >
                      {value as ReactNode}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      {children}
      <Flex align="center" direction="row" fullWidth gap={6} justify="between" pt={8}>
        <TableRowPerPage
          className={styles}
          maxRowPerPageDefault={maxRowPerPage}
          placeholder={'Rows per page'}
          rowPerPage={rowPerPage}
          onMaxRowChange={setMaxRowPerPage}
        />

        <TablePagination
          className={styles}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Flex>
    </SuperTable>
  )
}
