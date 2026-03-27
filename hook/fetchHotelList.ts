import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const supabase_url = Constants.expoConfig?.extra?.MY_SUPABASE_URL ?? "";
const project_key = Constants.expoConfig?.extra?.MY_PROJECT_KEY ?? "";

const supabase = createClient(supabase_url, project_key);

const getHotels = async () => {
  const { data, error } = await supabase
    .from("Hotels")
    .select(
      "id, name, address, rating, roomType, image, owner, about, customerServiceContact, socialMedia",
    );

  if (error) {
    console.error("Error in fetching hotels", error);
    return [];
  }

  return data;
};

export default getHotels;
