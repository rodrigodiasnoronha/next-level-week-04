import React, { createContext, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
	type: 'body' | 'eye';
	description: string;
	amount: number;
}

interface ChallengeContextProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	activeChallenge: Challenge;
	experienceToNextLevel: number;
	levelUp: () => void;
	startNewChallenge: () => void;
	resetChallenge: () => void;
}

export const ChallengeContext = createContext<ChallengeContextProps>({} as ChallengeContextProps);

export const ChallengeContextProvider: React.FC = ({ children }) => {
	const [level, setLevel] = useState<number>(1);
	const [currentExperience, setCurrentExperience] = useState<number>(0);
	const [challengesCompleted, setChallengesCompleted] = useState<number>(0);

	const [activeChallenge, setActiveChallenge] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	function levelUp() {
		setLevel(++level);
	}

	function startNewChallenge() {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex] as Challenge;

		setActiveChallenge(challenge);
	}

	function resetChallenge() {
		setActiveChallenge(null);
	}

	return (
		<ChallengeContext.Provider
			value={{
				level,
				levelUp,
				currentExperience,
				challengesCompleted,
				startNewChallenge,
				activeChallenge,
				resetChallenge,
				experienceToNextLevel,
			}}
		>
			{children}
		</ChallengeContext.Provider>
	);
};
