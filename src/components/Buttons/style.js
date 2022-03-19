import styled from "@emotion/styled";

export const NewTaskS = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 20px;
    left: 0;
    width: 100%;
    .container{
        display: flex;
        gap: 10px;
        align-items: center;
        background-color: #0b132b9e;
        padding: 20px;
        width: 90%;
        margin: auto;
        color: white;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
            background-color: #0b132b;
        }
    }
`;