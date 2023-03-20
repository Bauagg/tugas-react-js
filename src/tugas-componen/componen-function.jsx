const Componen = (props) => {
    return (
        <div>
            <h1>Componen ini terbuat dari function</h1>
            <p>{props.paragraf}</p>
            <button onClick={() => props.clickButton()}>Click My</button>
        </div>
    )
}

export default Componen;