import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Doctores de Confianza',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Sólo los mejores doctores, con las mejores calificaciones, y los mejores
        comentarios, para ti.
      </>
    ),
  },
  {
    title: 'Atención Personalizada',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Nadie conocerá mejor tus necesidades de salud que tu doctor, y María
        te ayudará a encontrarlo, dar seguimiento a tus citas, y más.
      </>
    ),
  },
  {
    title: 'Powered by María',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        María is una asistente ejemplar, que te ayudará a encontrar a tu doctor,
        y a agendar una cita con él.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
