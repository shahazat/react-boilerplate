import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title" >Boiler plate</h1>
                <p>Boiler plate description </p>
                <button className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    );
}

const mapDispatch2Props = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatch2Props)(LoginPage);
// export default LoginPage;