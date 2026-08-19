import SideBar from "../components/Layout/SideBar";
import EmailNotVerified from '@/components/Layout/EmailNotVerified';
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from "../components/Layout/Container";

function Home() {
    const [verify, setVerify] = useState(false);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate();
    const data = useSelector(state => state.userInfo.value);

    useEffect(() => {
        if (!data) {
            navigate("/login");
        }
    }, [data, navigate]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                setVerify(true);
            } else {
                setVerify(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    if (loading) return null;

    return (
        <>
            {verify ? (
                <Container>
                    <SideBar />
                </Container>
            ) : (
                <EmailNotVerified />
            )}
        </>
    );
}

export default Home;