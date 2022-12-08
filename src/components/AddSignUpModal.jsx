import { useState, useEffect } from 'react';
import axios from 'axios';

const SIGNUP_URL = `https://frontend-take-home.fetchrewards.com/form`;

export default function AddSignUpModal() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [state, setState] = useState('');
    
    //send our form off to the url
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(SIGNUP_URL, 
                JSON.stringify({name, email, password, occupation, state}),
                {
                    headers: { 'Content-Type': 'application/json'}
                }
            );
            //TODO: Remove console logs before deployment
            console.log(response.data);
            console.log(JSON.stringify(response));
            alert('We have your info! Please login and start earning rewards!');

            //clear the inputs after the form works
            setName('');
            setEmail('');
            setPassword('');
            setOccupation('');
            setState('');

        }catch (err) {
            if (!err.response) {
                alert('No Server Response');
            }else {
                alert('Registration Failed');
            }
            //TODO: Remove console logs before deployment
            console.log('Who broke this?!')
        }
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(
            `https://frontend-take-home.fetchrewards.com/form`
            );
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
        };
            getData();
    }, []);

    return (
        <>
            { !loading && !error && (
                <>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addSignUpModal">
                        <div className='d-flex align-items-center'>
                            <div>Sign Up</div>
                        </div>
                    </button>

                    <div className="modal fade" id="addSignUpModal" aria-labelledby="addSignUpModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addSignUpModalLabel">Sign Up</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className='form-label'>Full Name</label>
                                        <input type='text' className='form-control' id='name' value={name} onChange={ (e) => setName(e.target.value) }/>
                                    </div>
                                    <div className="mb-3">
                                        <label className='form-label'>Email</label>
                                        <input type='email' className='form-control' id='email' value={email} onChange={ (e) => setEmail(e.target.value) }/>
                                    </div>
                                    <div className="mb-3">
                                        <label className='form-label'>Password</label>
                                        <input type='text' className='form-control' id='password' value={password} onChange={ (e) => setPassword(e.target.value) }/>
                                    </div>
                                    <div className="mb-3">
                                        <label className='form-label'>Occupation</label>
                                        <select id='occupation' className='form-select' value={occupation} onChange={ (e) => setOccupation(e.target.value)}>
                                            <option value="">Select Occupation</option>
                                                { data.occupations.map((occupation) => (
                                                    <option key={occupation} value={occupation}>
                                                        {occupation}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>State</label>
                                        <select id="state" className='form-select' value={state} onChange={(e) => setState(e.target.value)}>
                                            <option value="">Select State</option>
                                                { data.states.map((states) => (
                                                    <option key={states.name} value={state.name}>
                                                        {states.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    
                                    {/* disable button if missing field completion */}
                                    <button disabled={name==='' || email==='' || password==='' || occupation==='' || state===''}type='submit' data-bs-dismiss='modal' className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </>
            )}
        </>
    )
}
