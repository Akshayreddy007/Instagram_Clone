import React from 'react';
import "./Suggestion.css";
import { Avatar } from '@mui/material';

function Suggestion() {
  return (
    <div className='suggestions'>
        <div className='suggestions__title'>
            <div className='suggestions__left'>Suggestions for you</div>
            <div className='suggestions__right'>See All</div>
        </div>
        <div className='suggestions__usernames'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar>R</Avatar>
                </span>
                <div className='username__info'>
                    <span className='username'>Akshay_</span>
                    <span className='relation'>New to Instagram</span>
                </div>
            </div>
            <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestions__usernames'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar>R</Avatar>
                </span>
                <div className='username__info'>
                    <span className='username'>Akshay_</span>
                    <span className='relation'>New to Instagram</span>
                </div>
            </div>
            <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestions__usernames'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar>R</Avatar>
                </span>
                <div className='username__info'>
                    <span className='username'>Akshay_</span>
                    <span className='relation'>New to Instagram</span>
                </div>
            </div>
            <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestions__usernames'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar>R</Avatar>
                </span>
                <div className='username__info'>
                    <span className='username'>Akshay_</span>
                    <span className='relation'>New to Instagram</span>
                </div>
            </div>
            <button className='follow_button'>Follow</button>
        </div>
    </div>
  )
}

export default Suggestion