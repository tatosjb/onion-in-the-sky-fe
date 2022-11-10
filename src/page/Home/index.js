import SideBar from "components/SideBar";
import Globe from "../../components/Globe";

import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Globe />
    </div>
  );
}

export default Home;
