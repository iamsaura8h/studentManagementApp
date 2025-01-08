import { useState } from "react";
import API from "../services/api"

function AddStudent(){
  const [formData,setFormData] = useState({
    name: "",
    registrationNumber: "",
    department: "",
    year: "",
    gender: "",
  });

  
}