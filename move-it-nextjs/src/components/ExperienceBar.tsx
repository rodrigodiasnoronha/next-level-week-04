import React, { useContext } from 'react';

import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ExperienceBar.module.css';

export const ExperienceBar: React.FC = () => {
	const challengeContext = useContext(ChallengeContext);

	const percentToNextLevel = Math.round(
		(challengeContext.currentExperience * 100) / challengeContext.experienceToNextLevel
	);

	return (
		<header className={styles.experienceBar}>
			<span>0 xp</span>

			<div>
				<div style={{ width: `${percentToNextLevel}%`, backgroundColor: 'var(--green)' }}></div>

				<span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
					{challengeContext.experienceToNextLevel} xp
				</span>
			</div>

			<span>{challengeContext.experienceToNextLevel} xp</span>
		</header>
	);
};
