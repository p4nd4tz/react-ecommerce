import { useEffect } from 'react';
import { logoutAsync, selectUser } from '../authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(logoutAsync(user.id));
  }, [user]);

  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
}

export default Logout;