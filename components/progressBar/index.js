import { string } from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './style.module.css';

function ProgressBar({ fillColor }) {
  const [ loaded, setLoaded ] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div className={`${styles.filler} ${loaded ? styles.full : styles.empty}`} style={{ backgroundColor: fillColor }} />
      </div>
    </div>
  );
}
ProgressBar.propTypes = {
  fillColor: string,
};

ProgressBar.defaultProps = {
  fillColor: 'red',
};

export default ProgressBar;
