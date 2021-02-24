import React, { useContext } from 'react';

import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/CompletedChallenges.module.css';

export const CompletedChallenges: React.FC = () => {
	const challengeContext = useContext(ChallengeContext);

	return (
		<div className={styles.completedChallengesContainer}>
			<span>Desafios completos</span>
			<span>{challengeContext.challengesCompleted}</span>
		</div>
	);
};
