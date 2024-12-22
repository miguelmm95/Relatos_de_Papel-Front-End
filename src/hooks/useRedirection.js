import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirection = (path, delay) => {
    const navigate = useNavigate();         // React Hook "useNavigate" cannot be called inside a callback.

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(path);          
        },delay);

    }, [navigate, path, delay]);
};

export default useRedirection;