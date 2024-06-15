"use client";
import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  const handlePickClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
        setPickedImage(null)
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPickedImage(reader.result);
    };
  };
  return (
    <>
      <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
          <div className={styles.preview}>
            {!pickImage && <p>No image picked yet.</p>}
            {pickImage && (
              <Image
                src={pickImage}
                alt="The image selected by the user"
                fill
                
                
              />
            )}
          </div>
          <input
            className={styles.input}
            type="file"
            id={name}
            accept="image/png , image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
          />

          <button
            className={styles.button}
            type="button"
            onClick={handlePickClick}
          >
            {" "}
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
