import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { paths } from '../../router/Router';
import styles from './Hero.module.css';

const Hero = ({ hero, location }) => {
  const {
    id,
    name,
    roles,
    localized_name: title,
    primary_attr: mainAttribute,
  } = hero;

  const rolesList = roles.join(', ');
  const heroName = name.toLowerCase().replace('npc_dota_hero_', '');
  const imgUrl = `http://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`;
  const heroLink = `${paths.hero(id)}`;

  return (
    <div className={styles.hero}>
      <img className={styles.heroImage} src={imgUrl} alt="heroes avatar" />
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>Main attribute: {mainAttribute}</p>
        <p>Roles: {rolesList}</p>
      </div>
      <Link
        to={{
          pathname: heroLink,
          state: {
            from: location.pathname,
          },
        }}
        className={styles.heroLink}
      >
        <span className="visually-hidden">Read More</span>
      </Link>
    </div>
  );
};

Hero.propTypes = {
  hero: PropTypes.shape({
    attack_type: PropTypes.string,
    id: PropTypes.number,
    legs: PropTypes.number,
    localized_name: PropTypes.string,
    name: PropTypes.string,
    primary_attr: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default withRouter(Hero);
