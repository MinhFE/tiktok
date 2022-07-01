import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import className from 'classnames/bind'
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-items', { active: nav.isActive})}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
}

export default MenuItem;
