import styled from "@emotion/styled";

export const TaskS = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 10px 20px;
    gap: 20px;
    background-color: #ffffffc7;
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s ease;
    .info{
        width: 100%;
        &__date{
            font-size: 12px;
            color: #3a506b;
            svg{
                margin-right: 2px;
                width: 10px;
                height: 10px;
            }
        }
    }
    .complete, .fav{
        svg{
            width: 30px;
            height: 30px;
            color: #5bc0be;
        }
    }
    
    &:hover{
        background-color: #ffffff;
        transform: scale(1.02);
    }

`;

export const TasksContainerS = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin-top: 30px;
`;