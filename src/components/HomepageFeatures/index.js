import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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

export default function HomepageFeatures() {
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
