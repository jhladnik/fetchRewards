import { useState } from 'react';

export default function LoginModal(){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  //send our form off to the url
  const handleSubmit = async (e) => {
      e.preventDefault();
  }

  return (
    <>
         <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#loginModal">
            <div className='d-flex align-items-center'>
                <div>Login</div>
            </div>
        </button>

        <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="loginModalLabel">Sign Up</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className='form-label'>Full Name</label>
                            <input type='text' className='form-control' id='name' value={user} onChange={ (e) => setUser(e.target.value) }/>
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Password</label>
                            <input type='text' className='form-control' id='password' value={password} onChange={ (e) => setPassword(e.target.value) }/>
                        </div>
                        
                        {/* disable button if missing field completion */}
                        <button disabled={user==='' || password===''}type='submit' data-bs-dismiss='modal' className="btn btn-secondary">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}