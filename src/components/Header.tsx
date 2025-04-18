'use client'

import React from 'react';
import NavBar from '@/components/NavBar';

export const Header = () => {
    return (
        <>     
            <header className='text-center'>
                <NavBar />                
                <h1 className='text-4xl pt-20 font-bold'>Mi titulo</h1>
                <p className='p-3'>Sub Titulo</p>
                <br />
            </header>
        </>
    );
}