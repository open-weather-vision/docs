import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Open Source",
        Svg: require("@site/static/img/open-source.svg").default,
        description: (
            <>
                open weather vision is build by a strong community of weather
                enthusiasts!
            </>
        ),
    },
    {
        title: "Free",
        Svg: require("@site/static/img/free.svg").default,
        description: (
            <>
                open weather vision is completely free to use. You can use it
                for personal or commercial use without any restrictions.
            </>
        ),
    },
    {
        title: "Self Hostable",
        Svg: require("@site/static/img/self-hostable.svg").default,
        description: (
            <>
                You can host open weather vision on your own server (e.g. a
                raspberry pi). By that you have full control over your data.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
