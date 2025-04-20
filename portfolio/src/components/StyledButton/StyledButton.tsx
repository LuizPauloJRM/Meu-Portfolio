import { styled } from "@mui/material";
import React from "react";

interface StyledButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

// Obtém o tema do Material-UI
const StyledButtonComponent: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.dark}`,
        borderRadius: "8px", // Bordas arredondadas
        padding: "10px 20px", // Espaçamento interno maior
        fontSize: "16px", // Tamanho da fonte
        fontWeight: "bold", // Peso da fonte
        //color: theme.palette.primary.contrastText, // Cor do texto
        cursor: "pointer", // Cursor de ponteiro
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        transition: "all 0.3s ease", // Transição suave
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark, // Cor de fundo no hover
            color: theme.palette.secondary.contrastText, // Cor do texto no hover
            transform: "scale(1.05)", // Efeito de escala no hover
        },
        "&:active": {
            transform: "scale(0.95)", // Efeito de clique
        },
        "&:focus": {
            outline: `2px solid ${theme.palette.secondary.light}`, // Foco visível
        },
    }));

    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default StyledButtonComponent;