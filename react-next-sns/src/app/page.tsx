import Image from "next/image";
import Link from "next/link";
import ic_logo from "../../public/ic_logo.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={ic_logo}
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />

        <div>
          <h1>명함 관리로 이루어지는 내 커리어 관리</h1>
          <br></br>
          <h3>명함 자동 등록, 1촌 맺기</h3>
          <div className={styles.container}>
            <div className={styles.left}>
              <Link href="/enter/flow/signup" className={styles.signup}>가입하기</Link>
            </div>
            <div className={styles.right}>
              <Link href="/enter/flow/signup" className={styles.login}>로그인</Link>
            </div>
          </div>
        </div>


      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
