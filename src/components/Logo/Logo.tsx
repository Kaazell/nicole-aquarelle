import React from 'react';
import s from './style.module.scss';

const Logo: React.FC = () => {
    return (
        <div className={s.logo}>
            <h1>REBOOT WEB<span className={s.underscore}>_</span></h1>
            <p>Un web plus simple, un savoir plus grand</p>
        </div>
    );
};

export default Logo;