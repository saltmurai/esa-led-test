import { useEffect, useState } from "react";
import ControlBar from "../components/homepage/ControlBar";
import Head from "next/head";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import useGlobalStore from "../lib/zustand";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "param",
    headerName: "Parameter",
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: "unit",
    headerName: "Unit",
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: "min",
    headerName: "Min",
    type: "number",
    width: 150,
    editable: true,
    sortable: false,
  },
  {
    field: "max",
    headerName: "Max",
    type: "number",
    width: 150,
    editable: true,
    sortable: false,
  },
  {
    field: "correction",
    headerName: "Correction Factor",
    type: "number",
    width: 150,
    editable: true,
    sortable: false,
  },
];

export default function SetParam() {
  const store = useGlobalStore((state: any) => state.param);
  const updateParam = useGlobalStore((state: any) => state.updateParam);
  const [rows, setRows] = useState(store);
  // fetch data then set to rows
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/fetchData");
      const data = await result.json();
      setRows(data);
    };
    fetchData();
  }, []);

  async function saveHandler() {
    updateParam(rows);
    try {
      const result = await fetch("/api/saveData", {
        method: "POST",
        body: JSON.stringify(rows),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        alert("Data saved successfully");
      } else {
        alert("Error saving data");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Head>
        <title>Set Param</title>
      </Head>
      <div className="bg-gray-300 flex flex-col h-screen gap-2 px-1">
        <ControlBar></ControlBar>
        <div className="param h-full bg-white px-5">
          <div className="flex justify-center items-center mt-5 gap-3">
            <div className="btn btn-primary text-white" onClick={saveHandler}>
              SAVE
            </div>
            <div className="btn btn-error text-white">LOAD</div>
          </div>
          <div className="flex mt-5 flex-col justify-center items-center">
            <Box sx={{ height: 500, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                disableColumnFilter
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                style={{ fontSize: "1.4rem" }}
                components={{ Toolbar: GridToolbar }}
                onCellEditCommit={(params, event) => {
                  const { id, field, value } = params;
                  const updatedRows = rows.map((row: any) => {
                    if (row.id === id) {
                      return { ...row, [field]: value };
                    }
                    return row;
                  });
                  console.log(updatedRows);
                  setRows(updatedRows);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
