import React, { FC } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styles from './recommendations.module.css';

interface SearchedPodcast {
	title_original?: string;
}

interface Recommendation {
	id: string;
	website: string;
	image: string;
	title: string;
	publisher: string;
	description: string;
}

interface RecomProps {
	searchedPodcast: SearchedPodcast;
	recommendationsList: Recommendation[];
	emptyResults: boolean;
	handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Recommendations: FC<RecomProps> = ({ searchedPodcast, recommendationsList, emptyResults, handleClick }) => {
	return (
		<section id="results">
			<div className="wrapper">
				{emptyResults ? (
					<p className={styles.paddedText}>
						Sorry! We couldn't find recommendations for that search. Please try again.
					</p>
				) : (
					<>
						<h2>Based on your interest in {searchedPodcast.title_original}, we'd recommend:</h2>
						<ul>
							{recommendationsList.map((recommendation: Recommendation) => {
								return <Card key={recommendation.id} podcast={recommendation} />;
							})}
						</ul>
					</>
				)}
				<div className={styles.paddedText}>
					<a href="#search" onClick={handleClick} className="button">
						Start Over
					</a>
				</div>
			</div>
		</section>
	);
};

Recommendations.propTypes = {
	searchedPodcast: PropTypes.object.isRequired,
	recommendationsList: PropTypes.array.isRequired,
	emptyResults: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default Recommendations;
