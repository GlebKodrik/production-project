import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../../redux/root-store';

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
