'use client';

import {FormEvent, ReactElement} from 'react';

import Image from 'next/image';

import contactUsShadow from '@/assets/shadows/contact-us.svg';

import styles from './form.module.scss';

export default function FormComponent(): ReactElement {
    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log('formData', formData);
    };

    return (
        <div className={styles.container}>
            <Image className={styles.shadow} src={contactUsShadow} alt="" />
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <label>
                    <span className={styles.title}>
                        Full Name<span className={styles.asterisk}>*</span>
                    </span>
                    <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                    <span className={styles.title}>
                        Email<span className={styles.asterisk}>*</span>
                    </span>
                    <input type="email" name="email" autoComplete="email" placeholder="example@gmail.com" required />
                </label>
                <label>
                    <span className={styles.title}>
                        Phone number <span className={styles.optional}>(optional)</span>
                    </span>
                    <input type="tel" name="tel" autoComplete="tel" placeholder="+123456789" />
                </label>
                <label>
                    <span className={styles.title}>
                        Description <span className={styles.optional}>(optional)</span>
                    </span>
                    <textarea rows={5}></textarea>
                </label>
                <button>Send</button>
            </form>
        </div>
    );
}
