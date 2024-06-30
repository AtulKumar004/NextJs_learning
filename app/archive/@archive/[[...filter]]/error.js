"use client" ;
import React from "react";

export default function FliterError({error}) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error?.message}</p>
    </div>
  );
}
