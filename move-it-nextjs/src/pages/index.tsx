import React from 'react';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import styles from '../styles/components/Home.module.css';

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<ExperienceBar />

			<section>
				<div>
					<Profile />
					<CompletedChallenges />
					<Countdown />
				</div>
				<div></div>
			</section>
		</div>
	);
};

export default Home;
