import { useState, useEffect, ReactNode } from "react";
import styles from "../styles/components/FallInTextEntry.module.css";

export default function FallInTextEntry({ text }: { text: string }) {
  const [animatedText, setAnimatedText] = useState<ReactNode[]>([]);

  const [showOriginalText, setShowOriginalText] = useState<boolean>(true);

  useEffect(() => {
    setShowOriginalText(false);
    const textArray = text.split("");
    let delay = 0;

    const animatedChars = textArray.map((char: string, index: number) => {
      delay += 0.1;
      return (
        <span
          key={`${index}__${char}__falling`}
          style={{ animationDelay: `${delay}s` }}
          className={`${styles.falling__char} subtitle secondary-font-color text-shadow`}
        >
          {char}
        </span>
      );
    });

    setAnimatedText(animatedChars);
  }, [text]);

  return (
    <span
      className={`${styles.falling__text__container} ${styles.fall_in_text_entry__container}`}
    >
      {/**
       * This is to make sure that the original text is present in the DOM before the animation starts.
       * FOR SEO PURPOSES
       */}
      {showOriginalText ? (
        <span className={styles.initial__text}>{text}&nbsp;</span>
      ) : null}

      {animatedText}
    </span>
  );
}
