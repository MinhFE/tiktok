import classNames from 'classnames/bind';
import styles from './Siderbar.module.scss';
import route from '~/config';
import Menu, { MenuItem } from './Menu';
import * as Icons from '~/components/Icons';

const cx = classNames.bind(styles);

function Siderbar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={route.routes.home}
                    icon={<Icons.HomeIcon />}
                    activeIcon={<Icons.HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={route.routes.following}
                    icon={<Icons.UserGroupIcon />}
                    activeIcon={<Icons.UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={route.routes.live}
                    icon={<Icons.LiveIcon />}
                    activeIcon={<Icons.LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Siderbar;
