import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/lib/i18n";

export function Preloader() {
  const { t } = useT();
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const seen = typeof sessionStorage !== "undefined" && sessionStorage.getItem("scaleshark-loaded");
    if (seen) {
      setShow(false);
      return;
    }
    const int = setInterval(() => {
      setCount((c) => {
        const next = c + Math.floor(Math.random() * 12) + 4;
        if (next >= 100) {
          clearInterval(int);
          setTimeout(() => {
            setShow(false);
            sessionStorage.setItem("scaleshark-loaded", "1");
          }, 400);
          return 100;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(int);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          <div className="flex items-baseline gap-3 font-display">
            <span className="text-6xl font-semibold tracking-tight md:text-8xl">
              {String(count).padStart(3, "0")}
            </span>
            <span className="text-xl text-ink-dim">%</span>
          </div>
          <div className="mt-8 h-px w-64 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-violet"
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ink-dim">
            {t("preloader.tag")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
