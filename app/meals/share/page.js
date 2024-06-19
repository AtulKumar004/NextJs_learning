import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import MealsFormSubmitBtn from "@/components/meals/meals-form-submit";

const isFormValied = (text) => {
  return !text || !text.trim() !== " ";
};

export default function ShareMealPage() {
  async function shareMeal(formData) {
    "use server";

    if (
      isFormValied(formData.get("title")) ||
      isFormValied(formData.get("email")) ||
      isFormValied(formData.get("name")) ||
      isFormValied(formData.get("summary")) ||
      isFormValied(formData.get("instructions")) ||
      !formData.get("image") || formData.get("image").size === 0 
    ) {
      throw new  Error('Invalied form data') ;
    }
    const meal = {
      title: formData.get("title"),
      creator_email: formData.get("email"),
      creator: formData.get("name"),
      summary: formData.get("summary"),
      image: formData.get("image"),
      instructions: formData.get("instructions"),
    };

    await saveMeal(meal);
    redirect("/meals");
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Image" />
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealsFormSubmitBtn />
          </p>
        </form>
      </main>
    </>
  );
}
