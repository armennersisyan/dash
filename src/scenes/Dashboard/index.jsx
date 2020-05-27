import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getUsersRequest from '../../store/actions/users';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <div>
      Dashboard
    </div>
  );
}

export default Dashboard;
