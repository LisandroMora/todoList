import styled from "@emotion/styled";

export const FormS = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: #000000b3;

    &.open {
        z-index: 3;
        opacity: 1;
    }
    
    .form-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        height: 100%;
        max-width: 500px;
        max-height: 300px;
        background-color: #fafafa;
        border-radius: 10px;
        padding: 20px;
        input{
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: 0 10px;
            font-size: 1.2rem;
            &:focus{
                outline: none;
            }
        }
        textarea{
            width: 100%;
            height: 100px;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: 10px;
            font-size: 1.2rem;
            &:focus{
                outline: none;
            }
        }
        &__inputs{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        &__buttons{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 10px;
            button{
                width: 100%;
                height: 40px;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding: 0 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                &.cancel{
                    background-color: #ccc;
                    color: #000;
                    &:hover{
                        filter: brightness(0.8);
                    }
                }
                &.save{
                    background-color: #1c2541;
                    color: #fafafa;
                    &:hover{
                        filter: brightness(1.2);
                    }
                }
            }
        }
    }
`;