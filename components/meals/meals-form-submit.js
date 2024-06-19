"use client";
import React from "react";
import {useFormStatus} from "react-dom"

export default function MealsFormSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button disabled = {pending}>
        {pending ? '...Submitting': 'Submit'}

    </button>
  );
}
