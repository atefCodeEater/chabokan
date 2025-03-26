"use client";
export default function orangeButton({
  children,
  css,
}: {
  children: string;
  css: string;
}) {
  return (
    <div>
      <button className={css}>{children}</button>
    </div>
  );
}
