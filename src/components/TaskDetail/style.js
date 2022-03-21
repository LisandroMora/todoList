import styled from "@emotion/styled";

export const TaskDetailS = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: -1;
    opacity: 0;
    background-color: #000000b3;
    transition: all 0.5s ease-in-out;

    &.show {
        z-index: 5;
        opacity: 1;
    }
    .task-content{
        width: 100%;
        height: 100%;
        max-width: 600px;
        max-height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #caf0f8;
        border-radius: 10px;
        padding: 20px;
    }
`;