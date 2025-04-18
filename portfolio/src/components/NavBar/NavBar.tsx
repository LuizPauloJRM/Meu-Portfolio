import { AppBar, Menuitem, Toolbar, styled } from "@mui/material"



const NavBar = () => {
    const StyledToobar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
    }));

    return (
        <>

            <AppBar position="static">
                <StyledToobar>
                    <menuItem>About</menuItem>
                    <menuItem>Skills</menuItem>
                    <menuItem>Projects</menuItem>
                </StyledToobar>

            </AppBar>
        </>
    )
}

export default NavBar
