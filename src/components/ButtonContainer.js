export default function ButtonContainer({ handleClick, children }) {
    return (
        <div className="btn-container" onClick={handleClick}>
            {children}
        </div>
    );
}
