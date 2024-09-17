import { react } from 'react';
import withAuthRedirect from '../../Components/withAuthRedirect';

function CContact() {
    return (
        <div className="p-5">
            <h2>CContact</h2>
        </div>
    );
}

export default withAuthRedirect(CContact);