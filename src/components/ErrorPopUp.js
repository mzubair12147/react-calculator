export default function ErrorPopUp({ message, onClosePopUP }) {
    return (
        <div className="error-pop">
            <span className="error-close" onClick={onClosePopUP}>
                &#x2715;
            </span>
            <p className="error-msg">{message}</p>
        </div>
    );
}
