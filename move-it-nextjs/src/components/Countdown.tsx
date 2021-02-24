import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';

import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export const Countdown: React.FC = () => {
	const [time, setTime] = useState<number>(0.05 * 60); // 25 * 60 = 25 minutos
	const [isActive, setIsActive] = useState<boolean>(false);
	const [hasFinished, setHasFinished] = useState<boolean>(false);

	const challengeContext = useContext(ChallengeContext);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			challengeContext.startNewChallenge();
		}
	}, [isActive, time]);

	function startCountdown() {
		setIsActive(true);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setIsActive(false);
		setTime(0.05 * 60);
	}

	return (
		<div styles={{ display: 'flex', flexDirection: 'column' }}>
			<div className={styles.countdownContainer}>
				<Head>
					<title>Início - Move it</title>
				</Head>

				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>

				<span>:</span>

				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinished ? (
				<button disabled className={styles.countdownButton}>
					Ciclo encerrado
				</button>
			) : isActive ? (
				<button
					type="button"
					className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
					onClick={resetCountdown}
				>
					Abandonar ciclo
				</button>
			) : (
				<button type="button" className={styles.countdownButton} onClick={startCountdown}>
					Iniciar um ciclo
				</button>
			)}
		</div>
	);
};
