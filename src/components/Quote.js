import styled from "styled-components"

const Blockquote = styled.blockquote`
    
    width: 20%;
    margin: 0;
    padding: 15px;
    background: #eee;
    border-radius: 5px;
    text-align: center;
    font-size: 1.3em;
    font-style: italic;
`
const Figcaption = styled.figcaption`
    width: 20%;
    padding: 15px;
    font-size: 1.3em;
    text-align: center;
    font-style: italic;
    color: #5A5A5A;
`

const Quote = ({ by, source, children}) => {
    return (
        <figure>
            <Blockquote cite={source}>
            {children}
            </Blockquote>
            <Figcaption>
                {by}
            </Figcaption>
        </figure>
    )
}



export default Quote