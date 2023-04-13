import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("*name is a required field"),
  color: Yup.string().required("*color is a required field"),
  category: Yup.string().required("*category is a required field"),
  price: Yup.number().required("*Price is a required field"),
});
const ProductsForm = ({ editedRow = {} }) => {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: editedRow ? editedRow.name : "",
          color: editedRow ? editedRow.color : "",
          category: editedRow ? editedRow.category : "",
          price: editedRow ? editedRow.price : "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            if (editedRow) {
            } else {
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  id="category"
                  name="category"
                  label="Category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.category && Boolean(errors.category)}
                  helperText={touched.category && errors.category}
                />
                <TextField
                  id="color"
                  name="color"
                  label="Color"
                  value={values.color}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.color && Boolean(errors.color)}
                  helperText={touched.color && errors.color}
                />
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button type="submit">{editedRow ? "Update" : "Add"}</Button>
                </Box>
              </Box>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductsForm;
