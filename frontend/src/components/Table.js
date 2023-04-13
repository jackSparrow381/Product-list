import React from "react";
import MaterialTable from "@material-table/core";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { columns, data } from "../utils/Constants";

export default function ProductsTable() {
  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <MaterialTable
        title="Product List"
        options={{
          search: false,
          actionsColumnIndex: -1,
        }}
        columns={columns}
        data={data}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Edit Product",
            // onClick: (event, rowData) => handleEdit(rowData._id),
          },
          (rowData) => ({
            icon: DeleteIcon,
            tooltip: "Delete Product",
            // onClick: (event, rowData) => handleDelete(rowData._id),
          }),
        ]}
      />
    </div>
  );
}
