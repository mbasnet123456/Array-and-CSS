import styles from "./home.module.css";
function Home() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className={styles.users}>
      {names.map((name, index) => (
        <li key={index} className={styles.box}>
          {name}
        </li>
      ))}
    </div>
  );
}

export default Home;
