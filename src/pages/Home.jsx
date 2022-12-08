import AddSignUpModal from "../components/AddSignUpModal";
import LoginModal from "../components/LoginModal";

export default function Home() {

  return (
    <>
        <div className="d-flex gap-3 flex-row justify-content-center align-items-center mt-5">
           <AddSignUpModal />
           <LoginModal />
        </div>
    </>
  )
}
