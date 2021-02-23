import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/components/Countdown.module.css';

export const Countdown: React.FC = () => {
	const [time, setTime] = useState<number>(25 * 60); // 25 * 60 = 25 minutos
	const [active, setActive] = useState<boolean>(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	useEffect(() => {
		if (active && time > 0) {
			setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		}
	}, [active, time]);

	function startCountdown() {
		setActive(true);
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

			<button type="button" className={styles.countdownButton} onClick={startCountdown}>
				Iniciar um ciclo
			</button>
		</div>
	);
};
