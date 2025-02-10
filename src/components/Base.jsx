"use client";
import styles from "./Base.module.scss";

export function Note({ children }) {
  return (
    <span className={styles.note}>{children}</span>
  );
}

export function PartsTitle({ children }) {
  return (
    <div className={styles.partsTitle}>{children}</div>
  )
}

export function Head({ children, className = "", ...props }) {
  return (
    <div className={`${styles.head} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SubHead({ children, className = "", ...props }) {
  return (
    <div className={`${styles.subHead} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Contents({ children, className = "", ...props }) {
  return (
    <div className={`${styles.contents} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Slide({
  children,
  className = "",
  bg,
  filter = "none",
  filterColor = "none",
  title = "",
  simple = false,
  ...props
}) {
  const bgStyle = {};
  const filterStyle = {
    backdropFilter: filter,
    WebKitBackdropFilter: filter,
    backgroundColor: filterColor,
  };
  if (bg) {
    if (/^(#|rgba?\()/.test(bg)) {
      bgStyle.backgroundColor = bg;
    } else {
      bgStyle.backgroundImage = `url(${bg})`;
    }
  }
  return (
    <div
      className={`slide-base ${className} ${simple ? "slide-vertical-center" : ""}`}
      style={{ ...bgStyle }}
      {...props}
    >
      <div style={{ ...filterStyle }}>
        {!simple && title &&
          <PartsTitle>{title}</PartsTitle>
        }
        {children}
      </div>
    </div>
  );
}

export function Name({ children, className = "", ...props }) {
  return (
    <div className={`${styles.name} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Affiliation({ children, className = "", ...props }) {
  return (
    <div className={`${styles.affiliation} ${className}`} {...props}>
      {children}
    </div>
  );
}
