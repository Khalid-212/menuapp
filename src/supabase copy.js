// import { createClient, SupabaseClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// function errorGuard(error) {
//   if (error) {
//     console.log(error);
//   }
//   return [];
// }
// // get all the data from the table
// export const getAllData = async (table) => {
//   const { data, error } = await supabase.from(table).select("*");
//   errorGuard(error);
//   return data;
// };

// // get restaurant by username and password
// export const getRestaurant = async (username, password) => {
//   const { data, error } = await supabase
//     .from("restaurants")
//     .select("*")
//     .eq("username", username)
//     .eq("password", password);
//   errorGuard(error);
//   return data[0];
// };

// // get restaurant by id
// export const getRestaurantById = async (id) => {
//   const { data, error } = await supabase
//     .from("restaurants")
//     .select("*")
//     .eq("restaurant_id", id);
//   errorGuard(error);
//   return data[0];
// };

// // add menuitem to the table menuitems
// export const addMenuItem = async (datas) => {
//   const { data, error } = await supabase.from("menuitems").insert(datas);
//   errorGuard(error);
//   return data;
// };

// // remove menuitem from the table menuitems
// export const removeMenuItem = async (id) => {
//   const { data, error } = await supabase
//     .from("menuitems")
//     .delete()
//     .match({ item_id: id });
//   errorGuard(error);
//   return data;
// };

// // update menuitem from the table menuitems
// export const updateMenuItem = async (
//   id,
//   name,
//   price,
//   description,
//   image_url,
//   category
// ) => {
//   const { data, error } = await supabase
//     .from("menuitems")
//     .update({ name, price, description, image_url, category })
//     .match({ item_id: id });
//   errorGuard(error);
//   return data;
// };

// // get all menuitems for a specific restaurant
// export const getMenuItems = async (restaurant_id) => {
//   const { data, error } = await supabase
//     .from("menuitems")
//     .select("*")
//     .eq("restaurant_id", restaurant_id)
//     .order("item_id", { ascending: false });
//   errorGuard(error);
//   return data;
// };

// // add qrcode order to the table qrcodeorder
// export const addQRCodeOrder = async (restaurant_id, RestaurantName) => {
//   const { data, error } = await supabase.from("qrcodeorder").insert({
//     RestaurantID: restaurant_id,
//     order_status: "pending",
//     RestaurantName: RestaurantName,
//   });
//   errorGuard(error);
//   return data;
// };

// // update qrcode order status
// export const updateQRCodeOrderStatus = async (id, status) => {
//   const { data, error } = await supabase
//     .from("qrcodeorder")
//     .update({ order_status: status })
//     .match({ id: id });
//   errorGuard(error);
//   return data;
// };

// export function fileUpload(name, avatarFile) {
//   const { data, error } = supabase.storage
//     .from("files")
//     .upload(name, avatarFile, {
//       cacheControl: "3600",
//       upsert: false,
//     });
//   errorGuard(error);
//   return data;
// }
// export async function addfilesubmission(url, restaurant_id) {
//   const { data, error } = await supabase
//     .from("FileSubmission")
//     .insert([{ restaurant_id: restaurant_id, fileUrl: url }]);
//   errorGuard(error);
//   return data;
// }

// // get all qrcode orders
// export const getQRCodeOrders = async () => {
//   const { data, error } = await supabase.from("qrcodeorder").select("*");
//   errorGuard(error);
//   return data;
// };