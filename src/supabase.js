import { createClient, SupabaseClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function errorGuard(error) {
  if (error) {
    console.log(error);
  }
  return [];
}
// get all the data from the table
export const getAllData = async (table) => {
  const { data, error } = await supabase.from(table).select("*");
  errorGuard(error);
  return data;
};

// get restaurant by username and password
export const getRestaurant = async (username, password) => {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("username", username)
    .eq("password", password);
  errorGuard(error);
  return data[0];
};

// add menuitem to the table menuitems
export const addMenuItem = async (datas) => {
  const { data, error } = await supabase.from("menuitems").insert(datas);
  errorGuard(error);
  return data;
};

// remove menuitem from the table menuitems
export const removeMenuItem = async (id) => {
  const { data, error } = await supabase
    .from("menuitems")
    .delete()
    .match({ item_id: id });
  errorGuard(error);
  return data;
};

// update menuitem from the table menuitems
export const updateMenuItem = async (
  id,
  name,
  price,
  description,
  image_url,
  category
) => {
  const { data, error } = await supabase
    .from("menuitems")
    .update({ name, price, description, image_url, category })
    .match({ item_id: id });
  errorGuard(error);
  return data;
};

// get all menuitems for a specific restaurant
export const getMenuItems = async (restaurant_id) => {
  const { data, error } = await supabase
    .from("menuitems")
    .select("*")
    .eq("restaurant_id", restaurant_id)
    .order("item_id", { ascending: false });
  errorGuard(error);
  return data;
};
