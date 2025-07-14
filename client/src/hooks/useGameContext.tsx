import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export function useGameContext() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameContext must be used inside GameProvider');
  return ctx;
}