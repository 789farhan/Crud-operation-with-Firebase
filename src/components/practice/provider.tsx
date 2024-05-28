'use client'

import { MainStore } from './store/store';

import React from 'react'

import { Provider } from 'react-redux';

export  function ProviderComp({children}:any) {

    return <Provider store={MainStore}>{children}</Provider>

}
