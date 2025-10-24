import { IoIosLogOut } from 'react-icons/io';
import style from './LeaveOutBtn.module.scss';
import { useNavigate } from 'react-router-dom';
export function LeaveOutBtn() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/')} className={style.leaveOutBtn}>
            <IoIosLogOut />
            <span>Выйти</span>
        </button>
    )
}
