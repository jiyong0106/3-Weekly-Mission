import Profile from "../components/HeaderSection/Profile";
import Footer from "../components/FooterSection/Footer";
import LinkAdd from "../components/HeaderSection/LinkAdd";
import FolderListBtn from "../components/folder/FolderListBtn";
import Search from "../components/CardSection/Search";
import styles from "../components/CardSection/CardSection.module.css";


export default function FolderPage() {
  return (
    <>
      <Profile />
      <LinkAdd />
      <div className={styles.mainArea}>
        <div className={styles.mainBox}>
          <Search />
          <FolderListBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}
