import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import { useAuth } from '../../Contexts/authContext';

function Navbar() {
    const navigate = useNavigate();
    const authContext = useAuth();

    return (

        <Menu inverted>
            <Container>
                <Menu.Item as={Link} to="/">Anasayfa</Menu.Item>
                <Menu.Item as={Link} to="/posts">Postlar</Menu.Item>
                {!authContext.isAuthenticated && <Menu.Item as={Link} to={'/Login'}>Giriş Yap</Menu.Item>}
            </Container>

        </Menu>
    )
}

export default Navbar