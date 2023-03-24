import clsx from "clsx";
import { Inter } from "next/font/google";

import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={clsx(styles.main, inter.className)}>
            <div className={styles.introAnimation}>
                <video id="background-video" autoPlay muted playsInline>
                    <source src="/assets/video/logo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.textContent}>
                <div className={styles.textInner}>
                    <p>
                        <em>Hi there.</em>
                    </p>
                    <p>My name's Tom.</p>
                    <p>
                        I'm a freelance <b>creative developer</b>.
                    </p>
                    <p>
                        I've worked in digital for nearly twenty years in
                        various roles, from UX and front-end to copywriting and
                        concept development.
                    </p>
                    <p>
                        These days, I mostly make <b>data visualisations</b> and{" "}
                        <b>web apps</b>.
                    </p>
                    <p>
                        I'm currently working with{" "}
                        <a
                            href={"https://informationisbeautiful.net/"}
                            target={"_blank"}>
                            Information is Beautiful
                        </a>{" "}
                        to develop{" "}
                        <a href={"https://vizsweet.com/"} target={"_blank"}>
                            VizSweet
                        </a>
                        , a high-end data visualisation platform.
                    </p>
                    <p>
                        Drop me an email at{" "}
                        <a href={"mailto:tom@acatcalledfrank.com"}>
                            tom@acatcalledfrank.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
