import React, { FC } from 'react';
import styles from './loadingCircle.module.css';

const LoadingCircle: FC = () => {
	return (
		<div className={styles.ldsRing}>
			<div className={styles.loaderDiv}></div>
			<div className={styles.loaderDiv}></div>
			<div className={styles.loaderDiv}></div>
			<div className={styles.loaderDiv}></div>
		</div>
	);
};

export default LoadingCircle;
