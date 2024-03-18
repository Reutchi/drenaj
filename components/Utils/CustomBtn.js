import React, { useState } from 'react';
import { gsap } from 'gsap';
import Styles from '../css/custom-btn.module.scss';

const CustomBtn = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [buttonText, setButtonText] = useState("Отправить");

    const handleButtonClick = () => {
        if (!isDone) {
            if (!isAnimating) {
                setIsAnimating(true);

                gsap.to('--box-s', { value: 1, duration: 0.3, delay: 0.5 });
                gsap.to('.' + Styles.box, { x: 0, duration: 0.4, delay: 0.7 });
                gsap.to('.' + Styles.truckButton, { '--hx': -5, '--bx': 50, duration: 0.18, delay: 0.92 });
                gsap.to('.' + Styles.box, { y: 0, duration: 0.1, delay: 1.15 });

                gsap.set('.' + Styles.truckButton, { '--truck-y': 0, '--truck-y-n': -26 });
                gsap.to('.' + Styles.truckButton, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: 0.2,
                    delay: 1.25,
                    onComplete: () => {
                        gsap.timeline({
                            onComplete: () => {
                                setIsAnimating(false);
                                setIsDone(true);
                                setButtonText("Отправленно"); // Actualizăm textul butonului
                            },
                        })
                            .to('.' + Styles.truck, { x: 0, duration: 0.4 })
                            .to('.' + Styles.truck, { x: 40, duration: 1 })
                            .to('.' + Styles.truck, { x: 20, duration: 0.6 })
                            .to('.' + Styles.truck, { x: 96, duration: 0.4 });

                        gsap.to('.' + Styles.truckButton, { '--progress': 1, duration: 2.4, ease: 'power2.in' });
                    },
                });
            }
        } else {
            setIsAnimating(false);
            setIsDone(false);
            setButtonText("Отправить");

            gsap.set('.' + Styles.truck, { x: 4 });
            gsap.set('.' + Styles.truckButton, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': 0.5,
                '--truck-y': 0,
                '--truck-y-n': -26,
            });
            gsap.set('.' + Styles.box, { x: -24, y: -6 });
        }
    };

    return (
        <button className={`${Styles.truckButton} ${isAnimating && Styles.animation} ${isDone && Styles.done}`} onClick={handleButtonClick}>
            <span className={Styles.default}>{buttonText}</span>
            <span className={Styles.success}>
                Order Placed
                <svg viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
            <div className={Styles.truck}>
                <div className={Styles.wheel}></div>
                <div className={Styles.back}></div>
                <div className={Styles.front}></div>
                <div className={Styles.box}></div>
            </div>
        </button>
    );
};

export default CustomBtn;
