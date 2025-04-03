import { FormState } from "./types";

export async function submitAction(_prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string; 
  
    const errors: FormState["errors"] = {};
  
    if (!name) errors.name = "This field is required.";
    if (name.length > 50) errors.name = "Max length is 50 characters.";
  
    if (!email) errors.email = "This field is required.";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errors.email = "Invalid email address.";
  
    if (!message) errors.message = "This field is required."; 
    if (message.length > 2000) errors.message = "Max length is 2000 characters.";
  
    if (Object.keys(errors).length > 0) return { errors, success: false };
  
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) throw new Error("Submission failed");
        return { errors: {}, success: true };
      } catch {
        return { errors: {}, success: false, message: "Submission failed. Please try again later." }; 
      }
  }