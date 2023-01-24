import React from "react";
import Content from "../Content";
import Header from '../Header';
import { useEffect } from 'react';
import { getSongsFetch } from 'store/slices/songSlice';
import { useDispatch } from 'react-redux';
import s from './MusicCatalogApp.module.scss';

const MusicCatalogApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Header />
      <Content />
    </div>
  )
}

export default MusicCatalogApp;