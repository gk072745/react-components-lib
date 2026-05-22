import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Govind&apos;s React UI Components Library
        </Heading>
        <p className="hero__subtitle">
          Govind&apos;s beautiful, customizable React components built with SCSS. 
          From checkboxes to complex form elements, everything you need for modern web applications.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started - View Components 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const FeatureList = [
    {
      title: 'Custom Form Components',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Beautiful, accessible form components including custom checkboxes, radio buttons, 
          input fields, and select dropdowns. All built with SCSS for complete customization.
        </>
      ),
    },
    {
      title: 'Modern UI Design',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Clean, modern design patterns that follow current UI/UX best practices. 
          Responsive and mobile-friendly components that work across all devices.
        </>
      ),
    },
    {
      title: 'Easy to Customize',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Built with SCSS for easy theming and customization. Modify colors, spacing, 
          and animations to match your brand. Includes TypeScript support for better development experience.
        </>
      ),
    },
  ];

  function Feature({Svg, title, description}) {
    return (
      <div className={clsx('col col--4')}>
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Govind's React UI Components Library"
      description="Govind's comprehensive collection of custom React UI components built with SCSS for modern web applications">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
