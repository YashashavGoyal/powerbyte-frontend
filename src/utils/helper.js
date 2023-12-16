import { useNavigate } from 'react-router-dom';


function isUserLoggedin() {
  const user = localStorage.getItem('user');
  if (user) {
    return true;
  } else {
    return false;
  }
}
function LocateSign() {
      const navigate = useNavigate();
      if (!isUserLoggedin()) {
          navigate('/login');
        }
    }

export default LocateSign;