import PropTypes from 'prop-types'
import Header from '../components/Header'
import Siderbar from '../components/Siderbar';
import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = className.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Siderbar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;