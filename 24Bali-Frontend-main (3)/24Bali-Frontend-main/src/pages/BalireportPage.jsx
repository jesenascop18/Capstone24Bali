import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import Layout from './Layout';
import Balireport from '../component/Balireport';

const BalireportPage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { isError } = useSelector((state) => state.auth);
     useEffect(() => {
       dispatch(getMe());
     }, [dispatch]);

     useEffect(() => {
       if (isError) {
         navigate("/login");
       }
     }, [isError, navigate]);
  return (
    <Layout>
      <Balireport/>
    </Layout>
  )
}

export default BalireportPage
