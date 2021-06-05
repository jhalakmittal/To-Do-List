import React from 'react'

export const Footer = () => {
    let footerStyle={
        
        width:"100%",
        border:"5px outset red"
    }
    return (
        <footer className="bg-dark text-white py-3" style={footerStyle}>
        <p className="text-center">
            Copyright &copy; My-Todos-List.com</p>
        </footer>
    )
}


