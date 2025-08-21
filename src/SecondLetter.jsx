import React, { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const texts = {
  A: "All stories start with a silence.",
  B: "Behind every name, there's a shadow.",
  C: "Can you feel the shift in the air?",
  D: "Don't trust the light—it hides as well.",
  E: "Eyes lie. Look deeper.",
  F: "Footsteps fade, but never vanish.",
  G: "Ghosts linger where memories fail.",
  H: "Hidden truths wait beneath the calm.",
  I: "Invisible threads bind us all.",
  J: "Journey begins where fear ends.",
  K: "Keys unlock more than just doors.",
  L: "Locked away, but never lost.",
  M: "Many paths, only one truth.",
  N: "Nothing is as it seems tonight.",
  O: "Open your eyes to what’s unseen.",
  P: "Promises whispered in the dark.",
  Q: "Questions echo in empty halls.",
  R: "Remember her? You never met her, yet you remember.",
  S: "Silence holds the loudest secrets.",
  T: "Time isn’t real here.",
  U: "Underneath lies the forgotten.",
  V: "Voices call from shadows deep.",
  W: "Waiting is the hardest part.",
  X: "X marks the place where truth hides.",
  Y: "You are closer than you think.",
  Z: "Zero is not the end. It’s the start again.",
};

export default function AlphabetScroll() {
  const [revealedLetters, setRevealedLetters] = useState({});

  const handleReveal = (letter) => {
    setRevealedLetters((prev) => ({ ...prev, [letter]: true }));
  };

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {letters.map((letter) => (
        <section
          key={letter}
          className="h-screen snap-start flex flex-col justify-center items-center px-8 text-center select-none"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Letter */}
          {letter === "L" ? (
            <div
              className="text-[20rem] font-extrabold cursor-pointer select-none opacity-30
                hover:opacity-35 transition-all duration-1000
                active:scale-95 active:opacity-100"
              title="Click to reveal secret"
              onMouseDown={() => {
                setTimeout(() => {
                  console.log(1);
                  handleReveal(letter);
                }, 1000);
              }}
            >
              {letter}
            </div>
          ) : (
            <div className="text-[20rem] font-extrabold opacity-30 select-none">
              {letter}
            </div>
          )}

          {/* Text */}
          <p
            className={`
    mt-8 max-w-xl text-xl leading-relaxed font-serif text-center
    transition-all duration-1000 ease-in-out
    ${letter === "L" && revealedLetters.L ? "opacity-100" : "opacity-70"}
  `}
          >
            {letter === "L" && revealedLetters.L
              ? "She is known by this letter."
              : texts[letter]}
          </p>
        </section>
      ))}
    </div>
  );
}
