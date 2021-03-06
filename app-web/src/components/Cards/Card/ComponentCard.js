import React from 'react';
import PropTypes from 'prop-types';
import DotDotDot from 'react-dotdotdot';
import Image from 'react-image';
import styles from './Card.module.css';
import Card from '../../../hoc/Card';
import Link from '../../UI/Link/Link';
import ActionsRibbon from './ActionsRibbon';
import { CARD_CONFIG } from '../../../constants/ui';
import { ARIA_LABEL_RESOURCE } from '../../../constants/ariaLabels';

const ComponentCard = ({
  title,
  description,
  resourcePath,
  image,
  resourceType,
  author,
  repository,
  owner,
}) => (
  <Card resourceType={resourceType} resourcePath={resourcePath} title={title} author={author}>
    <div className={styles.Body}>
      <DotDotDot clamp={CARD_CONFIG.maxDescriptionLines} className={styles.BodyDescription}>
        <p>{description}</p>
      </DotDotDot>
      <div className={styles.BodyImage}>
        <Link to={resourcePath} aria-label={ARIA_LABEL_RESOURCE}>
          <Image src={image} />
        </Link>
      </div>
    </div>
    <ActionsRibbon
      actions={CARD_CONFIG.actionsRibbon[resourceType]}
      repository={repository}
      owner={owner}
    />
  </Card>
);

ComponentCard.displayName = 'Component Card Component';

ComponentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resourcePath: PropTypes.string.isRequired,
  resourceType: PropTypes.string.isRequired,
  repository: PropTypes.string,
  owner: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string,
};

ComponentCard.defaultProps = {
  image: '',
  author: '',
  repository: null,
};

export default ComponentCard;
