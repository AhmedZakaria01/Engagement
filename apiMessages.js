import { supabase } from "./supabaseClient";

export const postData = async (data) => {
  const { data: insertedData, error } = await supabase
    .from("your_table_name") // Replace with your table name
    .insert([data]); // 'data' should be an object representing the row to insert

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", insertedData);
  }
};
