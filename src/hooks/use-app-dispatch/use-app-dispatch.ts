import { useDispatch } from 'react-redux';
import { TAppDispatch } from '@stores/root-store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
