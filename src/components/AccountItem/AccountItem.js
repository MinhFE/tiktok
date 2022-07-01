import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

const cx = className.bind(styles);

function AccountItem({ result }) {
    return (
        <Link to={`/@${result.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={result.avatar} alt={result.nickname} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>{result.full_name}</h4>
                    {result.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{result.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propsTypes = {
    result: PropTypes.object.isRequired,
}

export default AccountItem;
