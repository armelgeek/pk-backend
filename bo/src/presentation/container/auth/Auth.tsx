import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Signin } from './Signin';
import { Signup } from './Signup';
import logo from '../../../assets/img/logo.png';
import { Card } from '../../component/Card';
import { RootState } from '../../../redux/ducks';

export const Auth = () => {
  const {
    isLogin,
    credentials: { accessToken },
  } = useSelector(({ auth }: RootState) => auth);
  const history = useHistory();

  React.useEffect(() => {
    if (accessToken) {
      history.replace('/app');
    }
  });

  return (
    <div className="h-full">
      <div className="custom-container w-full flex items-center justify-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <img className="w-32" alt="PokerApply logo" src={logo} />
          </div>
          <Card className="w-full">
            {isLogin ? <Signin /> : <Signup />}
          </Card>
        </div>
      </div>
    </div>
  );
};
