import { Link } from 'react-router-dom';


function Home() {
    return ( <
        div style = {
            { 'textAlign': 'left' } } >
        <
        h2 > Home Page < /h2> <
        ul >
        <
        li >
        My name is < b > Eliezer Polidor < /b>, Job in remotely how DEVELOPER WEB, live in Venezuela, <
        /li> <
        li >
        Specialize in HTML, CSS, JAVACRIPT REACTJS, NODEJS AND C#; my English level is basic <
        /li> <
        li >
        This is a sample App of use of this < b > React < /b> packages: <
        b > React Router v6: < /b> Client-side routing /
        Redux. <
        li > You can test the use of this package by clicking the <
        Link to = 'invoices'
        style = {
            { color: 'red' } } >
        INVOICES <
        /Link> 
        or in < Link to = 'todoListRecoil'
        style = {
            { color: 'red' } } >
        PURCHASE ORDER <
        /Link> on the Navbar.</li >
        <
        /li> <
        li >
        Sorry this is an demo, some options this in Construction <
        /li> <
        li >
        If want can download the program in my repository <
        a href = "https://github.com/eliezerpolidor/InvocesSystem.git"
        target = "_blank" >
        https: //github.com/eliezerpolidorl
        <
        /a> &nbsp; | &nbsp;

        <
        /li> <
        /ul> <
        /div>
    );
}

export default Home;