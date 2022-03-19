import styled from "@emotion/styled";

export const SideNavS = styled.section`
    background: #0b132b;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    gap: 50px;
    padding: 20px;
    img {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 30px;
        color: #fff;
        font-weight: bold;
        text-align: center;
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
    }

    button {
        background: none;
        border: none;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background: #fff;
            color: #0b132b;
            transform: scale(1.1);
        }
    }

    
`;