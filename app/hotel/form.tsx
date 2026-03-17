import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { useRouter } from "expo-router";
import {  Form } from "@/types/formtype";

export default function Form() {
    const router = useRouter();
    const [formData, setFormData] = useState<Form>({
        fullName:"", email:"", number:0, nin:"", guest:1, request:""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")


    const handleSubmit = () => {
    setLoading(true)
    setError("")
    setSuccess("")
        if(!formData.email || !formData.fullName || !formData.guest || !formData.nin || !formData.number){
            setError("Please fill all required fields")
            setLoading(false)
            return
        }  if(! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            setError("Please use a valid email address")
            setLoading(false)
            return
        } 
         if( formData.nin.length !== 11 ){
            setError("NIN must be exactly 11 digits")
            setLoading(false)
            return
        }
       setTimeout(() => {
                setSuccess("Personal details submitted successfully")
                setLoading(false)
                router.push("/booking")
            }, 3000)
        
    }
  return (
    <View>
      <Text>Your details</Text>
      <Text>Step 1 of 3</Text>

      <View>
        <Text>GUEST INFORMATION</Text>
        <View>
          <Text>Full Name</Text>
          <TextInput keyboardType="default" placeholder="Salvation Azuh" />
        </View>

        <View>
          <Text>Phone Number</Text>
          <TextInput keyboardType="phone-pad" placeholder="+2348143654678" />
        </View>

        <View>
          <Text>EMAIL ADDRESS *</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="email@exmaple.com"
          />
        </View>

        <View>
          <Text>NIN (NATIONAL ID NUMBER) *</Text>
          <TextInput keyboardType="number-pad" placeholder="-----------" />
        </View>

        <View>
          <Text>NUMBER OF GUESTS</Text>
          <TextInput keyboardType="number-pad" placeholder="1 adult" />
        </View>

        <View>
          <Text>SPECIAL REQUESTS (optional)</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Enter message"
          />
        </View>

        <Text>
          Your details are used for reservation verification at check-in only.
        </Text>

        <TouchableOpacity onPress={() => }>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
