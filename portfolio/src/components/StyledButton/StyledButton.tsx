import { styled } from "@mui/material";
import React from "react";
interface StyledButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}
// Obtém o tema do Material-UI
const StyledButtonComponent: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "inline-flex",
        gap: "10px",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    }));

    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default StyledButtonComponent;