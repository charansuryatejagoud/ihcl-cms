import React, {
  forwardRef,
  ForwardedRef,
  useCallback,
  useState,
  useMemo,
} from "react";
import {
  Card,
  TextInput,
  Flex,
  Button,
  Popover,
  Text,
  Box,
  Container,
  Tooltip,
  useClickOutside,
} from "@sanity/ui";
import PatchEvent, {
  set,
  insert,
  unset,
} from "part:@sanity/form-builder/patch-event";
import { FormField } from "@sanity/base/components";
import { FormBuilderInput } from "part:@sanity/form-builder";
import ConfirmationDialog from "part:@sanity/components/dialogs/confirm";
import FullScreenDialog from "part:@sanity/components/dialogs/fullscreen";
import styled from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import {
  newTableCell,
  newTableRow,
  generateTablePath,
} from "../../schemas/shared-utils";

const TableRoot = styled.table`
  table-layout: fixed;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr``;
const TableCell = styled.td`
  min-width: 150px;
  border: 1px solid #ced2d9;
`;
const CellTextInput = styled(TextInput)``;

const TooltipWrapper = ({ text, children }) => (
  <Tooltip
    content={
      <Box padding={2}>
        <Text muted size={1}>
          {text}
        </Text>
      </Box>
    }
    fallbackPlacements={["right", "left"]}
    placement="top"
    portal
  >
    {children}
  </Tooltip>
);

const TableInput = forwardRef((props: any, ref: ForwardedRef<any>) => {
  const { type, markers, presence, onChange, value: rows } = props;

  const cellType = useMemo(
    () =>
      type.of[0].fields?.find((field) => field.name === "cells")?.type?.of[0],
    [type],
  );

  const [activeCellKey, setActiveCellKey] = useState("");
  const [tableContainerRef, setTableContainerRef] = useState(null);
  const [cellEditState, setCellEditState] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(null);

  const onClickOutsideContainer = useCallback(() => {
    setActiveCellKey("");
  }, []);

  useClickOutside(onClickOutsideContainer, [tableContainerRef]);

  const closeConfirmationDialog = () => setConfirmationDialog(false);

  const deleteCell = useCallback(
    (rowKey, cellKey, cellsCount) => {
      setConfirmationDialog({
        message: "Are you sure you want to delete cell?",
        cb: () => {
          onChange(
            PatchEvent.from(
              unset(
                generateTablePath(
                  rowKey,
                  cellsCount === 1 ? undefined : cellKey,
                ),
              ),
            ),
          );
          closeConfirmationDialog();
        },
      });
    },
    [onChange],
  );

  const insertCell = useCallback(
    (position, rowKey, cellKey) => {
      onChange(
        PatchEvent.from(
          insert(
            [newTableCell()],
            position,
            generateTablePath(rowKey, cellKey),
          ),
        ),
      );
    },
    [onChange],
  );

  const initializeTable = useCallback(() => {
    onChange(PatchEvent.from(set([newTableRow()])));
  }, [onChange]);

  const updateCellProperty = useCallback(
    (value, rowKey, cellKey, propertyName) => {
      if (propertyName === "colSpan" || propertyName === "rowSpan") {
        if (value === "") {
          onChange(
            PatchEvent.from(
              unset(generateTablePath(rowKey, cellKey, propertyName)),
            ),
          );
          return;
        }
        const numericValue = Number(value);
        if (Number.isNaN(numericValue)) {
          return;
        }
        value = numericValue;
      }
      onChange(
        PatchEvent.from(
          set(value, generateTablePath(rowKey, cellKey, propertyName)),
        ),
      );
    },
    [onChange],
  );

  const addNewRow = useCallback(() => {
    if (!rows?.length) return initializeTable();

    const cellsInLastRow = rows?.[rows?.length - 1]?.cells?.length || 1;
    onChange(
      PatchEvent.from(
        insert([newTableRow(cellsInLastRow)], "after", generateTablePath(-1)),
      ),
    );
  }, [rows, onChange]);

  const addNewColumn = useCallback(() => {
    if (!rows?.length) return initializeTable();
    onChange(
      PatchEvent.from(
        rows?.map((row) =>
          insert([newTableCell()], "after", generateTablePath(row._key, -1)),
        ),
      ),
    );
  }, [rows, onChange]);

  const deleteTable = useCallback(() => {
    setConfirmationDialog({
      message: "Are you sure you want to delete this table?",
      cb: () => {
        onChange(PatchEvent.from(set([])));
        closeConfirmationDialog();
      },
    });
  }, [onChange]);

  const CellMenu = useCallback(
    ({
      rowSpan,
      colSpan,
      rowKey,
      cellKey,
      rowIndex,
      cellIndex,
      rowCellsCount,
    }) => {
      return (
        <Container width={8}>
          <Flex direction="column">
            <Flex direction="row" paddingBottom={2}>
              <Card paddingRight={2} style={{ width: "70px" }}>
                <TooltipWrapper text="Row span">
                  <TextInput
                    padding={2}
                    onChange={(e: any) =>
                      updateCellProperty(
                        e.target.value,
                        rowKey,
                        cellKey,
                        "rowSpan",
                      )
                    }
                    value={rowSpan ?? ""}
                  />
                </TooltipWrapper>
              </Card>
              <Card style={{ width: "62px" }}>
                <TooltipWrapper text="Col span">
                  <TextInput
                    padding={2}
                    onChange={(e: any) =>
                      updateCellProperty(
                        e.target.value,
                        rowKey,
                        cellKey,
                        "colSpan",
                      )
                    }
                    value={colSpan ?? ""}
                  />
                </TooltipWrapper>
              </Card>
            </Flex>
            <Flex direction="row">
              <Card paddingRight={2}>
                <TooltipWrapper text="Add cell before">
                  <Button
                    icon={IoAddOutline}
                    mode="ghost"
                    padding={2}
                    onClick={() => insertCell("before", rowKey, cellKey)}
                  />
                </TooltipWrapper>
              </Card>
              <Card paddingRight={2}>
                <TooltipWrapper text="Add cell after">
                  <Button
                    icon={IoAddOutline}
                    mode="ghost"
                    padding={2}
                    onClick={() => insertCell("after", rowKey, cellKey)}
                  />
                </TooltipWrapper>
              </Card>
              <Card paddingRight={2}>
                <TooltipWrapper text="Edit cell">
                  <Button
                    icon={BiEditAlt}
                    tone="positive"
                    padding={2}
                    onClick={() =>
                      setCellEditState({ rowIndex, cellIndex, rowKey, cellKey })
                    }
                  />
                </TooltipWrapper>
              </Card>
              <Card>
                <TooltipWrapper text="Delete cell">
                  <Button
                    icon={AiFillDelete}
                    tone="critical"
                    padding={2}
                    onClick={() => deleteCell(rowKey, cellKey, rowCellsCount)}
                  />
                </TooltipWrapper>
              </Card>
            </Flex>
          </Flex>
        </Container>
      );
    },
    [],
  );

  return (
    <div ref={ref}>
      <FormField
        label={type.title}
        description={type.description}
        __unstable_markers={markers}
        __unstable_presence={presence}
      >
        {rows?.length ? (
          <Card
            border={true}
            padding={1}
            overflow="auto"
            ref={setTableContainerRef}
          >
            <TableRoot>
              <TableBody>
                {rows?.map((row, rowIndex) => (
                  <TableRow key={row._key}>
                    {row?.cells?.map((cell, cellIndex) => (
                      <TableCell
                        key={cell._key}
                        rowSpan={cell.rowSpan || 1}
                        colSpan={cell.colSpan || 1}
                        onClick={(e) =>
                          e.target?.getElementsByTagName("input")?.[0]?.focus()
                        }
                      >
                        <Popover
                          content={
                            <CellMenu
                              rowSpan={cell.rowSpan}
                              colSpan={cell.colSpan}
                              rowKey={row._key}
                              cellKey={cell._key}
                              rowIndex={rowIndex}
                              cellIndex={cellIndex}
                              rowCellsCount={row?.cells?.length || 0}
                            />
                          }
                          padding={2}
                          placement="top-start"
                          radius={0}
                          open={activeCellKey === cell._key}
                        >
                          <CellTextInput
                            padding={3}
                            border={0}
                            height={"100%"}
                            value={cell.value || ""}
                            onChange={(e: any) =>
                              updateCellProperty(
                                e.target.value,
                                row._key,
                                cell?._key,
                                "value",
                              )
                            }
                            onFocus={() => setActiveCellKey(cell._key)}
                          />
                        </Popover>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </TableRoot>
          </Card>
        ) : null}
        <Flex paddingTop={3} justify="space-between">
          <Flex>
            <Card paddingRight={2}>
              <Button
                icon={IoAddOutline}
                mode="ghost"
                paddingX={4}
                paddingY={2}
                text="Row"
                onClick={addNewRow}
              />
            </Card>
            <Card paddingRight={2}>
              <Button
                icon={IoAddOutline}
                mode="ghost"
                paddingX={4}
                paddingY={2}
                text="Column"
                onClick={addNewColumn}
              />
            </Card>
          </Flex>
          {rows?.length ? (
            <Card paddingRight={2}>
              <Button
                icon={AiFillDelete}
                tone="critical"
                paddingX={4}
                paddingY={2}
                text="Delete"
                onClick={deleteTable}
              />
            </Card>
          ) : null}
        </Flex>
      </FormField>
      {cellEditState ? (
        <FullScreenDialog
          id="cell-form-dialog"
          title="Edit Cell"
          onClose={() => setCellEditState(null)}
        >
          <Card padding={4}>
            <FormBuilderInput
              type={cellType}
              value={
                rows?.[cellEditState?.rowIndex]?.cells?.[
                  cellEditState?.cellIndex
                ]
              }
              onChange={(patchEvent) => {
                const newEvent = [
                  { _key: cellEditState?.cellKey },
                  "cells",
                  { _key: cellEditState?.rowKey },
                ].reduce(
                  (prefixedEvent, pathSeg) => prefixedEvent.prefixAll(pathSeg),
                  patchEvent,
                );
                return onChange(newEvent);
              }}
            />
          </Card>
        </FullScreenDialog>
      ) : null}
      {confirmationDialog && (
        <ConfirmationDialog
          onConfirm={confirmationDialog?.cb}
          onCancel={closeConfirmationDialog}
          confirmColor={"danger"}
          confirmButtonText="Delete"
        >
          {confirmationDialog?.message || ""}
        </ConfirmationDialog>
      )}
    </div>
  );
});

export default TableInput;
