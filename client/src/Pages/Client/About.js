import { react } from 'react';
import withAuthRedirect from '../../Components/withAuthRedirect';

function CAbout() {
    return (
        <div className="p-5">
      <h2>CAbout</h2>
    </div>
    );
}

export default withAuthRedirect(CAbout);