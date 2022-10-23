import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook ,FaTwitch, FaTwitter, FaDiscord , FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const signInToGoogle = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error =>
            console.error(error)
        )
    }

    return (
        <div>
            <ButtonGroup className='mb-5' vertical>
                <Button onClick={signInToGoogle} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h4>Find On Us</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-5'><FaDiscord/> Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;