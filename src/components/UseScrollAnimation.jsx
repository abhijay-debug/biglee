import { useEffect } from "react";

const useScrollAnimation=()=> {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hide");
          }
        });
      },
      { threshold: 0.2 } // 20% visible hone par trigger hoga
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

export default useScrollAnimation;