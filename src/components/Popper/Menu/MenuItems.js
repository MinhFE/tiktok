import PropTypes from 'prop-types'
import className from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = className.bind(styles);

function MenuItems({ data, onClick }) {

    const classes = cx('menu-item', {
        separate: data.separate
    })

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItems;
