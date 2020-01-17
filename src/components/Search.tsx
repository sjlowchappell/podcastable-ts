import React, { FC } from 'react';
import styles from './search.module.css';
import PropTypes from 'prop-types';

interface SearchProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	podcastInput: string;
}

const Search: FC<SearchProps> = ({ onSubmit, onChange, podcastInput }) => {
	return (
		<section id="search" className={styles.searchSection}>
			<div className="wrapper">
				<svg className={styles.podSVG} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<path d="m512 256c0-68.378906-26.628906-132.667969-74.980469-181.019531-48.351562-48.351563-112.636719-74.980469-181.019531-74.980469-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531 0 104.746094 64.132812 198.921875 160.664062 237.652344v3.347656c0 8.285156 6.71875 15 15 15h160.671876c8.28125 0 15-6.714844 15-15v-3.347656c96.53125-38.730469 160.664062-132.90625 160.664062-237.652344zm-204.71875 80.332031c26.472656-16.957031 44.054688-46.628906 44.054688-80.332031 0-52.566406-42.769532-95.335938-95.335938-95.335938s-95.335938 42.769532-95.335938 95.335938c0 33.703125 17.582032 63.375 44.054688 80.332031-14.460938 9.261719-26.261719 22.320313-33.996094 37.753907-37.617187-27.207032-60.386718-71.023438-60.386718-118.085938 0-80.320312 65.34375-145.667969 145.664062-145.667969s145.664062 65.347657 145.664062 145.667969c.003907 47.0625-22.765624 90.878906-60.386718 118.089844-7.734375-15.4375-19.535156-28.496094-33.996094-37.757813zm-116.617188-80.332031c0-36.023438 29.3125-65.335938 65.335938-65.335938s65.335938 29.3125 65.335938 65.335938-29.3125 65.332031-65.335938 65.332031-65.335938-29.308593-65.335938-65.332031zm130.671876 226h-130.671876v-65.335938c0-36.023437 29.3125-65.332031 65.335938-65.332031s65.335938 29.308594 65.335938 65.332031zm30-21.027344v-44.308594c0-4.261718-.289063-8.457031-.832032-12.574218 50.324219-32.160156 81.164063-87.929688 81.160156-148.089844 0-96.863281-78.800781-175.667969-175.664062-175.667969s-175.664062 78.804688-175.664062 175.667969c0 60.160156 30.839843 115.929688 81.160156 148.089844-.546875 4.117187-.832032 8.3125-.832032 12.574218v44.308594c-78.960937-36.75-130.664062-116.597656-130.664062-204.972656 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 88.375-51.703125 168.222656-130.664062 204.972656zm0 0" />
				</svg>
				<p className={styles.description}>
					Have a favorite podcast? Want to find more podcasts with a similar sound, production value, or vibe?
					With Podcastable, you can search your favorite podcast to find a list of other recommended podcasts.
				</p>

				<form className={styles.formContainer} onSubmit={onSubmit}>
					<label htmlFor="podcastInput">Enter the name of your favorite podcast below:</label>
					<input
						type="text"
						placeholder="Heavyweight"
						name="podcastInput"
						onChange={onChange}
						value={podcastInput}
						id="podcastInput"
						className={styles.formInput}
					/>
					<button className="button" type="submit">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

Search.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	podcastInput: PropTypes.string.isRequired,
};

export default Search;
