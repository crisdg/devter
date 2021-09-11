import styles, { globalStyles } from "./styles";
export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
        <style jsx>{styles}</style>
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </>
  );
}
