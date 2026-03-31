import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const supabase_url = Constants.expoConfig?.extra?.MY_SUPABASE_URL ?? "";
const project_key = Constants.expoConfig?.extra?.MY_PROJECT_KEY ?? "";

const supabase = createClient(supabase_url, project_key);

const getRoomDetails = async (roomType?: string, hotelId?: string) => {
  let query = supabase
    .from("hotelrooms")
    .select(
      "id, hotel_id, name, floor, price, size,maxGuests, beds, images,description, amenities, room_type ",
    );

  if (roomType) query = query.eq("room_type", roomType);
  if (hotelId) query = query.eq("hotel_id", hotelId);
  const { data, error } = await query;
  if (error) {
    console.error("Error in fetching room details", error);
    return [];
  }

  return data;
};

export default getRoomDetails;
