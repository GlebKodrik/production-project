import { useDispatch } from 'react-redux';
import { TAppDispatch } from 'redux-stores/root-store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
