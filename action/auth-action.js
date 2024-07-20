'use server';

import { hashUserPassword } from "@/lib/hash";
import createUser from "@/lib/user";
import { redirect } from "next/navigation";

export async function signUp(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    let error = {};
    if (!email.includes('@')) {
        error.email = "Please enter a valid email address"

    }
    if (password.trim().length < 8) {
        error.password = "Password must be at least 8 charecter long."

    }
    if (Object.keys(error).length > 0) {
        return {
            error: error,
        }

    }
    const hashedPassword = hashUserPassword(password)
    try {

        createUser(email, hashedPassword);
    }
    catch (error) {
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                error: {
                    email: "Email already exists"
                }
            };
        }
        throw error ;

    }

    redirect("/training");

}