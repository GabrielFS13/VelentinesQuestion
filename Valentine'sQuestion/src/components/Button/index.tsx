import styled from "styled-components"

interface IButton{
    children: React.ReactNode,
    onClick: () => void,
    clicks: number,
    resize: boolean
}

interface IPropsButton{
    tamanho: number,
    resize: boolean
}

export default function Button({children, onClick, clicks, resize} : IButton){
    const StyledButton = styled.button<IPropsButton>`
        font-size: ${props => !props.resize ? "auto" : 16}px;
        cursor: pointer;
        padding: 8px;
        width: ${props => props.resize ? 100 + props.tamanho * 20: 100}px;
        height: 75px;
        position: absolute;
        left: ${props => props.resize ? 0 : 100}px;
        border-radius: 6px;
        border: none;
        outline: none;
        background-color: ${props => props.resize ? 'green' : 'red'};
        color: white;
    `
    return(
        <StyledButton onClick = {onClick} tamanho={clicks} resize={resize}>
            {children}
        </StyledButton>
    )
}