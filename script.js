let MyFirstReactComponent = ()=>{


    const mboxStyle = {
        backgroundColor: 'white',
        margin: 'auto',
        marginTop : '5%',
        width: '800px',
        borderRadius: '8px'
    };

    const textStyle = {
        paddingLeft : '40px',
        marginBottom : '2%',
        fontSize : '20px',
        paddingRight : '40px'
    };

    const mbtm = {
        marginBottom : '3%'
    }


    return (
        <div style={mboxStyle}>
        <h1 style ={{paddingTop : '5%' , paddingLeft: '40px'}}>Topics Covered</h1>
        <p style ={textStyle}>The following is a list of all the topics we cover in the MDN learning area.</p>
        <a style ={textStyle} href='#'>Getting started with the web</a>
        <p style ={textStyle}>Provides a practical introduction to web development for complete beginners.</p>
        <a style ={textStyle} href='#'>HTML-Structuring the web</a>
        <p style ={textStyle}>HTML is a language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
        <a style ={textStyle} href = '#'>CSS - Styling the web</a>
        <p style ={{...textStyle , paddingBottom : '5%'}}>CSS is the language that we useto control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprenshive coverage of CSS.</p>
        </div>
    )
}

ReactDOM.render(<MyFirstReactComponent/> , document.querySelector('#react-root'));