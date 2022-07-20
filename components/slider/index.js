import { useState, useEffect } from 'react';
import {
  arrayOf, shape, string, bool, func,
} from 'prop-types';

import ProgressBar from '../progressBar';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePreviousProp from '../../hooks/usePreviousProp';

import styles from './style.module.css';

function SlideItem({
  item, visible, updateVisibleItem, nextSwipe,
}) {
  const [ mainClassname, setMainClassname ] = useState(styles.main);
  const [ rocketClassname, setRocketClassname ] = useState(styles.sectionRocket);
  const prevVisible = usePreviousProp(visible);
  const isMobile = useMediaQuery('(max-width: 641px)');

  useEffect(() => {
    if (visible) {
      setRocketClassname(`${styles.sectionRocket} ${styles.sectionRocketCompleted}`);
    }
  }, []);

  useEffect(() => {
    if (!prevVisible && visible && prevVisible !== undefined) {
      setMainClassname(`${styles.main} ${nextSwipe === 'right' ? styles.mainRight : styles.mainLeft}`);
      setTimeout(() => {
        setRocketClassname(`${styles.sectionRocket} ${styles.sectionRocketCompleted}`);
      }, 10);
    }
    if (!visible && prevVisible !== undefined && prevVisible === true) {
      setRocketClassname(styles.sectionRocket);
    }
  }, [ visible ]);

  return (
    <div key={item.id} className={visible ? mainClassname : styles.hiddenItem} style={{ backgroundImage: `url(${item.bgImage})` }}>
      <section className={styles.aside} style={{ backgroundImage: `url(${item.imageRock})` }}>
        <div className={styles.logoWrapper}>
          <img src={item.logo} alt="rocket" />
          <h1>{item.title}</h1>
          <button type="button">{item.button}</button>
        </div>
      </section>
      <section className={styles.hashtagSection} style={isMobile ? { backgroundImage: `url(${item.bgImage})` } : {}}>
        <div className={styles.hashtagWrapper}>
          <img src={item.iconTrip} alt="rocket" />
          <h2>{item.subtitle}</h2>
          {item.hash.split(' ').map((hashtag) => <p key={hashtag}>{hashtag}</p>)}
        </div>
      </section>
      <section className={styles.sliderMenuSection}>
        <div className={styles.sliderMenuDiv}>
          {visible &&
            <ProgressBar fillColor="#19bd9c" />}
          <div className={styles.sliderMenuButtonsWrapper}>
            <button type="button" onClick={() => updateVisibleItem(false)}>{item.linkprev}</button>
            <button type="button" onClick={() => updateVisibleItem(true)}>{item.linknext}</button>
          </div>
        </div>
      </section>
      <section className={rocketClassname} style={{ backgroundImage: `url(${item.imageRocket})` }} />
      <section className={styles.moonSection} style={{ backgroundImage: `url(${item.imageMoon})` }}>
        <h1>{item.footer}</h1>
      </section>
    </div>
  );
}
SlideItem.propTypes = {
  item: shape({
    bgImage: string,
    iconTrip: string,
    logo: string,
    imageRocket: string,
    title: string,
    subtitle: string,
    hash: string,
    linkprev: string,
    linknext: string,
    easeView: string,
  }),
  visible: bool,
  updateVisibleItem: func,
  nextSwipe: string,
};

SlideItem.defaultProps = {
  item: {},
  visible: false,
  updateVisibleItem: () => true,
  nextSwipe: null,
};

export default function Slider({ data }) {
  const [ itemVisible, setItemVisible ] = useState(0);
  const [ nextSwipe, setNextSwipe ] = useState(null);
  const [ touchStartX, setTouchStartX ] = useState(0);
  const [ touchEndX, setTouchEndX ] = useState(0);

  const updateVisibleItem = (next) => {
    if (next) {
      const nextVisibleItem = itemVisible + 1;
      setItemVisible(nextVisibleItem < data.length ? nextVisibleItem : 0);
      setNextSwipe('right');
    } else { // prev
      const nextVisibleItem = itemVisible - 1;
      setItemVisible(nextVisibleItem < 0 ? data.length - 1 : nextVisibleItem);
      setNextSwipe('left');
    }
  };

  useEffect(() => {
    document.addEventListener('touchstart', (e) => {
      setTouchStartX(e.changedTouches[0].screenX);
    });

    document.addEventListener('touchend', (e) => {
      setTouchEndX(e.changedTouches[0].screenX);
    });
  }, []);

  useEffect(() => {
    if (touchEndX < touchStartX) {
      updateVisibleItem(true);
    }
    if (touchEndX > touchStartX) {
      updateVisibleItem(false);
    }
  }, [ touchEndX ]);

  return (
    <div className={styles.sliderWrapper}>
      {data.map((item, index) => (
        <SlideItem
          item={item}
          visible={itemVisible === index}
          updateVisibleItem={updateVisibleItem}
          visibleIndex={itemVisible}
          index={index}
          key={item.id}
          nextSwipe={nextSwipe}
        />
      ))}
    </div>
  );
}

Slider.propTypes = {
  data: arrayOf(shape({
    bgImage: string,
    iconTrip: string,
    logo: string,
    imageRocket: string,
    title: string,
    subtitle: string,
    hash: string,
    linkprev: string,
    linknext: string,
    easeView: string,
    id: string,
  })),
};

Slider.defaultProps = {
  data: [],
};
