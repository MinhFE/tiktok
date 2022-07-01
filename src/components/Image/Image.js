import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, atl, className, fallback: customFullback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleEror = () => {
        setFallback(customFullback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={atl}
            {...props}
            onError={handleEror}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    atl: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;
