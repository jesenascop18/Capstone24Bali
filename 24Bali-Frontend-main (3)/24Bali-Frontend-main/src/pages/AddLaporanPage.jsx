import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import Layout from './Layout';
import AddLaporan from '../component/AddLaporan';

const AddLaporanPage = () => {
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
      <AddLaporan/>
    </Layout>
  )
}

export default AddLaporanPage
