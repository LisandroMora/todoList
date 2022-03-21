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
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 500px;
        max-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #0b132b;
        border-radius: 10px;
        padding: 20px;


        &__info{
            width: 100%;
            color: white;
            .date{
                font-size: 1.2rem;
                color: #8c8c8c;
                width: 100%;
            }
        }

        &__buttons{
            width: 100%;
            display: flex;
            gap: 10px;
            justify-content: space-between;
            button{
                width: 100%;
                height: 40px;
                border-radius: 5px;
                border: none;
                background-color: #0b132b;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.5s ease-in-out;
                &:hover{
                    filter: brightness(90%);
                }
            }
            .edit{
                background-color: #5bc0be;
            }
            .delete{
                background-color: #b7094c;
            }
        }

        .close{
            position: absolute;
            top: 10px;
            right: 10px;
            button{
                background-color: #caf0f8;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 20px;
                cursor: pointer;
                transition: all 0.5s ease-in-out;
                &:hover{
                    filter: brightness(0.8);
                }
            }
        }
    }
`;