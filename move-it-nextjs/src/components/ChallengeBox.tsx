import React, { useContext } from 'react';

import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ChallengeBox.module.css';

export const ChallengeBox: React.FC = () => {
	const challengeContext = useContext(ChallengeContext);

	return (
		<div className={styles.challengeBoxContainer}>
			{challengeContext.activeChallenge && (
				<div className={styles.challengeActive}>
					<header>{challengeContext.activeChallenge.amount}</header>

					<main>
						<img src={`icons/${challengeContext.activeChallenge.type}.svg`} alt="" />

						<strong>Novo desafio</strong>

						<p>{challengeContext.activeChallenge.description}</p>
					</main>

					<footer>
						<button
							onClick={challengeContext.resetChallenge}
							type="button"
							className={styles.challengeFailedButton}
						>
							Falhei
						</button>
						<button type="button" className={styles.challengeSucceededButton}>
							Completei
						</button>
					</footer>
				</div>
			)}

			{!challengeContext.activeChallenge && (
				<div className={styles.challengeNotActive}>
					<strong>Finalize um ciclo para receber um desafio</strong>

					<p>
						<img src="icons/level-up.svg" alt="level up" />
						Avance de level completando desafios.
					</p>
				</div>
			)}
		</div>
	);
};
