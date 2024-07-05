export default function ClearDisplayBar({ onClearExpression }) {
    return (
        <button onClick={onClearExpression} className="btn ctrl-btn">
            Clear
        </button>
    );
}
