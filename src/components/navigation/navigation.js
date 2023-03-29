import Nav from 'react-bootstrap/Nav';

export default function Navigation(props) {
    return (
        <Nav
            className={props.className}    
        activeKey="/home"
            onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
        >
            <Nav.Item >
                <Nav.Link href="/resume/main">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="resume/blog" >Blog</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}