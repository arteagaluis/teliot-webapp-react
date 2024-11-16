'use client';
import Home from '@/components/Home';
import { connectToBroker } from '@/util/mqttClient';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
