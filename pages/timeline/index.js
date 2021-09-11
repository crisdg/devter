import AppLayout from "../../components/appLayout/";
export default function Timeline({ userName }) {
  Timeline.getInitialProps = () => {
    return { userName: "@Cristian " };
  };
  return (
    <AppLayout>
      <div>
        <h1> {userName} Timeline</h1>
        <style jsx>
          {`
            h1 {
              color: red;
              background: green;
            }
          `}
        </style>
      </div>
    </AppLayout>
  );
}
