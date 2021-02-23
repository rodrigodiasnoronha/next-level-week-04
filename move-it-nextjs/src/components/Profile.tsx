import React from 'react';
import styles from '../styles/components/Profile.module.css';

export const Profile: React.FC = () => {
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/diego3g.png" alt="Foto de Perfil" />

			<div>
				<strong>Diego Fernandes</strong>
				<p>
					<img src="icons/level.svg" alt="Level icon" />1
				</p>
			</div>
		</div>
	);
};
