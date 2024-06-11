import React from "react";
import styles from "./meals-grid.module.css";
import MealItem from "./mealItem";

export default function MealGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((obj) => {
        return (
          <li key={meals?.id}>
            <MealItem {...obj} />
          </li>
        );
      })}

    </ul>
  );
}
