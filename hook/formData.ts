import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";
import { Form } from "@/types/formtype";

const supabase_url = Constants.expoConfig?.extra?.MY_SUPABASE_URL ?? "";
const project_key = Constants.expoConfig?.extra?.MY_PROJECT_KEY ?? "";

const supabase = createClient(supabase_url, project_key);

const submitForm = async (formData: Form) => {
  const { data, error } = await supabase.from("formDetails").insert(formData);
  if (error) {
    console.error("Error sending data to the database", error);

    return [];
  }

  return data;
};

export default submitForm;
