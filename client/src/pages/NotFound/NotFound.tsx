import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1>Error 404: Page Does Not Exist</h1>
      <h2>You're cooked</h2>
      <img src="../../../public/cooked.gif" alt="cooked"></img> 
    </Layout>
  );
}

export default NotFound;
